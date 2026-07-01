// Blog: Google Ads Nedir — odak: "google ads nedir" (1.600/ay, KD 2)
// Araştırma: Reddit (r/PPC, r/googleads), WordStream 2026 benchmarks, Semrush, Ahrefs, SEL CPC-enflasyon (Tem 2026)
import { createPost, h2, h3, p, quote, ul, ol, cta } from "./pt-helpers.mjs";

await createPost({
  slug: "google-ads-nedir",
  title: "Google Ads Nedir? Nasıl Çalışır, Ne Zaman Para Kazandırır?",
  seoTitle: "Google Ads Nedir? Maliyet, Kalite Puanı ve ROAS",
  seoDescription:
    "Google Ads nedir, açık artırma ve kalite puanı nasıl çalışır? Gerçek maliyet rakamları, minimum bütçe eşiği ve reklamın ne zaman kâr, ne zaman zarar yazdığı.",
  focusKeyword: "google ads nedir",
  excerpt:
    "Google Ads dakikalar içinde trafik getirir; ama e-ticarette medyan ROAS 2,04 — reklamverenlerin yarısı fiilen zararda. Sistemin nasıl çalıştığını ve kârlı tarafında kalmayı anlatıyoruz.",
  body: [
    p("Bir işletme sahibi, marka adına verdiği reklamları deneme amaçlı durdurdu: marka aramalarındaki görünürlüğü **%60 düştü**. Reklamı geri açtı; 48 saatte her şey eski hâline geldi. Bu deney Google Ads'in doğasını tek cümlede özetler: **trafik kiralarsınız, satın almazsınız.** Kira ödendiği sürece ev sizindir; ödeme durunca kapı kilitlenir."),
    p("Bu, reklamın kötü olduğu anlamına gelmez; dünyanın en hızlı müşteri musluğudur ve doğru senaryoda çok iyi çalışır. Bu rehberde \"google ads nedir\" sorusunu sistemin mekaniğiyle cevaplayacağız, sonra kimsenin söylemediği kısma geçeceğiz: hangi rakamların altında bu musluk para kaybettirir."),

    h2("Google Ads Nedir?"),
    p("Google Ads, Google'ın reklam platformudur: arama sonuçlarında, YouTube'da, Gmail'de ve milyonlarca sitede ödeme karşılığı görünmenizi sağlar. En yaygın biçimi arama reklamlarıdır; kullanıcı bir kelime aradığında sonuçların üstünde \"Sponsorlu\" etiketiyle çıkarsınız ve genelde yalnızca tıklama başına ödersiniz (PPC modeli). Bu platform küçük bir yan ürün değil, Google'ın ana motorudur: arama reklamları 2025 mali yılında şirkete **175 milyar dolar** kazandırdı. Teklif verdiğiniz açık artırma, işte bu geliri finanse ediyor; sistemi anlamadan bütçe açmamanız için ilk sebep bu."),

    h2("Google Ads Nasıl Çalışır? Açık Artırma ve Kalite Puanı"),
    p("Her aramada, o kelimeye teklif veren reklamverenler arasında milisaniyeler içinde bir açık artırma çalışır. Sıralamayı iki değişkenin çarpımı belirler: **teklifiniz × kalite puanınız**."),
    p("Kalite puanı (1-10), Google'ın reklamınıza verdiği nottur ve üç şeye bakar: reklam metninin aranan kelimeyle alakası, beklenen tıklanma oranı ve açılış sayfası deneyimi. Sonuç kritik: kalite puanı yüksek reklam, **daha az ödeyerek daha üstte** çıkar. Rakibinizden düşük teklifle onu geçebilirsiniz. Bu yüzden Google Ads'te en pahalı hata, kötü reklam metnini ve alakasız açılış sayfasını parayla kompanse etmeye çalışmaktır."),
    ul([
      "**Arama reklamları:** metin tabanlı, niyet en yüksek; ilk bütçenin gideceği yer.",
      "**Alışveriş (Shopping):** ürün görseli + fiyat; e-ticarette ürün aramalarının tıklamalarını giderek daha çok alıyor.",
      "**Görüntülü ağ ve YouTube:** bilinirlik ve yeniden pazarlama; soğuk kitlede doğrudan satış beklemeyin.",
      "**Performance Max:** Google'ın tüm kanallara otomatik dağıtım yapan kampanya tipi. r/PPC'de en çok şikâyet edilen konu: bütçenin nereye gittiğini görememek. Yaygın uzman tavsiyesi, önce düz arama kampanyasıyla kıyas çizgisi kurmak.",
    ]),

    h2("Google Ads Ne Kadara Mal Olur?"),
    p("Küresel 2026 ortalamaları (WordStream, 16 bin+ hesap): tık başına 5,42 $, tıklanma oranı %6,6, dönüşüm oranı %8,2, müşteri adayı başına maliyet 66,69 $. Türkiye'de tık maliyetleri belirgin düşük; ama asıl bilmeniz gereken rakam ortalama değil, **eğim**: yönetilen hesaplarda tıklama maliyeti son 9 yılda yılda ortalama %11,75 arttı. Aynı tıklama her yıl daha pahalı."),
    p("\"Küçük bütçeyle de reklam verilir\" pazarlaması teknik olarak doğru, pratik olarak yanıltıcıdır. Google'ın otomatik teklif sistemi öğrenmek için veri ister; kelime başına ayda 30-50 tıklama olmadan optimizasyon oturmaz. 5 $ ortalama tıkta bu, kelime başına aylık 150-250 $ demek. Bunun altındaki bütçelerde sistem öğrenme fazından çıkamaz ve para, veri toplamaya gider, müşteriye değil."),

    h2("Google Ads Ne Zaman Para Kazandırır, Ne Zaman Kaybettirir?"),
    p("Google'ın pazarlama iddiası ünlüdür: harcanan 1 dolara 8 dolar getiri. Bağımsız veriler başka konuşuyor: e-ticaret hesaplarında ortalama [ROAS](/blog/roas-nedir) 2,87, ama **medyan 2,04**. Medyanın anlamı şu: reklamverenlerin yarısı, her 1 TL reklama karşılık 2 TL'den az ciro yapıyor. Ürün maliyeti, kargo ve operasyon düşülünce bu, yarının fiilen **zararına reklam** verdiği anlamına gelir; çoğu bunu bilmez çünkü ROAS'ı ya hiç ölçmez ya yanlış ölçer."),
    p("Basit turnusol testi birim ekonomidir: müşterinin size ömür boyu kazandıracağı tutar (LTV) düşük ve marj darsa, açık artırmada sizden yüksek LTV'li rakiplerle yarışıyorsunuz demektir; matematik kaybettirir. Tersine, ortalama işi 1.600 $ olan bir çatı ustası 140 $ müşteri edinme maliyetiyle haftada 4-5 iş bağlayabilir; aynı platform, farklı matematik. **Kanal iyi ya da kötü değildir; sizin marjınız reklam maliyetini taşıyor ya da taşımıyordur.**"),
    h3("Reklamın net kazandığı senaryolar"),
    ul([
      "Yeni site: organik otorite sıfırken ilk müşteriler ve hızlı kelime testi.",
      "Sezonluk kampanyalar ve stok eritme.",
      "Yüksek marjlı, yüksek niyetli yerel hizmetler (tesisat, hukuk, klinik).",
      "Yeniden pazarlama: sitenizi ziyaret etmiş sıcak kitle.",
    ]),

    h2("Google Ads mi SEO mu?"),
    p("Yanlış ikilem; zaman ölçekleri farklı iki araç. Reklam bugün trafik getirir ve durunca biter: Google'ın kendi araştırmasına göre reklam durdurulduğunda ücretli tıklamaların **%89'u organik sonuçla geri gelmiyor**. [SEO](/blog/seo-nedir) ise 4-12 ay ister ama birikir; Ahrefs kendi blog trafiğinin reklamla satın alınmaya kalkılsa ayda 548 bin dolar edeceğini hesaplıyor. Pratik kurgu çoğu işletme için aynı: reklamla başla, dönüşen kelimeleri kanıtla, o kelimeleri [organik sıralama yatırımına](/seo) taşı, reklam bütçesini henüz organiğin taşımadığı kelimelere kaydır. Reklam hız, SEO bileşik faizdir."),

    h2("Sık Sorulan Sorular"),
    h3("Google Ads nedir, kısaca?"),
    p("Google'ın tıklama başına ödeme modeliyle çalışan reklam platformudur; arama sonuçlarında, YouTube'da ve Google'ın ağındaki sitelerde ödeme karşılığı görünürlük sağlar."),
    h3("Google Ads'te tıklama başına ne kadar ödenir?"),
    p("Kelimenin rekabetine göre değişir: küresel ortalama 5,42 $; Türkiye'de çoğu sektörde bunun altındadır ama hukuk, sağlık, finans gibi alanlarda tık maliyeti ciddi rakamlara çıkar. Kendi kelimenizin maliyetini Anahtar Kelime Planlayıcı gösterir."),
    h3("Google Ads için minimum bütçe ne kadar olmalı?"),
    p("Teknik alt sınır yoktur; pratik eşik vardır. Sistemin öğrenmesi için kelime başına ayda 30-50 tıklama gerekir. Bunu karşılamayan bütçe, öğrenme fazında erir. Az bütçeniz varsa az kelimeye odaklanın; her yere azar azar dağıtmayın."),
    h3("Kalite puanı nedir, neden önemli?"),
    p("Google'ın reklam alakanıza, beklenen tıklanma oranınıza ve açılış sayfanıza verdiği 1-10 arası nottur. Yüksek puan, aynı pozisyon için rakipten daha az ödemenizi sağlar; düşük puan her tıklamaya zam demektir."),
    h3("Reklamı durdurunca trafiğe ne olur?"),
    p("Ücretli trafik anında durur ve Google'ın araştırmasına göre bu tıklamaların %89'u organik sonuçlarla telafi olmaz. Kalıcı trafik isteyen işletmelerin reklamla eş zamanlı organik varlık inşa etmesinin sebebi budur."),
    h3("İyi bir ROAS kaç olmalı?"),
    p("Sektör ortalamaları 2:1 ile 4:1 arasındadır ama tek doğru cevap kendi marjınızdan çıkar: kâr marjınız %30 ise başabaş ROAS'ınız yaklaşık 3,3'tür; altı zarar, üstü kârdır. Önce bu sayıyı hesaplayın, kampanyayı ona göre yönetin."),

    cta(
      "ROAS'ınızı Gerçekten Ölçüyor musunuz?",
      "Dönüşüm izleme kurulumunuzu denetliyor, reklam ve organik kanalların gerçek getirisini tek raporda gösteriyoruz. Kararları veriyle verin.",
      "Ücretsiz Ölçüm Denetimi Al",
      "/iletisim"
    ),
  ],
});
