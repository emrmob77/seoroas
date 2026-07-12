// Blog: WordPress SEO Ayarları — odak: "wordpress seo ayarları" (60/ay) + "robots.txt wordpress" (30/ay)
// Araştırma: Google Search Central robots.txt dokümantasyonu, Yoast/SiteGround/WP Rocket
// robots.txt rehberleri, r/Wordpress tartışma temaları. Shopify eşdeğeri: shopify-seo-ayarlari.
import { createPost, h2, h3, p, quote, ul, ol, cta } from "./pt-helpers.mjs";

await createPost({
  slug: "wordpress-seo-ayarlari",
  title: "WordPress SEO Ayarları: Kurulumdan Sonra Yapılması Gereken 9 Ayar",
  seoTitle: "WordPress SEO Ayarları: 9 Adımlık Kurulum Rehberi",
  seoDescription:
    "Görünürlük ayarından robots.txt'ye, kalıcı bağlantılardan sitemap'e: WordPress sitenizde sıralamayı doğrudan etkileyen 9 ayarın doğru yapılandırması.",
  focusKeyword: "wordpress seo ayarları",
  excerpt:
    "Tek bir onay kutusu — 'arama motorlarının bu siteyi dizine eklemesini engelle' — açık unutulduğunda sitenizin tamamı Google'dan silinebiliyor. WordPress'te sıralamayı doğrudan etkileyen 9 ayar: görünürlük, kalıcı bağlantılar, robots.txt, sitemap, arşiv sayfaları ve Search Console bağlantısı, adım adım.",
  body: [
    p("WordPress kurulumunda tek bir onay kutusu var ki açık unutulduğunda sitenizin tamamını Google'dan silebilir: **\"Arama motorlarının bu siteyi dizine eklemesini engelle.\"** Geliştirme aşamasında işaretlenir, yayında kaldırılması unutulur — ve site aylarca sıfır organik trafikle yaşar. Aşağıdaki 9 ayarın ilki bu; kalanı da benzer şekilde küçük görünen ama sıralamayı doğrudan etkileyen yapılandırmalar."),
    p("Bu rehber [SEO eklentisi karşılaştırmamızın](/blog/en-iyi-wordpress-seo-eklentileri) devamı niteliğinde: orada aracı seçiyorduk, burada aracı ve WordPress'in kendi ayarlarını doğru kuruyoruz. Shopify kullanıyorsanız aynı mantığın platform karşılığı [Shopify SEO ayarları rehberinde](/blog/shopify-seo-ayarlari)."),

    h2("1. Görünürlük Ayarı: Önce Bunu Kontrol Edin"),
    p("**Ayarlar → Okuma** ekranındaki \"Arama motoru görünürlüğü\" kutusu işaretliyse WordPress tüm sitenize noindex sinyali basar. Yayındaki bir sitede bu kutu her zaman **boş** olmalı. Siteniz aylardır Google'da görünmüyorsa ilk bakılacak yer burası — teknik denetimlerde hâlâ en sık rastladığımız hatalardan biri."),

    h2("2. Kalıcı Bağlantılar: URL Yapısını Baştan Doğru Kurun"),
    p("**Ayarlar → Kalıcı Bağlantılar**'da \"Yazı adı\" (/%postname%/) yapısını seçin. Varsayılan \"?p=123\" yapısı hem kullanıcıya hem arama motoruna hiçbir şey söylemez. Kritik nokta zamanlama: bu ayarı site yayına girdikten aylar sonra değiştirmek, tüm URL'leri değiştirir ve yönlendirme haritası gerektirir. Yeni sitede ilk gün yapın; eski sitede değiştirecekseniz 301 yönlendirmelerini planlamadan dokunmayın."),

    h2("3. Tek Adres Kuralı: www ve HTTPS Tekilleştirmesi"),
    p("Siteniz dört farklı adresten açılabilir: http/https × www'lu/www'suz. Google bunları ayrı URL'ler olarak görür. **Ayarlar → Genel**'de WordPress ve site adresini tek biçimde (önerimiz https + tercih ettiğiniz tek host) tanımlayın; sunucu tarafında da diğer üç varyantı 301 ile bu adrese yönlendirin. Bölünmüş sinyal, bölünmüş otorite demektir."),

    h2("4. Title ve Meta Description Şablonları"),
    p("SEO eklentinizin (Yoast, Rank Math, SEOPress fark etmez) başlık şablonlarını içerik türü bazında kurun: yazılar için \"Yazı Başlığı | Marka\", sayfalar için sade başlık. Ana sayfa, hizmet ve kategori sayfalarında ise şablona güvenmeyin — bu sayfaların title'ını arama niyetine göre elle yazın. Title, tıklama oranını etkileyen en güçlü tekil alandır; şablon işi ölçeklendirir, elle yazım işi kazandırır."),

    h2("5. XML Sitemap: Üretmek Yetmez, Bildirin"),
    p("Modern SEO eklentileri sitemap'i otomatik üretir; WordPress 5.5+ çekirdeği de basit bir sitemap sunar (eklentiniz varsa çekirdeğinkini devre dışı bırakır, çakışma olmaz). İki kontrol önemli:"),
    ul([
      "Sitemap'te yalnızca **index'lenmesini istediğiniz** URL'ler olsun — noindex'li sayfa, etiket arşivi çöplüğü ve yönlendirilen URL'ler sitemap'e girmemeli.",
      "Sitemap adresini Search Console'a bir kez gönderin ve robots.txt dosyanıza Sitemap satırı ekleyin — Google'ın resmi robots.txt dokümantasyonu bu satırı açıkça destekliyor.",
    ]),

    h2("6. robots.txt: WordPress'te Doğru Yapılandırma"),
    p("WordPress, fiziksel dosya yoksa sanal bir robots.txt üretir; SEO eklentileri de bunu panelden düzenlemenize izin verir. Google Search Central'ın dokümantasyonundaki iki ilke burada yol gösterici:"),
    ul([
      "robots.txt **tarama** kontrolüdür, index kontrolü değil. Bir sayfayı Google'dan çıkarmak istiyorsanız robots.txt ile engellemek yanlış araçtır — noindex kullanın. Engellenen sayfa taranamaz ama başka sitelerden link alıyorsa index'te kalabilir.",
      "CSS ve JavaScript dosyalarını **engellemeyin.** Google sayfayı render ederek değerlendirir; kaynaklara erişemezse sayfanızı bozuk görür ve bu sıralamanıza zarar verebilir.",
    ]),
    h3("Önerilen sade WordPress robots.txt"),
    quote("User-agent: * / Disallow: /wp-admin/ / Allow: /wp-admin/admin-ajax.php / Sitemap: https://siteniz.com/sitemap_index.xml — bu kadar. Yoast'un kendi rehberi de dahil güncel kaynakların ortak önerisi: robots.txt'e olabildiğince az bel bağlayın, ne eklediğinizi bilmiyorsanız eklemeyin."),
    p("Sık yapılan hata: /wp-content/ veya /wp-includes/ klasörlerini toptan engellemek. Bu, tema CSS'ini ve JS'ini de engeller — yukarıdaki render sorununu bizzat yaratırsınız. Değişiklikten sonra Search Console'daki robots.txt raporundan hata kontrolü yapın."),

    h2("7. Kategori, Etiket ve Arşiv Sayfaları: İndeks Şişkinliğini Önleyin"),
    p("WordPress her kategori, etiket, yazar ve tarih için otomatik arşiv sayfası üretir. Yüz yazılık bir blogda bu, yüzlerce düşük değerli URL demek — Google tarama bütçesini bunlara harcar. Pratik kural:"),
    ul([
      "Gerçek içerik hiyerarşisi taşıyan **kategori** sayfalarını index'te tutun, kısa açıklama metni ekleyin.",
      "**Etiket, yazar ve tarih arşivlerini** çoğu sitede noindex yapın (tek yazarlı blogda yazar arşivi ana sayfanın kopyasıdır).",
      "Eklentinizin \"attachment\" (görsel eki) sayfalarını ana dosyaya yönlendirme ayarını açın — Yoast ve Rank Math'te tek tık.",
    ]),

    h2("8. Görsel Ayarları: Boyut ve Alt Metin Disiplini"),
    p("Görselleri yüklemeden önce boyutlandırın ve sıkıştırın (WebP tercih edin); 4000 piksellik fotoğrafı temaya bırakmak en yaygın hız katilidir. Alt metinde ölçü şu: anlam taşıyan görsele bağlamı anlatan bir cümle, dekoratif görsele boş alt. Her görsele anahtar kelime doldurmak erişilebilirliği bozar, kaliteyi düşürür."),

    h2("9. Search Console Bağlantısı: Ölçmeden Yönetemezsiniz"),
    p("Site yayına girdiği gün [Google Search Console](/blog/search-console-nedir) mülkü açın, sitemap'i gönderin. İlk haftalarda üç rapora bakın: dizine ekleme (hangi sayfalar index'te), performans (hangi sorgular gösterim alıyor) ve robots.txt/sayfa deneyimi uyarıları. WordPress tarafında yaptığınız her yapısal değişikliğin sonucunu burada doğrularsınız."),

    h2("Ayarlar Tamam — Peki Bu Yeterli mi?"),
    p("Dürüst cevap: hayır. Bu 9 ayar zemini düzler; sıralamayı kazandıran şey üstüne koyduklarınızdır — arama niyetine oturan içerik, hız ve otorite. Ayarları doğru yapıp trafiği hâlâ kımıldamayan WordPress sitelerinde sorun genellikle tema/eklenti kaynaklı hız problemleri, index şişkinliği ve içerik mimarisindedir. Bu üç katmanın denetimi [WordPress SEO hizmetimizin](/seo/wordpress-seo) tam kapsamı."),

    h2("Sık Sorulan Sorular"),
    h3("WordPress robots.txt dosyası nerede?"),
    p("Fiziksel dosya olarak sitenizin kök dizinindedir (siteniz.com/robots.txt). Dosya yoksa WordPress sanal olarak üretir; SEO eklentinizin araçlar bölümünden veya FTP ile düzenleyebilirsiniz. Düzenleme sonrası mutlaka tarayıcıdan /robots.txt adresini açıp sonucu doğrulayın."),
    h3("En önemli WordPress SEO ayarı hangisi?"),
    p("Zarar önleme sırasıyla: görünürlük kutusunun kapalı olması, ardından kalıcı bağlantı yapısı. İlki siteyi tamamen görünmez yapabilir, ikincisi sonradan değiştirmesi en maliyetli ayardır."),
    h3("SEO eklentisi olmadan bu ayarlar yapılabilir mi?"),
    p("Kısmen: görünürlük, kalıcı bağlantılar ve çekirdek sitemap eklentisiz de var. Title şablonları, schema, yönlendirmeler ve arşiv noindex kontrolleri için pratikte bir eklenti gerekir — [karşılaştırmamız](/blog/en-iyi-wordpress-seo-eklentileri) seçimi kolaylaştırır."),
    h3("Ayarları değiştirdim, ne zaman etki görürüm?"),
    p("Görünürlük veya robots.txt gibi engel kaldıran düzeltmeler, Google'ın yeniden taramasıyla günler-haftalar içinde etki eder. Şablon ve arşiv düzenlemeleri gibi iyileştirmeler ise 1-3 aylık pencerede ölçülür; [SEO'da sonuç takvimi](/blog/seo-nasil-yapilir) beklentiyi doğru kurmanıza yardım eder."),

    cta(
      "Ayarlar Doğru mu, Emin Değil misiniz?",
      "9 maddeyi uyguladınız ama trafik hâlâ yerinde mi sayıyor? WordPress sitenizin tema hızından index şişkinliğine, robots.txt'den içerik mimarisine tam teknik denetimini çıkaralım — neyin çalışıp neyin fren yaptığını raporla görün.",
      "WordPress Teknik Denetimi Al",
      "/seo/wordpress-seo"
    ),
  ],
});
