import Reveal from "./animations/Reveal";
import RevealTitle from "./animations/RevealTitle";

const convictions = [
  {
    title: "La justesse",
    text: "Chaque décision répond à une intention. Rien ne restera superflu.",
  },
  {
    title: "La sensibilité",
    text: "Comprendre ce qui se voit, mais aussi ce qui se ressent.",
  },
  {
    title: "La durée",
    text: "Créer aujourd’hui ce qui gardera du sens demain.",
  },
];

export default function CeQuiNousAnime() {
  return (
    <section
      id="ce-qui-nous-anime"
      aria-labelledby="convictions-title"
      className="scroll-mt-24 bg-[#F5F1E8] px-8 py-28 sm:px-12 sm:py-32 lg:px-24 lg:py-40 xl:px-36"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-8 text-[11px] uppercase tracking-[0.32em] text-[#B28A45] sm:text-xs">
            Ce qui nous anime
          </p>
        </Reveal>

        <div className="max-w-5xl">
          <RevealTitle delay={0.1}>
            <h2
              id="convictions-title"
              className="font-serif text-[2.65rem] font-normal leading-[1.08] tracking-[-0.025em] text-[#4A413B] sm:text-[3.5rem] lg:text-[4.25rem] xl:text-[4.75rem]"
            >
              Nous préférons les marques
              <br />
              qui durent aux effets
              <br />
              qui passent
            </h2>
          </RevealTitle>

          <Reveal delay={0.25}>
            <p className="mt-10 max-w-3xl text-[15px] leading-8 text-[#62584E] sm:text-base">
              Si vous cherchez le superficiel, nous ne sommes probablement pas
              le bon choix. Si, en revanche, vous souhaitez construire une
              marque sincère, cohérente et durable, alors nous parlerons le
              même langage.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-14 md:grid-cols-3 md:gap-10 lg:mt-28 lg:gap-14">
          {convictions.map((item, index) => (
            <Reveal key={item.title} delay={0.1 + index * 0.1}>
              <article className="group max-w-sm transition-transform duration-500 ease-out hover:-translate-y-1">
                <h3 className="font-serif text-[2rem] font-normal leading-[1.12] text-[#4A413B] sm:text-[2.3rem]">
                  {item.title}
                </h3>

                <div
                  aria-hidden="true"
                  className="mt-5 h-px w-14 bg-[#C9A35B]/35 transition-all duration-500 group-hover:w-20 group-hover:bg-[#C9A35B]/60"
                />

                <p className="mt-6 text-[15px] leading-8 text-[#62584E]">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}