import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.toisondor.agency";
const pageUrl = `${siteUrl}/informations-legales`;

const titre = "Informations légales";

const description =
  "Consultez les informations légales du site Toison d’Or : éditeur, hébergement, propriété intellectuelle, données personnelles et droit applicable.";

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

export default function InformationsLegales() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#3F3B36]">
      <section className="mx-auto max-w-4xl px-6 py-24 sm:px-10 sm:py-32">
        <header className="mb-16">
          <h1 className="font-serif text-4xl font-normal text-[#1E1E1E] sm:text-5xl">
            Informations légales
          </h1>

          <p className="mt-6 text-sm text-[#3F3B36]/70">
            Dernière mise à jour : 29 juillet 2026
          </p>
        </header>

        <div className="space-y-16 text-base leading-8 sm:text-lg sm:leading-9">
          <section aria-labelledby="editeur-site">
            <h2
              id="editeur-site"
              className="mb-5 font-serif text-2xl font-normal text-[#1E1E1E] sm:text-3xl"
            >
              Éditeur du site
            </h2>

            <p>Toison d’Or — Maison de création</p>

            <p className="mt-6">Le présent site est édité par :</p>

            <p className="mt-4">
              Fatime Abdullahu
              <br />
              Fondatrice de Toison d’Or
              <br />
              Suisse
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
                href={siteUrl}
                className="transition-colors duration-300 hover:text-[#C9A35B]"
              >
                www.toisondor.agency
              </a>
            </p>
          </section>

          <section aria-labelledby="hebergement">
            <h2
              id="hebergement"
              className="mb-5 font-serif text-2xl font-normal text-[#1E1E1E] sm:text-3xl"
            >
              Hébergement
            </h2>

            <p>Le site est hébergé par :</p>

            <address className="mt-4 not-italic">
              Vercel Inc.
              <br />
              440 N Barranca Avenue #4133
              <br />
              Covina, CA 91723
              <br />
              États-Unis
            </address>

            <p className="mt-6">
              L’hébergement peut entraîner le traitement de certaines données
              techniques nécessaires au fonctionnement et à la sécurité du
              site, notamment les journaux de connexion et les informations
              relatives aux requêtes adressées au serveur.
            </p>
          </section>

          <section aria-labelledby="propriete-intellectuelle">
            <h2
              id="propriete-intellectuelle"
              className="mb-5 font-serif text-2xl font-normal text-[#1E1E1E] sm:text-3xl"
            >
              Propriété intellectuelle
            </h2>

            <p>
              L’ensemble des contenus présents sur ce site, notamment les
              textes, photographies, créations graphiques, identité visuelle,
              logo, illustrations, maquettes et éléments de design, est protégé
              par le droit d’auteur et par les dispositions applicables en
              matière de propriété intellectuelle.
            </p>

            <p className="mt-6">
              Toute reproduction, représentation, diffusion, adaptation ou
              utilisation, totale ou partielle, sans autorisation écrite
              préalable de Fatime Abdullahu est interdite, sauf dans les cas
              expressément autorisés par la loi.
            </p>
          </section>

          <section aria-labelledby="donnees-personnelles">
            <h2
              id="donnees-personnelles"
              className="mb-5 font-serif text-2xl font-normal text-[#1E1E1E] sm:text-3xl"
            >
              Données personnelles
            </h2>

            <p>
              Les informations transmises par l’intermédiaire du formulaire de
              contact ou par courrier électronique sont utilisées uniquement
              afin de répondre aux demandes adressées à Toison d’Or et d’assurer
              le suivi des échanges.
            </p>

            <p className="mt-6">
              Elles ne sont ni vendues ni utilisées à des fins publicitaires
              sans votre accord.
            </p>

            <p className="mt-6">
              Vous pouvez demander l’accès, la rectification ou la suppression
              de vos données personnelles en écrivant à :
            </p>

            <p className="mt-4">
              <a
                href="mailto:bonjour@toisondor.agency"
                className="transition-colors duration-300 hover:text-[#C9A35B]"
              >
                bonjour@toisondor.agency
              </a>
            </p>

            <p className="mt-6">
              Pour davantage d’informations sur le traitement de vos données,
              consultez notre{" "}
              <Link
                href="/politique-de-confidentialite"
                className="underline decoration-[#C9A35B]/60 underline-offset-4 transition-colors duration-300 hover:text-[#C9A35B]"
              >
                politique de confidentialité
              </Link>
              .
            </p>
          </section>

          <section aria-labelledby="cookies">
            <h2
              id="cookies"
              className="mb-5 font-serif text-2xl font-normal text-[#1E1E1E] sm:text-3xl"
            >
              Cookies et services techniques
            </h2>

            <p>
              Le site n’utilise aucun cookie publicitaire ni outil de suivi
              marketing déclaré à ce jour.
            </p>

            <p className="mt-6">
              Des données techniques peuvent néanmoins être traitées par les
              services indispensables à l’hébergement, à la sécurité et au bon
              fonctionnement du site.
            </p>

            <p className="mt-6">
              Si des outils d’analyse, des contenus intégrés ou d’autres
              services complémentaires sont ajoutés ultérieurement, les
              informations légales et la politique de confidentialité seront
              mises à jour en conséquence.
            </p>
          </section>

          <section aria-labelledby="liens-externes">
            <h2
              id="liens-externes"
              className="mb-5 font-serif text-2xl font-normal text-[#1E1E1E] sm:text-3xl"
            >
              Liens externes
            </h2>

            <p>
              Le site peut contenir des liens vers des plateformes ou des sites
              internet exploités par des tiers. Toison d’Or ne contrôle pas leur
              contenu, leur disponibilité ni leurs pratiques en matière de
              protection des données.
            </p>
          </section>

          <section aria-labelledby="responsabilite">
            <h2
              id="responsabilite"
              className="mb-5 font-serif text-2xl font-normal text-[#1E1E1E] sm:text-3xl"
            >
              Responsabilité
            </h2>

            <p>
              Toison d’Or veille à fournir des informations aussi exactes et
              actuelles que possible. Toutefois, aucune garantie ne peut être
              donnée quant à l’exhaustivité permanente des contenus publiés.
            </p>

            <p className="mt-6">
              Toison d’Or ne saurait être tenue responsable d’un dommage
              résultant directement ou indirectement de l’utilisation du site,
              de son indisponibilité temporaire ou de l’utilisation d’un site
              externe accessible par un lien.
            </p>
          </section>

          <section aria-labelledby="droit-applicable">
            <h2
              id="droit-applicable"
              className="mb-5 font-serif text-2xl font-normal text-[#1E1E1E] sm:text-3xl"
            >
              Droit applicable
            </h2>

            <p>
              Les présentes informations légales et l’utilisation du site sont
              régies par le droit suisse.
            </p>

            <p className="mt-6">
              En cas de différend, les parties chercheront d’abord une solution
              amiable avant toute procédure, sous réserve des dispositions
              légales impératives applicables.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}