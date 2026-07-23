import Header from "./ui/Header";
import Hero from "./ui/Hero";
import Adn from "./ui/Adn";
import Services from "./ui/Services";
import LeGeste from "./ui/LeGeste";
import PrendreForme from "./ui/PrendreForme";
import CeQuiNousAnime from "./ui/CeQuiNousAnime";
import NosHistoires from "./ui/NosHistoires";
import Questions from "./ui/Questions";
import EntrerEnRelation from "./ui/EntrerEnRelation";
import Footer from "./ui/Footer";
import ScrollToTop from "./ui/ScrollToTop";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://toisondor.agency/#organization",
  name: "Toison d’Or",
  alternateName: "Toison d’Or — Maison de création",
  url: "https://toisondor.agency",
  logo: "https://toisondor.agency/images/logo.svg",
  email: "bonjour@toisondor.agency",
  description:
    "Maison de création indépendante spécialisée en identité visuelle, branding, web design, création de contenus et communication digitale.",
  areaServed: {
    "@type": "Country",
    name: "Suisse",
  },
  knowsAbout: [
    "Identité visuelle",
    "Branding",
    "Web design",
    "Création de contenus",
    "Communication digitale",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main>
        <Header />
        <Hero />
        <Adn />
        <Services />
        <LeGeste />
        <PrendreForme />
        <CeQuiNousAnime />
        <NosHistoires />
        <Questions />
        <EntrerEnRelation />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
}