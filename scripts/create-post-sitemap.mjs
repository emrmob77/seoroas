// Blog: Sitemap Nedir, Nasıl Oluşturulur? — Teknik SEO kümesi, odak: "sitemap oluşturma" (aile ~240/ay, KD 0)
// Kaynaklar: Google Search Central (build-sitemap dokümanı, sitemaps-lastmod-ping blog yazısı),
// kendi Temmuz 2026 donmuş-sitemap vakamız (anonimleştirilmiş). E-E-A-T: birinci elden deneyim.
import { createPost, h2, h3, p, quote, ul, ol, cta } from "./pt-helpers.mjs";

await createPost({
  slug: "sitemap-nedir",
  title: "Sitemap Nedir, Nasıl Oluşturulur? Google'ın Gerçekten Kullandıkları",
  seoTitle: "Sitemap Nedir? Sitemap Oluşturma ve Gönderme Rehberi",
  seoDescription:
    "Sitemap nedir, nasıl oluşturulur, Google'a nasıl gönderilir? lastmod'un önemi, Google'ın yok saydığı alanlar ve sitemap'iniz güncel görünse bile eskisini servis ediyor olabileceği gerçeği.",
  focusKeyword: "sitemap oluşturma",
  excerpt:
    "Sitemap, sitenizdeki sayfaların listesini Google'a bildiren XML dosyasıdır. Nasıl oluşturulur, Search Console'a nasıl gönderilir, lastmod neden kritik ve changefreq/priority neden boşa yazılıyor — hepsi bu rehberde, yaşanmış bir vaka ile.",
  body: [
    p("Geçtiğimiz ay bir sitenin beş yeni içeriği tam 10 gün boyunca Google'a hiç ulaşmadı. Sitemap dosyası tarayıcıda açıldığında gayet güncel görünüyordu. Ama Google'ın gördüğü dosya 6 gün önceki bir kopyaydı. Bu yazının sonunda bu vakayı ve sizin de aynı tuzağa düşüp düşmediğinizi 30 saniyede nasıl kontrol edeceğinizi anlatacağız. Önce temeli kuralım."),

    h2("Sitemap Nedir?"),
    p("Sitemap (site haritası), sitenizdeki önemli sayfaların adreslerini ve her birinin en son ne zaman güncellendiğini arama motorlarına bildiren XML formatında bir dosyadır. Genellikle `site.com/sitemap.xml` adresinde yaşar."),
    p("Şöyle düşünün: Google sitenizi linkleri takip ederek keşfeder. Ama yeni açtığınız bir sayfaya henüz hiçbir yerden link yoksa, Google'ın onu bulması haftalar sürebilir. Sitemap, \"şu sayfalarım var, şunlar da yeni güncellendi\" diyen resmi bildirim kanalınızdır. Özellikle yeni ve az linkli sitelerde keşif süresini ciddi kısaltır."),
    p("Bir sınırı baştan netleştirelim: sitemap, sayfanızın dizine ekleneceğini *garanti etmez*. Google'ın resmi dokümanı da bunu açıkça söyler. Sitemap keşfi hızlandırır; dizine girmek ise içeriğin kalitesine ve sitenin güvenilirliğine bakar. \"Tarandı - şu anda dizine eklenmedi\" uyarısı görüyorsanız sorun sitemap'te değil, genellikle içerik veya [iç bağlantı yapısındadır](/seo/teknik-seo)."),

    h2("Sitemap Ne Zaman Gerçekten Gerekli?"),
    p("Google'ın kendi kriterlerine göre sitemap özellikle şu durumlarda önemli:"),
    ul([
      "**Yeni siteler:** Dışarıdan çok az link alıyorsanız Google'ın sizi keşfetmesi için en hızlı yol budur.",
      "**Büyük siteler:** Binlerce sayfanız varsa Google'ın hepsini link takibiyle bulması zorlaşır.",
      "**Sık güncellenen içerik:** Blog, haber, ürün stoku — lastmod ile \"burada yenilik var\" sinyali verirsiniz.",
      "**Zayıf iç linkli sayfalar:** Menüden ulaşılamayan, derinlerde kalmış sayfalar sitemap sayesinde görünür olur.",
    ]),
    p("500 sayfalık, iç linkleri düzgün küçük bir sitede sitemap olmadan da her şey keşfedilebilir. Ama maliyeti sıfıra yakın olduğu için her sitede olmasını öneririz — sorun çıktığında ilk bakacağınız teşhis aracı da odur."),

    h2("Sitemap Nasıl Oluşturulur?"),
    p("İyi haber: 2026'da sitemap'i elle yazan neredeyse kimse kalmadı. Platformunuza göre yol şu:"),
    h3("Hazır platformlar (WordPress, Shopify, Wix)"),
    p("WordPress'te Yoast SEO veya Rank Math kurulduğunda sitemap otomatik üretilir ve içerik ekledikçe kendini günceller. Shopify her mağaza için `/sitemap.xml` adresini kendisi oluşturur; müdahale gerekmez. Wix ve Squarespace'te de durum aynı."),
    h3("Özel yazılım siteler (Next.js, Nuxt vb.)"),
    p("Modern framework'lerin sitemap modülleri vardır; kritik nokta sitemap'in *dinamik* üretilmesidir. Build anında bir kere üretilip statik dosya olarak donarsa, yeni içerikler sitemap'e hiç girmez — birazdan anlatacağımız vaka tam olarak bu."),
    h3("Ücretsiz sitemap oluşturucular"),
    p("Statik ve küçük bir site için xml-sitemaps.com gibi tarayıcı tabanlı araçlar siteyi tarayıp XML dosyası üretir; dosyayı sitenizin kök dizinine yüklersiniz. Dezavantajı bariz: her içerik değişiminde bu işlemi elle tekrarlamanız gerekir. İçerik üreten hiçbir site için sürdürülebilir değildir."),

    h2("Google'a Gönderme: Search Console"),
    ol([
      "[Google Search Console](/blog/search-console-nedir) hesabınıza girin ve sitenizi doğrulayın.",
      "Sol menüden **Dizine Ekleme → Site Haritaları** bölümünü açın.",
      "`sitemap.xml` yazıp göndere basın. Durum sütununda \"Başarılı\" görmelisiniz.",
      "robots.txt dosyanıza da `Sitemap: https://siteniz.com/sitemap.xml` satırını ekleyin — Google dışındaki arama motorları da böyle bulur.",
    ]),
    p("Eskiden kullanılan \"ping\" yöntemi (sitemap adresini Google'a HTTP isteğiyle bildirme) Haziran 2023'te resmen kapatıldı. Bugün geçerli iki kanal var: Search Console ve robots.txt satırı."),

    h2("lastmod, changefreq, priority: Hangisi Gerçekten Çalışıyor?"),
    p("Sitemap formatında üç meta alan var ve internetteki rehberlerin çoğu üçünü de özenle doldurmanızı söyler. Google'ın resmi dokümanı ise daha nettir:"),
    ul([
      "**lastmod → kullanılıyor.** Google, tutarlı ve doğrulanabilir olduğu sürece lastmod'u tarama zamanlamasında sinyal olarak kullandığını açıkça belirtiyor. Ama dürüst olmak şartıyla: ana içerik, yapılandırılmış veri veya linkler değiştiğinde güncelleyin. Telif yılını değiştirip lastmod'u yenilemek \"önemli güncelleme\" sayılmaz — ve Google yalan söylediğinizi fark ederse sinyali görmezden gelmeye başlar.",
      "**changefreq → yok sayılıyor.** Google bu alanı hiç kullanmadığını açıkladı.",
      "**priority → yok sayılıyor.** Aynı şekilde. Sayfalarınıza 0.9 verip sıralama beklemek boşuna.",
    ]),
    p("Pratik sonuç: enerjinizi changefreq/priority doldurmaya değil, lastmod'un *gerçeği söylemesine* harcayın."),

    h2("Sitemap'iniz Güncel Görünüyor Olabilir. Google Eskisini Görüyor Olabilir."),
    p("Şimdi baştaki vakaya dönelim. Temmuz 2026'da teknik denetimini yaptığımız bir Next.js sitede tablo şuydu: 5 yeni blog yazısı yayında, sitemap tarayıcıda güncel görünüyor, ama yazılar 10 gündür Google'da yok. Search Console'un URL denetimi hepsine aynı cevabı veriyordu: \"URL Google tarafından bilinmiyor.\""),
    p("Teşhis tek bir HTTP başlığında saklıydı. Sitemap adresine curl ile istek atınca yanıtta şu vardı:"),
    quote("age: 545828 — yani servis edilen dosya 6,3 gün önce üretilmişti. Sitemap kodu her istekte taze veri üretecek şekilde yazılmıştı ama barındırma platformu çıktıyı build anında sabitleyip CDN önbelleğinden servis ediyordu. Tarayıcıda \"güncel\" görünen dosya, Google'ın gördüğü dosya değildi."),
    p("Çözüm iki adımdı: sitemap route'u her istekte dinamik üretilecek şekilde işaretlendi ve Search Console'dan yeniden gönderildi. Aynı gün sitemap 17 URL'den 48 URL'ye çıktı; keşfedilmemiş sayfalar taranmaya başladı."),
    p("Sizin 30 saniyelik kontrolünüz: terminalde `curl -sI siteniz.com/sitemap.xml` çalıştırın. Yanıtta yüksek bir `age` değeri (saatler/günler) ve `x-vercel-cache: HIT` benzeri bir başlık görüyorsanız, son eklediğiniz URL'nin sitemap çıktısında gerçekten var olup olmadığına bakın. Yoksa, siz de aynı tuzaktasınız."),

    h2("Sık Yapılan 5 Sitemap Hatası"),
    ul([
      "**noindex sayfaları sitemap'e koymak.** \"Beni dizine ekle\" listesine \"beni dizine ekleme\" etiketli sayfa koymak çelişkili sinyaldir.",
      "**Yönlendirilen (301) veya silinmiş (404) URL'leri listede bırakmak.** Google bunlara istek harcar, sitemap'in güven puanı düşer.",
      "**Canonical olmayan URL varyantlarını listelemek.** Sitemap'te yalnızca canonical adresler olmalı.",
      "**50.000 URL / 50 MB sınırını aşmak.** Tek dosyanın resmi sınırı bu; büyük sitelerde sitemap index dosyasıyla bölünür.",
      "**Sitemap'i kur ve unut.** Yukarıdaki vaka gösteriyor: sitemap'in üretim mekanizması da bozulabilir. Ayda bir curl kontrolü ucuz bir sigortadır.",
    ]),

    h2("Sık Sorulan Sorular"),
    h3("Sitemap zorunlu mu?"),
    p("Zorunlu değil. Küçük ve iç linkleri sağlam sitelerde Google her şeyi kendisi bulabilir. Ama yeni, büyük veya sık güncellenen sitelerde keşif hızını belirgin artırır; maliyeti sıfır olduğu için her sitede öneririz."),
    h3("Sitemap dizine eklenmeyi garanti eder mi?"),
    p("Hayır. Sitemap yalnızca keşfi hızlandırır. Dizine girme kararını içerik kalitesi, benzersizlik ve site güvenilirliği belirler. Google'ın resmi dokümanı da sitemap'in bir garanti olmadığını açıkça yazar."),
    h3("Sitemap ne sıklıkla güncellenmeli?"),
    p("İdeali: içerik her değiştiğinde otomatik. Modern CMS'ler ve doğru yapılandırılmış framework'ler bunu kendiliğinden yapar. Elle üretilmiş statik sitemap kullanıyorsanız, her yeni içerikte yenilemeniz gerekir — bu yüzden otomasyona geçmenizi öneririz."),
    h3("Birden fazla sitemap dosyam olabilir mi?"),
    p("Evet. 50.000 URL sınırını aşan siteler sitemap index dosyası altında birden fazla sitemap barındırır. Ayrıca içerik türüne göre bölmek (sayfalar, blog, ürünler) hata ayıklamayı kolaylaştırır."),

    cta(
      "Siteniz Google'a Doğru Sinyal Veriyor mu?",
      "Sitemap, robots.txt, canonical ve indeksleme durumunuzu tek tek kontrol ediyor, keşfedilmeyen sayfalarınızı bulup nedeniyle birlikte raporluyoruz.",
      "Teknik SEO Denetimi Al",
      "/seo/teknik-seo"
    ),
  ],
});
