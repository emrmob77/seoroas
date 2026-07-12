// Blog: En İyi WordPress SEO Eklentileri — odak: "en iyi wordpress seo eklentisi" (350/ay ailesi, KD 0)
// Araştırma: wordpress.org kurulum/puan verileri (Tem 2026), Zapier, WP Rocket, OddJar,
// OnlineMediaMasters karşılaştırmaları, r/Wordpress tartışma temaları, Google Search Central.
import { createPost, h2, h3, p, quote, ul, ol, cta } from "./pt-helpers.mjs";

await createPost({
  slug: "en-iyi-wordpress-seo-eklentileri",
  title: "En İyi WordPress SEO Eklentisi Hangisi? Yoast, Rank Math, SEOPress Karşılaştırması",
  seoTitle: "En İyi WordPress SEO Eklentisi: 2026 Karşılaştırma",
  seoDescription:
    "Yoast mu Rank Math mi SEOPress mi? Kurulum sayıları, ücretsiz sürüm farkları ve gerçek kullanıcı şikayetleriyle duruma göre doğru eklenti seçimi.",
  focusKeyword: "en iyi wordpress seo eklentisi",
  excerpt:
    "Yoast 10 milyon sitede kurulu ama Reddit'te en çok şikayet edilen eklentilerden. Rank Math ücretsizde en geniş özellik setini veriyor ama üst satış bildirimleri rahatsız ediyor. Doğru seçim sitenize göre değişir: karar kriterleri, güncel kurulum sayıları ve fiyat mantığıyla dört büyük eklentinin dürüst karşılaştırması.",
  body: [
    p("\"En iyi WordPress SEO eklentisi hangisi?\" sorusunun tek cevabı yok; çünkü soru eksik. Doğru soru şu: **sizin siteniz için** hangisi? Tek kişilik bir blogla, 40 müşteri sitesi yöneten bir ajansın ihtiyacı aynı değil. Bu yazıda dört büyük eklentiyi — Yoast, Rank Math, AIOSEO ve SEOPress — kurulum verileri, ücretsiz sürüm sınırları ve gerçek kullanıcı şikayetleriyle karşılaştırıyoruz; sonunda hangi durumda hangisini seçeceğinizi net biçimde söylüyoruz."),
    p("Önce zemini düzleştirelim: SEO eklentisi sitenizi sıralamaya sokmaz. Title ve meta yönetimi, sitemap, schema gibi teknik işleri kolaylaştırır — o kadar. İçerik ve otorite yoksa hangi eklentiyi kurduğunuzun önemi yok. Bu ayrımı netleştirdikten sonra araç seçimi kolaylaşıyor."),

    h2("Kısa Cevap: Duruma Göre Öneri"),
    ul([
      "**Bütçe sıfırsa ve tek siteniz varsa:** Rank Math — ücretsiz sürümü rakiplerinin premium özelliklerinin çoğunu içeriyor.",
      "**Ekipte WordPress'e yeni kişiler varsa:** Yoast — her eğitim ve dokümantasyon önce onu anlatıyor, sorun çözmek kolay.",
      "**Site hızına takıntılıysanız veya Oxygen Builder kullanıyorsanız:** SEOPress — hafif yapısı ve builder uyumluluğuyla öne çıkıyor.",
      "**WooCommerce ağırlıklı ve hazır çözüm istiyorsanız:** AIOSEO — e-ticaret odaklı hazır modülleri güçlü.",
    ]),
    p("Şimdi bu önerilerin arkasındaki veriye bakalım."),

    h2("Dört Eklentinin Güncel Karnesi"),
    p("wordpress.org'un Temmuz 2026 verilerine göre tablo şöyle:"),
    ul([
      "**Yoast SEO:** 10+ milyon aktif kurulum, 4,8/5 puan (27.813 değerlendirme). 2010'dan beri geliştiriliyor, iki haftada bir güncelleme alıyor.",
      "**Rank Math:** 4+ milyon aktif kurulum, 4,8/5 puan (7.461 değerlendirme). En hızlı büyüyen rakip.",
      "**AIOSEO (All in One SEO):** 3+ milyon aktif kurulum, 4,7/5 puan.",
      "**SEOPress:** 300 binin üzerinde kurulum, 4,8/5 puan. Küçük ama sadık bir kitle.",
    ]),
    p("Kurulum sayısı tek başına \"en iyi\" demek değil — Yoast'un 10 milyonu, 15 yıllık birikimin ve her WordPress eğitiminde anlatılmasının sonucu. Ama şunu söyler: dokümantasyon, uyumluluk testi ve topluluk desteği en genişi Yoast'ta."),

    h2("Yoast SEO: Standart Ama Pahalılaşan Tercih"),
    p("Yoast'un gücü olgunluğunda: neredeyse her temayla test edilmiş, her sorunun cevabı bir forumda yazılmış. Trafik ışığı sistemi (yeşil/turuncu/kırmızı) içerik editörlerine net bir kontrol listesi veriyor."),
    p("Zayıf tarafı fiyat modeli: Zapier'in karşılaştırmasına göre yönlendirme (redirect) yöneticisi ve çoklu odak kelime gibi özellikler premium'a kilitli ve lisans **site başına** ücretlendiriliyor. İki-üç siteden fazlasını yöneten herkes için maliyet hızla büyüyor. r/Wordpress tartışmalarında yinelenen ikinci şikayet de performans: kullanıcılar eklentinin yıllar içinde ağırlaştığını ve panel içi bildirimlerin arttığını aktarıyor."),

    h3("Yoast kimin için doğru?"),
    p("Tek ya da az sayıda site yöneten, ekibinde WordPress'e yeni üyeler olan ve \"bol dokümante edilmiş standart araç\" isteyen ekipler için hâlâ güvenli liman."),

    h2("Rank Math: Ücretsizde En Geniş Özellik Seti"),
    p("Rank Math'in yükselişinin tek sebebi var: rakiplerin para istediği özellikleri ücretsiz vermesi. WP Rocket ve Zapier'in karşılaştırmalarına göre ücretsiz sürümde sınırsız odak kelime, yönlendirme yöneticisi, 404 izleme, Google Search Console entegrasyonu ve 18 hazır schema tipi var — bunların çoğu Yoast'ta premium."),
    p("2026 itibarıyla bir adım daha attı: OnlineMediaMasters'ın aktardığına göre llms.txt desteği ve yapay zeka aramalarından gelen trafiği izleyen raporlar ekledi. [Yapay zeka aramasında görünürlük](/geo) önemsiyorsanız bu fark anlamlı."),
    p("Madalyonun öbür yüzü: r/Wordpress kullanıcılarının en sık dile getirdiği rahatsızlık, ücretsiz sürümdeki agresif üst satış (upsell) bildirimleri ve kurulum sihirbazında varsayılan olarak açık gelen modül kalabalığı. Kurulumdan sonra kullanmadığınız modülleri kapatmak, hem paneli hem siteyi hafifletir."),

    h3("Rank Math kimin için doğru?"),
    p("Bütçesiz başlayan tek site sahipleri ve özellik/fiyat oranını her şeyin önünde tutanlar. Kurulum sihirbazı Search Console bağlantısı ve sitemap ayarını birkaç tıkta bitiriyor — teknik bilgisi sınırlı kullanıcı için ciddi kolaylık."),

    h2("SEOPress: Hafiflik ve Builder Uyumu"),
    p("SEOPress küçük kitlesine rağmen iki senaryoda öne çıkıyor. Birincisi performans hassasiyeti: reklamsız, bildirimsiz ve yalın bir panel sunuyor. İkincisi geçiş kolaylığı: OddJar'ın testine göre yerleşik migrasyon aracı Yoast veya Rank Math'ten meta başlıkları, açıklamaları ve schema verilerini tek seferde taşıyor. Oxygen Builder kullanıyorsanız da güvenli tercih — Rank Math'in bu builder'la bilinen uyumluluk sorunları var."),

    h2("Eklenti Değiştirmek Sıralamanızı Düşürür mü?"),
    p("Kısa cevap: doğru yapılırsa hayır. Title, meta ve schema verileri migrasyon araçlarıyla taşındığı sürece Google'ın gördüğü çıktı değişmez. Dikkat edilecek iki nokta var:"),
    ol([
      "Eski eklentiyi silmeden önce yeni eklentinin verileri **gerçekten** içe aktardığını birkaç sayfanın kaynak kodundan kontrol edin (title ve meta description etiketlerine bakın).",
      "Sitemap URL'i değişiyorsa (ör. sitemap_index.xml → sitemap.xml) yeni adresi Search Console'a yeniden gönderin.",
    ]),
    p("İki SEO eklentisini aynı anda aktif tutmayın: çift meta etiketi, çift sitemap ve çelişen schema üretirler — Google hangisine güveneceğini bilemez."),

    h2("Eklentinin Yapamadığı İşler"),
    p("Burası çoğu karşılaştırma yazısının atladığı kısım. SEO eklentisi şunları **yapamaz:**"),
    ul([
      "Yavaş temanızı ve şişkin eklenti yığınınızı hızlandıramaz — [site hızı](/blog/shopify-hiz-optimizasyonu) ayrı bir iştir.",
      "Tarama bütçesi, yinelenen arşiv sayfaları, yetim sayfalar gibi yapısal sorunları çözemez; sadece araç verir, kararı siz verirsiniz.",
      "İçerik stratejisi kuramaz: hangi sayfayı hangi arama niyetine yazacağınızı trafik ışığı söylemez.",
    ]),
    p("Trafik ışıkları yeşil ama organik trafik yerinde sayıyorsa, sorun eklentide değil bu katmanlardadır. Bu noktada araç değil teşhis gerekir — [WordPress SEO hizmetimizde](/seo/wordpress-seo) tam olarak bunu yapıyoruz: tema, eklenti yükü, veritabanı ve içerik mimarisini birlikte denetliyoruz."),

    h2("Sık Sorulan Sorular"),
    h3("Ücretsiz kullanımda en iyi WordPress SEO eklentisi hangisi?"),
    p("Özellik genişliği ölçütünde Rank Math: sınırsız odak kelime, yönlendirme yöneticisi ve Search Console entegrasyonu ücretsiz sürümde geliyor. Yalınlık ölçütünde SEOPress'in ücretsiz sürümü de güçlü bir alternatif."),
    h3("Rank Math mi Yoast mu?"),
    p("Bütçe ve özellik önceliyse Rank Math; ekip alışkanlığı, dokümantasyon ve kanıtlanmış istikrar öncelikse Yoast. İkisi de işin özünü (title, meta, sitemap, schema) sorunsuz yapar — fark ücretsiz sürüm sınırlarında ve panel deneyiminde."),
    h3("SEO eklentisi siteyi yavaşlatır mı?"),
    p("Tek başına ölçülebilir etkisi genelde küçüktür; asıl yavaşlık tema, görseller ve eklenti yığınının toplamından gelir. Yine de r/Wordpress'te kullanıcılar ağır SEO eklentilerinin panel tarafını yavaşlattığını sık aktarıyor — kullanmadığınız modülleri kapatmak iyi bir alışkanlık."),
    h3("Birden fazla SEO eklentisi kullanabilir miyim?"),
    p("Hayır. Aynı işi yapan iki eklenti çift meta, çift sitemap ve çelişen sinyal üretir. Tek eklenti seçin; eksik kalan özel ihtiyaçları (ör. gelişmiş schema) tekil, dar kapsamlı eklentilerle tamamlayın."),
    h3("Eklenti kurdum, ne zaman sonuç görürüm?"),
    p("Eklenti kurmak başlı başına sonuç üretmez; doğru yapılandırma + içerik + teknik temizlikle birlikte ilk ölçülebilir etkiler genellikle 2-3 ayda görülür. [SEO'nun nasıl çalıştığını](/blog/seo-nedir) bilmek beklentiyi doğru kurar."),

    cta(
      "Eklenti Yeşil, Trafik Yerinde mi Sayıyor?",
      "Trafik ışığı skorları içerik editörünü rahatlatır ama Google'ı ikna etmez. WordPress sitenizin tema, eklenti yükü, teknik altyapı ve içerik mimarisini birlikte denetleyelim; eklentinin göremediği sorunları raporlayalım.",
      "WordPress SEO Denetimi Al",
      "/seo/wordpress-seo"
    ),
  ],
});
