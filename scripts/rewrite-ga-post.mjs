import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "67vl8x07", dataset: "production", apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN, useCdn: false,
});

let n = 0; const key = () => "ga" + ++n;
function blk(style, text) {
  const k = key();
  return { _key: k, _type: "block", style, markDefs: [], children: [{ _key: k + "s", _type: "span", marks: [], text }] };
}
function lblk(style, segments) {
  const k = key(); const markDefs = [];
  const children = segments.map((seg, i) => {
    if (seg.href) { const mk = k + "l" + i; markDefs.push({ _key: mk, _type: "link", href: seg.href }); return { _key: k + "c" + i, _type: "span", marks: [mk], text: seg.t }; }
    return { _key: k + "c" + i, _type: "span", marks: [], text: seg.t };
  });
  return { _key: k, _type: "block", style, markDefs, children };
}

const body = [
  blk("normal",
    "Sitene ayda 10.000 kişi giriyor; ama hangisi nereden geldi, hangisi satın aldı bilmiyorsan körlemesine pazarlama yapıyorsun demektir. Google Analytics tam da bunu çözer: ziyaretçilerinin ne yaptığını tahminle değil, rakamlarla gösterir."),

  blk("h2", "Google Analytics Nedir?"),
  blk("normal",
    "Google Analytics, Google'ın ücretsiz web ve uygulama analitiği aracıdır. Sitene kim geliyor, nereden geliyor (arama, reklam, sosyal), hangi sayfada ne yapıyor ve sonunda dönüşüyor mu — hepsini ölçer. Bugün kullanılan sürüm GA4'tür (Google Analytics 4); eski Universal Analytics 1 Temmuz 2023'te kapandı ve artık veri toplamıyor."),

  blk("h2", "Google Analytics Ne Ölçer?"),
  blk("normal",
    "En çok bakılan veriler şunlar: kaç kullanıcı ve oturum geldiği, trafiğin hangi kanaldan (organik arama, ücretli reklam, sosyal, doğrudan) geldiği, hangi sayfaların en çok ziyaret edildiği, kullanıcıların hangi cihaz ve ülkeden bağlandığı ve en önemlisi dönüşümler — yani satın alma, form doldurma, arama gibi değerli eylemler. GA4 bunların tamamını \"etkinlik (event)\" mantığıyla toplar."),

  blk("h2", "GA4 ile Eski Sürümün (Universal) Farkı"),
  blk("normal",
    "GA4, eski Universal Analytics'ten temelde farklıdır. Universal \"oturum ve sayfa görüntüleme\" merkezliydi; GA4 ise her şeyi etkinlik olarak görür — tıklama, kaydırma, satın alma hepsi birer event. Ayrıca GA4 web ve mobil uygulamayı tek mülkte birleştirir ve gizlilik (KVKK/GDPR) odaklı kurgulanmıştır. Yani eski rehberlerdeki ekranları artık göremezsin."),

  blk("h2", "Google Analytics Nasıl Kurulur?"),
  lblk("normal", [
    { t: "Kurulum ücretsizdir: bir Google hesabıyla GA4 mülkü açar, ölçüm kimliğini (Measurement ID) sitene eklersin. Çoğu kişi bunu " },
    { t: "Google Tag Manager", href: "/hizmetler/google-tag-manager" },
    { t: " üzerinden yapar; böylece kod yazmadan etiketleri yönetir. Adım adım anlatımı " },
    { t: "GA4 kurulum rehberimizde", href: "/blog/google-analytics-4-kurulum-rehberi" },
    { t: " bulabilirsin." },
  ]),

  blk("h2", "Sık Sorulan Sorular"),
  blk("h3", "Google Analytics ücretsiz mi?"),
  blk("normal",
    "Evet, GA4 ücretsizdir; bir Google hesabı yeterli. Çok büyük kurumlar için ücretli GA360 sürümü de var ama işletmelerin büyük çoğunluğuna gerekmez."),
  blk("h3", "Universal Analytics hâlâ çalışıyor mu?"),
  blk("normal",
    "Hayır. 1 Temmuz 2023'te veri toplamayı durdurdu. Bugün herkesin kullandığı sürüm GA4'tür; hâlâ eski sürümü arıyorsan veri kaybediyorsun demektir."),
  blk("h3", "Google Analytics ile ROAS ölçebilir miyim?"),
  lblk("normal", [
    { t: "Evet. Dönüşüm ve gelir takibini kurarsan reklamdan gelen geliri görür ve " },
    { t: "ROAS", href: "/blog/roas-nedir" },
    { t: "'ını hesaplayabilirsin." },
  ]),
  blk("h3", "Verilerim güvende mi? (KVKK)"),
  blk("normal",
    "GA4; IP anonimleştirme ve rıza (consent) yönetimiyle KVKK/GDPR uyumlu kullanılabilir. Önemli olan kurulumu doğru yapmak ve çerez/izin akışını eksiksiz kurmaktır."),

  lblk("normal", [
    { t: "Sitendeki verinin doğru aktığından emin değil misin? GA4 ve dönüşüm kurulumunu birlikte gözden geçirelim — " },
    { t: "ücretsiz analiz al", href: "/iletisim" },
    { t: "." },
  ]),
];

const post = await client.fetch(`*[_type=="post" && slug.current=="google-analytics-nedir"][0]{_id}`);
if (!post?._id) { console.error("Post yok"); process.exit(1); }
await client.patch(post._id).set({
  body,
  "seo.focusKeyword": "google analytics nedir",
  "seo.seoTitle": "Google Analytics Nedir? GA4 ile Ne İşe Yarar?",
}).commit();

const words = body.filter(b => b._type === "block").map(b => b.children.map(c => c.text).join(" ")).join(" ").split(/\s+/).length;
console.log(`✅ google-analytics-nedir yeniden yazıldı. ~${words} kelime, ${body.length} blok, 4 iç link, focusKeyword set.`);
