# İncelenecek SEO Alanları — Detaylı Çerçeve

Her bulguyu tekil URL yerine mümkün olduğunda şablon veya URL ailesi düzeyinde
değerlendir. Yalnızca iş modeliyle ilgili modülleri uygula; gereksizleri kapsam
dışı bırak ve bunu raporda belirt.

## A. Tarama ve İndeksleme

Site ölçeğine ve iş modeline göre incele:

- robots.txt
- Meta robots ve X-Robots-Tag
- XML sitemap yapısı ve güncelliği
- HTTP durum kodları
- 3xx yönlendirmeler ve yönlendirme zincirleri
- 4xx ve 5xx hataları
- Soft 404 sorunları
- Canonical etiketleri ve Google tarafından seçilen canonical
- Yinelenen veya birbirine çok benzeyen sayfalar
- Parametreli URL'ler
- Filtreler ve faceted navigation
- Sonsuz kaydırma ve sayfalama
- Crawl trap ihtimalleri
- Yetim sayfalar
- Tarama derinliği
- JavaScript ile oluşturulan içerik
- Render edilen HTML ile kaynak HTML arasındaki farklar
- Mobil erişilebilirlik
- Büyük sitelerde crawl budget ve log dosyası sinyalleri
- İndekslenmesi gereken ve gerekmeyen URL kümeleri

## B. Bilgi Mimarisi ve İç Bağlantılar

- Navigasyon ve kategori hiyerarşisi
- Kullanıcının ve crawler'ın önemli sayfalara ulaşma derinliği
- Hub, kategori, ürün, hizmet ve destek sayfalarının ilişkisi
- Bağlam içi iç bağlantılar
- Anchor text dağılımı
- Yetim veya zayıf bağlantılı sayfalar
- Breadcrumb yapısı
- Benzer içeriklerin birbiriyle rekabet etmesi (kanibalizasyon)
- Konu kümeleri ve varlık ilişkileri
- Ticari sayfalara otorite aktarımı
- Footer ve site genelindeki bağlantıların gereksiz kullanımı

## C. İçerik ve Arama Niyeti

Anahtar kelimeleri tek başına listeleme. Önce kullanıcı ihtiyacını ve arama
görevini analiz et.

Sorguları şu bağlamlarda grupla: bilgilendirici, ticari araştırma,
karşılaştırma, işlemsel, navigasyonel, yerel, satış sonrası destek, marka /
marka dışı, yeni müşteri / mevcut müşteri.

Her önemli konu kümesi için belirle:

- Kullanıcı problemi
- Arama niyeti
- Dönüşüm hunisindeki aşama
- Güncel SERP yapısı ve görünen sonuç türleri
- Rakiplerin ortak yaklaşımı
- Rakiplerin cevaplamadığı veya yüzeysel bıraktığı noktalar
- Markanın sunabileceği özgün bilgi
- Uygun sayfa türü
- Ana dönüşüm veya mikro dönüşüm
- Gerekli uzman, veri, örnek, görsel veya video

"Daha uzun içerik üret", "daha fazla anahtar kelime kullan", "kaliteli içerik
yaz" gibi genel tavsiyeleri kabul etme. Her içerik önerisi için somut açıkla:
hangi sayfa/URL kümesi, hangi kullanıcı ihtiyacı, hangi eksik bilgi, hangi
özgün katkı, hangi başlık ve bölüm yapısı, hangi iç bağlantılar, hangi kanıt
veya uzman katkısı, hangi dönüşüm eylemi, başarının nasıl ölçüleceği.

## D. İçerik Kalitesi, Uzmanlık ve Güven

İçeriği kelime sayısı, anahtar kelime yoğunluğu veya biçimsel kontrol listesi
üzerinden değerlendirme. İncele:

- İçeriğin açık amacı
- Özgün deneyim veya birinci taraf bilgi
- Uzman katkısı, yazar ve editör kimliği
- Kaynakların güvenilirliği
- Gerçek örnekler ve vaka çalışmaları
- Ürün veya hizmete ilişkin özgün veriler
- Güncellik ve şeffaflık
- Marka ve şirket bilgilerinin tutarlılığı
- İletişim ve destek bilgileri
- İade, garanti, fiyatlandırma veya politika şeffaflığı
- YMYL konularında doğruluk ve uzman incelemesi
- İçeriğin SERP'teki mevcut sonuçlardan daha fazla ne sunduğu

E-E-A-T'yi tek bir sayısal skor veya doğrudan erişilebilen "Google puanı" gibi
sunma; bir inceleme çerçevesi olarak kullan.

## E. Teknik Kullanıcı Deneyimi

Gerçek kullanıcı verisi (CrUX/saha verisi) mevcutsa laboratuvar testlerinden
önce onu değerlendir. İncele:

- LCP, INP, CLS
- Mobil / masaüstü farkları
- Sayfa şablonlarına göre performans
- Görsel optimizasyonu, font yükleme
- Ana iş parçacığı yükü, JavaScript maliyeti
- Önbellekleme, CDN kullanımı, sunucu yanıt süreleri
- Üçüncü taraf scriptler
- Etkileşim gecikmeleri
- Reklam ve gömülü bileşen kaynaklı düzen kaymaları

