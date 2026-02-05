import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/private", "/.next", "/node_modules"],
      crawlDelay: 1,
    },
    sitemap: "https://hive.dev/sitemap.xml",
  };
}
