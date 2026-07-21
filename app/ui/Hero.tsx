"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Reveal from "./animations/Reveal";

export default function Hero() {
  return (
    <section
      id="accueil"
      style={{ colorScheme: "light" }}
      className="relative min-h-screen overflow-hidden bg-[#F5F1E8] [color-scheme:light]"
    >
      <Image
        src="/images/hero-final.jpg"
        alt="Univers créatif de Toison d’Or"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#F5F1E8]/5" />

      <div className="relative z-10 flex min-h-screen items-start px-8 pb-16 pt-40 sm:px-12 sm:pt-48 lg:px-28 lg:text-[#4A413B] pb-20 lg:pt-64 xl:px-36">
        <div className="max-w-[720px]">
          <Reveal>
            <h1 className="max-w-[350px] font-serif text-[4.15rem] font-normal leading-[0.92] tracking-[0.012em]  sm:max-w-none sm:text-[5rem] sm:leading-[0.94] sm:tracking-[0.015em] lg:text-[clamp(3.8rem,5vw,6.5rem)] lg:leading-[0.96]">
              TOISON D&apos;OR
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              style={{
                color: "#8A7661",
                WebkitTextFillColor: "#8A7661",
              }}
              className="mt-3 pl-3 font-serif text-[1.45rem] font-light not-italic leading-[1.15] tracking-[0.005em] sm:mt-4 sm:pl-5 sm:text-[1.65rem] lg:pl-7 lg:text-[1.75rem]"
            >
              Briller autrement
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <a
              href="#adn"
              aria-label="Aller au chapitre Notre ADN"
              className="group mt-20 inline-flex w-fit flex-col items-start text-[10px] uppercase tracking-[0.22em] text-[#2F2C28] transition-colors duration-500 ease-out hover:text-[#C9A35B] sm:mt-20 sm:text-[11px] lg:mt-28"
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