import Reveal from "./animations/Reveal";
import RevealTitle from "./animations/RevealTitle";

export default function NosHistoires() {
  return (
    <section
      id="nos-histoires"
      aria-labelledby="histoires-title"
      className="scroll-mt-24 bg-[#F8F6F1] px-8 py-36 sm:px-12 sm:py-40 lg:px-24 lg:py-48 xl:px-36"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#B28A45] sm:text-xs">
            Nos histoires
          </p>
        </Reveal>

        <div className="flex min-h-[68vh] items-center justify-center">
          <div className="max-w-5xl text-center">
            <RevealTitle delay={0.1}>
              <h2
                id="histoires-title"
                className="font-serif text-[3rem] font-normal leading-[1.06] tracking-[-0.025em] text-[#4A413B] sm:text-[4rem] lg:text-[5.4rem]"
              >
                Les prochaines créations
                <br />
                prennent corps
              </h2>
            </RevealTitle>

            <Reveal delay={0.3}>
              <div
                aria-hidden="true"
                className="mx-auto mt-12 h-px w-20 bg-[#C9A35B]/35"
              />

              <p className="mx-auto mt-12 max-w-xl text-[18px] leading-8 text-[#62584E]">
                Peut-être que la prochaine commencera avec vous.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}