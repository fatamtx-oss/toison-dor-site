import Image from "next/image";
import Link from "next/link";
import Reveal from "./animations/Reveal";
import RevealTitle from "./animations/RevealTitle";

export default function NosHistoires() {
  return (
    <section>
      <div className="flex min-h-[68vh] items-center justify-center">
        <div className="w-full max-w-5xl px-6 text-center">
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
              Voici la première. D’autres sont en route.
            </p>

            {/* Première histoire : Mariposa Fa */}
            <div className="mx-auto mt-20 w-full max-w-4xl">
              <Link
                href="https://mariposafa.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Découvrir Mariposa Fa"
                className="group block"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/mariposa-fa.jpg"
                    alt="Mariposa Fa — Photographie"
                    width={1200}
                    height={675}
                    className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  />
                </div>

                <div className="mt-7">
                  <span className="text-[10px] lowercase tracking-[0.22em] text-[#3F3F3F] transition-opacity duration-500 group-hover:opacity-50 sm:text-xs">
                    découvrir →
                  </span>
                </div>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}