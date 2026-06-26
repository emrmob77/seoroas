import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "67vl8x07",
  dataset: "production",
  apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

function blk(style, text, key) {
  return {
    _key: key,
    _type: "block",
    style,
    markDefs: [],
    children: [{ _key: key + "c", _type: "span", marks: [], text }],
  };
}

const REPLACE = {
  // intro: odak kelime "Shopify SEO ayarları" + kurulum cümlesi
  intro:
    "Shopify admin panelinde SEO ayarlarının çoğu kod yazmadan yapılabiliyor. Ama birçok mağaza sahibi bu ayarları ya yanlış yapıyor ya da tamamen atlıyor. Biz SEOROAS'ta yüzlerce Shopify sitesi yönetirken gördük ki, paneldeki küçük dokunuşlar bile sıralamaları ve tıklanma oranlarını ciddi şekilde etkileyebiliyor. Bu yazıda tüm önemli Shopify SEO ayarlarını, panelde tam olarak nereden yapıldıklarıyla birlikte tek tek gösteriyoruz.",
  // bulk: Matrixify + şablon mantığı
  "p-bulk":
    "200-300 ürününüz varsa tek tek meta yazmak imkânsız; toplulukta en çok sorulan soru da bu. Native panel burada yetersiz kalıyor. Çözüm: bir SEO uygulaması ya da Matrixify gibi bir araçla ürünleri CSV olarak dışa aktarıp meta alanlarını şablonla toplu doldurmak. Önce bir kalıp kurarsın ('{ürün adı} – {marka} | {kategori}' gibi), sonra en çok satan 50-100 ürünü el ile özelleştirirsin. Böylece hem hız hem kalite gelir.",
};

// robots/sitemap'ten (p-robots) sonra eklenecek yeni Schema bölümü
const NEW_SCHEMA = [
  blk("h2", "Yapılandırılmış Veri (Schema) Ayarı", "ayr1"),
  blk(
    "normal",
    "Ürün, fiyat ve stok bilgisini Google'a net iletmek için yapılandırılmış veri (Product ve Offer schema) gerekir. Bu, arama sonuçlarında yıldız puanı, fiyat ve stok gibi zengin sonuçların çıkmasını sağlar ve tıklanma oranını yükseltir. Çoğu Shopify teması temel schema'yı otomatik ekler, ama bu çoğu zaman eksik ya da hatalı olur. Rich Results Test ile kontrol et; eksik varsa bir SEO uygulaması veya tema (Liquid) düzenlemesiyle tamamla.",
    "ayr2"
  ),
];

const post = await client.fetch(
  `*[_type=="post" && slug.current=="shopify-seo-ayarlari"][0]{_id, body}`
);
if (!post?._id) {
  console.error("Post yok");
  process.exit(1);
}
if ((post.body || []).some((b) => b._key === "ayr1")) {
  console.log("ℹ️ Revizyon zaten uygulanmış. Çıkılıyor.");
  process.exit(0);
}

const out = [];
for (const b of post.body) {
  if (REPLACE[b._key]) {
    out.push({ ...b, children: [{ ...b.children[0], text: REPLACE[b._key] }] });
  } else {
    out.push(b);
  }
  if (b._key === "p-robots") out.push(...NEW_SCHEMA);
}

await client.patch(post._id).set({ body: out }).commit();
console.log(`✅ Güncellendi. Blok: ${post.body.length} → ${out.length}`);
console.log("   intro(odak kelime), p-bulk(Matrixify/şablon), +Schema bölümü (yapılandırılmış veri)");
