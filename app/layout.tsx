export const metadata: Metadata = {
  metadataBase: new URL("https://toison-dor-site.vercel.app"),

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
    url: "https://toison-dor-site.vercel.app",
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