import Reveal from "./animations/Reveal";

const cibles = [
  {
    title: "Maisons et artisans",
    text: "Pour traduire un savoir-faire exigeant en une présence claire, sensible et reconnaissable.",
  },
  {
    title: "Marques en devenir",
    text: "Pour poser des fondations cohérentes et construire une image capable d’accompagner leur croissance.",
  },
  {
    title: "Entreprises en évolution",
    text: "Pour retrouver une direction juste lorsque l’activité a grandi, changé ou dépassé son image actuelle.",
  },
];

const valeurs = [
  {
    title: "Essence",
    text: "Comprendre ce qui distingue réellement votre marque avant de lui donner une forme.",
  },
  {
    title: "Matière",
    text: "Composer avec les mots, les images, les couleurs et les supports pour créer un langage cohérent.",
  },
  {
    title: "Héritage",
    text: "Construire une présence capable d’évoluer dans le temps sans perdre ce qui la rend unique.",
  },
];

export default function Adn() {
  return (
    <section
      id="adn"
      className="bg-[#F5F1E8] px-10 pb-32 pt-24 sm:px-14 lg:px-24 xl:px-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Introduction */}
        <div className="max-w-3xl">
          <Reveal>
            <p className="mb-8 text-sm uppercase tracking-[0.35em] text-[#C9A35B]">
              Notre ADN
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-2xl text-[15px] leading-8 text-[#1E1E1E]/70">
              Toison d&apos;Or accompagne les marques portées par un savoir-faire,
              une vision ou une histoire forte, qui souhaitent gagner en clarté,
              en cohérence et en présence.
            </p>
          </Reveal>
        </div>

        {/* Grand titre */}
        <Reveal delay={0.18}>
          <div className="mt-12 max-w-5xl">
            <h2 className="font-serif text-5xl leading-[1.05] tracking-[-0.03em] text-[#1E1E1E] sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
              Donner une présence juste
              <br />
              à ce que vous avez construit
            </h2>
          </div>
        </Reveal>

        {/* Cibles */}
        <div className="mt-24">
          <Reveal>
            <p className="mb-11 text-xs uppercase tracking-[0.28em] text-[#C9A35B]">
              Nous travaillons aux côtés de
            </p>
          </Reveal>

          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            {cibles.map((cible, index) => (
              <Reveal key={cible.title} delay={index * 0.1}>
                <article>
                  <h3 className="font-serif text-3xl leading-tight text-[#1E1E1E]">
                    {cible.title}
                  </h3>

                  <p className="mt-7 max-w-sm text-[15px] leading-8 text-[#1E1E1E]/70">
                    {cible.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Valeurs */}
        <div className="mt-36">
          <Reveal>
            <p className="mb-11 text-xs uppercase tracking-[0.28em] text-[#C9A35B]">
              Ce qui guide notre travail
            </p>
          </Reveal>

          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            {valeurs.map((valeur, index) => (
              <Reveal key={valeur.title} delay={index * 0.1}>
                <article>
                  <h3 className="font-serif text-3xl leading-tight text-[#1E1E1E]">
                    {valeur.title}
                  </h3>

                  <p className="mt-7 max-w-sm text-[15px] leading-8 text-[#1E1E1E]/70">
                    {valeur.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}