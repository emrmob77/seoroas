// Blog: Anahtar Kelime Araştırması — odak: "anahtar kelime araştırması" (150/ay) + "anahtar kelime nedir" (1.500/ay, KD 0)
// Araştırma: Reddit (r/SEO, r/juststart), Ahrefs, Backlinko, Moz, Kevin Indig, SparkToro (Tem 2026)
import { createPost, h2, h3, p, quote, ul, ol, cta } from "./pt-helpers.mjs";

await createPost({
  slug: "anahtar-kelime-arastirmasi-nasil-yapilir",
  title: "Anahtar Kelime Araştırması: Trafik Getiren Kelimeleri Bulma Rehberi",
  seoTitle: "Anahtar Kelime Araştırması Nasıl Yapılır? Adım Adım",
  seoDescription:
    "Anahtar kelime nedir, araştırması nasıl yapılır? Ücretsiz araçlarla adım adım süreç, Türkçe'ye özel taktikler ve araç verilerinin sizi nerede yanılttığı.",
  focusKeyword: "anahtar kelime araştırması",
  excerpt:
    "Sayfaların %90'ından fazlası Google'dan tek ziyaretçi almıyor; fark yanlış kelimeyi hedeflemekte. Anahtar kelime araştırmasını adım adım, Türkçe pazarın gerçekleriyle anlatıyoruz.",
  body: [
    p("Ahrefs, 1 milyardan fazla sayfayı inceledi: sayfaların **%90,63'ü Google'dan sıfır ziyaretçi alıyor**. Sıfır. Bu sayfaların çoğu kötü yazıldığı için değil, kimsenin aramadığı ya da asla kazanamayacakları kelimeleri hedefledikleri için görünmez. İşte anahtar kelime araştırması tam olarak bu israfı önleyen iş: yazmadan önce neyin arandığını, kimin kazandığını ve sizin nerede şansınız olduğunu ölçmek."),
    p("Bu rehberde süreci sıfırdan kuruyoruz: önce tanım, sonra adım adım uygulama, ücretsiz araçlar ve Türkçe pazara özgü tuzaklar. Araç verilerinin size nerede yalan söylediğini de açık açık yazacağız; çünkü orası herkesin atladığı kısım."),

    h2("Anahtar Kelime Nedir?"),
    p("Anahtar kelime, kullanıcının bir arama motoruna yazdığı sorgudur: \"kombi bakımı fiyat\", \"en iyi koşu ayakkabısı\", \"seo nedir\". SEO'da anahtar kelime, içeriğinizi hangi aramalarda görüneceğinizi belirlemek için hedeflediğiniz sorgu anlamına gelir. Anahtar kelime araştırması ise bu sorguları sistemli biçimde bulma, ölçme ve önceliklendirme sürecidir."),
    p("Kritik nokta şu: kelimeyi değil, **arama amacını (search intent)** hedeflersiniz. \"Kombi\" yazan biri ne istiyor; fiyat mı, tamir mi, nasıl çalıştığını mı? Amacı çözemediğiniz kelimede sıralama alsanız bile ziyaretçi 10 saniyede geri döner. Google bunu görür ve sizi aşağı indirir."),

    h2("Anahtar Kelime Araştırması Nasıl Yapılır? 6 Adım"),
    h3("1. Tohum kelimelerle başlayın"),
    p("İşinizi tarif eden 5-10 temel kelime yazın: sattığınız ürünler, çözdüğünüz sorunlar, müşterilerin telefonda kullandığı ifadeler. Müşteri dili altın değerindedir; siz \"klima arıza tespiti\" dersiniz, müşteri \"klima neden su akıtıyor\" diye arar."),
    h3("2. Listeyi genişletin"),
    p("Tohum kelimeleri şu kaynaklarla çoğaltın:"),
    ul([
      "**Google otomatik tamamlama:** kelimeyi yazın, çıkan önerileri not edin; sonuna a, b, c harflerini ekleyerek devam edin.",
      "**\"İlgili aramalar\" ve \"Diğer sorular\":** sonuç sayfasının altındaki ve ortasındaki kutular gerçek kullanıcı sorgularıdır.",
      "**Rakip analizi:** ilk sayfadaki rakiplerin hangi kelimelerden trafik aldığına Ahrefs veya Semrush ile bakın; sizin görmediğiniz kelimeleri onlar çoktan bulmuş.",
      "**Forum ve pazaryerleri:** Reddit, Ekşi Sözlük, şikayet siteleri ve Trendyol/Hepsiburada arama çubukları, araçların göremediği gerçek talebi gösterir.",
    ]),
    h3("3. Arama amacını sınıflandırın"),
    p("Her kelimeyi dört kovadan birine atın: **bilgi** (nedir, nasıl), **karşılaştırma/ticari** (en iyi, fiyat, yorumlar), **işlem** (satın al, sipariş), **navigasyon** (marka adı). Bilgi kelimeleri blog yazısına, ticari kelimeler hizmet ve kategori sayfalarına gider. Amaç ile sayfa tipi uyuşmazsa en iyi içerik bile sıralanmaz; Google'a \"seo fiyatları\" yazın, çıkan sonuçların hepsi fiyat sayfasıdır, blog yazısı değil."),
    h3("4. Metrikleri okuyun ama körü körüne güvenmeyin"),
    p("Üç metrik karar verdirir: aylık arama hacmi, sıralama zorluğu (KD) ve trafik potansiyeli. Şimdi kötü haber: Ahrefs'in 72.000 kelimelik testine göre Google'ın kendi Anahtar Kelime Planlayıcısı bile hacmi **vakaların %54'ünde olduğundan yüksek** gösteriyor. Reddit'teki deneyimli SEO'cuların ortak görüşü de aynı yönde:"),
    quote("\"Hiçbir anahtar kelime aracı tam doğru değil. Genel eğilimi gösterirler; ama Google arama verisini paylaşmadığı sürece ücretli araçlar asla yüzde yüz isabetli olmayacak.\" — r/juststart"),
    p("Bu yüzden hacmi kesin sayı değil, **büyüklük sırası** olarak okuyun. KD skoruna da dikkat: çoğu araç zorluğu sadece backlink sayısından hesaplar; \"kolay\" görünen kelimede güçlü markalar oturuyorsa gerçek zorluk skorun söylediğinden yüksektir. En sağlam sinyal, ilk sayfayı elle incelemektir."),
    h3("5. Hacim yerine trafik potansiyeline bakın"),
    p("Bir sayfa tek kelimeyle değil, yüzlerce varyasyonla sıralanır. Ahrefs'in klasik örneğinde aynı hacimde görünen iki kelimeden biri ayda 667, diğeri 3.100 ziyaret getiriyordu; fark, 1. sıradaki sayfanın sıralandığı diğer kelimelerden geliyordu. Karar verirken \"bu kelimenin lideri toplamda ne kadar trafik alıyor\" sorusunu sorun; buna trafik potansiyeli denir ve hacimden daha dürüst bir metriktir."),
    h3("6. Önceliklendirin ve kümeleyin"),
    p("Her kelimeye bir de **iş değeri** puanı verin: 3 = doğrudan hizmetinizi arıyor, 2 = ürünle ilgili sorun, 1 = uzak ilgili konu, 0 = trafik dışında getirisi yok. Önce 2-3 puanlı kelimelere içerik üretin. Sonra kelimeleri kümeleyin: \"kombi bakımı fiyat\", \"kombi bakım ücreti\" ve \"kombi bakımı ne kadar\" üç ayrı yazı değil, tek sayfadır. Türkçe'nin ek yapısı yüzünden araçlar bu varyasyonları ayrı kelime sayar; birleştirme işini sizin yapmanız gerekir."),

    h2("Ücretsiz Anahtar Kelime Araştırması Yapılır mı?"),
    p("Yapılır; sitenizde biraz geçmiş veri varsa üstelik ücretli araçtan daha isabetlidir. En güçlü ücretsiz kaynak [Google Search Console](/blog/search-console-nedir): Performans raporunda **50'den fazla gösterim alıp tıklama oranı %2'nin altında kalan** sorguları filtreleyin. Bu sorgular \"Google beni gösteriyor ama içeriğim zayıf\" demektir; araştırmayla bulunmuş taze kelimelere göre yaklaşık 3,4 kat daha iyi dönüşüm verdiğini gösteren saha verisi var. Yeni sitede ise Anahtar Kelime Planlayıcı (aralık verir: 10-100, 100-1K), Google Trends ve otomatik tamamlama üçlüsüyle başlayın."),
    p("Türkiye'ye özel bir gerçek daha: uluslararası araçların Türkçe veri örneklemi zayıftır. Gerçekten aranan bir kelime Ahrefs'te 0 hacim gösterebilir. **0 hacim ≠ 0 talep.** Şüphelendiğinizde otomatik tamamlamaya, GSC gösterimlerine ve pazaryeri aramalarına bakarak doğrulayın."),

    h2("Uzun Kuyruk: Küçük Kelimelerin Büyük Matematiği"),
    p("Tüm aramaların yaklaşık %92'si, tek tek düşük hacimli \"uzun kuyruk\" sorgulardan oluşuyor; ABD verisinde kelimelerin %94,7'si ayda 10'dan az aranıyor. Yeni ve otoritesi düşük bir site için strateji nettir: \"seo\" gibi devlere değil, \"e-ticaret sitesi için seo nasıl yapılır\" gibi spesifik sorulara oynayın. Rekabet düşük, amaç net, dönüşüm yüksek."),
    p("Bir uyarı da r/juststart'tan gelsin: \"Beş yıl içinde bugünkü uzun kuyruk kelimeler bile yeni giren için fazla rekabetçi sayılacak.\" Uzun kuyruk penceresi açık ama daralıyor; ertelemenin maliyeti her yıl artıyor."),

    h2("Yapay Zeka Çağında Anahtar Kelime Araştırması Hâlâ Gerekli mi?"),
    p("Gerekli, ama hedef değişti. ABD'de aramaların **%68'i artık hiçbir tıklamayla bitmiyor**; yapay zeka özeti çıkan sorgularda 1. sıranın tıklanma oranı %58 düştü. Bu, araştırma yaparken iki yeni filtre demek: birincisi, tıklama üretmeye devam eden kelime türlerine (ticari amaçlı, yerel, karşılaştırma) ağırlık verin; ikincisi, bilgi sorgularında hedefinize \"tıklanmak\"la birlikte \"[yapay zeka cevaplarında kaynak gösterilmek](/geo)\" seçeneğini de ekleyin. Yapay zeka özetinde kaynak olarak görünen sayfaların organik tıklamalarının arttığını ölçen çalışmalar var; kelime seçerken \"bu soruda kaynak gösterilebilir miyim\" sorusu artık masada."),

    h2("Sık Sorulan Sorular"),
    h3("Anahtar kelime nedir?"),
    p("Kullanıcının arama motoruna yazdığı sorgudur. SEO'da, içeriğinizin hangi aramalarda görüneceğini belirlemek için hedeflediğiniz kelime ve kelime öbeklerini ifade eder."),
    h3("Anahtar kelime araştırması ne kadar sürer?"),
    p("Küçük bir site için ilk kapsamlı araştırma 1-2 gün sürer. Ama tek seferlik iş değildir; Google'a her gün yapılan aramaların %15'i daha önce hiç yapılmamış sorgulardır, bu yüzden liste düzenli güncellenmelidir."),
    h3("Arama hacmi verileri ne kadar güvenilir?"),
    p("Yön gösterir, kesin ölçmez. Google Anahtar Kelime Planlayıcı hacimleri vakaların yarısından fazlasında şişirir; Türkçe kelimelerde uluslararası araçların örneklemi ayrıca zayıftır. Hacmi büyüklük sırası olarak okuyun, kararı ilk sayfa analiziyle verin."),
    h3("Keyword Difficulty (KD) skoru yanıltır mı?"),
    p("Yanıltabilir. Çoğu araç KD'yi yalnızca backlink verisinden hesaplar; marka gücü, içerik kalitesi ve amaç uyumu hesaba girmez. KD 10 görünen bir kelimenin ilk sayfası tamamen güçlü markalardan oluşabilir. Skoru ön eleme için kullanın, son kararı ilk sayfayı inceleyerek verin."),
    h3("Ücretsiz anahtar kelime aracı var mı?"),
    p("Var: Google Anahtar Kelime Planlayıcı, Google Trends, Google otomatik tamamlama ve mevcut siteler için en değerlisi Google Search Console. GSC'deki gösterim ve tıklama verisi, üçüncü taraf araçların tahminlerinden daha gerçektir."),
    h3("Uzun kuyruklu anahtar kelime nedir?"),
    p("Düşük hacimli ama spesifik sorgulardır: \"ayakkabı\" yerine \"geniş kalıp erkek koşu ayakkabısı önerisi\". Tek tek küçük görünürler ama toplam aramaların yaklaşık %92'sini oluştururlar ve dönüşüm oranları genelde daha yüksektir."),

    cta(
      "Hangi Kelimeler Size Müşteri Getirir?",
      "Sektörünüz için arama talebini, rakip boşluklarını ve kazanabileceğiniz kelimeleri çıkarıp önceliklendirilmiş bir içerik planı sunuyoruz.",
      "Ücretsiz Analiz Al",
      "/iletisim"
    ),
  ],
});
