import "dotenv/config";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const slug = "shopify-hiz-optimizasyonu";

const newExcerpt = "Shopify mağazanız yavaş mı açılıyor? Core Web Vitals skorlarını (LCP, INP, CLS) iyileştirerek yükleme sürenizi nasıl kısaltacağınızı, gerçek projelerimizden örneklerle anlatıyoruz. Google'ın gerçekten önemsediği şeylere odaklanıyoruz.";

const newBody = [
  { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", text: "Yavaş açılan bir Shopify mağazası hem müşteriyi hem de Google sıralamalarını kaybediyor. Biz SEOROAS'ta bir sürü e-ticaret projesi yönettik ve şunu net gördük: hızı düzeltmek sadece teknik bir iş değil, direkt ciroyu artıran bir şey." }] },
  { _type: "block", _key: "b2", style: "normal", children: [{ _type: "span", text: "Bir saniye bile önemli. Araştırmalar gösteriyor ki, sayfa yüklemesi 3 saniyeyi geçince ziyaretçilerin yarısı terk ediyor. Google da bunu biliyor ve yavaş siteleri geriye atıyor." }] },
  { _type: "block", _key: "h21", style: "h2", children: [{ _type: "span", text: "Core Web Vitals gerçekten ne kadar kritik?" }] },
  { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", text: "Google artık sayfayı LCP, INP ve CLS diye üç ana metrikle değerlendiriyor. LCP en büyük görselin ne kadar sürede çıktığı, INP kullanıcının bir şeye tıkladığında ne kadar hızlı cevap aldığı, CLS ise sayfa yüklenirken elemanların zıplayıp kayması. Bu üçü kötü olursa sıralama da kötü oluyor." }] },
  { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", text: "Bizim gördüğümüz şey şu: çoğu mağaza bu metrikleri hiç kontrol etmiyor. Sonra da \"neden trafik düşüyor\" diye soruyor." }] },
  { _type: "block", _key: "h22", style: "h2", children: [{ _type: "span", text: "Shopify'ta hızı ne yavaşlatıyor gerçekten?" }] },
  { _type: "block", _key: "b5", style: "normal", children: [{ _type: "span", text: "Pratikte en sık karşılaştığımız suçlular şunlar:" }] },
  { _type: "block", _key: "b6", style: "normal", children: [{ _type: "span", text: "Çok fazla uygulama. Özellikle Bold, upsell araçları ve chat widget'ları her sayfaya tonla JavaScript bindiriyor." }] },
  { _type: "block", _key: "b7", style: "normal", children: [{ _type: "span", text: "Ağır temalar. Güzel görünen premium temaların çoğu kullanılmayan özelliklerin kodunu her yere taşıyor. Dawn gibi basit temalar sık sık daha hızlı çıkıyor." }] },
  { _type: "block", _key: "b8", style: "normal", children: [{ _type: "span", text: "Görseller. Yüksek çözünürlüklü fotoğrafları olduğu gibi yüklemek LCP'yi mahvediyor. WebP + doğru boyut + lazy load ile büyük fark yaratılıyor." }] },
  { _type: "block", _key: "b9", style: "normal", children: [{ _type: "span", text: "Script enflasyonu. Analytics, pixel, popup... hepsi birikince sayfa nefes alamıyor." }] },
  { _type: "block", _key: "b10", style: "normal", children: [{ _type: "span", text: "Fazla font ve animasyon. Bunlar da CLS ve INP'yi bozuyor." }] },
  { _type: "block", _key: "h23", style: "h2", children: [{ _type: "span", text: "Hızı doğru şekilde nasıl ölçersin?" }] },
  { _type: "block", _key: "b11", style: "normal", children: [{ _type: "span", text: "PageSpeed Insights iyi bir başlangıç ama yetmiyor. Gerçek kullanıcı verisi için Shopify'ın kendi Speed raporuna ve Google Search Console'daki Core Web Vitals raporuna bak. Hem masaüstü hem mobil ayrı ayrı test et. Bir iyileştirme yaptıktan sonra mutlaka aynı sayfayı tekrar ölç." }] },
  { _type: "block", _key: "h24", style: "h2", children: [{ _type: "span", text: "Hızlandırmak için gerçekten işe yarayan adımlar" }] },
  { _type: "block", _key: "b12", style: "normal", children: [{ _type: "span", text: "1. Uygulamaları temizle. Kullanmadığın her şeyi sil. Bold gibi ağır araçları gerçekten gerekli mi diye sorgula." }] },
  { _type: "block", _key: "b13", style: "normal", children: [{ _type: "span", text: "2. Görselleri baştan optimize et. Yüklemeden önce sıkıştır, WebP kullan, boyutları küçült. Bu tek başına en büyük iyileşmeyi sağlar çoğu zaman." }] },
  { _type: "block", _key: "b14", style: "normal", children: [{ _type: "span", text: "3. Temayı sadeleştir. Kullanmadığın özellikleri kapat. Mümkünse hafif bir temaya geç. JS bloat'u öldürür." }] },
  { _type: "block", _key: "b15", style: "normal", children: [{ _type: "span", text: "4. Scriptleri ertele. Gerekli olmayan kodları sayfa yüklenene kadar beklet." }] },
  { _type: "block", _key: "b16", style: "normal", children: [{ _type: "span", text: "5. Font ve animasyonları kontrol et. Gereksiz font yükleme, ağır slider'ları hafiflet." }] },
  { _type: "block", _key: "h25", style: "h2", children: [{ _type: "span", text: "Mobil hız neden daha da kritik?" }] },
  { _type: "block", _key: "b17", style: "normal", children: [{ _type: "span", text: "Trafiğin çoğu mobilden geliyor ve Google mobil sürümü baz alarak sıralıyor. Masaüstünde 2 saniye iyi görünen bir site, mobilde 5-6 saniye olabiliyor. Önceliği her zaman mobilde tut." }] },
  { _type: "block", _key: "h26", style: "h2", children: [{ _type: "span", text: "Hız gerçekten paraya dönüşüyor mu?" }] },
  { _type: "block", _key: "b18", style: "normal", children: [{ _type: "span", text: "Evet. Bizim projelerimizde hızı iyileştirdikten sonra hem hemen çıkma oranı düştü hem de dönüşüm arttı. Özellikle reklamdan gelen trafiğin maliyeti düşünülünce, yavaş sayfa para yakmak demek. Hız düzelince aynı trafikle daha fazla satış oluyor." }] },
  { _type: "block", _key: "h27", style: "h2", children: [{ _type: "span", text: "Küçük adımlarla başla, ölç, tekrar et" }] },
  { _type: "block", _key: "b19", style: "normal", children: [{ _type: "span", text: "Her şeyi aynı anda yapma. Önce uygulamaları temizle. Sonra görselleri düzelt. Sonra temayı ele al. Her adımda ölç. Biz SEOROAS'ta bu yaklaşımla birçok mağazada %40-60 arası hız iyileşmesi gördük." }] },
  { _type: "block", _key: "cta", style: "normal", children: [{ _type: "span", text: "Mağazanın hızını gerçekten merak ediyorsan, ücretsiz analiz yapalım. Linke tıkla veya bize ulaş." }] }
];

async function update() {
  const doc = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{_id}`, { slug });
  if (!doc?._id) { console.error("Post bulunamadı"); process.exit(1); }
  console.log("Patching post:", doc._id);
  const res = await client.patch(doc._id).set({ excerpt: newExcerpt, body: newBody }).commit();
  console.log("✅ Updated only via Sanity API. New rev:", res._rev);
}

update().catch(console.error);
