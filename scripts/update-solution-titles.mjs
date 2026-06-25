import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "67vl8x07",
  dataset: "production",
  apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const titles = {
  "/seo/on-page-seo": "On-page SEO ile her sayfanızı zirveye taşıyoruz",
  "/seo/teknik-seo": "Teknik SEO ile sitenizi hızlı ve sağlam kuruyoruz",
  "/seo/link-building": "Link building ile alan otoritenizi büyütüyoruz",
  "/seo/lokal-seo": "Lokal SEO ile yakın çevredeki müşterilere ulaşın",
  "/seo/e-ticaret-seo": "E-ticaret SEO ile ürünlerinizi öne çıkarıyoruz",
  "/seo/icerik-seo": "İçerik SEO ile içerikten organik trafik üretiyoruz",
  "/seo/wordpress-seo": "WordPress SEO ile sitenizi hızlandırıp büyütüyoruz",
  "/seo/shopify-seo": "Shopify SEO ile mağazanızı Google’da büyütüyoruz",
  "/seo/kurumsal-seo": "Kurumsal SEO ile büyük siteleri ölçeklendiriyoruz",
  "/seo/seo-ajansi": "SEO ajansı olarak gelirinizi veriyle büyütüyoruz",
  "/hizmetler/google-tag-manager": "Google Tag Manager ile ölçümü tek yerden yönetin",
  "/hizmetler/meta-pixel-capi": "Meta Pixel ve CAPI ile dönüşüm ölçümünü kuruyoruz",
  "/hizmetler/tiktok-pixel": "TikTok Pixel ile reklam dönüşümlerinizi ölçüyoruz",
  "/geo": "GEO ile markanızı yapay zeka aramalarına taşıyoruz",
  "/istanbul-seo-ajansi": "İstanbul’da işletmenizi SEO ile zirveye taşıyoruz",
  "/ankara-seo-ajansi": "Ankara’da markanızı SEO ile Google’da büyütüyoruz",
  "/izmir-seo-ajansi": "İzmir’de işletmenizi SEO ile Ege’de büyütüyoruz",
  "/bursa-seo-ajansi": "Bursa’da sanayi ve ticareti SEO ile büyütüyoruz",
  "/antalya-seo-ajansi": "Antalya’da turizm markalarını SEO ile büyütüyoruz",
};

const docs = await client.fetch(
  `*[_type=="pageSeo" && pagePath in $paths]{_id,pagePath}`,
  { paths: Object.keys(titles) }
);
const idByPath = new Map(docs.map((d) => [d.pagePath, d._id]));

let ok = 0,
  missing = [];
for (const [path, title] of Object.entries(titles)) {
  const id = idByPath.get(path);
  if (!id) {
    missing.push(path);
    continue;
  }
  await client.patch(id).set({ seoTitle: title }).commit();
  console.log(`✅ ${path}  →  ${title}`);
  ok++;
}
console.log(`\n${ok}/${Object.keys(titles).length} güncellendi.`);
if (missing.length) console.log("⚠️ pageSeo bulunamadı:", missing.join(", "));
