import Image from "next/image";

import Reveal from "./animations/Reveal";
import RevealImage from "./animations/RevealImage";
import RevealTitle from "./animations/RevealTitle";

export default function LeGeste() {
  return (
    <section
      id="geste"
      className="bg-[#F5F1E8] px-10 py-32 sm:px-14 lg:px-24 xl:px-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Reveal>
              <p className="mb-10 text-sm uppercase tracking-[0.35em] text-[#C9A35B]">
                Le Geste
              </p>
            </Reveal>

            <RevealTitle delay={0.1}>
              <h2 className="max-w-xl font-serif text-5xl leading-[1.06] tracking-[-0.03em] text-[#1E1E1E] sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
                Prendre le temps
                <br />
                de comprendre
                <br />
                avant de créer
              </h2>
            </RevealTitle>

            <Reveal delay={0.25}>
              <div className="mt-10 max-w-xl space-y-7 text-[15px] leading-8 text-[#1E1E1E]/70">
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
            <div className="relative overflow-hidden rounded-sm">
              <Image
                src="/images/le-geste2.jpg"
                alt="Le geste créatif"
                width={1200}
                height={1600}
                className="h-full max-h-[760px] w-full object-cover object-center"
              />
            </div>
          </RevealImage>
        </div>
      </div>
    </section>
  );
}