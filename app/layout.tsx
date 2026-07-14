import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const description =
  "Toison d’Or accompagne les maisons, artisans et marques en devenir dans la création d’identités sensibles, cohérentes et durables.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.toisondor.ch"),

  title: {
    default: "Toison d’Or | Maison de création et identité de marque",
    template: "%s | Toison d’Or",
  },

  description,

  applicationName: "Toison d’Or",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: "https://www.toisondor.ch",
    siteName: "Toison d’Or",
    title: "Toison d’Or | Maison de création et identité de marque",
    description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Toison d’Or — Maison de création et identité de marque",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Toison d’Or | Maison de création et identité de marque",
    description,
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.toisondor.ch/#organization",
      name: "Toison d’Or",
      url: "https://www.toisondor.ch",
      logo: {
        "@type": "ImageObject",
        url: "https://www.toisondor.ch/images/logo.svg",
      },
      email: "info@toisondor.ch",
      description,
      areaServed: {
        "@type": "Country",
        name: "Suisse",
      },
      knowsAbout: [
        "Identité de marque",
        "Direction artistique",
        "Identité visuelle",
        "Sites internet",
        "Supports éditoriaux",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.toisondor.ch/#website",
      url: "https://www.toisondor.ch",
      name: "Toison d’Or",
      description,
      inLanguage: "fr-CH",
      publisher: {
        "@id": "https://www.toisondor.ch/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr-CH"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />

        {children}
      </body>
    </html>
  );
}