import type { Metadata } from "next";

import "./globals.css";

const siteUrl = "https://www.toisondor.agency";

const titre =
  "Toison d’Or | Maison de création en Suisse romande";

const description =
  "Toison d’Or accompagne entreprises, marques et créateurs en identité visuelle, branding, web design, contenus et communication digitale.";

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

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
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
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: titre,
    description,
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CH">
      <body>{children}</body>
    </html>
  );
}