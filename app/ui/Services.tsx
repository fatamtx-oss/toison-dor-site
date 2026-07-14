import Reveal from "./animations/Reveal";
import RevealTitle from "./animations/RevealTitle";

const services = [
  {
    title: "Identité de marque",
    text: "Donner une présence claire et durable à ce qui distingue votre marque.",
  },
  {
    title: "Direction artistique",
    text: "Créer un univers visuel où chaque détail participe au même récit.",
  },
  {
    title: "Site internet",
    text: "Concevoir des expériences digitales élégantes, intuitives et fidèles à votre identité.",
  },
  {
    title: "Supports éditoriaux",
    text: "Donner une continuité à votre image à travers chaque support de communication.",
  },
];

export default function Services() {
  return (
    <section
      id="savoir-faire"
      className="bg-[#F5F1E8] px-10 py-32 sm:px-14 lg:px-24 xl:px-36"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-8 text-sm uppercase tracking-[0.35em] text-[#C9A35B]">
            Nos savoir-faire
          </p>
        </Reveal>

        <div className="max-w-5xl">
          <RevealTitle delay={0.1}>
            <h2 className="font-serif text-5xl leading-[1.05] tracking-[-0.03em] text-[#1E1E1E] sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
              Rien n&apos;est standard
              <br />
              Tout est pensé pour vous
            </h2>
          </RevealTitle>
        </div>

        <Reveal delay={0.25}>
          <p className="mt-10 max-w-2xl text-[15px] leading-8 text-[#1E1E1E]/70">
            Toute collaboration commence par l&apos;écoute. Elle se construit
            avec méthode, prend forme dans les détails et s&apos;inscrit dans la
            durée.
          </p>
        </Reveal>

        <div className="mt-24 grid gap-x-20 gap-y-24 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={0.1 + index * 0.1}>
              <article>
                <h3 className="font-serif text-[3rem] leading-none text-[#1E1E1E]">
                  {service.title}
                </h3>

                <p className="mt-6 max-w-md text-[15px] leading-8 text-[#1E1E1E]/70">
                  {service.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}