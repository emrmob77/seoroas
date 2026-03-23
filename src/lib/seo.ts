import type { Metadata } from "next";

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

/**
 * Sanity'den gelen seo object alanlarını standart parametrelere dönüştürür.
 * Sanity değeri varsa onu, yoksa fallback değerini kullanır.
 */
export function mergeSanitySeo(
  defaults: SeoParams,
  sanitySeo?: {
    seoTitle?: string;
    seoDescription?: string;
    noIndex?: boolean;
    noFollow?: boolean;
    canonicalUrl?: string;
    ogImage?: { asset?: { url?: string } };
  } | null
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

export function generateSeoMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex,
  noFollow,
  canonicalUrl,
}: SeoParams): Metadata {
  const url = canonicalUrl || `${SITE_URL}${path}`;
  const cleanTitle = title.replace(/\s*\|\s*SEOROAS\s*$/i, "").replace(/\s*—\s*SEOROAS\s*$/i, "").trim();
  const fullTitle = path === "/" ? cleanTitle : `${cleanTitle} | ${SITE_NAME}`;

  const robotsDirectives: { index: boolean; follow: boolean } = {
    index: !noIndex,
    follow: !noFollow,
  };

  const hasCustomRobots = noIndex || noFollow;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
      languages: { tr: url, "x-default": url },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "tr_TR",
      type: "website",
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: hasCustomRobots ? robotsDirectives : undefined,
  };
}
