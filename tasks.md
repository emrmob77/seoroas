# SEOROAS.COM — Geliştirme Görev Listesi
> **Proje:** seoroas.com | Türkiye SEO Ajans Web Sitesi
> **Metodoloji:** Sprint bazlı, 3 paralel rol
> **Roller:** SEO Uzmanı · Yazılım Mühendisi · Front-end Uzmanı

---

## ROL TANIMLARI

### 🔍 SEO Uzmanı
**Sorumluluk:** Tüm içerik kararları, keyword hedefleme, şema işaretlemesi, iç linkleme stratejisi, meta veri standartları.
**Çıktı:** Her sayfa için `seo-brief.md` (H1, title, meta, target keyword, kelime sayısı, iç link hedefleri)
**Onay Yetkisi:** Herhangi bir sayfanın yayına girmeden önce SEO denetimini geçmesi zorunludur.

### 💻 Yazılım Mühendisi
**Sorumluluk:** Next.js altyapı kurulumu, performans mimarisi, API entegrasyonları, form backend, sitemap, Schema JSON-LD injection, CI/CD pipeline.
**Çıktı:** Çalışan, test edilmiş, deploy edilebilir kod tabanı.
**Kural:** Yeni component oluşturulmadan önce tasarım dokümanı (`design.md`) referans alınmalıdır.

### 🎨 Front-end Uzmanı
**Sorumluluk:** Pixel-perfect UI implementasyonu, Tailwind bileşen kütüphanesi, animasyonlar, responsive düzenleme, CLS sıfırlama.
**Araçlar:** Tailwind CSS v4, Lucide React, Framer Motion (sadece gerekli yerlerde)
**Kural:** Tüm bileşenler `design.md` renk paleti ve tipografi sistemine uygun olmalıdır.

---

## SPRINT 0 — Proje Kurulumu (Gün 1-2)

### [MÜH-01] Proje İskeleti Oluştur
**Rol:** Yazılım Mühendisi
**Süre:** 4 saat
**Öncelik:** 🔴 Kritik

```bash
# Komutlar:
npx create-next-app@latest seoroas --typescript --tailwind --app --src-dir
cd seoroas
npm install lucide-react @vercel/analytics next-sitemap
npm install next-sanity @sanity/image-url @sanity/client
npm install -D @types/node
npx sanity@latest init --env   # Sanity projesi oluştur, .env'e yazar
```

Yapılandırma:
- [ ] `next.config.ts` → image domains (cdn.sanity.io), headers, runtime: 'edge'
- [ ] `tailwind.config.ts` → custom colors, fonts (Inter)
- [ ] `tsconfig.json` → path aliases (`@/components`, `@/lib`, `@/types`, `@/sanity`)
- [ ] `.env.local` → `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_TOKEN`, `RESEND_API_KEY`, `GA_ID`
- [ ] ESLint + Prettier + Husky kurulumu
- [ ] `src/sanity/client.ts` → Sanity client (apiCDN: true, SSR için)
- [ ] `src/sanity/image.ts` → `@sanity/image-url` builder

**Çıktı:** `npm run dev` çalışıyor, Sanity projesi oluşturulmuş, Vercel'e bağlı

---

### [MÜH-01b] Sanity Studio Kurulumu
**Rol:** Yazılım Mühendisi
**Süre:** 4 saat
**Bağımlılık:** MÜH-01 tamamlanmış olmalı

```
sanity/
├── schemaTypes/
│   ├── post.ts          → Blog yazısı şeması
│   ├── service.ts       → Hizmet sayfası şeması
│   ├── caseStudy.ts     → Vaka çalışması şeması
│   ├── localPage.ts     → Lokal şehir sayfası şeması
│   ├── faq.ts           → SSS sorusu şeması
│   ├── testimonial.ts   → Müşteri yorumu şeması
│   ├── siteSettings.ts  → Site ayarları (singleton)
│   └── index.ts         → Tüm şemaları export eder
├── sanity.config.ts     → Studio yapılandırması
└── sanity.cli.ts        → CLI yapılandırması
```

