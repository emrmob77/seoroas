// 5 yeni blog yazısını genişletir: SSS bölümünün önüne derinlik bölümleri ekler.
// Amaç: 830-1.100 kelime → 1.500+ kelime; odak kelime yoğunluğunu doğal banda çekmek.
import { client, h2, h3, p, quote, ul, ol } from "./pt-helpers.mjs";

const additions = {
  "perplexity-nedir": [
    h2("Perplexity Nasıl Kullanılır? 10 Dakikada Verimli Başlangıç"),
    p("Kayıt olmadan perplexity.ai adresinden soru sormaya başlayabilirsiniz; arayüz ve cevaplar Türkçe çalışır. Verim farkı ise şu alışkanlıklarda saklı:"),
    ul([
      "**Soruyu bağlamıyla sorun.** \"CRM nedir\" yerine \"10 kişilik bir e-ticaret ekibi için uygun fiyatlı CRM seçenekleri neler, karşılaştır\" yazın; cevap motoru bağlamı ne kadar görürse kaynak seçimi o kadar isabetli olur.",
      "**Takip sorusu sorun.** Perplexity oturum boyunca konuşmayı hatırlar; ilk cevaptan sonra \"peki bunun Türkiye'de kullanılabilen alternatifi var mı\" diye daraltmak, yeni arama açmaktan iyi sonuç verir.",
      "**Odak modlarını kullanın.** Akademik mod hakemli kaynaklara, sosyal mod tartışma platformlarına ağırlık verir; araştırmanın türüne göre değiştirin.",
      "**Dipnotları açın.** Kritik bir rakam gördüğünüzde numaralı kaynağa tıklayıp orijinal sayfayı kontrol etmek 10 saniye sürer; yanlış bilgiyle rapor yazmak günler kaybettirir.",
    ]),
    p("Pro aboneler için iki özellik öne çıkıyor: **Deep Research**, tek soruya dakikalar içinde onlarca kaynaklı uzun rapor üretir; **Comet** ise Perplexity'nin cevap motorunu adres çubuğuna gömen tarayıcısı. Şirket, tüm ürünleriyle birlikte 100 milyondan fazla aylık aktif kullanıcıya ulaştığını açıklıyor; yani bu artık niş bir araştırmacı oyuncağı değil, ana akım bir arama alışkanlığı."),
    h2("Ajans Gözünden: Perplexity Trafiğini Nasıl İzlersiniz?"),
    p("Markanız için işe koyulmadan önce mevcut durumu ölçün; üç adım yeterli:"),
    ol([
      "**GA4'te kaynak raporunu filtreleyin:** oturum kaynağında perplexity.ai arayın. Veri varsa yapay zeka trafiği çoktan başlamış demektir.",
      "**Kendinize sorun:** sektörünüzdeki 10 kritik soruyu Perplexity'ye yazın. Cevaplarda rakipler kaynak gösteriliyor da siz yoksanız, boşluğun fotoğrafı budur.",
      "**Direct trafiği izleyin:** yönlendirme bilgisi göndermeyen yapay zeka araçlarından gelen ziyaretler \"direct\" görünür. Açıklanamayan direct artışı, çoğu zaman görünmeyen yapay zeka trafiğidir.",
    ]),
    p("Bu üç ölçüm, GEO çalışmasının \"öncesi\" fotoğrafını verir; optimizasyondan sonra aynı ölçümü tekrarlayıp farkı raporlarsınız. Ölçemediğiniz kanalı yönetemezsiniz; bu kural yapay zeka aramasında da değişmedi."),
  ],

  "anahtar-kelime-arastirmasi-nasil-yapilir": [
    h2("Kelimeleri Sayfalara Eşleyin: Haritalama"),
    p("Araştırmanın en çok atlanan adımı budur: elinizdeki kelime listesini sitenizdeki sayfalara dağıtmak. Kural basit: **bir arama amacı = bir sayfa.** Aynı amaca iki sayfa açarsanız Google hangisini sıralayacağını bilemez ve ikisi de yarı güçle yarışır; buna anahtar kelime yamyamlığı denir."),
    p("Pratik eşleme şablonu şöyle çalışır:"),
    ul([
      "\"X nedir, nasıl yapılır\" tipi bilgi sorguları → blog yazısı",
      "\"X hizmeti, X fiyatları, X ajansı\" tipi ticari sorgular → hizmet sayfası",
      "\"X vs Y, en iyi X\" tipi karşılaştırmalar → rehber/karşılaştırma içeriği",
      "Marka + şehir sorguları → yerel açılış sayfaları",
    ]),
    p("Haritayı bir tabloya dökün: kelime kümesi, hedef sayfa, mevcut sıralama, planlanan içerik tarihi. Bu tablo aynı zamanda içerik takviminizdir; \"bu ay ne yazsak\" sorusu bir daha masaya gelmez."),
    h2("Türkçe Araştırmanın Üç Tuzağı"),
    h3("1. Ek yapısı varyasyon üretir"),
    p("\"Kombi bakımı\", \"kombi bakım fiyatı\", \"kombi bakımı ne kadar\", \"kombi bakım ücreti\" — araçlar bunları dört ayrı kelime sayar ve her birine küçük hacimler gösterir. Toplarsanız ciddi bir talep çıkar. Türkçe'de kümeleme işini araca bırakamazsınız; varyasyonları elle birleştirip toplam talebi görün."),
    h3("2. Uluslararası araçların Türkçe örneklemi zayıf"),
    p("Ahrefs ve Semrush, hacim tahminini tıklama akışı (clickstream) verisinden yapar ve Türkiye örneklemi ABD'ye göre incedir. Gerçekten aranan kelimeler 0 hacim gösterebilir. Google'ın kendi otomatik tamamlaması ve GSC gösterim verisi bu yüzden Türkçe'de daha güvenilir doğrulayıcıdır."),
    h3("3. Sezonluk talep ortalamada kaybolur"),
    p("Araçlar 12 aylık ortalama gösterir; \"klima servisi\" kışın ölü, temmuzda patlama yapar. Google Trends'te kelimenin yıl içi eğrisine bakmadan içerik takvimi kurmayın; sezonluk kelimenin içeriği, talep tepe yapmadan 2-3 ay önce yayında olmalıdır ki sıralama oturmaya vakit bulsun."),
  ],

  "seo-analizi-nasil-yapilir": [
    h2("Analiz Çıktısı Nasıl Görünmeli?"),
    p("İyi bir analizin teslim formatı 200 sayfalık PDF değil, üç parçalı bir pakettir:"),
    ol([
      "**Tek sayfalık yönetici özeti:** en kritik 3-5 bulgu, her birinin tahmini trafik/ciro etkisi ve kim tarafından düzeltileceği.",
      "**Çalışma tablosu:** her satırda URL, sorun, etki puanı, efor puanı, sorumlu ve durum kolonu. Rapor değil, üzerinde çalışılan canlı bir belge.",
      "**30/60/90 günlük plan:** ilk ay hızlı kazanımlar, ikinci ay yapısal işler, üçüncü ay içerik ve otorite.",
    ]),
    p("Bu formatın testi basittir: analiz tesliminden bir hafta sonra ekip \"bugün ne yapacağız\" sorusuna tablodan cevap bulabiliyorsa analiz işe yaramıştır; bulamıyorsa elinizdeki şey rapor değil, dosya boyutudur."),
    h2("Özel Durum: Trafik Düşüşü Sonrası Analiz"),
    p("\"Trafiğimiz düştü, analiz yapar mısınız\" talebi, standart denetimden farklı bir teşhis süreci ister. Sıra şöyle:"),
    ul([
      "**Tarihi sabitleyin:** GSC'de düşüşün başladığı günü bulun ve Google'ın algoritma güncelleme takvimiyle karşılaştırın. Güncellemeyle çakışıyorsa sorun sistemik, çakışmıyorsa büyük ihtimalle teknik.",
      "**Kapsamı daraltın:** düşüş tüm sitede mi, belli sayfa grubunda mı, belli kelimelerde mi? GSC'de önceki dönemle sayfa bazlı karşılaştırma bunu 10 dakikada gösterir.",
      "**Teknik değişiklik arayın:** düşüş tarihinin hemen öncesinde site taşıma, tema değişikliği, robots.txt/noindex düzenlemesi ya da yönlendirme değişikliği yapılmış mı? Ani düşüşlerin en sık faili, dışarıdan gelen ceza değil, içeriden yapılan deploy'dur.",
      "**SERP'i kontrol edin:** kelimeyi aratın; belki siz düşmediniz, sonuç sayfasına yapay zeka özeti ya da yeni reklam bloku eklendi ve herkesin tıklaması azaldı. Sıralama aynıyken trafik düşüşü artık yaygın bir tablo.",
    ]),
    h2("Süre, Maliyet ve Sıklık"),
    p("Piyasa gerçekleri: profesyonel analiz tipik olarak 500-2.000 $ bandında fiyatlanır; işletmelerin %43'ü 101-750 $ arası ödüyor. 500 $ altındaki \"analiz\"lerin çoğu otomatik araç çıktısıdır; aracın kendisine siz de ücretsiz erişebilirsiniz, ödediğiniz paranın karşılığı yorum ve önceliklendirme katmanı olmalı. Sıklık için taban çizgisi yılda bir kapsamlı denetim; rekabetçi sektörlerde çeyreklik gözden geçirme, ayrıca her site taşıma ve tasarım yenilemesi sonrası zorunlu kontrol."),
  ],

  "sem-nedir": [
    h2("Hesap Yapısı: Paranın Kaybolduğu Yer"),
    p("SEM bütçelerinin sessiz katili, kötü hesap mimarisidir. Doğru yapı üç katmandır: kampanya (bütçe ve hedefleme burada) → reklam grubu (tek tema) → anahtar kelimeler ve reklamlar. Kural: **bir reklam grubu = tek konu.** \"Diş beyazlatma\" ile \"implant fiyatları\" aynı grupta durursa, reklam metni ikisine birden hitap etmeye çalışır ve ikisinde de alaka puanı düşer; her tıklamaya zam gelir."),
    p("Kalite puanını yükseltmenin dört pratik yolu da bu mimariden geçer:"),
    ol([
      "**Sıkı gruplar kurun:** grup başına 5-15 yakın akraba kelime; dev karma listeler yerine çok sayıda küçük, odaklı grup.",
      "**Metni kelimeyle eşleyin:** kullanıcı \"implant fiyatları\" aradıysa başlıkta o ifadeyi görmeli; genel \"kliniğimize hoş geldiniz\" metni tıklanmaz.",
      "**Açılış sayfasını eşleyin:** reklam implant anlatıyorsa link ana sayfaya değil, implant sayfasına gitmeli. Reklam-sayfa kopukluğu hem kalite puanını hem dönüşümü öldürür.",
      "**Negatif kelime listesi tutun:** \"ücretsiz\", \"maaş\", \"nedir\" gibi satın alma niyeti taşımayan aramaları haftalık arama terimleri raporundan ayıklayın; bütçenin sızdığı delikler orada görünür.",
    ]),
    p("Bu dört işin ortak özelliği şu: hiçbiri bütçe artışı istemez. SEM'de performans sıçramaları genelde daha çok para harcamaktan değil, aynı parayı daha az yere odaklamaktan gelir."),
    h2("SEM Verisi SEO'ya, SEO Verisi SEM'e Nasıl Akar?"),
    p("İki kanalı ayrı ekipler gibi yönetmek, en pahalı organizasyon hatalarından biri. Veri iki yönde de değerlidir:"),
    ul([
      "**Reklamdan SEO'ya:** arama terimleri raporu, gerçek kullanıcıların gerçek ifadelerini gösterir; dönüşüm getiren terimler içerik planının en tepesine yazılır. Reklam metni testlerinde kazanan başlıklar, organik sayfaların title etiketine taşınır; tıklatan dil iki tarafta da tıklatır.",
      "**SEO'dan reklama:** organik olarak zaten 1. sırada olduğunuz düşük rekabetli kelimelerde reklam bütçesini kısabilir, o parayı organik görünürlüğünüzün olmadığı kelimelere kaydırabilirsiniz. GSC verisi, reklam hesabının negatif ve pozitif kelime listelerini besler.",
    ]),
    p("Bu döngü kurulduğunda SEM harcaması yalnızca trafik değil, sürekli güncellenen bir pazar araştırması da satın alır; tek başına hiçbir anket size binlerce kişinin cüzdanıyla oy verdiği kelime listesini veremez."),
  ],

  "google-ads-nedir": [
    h2("Başlarken: İlk 30 Günün Doğru Sırası"),
    ol([
      "**Önce ölçüm, sonra harcama:** dönüşüm izleme (form, arama, satış) kurulmadan tek kuruş harcamayın. Dönüşümü ölçmeyen hesap, karanlıkta dart atar; \"reklam çalışıyor mu\" sorusuna asla cevap alamazsınız.",
      "**Tek kampanya, dar kelime seti:** en yüksek niyetli 5-10 kelimeyle, sıralı veya tam eşleme türünde başlayın. Geniş eşleme + akıllı teklif kombinasyonunu ilk günden açmak, öğrenme bütçenizi Google'ın keşif merakına bağışlamaktır.",
      "**Negatif listeyle açılış yapın:** \"ücretsiz\", \"iş ilanı\", \"nedir\", \"ikinci el\" gibi bariz alakasızları ilk günden ekleyin.",
      "**Haftada bir arama terimleri raporu:** reklamınızın hangi gerçek aramalarda çıktığını gösteren bu rapor, ilk ayın en değerli dersidir; alakasızları negatife, sürpriz kazananları kelime listesine taşıyın.",
      "**İlk ayı test dönemi sayın:** 30 günün hedefi kâr değil, veridir: hangi kelime dönüşüyor, gerçek tık maliyeti ne, dönüşüm oranı kaç? Kârlılık kararını bu verilerle ikinci ayda verirsiniz.",
    ]),
    h2("Bütçe Yakan 5 Yaygın Hata"),
    ul([
      "**Dönüşüm izlemesiz harcamak:** en yaygın ve en pahalı hata; neyin çalıştığını bilmeden optimizasyon imkânsız.",
      "**Her şeye azar azar bütçe dağıtmak:** 20 kelimeye bölünen küçük bütçe hiçbir kelimede öğrenme eşiğini geçemez; az kelime, yoğun bütçe kazanır.",
      "**Performance Max'i kıyas çizgisi olmadan açmak:** r/PPC topluluğunun en sık uyarısı bu; önce düz arama kampanyasıyla taban performansı ölçün, PMax'i sonra karşısına koyup test edin.",
      "**Açılış sayfası olarak ana sayfayı kullanmak:** kullanıcı aradığı şeyin sayfasına inmek ister; ana sayfaya düşen tıklama, ekstra bir arama adımı ve çoğu zaman kayıp demektir.",
      "**Reklamı kur-unut modunda bırakmak:** açık artırma canlı bir pazardır; rakip teklifleri, sezon ve kelime maliyetleri her hafta değişir. Aylardır bakılmayan hesap, yavaş yavaş pahalanan tıklamalarla sessizce erir.",
    ]),
    p("Bu beş hatanın ortak sonucu aynıdır: platform suçlanır, kanal \"bizde çalışmıyor\" diye kapatılır. Oysa çoğu zaman çalışmayan kanal değil, kurulumdur."),
  ],
};

for (const [slug, blocks] of Object.entries(additions)) {
  const post = await client.fetch(`*[_type=="post" && slug.current==$slug][0]{_id, body}`, { slug });
  if (!post?._id) { console.error(`❌ ${slug} bulunamadı`); continue; }
  const flat = blocks.flat();
  const faqIdx = post.body.findIndex(
    (b) => b.style === "h2" && (b.children || []).map((c) => c.text).join("").startsWith("Sık Sorulan")
  );
  if (faqIdx === -1) { console.error(`❌ ${slug}: SSS bloğu yok`); continue; }
  const already = post.body.some(
    (b) => b.style === "h2" && flat[0].children[0].text === (b.children || []).map((c) => c.text).join("")
  );
  if (already) { console.log(`⏭️  ${slug}: zaten genişletilmiş`); continue; }
  const newBody = [...post.body.slice(0, faqIdx), ...flat, ...post.body.slice(faqIdx)];
  await client.patch(post._id).set({ body: newBody }).commit();
  console.log(`✅ ${slug}: +${flat.length} blok eklendi (SSS öncesine)`);
}
