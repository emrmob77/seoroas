// Blog: Google Tag Manager Nedir? — GTM/ölçüm kümesi, odak: "google tag manager nedir" (~800/ay varyantlarla, KD 0)
// Varyantlar kapsanıyor: gtm nedir, gtm ne demek, google tag manager ne işe yarar
// Kaynaklar: W3Techs (Tem 2026), Google Consent Mode v2 resmi dokümanları, Analytics Mania (topluluk hataları)
import { createPost, h2, h3, p, quote, ul, ol, cta } from "./pt-helpers.mjs";

await createPost({
  slug: "google-tag-manager-nedir",
  title: "Google Tag Manager Nedir? Kod Yazmadan Ölçüm Kurmanın Yolu",
  seoTitle: "Google Tag Manager Nedir? GTM Rehberi ve Kurulum",
  seoDescription:
    "Google Tag Manager (GTM) nedir, ne işe yarar, nasıl kurulur? Container, tag ve tetikleyici mantığı, Consent Mode v2 zorunluluğu ve en sık yapılan 5 hata bu rehberde.",
  focusKeyword: "google tag manager nedir",
  excerpt:
    "Google Tag Manager, ölçüm ve pazarlama kodlarını siteye tek tek gömmek yerine tek panelden yönetmenizi sağlayan ücretsiz araç. Nasıl çalıştığı, GA4'ten farkı, Consent Mode v2 zorunluluğu ve topluluğun en sık yaptığı hatalar bu rehberde.",
  body: [
    p("Pazarlama ekibi \"şu butona tıklayanları ölçelim\" dedi. Geliştirici müsait değil, kod deploy'u bir sonraki sprint'te. Tanıdık geldi mi? Google Tag Manager tam bu bekleme sorununu çözmek için var: ölçüm kodlarını siteye tek tek gömmek yerine, tek bir panelden ekleyip yönetiyorsunuz. Kod deploy'u yok, sprint bekleme yok."),
    p("Bu rehberde \"google tag manager nedir\" sorusunu net biçimde cevaplayacağız: nasıl çalışır, [Google Analytics](/blog/google-analytics-4-kurulum-rehberi)'ten farkı ne, nasıl kurulur ve insanlar en çok nerede hata yapıyor."),

    h2("Google Tag Manager (GTM) Nedir?"),
    p("Google Tag Manager, web sitenizdeki ölçüm ve pazarlama kodlarını (etiketleri/tag'leri) tek bir arayüzden yönetmenizi sağlayan **ücretsiz** bir etiket yönetim sistemidir. Siteye bir kez GTM kodu eklenir; sonrasında Google Analytics, Google Ads dönüşüm kodu, [Meta Pixel](/hizmetler/meta-pixel-capi) gibi tüm araçları GTM panelinden, koda dokunmadan eklersiniz."),
    p("Ne kadar yaygın? W3Techs'in Temmuz 2026 verisine göre GTM, **tüm web sitelerinin %46,1'inde** kurulu ve etiket yöneticisi kullanan sitelerin %99,7'si GTM kullanıyor. Yani bu kategoride fiili standart tek araç var, o da bu."),
    p("\"GTM ne demek\" diye soranlar için kısaltmayı da açalım: **G**oogle **T**ag **M**anager — Türkçesiyle Google Etiket Yöneticisi. (Arama sonuçlarında karşınıza çıkabilecek Bosch GTM matkabı ya da GTM yatırım fonuyla ilgisi yok.)"),

    h2("Google Tag Manager Ne İşe Yarar?"),
    p("Somut bir örnekle anlatalım. \"Teklif Al\" butonuna tıklayanları ölçmek istiyorsunuz:"),
    ul([
      "**GTM olmadan:** Geliştiriciye ticket açarsınız, tıklama izleme kodu yazılır, test edilir, deploy edilir. Ortalama bekleme: günler, bazen haftalar.",
      "**GTM ile:** Panelden \"tıklama tetikleyicisi\" oluşturursunuz, GA4 event etiketine bağlarsınız, Önizleme modunda test edip Yayınla'ya basarsınız. Süre: dakikalar.",
    ]),
    p("Aynı mantık şunlar için de geçerli: form gönderimlerini ölçmek, belirli sayfalarda kaydırma derinliğini izlemek, Google Ads dönüşüm kodu eklemek, [ROAS hesabı](/blog/roas-nedir) için e-ticaret verisi göndermek. Hepsi tek panelden, sürümlenerek ve geri alınabilir şekilde yönetilir."),

    h2("GTM Nasıl Çalışır? 4 Temel Kavram"),
    ol([
      "**Container (Konteyner):** Sitenize eklenen tek kod parçası. Tüm etiketleriniz bu kutunun içinde yaşar; her site için ayrı container kullanılır.",
      "**Tag (Etiket):** Çalışmasını istediğiniz kod — GA4 eventi, Ads dönüşümü, Meta Pixel çağrısı.",
      "**Trigger (Tetikleyici):** Etiketin NE ZAMAN çalışacağı — \"sayfa görüntülendiğinde\", \"butona tıklandığında\", \"form gönderildiğinde\".",
      "**Variable (Değişken):** Etikete aktarılan bilgi — tıklanan butonun metni, sepet tutarı, sayfa URL'si.",
    ]),
    p("Bir de **dataLayer** var: sitenizle GTM arasındaki veri taşıma katmanı. Sepet tutarı gibi sayfada görünmeyen bilgiler dataLayer üzerinden GTM'e aktarılır. Topluluk deneyimlerine göre yeni başlayanların en çok kafa karıştıran konusu bu — aşağıdaki hatalar bölümünde ayrıntısı var."),

    h2("GTM ile Google Analytics Aynı Şey mi?"),
    p("Hayır ve bu, en sık karışan konu. **Google Analytics veriyi toplar ve raporlar**; GTM ise Analytics dahil tüm ölçüm kodlarını **siteye taşıyan sistemdir**. Benzetmek gerekirse: GA4 elektrik sayacıysa, GTM binadaki elektrik panosudur — sayacın kendisi değil, bağlantıları yöneten yer. İkisi rakip değil, birlikte çalışır: GA4'ü siteye eklemenin en sağlıklı yolu GTM'den geçirmektir."),

    h2("Google Tag Manager Kurulumu: 5 Adım"),
    ol([
      "tagmanager.google.com adresinde Google hesabınızla container oluşturun (platform: Web).",
      "Size verilen iki kod parçasını siteye ekleyin: biri <head> içine, diğeri <body> açılışına. WordPress ve Shopify'da bu adım tema ayarından veya eklentiyle yapılır.",
      "İlk etiketinizi ekleyin: genellikle GA4 yapılandırma etiketi (Measurement ID ile).",
      "**Önizleme (Preview) modunda test edin** — hangi etiketin hangi tetikleyiciyle ateşlendiğini canlı görürsünüz. Bu adımı atlamayın.",
      "Yayınla'ya basın. GTM sürümleme yapar; bir şey bozulursa tek tıkla önceki sürüme dönersiniz.",
    ]),

    h2("Consent Mode v2: 2026'da Artık Tercih Değil, Zorunluluk"),
    p("Avrupa Ekonomik Alanı veya Birleşik Krallık'a reklam gösteriyorsanız bu bölüm kritik. Google'ın Consent Mode v2 gereksinimi Mart 2024'te devreye girdi ve kademeli olarak sıkılaştı: Eylül 2024'te onaysız EEA/UK trafiğinden remarketing listeleri dolmayı durdurdu, Temmuz 2025'te Google yaptırımı sertleştirdi ve 2026 itibarıyla doğru onay sinyali göndermeyen hesaplar politika uyarıları ve sunum kısıtlamalarıyla karşılaşıyor."),
    p("Teknik tarafta dört onay parametresi gönderilir: ad_storage, analytics_storage, ad_user_data, ad_personalization. GTM bu kurgunun merkezi: onay yönetim platformunuz (CMP) kullanıcının seçimini GTM'e iletir, etiketler bu duruma göre davranır. Türkiye'de KVKK tarafında da mantık aynı: kullanıcı onayı olmadan kişisel veri işleyen etiket çalıştırmamak."),

    h2("Toplulukta En Sık Yapılan 5 GTM Hatası"),
    p("GTM topluluğunun referans kaynaklarında ve forum tartışmalarında aynı hatalar tekrar tekrar karşımıza çıkıyor:"),
    ol([
      "**dataLayer kodunu GTM kodunun altına koymak.** dataLayer tanımı container kodundan sonra gelirse veri katmanı kırılır; değişkenleriniz boş döner. Sıralama: önce dataLayer, sonra GTM.",
      "**Zamanlama (timing) hatası:** Veri, dataLayer'a sayfa yüklendikten sonra itiliyorsa, sayfa açılışında ateşlenen etiket o veriyi göremez ve GA4'e \"undefined\" gider. Etiketin tetikleyicisini verinin hazır olduğu ana bağlamak gerekir.",
      "**Yayınlamayı unutmak.** Değişiklik yaptınız, test ettiniz, kapattınız — ama Yayınla'ya basmadınız. Container'da hiçbir şey değişmedi. Klasik.",
      "**Tek container'ı birden çok sitede kullanmak.** Veri karışır, bir sitedeki değişiklik diğerini bozar. Her siteye ayrı container.",
      "**Dokümantasyonsuz çalışmak.** 40 etiketli bir container'da hangi etiketin ne işe yaradığını kimse hatırlamaz. İsimlendirme standardı + kısa not, altı ay sonraki sizi kurtarır.",
    ]),

    h2("GTM Siteyi Yavaşlatır mı?"),
    p("Dürüst cevap: container'ın kendisi hafiftir ama içine koyduğunuz her etiket bir performans maliyeti taşır — asenkron yüklense bile. GTM'in gerçek kazanımı \"hızlandırmak\" değil, **kontrol**: script tekrarını önlersiniz, kullanılmayan etiketleri kapatırsınız, hangi etiketin ne zaman yükleneceğini yönetirsiniz. Yoğun etiket kullanan sitelerde yükü kullanıcının cihazından sunucuya taşıyan server-side tagging bir sonraki adımdır; daha fazla teknik bilgi ve ek maliyet ister ama tarayıcı yükünü ciddi azaltır."),

    h2("Sık Sorulan Sorular"),
    h3("GTM ücretsiz mi?"),
    p("Evet, Google Tag Manager tamamen ücretsizdir. Kurumsal ihtiyaçlar için ücretli Tag Manager 360 sürümü vardır ama sitelerin ezici çoğunluğu için ücretsiz sürüm fazlasıyla yeterli."),
    h3("GTM kullanmak için kod bilmek gerekir mi?"),
    p("Temel kurulum ve standart etiketler için gerekmez; arayüz tıklamayla çalışır. dataLayer'a özel veri göndermek gibi ileri senaryolarda geliştirici desteği veya teknik bilgi gerekir."),
    h3("GTM olmadan GA4 kullanabilir miyim?"),
    p("Evet, GA4 kodunu doğrudan siteye ekleyebilirsiniz. Ama ikinci bir araç (Ads dönüşümü, pixel, ısı haritası) eklediğiniz anda kod yönetimi dağılmaya başlar. Baştan GTM'le kurmak, sonradan taşımaktan çok daha ucuzdur."),
    h3("Kurulumun doğru çalıştığını nasıl anlarım?"),
    p("GTM'in Önizleme modu + Google'ın Tag Assistant aracı, hangi etiketin ateşlendiğini ve hangi verinin gittiğini gösterir. E-ticaret ölçümünde ayrıca GA4'teki sipariş sayısını gerçek sipariş kayıtlarıyla karşılaştırın — çift sayım en sinsi hatadır."),

    cta(
      "GTM kurulumunuz doğru veri gönderiyor mu?",
      "Mevcut container'ınızı çift sayım, veri kaybı ve Consent Mode v2 uyumu açısından denetleyelim; eksikleri raporla teslim edelim.",
      "GTM Denetimi Al",
      "/hizmetler/google-tag-manager"
    ),
  ],
});
