# SEOROAS.COM — Design Specification
> **Rol:** Front-end Uzmanı | Google Stitch Tasarım Sistemi
> **Kaynak Mimari:** Backlinko.com analizi (Mart 2026)
> **Hedef:** Türkiye'de SEO ajans aramalarında #1 sıralanacak, sub-1s yükleme süreli, dönüşüm odaklı web sitesi

---

## 1. Design System — Temel İlkeler

### Tasarım Felsefesi
Backlinko'nun kanıtlanmış mimarisini baz alarak **Otorite + Güven + Hız** üçgeninde konumlanan, Türk pazarına uyarlanmış bir tasarım sistemi. Gereksiz görsellik yerine içerik hiyerarşisi ve CTA dönüşümü önceliklidir.

### Renk Paleti
```
Primary:    #1A56DB  (Güven mavisi — SEO otoritesi)
Accent:     #F97316  (Turuncu — CTA, dikkat çekici öğeler)
Dark:       #111827  (Başlıklar, ana metin)
Gray:       #6B7280  (İkincil metin, meta bilgi)
Light:      #F9FAFB  (Section arka planları)
White:      #FFFFFF  (Kart arka planları, hero)
Success:    #10B981  (Sonuçlar, onay ikonları)
Border:     #E5E7EB  (Kart sınırları, ayraçlar)
```

### Tipografi
```
Font Ailesi:   Inter (Google Fonts — variable font, tek HTTP isteği)
H1:            48px / 700 weight / line-height: 1.15 / letter-spacing: -0.02em
H2:            36px / 700 weight / line-height: 1.2
H3:            24px / 600 weight / line-height: 1.3
Body:          16px / 400 weight / line-height: 1.7
Small/Meta:    14px / 400 weight / color: Gray
CTA Button:    16px / 600 weight
```

### Boşluk Sistemi (8px Grid)
```
xs:   4px   sm: 8px   md: 16px   lg: 24px
xl: 32px   2xl: 48px  3xl: 64px  4xl: 96px
Section padding: 80px top/bottom (desktop), 48px (mobile)
Container max-width: 1200px | padding: 0 24px
```

---

## 2. Sayfa Mimarisi (Backlinko Sitemesi Uyarlaması)

### 2.1 Global Header
```
┌─────────────────────────────────────────────────────────┐
│ [SEOROAS Logo]   [Hizmetler▼] [Blog] [Fiyatlar] [Hakkımızda]   [Ücretsiz Analiz →] │
└─────────────────────────────────────────────────────────┘
```
- **Sticky header** — scroll'da beyaz arka plan + hafif shadow
- Logo: SVG (inline, 0 HTTP isteği)
- Nav linkler: font-weight 500, hover: Primary blue underline
- Hizmetler dropdown: Mega-menu (Backlinko Articles dropdown mantığı)
  - On-Page SEO, Teknik SEO, Link Building, Lokal SEO, E-ticaret SEO
- **Primary CTA:** "Ücretsiz SEO Analizi" — Accent turuncu button, sağ köşe
- Mobile: Hamburger menu, full-screen drawer

### 2.2 Ana Sayfa Layout

#### HERO SECTION
```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│   [Küçük badge: "Türkiye'nin #1 SEO Ajansı"]            │
│                                                          │
│   Google'da Rakiplerinizi                                │
│   Geride Bırakın                                         │
│   [Alt başlık: Kanıtlanmış SEO stratejileriyle...]      │
│                                                          │
│   [Domain giriş kutusu] [Ücretsiz Analiz Al →]         │
│                                                          │
│   ✓ 3 günde rapor  ✓ Para iade garantisi  ✓ 200+ müşteri│
│                                                          │
│   [Müşteri logoları: 6 logo şeridi]                     │
│                                                          │
└──────────────────────────────────────────────────────────┘
```
- Background: Beyaz, sağda subtle grid pattern (SVG)
- Domain input + CTA: Backlinko'nun tool embed mantığı (interaktif lead capture)
- Trust signals: 3 adet checkbox satırı
- Logo şeridi: grayscale, hover'da renkli

