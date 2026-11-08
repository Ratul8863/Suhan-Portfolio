import { heroIntro } from "@/constants/projects";
import { HeroStage } from "@/components/sections/hero-stage";
import { BlockTextReveal } from "@/components/ui/block-text-reveal";

export function PortfolioHero() {
  return (
    <section
      className={
        // Mobile: full device frame (Figma 528:1207 is 390×896). Header is
        // fixed over the hero, so we do not subtract its height.
        "relative isolate h-dvh overflow-clip bg-white lg:-mt-5 lg:h-[calc(100svh-1.25rem)]"
      }
    >
      {/*
        Figma 528:1232 — left 10, top 64, width 370.
        Mobile header is fixed (~48px toggle + py-2.5 → ~68px), so keep the
        intro clear of that bar (top-14 was getting clipped under it).
        12px / 20lh / 0.36 tracking / #1e1e1e / justify / uppercase.
        Wrapper owns layout; !text-justify beats BlockTextReveal's text-left
        (cn has no tailwind-merge).
      */}
      <div className="pointer-events-none absolute top-[4.75rem] left-2.5 z-30 w-[calc(100%-1.25rem)] max-w-[370px] lg:top-5 lg:left-5 lg:max-w-[556px]">
        <BlockTextReveal
          text={heroIntro}
          textColor="#1e1e1e"
          className="font-body text-[12px] leading-5 tracking-[0.36px] !text-justify uppercase lg:text-left lg:text-[16px] lg:leading-6 lg:tracking-[0.48px]"
        />
      </div>

      <HeroStage />
    </section>
  );
}
