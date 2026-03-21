# SEOROAS.COM — Proje Gereksinimleri
> **Rol:** SEO Uzmanı Direktifleri
> **Hedef Pazar:** Türkiye — SEO Ajans Aramaları
> **Son Güncelleme:** Mart 2026

---

## 1. SEO Uzmanı Analizi — Türkiye Keyword Haritası

### Ahrefs Keyword Araştırması (Türkiye / TR)

| Keyword | Aylık Arama | KD | CPC (₺) | İnt. | Öncelik |
|---|---|---|---|---|---|
| seo ajansı | 4,100 | **4** | 160 | Mixed | 🔴 P1 |
| seo fiyatları | 3,700 | **1** | 35 | Commercial | 🔴 P1 |
| dijital pazarlama ajansı | 3,600 | 22 | 150 | Mixed | 🔴 P1 |
| seo uzmanı | 2,400 | **1** | 90 | Mixed | 🔴 P1 |
| seo hizmeti | 2,200 | 13 | 180 | Commercial | 🔴 P1 |
| istanbul seo ajansı | 800 | 10 | **500** | Commercial+Local | 🟡 P2 |
| arama motoru optimizasyonu | 700 | 37 | 25 | Informational | 🟡 P2 |
| seo danışmanı | 700 | **1** | 140 | Commercial | 🟡 P2 |
| seo analizi | 500 | **1** | 30 | Informational | 🟢 P3 |
| kurumsal seo | 250 | **2** | 140 | Commercial | 🟢 P3 |
| seo şirketi | 100 | 8 | 45 | Mixed | 🟢 P3 |

**Kritik Bulgular:**
- "seo ajansı" → KD:4 ile 4,100 arama — **rakipsiz fırsat**, hızla ranke girilebilir
- "seo fiyatları" → KD:1, 3,700 arama — ayrı sayfa zorunlu, yüksek ticari niyet
- "seo uzmanı" → KD:1, 2,400 arama — içerik stratejisiyle kolay trafik
- "istanbul seo ajansı" → CPC ₺500 = çok yüksek ticari değer, lokal sayfa şart
- İstanbul dışı şehirler için de lokal sayfalar oluşturulmalı (Ankara, İzmir, Bursa, Antalya)

---

## 2. Site Mimarisi (Keyword-First)

### 2.1 URL Yapısı
```
seoroas.com/                          → Ana sayfa (seo ajansı, seo hizmeti)
seoroas.com/seo-fiyatlari/            → Fiyatlar sayfası (seo fiyatları — 3,700/ay)
seoroas.com/seo-hizmetleri/           → Hizmetler hub
seoroas.com/seo-hizmetleri/on-page-seo/
seoroas.com/seo-hizmetleri/teknik-seo/
seoroas.com/seo-hizmetleri/link-building/
seoroas.com/seo-hizmetleri/lokal-seo/
seoroas.com/seo-hizmetleri/e-ticaret-seo/
seoroas.com/seo-hizmetleri/icerik-seo/
seoroas.com/istanbul-seo-ajansi/      → Lokal sayfa (istanbul seo ajansı — 800/ay, CPC ₺500)
seoroas.com/ankara-seo-ajansi/        → Lokal sayfa
seoroas.com/izmir-seo-ajansi/         → Lokal sayfa
seoroas.com/vaka-calismalari/         → Case studies hub
seoroas.com/blog/                     → Blog (informational keyword'ler)
seoroas.com/blog/seo-nedir/           → (arama motoru optimizasyonu — 700/ay)
seoroas.com/blog/seo-danismani/       → (seo danışmanı — 700/ay, KD:1)
seoroas.com/blog/seo-analizi-nasil-yapilir/
seoroas.com/hakkimizda/
seoroas.com/iletisim/
```

### 2.2 İçerik Hiyerarşisi
```
Tier 1 (Para sayfaları):   Ana Sayfa → Hizmet Sayfaları → Fiyatlar
Tier 2 (Lokal sayfalar):   İstanbul, Ankara, İzmir, Bursa, Antalya
Tier 3 (İçerik hub):       Blog rehberleri, SEO Kılavuzları
```

