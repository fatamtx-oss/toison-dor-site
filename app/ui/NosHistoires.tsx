import Reveal from "./animations/Reveal";
import RevealTitle from "./animations/RevealTitle";

export default function NosHistoires() {
  return (
    <section
      id="nos-histoires"
      className="bg-[#F8F6F1] px-10 py-40 sm:px-14 lg:px-24 xl:px-36"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.35em] text-[#C9A35B]">
            Nos histoires
          </p>
        </Reveal>

        <div className="flex min-h-[65vh] items-center justify-center">
          <div className="max-w-5xl text-center">
            <RevealTitle delay={0.1}>
              <h2 className="font-serif text-[3.4rem] leading-[1.05] tracking-[-0.03em] text-[#1E1E1E] sm:text-[4.5rem] lg:text-[5.8rem]">
                Les prochaines créations
                <br />
                prennent corps
              </h2>
            </RevealTitle>

            <Reveal delay={0.3}>
              <p className="mx-auto mt-16 max-w-xl text-[18px] leading-8 text-[#1E1E1E]/55">
                Peut-être que la prochaine commencera avec vous.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}