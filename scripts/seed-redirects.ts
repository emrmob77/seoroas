/**
 * WordPress -> Next.js migration redirect'lerini Sanity'ye yükler.
 *
 * Kullanım:
 *   npx tsx scripts/seed-redirects.ts
 *
 * Gerekli env değişkenleri:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID
 *   NEXT_PUBLIC_SANITY_DATASET
 *   SANITY_API_TOKEN
 */

import "dotenv/config";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
});

const redirects = [
  // Hizmet sayfaları - URL yapısı değişti
  { source: "/e-ticaret-seo", destination: "/seo/e-ticaret-seo", note: "WP migration: hizmet URL değişikliği" },
  { source: "/wordpress-seo", destination: "/seo/wordpress-seo", note: "WP migration: hizmet URL değişikliği" },
  { source: "/shopify-seo", destination: "/seo/shopify-seo", note: "WP migration: hizmet URL değişikliği" },
  { source: "/seo-danismani", destination: "/seo-danismanligi", note: "WP migration: slug değişikliği" },
  { source: "/kurumsal-seo", destination: "/seo/kurumsal-seo", note: "WP migration: yeni sayfa yönlendirmesi" },
  { source: "/seo-ajansi", destination: "/seo/seo-ajansi", note: "WP migration: yeni sayfa yönlendirmesi" },

  // Blog yazıları - root'tan /blog/ altına taşındı
  { source: "/seo-nedir", destination: "/blog/seo-nedir", note: "WP migration: blog yazısı" },
  { source: "/seo-nasil-yapilir", destination: "/blog/seo-nasil-yapilir", note: "WP migration: blog yazısı" },
  { source: "/seo-terimleri", destination: "/blog/seo-terimleri", note: "WP migration: blog yazısı" },
  { source: "/roas-nedir", destination: "/blog/roas-nedir", note: "WP migration: blog yazısı" },
  { source: "/google-analytics-nedir", destination: "/blog/google-analytics-nedir", note: "WP migration: blog yazısı" },
  { source: "/google-analytics-4-kurulum-rehberi", destination: "/blog/google-analytics-4-kurulum-rehberi", note: "WP migration: blog yazısı" },
  { source: "/search-console-nedir", destination: "/blog/search-console-nedir", note: "WP migration: blog yazısı" },
  { source: "/icerik-pazarlamasi-nedir", destination: "/blog/icerik-pazarlamasi-nedir", note: "WP migration: blog yazısı" },
  { source: "/favicon-nedir", destination: "/blog/favicon-nedir", note: "WP migration: blog yazısı" },
  { source: "/google-benim-isletmem-rehberi", destination: "/blog/google-benim-isletmem-rehberi", note: "WP migration: blog yazısı" },
  { source: "/backlink-nedir-seo-icin-onemi-ve-nasil-yapilir", destination: "/blog/backlink-nedir-seo-icin-onemi-ve-nasil-yapilir", note: "WP migration: blog yazısı" },

  // Kategori arşivleri
  { source: "/e-ticaret", destination: "/blog", note: "WP migration: kategori arşivi" },
  { source: "/seo", destination: "/blog", note: "WP migration: kategori arşivi" },
  { source: "/shopify", destination: "/blog", note: "WP migration: kategori arşivi" },
  { source: "/wordpress", destination: "/blog", note: "WP migration: kategori arşivi" },

  // Yazar arşivleri
  { source: "/author/emrah-tonlak", destination: "/hakkimizda", note: "WP migration: yazar arşivi" },
  { source: "/author/seoroas", destination: "/hakkimizda", note: "WP migration: yazar arşivi" },
];

async function seed() {
  console.log(`Toplam ${redirects.length} redirect yüklenecek...\n`);

  const transaction = client.transaction();

  for (const r of redirects) {
    const id = `redirect-${r.source.replace(/\//g, "-").replace(/^-/, "")}`;
    transaction.createOrReplace({
      _id: id,
      _type: "redirect",
      source: r.source,
      destination: r.destination,
      statusCode: 301,
      isActive: true,
      note: r.note,
    });
  }

  const result = await transaction.commit();
  console.log(`${redirects.length} redirect başarıyla yüklendi.`);
  console.log(`Transaction ID: ${result.transactionId}`);
}

seed().catch((err) => {
  console.error("Hata:", err.message);
  process.exit(1);
});