---

## 3. Teknik SEO Gereksinimleri

### 3.1 Core Web Vitals Hedefleri (Zorunlu)
```
LCP (Largest Contentful Paint):   < 1.5 saniye  (Google eşiği: 2.5s)
CLS (Cumulative Layout Shift):    < 0.05         (Google eşiği: 0.1)
INP (Interaction to Next Paint):  < 100ms        (Google eşiği: 200ms)
TTFB (Time to First Byte):        < 200ms
FCP (First Contentful Paint):     < 1.0 saniye
```

### 3.2 Teknik Stack
```
Framework:    Next.js 14+ (App Router) — TAM SSR (her sayfa her istekte render)
CMS:          Sanity.io v3 (headless CMS, ücretsiz tier)
              → Sanity Studio: tarayıcıdan içerik yönetimi arayüzü
              → Sanity API: Next.js SSR'da her istekte içerik çekilir
Hosting:      Vercel (SSR fonksiyonları için, Edge Runtime tercih edilir)
CSS:          Tailwind CSS v4 (JIT — kullanılmayan CSS sıfır)
Görüntüler:   Next/Image + Sanity image pipeline (otomatik WebP/AVIF)
Fontlar:      Next/Font (self-hosted, FOUT yok)
Analytics:    Vercel Analytics + Google Analytics 4
Sitemap:      next-sitemap (Sanity içeriklerinden otomatik üretir)
```

### 3.2a Sanity CMS Mimarisi
```
Sanity Studio (studio.seoroas.com veya seoroas.com/studio)
  └── Şemalar (schema):
      ├── post          → Blog yazıları
      ├── service       → Hizmet sayfaları içeriği
      ├── caseStudy     → Vaka çalışmaları
      ├── localPage     → Lokal şehir sayfaları
      ├── faq           → SSS soruları (tüm sayfalarda kullanılır)
      ├── testimonial   → Müşteri yorumları
      └── siteSettings  → Site geneli başlık, meta, iletişim bilgileri

Next.js SSR Veri Akışı:
  Request → app/blog/[slug]/page.tsx
          → sanityClient.fetch(groq`...`)   ← her istekte Sanity API'ya sorgu
          → HTML render → Response

Caching Stratejisi (SSR içinde):
  → fetch(..., { next: { revalidate: 0 } })  ← Tam SSR, cache yok
  → Sanity CDN (apiCDN: true) ile API yanıt süresi ~50-100ms
```

### 3.2b SSR Performans Notları
```
⚠️  Tam SSR seçildi → CDN edge cache kullanılmıyor
    Bu nedenle aşağıdaki önlemler zorunludur:

1. Sanity API CDN aktif (apiCDN: true) → API yanıtı ~50ms
2. Vercel Edge Runtime (Node.js yerine) → TTFB ~100ms'ye düşer
3. Görüntüler: Sanity image CDN (imgix) üzerinden → ayrı optimize
4. Response Cache-Control header → "s-maxage=60, stale-while-revalidate"
   (Vercel edge'de 60sn cached, arka planda yenilenir)
5. Veritabanı/API bağlantıları → connection pool (Sanity HTTP/2)

Hedef TTFB (Sanity SSR ile):   < 300ms
Hedef LCP:                      < 2.0s (SSR için revize edildi)
```

### 3.3 On-Page SEO Standartları (Her Sayfa İçin)
```
✅ H1: Hedef keyword ile başlar, tam eşleşme
✅ Title Tag: [Keyword] | SEOROAS — [50-60 karakter]
✅ Meta Description: CTA içerir, [145-160 karakter], keyword geçer
✅ URL: Kısa, Türkçe karakter YOK (ş→s, ı→i, ğ→g, ü→u, ö→o, ç→c)
✅ Canonical: Kendi URL'ini gösterir
✅ H2/H3: LSI keyword'ler ve long-tail variasyonlar
✅ İç linkleme: Minimum 3 iç link (tier hiyerarşisine göre)
✅ Alt text: Tüm görsellerde keyword içerir
✅ Word count: Hizmet sayfaları min 1,500 kelime, blog min 2,000 kelime
✅ Okuma süresi: Header'da göster (blog sayfaları)
✅ Son güncelleme tarihi: Schema ve görsel olarak
```

