"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  type MouseEvent,
  useEffect,
  useState,
} from "react";

const chapitres = [
  { title: "Notre ADN", href: "#adn" },
  { title: "Le Geste", href: "#geste" },
  { title: "Prendre forme", href: "#prendre-forme" },
  { title: "Nos histoires", href: "#nos-histoires" },
  { title: "Questions", href: "#questions" },
  {
    title: "Entrer en relation",
    href: "#entrer-en-relation",
  },
];

const liensMobiles = [
  { title: "Accueil", href: "#accueil" },
  {
    title: "Nos savoir-faire",
    href: "#savoir-faire",
  },
  {
    title: "Ce qui nous anime",
    href: "#ce-qui-nous-anime",
  },
  { title: "Questions", href: "#questions" },
  {
    title: "Entrer en relation",
    href: "#entrer-en-relation",
  },
];

const lienPrincipalClassName =
  "text-[12px] tracking-[0.035em] text-[#2F2C28] transition-colors duration-500 ease-out hover:text-[#C9A35B]";

export default function Header() {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [aDefile, setADefile] = useState(false);

  useEffect(() => {
    const observerDefilement = () => {
      setADefile(window.scrollY > 24);
    };

    observerDefilement();

    window.addEventListener("scroll", observerDefilement, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        observerDefilement,
      );
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOuvert
      ? "hidden"
      : "";

    const fermerAvecEchap = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOuvert(false);
      }
    };

    window.addEventListener("keydown", fermerAvecEchap);

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        fermerAvecEchap,
      );
    };
  }, [menuOuvert]);

  const allerVersSection = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    depuisMenu = false,
  ) => {
    event.preventDefault();

    const effectuerScroll = () => {
      if (href === "#accueil") {
        window.history.pushState(null, "", href);

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

        return;
      }

      const section =
        document.querySelector<HTMLElement>(href);

      if (!section) {
        return;
      }

      const estMobile = window.innerWidth < 1024;
      const ajustement = estMobile ? 68 : 92;

      const destination = Math.min(
        section.offsetTop + ajustement,
        document.documentElement.scrollHeight -
          window.innerHeight,
      );

      window.history.pushState(null, "", href);

      window.scrollTo({
        top: Math.max(0, destination),
        behavior: "smooth",
      });
    };

    if (depuisMenu) {
      setMenuOuvert(false);
      window.setTimeout(effectuerScroll, 120);

      return;
    }

    effectuerScroll();
  };

  return (
    <>
      {/* HEADER PRINCIPAL */}
      <header
        style={{ colorScheme: "light" }}
        className={`fixed left-0 top-0 z-50 w-full [color-scheme:light] transition-all duration-500 ease-out ${
          aDefile
            ? "bg-[#F5F1E8]/92 shadow-[0_8px_30px_rgba(30,30,30,0.045)] backdrop-blur-xl"
            : "bg-[#F5F1E8]"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1500px] items-center justify-between px-6 transition-[height] duration-500 ease-out sm:px-8 lg:px-12 xl:px-16 ${
            aDefile ? "h-[66px]" : "h-[74px]"
          }`}
        >
          <a
            href="#accueil"
            onClick={(event) =>
              allerVersSection(event, "#accueil")
            }
            aria-label="Retour à l’accueil"
            className="flex items-center gap-3.5"
          >
            <Image
              src="/images/logo.svg"
              alt=""
              width={36}
              height={36}
              priority
              className={`object-contain transition-[width,height] duration-500 ease-out ${
                aDefile ? "h-8 w-8" : "h-9 w-9"
              }`}
            />

            <span className="flex flex-col">
              <span className="font-serif text-[16px] tracking-[0.11em] text-[#C9A35B]">
                TOISON D&apos;OR
              </span>

              <span className="text-[7px] uppercase tracking-[0.22em] text-[#A89B8C]">
                Maison de création
              </span>
            </span>
          </a>

          <div className="flex items-center gap-7 lg:gap-10">
            <nav
              aria-label="Navigation principale"
              className="hidden items-center gap-8 lg:flex"
            >
              <a
                href="#accueil"
                onClick={(event) =>
                  allerVersSection(event, "#accueil")
                }
                className={lienPrincipalClassName}
              >
                Accueil
              </a>

              <a
                href="#savoir-faire"
                onClick={(event) =>
                  allerVersSection(
                    event,
                    "#savoir-faire",
                  )
                }
                className={lienPrincipalClassName}
              >
                Nos savoir-faire
              </a>

              <a
                href="#ce-qui-nous-anime"
                onClick={(event) =>
                  allerVersSection(
                    event,
                    "#ce-qui-nous-anime",
                  )
                }
                className={lienPrincipalClassName}
              >
                Ce qui nous anime
              </a>

              <a
                href="#questions"
                onClick={(event) =>
                  allerVersSection(event, "#questions")
                }
                className={lienPrincipalClassName}
              >
                Questions
              </a>

              <a
                href="#entrer-en-relation"
                onClick={(event) =>
                  allerVersSection(
                    event,
                    "#entrer-en-relation",
                  )
                }
                className={`flex items-center gap-2.5 ${lienPrincipalClassName}`}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-[15px] w-[15px] stroke-current"
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

                <span>Entrer en relation</span>
              </a>
            </nav>

            <button
              type="button"
              aria-expanded={menuOuvert}
              aria-controls="menu-chapitres"
              onClick={() => setMenuOuvert(true)}
              className="text-[10px] uppercase tracking-[0.28em] text-[#2F2C28] transition-colors duration-500 ease-out hover:text-[#C9A35B]"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* MENU PLEIN ÉCRAN */}
      <AnimatePresence>
        {menuOuvert && (
          <motion.div
            id="menu-chapitres"
            role="dialog"
            aria-modal="true"
            aria-label="Menu principal"
            style={{ colorScheme: "light" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 z-[70] overflow-y-auto bg-[#F5F1E8] [color-scheme:light]"
          >
            <motion.button
              type="button"
              onClick={() => setMenuOuvert(false)}
              aria-label="Fermer le menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute right-6 top-8 z-[90] text-[10px] uppercase tracking-[0.28em] text-[#2F2C28] transition-colors duration-500 ease-out hover:text-[#C9A35B] sm:right-8 lg:right-12 xl:right-16"
            >
              Fermer
            </motion.button>

            <div className="mx-auto flex min-h-screen max-w-[1500px] flex-col px-6 pb-10 pt-6 sm:px-8 lg:px-12 xl:px-16">
              {/* LOGO */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex h-[74px] items-start"
              >
                <a
                  href="#accueil"
                  onClick={(event) =>
                    allerVersSection(
                      event,
                      "#accueil",
                      true,
                    )
                  }
                  aria-label="Retour à l’accueil"
                  className="flex items-center gap-3.5"
                >
                  <Image
                    src="/images/logo.svg"
                    alt=""
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain"
                  />

                  <span className="flex flex-col">
                    <span className="font-serif text-[16px] tracking-[0.11em] text-[#C9A35B]">
                      TOISON D&apos;OR
                    </span>

                    <span className="text-[7px] uppercase tracking-[0.22em] text-[#A89B8C]">
                      Maison de création
                    </span>
                  </span>
                </a>
              </motion.div>

              {/* CONTENU PRINCIPAL */}
              <div className="grid flex-1 items-center gap-14 py-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:py-0">
                <div className="flex flex-col lg:pl-[8%]">
                  <nav
                    aria-label="Navigation des chapitres"
                    className="flex flex-col gap-7 sm:gap-8"
                  >
                    {chapitres.map(
                      (chapitre, index) => (
                        <motion.a
                          key={chapitre.href}
                          href={chapitre.href}
                          onClick={(event) =>
                            allerVersSection(
                              event,
                              chapitre.href,
                              true,
                            )
                          }
                          initial={{
                            opacity: 0,
                            y: 18,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: 8,
                          }}
                          transition={{
                            duration: 0.75,
                            delay:
                              0.18 + index * 0.09,
                            ease: [
                              0.22,
                              1,
                              0.36,
                              1,
                            ],
                          }}
                          className="group relative w-fit py-1 pl-5 font-serif text-[1.8rem] leading-none text-[#1E1E1E] transition-colors duration-500 ease-out hover:text-[#C9A35B] sm:text-[2.1rem]"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute bottom-1 left-0 top-1 w-px origin-center scale-y-0 bg-[#C9A35B] transition-transform duration-500 ease-out group-hover:scale-y-100"
                          />

                          <span className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-1">
                            {chapitre.title}
                          </span>
                        </motion.a>
                      ),
                    )}
                  </nav>

                  {/* RÉSEAUX ET E-MAIL */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 14,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.72,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-14 flex items-center gap-7 text-[#1E1E1E]/70 sm:mt-16"
                  >
                    <a
                     href="https://www.instagram.com/toisondor.agency?igsh=MW1zcWNmc3JwMGtmbw=="
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="Instagram"
                     className="transition-colors duration-500 ease-out hover:text-[#C9A35B]"
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

                        <circle
                          cx="12"
                          cy="12"
                          r="4"
                          strokeWidth="1.4"
                        />

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
                         aria-label="LinkedIn"
                         className="transition-colors duration-500 ease-out hover:text-[#C9A35B]"
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

                        <path
                          d="M8 10v7"
                          strokeWidth="1.4"
                        />

                        <path
                          d="M8 7.5v.1"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />

                        <path
                          d="M12 10v7"
                          strokeWidth="1.4"
                        />

                        <path
                          d="M12 13c0-1.8 1-3 2.5-3s2.5 1.2 2.5 3v4"
                          strokeWidth="1.4"
                        />
                      </svg>
                    </a>

                    <a
                      href="mailto:info@toisondor.ch"
                      aria-label="Écrire à info@toisondor.ch"
                      className="transition-colors duration-500 ease-out hover:text-[#C9A35B]"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 stroke-current"
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
                    </a>
                  </motion.div>
                </div>

                {/* SIGNATURE */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.88,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="hidden items-end justify-center lg:flex"
                >
                  <p className="mb-10 text-[14px] tracking-[0.08em] text-[#8D7B64]">
                    Créer avec sens.
                  </p>
                </motion.div>
              </div>

              {/* NAVIGATION MOBILE */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.82,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-auto border-t border-[#C9A35B]/20 pt-7 lg:hidden"
              >
                <div className="flex flex-col gap-4 text-[11px] uppercase tracking-[0.16em] text-[#2F2C28]">
                  {liensMobiles.map((lien) => (
                    <a
                      key={lien.href}
                      href={lien.href}
                      onClick={(event) =>
                        allerVersSection(
                          event,
                          lien.href,
                          true,
                        )
                      }
                      className="w-fit transition-colors duration-500 ease-out hover:text-[#C9A35B]"
                    >
                      {lien.title}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}