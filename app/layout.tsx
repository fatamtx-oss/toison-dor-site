import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://toisondor.agency";

const title =
  "Toison d'Or | Maison de création · Identité de marque, web design & communication";

const description =
  "Toison d'Or est une maison de création indépendante qui accompagne les entreprises, les marques et les créateurs dans la révélation de leur identité. Branding, identité visuelle, web design, création de contenus et communication digitale.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: title,
    template: "%s | Toison d'Or",
  },

  description,

  applicationName: "Toison d'Or",

  authors: [
    {
      name: "Toison d'Or",
      url: siteUrl,
    },
  ],

  creator: "Toison d'Or",
  publisher: "Toison d'Or",
  category: "Communication",

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
    siteName: "Toison d'Or",
    title,
    description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Toison d'Or",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0G37ERN2XF"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0G37ERN2XF');
          `}
        </Script>
      </head>

      <body>{children}</body>
    </html>
  );
}