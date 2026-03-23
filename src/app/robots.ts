import type { MetadataRoute } from "next";
import { sanityClient } from "@/sanity/client";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://seoroas.com";

const DEFAULT_DISALLOW = ["/api/", "/admin/", "/studio/", "/tesekkurler"];

export default async function robots(): Promise<MetadataRoute.Robots> {
  let disallow = DEFAULT_DISALLOW;
  let customRules = "";

  try {
    const settings = await sanityClient?.fetch<{
      robotsDisallow?: string[];
      robotsCustomRules?: string;
    }>('*[_type == "siteSettings"][0]{ robotsDisallow, robotsCustomRules }');

    if (settings?.robotsDisallow?.length) {
      disallow = [...DEFAULT_DISALLOW, ...settings.robotsDisallow];
    }
    if (settings?.robotsCustomRules) {
      customRules = settings.robotsCustomRules;
    }
  } catch {
    // Sanity unavailable, use defaults
  }

  const result: MetadataRoute.Robots = {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow,
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };

  if (customRules) {
    (result as Record<string, unknown>).additionalSitemaps = customRules;
  }

  return result;
}
