import type { Metadata } from "next";

import "./globals.css";
import StructuredData from "./components/StructuredData";
import FaqStructuredData from "./ui/FaqStructuredData";

const siteUrl = "https://www.toisondor.agency";

const titre = "Toison d’Or | Source d'identité en Suisse romande";

const description =
  "Toison d’Or accompagne entreprises, marques et créateurs en Suisse romande dans la création d’identités visuelles, de sites web, de contenus et de communications digitales.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: titre,
    template: "%s | Toison d’Or",
  },

  description,

  applicationName: "Toison d’Or",

  authors: [
    {
      name: "Toison d’Or",
      url: siteUrl,
    },
  ],

  creator: "Toison d’Or",
  publisher: "Toison d’Or",

  category: "Communication et création digitale",

  keywords: [
    "agence de communication",
    "source d'identité",
    "identité visuelle",
    "branding",
    "création de marque",
    "web design",
    "création de site internet",
    "communication digitale",
    "création de contenu",
    "direction artistique",
    "photographie",
    "Suisse romande",
    "Vaud",
    "Vevey",
    "Montreux",
    "Lausanne",
    "Toison d’Or",
  ],

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: siteUrl,
    siteName: "Toison d’Or",
    title: titre,
    description,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Toison d’Or — Briller autrement",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: titre,
    description,
    images: [
      {
        url: "/images/og-image.png",
        alt: "Toison d’Or — Briller autrement",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CH">
     <body>
  <StructuredData />
  <FaqStructuredData />
  {children}
</body>
    </html>
  );
}