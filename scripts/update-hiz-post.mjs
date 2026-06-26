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
  b1:
    "Yavaş açılan bir Shopify mağazası hem müşteriyi hem de Google sıralamalarını kaybediyor. Biz SEOROAS'ta bir sürü e-ticaret projesi yönettik ve şunu net gördük: hızı düzeltmek sadece teknik bir iş değil, direkt ciroyu artıran bir şey. Bu yazıda Shopify hız optimizasyonunu adım adım, gerçek projelerden örneklerle anlatıyoruz.",
  b3:
    "Google artık sayfayı LCP, INP ve CLS diye üç ana metrikle değerlendiriyor. LCP en büyük görselin ne kadar sürede çıktığı, INP kullanıcının bir şeye tıkladığında ne kadar hızlı cevap aldığı, CLS ise sayfa yüklenirken elemanların zıplayıp kayması. İyi sayılmak için hedef nettir: LCP 2,5 saniyenin, INP 200 milisaniyenin, CLS de 0,1'in altında olmalı. Bir de perde arkasında TTFB var; sunucunun ilk yanıt süresi, bu üç metriğin de temelini oluşturur. Bu değerler kötüyse sıralama da kötü oluyor.",
  b11:
    "PageSpeed Insights iyi bir başlangıç ama yetmiyor; tarayıcıdaki Lighthouse ile laboratuvar testi de yapabilirsin. Gerçek kullanıcı (saha) verisi için Shopify'ın kendi Speed raporuna ve Search Console'daki Core Web Vitals raporuna bak. Dikkat: laboratuvar skoru yeşilken saha verisi kötüyse, gerçek kullanıcılar hâlâ yavaşlık yaşıyor demektir. Hem masaüstü hem mobil ayrı ayrı test et ve her iyileştirmeden sonra aynı sayfayı tekrar ölç.",
};

const STEP6 = blk(
  "normal",
  "6. İleri seviye teknik müdahaleler. Görselleri AVIF formatına çevir (çoğu zaman WebP'den bile küçük olur), içeriği kullanıcıya yakın sunmak için bir CDN kullan, ekranda ilk görünen kısmın kritik CSS'ini öne al ve render'ı engelleyen (render-blocking) script ile stilleri ertele. Bunların çoğu tema Liquid'ine dokunmayı gerektirir; emin değilsen bir uzmandan destek al.",
  "hz1"
);

const post = await client.fetch(
  `*[_type=="post" && slug.current=="shopify-hiz-optimizasyonu"][0]{_id, body}`
);
if (!post?._id) {
  console.error("Post yok");
  process.exit(1);
}
if ((post.body || []).some((b) => b._key === "hz1")) {
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
  if (b._key === "b16") out.push(STEP6);
}

await client.patch(post._id).set({ body: out }).commit();
console.log(`✅ Güncellendi. Blok: ${post.body.length} → ${out.length}`);
console.log("   b1(odak kelime), b3(eşikler+TTFB), b11(Lighthouse), +6. adım(AVIF/CDN/kritik CSS/Liquid)");
