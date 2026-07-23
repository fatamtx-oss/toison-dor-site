"use client";

import { FormEvent, useState } from "react";

import Reveal from "./animations/Reveal";
import RevealTitle from "./animations/RevealTitle";

const champClassName =
  "w-full bg-transparent pb-4 text-[16px] text-[#4A413B] outline-none placeholder:text-[#8A7D70]/55";

const conteneurChampClassName =
  "relative border-b border-[#C9A35B]/35 after:absolute after:-bottom-px after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#C9A35B] after:transition-transform after:duration-700 after:ease-out focus-within:after:scale-x-100";

type StatutFormulaire = "repos" | "envoi" | "succes" | "erreur";

export default function EntrerEnRelation() {
  const [statut, setStatut] = useState<StatutFormulaire>("repos");

  async function envoyerFormulaire(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatut("envoi");

    const formulaire = event.currentTarget;
    const donneesFormulaire = new FormData(formulaire);

    const donnees = {
      prenom: donneesFormulaire.get("prenom"),
      email: donneesFormulaire.get("email"),
      projet: donneesFormulaire.get("projet"),
    };

    try {
      const reponse = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donnees),
      });

      if (!reponse.ok) {
        throw new Error("Erreur lors de l’envoi");
      }

      formulaire.reset();
      setStatut("succes");
    } catch (error) {
      console.error(error);
      setStatut("erreur");
    }
  }

  return (
    <section
      id="entrer-en-relation"
      aria-labelledby="relation-title"
      className="scroll-mt-24 bg-[#F5F1E8] px-8 py-28 sm:px-12 sm:py-32 lg:px-24 lg:py-40 xl:px-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-24">
          <div>
            <Reveal>
              <p className="mb-12 text-[11px] uppercase tracking-[0.32em] text-[#B28A45] sm:mb-14 sm:text-xs">
                Entrer en relation
              </p>
            </Reveal>

            <RevealTitle delay={0.1}>
              <h2
                id="relation-title"
                className="max-w-xl font-serif text-[2.4rem] font-normal leading-[1.18] tracking-[-0.025em] text-[#4A413B] sm:text-[3rem] lg:text-[3.4rem]"
              >
                Si notre univers résonne avec le vôtre,
                <br />
                nous serons heureux d&apos;imaginer
                <br />
                la suite ensemble.
              </h2>
            </RevealTitle>
          </div>

          <Reveal delay={0.25}>
            <form
              className="space-y-10 sm:space-y-11"
              onSubmit={envoyerFormulaire}
            >
              <div>
                <label
                  htmlFor="prenom"
                  className="mb-5 block text-[11px] uppercase tracking-[0.2em] text-[#5B5148] sm:text-xs"
                >
                  Votre prénom
                </label>

                <div className={conteneurChampClassName}>
                  <input
                    id="prenom"
                    name="prenom"
                    type="text"
                    autoComplete="given-name"
                    required
                    className={champClassName}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-5 block text-[11px] uppercase tracking-[0.2em] text-[#5B5148] sm:text-xs"
                >
                  Votre adresse e-mail
                </label>

                <div className={conteneurChampClassName}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={champClassName}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="projet"
                  className="mb-5 block text-[11px] uppercase tracking-[0.2em] text-[#5B5148] sm:text-xs"
                >
                  Racontez-nous votre projet
                </label>

                <div className={conteneurChampClassName}>
                  <textarea
                    id="projet"
                    name="projet"
                    rows={5}
                    required
                    className={`${champClassName} resize-none leading-8`}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={statut === "envoi"}
                className="inline-flex min-w-52 items-center justify-center border border-[#C9A35B] px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-[#4A413B] transition-all duration-500 ease-out hover:bg-[#C9A35B] hover:text-[#F5F1E8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A35B]/40 focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5F1E8] disabled:cursor-not-allowed disabled:opacity-50 sm:text-xs"
              >
                {statut === "envoi" ? "Envoi en cours..." : "Envoyer la demande"}
              </button>

              <div aria-live="polite">
                {statut === "succes" && (
                  <p role="status" className="text-sm leading-7 text-[#62584E]">
                    Merci pour votre message. Nous reviendrons vers vous très
                    prochainement.
                  </p>
                )}

                {statut === "erreur" && (
                  <p role="alert" className="text-sm leading-7 text-[#8A3F35]">
                    Une erreur est survenue. Merci de réessayer dans quelques
                    instants.
                  </p>
                )}
              </div>

              <p className="text-xs leading-6 text-[#62584E]">
                Nous répondons personnellement à chaque demande.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}