// İkinci temizlik geçişi: İngilizce'den birebir çevrilmiş terim ve deyimler (calque) düzeltiliyor.
// tohum kelime (seed keyword), kova (bucket), kur-unut (set-and-forget), kıyas/taban çizgisi (baseline),
// para kelimeleri (money keywords), karanlıkta dart, öncesi fotoğrafı (before photo),
// büyüklük sırası (order of magnitude), deploy vb.
import { client, p, li, h3 } from "./pt-helpers.mjs";

const fixes = {
  "anahtar-kelime-arastirmasi-nasil-yapilir": [
    [6, "1. Tohum kelimelerle", "1. Temel kelimelerinizi belirleyin"],
    [9, "Tohum kelimeleri", "Bu temel kelimeleri şu kaynaklarla çoğaltın:"],
    [15, "Her kelimeyi dört kovadan",
      "Her kelimeyi dört gruptan birine ayırın: **bilgi** (nedir, nasıl), **karşılaştırma/ticari** (en iyi, fiyat, yorumlar), **satın alma** (satın al, sipariş) ve **marka** (marka adıyla yapılan aramalar). Bilgi kelimeleri blog yazısına, ticari kelimeler hizmet ve kategori sayfalarına gider. Amaç ile sayfa tipi uyuşmazsa en iyi içerik bile sıralanmaz; Google'a \"seo fiyatları\" yazın, çıkan sonuçların hepsi fiyat sayfasıdır, blog yazısı değil."],
    [19, "Bu yüzden hacmi kesin sayı",
      "Bu yüzden hacmi kesin bir sayı olarak değil, kaba bir gösterge olarak okuyun. KD skoruna da dikkat: çoğu araç zorluğu yalnızca backlink sayısından hesaplar; \"kolay\" görünen bir kelimede güçlü markalar oturuyorsa gerçek zorluk, skorun söylediğinden yüksektir. En sağlam yöntem, ilk sayfayı gözünüzle incelemektir."],
    [28, "Tüm aramaların yaklaşık",
      "Tüm aramaların yaklaşık %92'si, tek tek bakıldığında az aranan \"uzun kuyruk\" sorgulardan oluşuyor; ABD verisinde kelimelerin %94,7'si ayda 10'dan az aranıyor. Yeni ve otoritesi düşük bir site için strateji nettir: \"seo\" gibi dev kelimeleri değil, \"e-ticaret sitesi için seo nasıl yapılır\" gibi spesifik soruları hedefleyin. Bu sorgularda rekabet düşük, arama amacı net, dönüşüm yüksektir."],
    [29, "Bir uyarı da r/juststart",
      "Bir uyarı da r/juststart'tan gelsin: \"Beş yıl içinde bugünkü uzun kuyruk kelimeler bile yeni girenler için fazla rekabetçi sayılacak.\" Yani bu fırsat penceresi hâlâ açık ama her yıl biraz daha daralıyor; ertelemenin bedeli artıyor."],
    [53, "Yön gösterir, kesin ölçmez",
      "Yön gösterir, kesin ölçmez. Google Anahtar Kelime Planlayıcı, hacimleri vakaların yarısından fazlasında olduğundan yüksek gösterir; Türkçe kelimelerde uluslararası araçların örneklemi ayrıca zayıftır. Hacmi kaba bir gösterge olarak okuyun, son kararı ilk sayfayı inceleyerek verin."],
  ],

  "sem-nedir": [
    [9, "Maliyet tarafında güncel",
      "Maliyet tarafında güncel küresel ortalamalar şöyle: tık başına 5,42 $, dönüşüm oranı %8,2, potansiyel müşteri başına maliyet 66,69 $ (WordStream, 2026). Sektörler arasında uçurum var; hukuk sektörü tık başına 9,87 $ öderken restoranlar 2 $ civarında ödüyor. Türkiye'de tıklama maliyetleri daha düşük ama mantık aynı: satın alma niyeti taşıyan rekabetli kelimelerde tık pahalıdır."],
    [39, "Reklamdan SEO'ya",
      "**Reklamdan SEO'ya:** arama terimleri raporu, gerçek kullanıcıların gerçek ifadelerini gösterir; dönüşüm getiren terimler içerik planının en üstüne yazılır. Reklam metni testlerinde kazanan başlıklar, organik sayfaların title etiketine taşınır; kullanıcıyı tıklatan dil, iki kanalda da işe yarar."],
  ],

  "google-ads-nedir": [
    [10, "Performance Max: Google'ın",
      "**Performance Max:** Google'ın tüm kanallara otomatik dağıtım yapan kampanya tipi. r/PPC'de en çok şikâyet edilen konu, bütçenin nereye gittiğinin görülememesi. Yaygın uzman tavsiyesi: önce düz arama kampanyasıyla bir kıyas noktası oluşturun, Performance Max'i sonra deneyin."],
    [25, "Önce ölçüm, sonra harcama",
      "**Önce ölçüm, sonra harcama:** dönüşüm izleme (form, arama, satış) kurulmadan tek kuruş harcamayın. Dönüşümü ölçmeyen hesap körlemesine harcar; \"reklam çalışıyor mu\" sorusuna asla cevap alamazsınız."],
    [33, "Performance Max'i kıyas çizgisi",
      "**Performance Max'i kıyassız açmak:** r/PPC topluluğunun en sık uyarısı bu; önce düz arama kampanyasıyla temel performansınızı ölçün, Performance Max'i sonra onunla karşılaştırarak test edin."],
    [35, "Reklamı kur-unut",
      "**Reklamı kurup unutmak:** açık artırma canlı bir pazardır; rakip teklifleri, sezonlar ve kelime maliyetleri her hafta değişir. Aylarca bakılmayan hesap, yavaş yavaş pahalanan tıklamalarla sessizce erir."],
  ],

  "perplexity-nedir": [
    [34, "\"Bu kadar uğraşa değer mi",
      "\"Bu kadar uğraşa değer mi? Perplexity'den ne kadar trafik gelir ki?\" Haklı bir soru. Rakamlar şöyle: yapay zeka kaynaklı ziyaretler 2025'te yıllık %527 büyüdü ama hâlâ toplam trafiğin %1'inin altında. Yani evet, hacim henüz küçük."],
    [48, "Kendinize sorun",
      "**Kendinize sorun:** sektörünüzdeki 10 kritik soruyu Perplexity'ye yazın. Cevaplarda rakipleriniz kaynak olarak gösteriliyor da siz yoksanız, kapatmanız gereken boşluk tam olarak budur."],
    [50, "Bu üç ölçüm",
      "Bu üç ölçüm, GEO çalışmasına başlamadan önceki durumun kaydını oluşturur; optimizasyondan sonra aynı ölçümleri tekrarlayıp aradaki farkı raporlarsınız. Ölçemediğiniz kanalı yönetemezsiniz; bu kural yapay zeka aramasında da geçerli."],
  ],

  "seo-analizi-nasil-yapilir": [
    [7, "Analize araç bağlantılarıyla",
      "Analize ölçüm araçlarını kontrol ederek başlayın: [Google Search Console](/blog/search-console-nedir) ve [GA4](/blog/google-analytics-4-kurulum-rehberi) kurulu mu, veri topluyor mu? GSC yoksa, Google'ın sitenizi nasıl gördüğünü gösteren en değerli ücretsiz veri kaynağından mahrumsunuz demektir; önce onu kurun, analiz boyunca kullanacaksınız."],
    [9, "Google'da site:",
      "Google'da site:siteniz.com araması yapın ve GSC'nin Sayfalar raporuna bakın. İki soruya cevap arıyorsunuz: indekslenmesi gereken sayfalar indekste mi, indekslenmemesi gerekenler (filtre sayfaları, etiketler, test sayfaları) dışarıda mı? Asıl trafik kaybı genelde birincisinden gelir: para kazandıran sayfalarınız sunucu hatası, yanlış noindex etiketi ya da robots.txt engeli yüzünden Google'da hiç görünmüyor olabilir."],
    [45, "Teknik değişiklik arayın",
      "**Teknik değişiklik arayın:** düşüş tarihinin hemen öncesinde site taşıma, tema değişikliği, robots.txt/noindex düzenlemesi ya da yönlendirme değişikliği yapılmış mı? Ani düşüşlerin en sık nedeni dışarıdan gelen bir ceza değil, siteye içeriden yapılan bir güncellemedir."],
    [48, "Piyasa gerçekleri",
      "Piyasa gerçekleri şöyle: profesyonel analiz tipik olarak 500-2.000 $ bandında fiyatlanır ve işletmelerin %43'ü 101-750 $ arası ödüyor. 500 $ altındaki \"analiz\"lerin çoğu otomatik araç çıktısıdır; aracın kendisine siz de ücretsiz erişebilirsiniz, ödediğiniz paranın karşılığı yorum ve önceliklendirme olmalıdır. En az yılda bir kapsamlı denetim yapın; rekabetçi sektörlerde üç ayda bir gözden geçirme önerilir. Site taşıma ve tasarım yenilemesi sonrasında ise kontrol zorunludur."],
    [57, "Yılda bir kapsamlı analiz",
      "En az yılda bir kapsamlı analiz yapılmalıdır; rekabetçi sektörlerde üç ayda bir gözden geçirme önerilir. Ayrıca site taşıma, tasarım yenileme ve ani trafik düşüşü sonrasında mutlaka tekrarlanmalıdır."],
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
      console.error(`  ⚠️  ${slug}[${idx}] uyuşmadı: "${current.slice(0, 40)}..."`);
      continue;
    }
    let nb;
    if (b.listItem) nb = li(newText, b.listItem, b.level);
    else if (b.style === "h3") nb = h3(newText);
    else nb = p(newText);
    body[idx] = { ...nb, _key: b._key };
    applied++;
  }
  await client.patch(post._id).set({ body }).commit();
  console.log(`✅ ${slug}: ${applied}/${list.length} blok temizlendi`);
}
