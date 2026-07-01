// Blog: Perplexity Nedir? — GEO kümesi, odak: "perplexity nedir" (1.100/ay, KD 13)
// Araştırma: Reddit (r/perplexity_ai), Zapier, Otterly.ai, Semrush, Ahrefs, Seer, Pew (Tem 2026)
import { createPost, h2, h3, p, quote, ul, ol, cta } from "./pt-helpers.mjs";

await createPost({
  slug: "perplexity-nedir",
  title: "Perplexity Nedir? Yapay Zeka Aramasında Markanızı Öne Çıkarın",
  seoTitle: "Perplexity Nedir? Yapay Zeka Aramasında Görünür Olun",
  seoDescription:
    "Perplexity nedir, ChatGPT ve Google'dan farkı ne? Ayda 780 milyon sorguya ulaşan yanıt motorunda markanızın kaynak olarak çıkması için somut adımlar.",
  focusKeyword: "perplexity nedir",
  excerpt:
    "Perplexity, her cevabını kaynak göstererek veren bir yapay zeka yanıt motoru. Google'dan farkı, fiyatları ve sitenizin Perplexity'de kaynak olarak çıkması için yapmanız gerekenler bu rehberde.",
  body: [
    p("Mayıs 2025'te Perplexity ayda **780 milyon sorgu** yanıtladı; bir yıl önce bu sayı 230 milyondu. Yani üç katından fazla büyüdü ve her ay %20 büyümeye devam ediyor. Müşterileriniz artık sadece Google'a sormuyor. Peki bu araç tam olarak ne ve siteniz bu cevapların içinde nasıl yer alır?"),
    p("Bu rehberde önce \"perplexity nedir\" sorusunu net biçimde cevaplayacağız, sonra işin ajans tarafına geçeceğiz: markanızın Perplexity cevaplarında kaynak olarak gösterilmesi için hangi somut adımların işe yaradığını, hangi verilerle biliyoruz, tek tek anlatacağız."),

    h2("Perplexity Nedir?"),
    p("Perplexity, sorduğunuz soruya interneti gerçek zamanlı tarayarak **kaynak gösterip** cevap veren bir yapay zeka yanıt motoru (answer engine). 2022'de kurulan şirket, 2025 itibarıyla yaklaşık **20 milyar dolar** değerlemeye ve 45 milyondan fazla aylık aktif kullanıcıya ulaştı."),
    p("Klasik arama motoru size 10 mavi link verir, seçimi size bırakır. Perplexity ise soruyu anlar, güncel kaynakları tarar, cevabı kendisi yazar ve her iddianın yanına numaralı dipnotla kaynağını koyar. Kullanıcı isterse tek tıkla o kaynağa gider."),
    p("Bu \"kaynak gösterme\" davranışı, kullanıcıların onu tercih etme sebebi. Reddit'teki Perplexity topluluğunda en çok tekrarlanan yorum şu:"),
    quote("\"Yazdığı her şey bir web sitesine dayanıyor ve ben o kaynağı anında kontrol edebiliyorum. ChatGPT ve Gemini ise bilgiyi düzenli olarak havadan uyduruyor.\" — r/perplexity_ai kullanıcı yorumlarından"),

    h2("Perplexity ile ChatGPT ve Google Arasındaki Fark"),
    p("Üçü de \"soru sorulan kutu\" gibi görünse de üç farklı iş yapıyorlar:"),
    ul([
      "**Google:** link listesi verir; cevabı sayfalarda kendiniz bulursunuz. AI Overviews özetleri ise sizi Google'da tutmak için tasarlandı.",
      "**ChatGPT:** eğitim verisinden ve (arama açıksa) web'den cevap üretir; sohbet, üretim ve kod işlerinde güçlüdür ama varsayılan davranışı kaynak göstermek değildir.",
      "**Perplexity:** her seferinde web'i tarar, cevabı kaynaklı yazar. Araştırma, karşılaştırma ve güncel bilgi işlerinde öne çıkar.",
    ]),
    p("Bir fark daha var ve site sahipleri için asıl önemlisi bu: Google'ın AI özetleri tıklamayı azaltıyor. Ahrefs'in ölçümüne göre AI özeti çıkan aramalarda 1. sıradaki sayfanın tıklanma oranı Aralık 2025 itibarıyla **%58 düştü**; Pew Research da özet gösterilen aramalarda tıklamanın %15'ten %8'e indiğini ölçtü. Perplexity ise tam tersine çalışır: kaynak olarak gösterilen site **doğrudan ziyaret** alır. Yani iki farklı yapay zeka arama ekonomisi var; biri tıklamanızı alıyor, öbürü tıklama gönderiyor."),

    h2("Perplexity Ücretsiz mi? Fiyatlandırma"),
    p("Temel kullanım ücretsiz ve Türkçe çalışıyor. Ücretli planlar ek güç katıyor:"),
    ul([
      "**Free:** sınırsız hızlı arama, günlük sınırlı sayıda gelişmiş (Pro) arama.",
      "**Pro (aylık 20 $):** GPT, Claude ve Gemini gibi modeller arasında seçim, Deep Research (derin araştırma raporları), dosya yükleme, akademik kaynak modu.",
      "**Max (aylık 200 $):** en yüksek limitler ve öncelikli erişim; yoğun araştırma yapan ekipler için.",
    ]),
    p("Pro'ya geçmeden önce şunu bilin: Reddit'teki deneyimli kullanıcıların bir kısmı model seçiminin cevap kalitesini sanıldığı kadar değiştirmediğini, ücretsiz sürümün çoğu ihtiyacı karşıladığını söylüyor. Önce ücretsiz sürümle bir hafta çalışın, limitlere takılırsanız yükseltin."),

    h2("Perplexity Güvenilir mi?"),
    p("Dürüst cevap: çoğunlukla, ama körü körüne değil. Kaynak göstermesi doğrulamayı kolaylaştırır; bu, rakiplerine göre gerçek bir avantaj. Yine de sınırları var:"),
    ul([
      "Emin olmadığında bunu söyleyemez; yanlış cevabı da aynı özgüvenle yazar.",
      "Matematik ve hesaplama sorularında beklenenden sık hata yapar.",
      "Deep Research modunda var olmayan kaynak uydurduğu vakalar raporlandı; kullanıcılar gelecek tarihli \"kaynak\" bile gördü.",
    ]),
    p("Topluluk özeti şu cümlede toplanıyor: doğru kullanıldığında mükemmel bir araştırma hızlandırıcı, körü körüne güvenildiğinde yanıltıcı. Kritik kararlar için dipnotlardaki kaynağı mutlaka açıp okuyun."),

    h2("Site Sahipleri İçin Asıl Soru: Perplexity'de Kaynak Olarak Nasıl Çıkarsınız?"),
    p("Burası işin [GEO (Generative Engine Optimization)](/geo) tarafı. Perplexity cevap yazarken hangi sayfaları kaynak seçiyor sorusunun artık ölçülmüş cevapları var. 150 binden fazla yapay zeka cevabı üzerinde yapılan atıf analizlerinden ve sektör çalışmalarından çıkan tablo şöyle:"),
    ol([
      "**İlk ekranda net cevap verin.** Perplexity, cevabı sayfanın ilk 5-10 satırından çekebildiği içerikleri seçiyor. Tanımı, adım listesini, tabloyu yazının en üstüne koyun; süslü girişle oyalamayın.",
      "**İçeriği taze tutun.** Yapay zekaların atıf verdiği içerikler, klasik arama sonuçlarındakinden ortalama %25,7 daha yeni. Son 2 ay içinde güncellenen sayfalar yaklaşık %28 daha fazla atıf alıyor. Yazılarınıza görünür bir güncelleme tarihi ekleyin ve gerçekten güncelleyin.",
      "**Yapılandırılmış veri kullanın.** FAQPage, HowTo ve Article (yazar + dateModified alanlarıyla) şemaları, teknik taraftaki en yüksek etkili kaldıraç. Cevap motorları makineler; makinenin okuyabildiği formatı seçiyorlar.",
      "**Tek platformda yaşamayın.** Reddit, YouTube, LinkedIn ve değerlendirme platformlarında (G2, Clutch benzeri) adı geçen markaların yapay zeka cevaplarında görünme olasılığı yaklaşık 4 kat daha yüksek. Perplexity uzun süre en çok Reddit'e atıf verdi; 150 bin cevabın %40'ında Reddit kaynağı vardı.",
      "**Kendi verinizi üretin.** Orijinal araştırma, anket, vaka çalışması gibi başka yerde olmayan veriler \"atıf mıknatısı\" işlevi görüyor; cevap motoru o veriyi başka kaynaktan alamıyor.",
    ]),
    p("Bir de uyarı: bu alan oynak. Ekim 2025'te Reddit, Perplexity'ye veri kazıma davası açtı ve Perplexity'nin Reddit atıfları bir gecede yaklaşık %86 düştü; boşluğu YouTube doldurdu. Bugün işe yarayan kaynak karışımı altı ay sonra değişebilir. Bu yüzden GEO tek seferlik bir optimizasyon değil, [SEO](/blog/seo-nedir) gibi süreklilik isteyen bir iş."),

    h2("Perplexity Trafiği Az Ama Altın Değerinde"),
    p("\"Bu kadar uğraşa değer mi, Perplexity'den ne kadar trafik gelir ki?\" Haklı soru. Rakamlar şöyle: yapay zeka kaynaklı ziyaretler 2025'te yıllık %527 büyüdü ama hâlâ toplam trafiğin %1'inin altında. Az, doğru."),
    p("Şimdi ikinci rakam: Semrush'ın analizine göre yapay zeka aramasından gelen bir ziyaretçi, klasik organik ziyaretçiden **4,4 kat daha değerli**. Ahrefs kendi verisini paylaştı: ziyaretçilerinin sadece %0,5'i yapay zeka kaynaklıydı ama kayıtların **%12,1'ini** bu grup getirdi; yani ziyaretçi başına yaklaşık 23 kat verim. 312 B2B şirketi kapsayan bir çalışmada yapay zeka yönlendirmeleri %14,2 dönüşürken Google organik %2,8'de kaldı."),
    p("Neden böyle? Çünkü Perplexity kullanıcısı sitenize gelmeden önce cevabı zaten okumuş oluyor. Tıklıyorsa, derinleşmek ya da satın almak istiyor demektir. Az ama niyeti yüksek ziyaretçi."),
    p("Son bir ölçüm notu: bu trafiğin bir kısmını [GA4](/blog/google-analytics-4-kurulum-rehberi) raporlarında göremezsiniz. Yapay zeka araçları her zaman yönlendirme bilgisi (referrer) göndermediği için bu ziyaretler \"direct\" trafiğin içine gizlenir. Direct trafiğiniz sebepsiz artıyorsa, sebebi yapay zeka olabilir."),

    h2("Sık Sorulan Sorular"),
    h3("Perplexity nedir, ne işe yarar?"),
    p("Perplexity, soruları internette gerçek zamanlı arama yaparak kaynaklı biçimde cevaplayan bir yapay zeka yanıt motorudur. Araştırma, karşılaştırma ve güncel bilgi gerektiren sorularda klasik aramadan daha hızlı sonuç verir."),
    h3("Perplexity ücretsiz mi?"),
    p("Evet, temel sürüm ücretsizdir ve Türkçe destekler. Pro plan aylık 20 dolar; model seçimi, Deep Research ve dosya yükleme gibi ek özellikler sunar."),
    h3("Perplexity ile ChatGPT arasındaki fark nedir?"),
    p("ChatGPT üretim ve sohbet odaklı bir asistan, Perplexity ise kaynak gösteren bir arama/cevap aracıdır. Perplexity her cevabında güncel web kaynaklarına dipnot verir; ChatGPT'nin varsayılan davranışı bu değildir."),
    h3("Perplexity Google'ın yerini alır mı?"),
    p("Kısa vadede hayır; hacim hâlâ Google'da. Ama Gartner, klasik arama hacminin 2026'ya kadar %25 düşeceğini öngörüyor ve bilgi amaçlı sorguların %15-20'si şimdiden yapay zeka platformlarına kaydı. Yön belli, hız tartışılıyor."),
    h3("Perplexity güvenilir mi?"),
    p("Kaynak gösterdiği için doğrulaması kolaydır; bu onu sohbet botlarından daha denetlenebilir yapar. Yine de emin olmadığını söyleyemez ve matematikte hata yapabilir. Kritik bilgide dipnottaki kaynağı açıp kontrol edin."),
    h3("Sitem Perplexity'de kaynak olarak nasıl çıkar?"),
    p("İlk ekranda net cevap veren, güncel tutulan, FAQPage/Article şemalı ve Reddit-YouTube gibi platformlarda adı geçen siteler belirgin biçimde daha çok atıf alıyor. Bu çalışmanın bütününe GEO deniyor."),

    cta(
      "Markanız Yapay Zeka Cevaplarında Görünüyor mu?",
      "ChatGPT, Perplexity ve Google AI özetlerinde markanızın nerede durduğunu ölçüyor, kaynak olarak çıkmanız için yol haritası çıkarıyoruz.",
      "Ücretsiz GEO Analizi Al",
      "/geo"
    ),
  ],
});
