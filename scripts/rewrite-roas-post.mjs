import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "67vl8x07",
  dataset: "production",
  apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

let n = 0;
const key = () => "r" + ++n;

function blk(style, text) {
  const k = key();
  return { _key: k, _type: "block", style, markDefs: [], children: [{ _key: k + "s", _type: "span", marks: [], text }] };
}
// segments: [{t}, {t, href}] -> linkli blok
function lblk(style, segments) {
  const k = key();
  const markDefs = [];
  const children = segments.map((seg, i) => {
    if (seg.href) {
      const mk = k + "l" + i;
      markDefs.push({ _key: mk, _type: "link", href: seg.href });
      return { _key: k + "c" + i, _type: "span", marks: [mk], text: seg.t };
    }
    return { _key: k + "c" + i, _type: "span", marks: [], text: seg.t };
  });
  return { _key: k, _type: "block", style, markDefs, children };
}

const body = [
  blk("normal",
    "Reklama 10.000 TL verdin, 40.000 TL ciro döndü. İyi mi? Cevap \"duruma göre\" — çünkü tek başına ciro yanıltır. İşte burada ROAS devreye girer: harcadığın her liranın sana kaç lira geri getirdiğini gösterir."),

  blk("h2", "ROAS Nedir?"),
  blk("normal",
    "ROAS (Return on Advertising Spend), Türkçesiyle reklam harcaması getirisi, bir reklam kampanyasında harcanan her 1 TL'nin kaç TL gelir ürettiğini ölçen orandır. Pazarlamanın en net \"işe yarıyor mu?\" sorusunun cevabıdır: yüksekse reklam paranı verimli kullanıyorsun, düşükse para yakıyorsun demektir."),

  blk("h2", "ROAS Nasıl Hesaplanır?"),
  blk("normal", "Formül basittir:"),
  blk("blockquote", "ROAS = Reklamdan Gelen Gelir / Reklam Harcaması"),
  blk("normal",
    "Örnek: bir kampanyaya 10.000 TL harcadın ve bu reklamdan 40.000 TL gelir geldi. ROAS = 40.000 / 10.000 = 4. Yani her 1 TL'ye 4 TL. Genelde \"4x\" ya da \"%400\" şeklinde yazılır."),

  blk("h2", "İyi Bir ROAS Kaç Olmalı?"),
  blk("normal",
    "Çoğu rehberin atladığı asıl soru bu. \"İyi ROAS\" diye sabit bir sayı yok; her şey kâr marjına bağlı. Bilmen gereken kavram başabaş ROAS: ürün marjın %25 ise, sadece masrafı çıkarmak için en az 4x ROAS gerekir (1 / 0,25 = 4). Bunun altı zarar, üstü kâr. Yani 3x ROAS yüksek marjlı bir markada harika olabilir ama düşük marjlı bir üründe seni batırır. Önce marjını bil, sonra hedef ROAS'ını koy."),

  blk("h2", "ROAS, ROI ve ACOS Farkı"),
  blk("normal",
    "Sık karıştırılan üç kavram. ROAS yalnızca reklam gelirini reklam harcamasına böler; ürün maliyetini görmez. ROI ise tüm kârı tüm maliyete oranlar — gerçek kârlılığı ROI gösterir. ACOS (Advertising Cost of Sales) ise ROAS'ın tersidir ve harcamayı gelire böler; ROAS 4x ise ACOS %25'tir."),

  blk("h2", "ROAS'ı Nasıl Yükseltirsin?"),
  blk("normal",
    "Üç koldan ilerlersin. Birincisi doğru kitle: alakasız tıklamayı kes, sadece dönüşen kelimelere bütçe ver. İkincisi daha iyi açılış sayfası: hızlı, net ve ikna eden bir sayfa, aynı tıklamadan daha çok satış çıkarır."),
  lblk("normal", [
    { t: "Üçüncüsü ve en güçlüsü: reklama bağımlılığı azalt. Organik trafik büyüdükçe aynı cironun maliyeti düşer, yani harmanlanmış (blended) ROAS'ın yükselir. " },
    { t: "E-ticaret SEO", href: "/seo/e-ticaret-seo" },
    { t: " ile organik satış arttıkça reklam ROAS'ı üzerindeki baskı azalır." },
  ]),
  lblk("normal", [
    { t: "Bütün bunları görebilmek için önce ölçümün doğru kurulu olması şart: dönüşüm ve gelir takibi yoksa ROAS'ın da bir anlamı olmaz. Kurulumu " },
    { t: "GA4 kurulum rehberimizde", href: "/blog/google-analytics-4-kurulum-rehberi" },
    { t: " adım adım anlattık." },
  ]),

  blk("h2", "Sık Sorulan Sorular"),
  blk("h3", "İyi bir ROAS kaç olmalı?"),
  blk("normal",
    "Marjına bağlı. Başabaş noktan \"1 bölü kâr marjı\"dır; %25 marjda 4x başabaştır. Hedefini bunun üstüne koymalısın."),
  blk("h3", "ROAS yüksek ama kâr yok, neden?"),
  blk("normal",
    "Çünkü ROAS ürün maliyetini saymaz. Yüksek ROAS düşük marjla birleşince kâr erir. Gerçek kârlılığı ROI ile ölç."),
  blk("h3", "ROAS ile ROI aynı şey mi?"),
  blk("normal",
    "Hayır. ROAS sadece reklam gelirine bakar; ROI tüm maliyet ve kârı kapsar. ROAS kanal verimini, ROI işin gerçek kârını gösterir."),
  blk("h3", "ROAS nasıl yükseltilir?"),
  blk("normal",
    "Hedef kitleyi daralt, açılış sayfasını hızlandır ve organik trafikle reklama bağımlılığı azalt."),

  lblk("normal", [
    { t: "Reklam bütçeni boşa harcamadığından emin olmak ister misin? Hangi kanalın gerçekten kâr getirdiğini birlikte görelim — " },
    { t: "ücretsiz analiz al", href: "/iletisim" },
    { t: "." },
  ]),
];

const post = await client.fetch(
  `*[_type=="post" && slug.current=="roas-nedir"][0]{_id, seo}`
);
if (!post?._id) { console.error("Post yok"); process.exit(1); }

await client
  .patch(post._id)
  .set({
    body,
    "seo.focusKeyword": "roas nedir",
    "seo.seoTitle": "ROAS Nedir? Hesaplama, İyi ROAS ve Örnek",
  })
  .commit();

const words = body.filter((b) => b._type === "block").map((b) => b.children.map((c) => c.text).join(" ")).join(" ").split(/\s+/).length;
console.log(`✅ roas-nedir yeniden yazıldı. ~${words} kelime, ${body.length} blok, 3 iç link, focusKeyword set.`);
