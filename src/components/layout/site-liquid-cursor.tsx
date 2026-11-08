"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ProjectsLiquidCursor } from "@/lib/projects-liquid-cursor";

function canUseLiquidCursor() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(min-width: 1024px)").matches &&
    window.matchMedia("(any-pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Site-wide Kala liquid cursor + instant "+" crosshair.
 * Hidden over `[data-project-hit]` (Feature Projects → View Project CTA)
 * and `[data-liquid-cursor-hide]` (e.g. All Projects archive).
 */
export function SiteLiquidCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const plusRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const canvas = canvasRef.current;
    const plus = plusRef.current;
    if (!canvas || !plus) return;

    const liquid = new ProjectsLiquidCursor(canvas);
    let enabled = false;
    let resizeTimer = 0;

    const setNativeHidden = (hide: boolean) => {
      document.documentElement.style.cursor = hide ? "none" : "";
      document.body.style.cursor = hide ? "none" : "";
    };

    const setPlusVisible = (on: boolean) => {
      plus.style.opacity = on ? "1" : "0";
    };

    const syncEnabled = () => {
      enabled = canUseLiquidCursor();
      if (enabled) {
        liquid.resize();
        liquid.start();
        setNativeHidden(true);
        canvas.classList.remove("hidden");
        plus.classList.remove("hidden");
      } else {
        liquid.setPointer(0, 0, false);
        liquid.stop();
        setNativeHidden(false);
        setPlusVisible(false);
        canvas.classList.add("hidden");
        plus.classList.add("hidden");
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!enabled) return;
      const under = document.elementFromPoint(event.clientX, event.clientY);
      const overHit = Boolean(
        under instanceof Element &&
          (under.closest("[data-project-hit]") ||
            under.closest("[data-liquid-cursor-hide]")),
      );

      // Instant + — no rAF lag
      plus.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      setPlusVisible(!overHit);

      liquid.setOverHit(overHit);
      liquid.setPointer(event.clientX, event.clientY, true);
    };

    const onPointerLeave = () => {
      liquid.setPointer(0, 0, false);
      setPlusVisible(false);
    };

    const onPointerEnter = (event: MouseEvent) => {
      if (!enabled) return;
      plus.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      setPlusVisible(true);
      liquid.setPointer(event.clientX, event.clientY, true);
    };

    const onBlur = () => {
      liquid.setPointer(0, 0, false);
      setPlusVisible(false);
    };

    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        syncEnabled();
        if (enabled) liquid.resize();
      }, 140);
    };

    syncEnabled();

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onPointerLeave);
    document.documentElement.addEventListener("mouseenter", onPointerEnter);
    window.addEventListener("blur", onBlur);
    window.addEventListener("resize", onResize);

    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fineMq = window.matchMedia("(any-pointer: fine)");
    const widthMq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => syncEnabled();
    reduceMq.addEventListener("change", onMq);
    fineMq.addEventListener("change", onMq);
    widthMq.addEventListener("change", onMq);

    return () => {
      window.clearTimeout(resizeTimer);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
      document.documentElement.removeEventListener("mouseenter", onPointerEnter);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("resize", onResize);
      reduceMq.removeEventListener("change", onMq);
      fineMq.removeEventListener("change", onMq);
      widthMq.removeEventListener("change", onMq);
      setNativeHidden(false);
      liquid.dispose();
    };
  }, [ready]);

  if (!ready) return null;

  return createPortal(
    <>
      <canvas
        ref={canvasRef}
        data-site-liquid-cursor
        className="pointer-events-none fixed inset-0 z-[89] hidden lg:block"
        style={{ mixBlendMode: "difference" }}
        aria-hidden="true"
      />
      {/* Instant + crosshair — updated on pointermove, not rAF */}
      <div
        ref={plusRef}
        data-site-liquid-plus
        className="pointer-events-none fixed top-0 left-0 z-[90] hidden h-4 w-4 opacity-0 lg:block"
        style={{ mixBlendMode: "difference", willChange: "transform" }}
        aria-hidden="true"
      >
        <span className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 bg-white" />
        <span className="absolute top-0 left-1/2 h-full w-[2px] -translate-x-1/2 bg-white" />
      </div>
    </>,
    document.body,
  );
}
