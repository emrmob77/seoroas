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
- [x] `next.config.ts` → image domains (cdn.sanity.io), headers, runtime: 'edge'
- [x] `tailwind.config.ts` → custom colors, fonts (Inter)
- [x] `tsconfig.json` → path aliases (`@/components`, `@/lib`, `@/types`, `@/sanity`)
- [x] `.env.local` → `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_TOKEN`, `RESEND_API_KEY`, `GA_ID`
- [x] ESLint + Prettier + Husky kurulumu
- [x] `src/sanity/client.ts` → Sanity client (apiCDN: true, SSR için)
- [x] `src/sanity/image.ts` → `@sanity/image-url` builder

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
- [x] `post.ts` şeması → title, slug, publishedAt, excerpt, body (Portable Text), seoTitle, seoDescription, mainImage
- [x] `service.ts` şeması → title, slug, shortDesc, body, icon, faqs[]
- [x] `caseStudy.ts` şeması → client, industry, result, body, beforeAfter
- [x] `localPage.ts` şeması → city, slug, title, body, faqs[]
- [x] `faq.ts` şeması → question, answer (Portable Text)
- [x] `testimonial.ts` şeması → author, company, quote, rating
- [x] `siteSettings.ts` → singleton, site geneli bilgiler
- [x] Studio deploy: Embedded Sanity Studio → `/studio` route (next-sanity/studio)

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
- [x] GROQ sorgusu tanımla (`groq` template literal)
- [x] TypeScript tipi tanımla (`Post`, `Service` vb.)
- [x] `sanityFetch()` helper → `fetch(query, { next: { revalidate: 0 } })` — TAM SSR

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
- [x] `app/layout.tsx` → Inter font (next/font), GA4 Script, viewport meta, `export const dynamic = 'force-dynamic'` (tam SSR)
- [x] `lib/seo.ts` → generateMetadata helper (Sanity'den gelen seoTitle/seoDescription kullanır)
- [x] `lib/schema.ts` → LocalBusiness, Service, Article, FAQPage schema factory fonksiyonları
- [x] `lib/portableText.ts` → `@portabletext/react` ile Sanity Portable Text renderer (özel bileşenlerle)
- [x] `components/seo/SchemaOrg.tsx` → JSON-LD script injector
- [x] `next-sitemap.config.js` → Sanity'den tüm slug'ları çeker, sitemap üretir
- [x] Security headers → `next.config.ts` içinde + `Cache-Control: s-maxage=60, stale-while-revalidate`
- [x] robots.txt → `app/robots.ts`
- [x] 404 sayfası → `app/not-found.tsx`
- [x] SSR doğrulama: `export const dynamic = 'force-dynamic'` her `page.tsx`'de

**Test:** `npm run build` hatasız, tüm sayfalar SSR (Static değil), Lighthouse SEO: 100

---

### [FE-01] UI Bileşen Kütüphanesi
**Rol:** Front-end Uzmanı
**Süre:** 8 saat
**Bağımlılık:** MÜH-01, klasör yapısı

Görevler:
- [x] `Button.tsx` → primary, secondary, accent varyantları (design.md spec)
- [x] `Card.tsx` → hover animasyonu ile (transform + shadow)
- [x] `Badge.tsx` → küçük etiket komponenti
- [x] `Input.tsx` → focus ring, error state
- [x] `Accordion.tsx` → FAQ için, CSS only animasyon
- [x] `Breadcrumb.tsx` → BreadcrumbList schema entegre

Storybook veya not: Her bileşen için `/* design.md reference: ... */` yorum satırı ekle.

---

### [FE-02] Header & Navigation
**Rol:** Front-end Uzmanı
**Süre:** 6 saat

Görevler:
- [x] Desktop sticky header (scroll'da shadow ekle)
- [x] Hizmetler mega-menu dropdown (Backlinko Articles dropdown mimarisi)
- [x] Arama ikonu + arama overlay
- [x] "Ücretsiz SEO Analizi" CTA butonu — accent turuncu
- [x] Mobile hamburger → full-screen nav drawer
- [x] Active route highlight
- [x] Logo: SVG inline (0 HTTP isteği)

**Erişilebilirlik:** aria-expanded, aria-haspopup, focus trap mobile drawer

---

### [FE-03] Footer
**Rol:** Front-end Uzmanı
**Süre:** 3 saat

Görevler:
- [x] 4 kolon layout (Logo/About, Hizmetler, Şirket, Sosyal)
- [x] Legal links (Gizlilik, KVKK, Kullanım Şartları)
- [x] Sosyal medya ikonları (Lucide)
- [x] Copyright satırı
- [x] Mobile: 2 kolon → 1 kolon stack

---

## SPRINT 2 — Ana Sayfa (Gün 6-9)

### [SEO-01] Ana Sayfa SEO Brief
**Rol:** SEO Uzmanı
**Süre:** 2 saat
**Çıktı:** `content/homepage-brief.md`

Teslim edilecekler:
- [x] H1 metni (hedef: "seo ajansı")
- [x] Title tag ve meta description
- [x] H2 başlıkları listesi (LSI keyword'ler dahil)
- [x] Hero section CTA metni
- [x] FAQ soruları ve cevapları (10 adet, FAQ Schema için)
- [x] İç link hedefleri haritası

---

### [FE-04] Hero Section
**Rol:** Front-end Uzmanı
**Süre:** 5 saat
**Bağımlılık:** SEO-01, FE-01

Görevler:
- [x] Başlık (H1) → büyük, bold, Inter font
- [x] Alt başlık metni
- [x] Trust badge ("Türkiye'nin #1 SEO Ajansı" / Google Partner)
- [x] Domain input + "Ücretsiz Analiz Al" submit butonu
- [x] 3 adet trust signal satırı (checkbox ikonları)
- [x] Müşteri logoları şeridi (6 logo, grayscale, hover renkli)
- [x] Mobile responsive: full-width input, stacked layout
- [x] **LCP optimizasyonu:** Hero'da `priority={true}` image, no lazy loading
- [x] Arka plan: subtle SVG grid pattern (CSS, 0 HTTP isteği)

---

### [FE-05] Stats Section (Sayılar)
**Rol:** Front-end Uzmanı
**Süre:** 3 saat

- [x] 4 adet rakam kartı (200+ müşteri, %340 trafik artışı, %98 memnuniyet, 7 yıl)
- [x] CountUp animasyonu (Intersection Observer tetiklemeli, lazy)
- [x] Light gray arka plan (#F9FAFB)
- [x] Mobile: 2x2 grid

---

### [FE-06] Hizmetler Section
**Rol:** Front-end Uzmanı
**Süre:** 5 saat

- [x] Section başlığı (H2)
- [x] 6 adet hizmet kartı (3x2 grid)
  - On-Page SEO, Teknik SEO, Link Building, Lokal SEO, E-ticaret SEO, İçerik SEO
- [x] Her kartta: Lucide ikon, başlık, kısa açıklama, "Detay →" linki
- [x] Hover animasyonu (lift + shadow)
- [x] Card bileşenini kullan (FE-01)

---

### [FE-07] Vaka Çalışmaları Section
**Rol:** Front-end Uzmanı
**Süre:** 4 saat

- [x] Büyük + 2 küçük kart layout (masonry benzeri)
- [x] Her vakada: başlık, sektör, sonuç rakamı, okuma linki
- [x] Hover'da görüntü overlay
- [x] "Tüm Vaka Çalışmaları →" CTA

---

### [FE-08] Blog/Rehberler Section
**Rol:** Front-end Uzmanı
**Süre:** 4 saat
(Backlinko "Latest How-To Guides" mimarisi)

- [x] Büyük featured + 3 küçük grid layout
- [x] Yazar adı, tarih, okuma süresi meta
- [x] Lazy loaded görüntüler (WebP)
- [x] "Tüm Rehberleri Gör →" CTA

---

### [FE-09] Newsletter/Lead CTA Section
**Rol:** Front-end Uzmanı
**Süre:** 3 saat

- [x] Koyu mavi arka plan (Primary #1A56DB)
- [x] E-posta input + "Abone Ol" butonu
- [x] Spam disclaimer metni
- [x] Mobile full-width

### [MÜH-04] Lead Form Backend
**Rol:** Yazılım Mühendisi
**Süre:** 4 saat

- [x] `app/api/lead/route.ts` → POST handler
- [x] Resend API ile e-posta bildirimi (yeni lead geldiğinde)
- [x] Honeypot spam koruması (company_fax hidden field — iletişim formu company çakışması düzeltildi)
- [x] Rate limiting (10 istek/dakika/IP)
- [x] Başarılı submit → `/tesekkurler/` yönlendirmesi (client-side fetch + router.push)
- [x] `/tesekkurler` sayfası oluşturuldu (ConversionTracker ile generate_lead event)
- [x] Hata durumu → kullanıcıya anlamlı mesaj + loading state

---

### [FE-10] FAQ Section
**Rol:** Front-end Uzmanı
**Süre:** 3 saat

- [x] Accordion bileşenini kullan (FE-01)
- [x] 10 adet S&C (SEO-01'den gelenler)
- [x] FAQPage Schema JSON-LD enjeksiyonu
- [x] CSS animasyonu (max-height transition)

---

## SPRINT 3 — İç Sayfalar (Gün 10-16)

### [SEO-02] Fiyatlar Sayfası Brief
**Rol:** SEO Uzmanı
**Süre:** 3 saat

- [x] H1: "SEO Fiyatları 2026" ile başlayan başlık
- [x] 3 paket yapısı (Başlangıç, Profesyonel, Kurumsal)
- [x] 15 adet SSS sorusu (seo fiyatları, seo ajansı, ne kadar sürer vb.)
- [x] Title: "SEO Fiyatları 2026 | Türkiye Güncel Paketler | SEOROAS"

---

### [MÜH-05 + FE-11] Fiyatlar Sayfası
**Rol:** Yazılım Mühendisi + Front-end Uzmanı
**Süre:** 6 saat
**Bağımlılık:** SEO-02

- [x] Sayfa şablonu (page.tsx)
- [x] generateMetadata (SEO-02'den)
- [x] PriceSpecification + FAQPage Schema
- [x] 3 kolon paket karşılaştırma tablosu (en popüler vurgulu)
- [x] SSS accordion (15 soru)
- [x] "Size Özel Teklif Al" formu (MÜH-04 API'ını kullan)
- [x] Sticky CTA mobile

---

### [SEO-03 + FE-12] Hizmet Alt Sayfaları (x6)
**Rol:** SEO Uzmanı + Front-end Uzmanı
**Süre:** 12 saat (6 sayfa × 2 saat)

Her hizmet sayfası için:
- [x] SEO brief (H1, meta, H2'ler, FAQ)
- [x] Service Schema
- [x] Sayfa içeriği (min 1,500 kelime)
- [x] Hizmet süreci section (numbered steps)
- [x] Mini case study
- [x] SSS (5 soru, FAQPage Schema)
- [x] CTA bölümü

Sayfalar: on-page-seo, teknik-seo, link-building, lokal-seo, e-ticaret-seo, icerik-seo

---

### [SEO-04 + FE-13] Lokal Sayfalar (x5)
**Rol:** SEO Uzmanı + Front-end Uzmanı
**Süre:** 10 saat (5 şehir × 2 saat)

Her lokal sayfa:
- [x] H1: "[Şehir] SEO Ajansı" (kesin keyword match)
- [x] LocalBusiness Schema (şehire özel areaServed)
- [x] Şehre özel referanslar/istatistikler
- [x] Google Maps embed
- [x] 5 adet şehir özel SSS

Şehirler: İstanbul, Ankara, İzmir, Bursa, Antalya

---

### [MÜH-06 + FE-14] Blog Altyapısı (Sanity + SSR)
**Rol:** Yazılım Mühendisi + Front-end Uzmanı
**Süre:** 8 saat

- [x] `app/blog/[slug]/page.tsx` → `export const dynamic = 'force-dynamic'`  (SSR)
- [x] `getPostBySlug(slug)` GROQ sorgusu → her istekte Sanity'den çek
- [x] `generateMetadata()` → Sanity'deki seoTitle/seoDescription'dan oluştur
- [x] Blog liste sayfası (`/blog/`) → `getAllPosts()` SSR ile
- [x] Blog detay şablonu: Breadcrumb, TOC sidebar, author box, related posts
- [x] `<PortableText>` renderer → Sanity body alanını HTML'e çevirir
- [x] Sanity görüntüleri → `@sanity/image-url` + `next/image` (cdn.sanity.io)
- [x] Article Schema JSON-LD (publishedAt, author Sanity'den)
- [x] Okuma ilerleme çubuğu (scroll %)
- [x] İnline CTA kutuları (Portable Text içinde özel block)
- [x] Sosyal paylaşım butonları

---

### [SEO-05 + İÇERİK] İlk 3 Blog Yazısı → Sanity Studio'ya Gir
**Rol:** SEO Uzmanı
**Süre:** 9 saat (3 yazı × 3 saat)

1. "SEO Danışmanı Nedir? Nasıl Seçilir?" (700 arama, KD:1)
2. "SEO Analizi Nasıl Yapılır?" (500 arama, KD:1)
3. "Kurumsal SEO Nedir?" (250 arama, KD:2)

**WordPress Migration ile 17 yazı Sanity'ye aktarıldı** (scripts/migrate-wp.ts):
- [x] `title` → H1 olacak başlık
- [x] `slug` → URL (Türkçe karakter yok)
- [x] `seoTitle` → 50-60 karakter, keyword ile başlar
- [x] `seoDescription` → 145-160 karakter, CTA içerir
- [x] `body` → Portable Text formatında (HTML'den dönüştürüldü)
- [x] `mainImage` → Featured image (Sanity CDN'e yüklendi, 16/17 yazıda)
- [ ] İç link önerileri: Portable Text içinde `/seo/` linkleri (Sanity Studio'dan manuel düzenleme gerekli)

---

## SPRINT 4 — Optimizasyon & Test (Gün 17-20)

### [MÜH-07] SSR Performans Optimizasyonu
**Rol:** Yazılım Mühendisi
**Süre:** 6 saat

SSR + Sanity özelinde kritik adımlar:
- [x] Sanity client → `useCdn: true` + `perspective: published` + `revalidate: 60`
- [x] `Cache-Control` header → `s-maxage=60, stale-while-revalidate=3600` (Vercel edge layer'da 60sn cache)
- [x] Sanity image URL'lerini `next/image` ile sar → otomatik WebP/AVIF, priority LCP
- [x] Bundle analyzer kuruldu (`@next/bundle-analyzer`, `ANALYZE=true`)
- [x] Sanity GROQ projection optimize → listFields/detailFields ayrımı (readingTime sadece detayda)
- [x] Font preload + fallback + adjustFontFallback ekle
- [x] `next.config.ts` → compress: true, image formats AVIF/WebP, immutable cache

**Hedef TTFB kontrol:** Vercel'de deploy sonrası WebPageTest ile ölç, < 300ms olmalı

---

### [MÜH-08] Teknik SEO Audit
**Rol:** Yazılım Mühendisi + SEO Uzmanı
**Süre:** 4 saat

- [x] Tüm sayfaların canonical tag'larını doğrula (generateSeoMetadata ile)
- [x] Hreflang tag'larını kontrol et (tr + x-default)
- [x] Sitemap.xml doğrula → dinamik `src/app/sitemap.ts` (Sanity blog entegre)
- [x] robots.txt doğrula → /studio/ disallow eklendi
- [x] 12 sayfaya Breadcrumb eklendi (BreadcrumbList Schema)
- [x] /iletisim sayfası oluşturuldu (ContactPage Schema)
- [x] Schema markup test — Tüm sayfaların JSON-LD yapıları doğrulandı (LocalBusiness, WebSite, Service, ProfessionalService, FAQPage, Blog, BreadcrumbList)
- [x] Core Web Vitals → PageSpeed Insights — Perf:96, SEO:100, BP:100, A11y:85→düzeltildi
- [x] Lighthouse audit — FCP:1.3s, LCP:2.4s, TBT:10ms, CLS:0, TTI:2.4s

---

### [FE-15] Responsive & Cross-browser Test
**Rol:** Front-end Uzmanı
**Süre:** 4 saat

Test edilecek:
- [ ] Chrome, Safari, Firefox, Edge (masaüstü) — manuel test gerekli
- [ ] iOS Safari, Chrome Android (mobil) — manuel test gerekli
- [ ] 320px, 375px, 414px, 768px, 1024px, 1280px, 1440px breakpoint'leri — manuel test gerekli
- [x] CLS: 0 — Lighthouse ile doğrulandı
- [ ] Touch target boyutları: min 48x48px — manuel test gerekli
- [ ] Klavye navigasyonu (Tab order, focus visible) — manuel test gerekli

---

### [MÜH-09] KVKK / Cookie Uyumu
**Rol:** Yazılım Mühendisi
**Süre:** 3 saat

- [x] Cookie banner komponenti (tercih kaydet, localStorage)
- [x] GA4 → consent mode v2 entegrasyonu (analytics, ad, ad_user_data, ad_personalization)
- [x] GTM (Google Tag Manager) container entegrasyonu — head script + body noscript
- [x] GTM dataLayer event tracking — form_submit, newsletter_subscribe, generate_lead, consent_update
- [x] Gizlilik Politikası sayfası (`/gizlilik-politikasi/`)
- [x] KVKK Aydınlatma Metni (`/kullanim-sartlari/`)
- [x] Form'larda KVKK onay checkbox'ı

---

### [MÜH-10] Deploy & CI/CD
**Rol:** Yazılım Mühendisi
**Süre:** 3 saat

- [x] GitHub Actions → `next build` + `next lint` + `tsc --noEmit` pipeline
- [x] Vercel production deploy ayarları (seoroas.vercel.app)
- [ ] Custom domain: seoroas.com bağlantısı — Vercel Dashboard'dan yapılacak
- [x] SSL sertifikası (Vercel otomatik)
- [x] Preview deployments (her PR için)
- [x] Environment variables production'da set edildi (SANITY_PROJECT_ID, DATASET, API_TOKEN)
- [x] GSC verification → `NEXT_PUBLIC_GSC_VERIFICATION` env variable ile meta tag
- [x] GA4 tracking → `NEXT_PUBLIC_GA_ID` ile doğrudan gtag.js (GTM yoksa fallback)
- [x] GTM container → `NEXT_PUBLIC_GTM_ID` ile GTM yükleme (GA4 GTM içinden yönetilir)

---

### [MÜH-11] SEO Migration Altyapısı (WordPress → Next.js)
**Rol:** Yazılım Mühendisi
**Süre:** 6 saat
**Durum:** ✅ Tamamlandı

- [x] Sanity `seoFields` object type (noIndex, noFollow, canonical, ogImage, focusKeyword)
- [x] Sanity `redirect` document type (Sanity Studio'dan 301/302 yönetimi)
- [x] Sanity `category` document type + post'a categories referans eklendi
- [x] Mevcut şemalar güncellendi (post, service, localPage, caseStudy → seo object)
- [x] siteSettings genişletildi (defaultOgImage, GA4, GTM, verification kodları, sosyal profiller)
- [x] Sanity Structure Builder ile organize Studio sidebar
- [x] `src/middleware.ts` → Sanity'den dinamik 301 redirect + trailing slash normalize
- [x] `scripts/seed-redirects.ts` → 23 WP migration redirect'i Sanity'ye yüklendi
- [x] `/seo/seo-ajansi` sayfası oluşturuldu
- [x] `/seo/kurumsal-seo` sayfası oluşturuldu
- [x] `lib/seo.ts` güncellendi (noFollow, canonicalUrl override, mergeSanitySeo helper)
- [x] Sitemap, Header, Footer yeni sayfalarla güncellendi
- [x] Sanity Studio Vercel'de çalışır durumda (CORS + env vars)

---

## SPRINT 5 — Lansman Sonrası (Gün 21+)

### [SEO-06] Google Search Console & Analytics Kurulum
**Rol:** SEO Uzmanı
**Süre:** 2 saat

- [x] GSC property oluştur → site verification meta tag siteye eklendi
- [ ] Sitemap GSC'ye gönder — GSC Dashboard'dan manuel
- [x] GA4 / GTM → conversion events yapılandır — generate_lead, form_submit, newsletter_subscribe, consent_update eventleri dataLayer'a push ediliyor
- [ ] GTM container oluştur → GA4, Meta Pixel, TikTok Pixel tag'lerini GTM içinden yapılandır — manuel
- [ ] Hedef keyword listesi oluştur (rank tracking için) — manuel SEO çalışması
- [ ] Başlangıç sıralama snapshot'ı al — manuel SEO çalışması

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
| 0 | MÜH-01 Proje + Sanity kurulumu | Mühendis | ✅ Tamamlandı |
| 0 | MÜH-01b Sanity Studio şemaları | Mühendis | ✅ Tamamlandı |
| 0 | MÜH-01c SSR veri katmanı (GROQ) | Mühendis | ✅ Tamamlandı |
| 0 | MÜH-02 Klasör yapısı | Mühendis | ✅ Tamamlandı |
| 1 | MÜH-03 Layout & SEO altyapısı | Mühendis | ✅ Tamamlandı |
| 1 | FE-01 UI bileşen kütüphanesi | Front-end | ✅ Tamamlandı |
| 1 | FE-02 Header & Navigation | Front-end | ✅ Tamamlandı |
| 1 | FE-03 Footer | Front-end | ✅ Tamamlandı |
| 2 | SEO-01 Ana sayfa brief | SEO Uzmanı | ✅ Tamamlandı |
| 2 | FE-04 Hero Section | Front-end | ✅ Tamamlandı |
| 2 | FE-05 Stats Section | Front-end | ✅ Tamamlandı |
| 2 | FE-06 Hizmetler Section | Front-end | ✅ Tamamlandı |
| 2 | FE-07 Vaka Çalışmaları | Front-end | ✅ Tamamlandı |
| 2 | FE-08 Blog Section | Front-end | ✅ Tamamlandı |
| 2 | FE-09 Newsletter CTA | Front-end | ✅ Tamamlandı |
| 2 | MÜH-04 Lead Form Backend | Mühendis | ✅ Tamamlandı |
| 2 | FE-10 FAQ Section | Front-end | ✅ Tamamlandı |
| 3 | SEO-02 Fiyatlar sayfası brief | SEO Uzmanı | ✅ Tamamlandı |
| 3 | MÜH-05 + FE-11 Fiyatlar sayfası | Mühendis + FE | ✅ Tamamlandı |
| 3 | SEO-03 + FE-12 Hizmet alt sayfaları (x6) | SEO + FE | ✅ Tamamlandı |
| 3 | SEO-04 + FE-13 Lokal sayfalar (x5) | SEO + FE | ✅ Tamamlandı |
| 3 | FE-02b Header & Footer nav güncelleme | Front-end | ✅ Tamamlandı |
| 3 | MÜH-06 + FE-14 Blog altyapısı | Mühendis + FE | ✅ Tamamlandı |
| 3 | SEO-05 Blog içerikleri (WP→Sanity 17 yazı) | SEO + Mühendis | ✅ Tamamlandı |
| 4 | MÜH-07 Performans opt. | Mühendis | ✅ Tamamlandı |
| 4 | MÜH-08 Teknik SEO audit | Mühendis + SEO | ✅ Lighthouse P:96 SEO:100 BP:100 |
| 4 | FE-15 Responsive test | Front-end | 🔶 CLS:0 doğrulandı, cross-browser manuel test bekliyor |
| 4 | MÜH-09 KVKK uyumu | Mühendis | ✅ Consent Mode v2 + GTM entegrasyonu |
| 4 | MÜH-10 Deploy & CI/CD | Mühendis | ✅ Vercel deploy + Studio + GTM + GSC |
| 4 | MÜH-11 SEO Migration Altyapısı | Mühendis | ✅ Sanity SEO fields, 301 redirect, yeni sayfalar |
| 4 | A11y düzeltmeleri | Mühendis + FE | ✅ aria-label, kontrast, heading sırası |
| 4 | Form UX iyileştirmeleri | Mühendis | ✅ fetch+redirect, loading, /tesekkurler, honeypot fix |
| 4 | Newsletter entegrasyonu | Mühendis | ✅ API bağlantısı, Resend Audiences, dataLayer |
| 4 | Meta title/desc optimizasyonu | SEO + Mühendis | ✅ 30 sayfa SEO odaklı title/desc + Sanity override |
| 4 | GTM + GA4 + GSC kurulumu | Mühendis | ✅ GTM container, Consent Mode v2, conversion tracking |
| 4+ | Favicon & Web Manifest | Mühendis | ✅ SVG icon + Apple touch icon + PWA manifest |
| 4+ | i18n Türkçeleştirme | FE | ✅ Hero, CaseStudies, badge'ler Türkçeye çevrildi |
| 4+ | Sanity Menü Yönetimi | Mühendis | ✅ navigation schema + Header/Footer dinamik |
| 4+ | Sayfa SEO Toplu Yönetimi | Mühendis | ✅ pageSeo schema, 30 sayfa seed, sitemap + menü entegrasyonu |
| 4+ | Çift SEOROAS title fix | Mühendis | ✅ buildMetadata template/absolute ayrımı |
| 4+ | Dynamic SEO from Sanity | Mühendis | ✅ generateDynamicSeoMetadata, 30 sayfa async metadata |
| 4+ | Redirect chain optimizasyonu | Mühendis | ✅ Tek 301: www + trailing slash + Sanity redirect |
| 4+ | Blog slug yönlendirmeleri | Mühendis | ✅ 5 yanlış blog URL → doğru landing page |
| 4+ | Taslak sayfa gizleme | Mühendis | ✅ isPublished=false → sitemap + menü + noindex |
| 5 | SEO-06 GSC & Analytics | SEO Uzmanı | 🔶 Kod tamam, sitemap GSC'ye gönderilmeli |
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

## KALAN GÖREVLER (Öncelik Sırasıyla)

### ✅ Tamamlanan Yüksek Öncelikler
| # | Görev | Durum |
|---|-------|-------|
| 1 | Resend domain doğrulama | ✅ DNS TXT/MX/SPF/DKIM kayıtları ekli |
| 2 | Resend Audiences oluştur | ✅ Newsletter API bağlantısı aktif |
| 3 | GTM container oluştur | ✅ GTM-5HKD5GG7 — Consent Mode v2 dahil |
| 4 | GTM tag yapılandırması | ✅ GA4 Config, form_submit, generate_lead, newsletter_subscribe eventleri |
| 5 | Custom domain bağla | ✅ seoroas.com + www.seoroas.com Vercel'e bağlı |
| 6 | GSC verification | ✅ Meta tag eklendi, GSC doğrulandı |
| 7 | Favicon & Web Manifest | ✅ SVG favicon + Apple touch icon + PWA manifest |
| 8 | i18n — İngilizce metinler | ✅ Tüm UI metinleri Türkçeye çevrildi |
| 9 | Çift SEOROAS title sorunu | ✅ buildMetadata düzeltildi, template/absolute ayrımı |
| 10 | Sanity menü yönetimi | ✅ navigation schema + Header/Footer dinamik |
| 11 | Sayfa SEO toplu yönetimi | ✅ pageSeo schema — 30 sayfa Sanity'ye seed edildi |
| 12 | Taslak sayfa gizleme | ✅ isPublished=false → sitemap'ten çıkar + menüden gizlenir + noindex |
| 13 | Redirect loop düzeltme | ✅ /blog/ sonsuz döngü — string URL ile çözüldü |
| 14 | Redirect chain optimizasyonu | ✅ www + trailing slash + Sanity redirect tek 301'de |
| 15 | Blog slug yönlendirmeleri | ✅ /blog/kurumsal-seo → /seo/kurumsal-seo vb. 5 redirect |
| 16 | Vaka çalışmaları link düzeltme | ✅ /vaka-calismalari → /referanslar |
| 17 | Sanity Studio düzenleme | ✅ WordPress-tarzı sidebar (Yazılar, Sayfalar, SEO Ayarları, Ayarlar) |
| 18 | Dynamic SEO metadata | ✅ 30 sayfa generateDynamicSeoMetadata ile Sanity override desteği |
| 19 | Blog dinamik yükleme | ✅ BlogGrid Sanity'den post çekiyor, resimler çalışıyor |

### 🟡 Kalan Orta Öncelikler (Manuel)
| # | Görev | Detay |
|---|-------|-------|
| 1 | GSC sitemap gönder | search.google.com/search-console → Sitemaps → `https://seoroas.com/sitemap.xml` |
| 2 | İç link optimizasyonu | Blog yazılarına Sanity Studio'dan `/seo/` iç linkleri ekle |
| 3 | Cross-browser test | Chrome, Safari, Firefox, Edge + iOS/Android mobil test |
| 4 | Touch target & klavye testi | Min 48x48px, Tab order, focus visible |
| 5 | Schema markup doğrulama | search.google.com/test/rich-results ile tüm sayfaları test et |
| 6 | Cloudflare www kuralı | Eski www redirect rule'u sil (middleware hallediyorsa) |

### 🟢 Düşük Öncelik (Sürekli)
| # | Görev | Detay |
|---|-------|-------|
| 7 | Hedef keyword listesi | Ahrefs/SEMrush ile rank tracking başlat |
| 8 | Başlangıç sıralama snapshot'ı | Mevcut pozisyonları kaydet |
| 9 | Backlink stratejisi | Rakip analizi, guest post, dijital PR, yerel dizin kayıtları |
| 10 | Microsoft Clarity | Isı haritası için Clarity kurulumu (GTM'den yönetilebilir) |
| 11 | Meta Pixel & TikTok Pixel | GTM'den yapılandır (reklam başlayınca) |

---

## YAYINA GİRME KRİTERLERİ (Definition of Done)

Bir görev tamamlanmış sayılmaz, eğer:
- [x] Lighthouse Perf mobile ≥ 90 değilse → ✅ 96
- [x] CLS > 0.05 ise (Layout shift var) → ✅ CLS: 0
- [ ] SEO Uzmanı onayı yoksa (para sayfaları için)
- [ ] Schema markup valid değilse (Rich Results Test)
- [ ] Mobile responsive test geçilmediyse
- [x] `npm run build` hata veriyorsa → ✅ Build başarılı
- [x] Canonical tag eksikse → ✅ Tüm sayfalarda mevcut
- [x] H1 hedef keyword içermiyorsa → ✅ Kontrol edildi
