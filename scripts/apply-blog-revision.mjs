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

const updatedData = {
  excerpt: "Shopify mağazanızın yavaşlamasının asıl nedenleri: gereksiz uygulamalar, tema JS bloat'u ve yüklemeden önce optimize edilmemiş görseller. Reddit ve X'teki gerçek mağaza sahiplerinin deneyimleriyle desteklenen pratik çözümler.",

  keyPainPoints: [
    "Çoğu yavaşlığın sebebi çok fazla uygulama (özellikle Bold, upsell araçları)",
    "Premium temalar 30-40 özellik yüklüyor ama çoğu kullanılmıyor → JS bloat",
    "Görseller Shopify'a yüklemeden önce sıkıştırılmıyor",
    "PageSpeed Insights (lab skoru) ile gerçek kullanıcı hızı (CrUX) karıştırılıyor",
    "Ücretli 'speed optimization' servislerinin çoğu sadece lab skorunu şişiriyor, gerçek CWV'yi düzeltmiyor"
  ],

  appAudit: [
    {
      appName: "Bold (Subscriptions, Upsell, Product Options)",
      impact: "Çok yüksek JavaScript yükü, Core Web Vitals'i ciddi düşürüyor",
      recommendation: "Gereksizse tamamen kaldır. Alternatif daha hafif çözümler kullan."
    },
    {
      appName: "Birçok üçüncü parti chat, popup, tracking script",
      impact: "Her sayfada ekstra script yükleniyor",
      recommendation: "Sadece gerekli sayfalarda yükle veya lazy load et."
    },
    {
      appName: "Ağır tema özellikleri (mega menu, quick view, 3D, countdown)",
      impact: "Kullanılmayan özelliklerin JS'i her sayfada yükleniyor",
      recommendation: "Tema ayarlarından kullanmadıklarını devre dışı bırak."
    }
  ],

  themeAdvice: [
    "Dawn (ücretsiz) tema birçok premium temadan daha hızlı performans gösteriyor",
    "Örnek: Premium temadan Dawn'a geçen bir mağazada hız 4.3s → 1.8s, dönüşüm %1.6 → %3.1 oldu",
    "Premium temadaysan: Theme Settings'ten kullanmadığın tüm özellikleri kapat",
    "Özellikle mega menü, quick view, image zoom, video player gibi özellikleri kontrol et"
  ],

  commonMistakes: [
    "Sadece Google PageSpeed Insights skoruna odaklanmak (gerçek CrUX verisi daha önemli)",
    "Ücretli speed optimizasyon servislerine para vermek (çoğu lab skorunu düzeltiyor, gerçek kullanıcı deneyimini değil)",
    "Görselleri yükledikten sonra optimize etmeye çalışmak (önce sıkıştırıp yükle)",
    "Kullanılmayan uygulamaları silmek yerine sadece devre dışı bırakmak"
  ],

  realResults: [
    {
      example: "Bir mağaza sahibi premium temadan Dawn'a geçti",
      before: "4.3 saniye yükleme süresi, %1.6 dönüşüm oranı",
      after: "1.8 saniye yükleme süresi, %3.1 dönüşüm oranı"
    },
    {
      example: "Çok fazla uygulama kurulu mağazalarda yaygın sorun",
      before: "20+ uygulama ile yavaş yükleme ve yüksek bounce rate",
      after: "Kritik uygulamalarla temizlenince hız ve UX belirgin iyileşti"
    }
  ],

  measurementNote: "PageSpeed Insights ve Lighthouse lab (laboratuvar) skorlarıdır. Gerçek performans için Shopify'ın kendi Speed raporunu ve Core Web Vitals raporunu (gerçek kullanıcı verisi - CrUX) kullanın. Gerçek kullanıcı verisi Google sıralamasını daha doğru yansıtır."
};

async function apply() {
  const doc = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{_id}`,
    { slug }
  );

  if (!doc?._id) {
    console.error("Post bulunamadı");
    process.exit(1);
  }

  console.log("Güncelleniyor:", doc._id);

  const result = await client
    .patch(doc._id)
    .set(updatedData)
    .commit();

  console.log("✅ Blog içeriği başarıyla revize edildi!");
  console.log("Yeni rev:", result._rev);
}

apply().catch((err) => {
  console.error("Hata:", err.message);
  process.exit(1);
});
