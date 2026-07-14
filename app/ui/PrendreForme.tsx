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
      className="bg-[#E9E3D2] px-10 py-32 sm:px-14 lg:px-24 xl:px-36"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-10 text-sm uppercase tracking-[0.35em] text-[#C9A35B]">
            Prendre forme
          </p>
        </Reveal>

        <div className="max-w-5xl">
          <RevealTitle delay={0.1}>
            <h2 className="font-serif text-5xl leading-[1.06] tracking-[-0.03em] text-[#1E1E1E] sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
              Une identité ne naît pas d&apos;un logo
            </h2>
          </RevealTitle>

          <Reveal delay={0.25}>
            <p className="mt-14 max-w-4xl font-serif text-4xl leading-[1.14] tracking-[-0.025em] text-[#1E1E1E] sm:text-5xl lg:text-[3.5rem]">
              Elle naît lorsque chaque détail
              <br />
              raconte la même intention
            </p>
          </Reveal>
        </div>

        <div className="mt-28 grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <RevealImage delay={0.2}>
            <div className="flex items-start gap-8">
              <div
                aria-hidden="true"
                className="mt-2 h-72 w-px bg-[#C9A35B]/65"
              />

              <div>
                <h3 className="font-serif text-4xl leading-none tracking-[-0.025em] text-[#1E1E1E] sm:text-5xl">
                  Une identité
                </h3>

                <p className="mt-10 max-w-xs text-[14px] leading-7 text-[#1E1E1E]/55">
                  Un ensemble cohérent, pensé pour être reconnu, compris et
                  durable.
                </p>
              </div>
            </div>
          </RevealImage>

          <div className="lg:pt-1">
            <ul className="space-y-7">
              {elements.map((element, index) => (
                <Reveal key={element} delay={0.15 + index * 0.08}>
                  <li className="font-serif text-2xl leading-none tracking-[-0.015em] text-[#1E1E1E]/85 sm:text-[2rem]">
                    {element}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-24 max-w-xl">
            <p className="text-[14px] leading-7 text-[#1E1E1E]/55">
              Lorsqu&apos;ils trouvent leur juste place, ils ne forment plus des
              éléments séparés. Ils deviennent une identité.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}