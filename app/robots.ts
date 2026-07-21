import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: "https://toisondor.agency/sitemap.xml",
    host: "https://toisondor.agency",
  };
}