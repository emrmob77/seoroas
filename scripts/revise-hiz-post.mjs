import { createClient } from "@sanity/client";
import "dotenv/config";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "67vl8x07",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const slug = "shopify-hiz-optimizasyonu";

const keyPainPoints = [
  "Çoğu yavaşlığın sebebi çok fazla uygulama (özellikle Bold, upsell araçları)",
  "Premium temalar 30-40 özellik yüklüyor, çoğu kullanılmıyor → JS bloat",
  "Görseller yüklemeden önce sıkıştırılmıyor",
  "Lab skoru (PageSpeed) ile gerçek kullanıcı hızı (CrUX) karıştırılıyor",
  "Ücretli 'speed optimization' servislerinin çoğu sadece lab skorunu düzeltiyor"
];

const appAudit = [
  {
    appName: "Bold (Subscriptions, Upsell vb.)",
    impact: "Çok yüksek JS yükü ve Core Web Vitals düşüşü",
    recommendation: "Gereksizse tamamen kaldır. Alternatif daha hafif araçlar ara"
  },
  {
    appName: "Birçok üçüncü parti chat, popup, pixel araçları",
    impact: "Her sayfada script yükleniyor",
    recommendation: "Sadece gerekli sayfalarda yükle veya ertele"
  },
  {
    appName: "Ağır tema app'leri (mega menu, quick view, 3D viewer)",
    impact: "Kullanılmayan özelliklerin JS'i her sayfada yükleniyor",
    recommendation: "Tema ayarlarından kullanılmayanları kapat"
  }
];

const themeAdvice = [
  "Dawn (ücretsiz) tema birçok premium temadan daha hızlı",
  "Premium temadan Dawn'a geçenlerde hız 4.3s → 1.8s, conversion %1.6 → %3.1 olmuş (gerçek örnek)",
  "Tema ayarlarından kullanmadığın tüm özellikleri devre dışı bırak (mega menu, countdown, image zoom vb.)",
  "Theme Settings > Features bölümünü tek tek kontrol et"
];

const commonMistakes = [
  "Sadece Google PageSpeed Insights skoruna odaklanmak (gerçek kullanıcı verisi önemli)",
  "Ücretli speed optimizasyon servislerine para vermek (çoğu lab skorunu şişiriyor)",
  "Görselleri Shopify'a yükledikten sonra optimize etmeye çalışmak",
  "Kullanılmayan app'leri silmek yerine sadece devre dışı bırakmak"
];

const realResults = [
  {
    example: "Bir mağaza sahibi premium temadan Dawn'a geçti",
    before: "4.3 saniye yükleme, %1.6 dönüşüm",
    after: "1.8 saniye yükleme, %3.1 dönüşüm"
  },
  {
    example: "Birçok mağaza 'çok fazla app' yüzünden yavaşlıyor",
    before: "20+ uygulama kurulu",
    after: "Kritik 6-8 uygulama ile hız ve UX iyileşti"
  }
];

const measurementNote = "PageSpeed Insights ve Lighthouse lab skorlarıdır. Gerçek performans için Shopify'ın kendi Speed raporunu ve Core Web Vitals raporunu (CrUX) kullanın. Gerçek kullanıcı verisi sıralamayı daha çok etkiler.";

const newExcerpt = "Shopify mağazanızın yavaşlamasının en büyük nedenleri: gereksiz uygulamalar, tema JS bloat'u ve optimize edilmemiş görseller. Reddit ve X'teki gerçek mağaza sahiplerinin deneyimleriyle desteklenmiş pratik çözümler.";

async function run() {
  const doc = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{_id, _rev}`,
    { slug }
  );

  if (!doc?._id) {
    console.error("Post bulunamadı");
    process.exit(1);
  }

  console.log("Güncelleniyor:", doc._id);

  const patch = client
    .patch(doc._id)
    .set({
      excerpt: newExcerpt,
      keyPainPoints: keyPainPoints,
      appAudit: appAudit,
      themeAdvice: themeAdvice,
      commonMistakes: commonMistakes,
      realResults: realResults,
      measurementNote: measurementNote,
    });

  const result = await patch.commit();

  console.log("✅ Başarıyla güncellendi. Yeni rev:", result._rev);
}

run().catch(console.error);
