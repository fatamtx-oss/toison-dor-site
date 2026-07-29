const siteUrl = "https://www.toisondor.agency";

const services = [
  "Branding",
  "Identité visuelle",
  "Web design",
  "Création de sites internet",
  "Création de contenu",
  "Photographie",
  "Communication digitale",
  "Référencement naturel — SEO",
];

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,

      name: "Toison d’Or",
      alternateName: "Toison d'Or",

      url: siteUrl,

      logo: {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#logo`,
        url: `${siteUrl}/images/logo.svg`,
        contentUrl: `${siteUrl}/images/logo.svg`,
        caption: "Toison d’Or",
      },

      image: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        caption: "Toison d’Or — Briller autrement",
      },

      description:
        "Toison d’Or accompagne les entreprises, les marques, les indépendants et les créateurs dans la conception de leur identité visuelle, de leur site internet, de leurs contenus et de leur communication digitale.",

      slogan: "Briller autrement.",

      email: "bonjour@toisondor.agency",

      address: {
        "@type": "PostalAddress",
        addressCountry: "CH",
      },

      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Suisse romande",
        },
        {
          "@type": "AdministrativeArea",
          name: "Canton de Vaud",
        },
        {
          "@type": "City",
          name: "Vevey",
        },
        {
          "@type": "City",
          name: "Montreux",
        },
        {
          "@type": "City",
          name: "Lausanne",
        },
      ],

      sameAs: [
        "https://www.linkedin.com/company/toisondor/",
        "https://www.instagram.com/toisondor.agency/",
      ],

      founder: {
        "@type": "Person",
        name: "Fatime",
      },

      knowsAbout: [
        "Branding",
        "Identité visuelle",
        "Direction artistique",
        "Web design",
        "Création de sites internet",
        "Création de contenu",
        "Photographie",
        "Communication digitale",
        "Référencement naturel",
      ],

      contactPoint: {
        "@type": "ContactPoint",
        contactType: "service client",
        email: "bonjour@toisondor.agency",
        availableLanguage: [
          "français",
          "albanais",
          "espagnol",
          "anglais",
        ],
        areaServed: "CH",
      },

      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services de Toison d’Or",

        itemListElement: services.map((service) => ({
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",
            name: service,
            provider: {
              "@id": `${siteUrl}/#organization`,
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Suisse romande",
            },
          },
        })),
      },
    },

    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,

      url: siteUrl,
      name: "Toison d’Or",
      alternateName: "Toison d'Or",

      description:
        "Site officiel de Toison d’Or, maison de création en Suisse romande.",

      inLanguage: "fr-CH",

      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function StructuredData() {
  const jsonLd = JSON.stringify(structuredData).replace(
    /</g,
    "\\u003c",
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLd,
      }}
    />
  );
}