Görevler:
- [ ] `post.ts` şeması → title, slug, publishedAt, excerpt, body (Portable Text), seoTitle, seoDescription, mainImage
- [ ] `service.ts` şeması → title, slug, shortDesc, body, icon, faqs[]
- [ ] `caseStudy.ts` şeması → client, industry, result, body, beforeAfter
- [ ] `localPage.ts` şeması → city, slug, title, body, faqs[]
- [ ] `faq.ts` şeması → question, answer (Portable Text)
- [ ] `testimonial.ts` şeması → author, company, quote, rating
- [ ] `siteSettings.ts` → singleton, site geneli bilgiler
- [ ] Studio deploy: `npx sanity deploy` → `studio.seoroas.com`

**Çıktı:** Sanity Studio erişilebilir, tüm şemalar tanımlı, ilk test içeriği girilmiş

---

### [MÜH-01c] SSR Veri Katmanı (GROQ Queries)
**Rol:** Yazılım Mühendisi
**Süre:** 3 saat

```
src/sanity/
├── client.ts         → createClient({ apiVersion, apiCDN: true, useCdn: true })
├── image.ts          → imageUrlBuilder
└── queries/
    ├── posts.ts      → getAllPosts, getPostBySlug, getRelatedPosts
    ├── services.ts   → getAllServices, getServiceBySlug
    ├── caseStudies.ts
    ├── localPages.ts
    └── settings.ts   → getSiteSettings
```

Her query dosyasında:
- [ ] GROQ sorgusu tanımla (`groq` template literal)
- [ ] TypeScript tipi tanımla (`Post`, `Service` vb.)
- [ ] `sanityFetch()` helper → `fetch(query, { next: { revalidate: 0 } })` — TAM SSR

**Kritik not:** `revalidate: 0` → Her istekte Sanity API'ya sorgu gönderir. Sanity CDN sayesinde ~50-100ms'de yanıt döner.

---

### [MÜH-02] Klasör Yapısı
**Rol:** Yazılım Mühendisi
**Süre:** 1 saat

```
src/
├── app/
│   ├── layout.tsx          (Root layout: fonts, analytics, Schema)
│   ├── page.tsx            (Ana sayfa)
│   ├── seo-fiyatlari/
│   │   └── page.tsx
│   ├── seo-hizmetleri/
│   │   ├── page.tsx
│   │   ├── on-page-seo/page.tsx
│   │   ├── teknik-seo/page.tsx
│   │   ├── link-building/page.tsx
│   │   ├── lokal-seo/page.tsx
│   │   └── e-ticaret-seo/page.tsx
│   ├── istanbul-seo-ajansi/page.tsx
│   ├── ankara-seo-ajansi/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── vaka-calismalari/page.tsx
│   ├── hakkimizda/page.tsx
│   ├── iletisim/page.tsx
│   └── tesekkurler/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Breadcrumb.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── Services.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── BlogGrid.tsx
│   │   ├── NewsletterCTA.tsx
│   │   └── FAQ.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   └── Accordion.tsx
│   └── seo/
│       ├── SchemaOrg.tsx
│       └── MetaTags.tsx
├── sanity/
│   ├── client.ts           (Sanity SSR client)
│   ├── image.ts            (Image URL builder)
│   └── queries/            (GROQ sorguları)
│       ├── posts.ts
│       ├── services.ts
│       ├── caseStudies.ts
│       ├── localPages.ts
│       └── settings.ts
├── lib/
│   ├── schema.ts           (Schema JSON-LD factories)
│   ├── seo.ts              (Meta helper functions)
│   └── portableText.ts     (Sanity Portable Text → HTML renderer)
└── types/
    ├── sanity.ts           (Sanity döküman tipleri)
    └── index.ts
```

---

## SPRINT 1 — Temel Altyapı (Gün 3-5)

### [MÜH-03] Global Layout & SEO Altyapısı
**Rol:** Yazılım Mühendisi
**Süre:** 6 saat
**Bağımlılık:** MÜH-01, MÜH-01b, MÜH-01c tamamlanmış olmalı

