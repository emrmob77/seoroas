import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "67vl8x07",
  dataset: "production",
  apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Stil: "Anahtar Kelime: Aksiyon" — Başlık Düzeni (Title Case), ~55-60 karakter render.
const titles = {
  "/seo/on-page-seo": "On-Page SEO: Sayfalarınızı Aramada Öne Çıkarın",
  "/seo/teknik-seo": "Teknik SEO: Sitenizi Hızlı ve Taranabilir Yapın",
  "/seo/link-building": "Link Building: Alan Otoritenizi Linklerle Büyütün",
  "/seo/lokal-seo": "Lokal SEO: Yakın Çevredeki Müşterilere Ulaşın",
  "/seo/e-ticaret-seo": "E-Ticaret SEO: Ürünlerinizi Aramada Öne Çıkarın",
  "/seo/icerik-seo": "İçerik SEO: Konu Otoritenizi İçerikle Büyütün",
  "/seo/wordpress-seo": "WordPress SEO: Sitenizi Hızlandırın ve Büyütün",
  "/seo/shopify-seo": "Shopify SEO: Mağaza Trafiğinizi ve Satışı Büyütün",
  "/seo/kurumsal-seo": "Kurumsal SEO: Büyük Ölçekte Organik Büyüme Kurun",
  "/seo/seo-ajansi": "SEO Ajansı: Gelirinizi Veriyle ve Şeffaf Büyütün",
  "/hizmetler/google-tag-manager": "Google Tag Manager: Ölçümü Tek Yerden Yönetin",
  "/hizmetler/meta-pixel-capi": "Meta Pixel ve CAPI: Reklam Dönüşüm Ölçümünü Kurun",
  "/hizmetler/tiktok-pixel": "TikTok Pixel: Reklam Dönüşümlerinizi Doğru Ölçün",
  "/geo": "GEO: Markanızı Yapay Zekâ Aramalarında Gösterin",
  "/istanbul-seo-ajansi": "İstanbul SEO Ajansı: Yerel Pazarda Zirveye Çıkın",
  "/ankara-seo-ajansi": "Ankara SEO Ajansı: Markanızı Google'da Büyütün",
  "/izmir-seo-ajansi": "İzmir SEO Ajansı: İşletmenizi Ege'de Öne Çıkarın",
  "/bursa-seo-ajansi": "Bursa SEO Ajansı: Sanayi ve Ticarette Öne Çıkın",
  "/antalya-seo-ajansi": "Antalya SEO Ajansı: Turizm Markanızı Öne Çıkarın",
};

const docs = await client.fetch(
  `*[_type=="pageSeo" && pagePath in $paths]{_id,pagePath}`,
  { paths: Object.keys(titles) }
);
const idByPath = new Map(docs.map((d) => [d.pagePath, d._id]));

let ok = 0;
const missing = [];
for (const [path, title] of Object.entries(titles)) {
  const id = idByPath.get(path);
  if (!id) {
    missing.push(path);
    continue;
  }
  await client.patch(id).set({ seoTitle: title }).commit();
  console.log(`✅ [${[...title].length + 10}] ${path}  →  ${title}`);
  ok++;
}
console.log(`\n${ok}/${Object.keys(titles).length} güncellendi.`);
if (missing.length) console.log("⚠️ bulunamadı:", missing.join(", "));
