"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Reveal from "./animations/Reveal";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen overflow-hidden bg-[#F5F1E8]"
    >
      <Image
        src="/images/hero-final.jpg"
        alt="Univers Toison d'Or"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#F5F1E8]/5" />

      <div className="relative z-10 flex min-h-screen items-start px-8 pb-16 pt-40 sm:px-12 sm:pt-48 lg:px-28 lg:pb-20 lg:pt-64 xl:px-36">
        <div className="max-w-[720px]">
          <Reveal>
            <h1 className="max-w-[330px] font-serif text-[4.15rem] leading-[0.88] tracking-[-0.035em] text-[#1E1E1E] sm:max-w-none sm:text-[5rem] sm:leading-[0.92] lg:text-[clamp(3.8rem,5vw,6.5rem)] lg:leading-[0.95]">
              TOISON D&apos;OR
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 font-serif text-[1.45rem] font-light leading-[1.1] tracking-[-0.01em] text-[#8D7B64] sm:mt-7 sm:text-[1.65rem] lg:mt-8 lg:text-[1.75rem]">
              Briller autrement
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <a
              href="#adn"
              aria-label="Aller au chapitre Notre ADN"
              className="group mt-14 inline-flex w-fit flex-col items-start text-[10px] uppercase tracking-[0.22em] text-[#2F2C28] transition-colors duration-500 ease-out hover:text-[#C9A35B] sm:mt-16 sm:text-[11px] lg:mt-24"
            >
              <span>Notre ADN</span>

              <motion.svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mt-3 h-5 w-5 stroke-current transition-colors duration-500 sm:mt-4 sm:h-6 sm:w-6"
              >
                <path
                  d="M12 5v14m0 0-5-5m5 5 5-5"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}