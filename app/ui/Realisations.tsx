const projets = [
  {
    number: "01",
    title: "Maison Sélène",
    category: "Identité de marque · Direction artistique",
    description:
      "Un univers sensible construit autour de la lumière, de la matière et du silence.",
    background: "bg-[#D8D0BC]",
  },
  {
    number: "02",
    title: "Atelier Nacre",
    category: "Identité · Édition · Site internet",
    description:
      "Une présence délicate et intemporelle, pensée comme un objet éditorial.",
    background: "bg-[#B9AE98]",
  },
  {
    number: "03",
    title: "Héritage",
    category: "Direction artistique · Supports imprimés",
    description:
      "Une identité nourrie par la transmission, le geste et la mémoire des matières.",
    background: "bg-[#8F866F]",
  },
];

export default function Realisations() {
  return (
    <section
      id="realisations"
      className="bg-[#F5F1E8] px-10 py-32 sm:px-14 lg:px-24 xl:px-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-4xl">
          <p className="mb-10 text-sm uppercase tracking-[0.35em] text-[#C9A35B]">
            Nos réalisations
          </p>

          <h2 className="font-serif text-5xl leading-[1.08] tracking-[-0.02em] text-[#1E1E1E] sm:text-6xl lg:text-[4rem] xl:text-[4.5rem]">
            Chaque projet devient
            <br />
            une histoire à part entière
          </h2>
        </div>

        <div className="space-y-28">
          {projets.map((projet, index) => (
            <article
              key={projet.number}
              className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end"
            >
              <div
                className={`relative min-h-[520px] overflow-hidden rounded-sm ${projet.background}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-black/10" />

                <div className="absolute bottom-8 left-8 text-sm uppercase tracking-[0.25em] text-[#F5F1E8]/80">
                  Visuel à venir
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-first" : ""}>
                <p className="mb-8 text-sm tracking-[0.25em] text-[#C9A35B]">
                  {projet.number}
                </p>

                <h3 className="mb-6 font-serif text-4xl leading-none text-[#1E1E1E] sm:text-5xl">
                  {projet.title}
                </h3>

                <p className="mb-8 text-xs uppercase tracking-[0.16em] text-[#1E1E1E]/55">
                  {projet.category}
                </p>

                <p className="max-w-md text-[15px] leading-8 text-[#1E1E1E]/70">
                  {projet.description}
                </p>

                <a
                  href="#"
                  className="mt-12 inline-block text-sm uppercase tracking-[0.18em] text-[#1E1E1E] transition-colors duration-300 hover:text-[#C9A35B]"
                >
                  Découvrir le projet
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}