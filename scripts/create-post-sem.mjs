// Blog: SEM Nedir — odak: "sem nedir" (900/ay, KD 0) + "ppc nedir" (500/ay, KD 0)
// Araştırma: Reddit (r/PPC, r/SEO), Semrush, WordStream, HubSpot, Google pause studies, FirstPageSage (Tem 2026)
import { createPost, h2, h3, p, quote, ul, ol, cta } from "./pt-helpers.mjs";

await createPost({
  slug: "sem-nedir",
  title: "SEM Nedir? SEO ve PPC ile Farkı, Doğru Bütçe Dengesi",
  seoTitle: "SEM Nedir? SEO ve PPC Farkı + Bütçe Rehberi",
  seoDescription:
    "SEM nedir, SEO'yu kapsar mı? PPC ile farkı, organik ve ücretli aramanın tıklama matematiği ve bütçenizi ikisi arasında nasıl böleceğiniz; verilerle.",
  focusKeyword: "sem nedir",
  excerpt:
    "SEM'in tanımında sektör bile anlaşamıyor: kimine göre SEO'yu kapsar, kimine göre sadece reklamdır. İki tanımı da, PPC ile farkı ve doğru bütçe dengesini verilerle açıklıyoruz.",
  body: [
    p("Organik 1. sıradaki sonuç, aramaların **%39,8'inde** tıklanıyor. En üstteki reklamın tıklanma oranı ise **%2,1**. Yaklaşık 19 kat fark. Peki madem organik bu kadar güçlü, şirketler 2025'te arama reklamlarına neden 334 milyar dolar harcadı? Bu yazının konusu tam olarak bu denklem: SEM nedir, SEO ve PPC ile ilişkisi ne, bütçe ikisi arasında nasıl bölünür?"),

    h2("SEM Nedir?"),
    p("SEM (Search Engine Marketing / arama motoru pazarlaması), bir sitenin arama motoru sonuç sayfalarındaki görünürlüğünü artırmaya yönelik çalışmaların genel adıdır. Buraya kadar herkes hemfikir; kavga tanımın kapsamında kopuyor:"),
    ul([
      "**Tarihsel (geniş) tanım:** SEM bir şemsiyedir; hem [SEO](/blog/seo-nedir)'yu (organik) hem ücretli reklamları kapsar.",
      "**Güncel (dar) kullanım:** sektörde SEM dendiğinde bugün neredeyse her zaman **ücretli arama reklamları** kastedilir. HubSpot ve WordStream tanımı böyle kullanır; Semrush ise şemsiye tanımı verip \"pratikte artık ücretli anlamında kullanılıyor\" notunu düşer.",
      "**PPC (Pay-Per-Click):** kanal değil, **ödeme modelidir**: tıklama başına ödersiniz. Arama reklamı da PPC'dir, birçok sosyal medya reklamı da.",
    ]),
    p("r/PPC'deki bir uzmanın özeti durumu iyi anlatıyor: \"Paid search terimini herkes kabul ediyor; ama SEM mi PPC mi tartışması bitmiyor. Batı yakası SEM diyor, doğu yakası PPC.\" Bir ajansla konuşurken tek yapmanız gereken, kapsamı netleştirmek: \"SEM hizmeti\" teklifinde SEO var mı, yok mu?"),

    h2("PPC Nedir, Nasıl Çalışır?"),
    p("Google Ads örneğinde süreç şöyle işler: bir kelimeye teklif verirsiniz (\"istanbul diş kliniği\" için tık başına X TL). Kullanıcı o kelimeyi aradığında milisaniyeler içinde açık artırma çalışır. Sırayı sadece para belirlemez; Google, teklifi **kalite puanıyla** (reklam alaka düzeyi, beklenen tıklanma oranı, açılış sayfası deneyimi; 1-10 arası) çarpar. Kaliteli reklam, daha az ödeyip daha üstte çıkabilir. Kazanırsanız reklamınız gösterilir ve yalnızca tıklanırsa ödersiniz."),
    p("Maliyet tarafında güncel küresel ortalamalar: tık başına 5,42 $, dönüşüm oranı %8,2, potansiyel müşteri başına maliyet 66,69 $ (WordStream, 2026). Sektöre göre uçurum var; hukuk 9,87 $ öderken restoranlar 2 $ civarında. Türkiye'de tıklama maliyetleri daha düşük ama mantık aynı: rekabetin yüksek olduğu para kelimelerinde tık pahalıdır."),

    h2("SEM (Ücretli) ile SEO Arasındaki Fark"),
    ul([
      "**Hız:** reklam bugün açılır, bugün trafik getirir. SEO'da anlamlı sonuç 4-12 ay ister; ilk 10'daki sayfaların yalnızca %22'si son bir yılda yayınlanmıştır.",
      "**Süreklilik:** reklamı durdurduğunuz an trafik biter. Organik sıralama ise ödeme kesilince kaybolmaz; birikir.",
      "**Maliyet eğrisi:** yönetilen hesaplarda tıklama maliyetleri yılda ortalama %11,75 artıyor (Search Engine Land, 9 yıllık veri). Aynı tıklama reklamda her yıl pahalanırken, oturmuş organik içerikte her yıl ucuzlar.",
      "**Güven:** kullanıcıların önemli bölümü reklamı atlayıp organik sonuca gider; genelde tıklamaların ~%94'ü organiğe akar. Ama dikkat: ürün aramalarında tablo değişti; alışveriş sorgularında reklamlar artık tıklamaların üçte birini alabiliyor.",
      "**Ölçüm:** reklamın getirisi ([ROAS](/blog/roas-nedir)) günlük ölçülür; SEO'nun getirisi çeyreklik ufukta netleşir.",
    ]),
    p("\"Reklamı kapatınca ne olur\" sorusunun ölçülmüş cevabı da var ve iki yönlü: Google'ın 400'den fazla hesapta yaptığı klasik araştırmaya göre reklamlar durdurulduğunda kaybedilen ücretli tıklamaların **%89'u organik sonuçlarla geri gelmiyor**. Öte yandan marka adınızda zaten 1. sıradaysanız, marka kelimenize reklam vermenin bir kısmı kendi organik tıklamanızı satın almaktır; reklamı durduran bir r/PPC kullanıcısının ölçümünde trafiğin %60'ı organiğe kaydı, gerçek kayıp %40'tı. Özet: genel kelimelerde reklam gerçekten ek trafik, marka kelimesinde kısmen transferdir."),

    h2("SEO mu SEM mi? Yanlış Soru, Doğru Denge"),
    p("İkisi rakip değil, aynı huninin iki musluğu. Doğru soru \"hangisi\" değil, \"hangi oranda ve hangi sırayla\"."),
    h3("Reklamın haklı olduğu durumlar"),
    ul([
      "Yeni site/ürün: organik otorite sıfırken hızlı doğrulama ve ilk müşteri.",
      "Sezonluk kampanya ve zamana bağlı teklifler.",
      "Henüz aranmayan yeni ürün kategorileri.",
      "Rakiplerin marka adınıza reklam verdiği savunma senaryoları.",
    ]),
    h3("SEO'nun haklı olduğu durumlar"),
    ul([
      "Bilgi amaçlı sorgular: bu aramalarda reklam tıklanmaz, içerik kazanır.",
      "Uzun vadeli müşteri edinme maliyetini düşürme hedefi.",
      "Reklam maliyetinin marjı yediği düşük fiyatlı ürünler.",
    ]),
    p("En akıllı kullanım ikisini birleştirir: **PPC'yi SEO'nun laboratuvarı yapın.** 2-3 haftalık küçük bütçeli reklam testi, bir kelimenin gerçekten dönüşüp dönüşmediğini gösterir; dönüşen kelimeler 6-12 aylık SEO yatırımının öncelik listesine girer. Tersi de çalışır: organik 4-10. sırada olduğunuz kelimelere reklam eklemek, aynı sonuç sayfasında iki kez görünmenizi sağlar; ölçümlerde ücretli+organik birlikteliğinin toplam trafiği tek başına organiğe göre %30-40 artırdığı raporlanıyor. Bütçe pratiği olarak yeni işler genelde 70/30 reklam ağırlıklı başlar, organik sıralamalar oturdukça denge SEO'ya kayar."),

    h2("Sık Sorulan Sorular"),
    h3("SEM'in açılımı nedir?"),
    p("Search Engine Marketing, yani arama motoru pazarlaması. Arama sonuç sayfalarındaki görünürlüğü artırmaya yönelik çalışmaların tümünü ifade eder."),
    h3("SEM SEO'yu kapsar mı?"),
    p("Tarihsel tanıma göre evet: SEM = SEO + ücretli reklam. Güncel sektör kullanımında ise SEM neredeyse her zaman yalnızca ücretli arama reklamlarını kasteder. Teklif alırken kapsamı mutlaka netleştirin."),
    h3("PPC nedir?"),
    p("Pay-Per-Click, tıklama başına ödeme modelidir. Reklamınız gösterildiğinde değil, tıklandığında ödersiniz. Google Ads arama reklamları en yaygın PPC örneğidir."),
    h3("SEM ile Google Ads aynı şey mi?"),
    p("Değil ama pratikte örtüşür: Google Ads, SEM'in en büyük platformudur. SEM kavramı Bing/Yandex reklamlarını da kapsar; Türkiye'de aramanın ezici kısmı Google'da olduğu için SEM bütçesi fiilen Google Ads bütçesidir."),
    h3("SEM uzmanı ne iş yapar?"),
    p("Kelime araştırması, teklif ve bütçe yönetimi, reklam metni testleri, açılış sayfası optimizasyonu ve dönüşüm raporlaması. İyi uzmanın ayırt edici becerisi platform bilgisi değil, birim ekonomi okuryazarlığıdır: hangi kelime kâr getiriyor, hangisi bütçe yakıyor."),
    h3("Önce SEO mu, önce reklam mı?"),
    p("Nakit akışı hızlı sonuç istiyorsa reklamla başlayıp kazanan kelimeleri SEO'ya taşımak; bütçe kısıtlıysa uzun kuyruk kelimelerde içerikle başlamak mantıklıdır. Orta vadede en düşük müşteri edinme maliyeti, ikisinin birlikte çalıştığı kurgudan çıkar."),

    cta(
      "Bütçeniz Doğru Yerde mi Çalışıyor?",
      "Reklam ve organik trafiğinizi birlikte analiz edip hangi kelimede reklamın, hangisinde SEO'nun daha ucuz müşteri getirdiğini raporluyoruz.",
      "Ücretsiz Analiz Al",
      "/iletisim"
    ),
  ],
});
