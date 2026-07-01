// 5 yeni yazıda bozuk/çeviri-kokan cümleleri düzeltir (blok bazında yeniden yazım).
// Kategori 1: özne-yüklem bozukluğu ("bir site aramaların %40'ında tıklanır")
// Kategori 2: ek/yüklem hatası ("içeriğinizi hangi aramalarda görüneceğinizi")
// Kategori 3: sembol/ok işaretli telegrafik anlatım ("0 hacim ≠ 0 talep", "x → y")
// Not: blok indeksleri /tmp/posts-fulltext.txt dökümüne göre; script eşleşmeyi
// mevcut metnin ilk kelimeleriyle doğrular, uyuşmazsa o bloğu atlar.
import { client, p, li } from "./pt-helpers.mjs";

// [index, mevcut metnin başlangıcı (doğrulama), yeni metin]
const fixes = {
  "sem-nedir": [
    [0, "Google'da organik olarak 1. sırada",
      "Bir Google aramasında ilk sıradaki organik sonuca, o aramayı yapan her 100 kişiden yaklaşık 40'ı tıklıyor. En üstteki reklama ise yalnızca 2 kişi tıklıyor; aradaki fark yaklaşık 19 kat. Buna rağmen şirketler 2025 yılında arama reklamlarına 334 milyar dolar harcadı. Neden? Çünkü reklam, organik trafiğin veremediği bir şeyi verir: **hız**. Bu yazıda önce SEM kavramını netleştireceğiz; sonra SEO ve PPC ile ilişkisini açıklayacak, bütçenizi bu iki kanal arasında nasıl böleceğinizi verilerle göstereceğiz."],
    [5, "PPC (Pay-Per-Click)",
      "**PPC (Pay-Per-Click):** bir kanal değil, ödeme modelidir. Reklamınız gösterildiğinde değil, tıklandığında ödersiniz. Arama reklamı da PPC'dir, birçok sosyal medya reklamı da."],
    [11, "Hız:",
      "**Hız:** reklam bugün açılır, bugün trafik getirir. SEO'da anlamlı sonuç 4-12 ay ister; Google'da ilk sayfaya giren sayfaların yalnızca %22'si son bir yıl içinde yayınlanmış yeni sayfalardır."],
    [14, "Güven:",
      "**Güven:** kullanıcıların önemli bölümü reklamı atlayıp organik sonuca gider; tıklamaların yaklaşık %94'ü organik sonuçlara akar. Ama dikkat: ürün aramalarında tablo değişti; alışveriş sorgularında reklamlar artık tıklamaların üçte birini alabiliyor."],
    [15, "Ölçüm:",
      "**Ölçüm:** reklamın getirisi ([ROAS](/blog/roas-nedir)) günlük ölçülür; SEO'nun getirisi ise ancak aylar içinde netleşir."],
    [16, "\"Reklamı kapatınca ne olur\"",
      "\"Reklamı kapatınca ne olur\" sorusunun ölçülmüş cevabı var ve iki yönlü. Google'ın 400'den fazla hesapta yaptığı klasik araştırmaya göre, reklamlar durdurulduğunda kaybedilen ücretli tıklamaların **%89'u organik sonuçlarla geri gelmiyor**. Öte yandan marka adınızda zaten 1. sıradaysanız, marka kelimenize verdiğiniz reklamın bir kısmı kendi organik tıklamanızı satın almak anlamına gelir; reklamı durduran bir r/PPC kullanıcısının ölçümünde trafiğin %60'ı organiğe kaydı, gerçek kayıp %40'ta kaldı. Özetlersek: genel kelimelerde reklam gerçekten yeni trafik getirir; marka kelimesinde ise kısmen kendi trafiğinizi satın alırsınız."],
    [18, "İkisi rakip değil",
      "İkisi birbirinin rakibi değil, aynı hedefe çalışan iki araçtır. Doğru soru \"hangisi daha iyi\" değil, \"hangi işe, hangi oranda ve hangi sırayla\" sorusudur."],
    [28, "En akıllı kullanım",
      "En akıllı kullanım ikisini birleştirir: **PPC'yi SEO'nun laboratuvarı yapın.** 2-3 haftalık küçük bütçeli bir reklam testi, bir kelimenin gerçekten satışa dönüşüp dönüşmediğini gösterir; dönüşen kelimeler 6-12 aylık SEO yatırımının öncelik listesine girer. Tersi de çalışır: organik olarak 4-10. sırada olduğunuz kelimelere reklam eklerseniz aynı sonuç sayfasında iki kez görünürsünüz. Ölçümlere göre bir kelimede hem reklamla hem organik sonuçla görünen siteler, yalnızca organik göründükleri duruma kıyasla toplamda %30-40 daha fazla trafik alıyor. Bütçe pratiği de şöyle: yeni işler genelde bütçenin %60-70'ini reklama ayırarak başlar; organik sıralamalar oturdukça denge SEO'ya kayar."],
    [30, "SEM bütçelerinin sessiz katili",
      "SEM bütçelerinin sessiz katili, kötü hesap mimarisidir. Doğru yapı üç katmandan oluşur: en üstte bütçenin ve hedeflemenin belirlendiği **kampanya**, onun altında tek bir konuya odaklanan **reklam grubu**, en altta da anahtar kelimeler ve reklam metinleri. Kural basit: bir reklam grubu, tek konu. \"Diş beyazlatma\" ile \"implant fiyatları\" aynı grupta durursa reklam metni ikisine birden hitap etmeye çalışır, iki kelimede de alaka puanı düşer ve her tıklamaya zam gelir."],
    [54, "Nakit akışı hızlı sonuç",
      "Hızlı sonuca ihtiyacınız varsa reklamla başlayıp kazanan kelimeleri SEO'ya taşımak; bütçeniz kısıtlıysa uzun kuyruk kelimelerde içerikle başlamak mantıklıdır. Orta vadede en düşük müşteri edinme maliyeti, iki kanalın birlikte çalıştığı kurgudan çıkar."],
  ],

  "google-ads-nedir": [
    [3, "Google Ads, Google'ın reklam platformudur",
      "Google Ads, Google'ın reklam platformudur: arama sonuçlarında, YouTube'da, Gmail'de ve milyonlarca sitede ödeme karşılığı görünmenizi sağlar. En yaygın biçimi arama reklamlarıdır; kullanıcı bir kelime aradığında sonuçların üstünde \"Sponsorlu\" etiketiyle çıkarsınız ve genelde yalnızca tıklama başına ödersiniz (buna PPC modeli denir). Bu platform küçük bir yan ürün değil, Google'ın ana gelir motorudur: arama reklamları 2025 mali yılında şirkete **175 milyar dolar** kazandırdı. Teklif verdiğiniz açık artırma işte bu geliri finanse ediyor. Sistemi anlamadan bütçe açmamanız gerektiğinin ilk sebebi de bu."],
    [12, "Küresel 2026 ortalamaları",
      "Küresel 2026 ortalamaları şöyle (WordStream, 16 binden fazla hesabın verisi): tık başına maliyet 5,42 $, tıklanma oranı %6,6, dönüşüm oranı %8,2, müşteri adayı başına maliyet 66,69 $. Türkiye'de tık maliyetleri bunun belirgin altındadır. Ama asıl bilmeniz gereken rakam ortalama değil, artış hızıdır: yönetilen hesaplarda tıklama maliyeti son 9 yılda yılda ortalama **%11,75 arttı**. Yani aynı tıklama, her yıl daha pahalı hale geliyor."],
    [13, "\"Küçük bütçeyle de reklam verilir\"",
      "\"Küçük bütçeyle de reklam verilir\" iddiası teknik olarak doğru, pratikte yanıltıcıdır. Google'ın otomatik teklif sistemi öğrenmek için veri ister; bir kelimede ayda 30-50 tıklama toplanmadan optimizasyon oturmaz. Tık başına 5 $ ödenen bir kelimede bu, aylık 150-250 $ bütçe demektir. Bunun altındaki bütçelerde sistem öğrenme aşamasından çıkamaz; para müşteri getirmeye değil, veri toplamaya gider."],
    [15, "Google'ın pazarlama iddiası",
      "Google'ın pazarlama iddiası ünlüdür: harcanan 1 dolara 8 dolar getiri. Bağımsız veriler başka konuşuyor: e-ticaret hesaplarında ortalama [ROAS](/blog/roas-nedir) 2,87, medyan ise yalnızca 2,04. Medyanın anlamı şu: reklamverenlerin yarısı, reklama harcadığı her 1 liraya karşılık 2 liradan az ciro elde ediyor. Ürün maliyeti, kargo ve operasyon giderleri düşüldüğünde bu tablo, **reklamverenlerin yarısının fiilen zararına reklam verdiği** anlamına gelir. Çoğu bunun farkında bile değildir; çünkü ROAS'ını ya hiç ölçmez ya da yanlış ölçer."],
    [16, "Basit turnusol testi",
      "İşin turnusol testi birim ekonomidir. Bir müşterinin size ömür boyu kazandıracağı tutar (LTV) düşükse ve kâr marjınız darsa, açık artırmada sizden daha yüksek müşteri değerine sahip rakiplerle yarışıyorsunuz demektir; o matematikte kaybeden siz olursunuz. Tersine bir örnek: ortalama işi 1.600 $ olan bir çatı ustası, müşteri başına 140 $ reklam maliyetiyle haftada 4-5 iş bağlayabilir. Aynı platform, farklı matematik. **Kanal iyi ya da kötü değildir; marjınız reklam maliyetini ya taşır ya taşımaz.**"],
    [23, "Yanlış ikilem",
      "Yanlış ikilem; bunlar zaman ölçekleri farklı iki araçtır. Reklam bugün trafik getirir ama durduğu an biter: Google'ın kendi araştırmasına göre reklam durdurulduğunda ücretli tıklamaların %89'u organik sonuçlarla geri gelmiyor. [SEO](/blog/seo-nedir) ise 4-12 ay ister ama birikir; Ahrefs, kendi blog trafiğini reklamla satın almaya kalksa ayda 548 bin dolar ödemesi gerektiğini hesaplıyor. Çoğu işletme için pratik kurgu aynıdır: reklamla başlayın, satışa dönüşen kelimeleri kanıtlayın, o kelimeleri [organik sıralama yatırımına](/seo) taşıyın; reklam bütçesini de henüz organik güçlenmediğiniz kelimelere kaydırın. Reklam hızdır, SEO bileşik faizdir."],
  ],

  "perplexity-nedir": [
    [3, "Perplexity, sorduğunuz soruya",
      "Perplexity, sorduğunuz soruya interneti gerçek zamanlı tarayarak kaynak gösterip cevap veren bir yapay zeka yanıt motorudur (İngilizce adıyla answer engine). 2022'de kurulan şirket, 2025 itibarıyla yaklaşık **20 milyar dolar** değerlemeye ve 45 milyondan fazla aylık aktif kullanıcıya ulaştı."],
    [5, "Bu \"kaynak gösterme\" davranışı",
      "Bu \"kaynak gösterme\" davranışı, kullanıcıların onu tercih etmesinin başlıca sebebi. Reddit'teki Perplexity topluluğunda en çok tekrarlanan yorum şöyle:"],
    [26, "Burası işin",
      "Burası işin [GEO (Generative Engine Optimization)](/geo) tarafı. \"Perplexity cevap yazarken hangi sayfaları kaynak olarak seçiyor?\" sorusunun artık ölçülmüş cevapları var. 150 binden fazla yapay zeka cevabı üzerinde yapılan atıf analizlerinden çıkan tablo şöyle:"],
    [29, "Yapılandırılmış veri kullanın",
      "**Yapılandırılmış veri kullanın.** FAQPage, HowTo ve Article (yazar ve dateModified alanlarıyla) şemaları, teknik taraftaki en etkili kaldıraçtır. Cevap motorları birer yazılımdır; en kolay okuyabildikleri formatı seçerler."],
    [35, "Şimdi ikinci rakam",
      "Şimdi ikinci rakam: Semrush'ın analizine göre yapay zeka aramasından gelen bir ziyaretçi, klasik organik ziyaretçiden **4,4 kat daha değerli**. Ahrefs kendi verisini paylaştı: sitesine gelen ziyaretçilerin yalnızca %0,5'i yapay zeka kaynaklıydı ama yeni üyelik kayıtlarının **%12,1'i** bu gruptan geldi; bu, ziyaretçi başına yaklaşık 23 kat verim demek. 312 B2B şirketini kapsayan bir çalışmada da yapay zeka yönlendirmelerinin %14,2'si müşteriye dönüşürken Google organik trafiğinde bu oran %2,8'de kaldı."],
    [44, "Pro aboneler için",
      "Pro aboneler için iki özellik öne çıkıyor: **Deep Research**, tek soruya dakikalar içinde onlarca kaynaklı uzun bir rapor üretir; **Comet** ise Perplexity'nin cevap motorunu adres çubuğuna taşıyan web tarayıcısıdır. Şirket, tüm ürünleriyle birlikte 100 milyondan fazla aylık aktif kullanıcıya ulaştığını açıklıyor. Yani bu artık niş bir araştırmacı aracı değil, ana akım bir arama alışkanlığı."],
  ],

  "anahtar-kelime-arastirmasi-nasil-yapilir": [
    [3, "Anahtar kelime, kullanıcının",
      "Anahtar kelime, kullanıcının bir arama motoruna yazdığı sorgudur: \"kombi bakımı fiyat\", \"en iyi koşu ayakkabısı\", \"seo nedir\". SEO'da anahtar kelime, içeriğinizin hangi aramalarda görüneceğini belirlemek için hedeflediğiniz sorguyu ifade eder. Anahtar kelime araştırması ise bu sorguları sistemli biçimde bulma, ölçme ve önceliklendirme sürecidir."],
    [4, "Kritik nokta şu",
      "Kritik nokta şu: aslında kelimeyi değil, **arama amacını (search intent)** hedeflersiniz. Arama kutusuna \"kombi\" yazan biri ne istiyor: fiyat mı öğrenmek, tamirci mi bulmak, yoksa cihazın nasıl çalıştığını mı merak ediyor? Amacını çözemediğiniz bir kelimede sıralama kazansanız bile ziyaretçi 10 saniyede geri döner. Google bunu görür ve sizi aşağı indirir."],
    [25, "Yapılır; sitenizde",
      "Yapılır; hatta sitenizde biraz geçmiş veri varsa ücretli araçtan daha isabetli bile olur. En güçlü ücretsiz kaynak [Google Search Console](/blog/search-console-nedir): Performans raporunda, 50'den fazla gösterim aldığı hâlde tıklanma oranı %2'nin altında kalan sorguları filtreleyin. Bu sorgular \"Google sizi zaten gösteriyor ama içeriğiniz zayıf kalıyor\" demektir. Saha verisi de bunu doğruluyor: GSC'den çıkarılan bu kelimeler, araçla sıfırdan bulunan kelimelere göre yaklaşık 3,4 kat daha iyi dönüşüyor. Yeni bir sitede ise Anahtar Kelime Planlayıcı (kesin sayı yerine 10-100 gibi aralıklar verir), Google Trends ve otomatik tamamlama üçlüsüyle başlayın."],
    [26, "Türkiye'ye özel bir gerçek",
      "Türkiye'ye özel bir gerçek daha: uluslararası araçların Türkçe veri örneklemi zayıftır. Gerçekten aranan bir kelime Ahrefs'te sıfır hacim görünebilir. **Sıfır hacim, sıfır talep demek değildir.** Şüphelendiğinizde otomatik tamamlamaya, GSC gösterimlerine ve pazaryeri aramalarına bakarak doğrulayın."],
    [35, "\"X nedir, nasıl yapılır\"",
      "\"Nedir, nasıl yapılır\" tipi bilgi sorguları **blog yazısına** gider."],
    [36, "\"X hizmeti",
      "\"Hizmeti, fiyatları, ajansı\" tipi ticari sorgular **hizmet sayfasına** gider."],
    [37, "\"X vs Y",
      "\"En iyi, karşılaştırma\" tipi sorgular **rehber veya karşılaştırma içeriğine** gider."],
    [38, "Marka + şehir",
      "Hizmet ve şehir birlikte geçen sorgular **yerel açılış sayfalarına** gider."],
    [31, "Gerekli, ama hedef değişti",
      "Gerekli, ama hedef değişti. ABD'de aramaların %68'i artık hiçbir tıklama olmadan bitiyor; yapay zeka özeti çıkan sorgularda 1. sıradaki sonucun tıklanma oranı %58 düştü. Bu tablo, araştırma sürecine iki yeni filtre ekliyor. Birincisi: tıklama üretmeye devam eden kelime türlerine (ticari, yerel ve karşılaştırma amaçlı) ağırlık verin. İkincisi: bilgi sorgularında tek hedefiniz tıklanmak olmasın; [yapay zeka cevaplarında kaynak gösterilmek](/geo) de artık ölçülebilir bir hedef. Yapay zeka özetinde kaynak olarak görünen sayfaların organik tıklamalarının arttığını ölçen çalışmalar var. Kelime seçerken kendinize şunu da sorun: \"Bu soruda kaynak gösterilebilir miyim?\""],
  ],

  "seo-analizi-nasil-yapilir": [
    [4, "Deneyimli SEO'cuların",
      "Deneyimli SEO'cular da bu noktada buluşuyor. Reddit'in SEO topluluklarında en çok tekrarlanan şikâyet, uygulanmadan rafa kalkan devasa raporlar; en çok istenen çıktı ise kısa bir yönetici özeti, 3-5 yüksek etkili aksiyon ve 30/60/90 günlük plan. Uluslararası SEO danışmanı Aleyda Solís'in çerçevesi de aynı fikri savunur: bulguları \"hemen yap / değerlendir / yapma\" diye üçe ayırın ve 10 maddelik bir aksiyon planına indirin."],
    [13, "PageSpeed Insights'ta",
      "PageSpeed Insights'ta Google'ın üç eşiğine bakın: LCP 2,5 saniyenin, INP 200 milisaniyenin, CLS 0,1'in altında olmalı. Bu eşiklerin ciro karşılığı da ölçüldü: Deloitte'un perakende araştırmasına göre mobil sitenin **0,1 saniye hızlanması, dönüşümleri %8,4 artırıyor**. Hız bir maliyet kalemi değil, gelir kalemidir."],
    [15, "Küresel trafiğin yarıdan fazlası",
      "Küresel trafiğin yarıdan fazlası artık mobil cihazlardan geliyor ve Google, siteleri önce mobil sürümüyle değerlendiriyor. Telefonunuzdan kendi sitenizde üç işlem yapın: bir sayfa bulun, formu doldurun, satın alma adımına kadar ilerleyin. Takıldığınız her nokta, müşterinin vazgeçtiği noktadır."],
    [25, "2026'da analiz artık",
      "2026'da analiz artık klasik sıralamayla bitmiyor: bilgi amaçlı sorguların neredeyse tamamında yapay zeka özeti çıkıyor ve özet çıkan aramalarda 1. sıradaki sonucun tıklanma oranı %58 düştü. ChatGPT, Perplexity ve Google'ın yapay zeka cevaplarında markanız kaynak olarak geçiyor mu? Bu yeni katmanın adı [GEO](/geo) ve piyasadaki analiz şablonlarının çoğunda henüz yer almıyor; sizinkinde olsun."],
    [48, "Piyasa gerçekleri",
      "Piyasa gerçekleri şöyle: profesyonel analiz tipik olarak 500-2.000 $ bandında fiyatlanır ve işletmelerin %43'ü 101-750 $ arası ödüyor. 500 $ altındaki \"analiz\"lerin çoğu otomatik araç çıktısıdır; aracın kendisine siz de ücretsiz erişebilirsiniz, ödediğiniz paranın karşılığı yorum ve önceliklendirme katmanı olmalıdır. Sıklık için taban çizgisi yılda bir kapsamlı denetimdir; rekabetçi sektörlerde üç ayda bir gözden geçirme önerilir. Site taşıma ve tasarım yenilemesi sonrasında ise kontrol zorunludur."],
  ],
};

for (const [slug, list] of Object.entries(fixes)) {
  const post = await client.fetch(`*[_type=="post" && slug.current==$slug][0]{_id, body}`, { slug });
  if (!post?._id) { console.error(`❌ ${slug} bulunamadı`); continue; }
  const body = [...post.body];
  let applied = 0;
  for (const [idx, expectStart, newText] of list) {
    const b = body[idx];
    const current = (b?.children || []).map((c) => c.text).join("");
    if (!b || !current.startsWith(expectStart)) {
      console.error(`  ⚠️  ${slug}[${idx}] beklenen metinle uyuşmuyor, atlandı: "${current.slice(0, 40)}..."`);
      continue;
    }
    const nb = b.listItem ? li(newText, b.listItem, b.level) : p(newText);
    body[idx] = { ...nb, _key: b._key };
    applied++;
  }
  await client.patch(post._id).set({ body }).commit();
  console.log(`✅ ${slug}: ${applied}/${list.length} blok düzeltildi`);
}
