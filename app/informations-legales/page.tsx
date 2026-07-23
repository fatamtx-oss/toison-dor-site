import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Informations légales",
  description:
    "Informations légales relatives au site Toison d’Or – Maison de création.",
};

export default function InformationsLegales() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#3F3B36]">
      <section className="mx-auto max-w-4xl px-6 py-24 sm:px-10 sm:py-32">
        <h1 className="mb-16 font-serif text-4xl font-normal text-[#1E1E1E] sm:text-5xl">
          Informations légales
        </h1>

        <div className="space-y-16 text-base leading-8 sm:text-lg sm:leading-9">
          <section>
            <h2 className="mb-5 font-serif text-2xl font-normal text-[#1E1E1E] sm:text-3xl">
              Éditeur du site
            </h2>

            <p>Toison d&apos;Or – Maison de création</p>

            <p className="mt-6">Le présent site est édité par :</p>

            <p className="mt-4">
              Fatime Abdullahu
              <br />
              Fondatrice de Toison d&apos;Or
            </p>

            <p className="mt-6">
              <a
                href="mailto:bonjour@toisondor.agency"
                className="transition-colors duration-300 hover:text-[#C9A35B]"
              >
                bonjour@toisondor.agency
              </a>
              <br />
              <a
                href="https://toisondor.agency"
                className="transition-colors duration-300 hover:text-[#C9A35B]"
              >
                https://toisondor.agency
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-5 font-serif text-2xl font-normal text-[#1E1E1E] sm:text-3xl">
              Hébergement
            </h2>

            <p>Le site est hébergé par :</p>

            <p className="mt-4">
              Vercel Inc.
              <br />
              440 N Barranca Avenue #4133
              <br />
              Covina, CA 91723
              <br />
              États-Unis
            </p>
          </section>

          <section>
            <h2 className="mb-5 font-serif text-2xl font-normal text-[#1E1E1E] sm:text-3xl">
              Propriété intellectuelle
            </h2>

            <p>
              L&apos;ensemble des contenus présents sur ce site, notamment les
              textes, photographies, créations graphiques, identité visuelle,
              logo, illustrations, maquettes et éléments de design, est protégé
              par le droit d&apos;auteur et les lois applicables en matière de
              propriété intellectuelle.
            </p>

            <p className="mt-6">
              Toute reproduction, diffusion, adaptation ou utilisation, totale
              ou partielle, sans autorisation écrite préalable de Fatime
              Abdullahu est interdite.
            </p>
          </section>

          <section>
            <h2 className="mb-5 font-serif text-2xl font-normal text-[#1E1E1E] sm:text-3xl">
              Données personnelles
            </h2>

            <p>
              Les informations transmises via le formulaire de contact sont
              utilisées uniquement afin de répondre aux demandes adressées à
              Toison d&apos;Or.
            </p>

            <p className="mt-6">
              Les données ne sont ni vendues ni cédées à des tiers.
            </p>

            <p className="mt-6">
              Vous pouvez demander l&apos;accès, la rectification ou la
              suppression de vos données personnelles en écrivant à :
            </p>

            <p className="mt-4">
              <a
                href="mailto:bonjour@toisondor.agency"
                className="transition-colors duration-300 hover:text-[#C9A35B]"
              >
                bonjour@toisondor.agency
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-5 font-serif text-2xl font-normal text-[#1E1E1E] sm:text-3xl">
              Cookies
            </h2>

            <p>
              Ce site utilise uniquement les cookies strictement nécessaires à
              son fonctionnement ainsi que les services techniques
              indispensables à son hébergement.
            </p>

            <p className="mt-6">
              Si des services complémentaires sont ajoutés ultérieurement,
              cette page sera mise à jour en conséquence.
            </p>
          </section>

          <section>
            <h2 className="mb-5 font-serif text-2xl font-normal text-[#1E1E1E] sm:text-3xl">
              Droit applicable
            </h2>

            <p>Le présent site est régi par le droit suisse.</p>

            <p className="mt-6">
              En cas de litige, les tribunaux compétents en Suisse sont seuls
              compétents, sous réserve des dispositions légales applicables.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}