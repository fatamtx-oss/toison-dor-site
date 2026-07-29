import type { MetadataRoute } from "next";

const baseUrl = "https://www.toisondor.agency";

const lastModified = new Date("2026-07-24");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/informations-legales`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    {
      url: `${baseUrl}/politique-de-confidentialite`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}