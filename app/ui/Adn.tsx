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
      aria-labelledby="adn-title"
      className="scroll-mt-24 bg-[#F5F1E8] px-8 pb-28 pt-24 sm:px-12 sm:pb-32 sm:pt-28 lg:px-24 lg:pb-40 lg:pt-36 xl:px-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Introduction */}
        <div className="max-w-3xl">
          <Reveal>
            <p className="mb-7 text-[11px] uppercase tracking-[0.32em] text-[#B28A45] sm:text-xs">
              Notre ADN
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-2xl text-[15px] leading-8 text-[#5F554B] sm:text-base sm:leading-8">
              Toison d&apos;Or accompagne les marques portées par un
              savoir-faire, une vision ou une histoire forte, qui souhaitent
              gagner en clarté, en cohérence et en présence.
            </p>
          </Reveal>
        </div>

        {/* Grand titre */}
        <Reveal delay={0.18}>
          <div className="mt-12 max-w-5xl sm:mt-14 lg:mt-16">
            <h2
              id="adn-title"
              className="font-serif text-[2.65rem] font-normal leading-[1.08] tracking-[-0.025em] text-[#4A413B] sm:text-[3.5rem] lg:text-[4.25rem] xl:text-[4.75rem]"
            >
              Donner une présence juste
              <br className="hidden sm:block" />
              <span className="sm:block"> à ce que vous avez construit</span>
            </h2>
          </div>
        </Reveal>

        {/* Cibles */}
        <div className="mt-24 sm:mt-28 lg:mt-32">
          <Reveal>
            <p className="mb-10 text-[11px] uppercase tracking-[0.28em] text-[#B28A45] sm:text-xs">
              Nous travaillons aux côtés de
            </p>
          </Reveal>

          <div className="grid gap-14 md:grid-cols-3 md:gap-10 lg:gap-14">
            {cibles.map((cible, index) => (
              <Reveal key={cible.title} delay={index * 0.1}>
                <article className="max-w-sm">
                  <h3 className="font-serif text-[1.85rem] font-normal leading-[1.15] text-[#4A413B] sm:text-3xl">
                    {cible.title}
                  </h3>

                  <p className="mt-6 text-[15px] leading-8 text-[#62584E]">
                    {cible.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Séparation */}
        <div
          aria-hidden="true"
          className="my-28 h-px w-full bg-[#C9A35B]/20 sm:my-32 lg:my-36"
        />

        {/* Valeurs */}
        <div>
          <Reveal>
            <p className="mb-10 text-[11px] uppercase tracking-[0.28em] text-[#B28A45] sm:text-xs">
              Ce qui guide notre travail
            </p>
          </Reveal>

          <div className="grid gap-14 md:grid-cols-3 md:gap-10 lg:gap-14">
            {valeurs.map((valeur, index) => (
              <Reveal key={valeur.title} delay={index * 0.1}>
                <article className="max-w-sm">
                  <h3 className="font-serif text-[1.85rem] font-normal leading-[1.15] text-[#4A413B] sm:text-3xl">
                    {valeur.title}
                  </h3>

                  <p className="mt-6 text-[15px] leading-8 text-[#62584E]">
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