### 3.4 Schema Markup (Zorunlu)
```json
// Ana Sayfa & Lokal Sayfalar
{
  "@type": "LocalBusiness",
  "name": "SEOROAS",
  "url": "https://seoroas.com",
  "areaServed": "TR",
  "hasOfferCatalog": "SEO Hizmetleri"
}

// Hizmet Sayfaları
{
  "@type": "Service",
  "name": "SEO Hizmeti",
  "provider": { "@type": "LocalBusiness" }
}

// Blog Sayfaları
{
  "@type": "Article",
  "@type": "BreadcrumbList"
}

// Fiyatlar Sayfası
{
  "@type": "FAQPage",
  "@type": "PriceSpecification"
}

// Her sayfada
{
  "@type": "BreadcrumbList",
  "@type": "WebSite" (sitelinks searchbox)
}
```

### 3.5 robots.txt
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Sitemap: https://seoroas.com/sitemap.xml
```

### 3.6 Hreflang
```html
<link rel="alternate" hreflang="tr" href="https://seoroas.com/" />
<link rel="alternate" hreflang="x-default" href="https://seoroas.com/" />
```

---

## 4. İçerik Gereksinimleri (SEO Uzmanı Direktifleri)

### 4.1 Ana Sayfa İçerik Yapısı
```
H1: "Türkiye'nin Güvenilir SEO Ajansı" (seo ajansı keyword)
H2: "SEO Hizmetlerimiz" (seo hizmeti keyword)
H2: "Müşteri Başarı Hikayeleri"
H2: "SEO Neden Önemlidir?"
H2: "Sık Sorulan Sorular" (FAQ Schema — seo fiyatları, seo ajansı sorular)
```

### 4.2 Fiyatlar Sayfası (3,700 arama/ay — P1)
Ana hedef keyword: **seo fiyatları**
```
H1: "SEO Fiyatları 2026 — Türkiye Güncel Paketler"
İçerik: Neden fiyatlar değişir? / Paketler / SSS (15+ soru)
Schema: FAQPage + PriceSpecification
Word count: Min 2,500 kelime
```

### 4.3 Blog İçerik Takvimi (İlk 3 Ay)

**Ay 1 (Kolay keyword'ler, KD < 5):**
- "SEO Danışmanı Nedir? Nasıl Seçilir?" (700 arama, KD:1)
- "SEO Analizi Nasıl Yapılır? Adım Adım Rehber" (500 arama, KD:1)
- "Kurumsal SEO: Büyük Firmalar İçin Kılavuz" (250 arama, KD:2)

**Ay 2 (Orta zorluk):**
- "Arama Motoru Optimizasyonu Nedir? 2026 Rehberi" (700 arama, KD:37)
- "SEO Şirketi Nasıl Seçilir? 10 Kritik Soru"
- "İstanbul'da SEO Hizmeti: Nelere Dikkat Edilmeli?"

**Ay 3 (Long-tail ve lokal):**
- "E-ticaret SEO Rehberi"
- "Lokal SEO Nasıl Yapılır?"
- "[Sektör]-ye Özel SEO Stratejileri" (x5 sektör)

### 4.4 Yazım Standartları
- Türkçe, resmi ama samimi ton
- Cümle başına max 20 kelime
- Her 300 kelimede bir H2/H3
- Data-driven iddialar (kaynak göster)
- "siz/sizin" hitabı (kurumsal güven)
- Gereksiz keyword doldurmama — doğal kullanım

---

## 5. Dönüşüm Optimizasyonu (CRO)

### 5.1 Lead Capture Noktaları
1. **Hero CTA:** "Ücretsiz SEO Analizi Al" — domain input → lead form
2. **Exit Intent Popup:** Blog sayfalarında çıkış niyetinde devreye girer
3. **Inline Blog CTA:** Her 800 kelimede bir, içeriğe özel
4. **Newsletter:** Footer ve ayrı section
5. **Fiyat Sayfası CTA:** "Size Özel Teklif Al" formu
6. **Sticky Footer Mobile:** Her sayfada "Ücretsiz Analiz"

### 5.2 Form Gereksinimleri
```
Lead form alanları:
- Website URL (zorunlu — kalite filtresi)
- Ad Soyad (zorunlu)
- E-posta (zorunlu)
- Telefon (opsiyonel — ama telefon vereni önceliklendir)
- Mesaj (opsiyonel)

