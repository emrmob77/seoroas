import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "67vl8x07",
  dataset: "production",
  apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const pages = [
  {
    pagePath: "/",
    pageLabel: "Ana Sayfa",
    seoTitle: "SEOROAS | SEO Ajansı — Organik Trafik & Gelir Büyümesi",
    seoDescription:
      "Veri odaklı SEO stratejileri ile organik trafiğinizi ve gelirinizi artırın. Teknik SEO, içerik optimizasyonu, link building ve e-ticaret SEO. Ücretsiz analiz alın.",
  },
  {
    pagePath: "/seo",
    pageLabel: "SEO Hizmetleri",
    seoTitle: "SEO Hizmetleri — Teknik, İçerik & Link Building",
    seoDescription:
      "On-page, teknik SEO, link building, lokal, e-ticaret ve içerik SEO dahil 10 uzmanlık alanı. Veri odaklı strateji ile organik trafiğinizi artırın.",
  },
  {
    pagePath: "/seo/on-page-seo",
    pageLabel: "On-Page SEO",
    seoTitle: "On-Page SEO Hizmeti — Sayfa İçi Optimizasyon",
    seoDescription:
      "Title tag, meta description, heading yapısı, iç linkleme ve içerik optimizasyonu ile her sayfanızın sıralama potansiyelini artırın.",
  },
  {
    pagePath: "/seo/teknik-seo",
    pageLabel: "Teknik SEO",
    seoTitle: "Teknik SEO Hizmeti — Site Hızı & Altyapı Optimizasyonu",
    seoDescription:
      "Core Web Vitals, crawl budget, site mimarisi, schema markup ve JS rendering optimizasyonu. Teknik altyapınızı arama motorlarına hazırlayın.",
  },
  {
    pagePath: "/seo/link-building",
    pageLabel: "Link Building",
    seoTitle: "Link Building Hizmeti — Backlink & Otorite Kazanımı",
    seoDescription:
      "Editöryel kalitede backlink edinimi, dijital PR, guest posting ve rakip analizi ile domain otoritenizi güçlendirin. DR 80+ kaynaklardan link.",
  },
  {
    pagePath: "/seo/lokal-seo",
    pageLabel: "Lokal SEO",
    seoTitle: "Lokal SEO Hizmeti — Google Haritalar & Yerel Arama",
    seoDescription:
      "Google Business Profile, yerel dizin yönetimi, NAP tutarlılığı ve bölgesel içerik stratejisi ile yakın çevrenizdeki müşterilere ulaşın.",
  },
  {
    pagePath: "/seo/e-ticaret-seo",
    pageLabel: "E-Ticaret SEO",
    seoTitle: "E-Ticaret SEO — Ürün & Kategori Optimizasyonu",
    seoDescription:
      "Ürün sayfası, kategori mimarisi, faceted navigation ve product schema ile e-ticaret sitenizin organik gelirini artırın.",
  },
  {
    pagePath: "/seo/icerik-seo",
    pageLabel: "İçerik SEO",
    seoTitle: "İçerik SEO Hizmeti — Topic Cluster & İçerik Stratejisi",
    seoDescription:
      "Anahtar kelime araştırması, topic cluster, content gap analizi ve topikal otorite stratejisi ile organik trafiğinizi içerikle büyütün.",
  },
  {
    pagePath: "/seo/wordpress-seo",
    pageLabel: "WordPress SEO",
    seoTitle: "WordPress SEO Hizmeti — WP Hız & Performans",
    seoDescription:
      "WordPress site hızı, güvenlik, veritabanı optimizasyonu, eklenti temizliği ve içerik mimarisi ile WP sitenizin SEO performansını artırın.",
  },
  {
    pagePath: "/seo/shopify-seo",
    pageLabel: "Shopify SEO",
    seoTitle: "Shopify SEO Hizmeti — Liquid & Mağaza Optimizasyonu",
    seoDescription:
      "Shopify Liquid şablon optimizasyonu, uygulama temizliği, JSON-LD schema ve koleksiyon/ürün sayfası SEO ile organik satışlarınızı artırın.",
  },
  {
    pagePath: "/seo/seo-ajansi",
    pageLabel: "SEO Ajansı",
    seoTitle: "SEO Ajansı — Profesyonel & Sonuç Odaklı SEO",
    seoDescription:
      "Veri odaklı SEO stratejileri, şeffaf raporlama ve ölçülebilir sonuçlar. Organik trafiğinizi ve gelirlerinizi profesyonel SEO ajansı ile artırın.",
  },
  {
    pagePath: "/seo/kurumsal-seo",
    pageLabel: "Kurumsal SEO",
    seoTitle: "Kurumsal SEO Hizmeti — Enterprise Ölçekte Optimizasyon",
    seoDescription:
      "Büyük ölçekli siteler için otomasyon, uluslararası SEO, teknik altyapı yönetimi ve C-level raporlama. Kurumsal organik büyüme stratejisi.",
  },
  {
    pagePath: "/hizmetler",
    pageLabel: "Hizmetler",
    seoTitle: "Dijital Pazarlama Hizmetleri — SEO & Analitik",
    seoDescription:
      "SEO danışmanlığı, teknik optimizasyon, performans pazarlama, lokal SEO ve takip altyapısı. Tek çatı altında dijital büyüme stratejileri.",
  },
  {
    pagePath: "/hizmetler/google-tag-manager",
    pageLabel: "Google Tag Manager",
    seoTitle: "Google Tag Manager Kurulumu — GTM Entegrasyonu",
    seoDescription:
      "Google Tag Manager kurulumu, GA4 entegrasyonu, Consent Mode v2 uyumlu veri katmanı ve olay takibi. Profesyonel GTM altyapısı.",
  },
  {
    pagePath: "/hizmetler/meta-pixel-capi",
    pageLabel: "Meta Pixel & CAPI",
    seoTitle: "Meta Pixel & CAPI Kurulumu — Facebook Ads Takibi",
    seoDescription:
      "Meta Pixel ve Conversions API kurulumu ile reklam attribution doğruluğunu artırın. Domain doğrulama, event mimarisi ve server-side takip dahil.",
  },
  {
    pagePath: "/hizmetler/tiktok-pixel",
    pageLabel: "TikTok Pixel",
    seoTitle: "TikTok Pixel Kurulumu — TikTok Ads Takip & Ölçüm",
    seoDescription:
      "TikTok Pixel ve Events API kurulumu ile reklam performansınızı ölçün. Özel eventler, kitle segmentasyonu ve KVKK uyumlu server-side izleme.",
  },
  {
    pagePath: "/seo-danismanligi",
    pageLabel: "SEO Danışmanlığı",
    seoTitle: "SEO Danışmanlığı — Veriye Dayalı Özel Strateji",
    seoDescription:
      "Markanıza özel, veri mimarisi ve teknik hassasiyetle kurgulanan SEO danışmanlık hizmeti. Trafik değil, gelir odaklı strateji. Ücretsiz ön analiz.",
  },
  {
    pagePath: "/seo-fiyatlari",
    pageLabel: "SEO Fiyatları",
    seoTitle: "SEO Fiyatları 2026 — Güncel Paketler & Karşılaştırma",
    seoDescription:
      "2026 güncel SEO fiyatları. Başlangıç, Profesyonel ve Kurumsal paket karşılaştırması ile bütçenize uygun organik büyüme planını seçin.",
  },
  {
    pagePath: "/blog",
    pageLabel: "Blog",
    seoTitle: "SEO Blog — Güncel Rehberler & Stratejiler",
    seoDescription:
      "SEO trendleri, teknik rehberler ve kanıtlanmış organik büyüme stratejileri. Uzman içgörüleri ile dijital pazarlama bilginizi güncel tutun.",
  },
  {
    pagePath: "/hakkimizda",
    pageLabel: "Hakkımızda",
    seoTitle: "Hakkımızda — SEO Odaklı Büyüme Ekibi",
    seoDescription:
      "SEO'yu ölçülebilir yatırım getirisi (ROAS) odaklı büyüme motoruna dönüştüren ekip. Veriye dayalı stratejiler ve mühendislik disiplini.",
  },
  {
    pagePath: "/referanslar",
    pageLabel: "Referanslar",
    seoTitle: "Referanslar — SEO Başarı Hikayeleri & Vaka Analizleri",
    seoDescription:
      "E-ticaret, SaaS, sağlık ve gayrimenkul sektörlerinde somut verilerle kanıtlanmış SEO başarı hikayelerini inceleyin.",
  },
  {
    pagePath: "/iletisim",
    pageLabel: "İletişim",
    seoTitle: "İletişim — Ücretsiz SEO Analizi Alın",
    seoDescription:
      "SEO stratejinizi birlikte oluşturalım. Ücretsiz site analizi ve teklif için formumuzu doldurun veya doğrudan bize ulaşın.",
  },
  {
    pagePath: "/gizlilik-politikasi",
    pageLabel: "Gizlilik Politikası",
    seoTitle: "Gizlilik Politikası",
    seoDescription:
      "SEOROAS olarak kişisel verilerinizi nasıl topladığımızı, işlediğimizi ve koruduğumuzu açıklayan gizlilik politikamız.",
  },
  {
    pagePath: "/kullanim-sartlari",
    pageLabel: "KVKK Aydınlatma Metni",
    seoTitle: "KVKK Aydınlatma Metni",
    seoDescription:
      "SEOROAS tarafından 6698 sayılı KVKK kapsamında kişisel verilerinizin işlenmesine ilişkin aydınlatma metni.",
  },
  {
    pagePath: "/istanbul-seo-ajansi",
    pageLabel: "İstanbul SEO Ajansı",
    seoTitle: "İstanbul SEO Ajansı — Yerel & Kurumsal SEO",
    seoDescription:
      "İstanbul'da profesyonel SEO hizmeti. Yerel arama, teknik optimizasyon ve içerik stratejisi ile İstanbul pazarında organik büyüme sağlayın.",
  },
  {
    pagePath: "/ankara-seo-ajansi",
    pageLabel: "Ankara SEO Ajansı",
    seoTitle: "Ankara SEO Ajansı — Başkentin Dijital Büyüme Ortağı",
    seoDescription:
      "Ankara'da kurumsal ve kamu sektörüne yönelik SEO hizmeti. Teknik altyapı, içerik stratejisi ve yerel SEO ile dijital görünürlüğünüzü artırın.",
  },
  {
    pagePath: "/izmir-seo-ajansi",
    pageLabel: "İzmir SEO Ajansı",
    seoTitle: "İzmir SEO Ajansı — Ege'nin Dijital Büyüme Ortağı",
    seoDescription:
      "İzmir'de profesyonel SEO hizmeti. E-ticaret, turizm ve ihracat sektörlerinde uzmanlaşmış organik büyüme stratejileri.",
  },
  {
    pagePath: "/bursa-seo-ajansi",
    pageLabel: "Bursa SEO Ajansı",
    seoTitle: "Bursa SEO Ajansı — Sanayi & Ticaret SEO Çözümleri",
    seoDescription:
      "Bursa'da sanayi ve ticaret odaklı SEO hizmeti. Otomotiv, tekstil ve gıda sektörlerinde dijital görünürlük ve organik trafik artışı.",
  },
  {
    pagePath: "/antalya-seo-ajansi",
    pageLabel: "Antalya SEO Ajansı",
    seoTitle: "Antalya SEO Ajansı — Turizm & Hizmet Sektörü SEO",
    seoDescription:
      "Antalya'da turizm ve hizmet sektörü odaklı SEO hizmeti. Otelcilik, sağlık turizmi ve gayrimenkul için organik trafik ve rezervasyon artışı.",
  },
  {
    pagePath: "/tesekkurler",
    pageLabel: "Teşekkürler",
    seoTitle: "Teşekkürler — Talebiniz Alındı",
    seoDescription:
      "SEO analiz talebiniz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.",
    noIndex: true,
    isPublished: true,
  },
];

function toDocId(path) {
  if (path === "/") return "pageSeo-homepage";
  return "pageSeo-" + path.replace(/^\//, "").replace(/\//g, "-");
}

async function seed() {
  const tx = client.transaction();

  for (const p of pages) {
    const doc = {
      _id: toDocId(p.pagePath),
      _type: "pageSeo",
      pagePath: p.pagePath,
      pageLabel: p.pageLabel,
      seoTitle: p.seoTitle,
      seoDescription: p.seoDescription,
      noIndex: p.noIndex || false,
      noFollow: false,
      isPublished: p.isPublished !== undefined ? p.isPublished : true,
    };
    tx.createOrReplace(doc);
  }

  const result = await tx.commit();
  console.log(`✅ ${pages.length} sayfa SEO dokümanı oluşturuldu/güncellendi.`);
  console.log(`   Transaction ID: ${result.transactionId}`);
}

seed().catch((err) => {
  console.error("❌ Seed hatası:", err.message);
  process.exit(1);
});
