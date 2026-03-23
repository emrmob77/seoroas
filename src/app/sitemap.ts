import type { MetadataRoute } from "next";
import { sanityClient } from "@/sanity/client";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://seoroas.com";

const staticPages = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1.0 },
  { path: "/seo-fiyatlari", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/blog", changeFrequency: "daily" as const, priority: 0.9 },
  { path: "/hakkimizda", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/referanslar", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/seo-danismanligi", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/iletisim", changeFrequency: "yearly" as const, priority: 0.6 },
  { path: "/gizlilik-politikasi", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/kullanim-sartlari", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/seo", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/hizmetler", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/seo/on-page-seo", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/seo/teknik-seo", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/seo/link-building", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/seo/lokal-seo", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/seo/e-ticaret-seo", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/seo/icerik-seo", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/seo/wordpress-seo", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/seo/shopify-seo", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/seo/seo-ajansi", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/seo/kurumsal-seo", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/hizmetler/google-tag-manager", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/hizmetler/meta-pixel-capi", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/hizmetler/tiktok-pixel", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/istanbul-seo-ajansi", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/ankara-seo-ajansi", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/izmir-seo-ajansi", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/bursa-seo-ajansi", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/antalya-seo-ajansi", changeFrequency: "monthly" as const, priority: 0.8 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  if (sanityClient) {
    try {
      const posts = await sanityClient.fetch<{ slug: string; updatedAt: string }[]>(
        `*[_type == "post"] | order(publishedAt desc) { "slug": slug.current, "updatedAt": _updatedAt }`
      );

      for (const post of posts) {
        entries.push({
          url: `${SITE_URL}/blog/${post.slug}`,
          lastModified: new Date(post.updatedAt),
          changeFrequency: "weekly",
          priority: 0.7,
        });
      }
    } catch {
      // Sanity unavailable, skip blog posts in sitemap
    }
  }

  return entries;
}
