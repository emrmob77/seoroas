import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "67vl8x07",
  dataset: "production",
  apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Düz metin blok üretici (link yok)
function blk(style, text, key) {
  return {
    _key: key,
    _type: "block",
    style,
    markDefs: [],
    children: [{ _key: key + "c", _type: "span", marks: [], text }],
  };
}

// Skill + SEO ile güçlendirilmiş yeni/değişen metinler
const REPLACE = {
  // Klasik SEO'dan farkı — somutlaştırıldı (filtre duplicate, varyant, Liquid)
  s19:
    "Temel mantık aynı: Google'ın anlayacağı net sinyaller ver. Ama Shopify'da sorunlar e-ticarete özgü. Bir tişört düşün; 6 beden × 4 renk = 24 varyant, hepsi tek üründe. Üstüne koleksiyon filtreleri biner: '/collections/tisort?renk=mavi' gibi onlarca URL aynı ürünleri farklı adreslerde gösterir ve Google hangisini sıralayacağını şaşırır (filtre duplicate'ı). Bir de Shopify'ın değiştirilemeyen URL yapısı (/products/, /collections/) ve tema dili Liquid var; bunlar klasik bir WordPress sitesinde olmayan kısıtlardır. Yani Shopify SEO, 'SEO biliyorum' ile değil, 'Shopify'ı biliyorum' ile başlar.",
  // Hazır özellikler notu — bulk için app şart
  s36:
    "Bu özellikler iyi bir başlangıç sağlar, ama tek tek çalışır. 500 ürünün meta açıklamasını panelden el ile yazmak günler alır. Toplu (bulk) düzenleme, gelişmiş schema ve otomatik içerik için Shopify tek başına yetmez; bir SEO uygulaması (app) ya da tema/Liquid müdahalesi gerekir. Rekabetin önüne geçmek için de özgün içerik ve teknik optimizasyon şarttır.",
};

// Belirli blokların ÖNCESİ/SONRASI eklenecek yeni bloklar
const NEW_AFTER_s15 = blk(
  "normal",
  "İki şey bu tabloyu keskinleştiriyor. Birincisi: reklam maliyetleri her yıl artıyor. Tıklama başına ödediğin para yükseldikçe organik trafik 'opsiyon' olmaktan çıkıp zorunluluk oluyor. İkincisi: Shopify'da yeni eklediğin ürünler bazen haftalarca indekslenmez; yani Google'da hiç görünmez, satışı kaçırırsın. Doğru teknik kurulum bu ürünleri günler içinde sıralamaya sokar.",
  "rev1"
);

const NEW_BEFORE_s46 = blk(
  "normal",
  "Gerçek akış hep aynı sırayla ilerler: önce teknik temel, sonra on-page, en son içerik. Başta markalı domain, Search Console kurulumu ve site hızını oturtursun; zemin sağlam olmadan üstüne ne koyarsan kayar. Ardından anahtar kelime araştırması yapıp ürün ve koleksiyon sayfalarının başlık, meta ve metinlerini arama niyetine göre yazarsın. En son blog içeriği ve link building ile otorite büyür. AI araçları bu akışı hızlandırdı: artık 'meta yazdırma'dan çıkıp toplu optimizasyon ve içerik üretimine geçtiler. Ama yönü sen vermezsen kalitesiz, birbirinin aynı içerik üretirler; karar hâlâ insanda.",
  "rev2"
);

// FAQ eklemeleri (topluluğun en çok sorduğu 3 soru)
const FAQ_NEW = [
  blk("h3", "Shopify'da toplu (bulk) meta nasıl yazılır?", "rev3"),
  blk(
    "normal",
    "Panelden tek tek yazmak yerine bir SEO uygulaması ya da Matrixify gibi toplu içe/dışa aktarma aracıyla yüzlerce ürünün başlık ve meta açıklamasını tek seferde düzenlersin. Önce bir şablon kurarsın ('{ürün adı} – {marka} | {kategori}' gibi), sonra en çok trafik getiren sayfaları el ile özelleştirirsin. Böylece hem hız hem kalite kazanırsın.",
    "rev4"
  ),
  blk("h3", "Yeni eklediğim ürünler Google'da ne zaman çıkar?", "rev5"),
  blk(
    "normal",
    "Genelde birkaç gün ile birkaç hafta arası. Hızlandırmak için ürünü sitemap'te tut, Search Console'dan 'Dizine ekleme isteği' gönder ve yeni ürüne iç link ver: ana sayfa, ilgili koleksiyon veya bir blog yazısı. Kimsenin bağlanmadığı, iç linki olmayan ürünler en geç indekslenenlerdir.",
    "rev6"
  ),
  blk("h3", "Filtre ve etiket sayfaları (renk, beden) SEO'da ne olur?", "rev7"),
  blk(
    "normal",
    "Bunlar yinelenen içerik riskidir. Değersiz filtre kombinasyonlarını canonical ile ana koleksiyona yönlendirir ya da noindex ile indeks dışı bırakırsın. Ama arama hacmi olan filtreleri ('siyah spor ayakkabı' gibi) ayrı, indekslenebilir bir koleksiyon sayfasına çevirmek ciddi trafik kazandırır. Yani hepsini kapatma; değerli olanı seç ve ayır.",
    "rev8"
  ),
];

const post = await client.fetch(
  `*[_type=="post" && slug.current=="shopify-seo-nedir"][0]{_id, body}`
);
if (!post?._id) {
  console.error("Post bulunamadı");
  process.exit(1);
}

// Idempotent: rev anahtarları zaten varsa tekrar ekleme
if ((post.body || []).some((b) => String(b._key).startsWith("rev"))) {
  console.log("ℹ️ Revizyon zaten uygulanmış (rev* blokları mevcut). Çıkılıyor.");
  process.exit(0);
}

const out = [];
for (const b of post.body) {
  // metin değişimi
  if (REPLACE[b._key]) {
    out.push({ ...b, children: [{ ...b.children[0], text: REPLACE[b._key] }] });
  } else {
    out.push(b);
  }
  if (b._key === "s15") out.push(NEW_AFTER_s15);
  if (b._key === "s44") {
    /* yok */
  }
}

// s46'dan ÖNCE ekleme (out içinde s46'nın indexini bul)
const idx46 = out.findIndex((b) => b._key === "s46");
if (idx46 !== -1) out.splice(idx46, 0, NEW_BEFORE_s46);

// FAQ'leri en sona ekle
out.push(...FAQ_NEW);

await client.patch(post._id).set({ body: out }).commit();
console.log(`✅ Body güncellendi. Eski blok: ${post.body.length} → yeni: ${out.length}`);
console.log("   Eklenen: Neden önemli (+1), Nasıl yapılır akışı (+1), FAQ (+6); güçlendirilen: s19, s36");
