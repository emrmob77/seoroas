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

// rev2 (Nasıl yapılır akışı) — GA4/ölçümleme cümlesi eklendi
const REV2_NEW =
  "Gerçek akış hep aynı sırayla ilerler: önce teknik temel, sonra on-page, en son içerik. Başta markalı domain, Search Console kurulumu ve site hızını oturtursun; zemin sağlam olmadan üstüne ne koyarsan kayar. Ardından anahtar kelime araştırması yapıp ürün ve koleksiyon sayfalarının başlık, meta ve metinlerini arama niyetine göre yazarsın. En son blog içeriği ve link building ile otorite büyür. Tüm bu süreci Google Analytics (GA4) ve Search Console ile ölçersin; hangi sayfanın trafik ve satış getirdiğini görmeden doğru optimize edemezsin. AI araçları bu akışı hızlandırdı: artık 'meta yazdırma'dan çıkıp toplu optimizasyon ve içerik üretimine geçtiler. Ama yönü sen vermezsen kalitesiz, birbirinin aynı içerik üretirler; karar hâlâ insanda.";

// Merchant Center / Google Alışveriş paragrafı (s36'dan sonra)
const LSI_MERCHANT = blk(
  "normal",
  "Bir de klasik SEO'da olmayan bir kanal var. Shopify ürünlerini Google Merchant Center'a bağlayıp ürün feed'i gönderdiğinde, ürünlerin Google Alışveriş (Shopping) sekmesinin ücretsiz listelemelerinde de çıkabilir. Yani aynı ürün hem organik arama sonuçlarında hem Alışveriş'te görünür; bu, e-ticaret mağazaları için ekstra ve bedava bir görünürlük katmanıdır.",
  "lsi1"
);

const post = await client.fetch(
  `*[_type=="post" && slug.current=="shopify-seo-nedir"][0]{_id, body}`
);
if (!post?._id) {
  console.error("Post yok");
  process.exit(1);
}
if ((post.body || []).some((b) => b._key === "lsi1")) {
  console.log("ℹ️ LSI eklemeleri zaten var. Çıkılıyor.");
  process.exit(0);
}

const out = [];
for (const b of post.body) {
  if (b._key === "rev2") {
    out.push({ ...b, children: [{ ...b.children[0], text: REV2_NEW }] });
  } else {
    out.push(b);
  }
  if (b._key === "s36") out.push(LSI_MERCHANT);
}

await client.patch(post._id).set({ body: out }).commit();
console.log(`✅ LSI eklendi. Blok: ${post.body.length} → ${out.length}`);
console.log("   + GA4/Analytics ölçümleme (rev2'ye), + Google Merchant Center/Alışveriş (yeni paragraf)");
