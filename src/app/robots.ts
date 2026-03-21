import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/studio/", "/tesekkurler"],
    },
    sitemap: "https://seoroas.com/sitemap.xml",
  };
}
