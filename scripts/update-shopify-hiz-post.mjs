import dotenv from "dotenv";
import { createClient } from "@sanity/client";
dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const slug = "shopify-hiz-optimizasyonu";

const newExcerpt = "Shopify mağazanız yavaş mı açılıyor? Core Web Vitals, LCP, INP ve CLS metriklerini iyileştirerek sayfa hızınızı nasıl artıracağınızı, gerçek mağaza örnekleriyle anlatıyoruz. Google algoritmasına uygun Shopify hız optimizasyonu rehberi.";

const newBody = [
  {
    _type: "block",
    _key: "intro1",
    style: "normal",
    children: [{ _type: "span", text: "Yavaş açılan bir Shopify mağazası hem ziyaretçiyi hem de Google sıralamalarını kaybeder. Site hızı, doğrudan bir sıralama sinyali ve dönüşüm oranını belirleyen kritik bir faktördür. Biz SEOROAS olarak yüzlerce e-ticaret sitesinde hız optimizasyonu yaptık ve gördük ki, doğru adımlarla yükleme süresini yarıya indirmek mümkün." }]
  },
  {
    _type: "block",
    _key: "h2-1",
    style: "h2",
    children: [{ _type: "span", text: "Site Hızı SEO ve Google Algoritması İçin Neden Bu Kadar Önemli?" }]
  },
  {
    _type: "block",
    _key: "p1",
    style: "normal",
    children: [{ _type: "span", text: "Google, sayfa deneyimini Core Web Vitals metrikleriyle değerlendiriyor: LCP (Largest Contentful Paint), INP (Interaction to Next Paint) ve CLS (Cumulative Layout Shift). Bu metrikler hem organik trafik hem de kullanıcı davranışını doğrudan etkiliyor. Yavaş bir mağazada ziyaretçiler sepete ulaşmadan ayrılıyor, hemen çıkma oranı artıyor ve Google sıralamalarınızı düşürüyor." }]
  },
  {
    _type: "block",
    _key: "p2",
    style: "normal",
    children: [{ _type: "span", text: "2026 itibarıyla Google algoritması, kullanıcı odaklı deneyimi daha da ön planda tutuyor. Hız optimizasyonu artık sadece teknik bir iş değil; e-ticaret gelirinizi doğrudan etkileyen bir büyüme stratejisi." }]
  },
  {
    _type: "block",
    _key: "h2-2",
    style: "h2",
    children: [{ _type: "span", text: "Shopify Mağazalarında Hız Sorunları Nelerdir? En Yaygın Nedenler" }]
  },
  {
    _type: "block",
    _key: "p3",
    style: "normal",
    children: [{ _type: "span", text: "Shopify platformu genel olarak hızlı olsa da, e-ticaret sitelerinde hız sorunları sık yaşanıyor. Gerçek projelerimizde karşılaştığımız başlıca nedenler şunlar:" }]
  },
  {
    _type: "block",
    _key: "li1",
    style: "normal",
    children: [{ _type: "span", text: "Çok fazla üçüncü parti uygulama: Her uygulama ek JavaScript ve CSS yükü getiriyor. Özellikle Bold, upsell ve chat araçları mağazaları yavaşlatabiliyor." }]
  },
  {
    _type: "block",
    _key: "li2",
    style: "normal",
    children: [{ _type: "span", text: "Ağır ve optimize edilmemiş temalar: Premium temalar güzel görünse de, kullanılmayan özelliklerin kodunu her sayfada yükleyerek JS bloat yaratıyor. Dawn gibi hafif temalar genellikle daha hızlı." }]
  },
  {
    _type: "block",
    _key: "li3",
    style: "normal",
    children: [{ _type: "span", text: "Büyük ve sıkıştırılmamış görseller: Ürün fotoğrafları ve bannerlar yüksek çözünürlükte yüklenince LCP skorunu olumsuz etkiliyor. WebP formatı ve doğru boyutlandırma şart." }]
  },
  {
    _type: "block",
    _key: "li4",
    style: "normal",
    children: [{ _type: "span", text: "Üçüncü parti scriptler: Chat widgetları, analytics kodları, popup'lar ve gömülü içerikler sayfa yüklemesini geciktiriyor." }]
  },
  {
    _type: "block",
    _key: "li5",
    style: "normal",
    children: [{ _type: "span", text: "Fazla özel font ve ağır slider/carousel bileşenleri: Font yüklemeleri ve animasyonlar CLS ve INP metriklerini bozabiliyor." }]
  },
  {
    _type: "block",
    _key: "h2-3",
    style: "h2",
    children: [{ _type: "span", text: "Shopify Hızını Nasıl Ölçersiniz? Doğru Araçlar ve Metrikler" }]
  },
  {
    _type: "block",
    _key: "p4",
    style: "normal",
    children: [{ _type: "span", text: "Hız optimizasyonuna başlamadan önce mevcut durumu ölçmek şart. Google PageSpeed Insights ve Lighthouse ücretsiz olarak LCP, INP, CLS değerlerini gösteriyor. Shopify admin panelindeki Speed raporunu da ihmal etmeyin. En önemlisi, hem masaüstü hem mobil için ayrı ayrı test edin ve gerçek kullanıcı verisi (CrUX) için Google Search Console Core Web Vitals raporuna bakın." }]
  },
  {
    _type: "block",
    _key: "h2-4",
    style: "h2",
    children: [{ _type: "span", text: "Shopify Mağaza Hız Optimizasyonu: Adım Adım Rehber" }]
  },
  {
    _type: "block",
    _key: "p5",
    style: "normal",
    children: [{ _type: "span", text: "Pratikte uyguladığımız ve sonuç aldığımız adımları sıralıyoruz:" }]
  },
  {
    _type: "block",
    _key: "step1",
    style: "h3",
    children: [{ _type: "span", text: "1. Uygulama Denetimi Yapın" }]
  },
  {
    _type: "block",
    _key: "p6",
    style: "normal",
    children: [{ _type: "span", text: "Kullanılmayan uygulamaları kaldırın. Bold Subscriptions veya ağır upsell araçları gibi script yoğun uygulamalar LCP ve INP skorlarını olumsuz etkiliyor. Her uygulamayı tek tek test edin." }]
  },
  {
    _type: "block",
    _key: "step2",
    style: "h3",
    children: [{ _type: "span", text: "2. Görselleri Optimize Edin" }]
  },
  {
    _type: "block",
    _key: "p7",
    style: "normal",
    children: [{ _type: "span", text: "Görselleri yüklemeden önce sıkıştırın. WebP formatını kullanın, doğru boyutlarda yükleyin. Lazy loading ekleyin. Bu adım tek başına LCP skorunu önemli ölçüde iyileştirebiliyor." }]
  },
  {
    _type: "block",
    _key: "step3",
    style: "h3",
    children: [{ _type: "span", text: "3. Tema ve JavaScript Optimizasyonu" }]
  },
  {
    _type: "block",
    _key: "p8",
    style: "normal",
    children: [{ _type: "span", text: "Ağır temaları sadeleştirin veya Dawn gibi hafif bir temaya geçiş yapın. Kullanılmayan scriptleri erteleyin (defer/async). Kritik CSS'i önceliklendirin. Tema kodunda gereksiz stilleri temizleyin." }]
  },
  {
    _type: "block",
    _key: "step4",
    style: "h3",
    children: [{ _type: "span", text: "4. Font ve Bileşen Yönetimi" }]
  },
  {
    _type: "block",
    _key: "p9",
    style: "normal",
    children: [{ _type: "span", text: "Font sayısını minimuma indirin. Fontları verimli şekilde yükleyin (font-display: swap). Ağır slider ve carousel bileşenlerini daha hafif alternatiflerle değiştirin." }]
  },
  {
    _type: "block",
    _key: "step5",
    style: "h3",
    children: [{ _type: "span", text: "5. Üçüncü Parti Scriptleri Kontrol Edin" }]
  },
  {
    _type: "block",
    _key: "p10",
    style: "normal",
    children: [{ _type: "span", text: "Chat, popup ve analytics scriptlerini sadece gerekli sayfalarda yükleyin. Gerekirse ertelemeli yükleme (lazy load) kullanın." }]
  },
  {
    _type: "block",
    _key: "h2-5",
    style: "h2",
    children: [{ _type: "span", text: "Mobil Hız ve Google Mobile-First Indexing" }]
  },
  {
    _type: "block",
    _key: "p11",
    style: "normal",
    children: [{ _type: "span", text: "E-ticaret trafiğinin büyük kısmı mobilden geliyor. Google mobil sürümü baz alarak sıralama yapıyor. Mobil hızı önceliklendirin. Masaüstü skoru sizi yanıltmasın." }]
  },
  {
    _type: "block",
    _key: "h2-6",
    style: "h2",
    children: [{ _type: "span", text: "Hız Optimizasyonunun Dönüşüm ve Gelire Etkisi" }]
  },
  {
    _type: "block",
    _key: "p12",
    style: "normal",
    children: [{ _type: "span", text: "Her saniyelik yavaşlama, terk oranını artırıyor ve ciroyu düşürüyor. Özellikle Google Ads trafiği çekiyorsanız, yavaş sayfa tıklama maliyetinizi boşa harcıyor. Hız optimizasyonu yeni trafik getirmeden mevcut ziyaretçilerden daha fazla satış almanızı sağlar." }]
  },
  {
    _type: "block",
    _key: "h2-7",
    style: "h2",
    children: [{ _type: "span", text: "Shopify Hız Optimizasyonu İçin Önerilerimiz" }]
  },
  {
    _type: "block",
    _key: "p13",
    style: "normal",
    children: [{ _type: "span", text: "Küçük adımlarla başlayın. Önce uygulamaları temizleyin, sonra görselleri ve temayı optimize edin. Her değişiklikten sonra ölçüm yapın. Biz SEOROAS olarak Shopify hız optimizasyonu projelerinde ortalama %40-60 hız artışı sağlıyoruz." }]
  },
  {
    _type: "block",
    _key: "cta",
    style: "normal",
    children: [{ _type: "span", text: "Mağazanızın hız karnesini çıkarmak ister misiniz? Ücretsiz analiz için iletişime geçin." }]
  }
];

async function updatePost() {
  const doc = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{_id}`, { slug });
  if (!doc?._id) {
    console.error("Post bulunamadı");
    process.exit(1);
  }
  console.log("Güncelleniyor:", doc._id);
  const result = await client
    .patch(doc._id)
    .set({
      excerpt: newExcerpt,
      body: newBody
    })
    .commit();
  console.log("✅ Post başarıyla güncellendi! Yeni rev:", result._rev);
}

updatePost().catch(console.error);
