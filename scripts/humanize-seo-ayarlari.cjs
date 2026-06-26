require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-03-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const slug = 'shopify-seo-ayarlari';

const newExcerpt = "Shopify panelinde SEO ayarlarını nasıl yapacağınızı, gerçek mağaza sahiplerinin en çok takıldığı noktalarla birlikte anlatıyoruz. Title, meta, URL slug, alt text, robots.txt ve çok dilli ayarlar...";

const newBody = [
  { _type: "block", _key: "intro", style: "normal", children: [{ _type: "span", text: "Shopify admin panelinde SEO ayarlarının çoğu kod yazmadan yapılabiliyor. Ama birçok mağaza sahibi bu ayarları ya yanlış yapıyor ya da tamamen atlıyor. Biz SEOROAS'ta yüzlerce Shopify sitesi yönetirken gördük ki, paneldeki küçük dokunuşlar bile sıralamaları ve tıklanma oranlarını ciddi şekilde etkileyebiliyor." }] },
  { _type: "block", _key: "h2-domain", style: "h2", children: [{ _type: "span", text: "Alan Adı ve Tercih Edilen URL" }] },
  { _type: "block", _key: "p-domain", style: "normal", children: [{ _type: "span", text: "Settings > Domains bölümünden markalı alan adınızı bağlayın ve primary domain olarak ayarlayın. Bu çok temel ama atlanan bir adım. Otomatik myshopify.com URL'leri otoriteyi dağıtıyor, markalı domain ise hem kullanıcı hem Google için daha net." }] },
  { _type: "block", _key: "h2-meta", style: "h2", children: [{ _type: "span", text: "Başlık ve Meta Açıklama Ayarları" }] },
  { _type: "block", _key: "p-meta1", style: "normal", children: [{ _type: "span", text: "Her ürün, koleksiyon ve sayfanın düzenleme ekranında en altta \"Search Engine Listing\" bölümü var. Buradan başlık etiketi (title tag), meta açıklama ve URL slug'ını değiştirebilirsiniz. Birçok kişi bu alanı hiç dokunmuyor ve otomatik başlıklar kullanıyor." }] },
  { _type: "block", _key: "p-meta2", style: "normal", children: [{ _type: "span", text: "Gerçek hayatta ne oluyor? Meta description'ları boş bırakan mağazalarda tıklanma oranları belirgin şekilde düşük kalıyor. Google bazen kendi özetini çekiyor ama senin kontrolünde olan bir şeyi bırakmak büyük kayıp." }] },
  { _type: "block", _key: "p-meta3", style: "normal", children: [{ _type: "span", text: "İyi bir meta: Anahtar kelimeyi doğal yerleştir, faydayı belirt, 150-160 karakter civarı tut. \"Ücretsiz kargo ile 2 günde teslim\" gibi spesifik ifadeler CTR'yi artırıyor." }] },
  { _type: "block", _key: "h2-product", style: "h2", children: [{ _type: "span", text: "Ürün ve Koleksiyon Sayfası Ayarları" }] },
  { _type: "block", _key: "p-product", style: "normal", children: [{ _type: "span", text: "Ürünlerde özgün açıklama yazmak şart. Üretici metnini kopyalamak duplicate içerik sorunu yaratıyor. Koleksiyon sayfalarına da mutlaka birkaç paragraf özgün giriş ekleyin. Boş koleksiyon sayfaları Google için zayıf sinyal." }] },
  { _type: "block", _key: "h2-alt", style: "h2", children: [{ _type: "span", text: "Görsel Alt Metni (Alt Text)" }] },
  { _type: "block", _key: "p-alt", style: "normal", children: [{ _type: "span", text: "Görsel yüklerken veya düzenlerken alt metin ekleyin. Bu hem erişilebilirlik hem Google Görseller trafiği için önemli. Sadece \"kırmızı ayakkabı\" yerine \"erkek kırmızı deri spor ayakkabı\" gibi betimleyici yazın. Birçok mağaza bunu tamamen atlıyor." }] },
  { _type: "block", _key: "h2-nav", style: "h2", children: [{ _type: "span", text: "Navigasyon ve İç Linkler" }] },
  { _type: "block", _key: "p-nav", style: "normal", children: [{ _type: "span", text: "Online Store > Navigation bölümünden menüleri kullanıcı mantığına göre düzenleyin. Net menü hem kullanıcıyı yönlendirir hem de Google'a önemli sayfaları gösterir. İç linkleri de unutmayın, blog yazılarından ürün ve koleksiyonlara bağlantı vermek çok işe yarıyor." }] },
  { _type: "block", _key: "h2-robots", style: "h2", children: [{ _type: "span", text: "robots.txt ve Sitemap" }] },
  { _type: "block", _key: "p-robots", style: "normal", children: [{ _type: "span", text: "Shopify otomatik olarak sitemap.xml üretir, bunu Search Console'a gönderin. robots.txt.liquid dosyasını düzenleyerek gereksiz sayfaları (filtreler, etiketler) taramadan çıkarabilirsiniz. Bu ayarları yapmayanlarda duplicate içerik sorunu sık görülüyor." }] },
  { _type: "block", _key: "h2-multilang", style: "h2", children: [{ _type: "span", text: "Çok Dilli ve Çok Bölgeli Ayarlar" }] },
  { _type: "block", _key: "p-multi", style: "normal", children: [{ _type: "span", text: "Birden fazla ülke veya dil varsa Shopify Markets ile hedefleme yapın ve hreflang etiketlerini doğru kurun. Yanlış hreflang kullanan sitelerde uluslararası sıralamalar karışabiliyor. Bu konu topluluklarda en çok sorulanlardan biri." }] },
  { _type: "block", _key: "h2-verify", style: "h2", children: [{ _type: "span", text: "Ayarları Yaptıktan Sonra Doğrulama" }] },
  { _type: "block", _key: "p-verify", style: "normal", children: [{ _type: "span", text: "Değişiklikleri yaptıktan sonra Search Console'da URL Inspection ile kontrol edin. Başlık ve meta değişikliklerinin indekslenmeye yansıması birkaç gün ile birkaç hafta sürebiliyor. Düzenli ölçün, hangi sorgulardan trafik geldiğini izleyin." }] },
  { _type: "block", _key: "h2-mistakes", style: "h2", children: [{ _type: "span", text: "Sık Yapılan Hatalar (Topluluktan Gerçek Örnekler)" }] },
  { _type: "block", _key: "p-mistakes", style: "normal", children: [{ _type: "span", text: "Birçok mağaza şu hataları yapıyor: Tema placeholder metinlerini değiştirmemek, filtre sayfalarını indekslenmeye açık bırakmak, eski ürün linklerini 404 olarak bırakmak, Open Graph görsellerini ayarlamamak, çok dilli sitelerde hreflang'ı eksik bırakmak. Bunlar arama performansını sessizce eritiyor." }] },
  { _type: "block", _key: "h2-bulk", style: "h2", children: [{ _type: "span", text: "Büyük Mağazalarda Bulk Düzenleme" }] },
  { _type: "block", _key: "p-bulk", style: "normal", children: [{ _type: "span", text: "200-300 ürününüz varsa tek tek meta yazmak imkânsız. Toplulukta en çok sorulan soru bu. Native panel yetersiz kalıyor. Birçok kişi app'ler veya CSV ile bulk düzenleme yapıyor. Veya en azından en çok satan 50-100 ürüne öncelik veriyor." }] },
  { _type: "block", _key: "h2-faq", style: "h2", children: [{ _type: "span", text: "Sık Sorulan Sorular" }] },
  { _type: "block", _key: "faq1", style: "normal", children: [{ _type: "span", text: "URL yapısını tamamen değiştirebilir miyim? Hayır, /products/ ve /collections/ gibi önekler sabit. Ama slug kısmını (URL handle) özgürce düzenleyebilirsiniz. Fayda odaklı kısa slug'lar tıklanma oranını artırıyor." }] },
  { _type: "block", _key: "faq2", style: "normal", children: [{ _type: "span", text: "Filtre sayfalarını indeksletmeli miyim? Genelde hayır. Parametreli URL'ler duplicate içerik yaratıyor. robots.txt veya canonical ile yönetin." }] },
  { _type: "block", _key: "faq3", style: "normal", children: [{ _type: "span", text: "Değişiklikler ne zaman indekslenir? Genelde birkaç gün ile birkaç hafta. Search Console'da manuel index isteğinde bulunabilirsiniz." }] },
  { _type: "block", _key: "cta", style: "normal", children: [{ _type: "span", text: "Mağaza ayarlarınızı birlikte gözden geçirelim. Ücretsiz analiz için iletişime geçin." }] }
];

async function update() {
  const doc = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{_id}`, { slug });
  if (!doc?._id) { console.error("Post bulunamadı"); process.exit(1); }
  console.log("Güncelleniyor:", doc._id);
  const res = await client.patch(doc._id).set({ excerpt: newExcerpt, body: newBody }).commit();
  console.log("✅ Sanity güncellendi (sadece içerik, kod dokunulmadı). Yeni rev:", res._rev);
}

update().catch(console.error);
