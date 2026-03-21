import type { Metadata } from "next";

const SITE_URL = "https://seoroas.com";
const SITE_NAME = "SEOROAS";

interface SeoParams {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generateSeoMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex,
}: SeoParams): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;

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
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
