// Blog: Teknik SEO Nedir? — teknik SEO kümesinin hub yazısı, odak: "teknik seo nedir" (~250/ay, KD 0)
// Kaynaklar: Google Search Central, web.dev (CWV eşikleri), Search Engine Land, DebugBear,
// SEOROAS'ın kendi Temmuz 2026 sitemap vakası (birinci el deneyim)
import { createPost, h2, h3, p, quote, ul, ol, cta } from "./pt-helpers.mjs";

await createPost({
  slug: "teknik-seo-nedir",
  title: "Teknik SEO Nedir? Google'ın Sitenizi Görmesini Sağlayan Katman",
  seoTitle: "Teknik SEO Nedir? Tarama, İndeksleme ve Hız Rehberi",
  seoDescription:
    "Teknik SEO nedir, neden içerikten önce gelir? Tarama, indeksleme, Core Web Vitals ve Search Console kontrolleri — gerçek bir vaka üzerinden anlatıyoruz.",
  focusKeyword: "teknik seo nedir",
  excerpt:
    "Teknik SEO, Google'ın sitenizi bulmasını, okumasını ve dizine eklemesini sağlayan altyapı katmanıdır. İçerik ne kadar iyi olursa olsun, teknik katman bozuksa Google o içeriği hiç görmez. Bu rehberde teknik SEO'nun ana alanlarını ve kendi kendinize yapabileceğiniz kontrolleri anlatıyoruz.",
  body: [
    p("Temmuz 2026'da kendi sitemizde şunu yaşadık: 53 sayfanın 29'u Google'ın dizininde değildi. İçerik hazırdı, sayfalar açılıyordu, hiçbir hata görünmüyordu. Sorun tek bir teknik ayrıntıdaydı — sitemap dosyamız sunucu önbelleğinde donmuş, Google 10 gündür eski listeyi okuyordu. Yani sitenin yarısı Google için **hiç var olmamıştı**."),
    p("Teknik SEO tam olarak bu katmanla ilgilenir: içeriğinizin kalitesinden bağımsız olarak, Google'ın sitenizi bulabilmesi, okuyabilmesi ve dizine ekleyebilmesi. Bu yazıda \"teknik seo nedir\" sorusunu gerçek örneklerle cevaplayacağız; sonunda kendi sitenizi 15 dakikada kontrol edebileceğiniz bir liste bulacaksınız."),

    h2("Teknik SEO Nedir?"),
    p("Teknik SEO, bir web sitesinin arama motorları tarafından **taranabilir, anlaşılabilir ve dizine eklenebilir** olmasını sağlayan tüm altyapı çalışmalarıdır. İçerikle değil, o içeriği taşıyan sistemle ilgilenir: sunucu yanıtları, robots.txt, sitemap, yönlendirmeler, sayfa hızı, mobil uyum ve yapılandırılmış veri."),
    p("Google bir sayfayı sıralamadan önce üç aşamadan geçirir: önce sayfayı **bulur** (tarama), sonra içeriği **işler** (render ve anlama), en son **dizine ekler** (indeksleme). Bu zincirin herhangi bir halkası koparsa, sonraki aşamalar hiç gerçekleşmez. 1. sıraya çıkacak kalitede bir yazı, taranamıyorsa 0 ziyaretçi getirir."),
    quote("Sektörde yaygın kural şudur: önce tarama ve indeksleme engellerini çöz, sonra hız ve deneyim iyileştirmelerine geç. Google sayfanıza ulaşamıyorsa, gerisinin önemi yok."),

    h2("Teknik SEO'nun Ana Alanları"),
    h3("1. Taranabilirlik (Crawlability)"),
    p("Googlebot'un sitenizde engelsiz dolaşabilmesi. En yıkıcı hatalar burada yaşanır ve genellikle tek satırlıktır: test ortamında eklenen `Disallow: /` kuralının canlıya taşınması, ya da staging'deki noindex etiketinin yayında unutulması. Sektörde bu iki hata yüzünden aylarca görünürlük kaybeden siteler belgelenmiş durumda — koca siteler tek satır yüzünden Google'dan silinebiliyor."),
    h3("2. İndekslenebilirlik ve Sitemap"),
    p("Google'ın hangi sayfaları dizine alacağını yönetmek: XML sitemap'in güncel ve doğru olması, [canonical etiketlerinin](/blog/canonical-nedir) çelişkisiz kurulması, gereksiz sayfaların (filtre kombinasyonları, parametreli kopyalar) dizin dışında tutulması. Bizim yaşadığımız sitemap donması bu kategorinin ders kitabı örneği: dosya teknik olarak vardı ama içeriği güncellenmiyordu."),
    h3("3. Hız ve Core Web Vitals"),
    p("Google, gerçek kullanıcı deneyimini üç metrikle ölçer ve 2026 itibarıyla geçerli eşikler şunlar: **LCP** (en büyük içeriğin görünme süresi) 2,5 saniyenin altı, **INP** (etkileşime yanıt süresi) 200 milisaniyenin altı, **CLS** (düzen kayması) 0,1'in altı. Ölçüm laboratuvar testiyle değil, gerçek ziyaretçilerin 75. yüzdelik verisiyle yapılır — yani ziyaretlerin dörtte üçünün \"iyi\" deneyim alması gerekir."),
    p("Çıta göründüğünden yüksek: sektör taramalarına göre sitelerin **üçte birinden azı** üç metriği birden geçebiliyor. INP'nin Mart 2024'te eski FID metriğinin yerini aldığını ve özellikle JavaScript ağırlıklı sitelerde en çok zorlayan metrik olduğunu da not edelim."),
    h3("4. Mobil Öncelikli Dizinleme"),
    p("Google sitenizi masaüstü sürümünden değil, **mobil sürümünden** tarar ve değerlendirir. Mobilde gizlenen içerik, eksik iç linkler veya farklı meta etiketler doğrudan görünürlük kaybı demektir. \"Masaüstünde her şey tamam\" cümlesi teknik SEO'da bir anlam taşımaz."),
    h3("5. Yapılandırılmış Veri (Schema)"),
    p("Sayfanızın ne anlattığını Google'a makine diliyle söyleyen JSON-LD işaretlemeleri: makale, SSS, ürün, işletme bilgisi. Doğru kurulduğunda zengin sonuç **uygunluğu** sağlar — gösterilip gösterilmeyeceğine ise Google karar verir. Şemayı sıralama garantisi olarak satan herkese şüpheyle yaklaşın."),

    h2("Teknik SEO ile On-Page ve İçerik SEO Arasındaki Fark"),
    ul([
      "**Teknik SEO:** Site altyapısı — tarama, indeksleme, hız, render. \"Google siteyi görebiliyor mu?\"",
      "**On-Page SEO:** Var olan sayfaların optimizasyonu — başlıklar, meta açıklamalar, iç linkler. \"Google sayfayı doğru anlıyor mu?\"",
      "**İçerik SEO:** Yeni içerik stratejisi — konu kümeleri, arama niyeti, üretim takvimi. \"Kullanıcının aradığı içerik bizde var mı?\"",
    ]),
    p("Sıralama da bu yönde işler: teknik temel bozuksa on-page emeği boşa gider; ikisi sağlamsa içerik yatırımı bileşik getiri üretir. [SEO'nun bütününe](/blog/seo-nedir) bu üçlü bir arada hizmet eder."),

    h2("15 Dakikalık Teknik SEO Kontrolü (Kendi Kendinize)"),
    ol([
      "**robots.txt'i açın** (siteniz.com/robots.txt): `Disallow: /` satırı var mı? Sitemap bildirimi duruyor mu?",
      "**Sitemap'i açın** (siteniz.com/sitemap.xml): Son eklediğiniz sayfa listede mi? Değilse bizim yaşadığımız donma sizde de olabilir.",
      "**[Search Console'da](/blog/search-console-nedir) Dizine Ekleme → Sayfalar raporuna bakın:** \"Taranmadı\" ve \"Tarandı - dizine eklenmedi\" sayıları büyüyor mu?",
      "**URL denetimi çalıştırın:** Önemli bir sayfanızı denetleyin; \"Google tarafından seçilen canonical\" sizin belirttiğinizle aynı mı?",
      "**Site araması yapın:** Google'a `site:siteniz.com` yazın; çıkan sayfa sayısı beklediğinizin çok altındaysa indeksleme sorununuz var demektir.",
      "**Mobilde kendi sitenizi açın:** İçerik, menü ve linkler masaüstüyle aynı mı?",
    ]),
    p("Bu kontrollerin herhangi biri kırmızı yanıyorsa, sorun büyük ihtimalle tek sayfalık değil şablon düzeyindedir — yani bir kez çözüldüğünde onlarca sayfa birden düzelir. Teknik SEO'nun iyi tarafı budur: kaldıraç etkisi yüksektir."),

    h2("Sık Sorulan Sorular"),
    h3("Teknik SEO nedir, kısaca?"),
    p("Teknik SEO, arama motorlarının sitenizi bulmasını, okumasını ve dizine eklemesini sağlayan altyapı çalışmalarıdır: robots.txt, sitemap, canonical, sayfa hızı, mobil uyum ve yapılandırılmış veri bu kapsama girer."),
    h3("Teknik SEO neden bu kadar önemli?"),
    p("Çünkü zincirin ilk halkasıdır. Google sayfanızı tarayamıyor veya dizine ekleyemiyorsa, içeriğin kalitesi hiç değerlendirilmez. Kendi sitemizde tek bir sitemap hatası, sayfaların yarısının Google'da hiç var olmamasına yetti."),
    h3("Teknik SEO'yu kendim yapabilir miyim?"),
    p("Temel kontrolleri evet — yukarıdaki 15 dakikalık liste bunun için var. Ancak render sorunları, canonical çelişkileri ve büyük sitelerde tarama bütçesi yönetimi gibi konular deneyim ister; yanlış müdahale (örn. gereksiz noindex) zarar verebilir."),
    h3("Teknik SEO sonuç ne zaman gösterir?"),
    p("Engel kaldıran düzeltmeler (indeksleme, robots hatası) günler-haftalar içinde etki eder; hız ve deneyim iyileştirmelerinin etkisi ise gerçek kullanıcı verisi biriktikçe 1-3 ayda görünür hale gelir."),
    h3("Core Web Vitals eşikleri nedir?"),
    p("2026 itibarıyla geçerli \"iyi\" eşikleri: LCP 2,5 saniyenin, INP 200 milisaniyenin, CLS 0,1'in altı. Değerlendirme, gerçek ziyaretçi verisinin 75. yüzdeliğine göre yapılır."),

    cta(
      "Siteniz Google'a Ne Kadar Görünür?",
      "Tarama, indeksleme ve hız katmanınızı denetliyor, kaldıraç etkisi en yüksek düzeltmeleri öncelik sırasıyla teslim ediyoruz.",
      "Teknik SEO Denetimi Al",
      "/seo/teknik-seo"
    ),
  ],
});
