import Image from "next/image";
import { SectionContainer } from "@/components/layout/section-container";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function AboutSection() {
  return (
    <SectionContainer id="about" className="py-16 md:py-24">
      <ScrollReveal>
        <h2 className="font-display text-[clamp(3rem,12vw,12.5rem)] uppercase leading-none text-navy">
          Designing With
          <br />
          Purpose
        </h2>
      </ScrollReveal>

      <div className="relative mt-10 lg:mt-14">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,452px)_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[452px_1fr]">
          <ScrollReveal>
            <div className="relative mx-auto w-full max-w-[452px] lg:mx-0">
              <Image
                src="/assets/portrait.png"
                alt="Portrait of Suhanur Rahman Mahin"
                width={904}
                height={1046}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 90vw, 452px"
                priority
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="relative lg:pt-24">
            <div className="mb-8 flex justify-start lg:absolute lg:-top-8 lg:right-0 lg:mb-0">
              <div className="flex size-[140px] items-center justify-center rounded-full bg-mist px-4 text-center font-ui text-lg text-text md:size-[208px] md:text-2xl">
                Create Impact
              </div>
            </div>
            <h3 className="max-w-[834px] font-ui text-[clamp(1.5rem,3.5vw,4rem)] leading-[1.125] text-text">
              I turn complex problems into simple, meaningful experiences.
            </h3>
            <div className="mt-[42px] max-w-[834px] space-y-4 font-body text-base leading-[1.25] text-text-muted md:text-2xl md:leading-[30px]">
              <p>
                I&apos;m a UI/UX Designer currently working as a Junior UI/UX
                Designer at Kode By Kraft, where I contribute to designing
                intuitive, purposeful, and user-centered digital experiences. My
                approach combines thoughtful UX strategy, clear interaction
                design, and refined visual systems to transform complex problems
                into simple and engaging solutions.
              </p>
              <p>
                I believe great design goes beyond aesthetics. It starts with
                understanding people, identifying the right problems, and
                creating experiences that feel natural, meaningful, and
                effortless to use. I&apos;m continuously exploring new ideas,
                refining my craft, and growing as a product designer through
                real-world challenges and collaboration.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionContainer>
  );
}
