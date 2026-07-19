"use client";

import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode, useId, useState } from "react";

export type AccordionItem = {
  id: string;
  question: string;
  answer: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  defaultOpenId?: string;
};

export default function Accordion({
  items,
  defaultOpenId,
}: AccordionProps) {
  const accordionId = useId();

  const [questionOuverte, setQuestionOuverte] = useState<
    string | null
  >(defaultOpenId ?? null);

  const gererOuverture = (id: string) => {
    setQuestionOuverte((questionActuelle) =>
      questionActuelle === id ? null : id,
    );
  };

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#C9A35B]/35 to-transparent lg:block"
      />

      <div className="border-t border-[#C9A35B]/25 lg:ml-10">
        {items.map((item, index) => {
          const estOuverte = questionOuverte === item.id;

          const boutonId = `${accordionId}-${item.id}-button`;
          const contenuId = `${accordionId}-${item.id}-content`;

          return (
            <motion.article
              key={item.id}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.18,
              }}
              transition={{
                duration: 0.75,
                delay: Math.min(index * 0.045, 0.22),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group/article relative border-b border-[#C9A35B]/25"
            >
              <motion.div
                aria-hidden="true"
                animate={{
                  opacity: estOuverte ? 1 : 0,
                  scaleX: estOuverte ? 1 : 0.2,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-[-1px] left-0 h-px w-full origin-left bg-gradient-to-r from-[#A98242] via-[#C9A35B]/70 to-transparent"
              />

              <h3>
                <button
                  id={boutonId}
                  type="button"
                  aria-expanded={estOuverte}
                  aria-controls={contenuId}
                  onClick={() => gererOuverture(item.id)}
                  className="group flex w-full items-start gap-5 py-7 text-left outline-none sm:gap-7 sm:py-9 lg:gap-10 lg:py-11"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.35rem] shrink-0 text-[10px] font-medium tracking-[0.18em] text-[#A18454]/80 sm:mt-[0.45rem] sm:text-[11px]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex min-w-0 flex-1 items-start justify-between gap-5 sm:gap-8 lg:gap-14">
                    <span
                      className={`max-w-[900px] font-serif text-[1.3rem] leading-[1.28] transition-colors duration-500 sm:text-[1.55rem] lg:text-[1.8rem] ${
                        estOuverte
                          ? "text-[#9A7438]"
                          : "text-[#211F1C] group-hover:text-[#9A7438]"
                      }`}
                    >
                      {item.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`relative mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 sm:h-11 sm:w-11 ${
                        estOuverte
                          ? "border-[#B88C43] bg-[#B88C43] text-[#F8F4EB]"
                          : "border-[#C9A35B]/45 text-[#8D6A31] group-hover:border-[#B88C43] group-hover:bg-[#B88C43] group-hover:text-[#F8F4EB]"
                      }`}
                    >
                      <motion.span
                        animate={{
                          rotate: estOuverte ? 90 : 0,
                          opacity: estOuverte ? 0 : 1,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute h-px w-4 bg-current"
                      />

                      <motion.span
                        animate={{
                          rotate: estOuverte ? 180 : 0,
                        }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute h-px w-4 bg-current"
                      />
                    </span>
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {estOuverte && (
                  <motion.div
                    id={contenuId}
                    role="region"
                    aria-labelledby={boutonId}
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      height: {
                        duration: 0.62,
                        ease: [0.22, 1, 0.36, 1],
                      },
                      opacity: {
                        duration: 0.35,
                        ease: "easeOut",
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{
                        y: -12,
                      }}
                      animate={{
                        y: 0,
                      }}
                      exit={{
                        y: -8,
                      }}
                      transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="pb-10 pl-[2.25rem] pr-0 sm:pb-12 sm:pl-[3.05rem] sm:pr-10 lg:pb-16 lg:pl-[3.4rem] lg:pr-20"
                    >
                      <div className="relative max-w-[950px]">
                        <div
                          aria-hidden="true"
                          className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#C9A35B]/55 via-[#C9A35B]/20 to-transparent"
                        />

                        <div className="pl-5 text-[15px] leading-[1.95] text-[#625A50] sm:pl-7 sm:text-[16px] lg:pl-9">
                          {item.answer}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}