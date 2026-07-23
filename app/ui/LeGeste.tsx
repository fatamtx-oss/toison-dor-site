import Image from "next/image";

import Reveal from "./animations/Reveal";
import RevealImage from "./animations/RevealImage";
import RevealTitle from "./animations/RevealTitle";

export default function LeGeste() {
  return (
    <section
      id="geste"
      aria-labelledby="geste-title"
      className="scroll-mt-24 bg-[#F5F1E8] px-8 py-28 sm:px-12 sm:py-32 lg:px-24 lg:py-40 xl:px-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-20 xl:gap-24">
          <div className="lg:pt-4">
            <Reveal>
              <p className="mb-8 text-[11px] uppercase tracking-[0.32em] text-[#B28A45] sm:text-xs">
                Le Geste
              </p>
            </Reveal>

            <RevealTitle delay={0.1}>
              <h2
                id="geste-title"
                className="max-w-xl font-serif text-[2.65rem] font-normal leading-[1.08] tracking-[-0.025em] text-[#4A413B] sm:text-[3.5rem] lg:text-[4.25rem] xl:text-[4.75rem]"
              >
                Prendre le temps
                <br />
                de comprendre
                <br />
                avant de créer
              </h2>
            </RevealTitle>

            <Reveal delay={0.25}>
              <div className="mt-10 max-w-lg space-y-7 text-[15px] leading-8 text-[#62584E] sm:text-base">
                <p>
                  Nous commençons par observer, questionner et écouter. Ce temps
                  nous permet de distinguer l&apos;essentiel du superflu et de
                  poser une direction claire.
                </p>

                <p>
                  Chaque choix vient ensuite prolonger cette intention, avec
                  cohérence, précision et sens.
                </p>
              </div>
            </Reveal>
          </div>

          <RevealImage delay={0.2}>
            <figure className="relative overflow-hidden rounded-sm">
              <Image
                src="/images/le-geste2.jpg"
                alt="Geste créatif et travail de matière dans l’univers de Toison d’Or"
                width={1200}
                height={1600}
                sizes="(max-width: 1023px) 100vw, 56vw"
                className="h-auto max-h-[760px] w-full object-cover object-center"
              />
            </figure>
          </RevealImage>
        </div>
      </div>
    </section>
  );
}