Onboarding sonrası:
- Teşekkür sayfası → /tesekkurler/ (conversion tracking için ayrı URL)
- Otomatik e-posta ile 24 saat içinde dönüş garantisi
```

### 5.3 Güven Sinyalleri (Trust Signals)
- Google Partner rozeti
- 200+ tamamlanan proje
- Ortalama %340 trafik artışı rakamı
- Gerçek müşteri logoları (6 adet, grayscale)
- G2 / Google Reviews embed
- "Sözleşmesiz" vurgusu (Türkiye'de güçlü differansiasyon)
- Para iade politikası (ilk 30 gün)

---

## 6. Performans Gereksinimleri

### 6.1 PageSpeed Hedefleri
```
Mobile Lighthouse Score:   > 85  (SSR nedeniyle TTFB etkisi — revize)
Desktop Lighthouse Score:  > 92
Performance:               > 85
Accessibility:             > 95
Best Practices:            100
SEO:                       100

Not: Tam SSR + Sanity kombinasyonunda LCP hedefi 1.5s → 2.0s olarak
     güncellendi. Sanity CDN ve Vercel Edge ile bu hedef ulaşılabilir.
```

### 6.2 Bundle Size Limitleri
```
Initial JS bundle:   < 80KB gzip
CSS:                 < 20KB gzip
HTML (ana sayfa):    < 50KB
Toplam sayfa ağırlığı (ilk yükleme): < 200KB
Toplam sayfa ağırlığı (tam yükleme): < 800KB
```

### 6.3 Görüntü Optimizasyonu
```
Format:     WebP (AVIF fallback ile)
Hero img:   preload, eager loading, LCP optimize
Diğerleri:  loading="lazy", width/height zorunlu (CLS önlemi)
Max boyut:  1200px genişlik (2x srcset ile)
```

---

## 7. Güvenlik & Teknik Gereksinimler

```
✅ HTTPS zorunlu (301 redirect HTTP→HTTPS)
✅ www → non-www redirect (veya tersi, tutarlı)
✅ Hız: CDN ile Türkiye'ye yakın POP (İstanbul/Frankfurt)
✅ Uptime: %99.9 SLA
✅ GDPR/KVKK uyumlu cookie banner
✅ Sitemap: otomatik güncellenir (next-sitemap)
✅ 404 sayfası: özel, sitenin navbar'ı ile
✅ 301 redirect yönetimi: CMS veya next.config.js üzerinden
✅ Security headers: X-Frame-Options, CSP, HSTS
```

---

## 8. Analytics & Tracking

```
Google Analytics 4:
  - Conversion event: form_submit (lead)
  - Conversion event: phone_click
  - E-commerce tracking: fiyat sayfası scroll depth

Google Search Console:
  - Doğrulama kodu meta tag ile
  - Sitemap submission

Ahrefs Rank Tracker:
  - Hedef keyword'ler haftalık takip

Isı Haritası: Microsoft Clarity (ücretsiz, KVKK uyumlu)
```

---

## 9. Başarı Metrikleri (KPI'lar)

| Metrik | 3. Ay Hedefi | 6. Ay Hedefi |
|---|---|---|
| Organik oturum/ay | 500+ | 2,000+ |
| "seo ajansı" sıralaması | Top 20 | Top 10 |
| "seo fiyatları" sıralaması | Top 10 | Top 5 |
| Lead (form dolduran) | 10+/ay | 40+/ay |
| Lighthouse Perf. | 90+ | 95+ |
| Core Web Vitals | Pass | Pass |
