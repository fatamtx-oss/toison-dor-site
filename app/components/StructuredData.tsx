const services = [
  "Branding",
  "Identité visuelle",
  "Web design",
  "Création de sites internet",
  "Création de contenu",
  "Photographie",
  "Communication digitale et SEO",
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",

  name: "Toison d'Or",
  url: "https://www.toisondor.agency",
  logo: "https://www.toisondor.agency/images/logo.svg",

  description:
    "Toison d'Or accompagne les entreprises, marques, indépendants et créateurs dans la création d'identités visuelles, de sites internet et de stratégies de communication.",

  email: "bonjour@toisondor.agency",

  address: {
  "@type": "PostalAddress",
  addressCountry: "CH",
},

  sameAs: [
    "https://www.linkedin.com/company/toisondor",
    "https://www.instagram.com/toisondor.agency/",
  ],

  founder: {
    "@type": "Person",
    name: "Fatime",
  },

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",

    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
  },
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}