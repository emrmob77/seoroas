// Blog: Web Site Hızı — Teknik SEO kümesi, odak: "web site hızı" (60/ay, TP 2.400)
// Kaynaklar: Google/Deloitte "Milliseconds Make Millions" (55 & Deloitte, 37 marka, 30M+ oturum),
// web.dev CWV eşikleri (LCP ≤2,5s / INP ≤200ms / CLS ≤0,1; 75. persentil), PageSpeed Insights dokümanı (lab vs saha).
// Ton: /seo/wordpress-seo sayfasıyla tutarlı — lab skoru değil saha verisi (CrUX) esas.
import { createPost, h2, h3, p, quote, ul, ol, cta } from "./pt-helpers.mjs";

await createPost({
  slug: "site-hizi-optimizasyonu",
  title: "Web Site Hızı: 98/100 Skor Aldım, Sitem Neden Hâlâ Yavaş?",
  seoTitle: "Web Site Hızı: Ölçme ve Hızlandırma Rehberi",
  seoDescription:
    "Web site hızı nasıl doğru ölçülür, PageSpeed skoru neden yanıltır? LCP, INP, CLS eşikleri, gerçek kullanıcı verisi (CrUX) ve siteyi somut olarak hızlandıran 7 adım.",
  focusKeyword: "web site hızı",
  excerpt:
    "PageSpeed'den 98 alan bir site gerçek kullanıcıya yavaş gelebilir — çünkü skor laboratuvar simülasyonudur, Google ise gerçek ziyaretçi verisine bakar. Hızı doğru ölçmenin yolu, Core Web Vitals eşikleri ve dönüşüme etkisiyle hızlandırma adımları bu rehberde.",
  body: [
    p("PageSpeed Insights'tan 98 almış bir site sahibi, müşterilerinin \"siteniz açılmıyor\" şikayetini anlayamıyordu. Çelişki değil bu; ölçüm hatası. O 98, laboratuvar koşullarında tek bir simüle cihazın notu. Müşterilerin yaşadığı ise metrodaki zayıf 4.5G'de, 3 yaşındaki orta segment telefonda açılan gerçek site. Google sıralama değerlendirmesinde ikincisine bakıyor."),
    p("Bu rehberde önce web site hızının işinize gerçekte ne kadar mal olduğunu kaynaklı rakamlarla göstereceğiz, sonra hızı *doğru* ölçmeyi, en sonda da somut hızlandırma adımlarını anlatacağız."),

    h2("0,1 Saniyenin Fiyatı: Hız-Ciro İlişkisi"),
    p("Google'ın 55 ve Deloitte ile yürüttüğü \"Milliseconds Make Millions\" araştırması, 37 Avrupa ve Amerika markasının sitesinde 30 milyondan fazla gerçek kullanıcı oturumunu inceledi. Mobil yüklenme süresindeki yalnızca **0,1 saniyelik** iyileşmenin ölçülen etkisi:"),
    ul([
      "Perakende sitelerinde dönüşüm **%8,4** arttı, ortalama sepet tutarı **%9,2** yükseldi.",
      "Seyahat sitelerinde dönüşüm **%10,1** arttı.",
      "Lead toplayan bilgi sayfalarında hemen çıkma oranı **%8,3** iyileşti.",
    ]),
    p("Zinciri kuralım: yavaş sayfa → ziyaretçi beklemez → sepet yarıda kalır → reklam bütçeniz dönüşmeyen tıklara gider. Hız bir BT konforu değil, doğrudan gelir kalemidir. Aynı zincir tersine de çalışır — ve 0,1 saniye, bir görselin formatını değiştirmekle kazanılabilecek kadar küçük bir fark."),

    h2("Hızı Doğru Ölçmek: Laboratuvar Skoru vs Gerçek Kullanıcı"),
    p("PageSpeed Insights iki farklı veri gösterir ve karışıklığın kaynağı budur:"),
    ul([
      "**Lab verisi (0-100 skor):** Tek bir simüle cihaz ve sabit ağ koşulunda yapılan test. Sorunun *nedenini bulmak* için birebir; sitenizin gerçekte nasıl hissettirdiğini söylemez.",
      "**Saha verisi (CrUX):** Chrome kullanıcılarının sitenizde yaşadığı gerçek deneyimin son 28 günlük kaydı. Google'ın sıralama değerlendirmesinde baktığı veri budur ve **ziyaretçilerin %75'inin** deneyimi üzerinden hesaplanır.",
    ]),
    p("Yani 98/100 lab skoru olan bir site, saha verisinde \"yavaş\" sınıfında olabilir — tersi de mümkün. Doğru kullanım: sahada nerede kötüyseniz onu görün, lab testiyle nedenini teşhis edin, düzeltmeyi yine saha verisiyle doğrulayın. Trafiği düşük sitelerde CrUX verisi henüz oluşmamış olabilir; o durumda lab verisiyle çalışıp trafiği büyüdükçe sahaya geçersiniz."),

    h2("Core Web Vitals: Google'ın Üç Hız Metriği"),
    p("Google gerçek kullanıcı deneyimini üç metrikle puanlıyor. 2026 itibarıyla geçerli eşikler şunlar (Mart 2024'ten beri değişmedi):"),
    ul([
      "**LCP (Largest Contentful Paint) ≤ 2,5 sn:** Sayfadaki en büyük görsel/metin bloğunun ekrana gelme süresi. \"Site açıldı\" hissinin ölçüsü.",
      "**INP (Interaction to Next Paint) ≤ 200 ms:** Tıklamaya/dokunmaya sayfanın tepki süresi. 2024'te FID'in yerini aldı — eski rehberlerde hâlâ FID görüyorsanız o yazı güncel değildir.",
      "**CLS (Cumulative Layout Shift) ≤ 0,1:** Sayfa yüklenirken öğelerin zıplama miktarı. \"Butona basacaktım, reklam geldi, başka yere tıkladım\" deneyiminin ölçüsü.",
    ]),
    p("Üçünde de hedef, ziyaretçilerin en az %75'inin \"iyi\" bandında olması. Tek bir hızlı test geçmek değil."),

    h2("Siteyi Somut Olarak Hızlandıran 7 Adım"),
    ol([
      "**Görselleri modern formata çevirin.** Çoğu sitede LCP'nin baş şüphelisi devasa hero görselidir. WebP/AVIF formatı + gerçek görüntü boyutunda servis, tek başına saniyeler kazandırabilir.",
      "**Görünmeyen görsele lazy loading uygulayın.** Ekranın altındaki görseller sayfa açılışını beklemesin. Ama dikkat: LCP görseline lazy loading koymak tam ters teper.",
      "**Fontları düzene sokun.** Her font ağırlığı ayrı dosyadır. 2 aile / 3-4 ağırlıkla sınırlayın, `font-display: swap` kullanın — hem hız hem CLS kazancı.",
      "**Üçüncü taraf scriptleri denetleyin.** Chat widget'ı, ısı haritası, üç ayrı analytics... Her biri ana iş parçacığını kilitler ve INP'yi bozar. Kullanmadıklarınızı silin, kalanları geciktirerek yükleyin.",
      "**Önbellek ve CDN kullanın.** Statik varlıklar (görsel, CSS, JS) tarayıcı önbelleğinde ve kullanıcıya yakın CDN sunucusunda dursun. Sunucunuz her istekte aynı dosyayı yeniden üretmesin.",
      "**Sunucu yanıt süresini (TTFB) ölçün.** Sayfanın ilk baytı geç geliyorsa üstteki hiçbir optimizasyon kurtarmaz. Yavaş veritabanı sorguları ve ucuz paylaşımlı hosting en sık iki neden.",
      "**Yer kaplayıcı (placeholder) tanımlayın.** Görsel, reklam ve embed'lere alan rezerve edin ki içerik yüklenirken sayfa zıplamasın. CLS'in çözümü neredeyse her zaman budur.",
    ]),
    p("Sıralama bilinçli: görseller → fontlar → scriptler → altyapı. Çoğu sitede ilk iki adım, toplam kazancın yarısından fazlasını getirir."),

    h2("Platform Notu: Hazır Sistemlerde Hız"),
    p("Shopify kullanıyorsanız hız probleminin özel bir boyutu var: silinen uygulamaların geride bıraktığı script'ler temada yaşamaya devam eder. Bunu ayrı bir rehberde derinlemesine ele aldık: [Shopify hız optimizasyonu](/blog/shopify-hiz-optimizasyonu). WordPress'te ise eklenti şişkinliği ve tema kaynaklı sorgular öne çıkar; hız çalışması [teknik SEO denetiminin](/seo/teknik-seo) parçası olarak yapılır."),
    p("Bir de ölçüm altyapısı notu: sitemap'iniz ve indeksleme sağlığınız yerinde değilse hız kazancının sıralamaya yansımasını ölçemezsiniz — önce [sitemap ve keşif temelini](/blog/sitemap-nedir) doğrulayın."),

    h2("Sık Sorulan Sorular"),
    h3("İyi bir web site hızı kaç saniye?"),
    p("Google'ın eşiği net: en büyük içerik bloğu (LCP) 2,5 saniyede ekranda olmalı — ve bu, ziyaretçilerinizin en az %75'i için geçerli olmalı. \"Bende 1 saniyede açılıyor\" hissi ölçüm değildir; sizin cihazınız ve ofis interneti, ortalama ziyaretçinizi temsil etmez."),
    h3("PageSpeed skorum 90+. Yeterli mi?"),
    p("Tek başına hayır. Skor lab simülasyonudur; Google sıralamada gerçek kullanıcı verisine (CrUX) bakar. Search Console'daki Core Web Vitals raporunuz yeşilse rahat olun; kırmızıysa 98'lik lab skoru sizi kurtarmaz."),
    h3("Site hızı sıralamayı ne kadar etkiler?"),
    p("Hız, Google'ın sayfa deneyimi sinyallerinden biri — ama içerik alakasının önüne geçmez. Gerçekçi çerçeve şu: kötü hız sizi cezalandırır (taranma verimi düşer, kullanıcı kaçar, dönüşüm erir); mükemmel hız tek başına sıralama satın almaz. Etki en çok, içerik kalitesi denk rakiplerle yarışırken hissedilir."),
    h3("Hız optimizasyonu bir kere yapılır mı?"),
    p("Hayır. Her yeni eklenti, script, kampanya görseli ve tema güncellemesi hızı geriletebilir. Aylık CrUX/Search Console kontrolü ve her büyük değişiklik sonrası test, kazanımı korumanın tek yoludur."),

    cta(
      "Siteniz Gerçek Kullanıcıya Ne Kadar Hızlı?",
      "Lab skoruna değil saha verisine bakıyoruz: LCP, INP ve CLS'inizi gerçek ziyaretçi deneyimi üzerinden ölçüp en yüksek etkili 5 düzeltmeyi öncelik sırasıyla raporluyoruz.",
      "Hız + Teknik SEO Denetimi Al",
      "/seo/teknik-seo"
    ),
  ],
});
