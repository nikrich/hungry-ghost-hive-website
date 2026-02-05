import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hive.dev";

  const routes = [
    "/",
    "/features",
    "/how-it-works",
    "/pricing",
    "/about",
    "/contact",
    "/docs",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  })) as MetadataRoute.Sitemap;
}
