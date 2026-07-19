import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://toison-dor-site.vercel.app"),

  title: {
    default: "Toison d’Or | Maison de création et identité de marque",
    template: "%s | Toison d’Or",
  },

  description:
    "Toison d'Or, maison de création dédiée aux identités de marque, aux expériences digitales et aux supports de communication.",

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
    url: "https://toison-dor-site.vercel.app",
    siteName: "Toison d’Or",
    title: "Toison d’Or | Maison de création et identité de marque",
    description:
      "Toison d'Or, maison de création dédiée aux identités de marque, aux expériences digitales et aux supports de communication.",
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
    description:
      "Toison d'Or, maison de création dédiée aux identités de marque, aux expériences digitales et aux supports de communication.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
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