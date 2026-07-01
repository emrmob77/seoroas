// Blog: SEO Analizi Nasıl Yapılır — odak: "seo analizi" / "seo analiz" (toplam ~1.950/ay, KD 0, TP 3.100)
// Araştırma: Reddit (r/SEO, r/bigseo), Ahrefs, Backlinko, Semrush, Aleyda Solís, Deloitte (Tem 2026)
import { createPost, h2, h3, p, quote, ul, ol, cta } from "./pt-helpers.mjs";

await createPost({
  slug: "seo-analizi-nasil-yapilir",
  title: "SEO Analizi Nasıl Yapılır? Rapor Değil, Yol Haritası Çıkaran 10 Adım",
  seoTitle: "SEO Analizi Nasıl Yapılır? 10 Adımlık Uygulama Rehberi",
  seoDescription:
    "SEO analizi nasıl yapılır? 200 sayfalık PDF değil, önceliklendirilmiş aksiyon listesi çıkaran 10 adımlık yöntem: teknik tarama, içerik, backlink ve yapay zeka görünürlüğü.",
  focusKeyword: "seo analizi",
  excerpt:
    "Çoğu SEO raporu, sorun listeler ama ne yapılacağını söylemez. Bu rehberdeki 10 adım, sitenizin gerçek sorunlarını bulup etki-efor sırasına dizen bir analiz süreci kuruyor.",
  body: [
    p("Ahrefs 14 milyar sayfayı taradı: sayfaların **%96,55'i Google'dan hiç trafik almıyor**. Sitenizin de bu çoğunlukta olup olmadığını tahminle değil, ölçümle öğrenirsiniz; o ölçümün adı SEO analizi. Sorun şu ki piyasadaki \"analiz\"lerin çoğu, bir tarama aracının çıktısına logo eklenmiş PDF'lerden ibaret. 200 maddelik sorun listesi alırsınız, hangisinin önemli olduğunu yine bilemezsiniz."),
    p("Bu rehber farklı bir şey öğretiyor: sorun saymayı değil, **önceliklendirmeyi**. 10 adımın sonunda elinizde \"önce şunu düzelt, çünkü etkisi şu\" diyen bir yol haritası olacak."),

    h2("SEO Analizi Nedir?"),
    p("SEO analizi (SEO denetimi/audit), bir sitenin arama motorlarındaki performansını engelleyen teknik, içerik ve otorite sorunlarını sistematik biçimde tespit edip önem sırasına dizme işlemidir. İyi bir analiz üç soruya cevap verir: ne bozuk, ne kadar önemli, hangi sırayla düzeltilmeli?"),
    p("Deneyimli SEO'cuların buluştuğu nokta da bu. Reddit'in SEO topluluklarında en çok tekrarlanan şikâyet, uygulanmayan devasa raporlar; en çok istenen çıktı ise kısa bir yönetici özeti, 3-5 yüksek etkili aksiyon ve 30/60/90 günlük plan. Uluslararası SEO danışmanı Aleyda Solís'in çerçevesi de aynı fikri savunur: bulguları \"hemen yap / değerlendir / yapma\" diye üçe ayır, 10 maddelik aksiyon planına indir."),

    h2("SEO Analizi Nasıl Yapılır? 10 Adım"),
    h3("1. Ölçüm altyapısını doğrulayın"),
    p("Analize araç bağlantılarıyla başlanır: [Google Search Console](/blog/search-console-nedir) ve [GA4](/blog/google-analytics-4-kurulum-rehberi) kurulu ve veri topluyor mu? GSC yoksa Google'ın sitenizi nasıl gördüğüne dair en değerli ücretsiz veri kaynağından mahrumsunuz demektir; önce onu kurun, analizde kullanacaksınız."),
    h3("2. İndekslenme durumunu kontrol edin"),
    p("Google'da site:siteniz.com araması yapın ve GSC'nin Sayfalar raporuna bakın. İki soruya cevap arıyorsunuz: indekslenmesi gereken sayfalar indekste mi, indekslenmemesi gerekenler (filtre sayfaları, etiketler, test sayfaları) dışarıda mı? Trafiği asıl yiyen genelde birincisidir: sunucu hatası, yanlış noindex etiketi ya da robots.txt engeli yüzünden görünmeyen para sayfaları."),
    h3("3. Siteyi tarayın"),
    p("Screaming Frog (500 URL'ye kadar ücretsiz) veya Ahrefs/Semrush site denetimiyle tam tarama yapın: kırık linkler, yönlendirme zincirleri, eksik/yinelenen title ve meta açıklamalar, yetim sayfalar. Burada bir uyarı: tarama çıktısı analizin hammaddesidir, kendisi değil. 300 maddelik uyarı listesinin çoğu kozmetiktir; hangilerinin trafiğe dokunduğuna 10. adımdaki öncelik matrisi karar verecek."),
    h3("4. Site hızı ve Core Web Vitals"),
    p("PageSpeed Insights'ta Google'ın üç eşiğine bakın: LCP 2,5 saniyenin, INP 200 milisaniyenin, CLS 0,1'in altında olmalı. Bunun cirodan çıkan karşılığı da ölçülmüş durumda: Deloitte'un perakende araştırmasına göre mobil sitenin **0,1 saniye hızlanması dönüşümleri %8,4 artırıyor**. Hız maliyet kalemi değil, gelir kalemi."),
    h3("5. Mobil deneyimi test edin"),
    p("Küresel trafiğin yarıdan fazlası mobil ve Google siteleri önce mobil sürümüyle değerlendiriyor. Telefonda kendi sitenizde üç işlem yapın: bir sayfa bulun, formu doldurun, satın alma adımına gelin. Takıldığınız her yer, müşterinin döküldüğü yerdir."),
    h3("6. On-page temelleri gözden geçirin"),
    p("Trafik hedefleyen her önemli sayfa için: hedef kelime title'da mı, H1 tek ve net mi, URL kısa mı, meta açıklama tıklamaya davet ediyor mu? Bu kontrolün sistematiği için [on-page SEO](/seo/on-page-seo) çalışmasına bakabilirsiniz."),
    h3("7. İçerik envanteri çıkarın"),
    p("GSC verisiyle üç grup oluşturun: kazananlar (trafik alan), uyuyanlar (gösterim alıp tıklanmayan; başlık ve içerik güçlendirme adayı) ve zombiler (12 aydır sıfır trafik). Zombileri güncelleyin, birleştirin ya da silin. Ayrıca son 2 aydır güncellenmemiş ama sıralama kaybeden sayfaları işaretleyin; içerik tazeliği hem Google hem yapay zeka cevapları için ölçülmüş bir sinyal."),
    h3("8. İç link yapısını inceleyin"),
    p("Önemli sayfalarınız ana sayfadan en fazla 3 tık uzakta mı? Para kazandıran sayfalara en az 5 iç link geliyor mu? Yetim sayfa (hiç iç link almayan) var mı? İç link, maliyeti sıfır olduğu hâlde en çok ihmal edilen sıralama kaldıracıdır."),
    h3("9. Backlink profilini ve rakipleri karşılaştırın"),
    p("Kendi [backlink](/blog/backlink-nedir-seo-icin-onemi-ve-nasil-yapilir) profilinizi ve ilk sayfadaki 3 rakibinkini yan yana koyun: referans veren site sayısı farkı ne kadar, rakiplerin aldığı ama sizin almadığınız linkler nereden geliyor, hangi kelimelerde içerik boşluğunuz var? Analizin \"ne kadar yol var\" sorusunu bu adım cevaplar."),
    h3("10. Yapay zeka görünürlüğünü ekleyin"),
    p("2026'da analiz artık klasik sıralamayla bitmiyor: bilgi amaçlı sorguların neredeyse tamamında yapay zeka özeti çıkıyor ve özet çıkan aramalarda 1. sıranın tıklanma oranı %58 düştü. ChatGPT, Perplexity ve Google'ın yapay zeka cevaplarında markanız kaynak olarak geçiyor mu? Bu yeni katmanın adı [GEO](/geo) ve analiz şablonların çoğunda henüz yok; sizinkinde olsun."),

    h2("Bulguları Önceliklendirin: Etki-Efor Matrisi"),
    p("Analizin gerçek çıktısı burada üretilir. Her bulguyu iki eksende puanlayın: trafik/ciro etkisi (1-5) ve düzeltme eforu (1-5). Sonra dört kutuya dağıtın:"),
    ul([
      "**Yüksek etki + düşük efor:** ilk 30 gün. (Örnek: para sayfasındaki noindex, kırık dönüşüm formu, boş title'lar)",
      "**Yüksek etki + yüksek efor:** 60-90 günlük plan. (Site hızı yenileme, içerik birleştirme)",
      "**Düşük etki + düşük efor:** ara işler; boş kalınca yapılır.",
      "**Düşük etki + yüksek efor:** yapmayın. Raporlarda en çok yer kaplayan maddeler genelde bu kutudandır.",
    ]),
    p("Bir de yaygın miti temizleyelim: tarama bütçesi (crawl budget) optimizasyonu. Google'ın kendi dokümanı ve mühendisleri net: **1 milyon sayfanın altındaki sitelerin tarama bütçesi diye bir derdi yok.** 200 sayfalık kurumsal sitenize crawl budget önerisi yazan rapor, şablondan çıkmıştır."),

    h2("Kötü SEO Analizi Nasıl Anlaşılır?"),
    p("Analiz hizmeti satın alıyorsanız şu üç işaret paranızın çöpe gittiğini gösterir: rapor sorunları sayıyor ama sıralamıyor; her maddede aynı genel tavsiye var (\"içerik kalitenizi artırın\"); ve site tipinize özgü tek bir tespit yok. 50 sayfalık kurumsal site ile 10.000 ürünlük e-ticaret sitesinin analizi aynı şablondan çıkamaz. Ücretsiz PDF üreten araçlar başlangıç noktası olarak faydalıdır; ama işin insana ihtiyaç duyan kısmı, bulguların sizin işiniz için ne anlama geldiğini söyleyen kısımdır."),

    h2("Sık Sorulan Sorular"),
    h3("SEO analizi nedir, ne işe yarar?"),
    p("Sitenin arama performansını engelleyen teknik, içerik ve otorite sorunlarını tespit edip önem sırasına dizen denetimdir. Çıktısı sorun listesi değil, önceliklendirilmiş aksiyon planıdır."),
    h3("SEO analizi ne kadar sürer?"),
    p("Küçük bir site için 2-4 saatlik hızlı denetimle ana sorunlar bulunur; kapsamlı analiz 2-5 gün sürer. 10.000+ sayfalı sitelerde log analiziyle birlikte haftalara uzayabilir."),
    h3("SEO analizi ücretsiz yapılır mı?"),
    p("Temel analiz için Google Search Console, PageSpeed Insights ve Screaming Frog'un ücretsiz sürümü yeterlidir. Otomatik araç raporları başlangıçtır; yorum ve önceliklendirme katmanı insan işidir."),
    h3("SEO analizi ne sıklıkla yapılmalı?"),
    p("Yılda bir kapsamlı analiz taban çizgisidir; rekabetçi sektörlerde çeyrek başına bir gözden geçirme önerilir. Ayrıca site taşıma, tasarım yenileme ve ani trafik düşüşü sonrasında mutlaka yapılmalıdır."),
    h3("SEO analizi sonuçları ne zaman etki gösterir?"),
    p("Teknik düzeltmeler (indeksleme, hız) haftalar içinde; içerik ve otorite çalışmaları 3-6 ayda sonuç verir. İlk 30 günlük \"yüksek etki + düşük efor\" maddeleri en hızlı geri dönüşü sağlar."),
    h3("Teknik SEO analizi ile içerik analizi farkı nedir?"),
    p("Teknik analiz sitenin taranabilirlik, indekslenme ve hız altyapısına; içerik analizi ise sayfaların arama amacına uygunluğuna ve rekabet gücüne bakar. İkisi tek analizin iki yarısıdır; biri olmadan diğeri eksik kalır."),

    cta(
      "Sitenizin Gerçek Sorunlarını Görün",
      "10 adımlık bu analizi sitenize uygulayıp etki-efor sırasına dizilmiş, uygulanabilir bir yol haritası çıkarıyoruz. Rapor değil, plan.",
      "Ücretsiz SEO Analizi Al",
      "/iletisim"
    ),
  ],
});
