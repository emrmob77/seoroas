import { sanityClient } from "@/sanity/client";

export const revalidate = 3600;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://seoroas.com";

interface PageEntry {
  pagePath: string;
  pageLabel: string | null;
  seoDescription: string | null;
}

interface PostEntry {
  title: string;
  slug: string;
  excerpt: string | null;
}

// Hizmet sayfalarını mantıklı sırada göstermek için öncelik listesi
const SERVICE_ORDER = [
  "/seo",
  "/seo/shopify-danismanligi",
  "/seo/shopify-seo",
  "/seo/e-ticaret-seo",
  "/seo/teknik-seo",
  "/seo/on-page-seo",
  "/seo/icerik-seo",
  "/seo/link-building",
  "/seo/lokal-seo",
  "/seo/kurumsal-seo",
  "/seo/wordpress-seo",
  "/seo/seo-ajansi",
  "/seo-danismanligi",
  "/geo",
  "/hizmetler",
  "/hizmetler/google-tag-manager",
  "/hizmetler/meta-pixel-capi",
  "/hizmetler/tiktok-pixel",
];

const CORPORATE_PATHS = new Set([
  "/hakkimizda",
  "/referanslar",
  "/seo-fiyatlari",
  "/iletisim",
  "/blog",
]);

function line(label: string, url: string, desc?: string | null) {
  const clean = (desc || "").replace(/\s+/g, " ").trim();
  return clean ? `- [${label}](${url}): ${clean}` : `- [${label}](${url})`;
}

export async function GET() {
  let services: PageEntry[] = [];
  let corporate: PageEntry[] = [];
  let posts: PostEntry[] = [];

  if (sanityClient) {
    try {
      const [pages, postDocs] = await Promise.all([
        sanityClient.fetch<PageEntry[]>(
          `*[_type == "pageSeo" && isPublished == true && noIndex != true]{
            pagePath, pageLabel, seoDescription
          }`,
          {},
          { next: { revalidate: 3600 } }
        ),
        sanityClient.fetch<PostEntry[]>(
          `*[_type == "post"] | order(publishedAt desc)[0...30]{
            title, "slug": slug.current, "excerpt": coalesce(excerpt, seo.seoDescription)
          }`,
          {},
          { next: { revalidate: 3600 } }
        ),
      ]);

      const byPath = new Map(pages.map((p) => [p.pagePath, p]));
      services = SERVICE_ORDER.map((path) => byPath.get(path)).filter(
        (p): p is PageEntry => Boolean(p)
      );
      corporate = pages.filter((p) => CORPORATE_PATHS.has(p.pagePath));
      posts = (postDocs || []).filter((p) => p.slug);
    } catch {
      // Sanity erişilemezse minimum statik içerik döneriz
    }
  }

  const parts: string[] = [];

  parts.push("# SEOROAS");
  parts.push("");
  parts.push(
    "> SEOROAS, Türkiye merkezli; veri ve gelir (ROAS) odaklı bir SEO ve dijital büyüme ajansıdır. " +
      "Teknik SEO, e-ticaret ve Shopify SEO, Shopify danışmanlık (kurulum, tema/yazılım geliştirme, Google Ads, GA4 & veri kurulumu), " +
      "içerik SEO, link building, lokal SEO ve GEO (üretken arama / AI arama optimizasyonu) hizmetleri sunar."
  );
  parts.push("");
  parts.push(
    "SEOROAS, ölçülebilir organik trafik ve dönüşüm büyümesi hedefler; Shopify, WooCommerce ve özel altyapılarda çalışan " +
      "e-ticaret markalarına uçtan uca destek verir. İletişim: " +
      `${SITE_URL}/iletisim`
  );
  parts.push("");

  if (services.length) {
    parts.push("## Hizmetler");
    for (const s of services) {
      parts.push(line(s.pageLabel || s.pagePath, `${SITE_URL}${s.pagePath}`, s.seoDescription));
    }
    parts.push("");
  }

  if (corporate.length) {
    parts.push("## Kurumsal");
    for (const c of corporate) {
      parts.push(line(c.pageLabel || c.pagePath, `${SITE_URL}${c.pagePath}`, c.seoDescription));
    }
    parts.push("");
  }

  if (posts.length) {
    parts.push("## Rehberler ve Blog");
    for (const p of posts) {
      parts.push(line(p.title, `${SITE_URL}/blog/${p.slug}`, p.excerpt));
    }
    parts.push("");
  }

  parts.push("## Notlar");
  parts.push(
    "- Tüm içerik Türkçedir ve Türkiye pazarına yöneliktir."
  );
  parts.push(
    "- Sıralama, fiyatlandırma ve kapsam bilgileri için ilgili hizmet sayfalarına bakınız."
  );
  parts.push(`- Sitemap: ${SITE_URL}/sitemap.xml`);
  parts.push("");

  const body = parts.join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
