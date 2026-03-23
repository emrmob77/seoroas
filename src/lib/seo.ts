import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/client";

const SITE_URL = "https://seoroas.com";
const SITE_NAME = "SEOROAS";

interface SeoParams {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  canonicalUrl?: string;
}

interface SanitySeo {
  seoTitle?: string;
  seoDescription?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  canonicalUrl?: string;
  ogImage?: { asset?: { url?: string } };
}

const PAGE_SEO_QUERY = `*[_type == "page" && path == $path][0]{
  "seoTitle": seo.seoTitle,
  "seoDescription": seo.seoDescription,
  "noIndex": seo.noIndex,
  "noFollow": seo.noFollow,
  "canonicalUrl": seo.canonicalUrl,
  "ogImage": seo.ogImage{ asset->{ url } }
}`;

async function fetchPageSeo(path: string): Promise<SanitySeo | null> {
  try {
    return await sanityFetch<SanitySeo | null>(PAGE_SEO_QUERY, { path });
  } catch {
    return null;
  }
}

export function mergeSanitySeo(
  defaults: SeoParams,
  sanitySeo?: SanitySeo | null
): SeoParams {
  if (!sanitySeo) return defaults;

  return {
    title: sanitySeo.seoTitle || defaults.title,
    description: sanitySeo.seoDescription || defaults.description,
    path: defaults.path,
    ogImage: sanitySeo.ogImage?.asset?.url || defaults.ogImage,
    noIndex: sanitySeo.noIndex ?? defaults.noIndex,
    noFollow: sanitySeo.noFollow ?? defaults.noFollow,
    canonicalUrl: sanitySeo.canonicalUrl || defaults.canonicalUrl,
  };
}

function cleanTitle(title: string): string {
  return title
    .replace(/\s*\|\s*SEOROAS\s*$/i, "")
    .replace(/\s*—\s*SEOROAS\s*$/i, "")
    .trim();
}

function buildMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex,
  noFollow,
  canonicalUrl,
}: SeoParams): Metadata {
  const url = canonicalUrl || `${SITE_URL}${path}`;
  const clean = cleanTitle(title);
  const displayTitle = `${clean} | ${SITE_NAME}`;

  const titleValue: Metadata["title"] =
    path === "/" ? { absolute: clean } : clean;

  const robotsDirectives = { index: !noIndex, follow: !noFollow };
  const hasCustomRobots = noIndex || noFollow;

  return {
    title: titleValue,
    description,
    alternates: {
      canonical: url,
      languages: { tr: url, "x-default": url },
    },
    openGraph: {
      title: displayTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "tr_TR",
      type: "website",
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, height: 630 }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
    },
    robots: hasCustomRobots ? robotsDirectives : undefined,
  };
}

/**
 * Statik metadata — Sanity'den veri çekmez.
 * Sadece Sanity entegrasyonu gerekmeyen sayfalar için (tesekkurler, gizlilik vb.)
 */
export function generateSeoMetadata(params: SeoParams): Metadata {
  return buildMetadata(params);
}

/**
 * Dinamik metadata — Sanity'den SEO override varsa onu kullanır.
 * Tüm ana sayfalar bu fonksiyonu kullanmalı.
 */
export async function generateDynamicSeoMetadata(
  defaults: SeoParams
): Promise<Metadata> {
  const sanitySeo = await fetchPageSeo(defaults.path);
  const merged = mergeSanitySeo(defaults, sanitySeo);
  return buildMetadata(merged);
}
