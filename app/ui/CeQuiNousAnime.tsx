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
      className="bg-[#F5F1E8] px-10 py-32 sm:px-14 lg:px-24 xl:px-36"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-10 text-sm uppercase tracking-[0.35em] text-[#C9A35B]">
            Ce qui nous anime
          </p>
        </Reveal>

        <div className="max-w-5xl">
          <RevealTitle delay={0.1}>
            <h2 className="font-serif text-5xl leading-[1.06] tracking-[-0.03em] text-[#1E1E1E] sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
              Nous préférons les marques
              <br />
              qui durent aux effets
              <br />
              qui passent
            </h2>
          </RevealTitle>

          <Reveal delay={0.25}>
            <p className="mt-10 max-w-3xl text-[15px] leading-8 text-[#1E1E1E]/70">
              Si vous cherchez le superficiel, nous ne sommes probablement pas
              le bon choix. Si, en revanche, vous souhaitez construire une
              marque sincère, cohérente et durable, alors nous parlerons le
              même langage.
            </p>
          </Reveal>
        </div>

        <div className="mt-28 grid gap-16 md:grid-cols-3">
          {convictions.map((item, index) => (
            <Reveal key={item.title} delay={0.1 + index * 0.1}>
              <article>
                <h3 className="font-serif text-3xl leading-tight text-[#1E1E1E] sm:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-sm text-[15px] leading-8 text-[#1E1E1E]/70">
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