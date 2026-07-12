// Blog: Canonical Nedir? — teknik SEO kümesi, odak: "canonical nedir" (varyantlarla ~410/ay, KD 0)
// Kaynaklar: Google Search Central (canonicalization), Onely, Conductor, SEOTesting
// Kapsanan varyantlar: canonical url nedir, canonical ne demek, canonical seo
import { createPost, h2, h3, p, quote, ul, ol, cta } from "./pt-helpers.mjs";

await createPost({
  slug: "canonical-nedir",
  title: "Canonical Nedir? Kopya Sayfalar Sıralamanızı Nasıl Böler?",
  seoTitle: "Canonical Nedir? Canonical URL Rehberi ve Sık Hatalar",
  seoDescription:
    "Canonical nedir, canonical URL ne işe yarar? Google'ın etiketinizi ne zaman yok saydığı, Search Console'da nasıl kontrol edeceğiniz ve en sık yapılan hatalar.",
  focusKeyword: "canonical nedir",
  excerpt:
    "Canonical, aynı içeriğin birden çok URL'de yaşadığı durumlarda Google'a \"asıl adres bu\" demenin yoludur. Yanlış kurulduğunda sayfalarınız birbirinin sıralamasını böler; Google etiketi tamamen yok da sayabilir. Bu rehberde canonical'ın nasıl çalıştığını ve en sık hataları anlatıyoruz.",
  body: [
    p("Bir e-ticaret sitesindeki tek bir tişört sayfasını düşünün. Aynı ürün şu adreslerin hepsinden açılıyor: `/tisort`, `/tisort?renk=mavi`, `/tisort?utm_source=instagram`, `/kampanya/tisort`. Siz tek sayfa görüyorsunuz; Google **dört ayrı sayfa** görüyor. Ve dördü de aynı aramada birbirine rakip."),
    p("Sonuç: linkler ve sıralama sinyali dört kopyaya bölünür, hiçbiri ilk sayfaya çıkacak gücü toplayamaz. Canonical etiketi tam bu sorunu çözmek için var. Peki \"canonical nedir\" sorusunun tam cevabı ne ve Google bu etikete gerçekte ne kadar uyuyor? Cevap, çoğu rehberin anlattığından biraz daha ilginç."),

    h2("Canonical Nedir? (Canonical URL Ne Demek?)"),
    p("Canonical, bir içeriğin birden fazla URL'de erişilebilir olduğu durumlarda, arama motoruna hangi adresin **temsilci (asıl) sürüm** olduğunu bildiren HTML etiketidir. Sayfanın `<head>` bölümüne şöyle eklenir:"),
    quote("<link rel=\"canonical\" href=\"https://siteniz.com/tisort\" />"),
    p("Google'ın kendi tanımıyla canonicalization, \"bir içeriğin temsilci URL'sini seçme süreci\"dir. Bu seçim yapıldığında Google arama sonuçlarında yalnızca canonical sürümü gösterir; kopyalar dizinde \"yinelenen\" olarak işaretlenir ve sinyaller asıl sayfada birleşir."),

    h2("Canonical Ne Zaman Gerekir?"),
    ul([
      "**Parametreli URL'ler:** Filtre, sıralama ve kampanya parametreleri (`?renk=`, `?utm_=`) aynı içeriğin kopyalarını üretir — en yaygın senaryo.",
      "**www / www'suz ve http / https sürümleri:** Aynı site dört farklı kökten açılabiliyorsa her sayfanın dört kopyası var demektir.",
      "**Birbirine çok benzeyen sayfalar:** Küçük farklarla çoğaltılmış varyant/kategori sayfaları.",
      "**İçerik dağıtımı (syndication):** Yazınız başka bir sitede yeniden yayımlanıyorsa, o kopyanın size canonical vermesi orijinali korur.",
    ]),
    p("Kopya URL üretmeyen, tek adresli sayfalarda bile **kendine işaret eden (self-referencing) canonical** kullanmak iyi pratiktir: parametre eklenerek açılan her sürüm otomatik olarak asıl adresi bildirir."),

    h2("Kritik Gerçek: Canonical Bir Emir Değil, Öneridir"),
    p("Çoğu site sahibinin gözden kaçırdığı nokta şu: Google, canonical etiketini **direktif değil ipucu (hint)** olarak değerlendirir. Kendi dokümantasyonunda açıkça \"canonical tercihi bildirmek bir kural değil ipucudur\" der. Yani etiketi doğru yazmanız, Google'ın ona uyacağını garanti etmez."),
    p("Google, temsilci URL'yi seçerken etiketinizle birlikte başka sinyallere de bakar:"),
    ul([
      "Sayfanın **HTTPS** olup olmadığı (HTTPS tercih edilir)",
      "**Yönlendirmeler** (redirect'ler hangi sürüme gidiyor?)",
      "URL'nin **sitemap'te** olup olmaması",
      "**İç linklerin** hangi sürüme yoğunlaştığı",
    ]),
    p("Bu sinyaller birbirini tutmazsa — örneğin canonical A sayfasını gösterirken iç linkleriniz ve sitemap'iniz B'yi işaret ediyorsa — Google kendi kararını verir. [Search Console'daki](/blog/search-console-nedir) meşhur \"Yineleme: Google, kullanıcıdan farklı bir standart sayfa seçti\" durumu tam olarak budur: siz bir şey söylediniz, Google'daki diğer kanıtlar başka yeri gösterdi."),

    h2("En Sık Yapılan Canonical Hataları"),
    ol([
      "**Çelişen çift yön:** A sayfası B'yi canonical gösterir, B de A'yı. Google niyetinizi tahmin etmek zorunda kalır; sıralama aylarca istikrarsız seyredebilir.",
      "**Her sayfada ana sayfaya canonical:** Şablon hatasıyla tüm sitenin ana sayfayı göstermesi — iç sayfaların tamamını dizinden silebilir.",
      "**Canonical + noindex birlikte:** İki etiket birbirine zıt mesaj verir; Google hangisine uyacağını seçer, genelde sizin istemediğinizi.",
      "**Yönlendirilen adrese canonical:** Etiketin gösterdiği URL 301 ile başka yere gidiyorsa sinyal zinciri kırılır.",
      "**Göreli (relative) URL kullanmak:** `href=\"/tisort\"` yerine tam adres (`https://...`) yazmak hata payını sıfırlar.",
    ]),

    h2("Search Console'da Canonical Nasıl Kontrol Edilir?"),
    p("Herhangi bir sayfanız için gerçeği görmek 30 saniye sürer: Search Console'da **URL denetimi** aracına adresi yapıştırın. Sonuçta iki satır göreceksiniz: \"Kullanıcı tarafından belirtilen standart sayfa\" (sizin etiketiniz) ve \"**Google tarafından seçilen standart sayfa**\" (gerçekte olan). İkisi aynıysa sorun yok; farklıysa yukarıdaki sinyal çelişkilerinden birini arayın."),
    p("Google farklı canonical seçtiyse düzeltme yolu genellikle üç adımdır: kopyalar arasındaki içerik farkını büyütün, iç linkleri asıl sürüme yoğunlaştırın ve sitemap'te yalnızca canonical URL'lerin bulunduğundan emin olun. Etiketi tekrar tekrar yazmak değil, **sinyalleri hizalamak** çözer — bu da [teknik SEO'nun](/blog/teknik-seo-nedir) bütüncül işlerinden biridir."),

    h2("Sık Sorulan Sorular"),
    h3("Canonical nedir, kısaca?"),
    p("Canonical, aynı içeriğin birden çok URL'de bulunduğu durumlarda arama motoruna asıl adresi bildiren HTML etiketidir. Sıralama sinyallerinin kopyalara bölünmesini önler."),
    h3("Canonical ne demek, Türkçesi nedir?"),
    p("Kelime anlamı \"standart, asıl kabul edilen\"dir. SEO bağlamında \"standart sayfa\" veya \"temsilci URL\" olarak çevrilir; Search Console'un Türkçe arayüzü \"standart sayfa\" ifadesini kullanır."),
    h3("Canonical URL sıralamayı artırır mı?"),
    p("Doğrudan artırmaz; bölünmeyi önler. Dağılan sinyalleri tek URL'de topladığı için dolaylı etkisi güçlüdür, ama canonical eklemek tek başına bir sıralama garantisi değildir."),
    h3("Canonical ile 301 yönlendirme arasındaki fark nedir?"),
    p("301, kullanıcıyı ve botu fiziksel olarak başka adrese taşır; eski sayfa artık açılmaz. Canonical ise her iki sayfayı da erişilebilir bırakır, yalnızca dizinleme tercihini bildirir. Kopya sayfanın kullanıcı için açık kalması gerekiyorsa canonical, gerekmiyorsa 301 doğru araçtır."),
    h3("Google canonical etiketimi neden yok sayıyor?"),
    p("Çünkü etiket bir ipucudur ve diğer sinyalleriniz (iç linkler, sitemap, yönlendirmeler, içerik benzerliği) başka bir sürümü işaret ediyordur. Sinyalleri hizaladığınızda Google'ın seçimi genellikle sizinkiyle eşitlenir."),

    cta(
      "Sayfalarınız Birbirinin Sıralamasını mı Bölüyor?",
      "Canonical çelişkilerini, kopya URL ailelerini ve indeksleme kayıplarını denetliyor, sinyalleri tek doğru adrese hizalıyoruz.",
      "Teknik SEO Denetimi Al",
      "/seo/teknik-seo"
    ),
  ],
});
