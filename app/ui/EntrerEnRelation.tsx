import Reveal from "./animations/Reveal";
import RevealTitle from "./animations/RevealTitle";

const champClassName =
  "w-full bg-transparent pb-4 text-[16px] text-[#1E1E1E] outline-none";

const conteneurChampClassName =
  "relative border-b border-[#C9A35B]/45 after:absolute after:-bottom-px after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#C9A35B] after:transition-transform after:duration-700 after:ease-out focus-within:after:scale-x-100";

export default function EntrerEnRelation() {
  return (
    <section
      id="entrer-en-relation"
      className="bg-[#F5F1E8] px-10 py-32 sm:px-14 lg:px-24 xl:px-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Reveal>
              <p className="mb-16 text-sm uppercase tracking-[0.35em] text-[#C9A35B]">
                Entrer en relation
              </p>
            </Reveal>

            <RevealTitle delay={0.1}>
              <p className="max-w-xl font-serif text-4xl leading-[1.2] tracking-[-0.025em] text-[#1E1E1E] sm:text-5xl lg:text-[3.4rem]">
                Si notre univers résonne avec le vôtre,
                <br />
                nous serons heureux d&apos;imaginer
                <br />
                la suite ensemble.
              </p>
            </RevealTitle>
          </div>

          <Reveal delay={0.25}>
            <form className="space-y-11">
              <div>
                <label
                  htmlFor="prenom"
                  className="mb-5 block text-xs uppercase tracking-[0.2em] text-[#2F2C28]"
                >
                  Votre prénom
                </label>

                <div className={conteneurChampClassName}>
                  <input
                    id="prenom"
                    name="prenom"
                    type="text"
                    autoComplete="given-name"
                    className={champClassName}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-5 block text-xs uppercase tracking-[0.2em] text-[#2F2C28]"
                >
                  Votre adresse e-mail
                </label>

                <div className={conteneurChampClassName}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={champClassName}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="projet"
                  className="mb-5 block text-xs uppercase tracking-[0.2em] text-[#2F2C28]"
                >
                  Racontez-nous votre projet
                </label>

                <div className={conteneurChampClassName}>
                  <textarea
                    id="projet"
                    name="projet"
                    rows={5}
                    className={`${champClassName} resize-none leading-8`}
                  />
                </div>
              </div>

              <p className="text-xs leading-6 text-[#1E1E1E]/55">
                Nous répondons personnellement à chaque demande.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}