import type { Metadata } from "next";

const siteUrl = "https://www.toisondor.agency";
const pageUrl = `${siteUrl}/politique-de-confidentialite`;

const titre = "Politique de confidentialité";

const description =
  "Découvrez comment Toison d’Or collecte, utilise, conserve et protège les données personnelles transmises sur son site internet.";

export const metadata: Metadata = {
  title: titre,
  description,

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: pageUrl,
    siteName: "Toison d’Or",
    title: `${titre} | Toison d’Or`,
    description,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Toison d’Or — Briller autrement",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${titre} | Toison d’Or`,
    description,
    images: ["/images/og-image.png"],
  },
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#3F3B36]">
      <section className="mx-auto max-w-4xl px-6 py-24 sm:px-10 sm:py-32">
        <header className="mb-16">
          <h1 className="font-serif text-4xl font-normal text-[#1E1E1E] sm:text-5xl">
            Politique de confidentialité
          </h1>

          <p className="mt-6 text-sm text-[#3F3B36]/70">
            Dernière mise à jour : 29 juillet 2026
          </p>
        </header>

        <div className="space-y-16 text-base leading-8 sm:text-lg sm:leading-9">
          <section aria-labelledby="collecte-donnees">
            <h2
              id="collecte-donnees"
              className="mb-5 font-serif text-2xl font-normal text-[#1E1E1E] sm:text-3xl"
            >
              Collecte des données
            </h2>

            <p>
              Toison d’Or collecte uniquement les données personnelles que vous
              choisissez de transmettre par l’intermédiaire du formulaire de
              contact ou par courrier électronique.
            </p>
          </section>

          <section aria-labelledby="utilisation-donnees">
            <h2
              id="utilisation-donnees"
              className="mb-5 font-serif text-2xl font-normal text-[#1E1E1E] sm:text-3xl"
            >
              Utilisation des données
            </h2>

            <p>
              Les informations recueillies sont utilisées exclusivement afin de
              répondre à vos demandes, d’assurer le suivi des échanges et
              d’améliorer la qualité des services proposés.
            </p>

            <p className="mt-6">
              Elles ne sont ni vendues, ni louées, ni transmises à des tiers à
              des fins commerciales.
            </p>
          </section>

          <section aria-labelledby="conservation-donnees">
            <h2
              id="conservation-donnees"
              className="mb-5 font-serif text-2xl font-normal text-[#1E1E1E] sm:text-3xl"
            >
              Conservation des données
            </h2>

            <p>
              Les données personnelles sont conservées uniquement pendant la
              durée nécessaire au traitement de votre demande ou conformément
              aux obligations légales applicables.
            </p>
          </section>

          <section aria-labelledby="droits">
            <h2
              id="droits"
              className="mb-5 font-serif text-2xl font-normal text-[#1E1E1E] sm:text-3xl"
            >
              Vos droits
            </h2>

            <p>
              Vous pouvez demander à tout moment l’accès, la rectification ou la
              suppression de vos données personnelles en écrivant à :
            </p>

            <p className="mt-6">
              <a
                href="mailto:bonjour@toisondor.agency"
                className="transition-colors duration-300 hover:text-[#C9A35B]"
              >
                bonjour@toisondor.agency
              </a>
            </p>
          </section>

          <section aria-labelledby="cookies">
            <h2
              id="cookies"
              className="mb-5 font-serif text-2xl font-normal text-[#1E1E1E] sm:text-3xl"
            >
              Cookies
            </h2>

            <p>
              Ce site utilise uniquement les cookies nécessaires à son bon
              fonctionnement et à son hébergement. Aucun cookie publicitaire
              n’est utilisé.
            </p>
          </section>

          <section aria-labelledby="contact">
            <h2
              id="contact"
              className="mb-5 font-serif text-2xl font-normal text-[#1E1E1E] sm:text-3xl"
            >
              Contact
            </h2>

            <p>
              Pour toute question concernant la protection de vos données
              personnelles, vous pouvez nous contacter à :
            </p>

            <p className="mt-6">
              <a
                href="mailto:bonjour@toisondor.agency"
                className="transition-colors duration-300 hover:text-[#C9A35B]"
              >
                bonjour@toisondor.agency
              </a>
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}