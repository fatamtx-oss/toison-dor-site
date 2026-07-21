import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://toisondor.agency";

const titre =
  "Toison d’Or | Maison de création et identité de marque";

const description =
  "Toison d’Or accompagne les entreprises, les marques et les créateurs dans la conception de leur identité, de leur présence digitale et de leurs supports de communication.";

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

  alternates: {
    canonical: "/",
  },

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

  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: siteUrl,
    siteName: "Toison d’Or",
    title: titre,
    description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Toison d’Or — Maison de création",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: titre,
    description,
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "Communication et création digitale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}