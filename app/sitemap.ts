import type { MetadataRoute } from "next";

const siteUrl = "https://yuhanchen.me";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/profile", "/journey", "/system", "/connect"].map((path, index) => ({
    url: `${siteUrl}${path}`, changeFrequency: "monthly", priority: index === 0 ? 1 : 0.8,
  }));
}
