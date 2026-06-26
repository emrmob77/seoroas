require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-03-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const slug = 'shopify-seo-checklist';

const newExcerpt = "Shopify mağazanızın SEO'sunu kontrol ederken en çok zaman kaybettiren ve atlanan noktalar mı var? Gerçek mağazalardan derlediğimiz 2026 checklist'i ile kritik adımları kaçırma. Toplulukta en sık karşılaşılan sorunları da ekledik.";

const newBody = [
  { _type: "block", _key: "intro", style: "normal", children: [{ _type: "span", text: "Bir Shopify mağazasının SEO'sunu baştan sona kontrol etmek istiyorsan, dağınık tavsiyeler yerine net bir liste şart. Ama gerçek hayatta en çok hangi adımlar atlanıyor ve neden can yakıyor? İşte 2026 için güncellenmiş checklist'imiz, Reddit ve X'teki mağaza sahiplerinin yaşadığı acılardan ders alarak hazırladık." }] },
  { _type: "block", _key: "h2-kurulum", style: "h2", children: [{ _type: "span", text: "Kurulum ve Temel Ayarlar" }] },
  { _type: "block", _key: "p1", style: "normal", children: [{ _type: "span", text: "Mağazayı aramaya açmadan hiçbir şey işe yaramaz. Önce bunları hallet:" }] },
  { _type: "block", _key: "kur1", style: "normal", children: [{ _type: "span", text: "Markalı alan adını bağla ve myshopify.com'dan kalıcı yönlendirme yap. Otorite tek adreste toplanır." }] },
  { _type: "block", _key: "kur2", style: "normal", children: [{ _type: "span", text: "Google Search Console'u kur ve sitemap.xml'i gönder. Yeni sayfaların indekslenmesini hızlandırır." }] },
  { _type: "block", _key: "kur3", style: "normal", children: [{ _type: "span", text: "Google Analytics 4 ile Bing Webmaster'ı ekle. Verisiz optimizasyon kör dövüş." }] },
  { _type: "block", _key: "kur4", style: "normal", children: [{ _type: "span", text: "Mağazanın şifre korumasını kaldırıp aramaya aç. Aksi halde Google hiçbir şeyi göremez." }] },
  { _type: "block", _key: "h2-onpage", style: "h2", children: [{ _type: "span", text: "On-Page SEO Kontrol Listesi" }] },
  { _type: "block", _key: "p2", style: "normal", children: [{ _type: "span", text: "Her sayfa için bunları kontrol et. 200+ ürünlü mağazalarda bulk düzenleme için app kullanmayı düşün, yoksa en çok satanlardan başla." }] },
  { _type: "block", _key: "on1", style: "normal", children: [{ _type: "span", text: "Her sayfa için benzersiz, hedef kelimeyi içeren ve 60 karakteri aşmayan başlık yaz. Otomatik olanlar genelde yetersiz kalıyor." }] },
  { _type: "block", _key: "on2", style: "normal", children: [{ _type: "span", text: "Meta açıklamaları 150-160 karakterde, fayda ve eylem çağrısıyla yaz. Boş bırakma, Google kendi yazsın diye bekleme." }] },
  { _type: "block", _key: "on3", style: "normal", children: [{ _type: "span", text: "Ürün ve koleksiyon açıklamalarını üreticiden kopyalama; özgünleştir. Kopya içerik yüzlerce sitede aynı olunca değersizleşiyor." }] },
  { _type: "block", _key: "on4", style: "normal", children: [{ _type: "span", text: "Koleksiyon sayfalarına birkaç paragraflık özgün giriş metni ekle. Boş koleksiyonlar arama motorları için zayıf sinyal." }] },
  { _type: "block", _key: "on5", style: "normal", children: [{ _type: "span", text: "Görselleri sıkıştır ve her birine açıklayıcı alt metin gir. Hem hız hem Google Görseller trafiği için önemli." }] },
  { _type: "block", _key: "on6", style: "normal", children: [{ _type: "span", text: "URL slug'larını kısa, açıklayıcı ve anahtar kelimeli tut. Otomatik olanlar 'premium-...' gibi çıkıyor, CTR'yi düşürüyor. Fayda odaklı yap, Shopify otomatik yönlendirme yapıyor." }] },
  { _type: "block", _key: "h2-teknik", style: "h2", children: [{ _type: "span", text: "Teknik SEO Kontrol Listesi" }] },
  { _type: "block", _key: "p3", style: "normal", children: [{ _type: "span", text: "Teknik tarafı atlama, ama önceliği yüksek gelirli sayfalara ver. Filtre ve varyantlardan doğan duplicate'lar Shopify'da çok yaygın." }] },
  { _type: "block", _key: "tek1", style: "normal", children: [{ _type: "span", text: "Site hızını ölç; gereksiz uygulamaları ve ağır script'leri kaldır. App bloat'u en büyük düşmanlardan." }] },
  { _type: "block", _key: "tek2", style: "normal", children: [{ _type: "span", text: "Filtre ve etiket kaynaklı yinelenen URL'leri canonical ile yönet. Aksi takdirde Google aynı içeriği farklı URL'lerde görür." }] },
  { _type: "block", _key: "tek3", style: "normal", children: [{ _type: "span", text: "Her sayfada tek bir H1 ve mantıklı başlık hiyerarşisi olsun. Tema kısıtlamaları varsa app veya kod ile çöz." }] },
  { _type: "block", _key: "tek4", style: "normal", children: [{ _type: "span", text: "Product, Breadcrumb ve FAQ için JSON-LD yapılandırılmış veri ekle. Zengin sonuçlar için şart." }] },
  { _type: "block", _key: "tek5", style: "normal", children: [{ _type: "span", text: "Kırık linkleri ve 404 sayfalarını düzenli olarak kontrol edip yönlendirin. Silinen ürünlerde 301 şart." }] },
  { _type: "block", _key: "h2-icerik", style: "h2", children: [{ _type: "span", text: "İçerik ve Off-Page Kontrol Listesi" }] },
  { _type: "block", _key: "p4", style: "normal", children: [{ _type: "span", text: "Teknik tamam ama içerik olmadan trafik gelmez. Blog ve backlink işini aksatma." }] },
  { _type: "block", _key: "ic1", style: "normal", children: [{ _type: "span", text: "Bilgi amaçlı aramalar için düzenli blog içeriği üret. Ürün sayfalarına link vererek trafiği oraya yönlendir." }] },
  { _type: "block", _key: "ic2", style: "normal", children: [{ _type: "span", text: "Blog yazılarından ilgili ürün ve koleksiyonlara iç link ver. Bu basit adım çoğu mağazada eksik kalıyor." }] },
  { _type: "block", _key: "ic3", style: "normal", children: [{ _type: "span", text: "Kaliteli, doğal backlink'ler için dijital PR ve konuk yazı planla. Ücretsiz rehberler ve araçlar paylaşarak link çek." }] },
  { _type: "block", _key: "ic4", style: "normal", children: [{ _type: "span", text: "Eski içerikleri güncel tut; performansı Search Console'dan izle. Eskimiş yazılar trafiği öldürebilir." }] },
  { _type: "block", _key: "h2-oncelik", style: "h2", children: [{ _type: "span", text: "Hangi Adımdan Başlamalı? (Gerçekçi Sıralama)" }] },
  { _type: "block", _key: "p5", style: "normal", children: [{ _type: "span", text: "Listeyi gördüğünde her şeyi aynı anda yapma, yorucu olur. Doğru sıra: önce indekslenmeyi engelleyen kritik sorunları gider (kapalı mağaza, noindex, kırık yapı). Sonra en çok gelir getiren koleksiyon ve ürün sayfalarının on-page'ine odaklan — hızlı geri dönüş buradan gelir. Teknik ve içerik işlerini zamana yay, 200+ ürünlü mağazada bulk için app şart." }] },
  { _type: "block", _key: "h2-hatalar", style: "h2", children: [{ _type: "span", text: "Shopify SEO'da En Sık Yapılan Hatalar" }] },
  { _type: "block", _key: "p6", style: "normal", children: [{ _type: "span", text: "Checklist'i uygularken bu hatalardan kaçın, çoğu mağazada ileri seviye tekniklerden daha hızlı sonuç verir:" }] },
  { _type: "block", _key: "hata1", style: "normal", children: [{ _type: "span", text: "Kopya içerik: Üreticinin açıklamasını birebir kullanma. Aynı metin yüzlerce sitede olunca değersiz." }] },
  { _type: "block", _key: "hata2", style: "normal", children: [{ _type: "span", text: "Uygulama şişkinliği: Onlarca app kurup hızı düşür. Core Web Vitals mahvolur." }] },
  { _type: "block", _key: "hata3", style: "normal", children: [{ _type: "span", text: "Tekdüze meta: Tüm sayfalarda aynı veya boş başlık/açıklama. CTR düşer, Google sıkılır." }] },
  { _type: "block", _key: "hata4", style: "normal", children: [{ _type: "span", text: "Ağır görseller: Sıkıştırmadan yükle. LCP patlar." }] },
  { _type: "block", _key: "hata5", style: "normal", children: [{ _type: "span", text: "Yönlendirmesiz silme: Ürün silip 404 bırak. Otoriteyi kaybettirir." }] },
  { _type: "block", _key: "hata6", style: "normal", children: [{ _type: "span", text: "Filtre duplicate'larını unutmak. Koleksiyon filtreleri parametreli URL'ler yaratır, canonical şart." }] },
  { _type: "block", _key: "hata7", style: "normal", children: [{ _type: "span", text: "Yeni ürünlerin indekslenmesini beklemek. Shopify yeni sayfaları geç indeksliyor, ekstra çaba lazım." }] },
  { _type: "block", _key: "hata8", style: "normal", children: [{ _type: "span", text: "URL slug'ları feature odaklı bırakmak. Fayda odaklı yap, CTR artar." }] },
  { _type: "block", _key: "h2-basla", style: "h2", children: [{ _type: "span", text: "Hangi Adımdan Başlamalı? (Gerçekçi Sıralama)" }] },
  { _type: "block", _key: "p7", style: "normal", children: [{ _type: "span", text: "Listeyi gördüğünde panikleme. Doğru sıra: kritik sorunları (noindex, kapalı mağaza, kırık link) önce çöz. Sonra yüksek gelirli ürün/koleksiyonların on-page'ine odaklan. Teknik ve içerik işlerini zamana yay, 200+ ürünlü mağazada bulk için app şart." }] },
  { _type: "block", _key: "cta", style: "normal", children: [{ _type: "span", text: "Mağazanı tarayıp kişiye özel aksiyon listesi çıkaralım. Ücretsiz analiz için iletişime geçin." }] }
];

async function update() {
  const doc = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{_id}`, { slug });
  if (!doc?._id) { console.error("Post bulunamadı"); process.exit(1); }
  console.log("Güncelleniyor:", doc._id);
  const res = await client.patch(doc._id).set({ excerpt: newExcerpt, body: newBody }).commit();
  console.log("✅ Post güncellendi! Yeni rev:", res._rev);
}

update().catch(console.error);
