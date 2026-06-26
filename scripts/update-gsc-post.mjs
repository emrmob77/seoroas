import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "67vl8x07", dataset: "production", apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN, useCdn: false,
});

function plain(b, text) { return { ...b, markDefs: [], children: [{ _key: b._key + "s", _type: "span", marks: [], text }] }; }

const post = await client.fetch(`*[_type=="post" && slug.current=="search-console-nedir"][0]{_id, body}`);
if (!post?._id) { console.error("Post yok"); process.exit(1); }

const out = post.body.map((b) => {
  // Giriş: hook + odak kelime "Search Console nedir" + ic link
  if (b._key === "k2") {
    return {
      ...b,
      markDefs: [{ _key: "k2lnk", _type: "link", href: "/seo/teknik-seo" }],
      children: [
        { _key: "k2a", _type: "span", marks: [], text: "Google'da kaçıncı sıradasın, hangi kelimeyle kaç tıklama alıyorsun, hangi sayfan hiç indekslenmemiş? Bunları tahmin etmek yerine görmek istiyorsan cevap Google Search Console. Peki Search Console nedir? Google'ın, sitenin aramadaki performansını ve teknik sağlığını ücretsiz gösteren aracıdır; ciddi her SEO çalışması burada başlar. Teknik tarafı derinlemesine ele aldığımız " },
        { _key: "k2b", _type: "span", marks: ["k2lnk"], text: "teknik SEO" },
        { _key: "k2c", _type: "span", marks: [], text: " rehberimizle birlikte kullanabilirsin." },
      ],
    };
  }
  // Adım 8 başlığı: Mobil Kullanılabilirlik (kaldırıldı) -> Core Web Vitals
  if (b._key === "k22") return plain(b, "Adım 8: Core Web Vitals ve Sayfa Deneyimi");
  if (b._key === "k24") return plain(b, "Core Web Vitals raporu, sayfalarının gerçek kullanıcı deneyimini LCP, INP ve CLS metrikleriyle gösterir. (Not: eski \"Mobil Kullanılabilirlik\" raporu Aralık 2023'te kaldırıldı; bugün odak Core Web Vitals'tır.)");
  if (b._key === "k26") return plain(b, "Search Console'da sol menüden \"Core Web Vitals\"ı açın.");
  if (b._key === "k28") return plain(b, "LCP, INP ve CLS değerlerini mobil ve masaüstü için ayrı ayrı inceleyin.");
  if (b._key === "k2a") return plain(b, "\"İyileştirme gerekiyor\" veya \"Kötü\" işaretli URL gruplarını önceliklendirip düzeltin.");
  return b;
});

await client.patch(post._id).set({
  body: out,
  "seo.focusKeyword": "search console nedir",
  "seo.seoTitle": "Search Console Nedir? Kurulum ve Kullanım Rehberi",
}).commit();

console.log("✅ search-console-nedir: giriş(hook+odak+link), Adım 8 → Core Web Vitals (güncellik), meta set.");