Analiz tarihinde geçerli resmi Core Web Vitals eşiklerini web aramasıyla
doğrula. Tek bir Lighthouse testiyle site geneli hakkında kesin hüküm verme.

## F. Yapılandırılmış Veri ve Arama Görünümü

Yapılandırılmış veriyi yalnızca ilgili sayfa türü ve geçerli arama özelliği
için öner. Kontrol et:

- İşaretlenen bilginin sayfada kullanıcıya görünür olması
- JSON-LD ile görünen içeriğin eşleşmesi
- Zorunlu ve önerilen alanlar
- Şablon kaynaklı yanlış veya eski bilgiler
- Rich Results Test sonuçları ve Search Console geliştirme raporları
- Ürün, organizasyon, yerel işletme, breadcrumb, makale ve iş modeline uygun
  diğer türler

Sırf daha fazla schema kullanmak için işaretleme üretme. Desteklenmeyen,
yanıltıcı veya görünmeyen içeriği işaretleme.

## G. AI Arama ve Cevap Motoru Görünürlüğü

AI arama görünürlüğünü klasik SEO'dan tamamen ayrı bir disiplin gibi sunma.
Önce temel tarama, indeksleme, içerik kalitesi ve otorite sorunlarını çöz.

Uygun olduğu ölçüde incele:

- Google AI Overviews ve AI Mode görünürlüğüne teknik uygunluk
- Search Console'daki ilgili AI görünürlük kontrolleri; Generative AI performans
  raporu mevcutsa sayfa, ülke, cihaz ve tarih bazında görünürlük
- Bing ve Copilot için taranabilirlik ve indeksleme
- ChatGPT Search ve diğer cevap motorları için crawler erişimi
- robots.txt, CDN ve WAF kaynaklı bot engellemeleri (GPTBot, ClaudeBot,
  PerplexityBot, Google-Extended, Bingbot vb.)
- AI arama kaynaklı referral trafiğinin ölçümlenmesi
- Markanın ilgili sorularda kaynak olarak görünmesi
- Marka ve ürün hakkındaki üçüncü taraf kaynakların doğruluğu
- Özgün veriler, araştırmalar, görseller ve uzman görüşleri
- Kullanıcı sorgusundan doğabilecek bağlantılı alt sorular
- Alıntılanabilir netlik ile içerik bütünlüğü arasındaki denge

Şu iddiaları kanıtsız kullanma:

- "llms.txt Google sıralamasını artırır."
- "AI için özel bir schema zorunludur."
- "İçeriği küçük parçalara bölmek AI görünürlüğünü garanti eder."
- "Her uzun kuyruklu sorgu için ayrı sayfa açılmalıdır."
- "Belirli bir kelime sayısı AI sonuçlarına girmeyi sağlar."
- "Yapay marka mention'ları görünürlük garantiler."
- "GEO veya AEO klasik SEO'nun yerine geçmiştir."

Ölçülebilen gösterge ile tahmini göstergeyi birbirinden ayır. AI görünürlüğü
için başarı garantisi verme.

## H. Otorite, İtibar ve Site Dışı Sinyaller

Değerlendir:

- Gerçek ve alakalı backlinkler
- Marka mention'ları
- Dijital PR fırsatları
- Sektörel yayınlar ve uzman katkıları
- Müşteri yorumları
- Yerel işletme dizin tutarlılığı
- Ortaklıklar
- Özgün araştırma ve veri varlıkları
- Marka sorgularındaki sonuçların doğruluğu
- Sahte, satın alınmış veya manipülatif bağlantı riski

Bağlantı şemaları, yapay mention üretimi, ölçekli düşük kaliteli içerik,
gizleme, doorway sayfalar, anahtar kelime doldurma veya başka spam taktikleri
asla önerme.

## I. İş Modeline Özel Modüller

Yalnızca ilgiliyse ekle:

**E-ticaret:** Ürün varyantları, kategori sayfaları, stok durumu, filtreler,
ürün feed'i, Merchant Center, ürün schema'sı, incelemeler, tükenen ürün
politikası.

**Yerel SEO:** Google Business Profile, kategori seçimi, işletme bilgilerinin
tutarlılığı (NAP), şehir ve hizmet alanı sayfaları, yerel yorumlar, yerel arama
niyeti.

**Uluslararası SEO:** Dil ve ülke hedefleme, hreflang, lokalizasyon, para
birimi, canonical, yönlendirmeler, bölgesel içerik farklılıkları.

**Yayıncı:** Discover, haber görünürlüğü, tarih bilgileri, yazar sayfaları,
konu otoritesi, görsel ve video yüzeyleri.

**SaaS / B2B:** Ürün, özellik, entegrasyon, kullanım senaryosu, karşılaştırma,
alternatif, dokümantasyon, talep yaratma içerikleri.
