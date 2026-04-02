import type { MetadataRoute } from "next";
import { sanityClient } from "@/sanity/client";

export const revalidate = 10;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://seoroas.com";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

interface SanityPageEntry {
  pagePath: string;
  priority: number | null;
  changeFrequency: string | null;
  updatedAt: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];
  let redirectSources = new Set<string>();

  if (sanityClient) {
    try {
      const [pages, redirects, posts] = await Promise.all([
        sanityClient.fetch<SanityPageEntry[]>(
          `*[_type == "pageSeo" && isPublished == true && noIndex != true]{
            pagePath,
            priority,
            changeFrequency,
            "updatedAt": _updatedAt
          }`,
          {},
          { next: { revalidate: 10 } }
        ),
        sanityClient.fetch<string[]>(
          `*[_type == "redirect" && isActive == true].source`,
          {},
          { next: { revalidate: 10 } }
        ),
        sanityClient.fetch<{ slug: string; updatedAt: string }[]>(
          `*[_type == "post"] | order(publishedAt desc) { "slug": slug.current, "updatedAt": _updatedAt }`,
          {},
          { next: { revalidate: 10 } }
        ),
      ]);

      redirectSources = new Set(redirects);

      for (const page of pages) {
        if (redirectSources.has(page.pagePath)) continue;
        entries.push({
          url: `${SITE_URL}${page.pagePath}`,
          lastModified: new Date(page.updatedAt),
          changeFrequency: (page.changeFrequency as ChangeFrequency) || "monthly",
          priority: page.priority ?? 0.7,
        });
      }

      for (const post of posts) {
        const blogPath = `/blog/${post.slug}`;
        if (redirectSources.has(blogPath)) continue;
        entries.push({
          url: `${SITE_URL}${blogPath}`,
          lastModified: new Date(post.updatedAt),
          changeFrequency: "weekly",
          priority: 0.7,
        });
      }
    } catch {
      // Sanity unavailable — return empty sitemap
    }
  }

  return entries;
}
