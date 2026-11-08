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

/** Hide liquid + circle over CTAs / native buttons / existing hide zones. */
function shouldHideLiquid(under: Element | null) {
  if (!(under instanceof Element)) return false;
  return Boolean(
    under.closest(
      [
        "button",
        "[role='button']",
        "input[type='submit']",
        "input[type='button']",
        "label[for]",
        "[data-project-hit]",
        "[data-liquid-cursor-hide]",
      ].join(","),
    ),
  );
}

/**
 * Site-wide Kala liquid cursor + instant circle (no + crosshair).
 * Disabled over buttons / CTAs and existing hide markers.
 */
export function SiteLiquidCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const canvas = canvasRef.current;
    const circle = circleRef.current;
    if (!canvas || !circle) return;

    const liquid = new ProjectsLiquidCursor(canvas);
    let enabled = false;
    let resizeTimer = 0;

    const setNativeHidden = (hide: boolean) => {
      document.documentElement.style.cursor = hide ? "none" : "";
      document.body.style.cursor = hide ? "none" : "";
    };

    const setCircleVisible = (on: boolean) => {
      circle.style.opacity = on ? "1" : "0";
    };

    const syncEnabled = () => {
      enabled = canUseLiquidCursor();
      if (enabled) {
        liquid.resize();
        liquid.start();
        setNativeHidden(true);
        canvas.classList.remove("hidden");
        circle.classList.remove("hidden");
      } else {
        liquid.setPointer(0, 0, false);
        liquid.stop();
        setNativeHidden(false);
        setCircleVisible(false);
        canvas.classList.add("hidden");
        circle.classList.add("hidden");
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!enabled) return;
      const under = document.elementFromPoint(event.clientX, event.clientY);
      const overHit = shouldHideLiquid(under);

      // Instant circle — no rAF lag
      circle.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      setCircleVisible(!overHit);
      // Buttons keep the normal pointer; elsewhere hide the OS cursor.
      setNativeHidden(!overHit);

      liquid.setOverHit(overHit);
      liquid.setPointer(event.clientX, event.clientY, true);
    };

    const onPointerLeave = () => {
      liquid.setPointer(0, 0, false);
      setCircleVisible(false);
    };

    const onPointerEnter = (event: MouseEvent) => {
      if (!enabled) return;
      circle.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      const under = document.elementFromPoint(event.clientX, event.clientY);
      const overHit = shouldHideLiquid(under);
      setCircleVisible(!overHit);
      liquid.setOverHit(overHit);
      liquid.setPointer(event.clientX, event.clientY, true);
    };

    const onBlur = () => {
      liquid.setPointer(0, 0, false);
      setCircleVisible(false);
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
      {/* Instant circle tip — no + crosshair */}
      <div
        ref={circleRef}
        data-site-liquid-circle
        className="pointer-events-none fixed top-0 left-0 z-[90] hidden size-3 rounded-full bg-white opacity-0 lg:block"
        style={{ mixBlendMode: "difference", willChange: "transform" }}
        aria-hidden="true"
      />
    </>,
    document.body,
  );
}
