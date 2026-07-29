import Image from "next/image";
import Link from "next/link";

import Reveal from "./animations/Reveal";
import RevealImage from "./animations/RevealImage";

export default function Footer() {
  return (
    <footer className="bg-[#E9E3D2] px-10 py-24 sm:px-14 lg:px-24 xl:px-36">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <RevealImage>
          <Link href="/" aria-label="Retour à l’accueil">
            <Image
              src="/images/logo.svg"
              alt="Logo de Toison d'Or"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
            />
          </Link>
        </RevealImage>

        <Reveal delay={0.1}>
          <p className="mt-6 font-serif text-xl tracking-[0.12em] text-[#C9A35B]">
            TOISON D&apos;OR
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-2 text-[8px] uppercase tracking-[0.24em] text-[#A89B8C]">
            Maison de création
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex items-center gap-7">
            <a
              href="https://www.instagram.com/toisondor.agency?igsh=MW1zcWNmc3JwMGtmbw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Toison d'Or"
              className="text-[#1E1E1E]/60 transition-colors duration-300 hover:text-[#C9A35B]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 stroke-current"
              >
                <rect
                  x="3.5"
                  y="3.5"
                  width="17"
                  height="17"
                  rx="4.5"
                  strokeWidth="1.4"
                />
                <circle cx="12" cy="12" r="4" strokeWidth="1.4" />
                <circle
                  cx="17.4"
                  cy="6.8"
                  r="0.9"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/company/toisondor/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Toison d'Or"
              className="text-[#1E1E1E]/60 transition-colors duration-300 hover:text-[#C9A35B]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 stroke-current"
              >
                <rect
                  x="3.5"
                  y="3.5"
                  width="17"
                  height="17"
                  rx="1.5"
                  strokeWidth="1.4"
                />
                <path d="M8 10v7" strokeWidth="1.4" />
                <path
                  d="M8 7.5v.1"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M12 17v-4.1c0-1.7 1-2.9 2.5-2.9s2.5 1.1 2.5 2.9V17"
                  strokeWidth="1.4"
                />
                <path d="M12 10v7" strokeWidth="1.4" />
              </svg>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <a
            href="mailto:bonjour@toisondor.agency"
            className="mt-8 flex items-center gap-3 text-sm tracking-[0.04em] text-[#1E1E1E]/65 transition-colors duration-300 hover:text-[#C9A35B]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 stroke-current"
            >
              <path
                d="M3.75 6.75h16.5v10.5H3.75V6.75Z"
                strokeWidth="1.2"
              />
              <path
                d="m4.5 7.5 7.5 5.25 7.5-5.25"
                strokeWidth="1.2"
              />
            </svg>

            <span>bonjour@toisondor.agency</span>
          </a>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-14 text-xs leading-6 text-[#1E1E1E]/45">
            <p>© {new Date().getFullYear()} Toison d&apos;Or</p>

            <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/informations-legales"
                className="transition-colors duration-300 hover:text-[#C9A35B]"
              >
                Informations légales
              </Link>

              <span>•</span>

              <Link
                href="/politique-de-confidentialite"
                className="transition-colors duration-300 hover:text-[#C9A35B]"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}