Görevler:
- [ ] `app/layout.tsx` → Inter font (next/font), GA4 Script, viewport meta, `export const dynamic = 'force-dynamic'` (tam SSR)
- [ ] `lib/seo.ts` → generateMetadata helper (Sanity'den gelen seoTitle/seoDescription kullanır)
- [ ] `lib/schema.ts` → LocalBusiness, Service, Article, FAQPage schema factory fonksiyonları
- [ ] `lib/portableText.ts` → `@portabletext/react` ile Sanity Portable Text renderer (özel bileşenlerle)
- [ ] `components/seo/SchemaOrg.tsx` → JSON-LD script injector
- [ ] `next-sitemap.config.js` → Sanity'den tüm slug'ları çeker, sitemap üretir
- [ ] Security headers → `next.config.ts` içinde + `Cache-Control: s-maxage=60, stale-while-revalidate`
- [ ] robots.txt → `app/robots.ts`
- [ ] 404 sayfası → `app/not-found.tsx`
- [ ] SSR doğrulama: `export const dynamic = 'force-dynamic'` her `page.tsx`'de

**Test:** `npm run build` hatasız, tüm sayfalar SSR (Static değil), Lighthouse SEO: 100

---

### [FE-01] UI Bileşen Kütüphanesi
**Rol:** Front-end Uzmanı
**Süre:** 8 saat
**Bağımlılık:** MÜH-01, klasör yapısı

Görevler:
- [ ] `Button.tsx` → primary, secondary, accent varyantları (design.md spec)
- [ ] `Card.tsx` → hover animasyonu ile (transform + shadow)
- [ ] `Badge.tsx` → küçük etiket komponenti
- [ ] `Input.tsx` → focus ring, error state
- [ ] `Accordion.tsx` → FAQ için, CSS only animasyon
- [ ] `Breadcrumb.tsx` → BreadcrumbList schema entegre

Storybook veya not: Her bileşen için `/* design.md reference: ... */` yorum satırı ekle.

---

### [FE-02] Header & Navigation
**Rol:** Front-end Uzmanı
**Süre:** 6 saat

Görevler:
- [ ] Desktop sticky header (scroll'da shadow ekle)
- [ ] Hizmetler mega-menu dropdown (Backlinko Articles dropdown mimarisi)
- [ ] Arama ikonu + arama overlay
- [ ] "Ücretsiz SEO Analizi" CTA butonu — accent turuncu
- [ ] Mobile hamburger → full-screen nav drawer
- [ ] Active route highlight
- [ ] Logo: SVG inline (0 HTTP isteği)

**Erişilebilirlik:** aria-expanded, aria-haspopup, focus trap mobile drawer

---

### [FE-03] Footer
**Rol:** Front-end Uzmanı
**Süre:** 3 saat

Görevler:
- [ ] 4 kolon layout (Logo/About, Hizmetler, Şirket, Sosyal)
- [ ] Legal links (Gizlilik, KVKK, Kullanım Şartları)
- [ ] Sosyal medya ikonları (Lucide)
- [ ] Copyright satırı
- [ ] Mobile: 2 kolon → 1 kolon stack

---

## SPRINT 2 — Ana Sayfa (Gün 6-9)

### [SEO-01] Ana Sayfa SEO Brief
**Rol:** SEO Uzmanı
**Süre:** 2 saat
**Çıktı:** `content/homepage-brief.md`

Teslim edilecekler:
- [ ] H1 metni (hedef: "seo ajansı")
- [ ] Title tag ve meta description
- [ ] H2 başlıkları listesi (LSI keyword'ler dahil)
- [ ] Hero section CTA metni
- [ ] FAQ soruları ve cevapları (10 adet, FAQ Schema için)
- [ ] İç link hedefleri haritası

---

### [FE-04] Hero Section
**Rol:** Front-end Uzmanı
**Süre:** 5 saat
**Bağımlılık:** SEO-01, FE-01

Görevler:
- [ ] Başlık (H1) → büyük, bold, Inter font
- [ ] Alt başlık metni
- [ ] Trust badge ("Türkiye'nin #1 SEO Ajansı" / Google Partner)
- [ ] Domain input + "Ücretsiz Analiz Al" submit butonu
- [ ] 3 adet trust signal satırı (checkbox ikonları)
- [ ] Müşteri logoları şeridi (6 logo, grayscale, hover renkli)
- [ ] Mobile responsive: full-width input, stacked layout
- [ ] **LCP optimizasyonu:** Hero'da `priority={true}` image, no lazy loading
- [ ] Arka plan: subtle SVG grid pattern (CSS, 0 HTTP isteği)

---

### [FE-05] Stats Section (Sayılar)
**Rol:** Front-end Uzmanı
**Süre:** 3 saat

- [ ] 4 adet rakam kartı (200+ müşteri, %340 trafik artışı, %98 memnuniyet, 7 yıl)
- [ ] CountUp animasyonu (Intersection Observer tetiklemeli, lazy)
- [ ] Light gray arka plan (#F9FAFB)
- [ ] Mobile: 2x2 grid

---

### [FE-06] Hizmetler Section
**Rol:** Front-end Uzmanı
**Süre:** 5 saat

- [ ] Section başlığı (H2)
- [ ] 6 adet hizmet kartı (3x2 grid)
  - On-Page SEO, Teknik SEO, Link Building, Lokal SEO, E-ticaret SEO, İçerik SEO
- [ ] Her kartta: Lucide ikon, başlık, kısa açıklama, "Detay →" linki
- [ ] Hover animasyonu (lift + shadow)
- [ ] Card bileşenini kullan (FE-01)

---

### [FE-07] Vaka Çalışmaları Section
**Rol:** Front-end Uzmanı
**Süre:** 4 saat

- [ ] Büyük + 2 küçük kart layout (masonry benzeri)
- [ ] Her vakada: başlık, sektör, sonuç rakamı, okuma linki
- [ ] Hover'da görüntü overlay
- [ ] "Tüm Vaka Çalışmaları →" CTA

---

### [FE-08] Blog/Rehberler Section
**Rol:** Front-end Uzmanı
**Süre:** 4 saat
(Backlinko "Latest How-To Guides" mimarisi)

- [ ] Büyük featured + 3 küçük grid layout
- [ ] Yazar adı, tarih, okuma süresi meta
- [ ] Lazy loaded görüntüler (WebP)
- [ ] "Tüm Rehberleri Gör →" CTA

---

### [FE-09] Newsletter/Lead CTA Section
**Rol:** Front-end Uzmanı
**Süre:** 3 saat

- [ ] Koyu mavi arka plan (Primary #1A56DB)
- [ ] E-posta input + "Abone Ol" butonu
- [ ] Spam disclaimer metni
- [ ] Mobile full-width

### [MÜH-04] Lead Form Backend
**Rol:** Yazılım Mühendisi
**Süre:** 4 saat

- [ ] `app/api/lead/route.ts` → POST handler
- [ ] Resend API ile e-posta bildirimi (yeni lead geldiğinde)
- [ ] Honeypot spam koruması
- [ ] Rate limiting (10 istek/dakika/IP)
- [ ] Başarılı submit → `/tesekkurler/` yönlendirmesi (GA4 conversion)
- [ ] Hata durumu → kullanıcıya anlamlı mesaj

---

### [FE-10] FAQ Section
**Rol:** Front-end Uzmanı
**Süre:** 3 saat

- [ ] Accordion bileşenini kullan (FE-01)
- [ ] 10 adet S&C (SEO-01'den gelenler)
- [ ] FAQPage Schema JSON-LD enjeksiyonu
- [ ] CSS animasyonu (max-height transition)

---

## SPRINT 3 — İç Sayfalar (Gün 10-16)

### [SEO-02] Fiyatlar Sayfası Brief
**Rol:** SEO Uzmanı
**Süre:** 3 saat

- [ ] H1: "SEO Fiyatları 2026" ile başlayan başlık
- [ ] 3 paket yapısı (Başlangıç, Profesyonel, Kurumsal)
- [ ] 15 adet SSS sorusu (seo fiyatları, seo ajansı, ne kadar sürer vb.)
- [ ] Title: "SEO Fiyatları 2026 | Türkiye Güncel Paketler | SEOROAS"

---

### [MÜH-05 + FE-11] Fiyatlar Sayfası
**Rol:** Yazılım Mühendisi + Front-end Uzmanı
**Süre:** 6 saat
**Bağımlılık:** SEO-02

- [ ] Sayfa şablonu (page.tsx)
- [ ] generateMetadata (SEO-02'den)
- [ ] PriceSpecification + FAQPage Schema
- [ ] 3 kolon paket karşılaştırma tablosu (en popüler vurgulu)
- [ ] SSS accordion (15 soru)
- [ ] "Size Özel Teklif Al" formu (MÜH-04 API'ını kullan)
- [ ] Sticky CTA mobile

---

### [SEO-03 + FE-12] Hizmet Alt Sayfaları (x6)
**Rol:** SEO Uzmanı + Front-end Uzmanı
**Süre:** 12 saat (6 sayfa × 2 saat)

Her hizmet sayfası için:
- [ ] SEO brief (H1, meta, H2'ler, FAQ)
- [ ] Service Schema
- [ ] Sayfa içeriği (min 1,500 kelime)
- [ ] Hizmet süreci section (numbered steps)
- [ ] Mini case study
- [ ] SSS (5 soru, FAQPage Schema)
- [ ] CTA bölümü

Sayfalar: on-page-seo, teknik-seo, link-building, lokal-seo, e-ticaret-seo, icerik-seo

---

### [SEO-04 + FE-13] Lokal Sayfalar (x5)
**Rol:** SEO Uzmanı + Front-end Uzmanı
**Süre:** 10 saat (5 şehir × 2 saat)

Her lokal sayfa:
- [ ] H1: "[Şehir] SEO Ajansı" (kesin keyword match)
- [ ] LocalBusiness Schema (şehire özel areaServed)
- [ ] Şehre özel referanslar/istatistikler
- [ ] Google Maps embed
- [ ] 5 adet şehir özel SSS

Şehirler: İstanbul, Ankara, İzmir, Bursa, Antalya

---

### [MÜH-06 + FE-14] Blog Altyapısı (Sanity + SSR)
**Rol:** Yazılım Mühendisi + Front-end Uzmanı
**Süre:** 8 saat

- [ ] `app/blog/[slug]/page.tsx` → `export const dynamic = 'force-dynamic'`  (SSR)
- [ ] `getPostBySlug(slug)` GROQ sorgusu → her istekte Sanity'den çek
- [ ] `generateMetadata()` → Sanity'deki seoTitle/seoDescription'dan oluştur
- [ ] Blog liste sayfası (`/blog/`) → `getAllPosts()` SSR ile
- [ ] Blog detay şablonu: Breadcrumb, TOC sidebar, author box, related posts
- [ ] `<PortableText>` renderer → Sanity body alanını HTML'e çevirir
- [ ] Sanity görüntüleri → `@sanity/image-url` + `next/image` (cdn.sanity.io)
- [ ] Article Schema JSON-LD (publishedAt, author Sanity'den)
- [ ] Okuma ilerleme çubuğu (scroll %)
- [ ] İnline CTA kutuları (Portable Text içinde özel block)
- [ ] Sosyal paylaşım butonları

---

### [SEO-05 + İÇERİK] İlk 3 Blog Yazısı → Sanity Studio'ya Gir
**Rol:** SEO Uzmanı
**Süre:** 9 saat (3 yazı × 3 saat)

1. "SEO Danışmanı Nedir? Nasıl Seçilir?" (700 arama, KD:1)
2. "SEO Analizi Nasıl Yapılır?" (500 arama, KD:1)
3. "Kurumsal SEO Nedir?" (250 arama, KD:2)

Her yazı (Sanity Studio'da doldurulacak alanlar):
- [ ] `title` → H1 olacak başlık
- [ ] `slug` → URL (Türkçe karakter yok)
- [ ] `seoTitle` → 50-60 karakter, keyword ile başlar
- [ ] `seoDescription` → 145-160 karakter, CTA içerir
- [ ] `body` → Min 2,000 kelime, Portable Text editörde
- [ ] `mainImage` → Featured image (Sanity CDN'e yüklenir, otomatik WebP)
- [ ] İç link önerileri: Portable Text içinde `/seo-hizmetleri/` linkleri

---

## SPRINT 4 — Optimizasyon & Test (Gün 17-20)

### [MÜH-07] SSR Performans Optimizasyonu
**Rol:** Yazılım Mühendisi
**Süre:** 6 saat

SSR + Sanity özelinde kritik adımlar:
- [ ] Sanity client → `useCdn: true` + `apiCDN: true` (API yanıt ~50ms)
- [ ] `Cache-Control` header → `s-maxage=60, stale-while-revalidate=3600` (Vercel edge layer'da 60sn cache)
- [ ] Vercel Edge Runtime → `export const runtime = 'edge'` (Node yerine, TTFB ~100ms)
- [ ] Sanity image URL'lerini `next/image` ile sar → otomatik WebP, lazy load
- [ ] Bundle analyzer çalıştır (`@next/bundle-analyzer`)
- [ ] Sanity GROQ projection optimize et → sadece gereken alanları çek (bandwidth azalt)
- [ ] Font preload ekle (`<link rel="preload">`)
- [ ] `next.config.ts` → compress: true

**Hedef TTFB kontrol:** Vercel'de deploy sonrası WebPageTest ile ölç, < 300ms olmalı

---

### [MÜH-08] Teknik SEO Audit
**Rol:** Yazılım Mühendisi + SEO Uzmanı
**Süre:** 4 saat

- [ ] Tüm sayfaların canonical tag'larını doğrula
- [ ] Hreflang tag'larını kontrol et
- [ ] 404 linkleri tara (iç linkler)
- [ ] Sitemap.xml doğrula (tüm sayfalar var mı?)
- [ ] robots.txt doğrula
- [ ] Schema markup test (Google Rich Results Test)
- [ ] Core Web Vitals → PageSpeed Insights (mobile + desktop)
- [ ] Lighthouse audit tüm sayfalar için

---

### [FE-15] Responsive & Cross-browser Test
**Rol:** Front-end Uzmanı
**Süre:** 4 saat

Test edilecek:
- [ ] Chrome, Safari, Firefox, Edge (masaüstü)
- [ ] iOS Safari, Chrome Android (mobil)
- [ ] 320px, 375px, 414px, 768px, 1024px, 1280px, 1440px breakpoint'leri
- [ ] CLS: Hiç layout shift yok (Chrome DevTools Layout Shift Regions)
- [ ] Touch target boyutları: min 48x48px
- [ ] Klavye navigasyonu (Tab order, focus visible)

---

### [MÜH-09] KVKK / Cookie Uyumu
**Rol:** Yazılım Mühendisi
**Süre:** 3 saat

- [ ] Cookie banner komponenti (tercih kaydet, localStorage)
- [ ] GA4 → consent mode v2 entegrasyonu
- [ ] Gizlilik Politikası sayfası (`/gizlilik-politikasi/`)
- [ ] KVKK Aydınlatma Metni
- [ ] Form'larda KVKK onay checkbox'ı

---

### [MÜH-10] Deploy & CI/CD
**Rol:** Yazılım Mühendisi
**Süre:** 3 saat

- [ ] GitHub Actions → `next build` + `next lint` pipeline
- [ ] Vercel production deploy ayarları
- [ ] Custom domain: seoroas.com bağlantısı
- [ ] SSL sertifikası (Vercel otomatik)
- [ ] Preview deployments (her PR için)
- [ ] Environment variables production'da set edildi

---

## SPRINT 5 — Lansman Sonrası (Gün 21+)

### [SEO-06] Google Search Console & Analytics Kurulum
**Rol:** SEO Uzmanı
**Süre:** 2 saat

- [ ] GSC property oluştur → site verification
- [ ] Sitemap GSC'ye gönder
- [ ] GA4 → conversion events yapılandır (form_submit, phone_click)
- [ ] Hedef keyword listesi oluştur (rank tracking için)
- [ ] Başlangıç sıralama snapshot'ı al

---

### [SEO-07] Backlink Stratejisi Başlatma
**Rol:** SEO Uzmanı
**Süre:** Sürekli (haftalık 3 saat)

- [ ] Rakip backlink analizi (Ahrefs site explorer)
- [ ] Türk SEO blogları için guest post listesi
- [ ] Dijital PR: "Türkiye SEO İstatistikleri 2026" içeriği planla
- [ ] Yerel dizin kayıtları (Yandex, Google My Business, Yelp TR)
- [ ] İç linkleme fırsatları audit (her yeni sayfa için)

---

## GÖREV DURUMU TAKİP

| Sprint | Görev | Rol | Durum |
|---|---|---|---|
| 0 | MÜH-01 Proje + Sanity kurulumu | Mühendis | ⬜ Bekliyor |
| 0 | MÜH-01b Sanity Studio şemaları | Mühendis | ⬜ Bekliyor |
| 0 | MÜH-01c SSR veri katmanı (GROQ) | Mühendis | ⬜ Bekliyor |
| 0 | MÜH-02 Klasör yapısı | Mühendis | ⬜ Bekliyor |
| 1 | MÜH-03 Layout & SEO altyapısı | Mühendis | ⬜ Bekliyor |
| 1 | FE-01 UI bileşen kütüphanesi | Front-end | ⬜ Bekliyor |
| 1 | FE-02 Header & Navigation | Front-end | ⬜ Bekliyor |
| 1 | FE-03 Footer | Front-end | ⬜ Bekliyor |
| 2 | SEO-01 Ana sayfa brief | SEO Uzmanı | ⬜ Bekliyor |
| 2 | FE-04 Hero Section | Front-end | ⬜ Bekliyor |
| 2 | FE-05 Stats Section | Front-end | ⬜ Bekliyor |
| 2 | FE-06 Hizmetler Section | Front-end | ⬜ Bekliyor |
| 2 | FE-07 Vaka Çalışmaları | Front-end | ⬜ Bekliyor |
| 2 | FE-08 Blog Section | Front-end | ⬜ Bekliyor |
| 2 | FE-09 Newsletter CTA | Front-end | ⬜ Bekliyor |
| 2 | MÜH-04 Lead Form Backend | Mühendis | ⬜ Bekliyor |
| 2 | FE-10 FAQ Section | Front-end | ⬜ Bekliyor |
| 3 | SEO-02 Fiyatlar sayfası brief | SEO Uzmanı | ⬜ Bekliyor |
| 3 | MÜH-05 + FE-11 Fiyatlar sayfası | Mühendis + FE | ⬜ Bekliyor |
| 3 | SEO-03 + FE-12 Hizmet alt sayfaları | SEO + FE | ⬜ Bekliyor |
| 3 | SEO-04 + FE-13 Lokal sayfalar | SEO + FE | ⬜ Bekliyor |
| 3 | MÜH-06 + FE-14 Blog altyapısı | Mühendis + FE | ⬜ Bekliyor |
| 3 | SEO-05 İlk 3 blog yazısı | SEO Uzmanı | ⬜ Bekliyor |
| 4 | MÜH-07 Performans opt. | Mühendis | ⬜ Bekliyor |
| 4 | MÜH-08 Teknik SEO audit | Mühendis + SEO | ⬜ Bekliyor |
| 4 | FE-15 Responsive test | Front-end | ⬜ Bekliyor |
| 4 | MÜH-09 KVKK uyumu | Mühendis | ⬜ Bekliyor |
| 4 | MÜH-10 Deploy & CI/CD | Mühendis | ⬜ Bekliyor |
| 5 | SEO-06 GSC & Analytics | SEO Uzmanı | ⬜ Bekliyor |
| 5 | SEO-07 Backlink stratejisi | SEO Uzmanı | ⬜ Bekliyor |

---

## BAĞIMLILIK HARİTASI

```
MÜH-01 (Next.js + Sanity npm kurulumu)
   ↓
MÜH-01b (Sanity şemaları) + MÜH-01c (GROQ queries)
   ↓
MÜH-02 (Klasör yapısı) → MÜH-03 (Layout + SSR altyapısı)
                              ↓
                     FE-01 (UI bileşenler) → FE-02 (Header), FE-03 (Footer)
                              ↓
                     SEO-01 → FE-04 (Hero), FE-05..FE-10
                              ↓
                     MÜH-04 (Form backend) ──→ FE-04 (entegrasyon)
                              ↓
              SEO-02 → MÜH-05+FE-11 (Fiyatlar — Sanity'den çeker)
              SEO-03 → FE-12 (Hizmetler — Sanity service şeması)
              SEO-04 → FE-13 (Lokal — Sanity localPage şeması)
                              ↓
              MÜH-06+FE-14 (Blog — Sanity post şeması + SSR)
                              ↓
              SEO-05 (İçerikleri Sanity Studio'ya gir)
                              ↓
              MÜH-07 (SSR perf opt.) + MÜH-08 + FE-15 + MÜH-09
                              ↓
              MÜH-10 (Deploy — Vercel + studio.seoroas.com)
                              ↓
              SEO-06, SEO-07
```

---

## YAYINA GİRME KRİTERLERİ (Definition of Done)

Bir görev tamamlanmış sayılmaz, eğer:
- [ ] Lighthouse Perf mobile ≥ 90 değilse
- [ ] CLS > 0.05 ise (Layout shift var)
- [ ] SEO Uzmanı onayı yoksa (para sayfaları için)
- [ ] Schema markup valid değilse (Rich Results Test)
- [ ] Mobile responsive test geçilmediyse
- [ ] `npm run build` hata veriyorsa
- [ ] Canonical tag eksikse
- [ ] H1 hedef keyword içermiyorsa
