// 5 yeni yazının "Öne Çıkanlar" (excerpt) metnini ve giriş paragraflarını netleştirir.
// Sorun: excerpt teaser gibi yazılmıştı ama sayfada bağımsız özet kutusu olarak gösteriliyor;
// girişler de istatistik+soru yığını yüzünden zor okunuyordu. Kural: cümle başına tek fikir.
import { client, p } from "./pt-helpers.mjs";

const fixes = {
  "sem-nedir": {
    excerpt:
      "SEM, arama motoru pazarlaması demektir ve sektörde çoğunlukla ücretli arama reklamlarını ifade eder. Bu yazıda SEM'in SEO ve PPC ile farkını, reklamın ve organik trafiğin hangi durumda üstün olduğunu ve bütçenizi ikisi arasında nasıl böleceğinizi öğreneceksiniz.",
    replaceFirst: 1,
    intro: [
      p("Google'da organik olarak 1. sırada çıkan bir site, o aramaların yaklaşık **%40'ında** tıklanır. En üstteki reklamı ise kullanıcıların yalnızca **%2'si** tıklar; aradaki fark yaklaşık 19 kat. Buna rağmen şirketler 2025 yılında arama reklamlarına 334 milyar dolar harcadı. Neden? Çünkü reklamın, organik trafiğin veremediği bir şeyi var: hız. Bu yazıda önce SEM kavramını netleştireceğiz, sonra SEO ve PPC ile ilişkisini açıklayacağız ve bütçenizi bu iki kanal arasında nasıl bölmeniz gerektiğini verilerle göstereceğiz."),
    ],
  },
  "google-ads-nedir": {
    excerpt:
      "Google Ads, tıklama başına ödeme modeliyle çalışan reklam platformudur ve dakikalar içinde ziyaretçi getirir. Ancak e-ticaret reklamverenlerinin yarısı, harcadığı 1 liraya karşılık 2 liradan az ciro elde ediyor; masraflar düşülünce bu fiilen zarar demek. Bu rehberde sistemin nasıl çalıştığını ve kârlı tarafta kalmanın yollarını öğreneceksiniz.",
    replaceFirst: 2,
    intro: [
      p("Bir işletme sahibi, ne olacağını görmek için marka adına verdiği reklamları durdurdu. Sonuç: marka aramalarındaki görünürlüğü **%60 azaldı**. Reklamları yeniden açtığında her şey 48 saat içinde eski hâline döndü. Bu küçük deney, Google Ads'in doğasını tek cümlede özetliyor: **trafik kiralarsınız, satın almazsınız.** Kira ödendiği sürece ev sizindir; ödeme durunca kapı kilitlenir."),
      p("Bu, reklamın kötü olduğu anlamına gelmez. Google Ads dünyanın en hızlı müşteri kaynağıdır ve doğru senaryoda çok iyi çalışır. Bu rehberde önce \"google ads nedir\" sorusunu sistemin işleyişiyle birlikte cevaplayacağız. Sonra kimsenin pek konuşmadığı kısma geçeceğiz: hangi koşullarda bu kanal para kazandırır, hangi koşullarda kaybettirir?"),
    ],
  },
  "perplexity-nedir": {
    excerpt:
      "Perplexity, sorulara internette gerçek zamanlı arama yaparak kaynak gösterip cevap veren bir yapay zeka yanıt motorudur. Bu rehberde Google ve ChatGPT'den farklarını, ücretsiz ve ücretli planlarını ve sitenizin Perplexity cevaplarında kaynak olarak gösterilmesi için atmanız gereken adımları bulacaksınız.",
    replaceFirst: 2,
    intro: [
      p("Perplexity, Mayıs 2025'te tek ayda **780 milyon soru** yanıtladı. Bir yıl önce bu sayı 230 milyondu; yani kullanım bir yılda üç kattan fazla arttı ve her ay yüzde 20 büyümeye devam ediyor. Bunun sizin için anlamı şu: müşterileriniz aradıklarını artık yalnızca Google'a sormuyor."),
      p("Bu rehberde önce \"perplexity nedir\" sorusunu net biçimde cevaplayacağız. Sonra site sahiplerini ilgilendiren asıl konuya geçeceğiz: markanızın Perplexity cevaplarında kaynak olarak gösterilmesi için hangi adımların işe yaradığını, ölçülmüş verilerle tek tek anlatacağız."),
    ],
  },
  "anahtar-kelime-arastirmasi-nasil-yapilir": {
    excerpt:
      "İnternetteki sayfaların %90'ından fazlası Google'dan hiç ziyaretçi almıyor ve bunun en büyük nedeni yanlış kelimeleri hedeflemek. Bu rehberde anahtar kelime araştırmasının 6 adımını, ücretsiz araçları ve Türkçe pazara özgü tuzakları örneklerle öğreneceksiniz.",
    replaceFirst: 1,
    intro: [
      p("SEO aracı Ahrefs, 1 milyardan fazla web sayfasını inceledi ve şunu buldu: sayfaların **%90,63'ü Google'dan hiç ziyaretçi almıyor**. Üstelik bu sayfaların çoğu kötü yazıldığı için değil, ya kimsenin aramadığı ya da rekabetin çok güçlü olduğu kelimeleri hedeflediği için görünmez kalıyor. Anahtar kelime araştırması, tam olarak bu emek israfını önleyen çalışmadır: bir içeriği yazmadan önce neyin arandığını, kimin kazandığını ve sizin nerede şansınız olduğunu ölçer."),
    ],
  },
  "seo-analizi-nasil-yapilir": {
    excerpt:
      "Çoğu SEO raporu yüzlerce sorun listeler ama hangisinden başlanacağını söylemez. Bu rehberdeki 10 adım, sitenizin gerçek sorunlarını bulmanızı ve bunları önem ile zorluk derecesine göre sıralayıp uygulanabilir bir plana dönüştürmenizi sağlıyor.",
    replaceFirst: 2,
    intro: [
      p("SEO aracı Ahrefs, 14 milyar web sayfasını taradığında sayfaların **%96,55'inin Google'dan hiç trafik almadığını** gördü. Sizin sitenizin bu çoğunluğun içinde olup olmadığı tahminle bilinmez; ölçmek gerekir. Bu ölçümün adı SEO analizidir. Ne yazık ki piyasadaki \"analiz\"lerin çoğu, bir tarama aracının çıktısına logo eklenmiş PDF'lerden ibarettir: 200 maddelik bir sorun listesi alırsınız ama hangisinin önemli olduğunu yine bilemezsiniz."),
      p("Bu rehber farklı bir şey öğretiyor: sorun saymayı değil, **önceliklendirmeyi**. Aşağıdaki 10 adımı tamamladığınızda elinizde \"önce şunu düzelt, çünkü getirisi en yüksek olan bu\" diyen bir yol haritası olacak."),
    ],
  },
};

for (const [slug, fix] of Object.entries(fixes)) {
  const post = await client.fetch(`*[_type=="post" && slug.current==$slug][0]{_id, body}`, { slug });
  if (!post?._id) { console.error(`❌ ${slug} bulunamadı`); continue; }
  const newBody = [...fix.intro, ...post.body.slice(fix.replaceFirst)];
  await client.patch(post._id).set({ body: newBody, excerpt: fix.excerpt }).commit();
  console.log(`✅ ${slug}: excerpt + ilk ${fix.replaceFirst} paragraf yenilendi`);
}
