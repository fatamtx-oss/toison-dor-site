import Reveal from "./animations/Reveal";
import RevealImage from "./animations/RevealImage";
import RevealTitle from "./animations/RevealTitle";

const elements = [
  "une voix",
  "une typographie",
  "des images",
  "des matières",
  "une édition",
  "une présence digitale",
];

export default function PrendreForme() {
  return (
    <section
      id="prendre-forme"
      aria-labelledby="prendre-forme-title"
      className="scroll-mt-24 bg-[#E9E3D2] px-8 py-28 sm:px-12 sm:py-32 lg:px-24 lg:py-40 xl:px-36"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-8 text-[11px] uppercase tracking-[0.32em] text-[#B28A45] sm:text-xs">
            Prendre forme
          </p>
        </Reveal>

        <div className="max-w-5xl">
          <RevealTitle delay={0.1}>
            <h2
              id="prendre-forme-title"
              className="font-serif text-[2.65rem] font-normal leading-[1.08] tracking-[-0.025em] text-[#4A413B] sm:text-[3.5rem] lg:text-[4.25rem] xl:text-[4.75rem]"
            >
              Une identité ne naît pas d&apos;un logo
            </h2>
          </RevealTitle>

          <Reveal delay={0.25}>
            <p className="mt-12 max-w-4xl font-serif text-[2rem] font-normal leading-[1.16] tracking-[-0.02em] text-[#62584E] sm:mt-14 sm:text-[2.75rem] lg:text-[3.5rem]">
              Elle naît lorsque chaque détail
              <br className="hidden sm:block" />
              <span className="sm:block">
                {" "}
                raconte la même intention
              </span>
            </p>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-16 lg:mt-28 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-20 xl:gap-24">
          <RevealImage delay={0.2}>
            <div className="flex items-start gap-7 sm:gap-8">
              <div
                aria-hidden="true"
                className="mt-2 h-64 w-px shrink-0 bg-[#C9A35B]/45 sm:h-72"
              />

              <div>
                <h3 className="font-serif text-[2.4rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#4A413B] sm:text-[3rem]">
                  Une identité
                </h3>

                <p className="mt-8 max-w-xs text-[14px] leading-7 text-[#62584E] sm:mt-10">
                  Un ensemble cohérent, pensé pour être reconnu, compris et
                  durable.
                </p>
              </div>
            </div>
          </RevealImage>

          <div className="lg:pt-1">
            <ul className="space-y-6 sm:space-y-7">
              {elements.map((element, index) => (
                <li
                  key={element}
                  className="font-serif text-[1.75rem] font-normal leading-none"
                >
                  <Reveal delay={0.15 + index * 0.08}>
                    {element}
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-20 max-w-xl sm:mt-24">
            <p className="text-[14px] leading-7 text-[#62584E]">
              Lorsqu&apos;ils trouvent leur juste place, ils ne forment plus des
              éléments séparés. Ils deviennent une identité.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}