#### SONEÇLERİ SECTION (Numbers Section)
```
┌──────────────────────────────────────────────────────────┐
│  [200+]        [%340 Ort.]     [98%]        [7 Yıl]     │
│  Mutlu Müşteri Organik Trafik  Müşteri Mem. Deneyim     │
└──────────────────────────────────────────────────────────┘
```
- Light gray background (#F9FAFB)
- Sayı animasyonu: countUp.js (3KB, lazy loaded)

#### HİZMETLER SECTION
```
┌──────────────────────────────────────────────────────────┐
│  Başlık: "Hangi SEO Hizmetine İhtiyacınız Var?"          │
│                                                          │
│  [Kart 1]        [Kart 2]        [Kart 3]               │
│  On-Page SEO     Teknik SEO      Link Building           │
│  [ikon]          [ikon]          [ikon]                  │
│  [açıklama]      [açıklama]      [açıklama]             │
│  [Detay →]       [Detay →]       [Detay →]              │
│                                                          │
│  [Kart 4]        [Kart 5]        [Kart 6]               │
│  Lokal SEO       E-ticaret SEO   İçerik SEO             │
└──────────────────────────────────────────────────────────┘
```
- 3 kolonlu grid (desktop), 1 kolon (mobile)
- Kartlar: beyaz, 1px border, 8px border-radius, hover: shadow + slight lift
- İkonlar: Lucide React (tree-shakeable, 0 overhead)

#### VAKA ÇALIŞMALARI (Case Studies)
```
┌──────────────────────────────────────────────────────────┐
│  "Müşterilerimizin Gerçek Sonuçları"                     │
│                                                          │
│  [Vaka 1 — Büyük kart]    [Vaka 2]   [Vaka 3]          │
│  "6 ayda %420 organik     ...]        [...]             │
│   trafik artışı"                                         │
│  Sektör: E-ticaret                                       │
│  [Vakayı Oku →]                                         │
└──────────────────────────────────────────────────────────┘
```

#### NEDEN SEOROAS? SECTION
Backlinko'nun "Editor's Picks" mantığıyla — güven unsurları:
- Google Certified Partner rozeti
- Ahrefs / Semrush entegrasyon rozetleri
- Şeffaf raporlama (data screenshot)
- Sözleşmesiz çalışma vurgusu

#### BLOG/REHBERLER SECTION (Backlinko Latest Guides mimarisi)
```
┌──────────────────────────────────────────────────────────┐
│  "Ücretsiz SEO Rehberleri"                              │
│                                                          │
│  [Büyük featured post]  |  [Post 2]                    │
│                          |  [Post 3]                    │
│                          |  [Post 4]                    │
│  [Tüm Rehberleri Gör →]                                 │
└──────────────────────────────────────────────────────────┘
```

#### NEWSLETTER / LEAD MAGNET SECTION (Backlinko Hero'sundan adapte)
```
┌──────────────────────────────────────────────────────────┐
│  [Koyu mavi arka plan]                                  │
│  "SEO Stratejinizi Ücretsiz Öğrenin"                   │
│  Her hafta Türkiye'ye özel SEO ipuçları...              │
│  [E-posta input] [Abone Ol →]                           │
│  "Güvende: Spam göndermiyoruz. İstediğinizde çıkın."   │
└──────────────────────────────────────────────────────────┘
```

#### FOOTER
```
┌──────────────────────────────────────────────────────────┐
│ [Logo + Tagline]  [Hizmetler]  [Şirket]  [Bağlantı]    │
│                   On-Page SEO  Hakkımızda  Twitter/X    │
│                   Teknik SEO   Blog        LinkedIn      │
│                   Link Build.  İletişim    YouTube       │
│                   Fiyatlar                               │
│ ─────────────────────────────────────────────────────── │
│ © 2026 SEOROAS    Gizlilik     Kullanım Şartları        │
└──────────────────────────────────────────────────────────┘
```

---

## 3. Sayfa Şablonları

### 3.1 Hizmet Sayfası Şablonu
```
Hero (H1 + açıklama + CTA)
→ Ne yapıyoruz? (3 kolon feature grid)
→ Sürecimiz (numbered steps, Backlinko guide format)
→ Sonuçlar (mini case study)
→ SSS (Accordion — FAQ Schema için)
→ CTA Banner
```

### 3.2 Blog/Rehber Şablonu (Backlinko article format)
```
Breadcrumb nav
H1 + tarih + yazar + okuma süresi
Featured image (WebP, lazy loaded)
Table of Contents (sticky sidebar, desktop)
İçerik (H2/H3 hierarchy)
→ Inline CTA kutuları (newsletter veya hizmet)
Related articles section
Author box
```

### 3.3 Fiyatlandırma Sayfası
```
H1: "SEO Fiyatları" (target keyword: 3,700 aylık arama)
Paket karşılaştırma tablosu (3 paket)
SSS (10+ soru — FAQ Schema)
Ücretsiz analiz CTA
```

### 3.4 Lokal Sayfa Şablonu (İstanbul SEO Ajansı vb.)
```
H1: "[Şehir] SEO Ajansı"
LocalBusiness Schema
Google Maps embed
Yerel referanslar
SSS (şehre özel)
```

---

## 4. Component Kütüphanesi

### Butonlar
```
Primary:   bg-blue-600   hover:bg-blue-700   text-white   px-6 py-3   rounded-lg   font-semibold
Secondary: border-blue-600   text-blue-600   hover:bg-blue-50   px-6 py-3   rounded-lg
Accent CTA: bg-orange-500   hover:bg-orange-600   text-white   px-8 py-4   rounded-lg   font-bold
```

### Kartlar
```
Beyaz arka plan | border border-gray-200 | rounded-xl | p-6
Hover: shadow-md | transition-all duration-200 | translate-y-[-2px]
```

### Badge
```
Küçük etiket: inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
Örnek: "🏆 Google Partner" — bg-blue-50 text-blue-700
```

### İnput / Form
```
Input: border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 w-full
Label: text-sm font-medium text-gray-700 mb-1
Error: text-red-600 text-sm mt-1
```

---

## 5. Performans Tasarım Kuralları

- **Görüntüler:** Tüm görseller WebP formatı, `srcset` ile responsive, `loading="lazy"` (hero hariç)
- **Fontlar:** `font-display: swap`, preload ile kritik fontlar
- **İkonlar:** Lucide React (tree-shaking), SVG sprite yerine
- **Animasyon:** `prefers-reduced-motion` desteği, sadece `transform` ve `opacity` (GPU hızlandırmalı)
- **CSS:** Tailwind CSS v4 (JIT, kullanılmayan stil sıfır)
- **Above the fold:** İlk 100KB içinde render — no layout shift
- **Critical CSS:** Inline, geri kalan async yükleme

---

## 6. Mobil Tasarım Öncelikleri

- **Mobile-first** approach (Tailwind default)
- Hero: Tam genişlik, input full-width, CTA full-width
- Navigation: Bottom sheet drawer, kolay erişim için hizmetler tab barında
- Kart grid: 1 kolon (sm:2 kolon, lg:3 kolon)
- Font boyutu: H1 → 32px mobil (48px desktop)
- Touch targets: minimum 48x48px
- Sticky header: 56px yükseklik (desktop: 72px)

---

## 7. SEO-Odaklı Tasarım Notları

- H1 etiketi her sayfada **bir tane**, ana keyword ile
- Breadcrumb her iç sayfada zorunlu (BreadcrumbList Schema)
- İç bağlantılar: navigasyon, sidebar ve related posts üçgeninde
- URL yapısı temiz slug: `/seo-hizmeti/`, `/seo-fiyatlari/`, `/blog/seo-nedir/`
- Canonical tag her sayfada
- OG image: 1200x630px, WebP, sayfa başlığı overlay ile
- Core Web Vitals hedefleri:
  - LCP < 1.5s
  - CLS < 0.05
  - INP < 100ms
