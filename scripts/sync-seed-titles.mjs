import fs from "fs";

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
  "/istanbul-seo-ajansi": "İstanbul SEO Ajansı: Yerel Pazarda Zirveye Çıkın",
  "/ankara-seo-ajansi": "Ankara SEO Ajansı: Markanızı Google'da Büyütün",
  "/izmir-seo-ajansi": "İzmir SEO Ajansı: İşletmenizi Ege'de Öne Çıkarın",
  "/bursa-seo-ajansi": "Bursa SEO Ajansı: Sanayi ve Ticarette Öne Çıkın",
  "/antalya-seo-ajansi": "Antalya SEO Ajansı: Turizm Markanızı Öne Çıkarın",
};

const f = "scripts/seed-page-seo.mjs";
let s = fs.readFileSync(f, "utf8");
let n = 0;
for (const [p, t] of Object.entries(titles)) {
  const esc = p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp('(pagePath: "' + esc + '",[\\s\\S]*?seoTitle: ")([^"]*)(")');
  if (re.test(s)) {
    s = s.replace(re, (m, a, b, c) => a + t + c);
    n++;
  } else {
    console.log("⚠️ bulunamadı:", p);
  }
}
fs.writeFileSync(f, s);
console.log(`${n}/${Object.keys(titles).length} seed başlığı senkronlandı.`);
