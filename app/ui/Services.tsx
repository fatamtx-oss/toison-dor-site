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
      aria-labelledby="services-title"
      className="scroll-mt-24 bg-[#F5F1E8] px-8 py-28 sm:px-12 sm:py-32 lg:px-24 lg:py-40 xl:px-36"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-7 text-[11px] uppercase tracking-[0.32em] text-[#B28A45] sm:text-xs">
            Nos savoir-faire
          </p>
        </Reveal>

        <div className="max-w-5xl">
          <RevealTitle delay={0.1}>
            <h2
              id="services-title"
              className="font-serif text-[2.65rem] font-normal leading-[1.08] tracking-[-0.025em] text-[#4A413B] sm:text-[3.5rem] lg:text-[4.25rem] xl:text-[4.75rem]"
            >
              Rien n&apos;est standard
              <br />
              Tout est pensé pour vous
            </h2>
          </RevealTitle>
        </div>

        <Reveal delay={0.25}>
          <p className="mt-10 max-w-2xl text-[15px] leading-8 text-[#62584E] sm:text-base">
            Toute collaboration commence par l&apos;écoute. Elle se construit
            avec méthode, prend forme dans les détails et s&apos;inscrit dans la
            durée.
          </p>
        </Reveal>

        <div className="mt-24 grid gap-x-20 gap-y-20 md:grid-cols-2 md:gap-y-24 lg:mt-28 lg:gap-x-24 lg:gap-y-28">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={0.1 + index * 0.1}>
              <article className="group max-w-xl transition-transform duration-500 ease-out hover:-translate-y-1">
                <h3 className="font-serif text-[2.25rem] font-normal leading-[1.08] tracking-[-0.02em] text-[#4A413B] sm:text-[2.65rem] lg:text-[3rem]">
                  {service.title}
                </h3>

                <div
                  aria-hidden="true"
                  className="mt-5 h-px w-14 bg-[#C9A35B]/35 transition-all duration-500 group-hover:w-20 group-hover:bg-[#C9A35B]/60"
                />

                <p className="mt-6 max-w-md text-[15px] leading-8 text-[#62584E]">
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