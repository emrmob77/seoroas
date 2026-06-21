import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Copy,
  FileJson,
  Gauge,
  Globe,
  Layers,
  Link2,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { generateDynamicSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { serviceSchema, faqSchema } from "@/lib/schema";
import { SubpageHero } from "@/components/sections/SubpageHero";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return generateDynamicSeoMetadata({
    title: "Shopify SEO Hizmeti & Ajansı — Liquid ve Mağaza Optimizasyonu",
    description:
      "Shopify SEO ajansı olarak Liquid tema optimizasyonu, uygulama temizliği, JSON-LD schema ve koleksiyon/ürün sayfası SEO ile organik satışlarınızı artırıyoruz. Ücretsiz Shopify SEO analizi.",
    path: "/seo/shopify-seo",
  });
}

const faqItems = [
  {
    q: "Shopify SEO nedir?",
    a: "Shopify SEO, Shopify altyapısında kurulu bir e-ticaret mağazasının tema, uygulama ve içerik katmanlarında arama motorlarının anlayacağı net sinyaller üretmesini sağlayan optimizasyon çalışmalarının bütünüdür. Ürün ve koleksiyon sayfalarında doğru başlık hiyerarşisi, canonical yönetimi, yapılandırılmış veri ve site hızı ile organik trafiği ve dönüşümü birlikte büyütür.",
  },
  {
    q: "Shopify'da SEO yapılabilir mi?",
    a: "Evet. Shopify yapısı gereği bazı URL ve şablon davranışlarını kısıtlasa da; tema (Liquid) düzenlemeleri, meta alanları, blog modülü, yapılandırılmış veri ve uygulama yönetimi ile güçlü bir teknik SEO uygulanabilir. Önemli olan platformun sınırlarını bilerek doğru müdahaleleri yapmaktır.",
  },
  {
    q: "Shopify SEO nasıl yapılır?",
    a: "Süreç teknik temelle başlar: markalı alan adı, Search Console kurulumu, site hızı ve sitemap. Ardından anahtar kelime araştırması, başlık ve meta optimizasyonu, benzersiz ürün/koleksiyon metinleri, görsel alt metinleri, temiz URL ve canonical yönetimi gelir. Son olarak içerik (blog) ve link building ile otorite büyütülür.",
  },
  {
    q: "Shopify SEO hizmeti / ajansı ne iş yapar?",
    a: "Bir Shopify SEO ajansı; mağazanızın teknik denetimini yapar, Liquid tema ve uygulama katmanını optimize eder, ürün ve koleksiyon sayfalarını arama niyetine göre düzenler, yapılandırılmış veri ekler ve içerik + link stratejisiyle organik görünürlüğü artırır. SEOROAS olarak bu süreci ölçülebilir trafik ve dönüşüm hedefleriyle yönetiyoruz.",
  },
  {
    q: "Shopify SEO fiyatları ne kadar?",
    a: "Fiyat; mağazanızın büyüklüğüne, ürün sayısına, rekabet düzeyine ve hedeflerinize göre değişir. Tek seferlik teknik denetimden aylık sürekli optimizasyona kadar farklı paketler sunuyoruz. Güncel paket ve fiyatlar için SEO fiyatları sayfamızı inceleyebilir veya ücretsiz analiz talep edebilirsiniz.",
  },
  {
    q: "Shopify SEO sonuçları ne kadar sürede görülür?",
    a: "İlk iyileşmeler (teknik düzeltmeler ve hız kazanımları) genellikle ilk haftalarda fark edilir. Organik trafikteki belirgin artış 2-3 ay içinde başlar, sürdürülebilir ve bileşik büyüme ise çoğunlukla 6-12 ayda oturur. Rekabetin yoğun olduğu sektörlerde bu süre uzayabilir.",
  },
  {
    q: "Shopify mağazam Google'da neden çıkmıyor?",
    a: "En sık nedenler: mağazanın arama motorlarına kapalı (şifreli/gizli) olması, indekslenmeyi engelleyen robots/noindex ayarları, yinelenen içerik, zayıf veya kopya ürün açıklamaları, çok düşük site hızı ve hiç backlink olmamasıdır. Teknik denetimle bu engelleri tespit edip sırayla gideriyoruz.",
  },
  {
    q: "Shopify'da yinelenen içerik sorunu nasıl çözülür?",
    a: "Koleksiyon filtreleri, etiket URL'leri ve varyant sayfaları duplicate riski doğurabilir. Canonical etiketleri, robots meta yönlendirmeleri ve gereksiz indekslenebilir URL'lerin kapatılması ile otoriteyi tek bir tercih edilen URL'de toplarız; içerik ve şablon tarafında da benzersiz metinlerle destekleriz.",
  },
  {
    q: "Çok fazla uygulama Shopify hızımı düşürür mü?",
    a: "Evet. Her uygulama ek script, stil veya sunucu tarafı iş yükü ekleyebilir. Kullanılmayan veya üst üste binen uygulamaları kaldırarak, kritik olanları tekilleştirerek ve tema Liquid'inde yük sırasını optimize ederek LCP ve etkileşim sürelerini iyileştiririz.",
  },
];

const howToSteps = [
  {
    title: "Teknik Temel",
    desc: "Markalı alan adı, Search Console & Bing Webmaster kurulumu, dinamik XML sitemap ve site hızı (Core Web Vitals) ile sağlam bir zemin kurarız.",
  },
  {
    title: "On-Page Optimizasyon",
    desc: "Anahtar kelime araştırması, başlık hiyerarşisi, benzersiz meta ve ürün açıklamaları, görsel alt metinleri ve temiz URL yapısı ile sayfaları arama niyetine hizalarız.",
  },
  {
    title: "Yapılandırılmış Veri",
    desc: "Product, Offer, BreadcrumbList ve FAQ JSON-LD ile zengin sonuç potansiyelini açar, tıklanma oranını yükseltiriz.",
  },
  {
    title: "İçerik & Otorite",
    desc: "Blog içeriği, iç linkleme ve kaliteli backlink çalışmasıyla mağazanızın konu otoritesini ve organik trafiğini büyütürüz.",
  },
];

const checklistItems = [
  {
    title: "Markalı Alan Adı & Yapılandırma",
    desc: "myshopify.com yerine markalı domain, www/non-www tekilleştirme ve doğru yönlendirmeler.",
  },
  {
    title: "Search Console & Bing Webmaster",
    desc: "Mülk doğrulama, sitemap gönderimi ve indeksleme/kapsam sorunlarının sürekli izlenmesi.",
  },
  {
    title: "Dinamik XML Sitemap & Robots",
    desc: "Gelir getiren sayfalara tarama bütçesi; gereksiz parametre ve şablon yollarının kapatılması.",
  },
  {
    title: "Site Hızı & Core Web Vitals",
    desc: "Liquid sadeleştirme, kritik CSS, görsel WebP sıkıştırma ve script yükünün azaltılması.",
  },
  {
    title: "Başlık Hiyerarşisi (H1–H6)",
    desc: "Her şablonda tek ve net H1, mantıklı alt başlıklarla bot ve kullanıcı için okunabilir yapı.",
  },
  {
    title: "Meta Title & Description",
    desc: "Şablon değişkenleriyle benzersiz, anahtar kelime ve CTR odaklı başlık/açıklamalar.",
  },
  {
    title: "Benzersiz Ürün & Koleksiyon Metni",
    desc: "Üretici açıklamalarının kopyalanmasından kaçınma; özgün, arama niyetine uygun içerik.",
  },
  {
    title: "Görsel Optimizasyonu & Alt Metin",
    desc: "Sıkıştırma, doğru boyutlandırma ve açıklayıcı alt metinlerle görsel aramada görünürlük.",
  },
  {
    title: "Temiz URL & Canonical",
    desc: "Filtre, etiket ve varyant kaynaklı yinelenen URL'lerin canonical ile kontrol altına alınması.",
  },
  {
    title: "Yapılandırılmış Veri (JSON-LD)",
    desc: "Product, Offer, Breadcrumb ve FAQ şemalarıyla zengin snippet uygunluğu.",
  },
  {
    title: "İç Linkleme & Blog Silosu",
    desc: "Koleksiyon → ürün → blog akışıyla otorite dağıtımı ve konu kümeleri.",
  },
  {
    title: "Shopify Markets & Hreflang",
    desc: "Çok dilli/çok bölgeli satışta doğru hreflang ve bölgesel hedefleme yapılandırması.",
  },
];

const optimizationSteps = [
  {
    title: "Semantic Heading",
    desc: "H1–H6 hiyerarşisini koleksiyon ve ürün şablonlarında tutarlı kurarak hem botların hem kullanıcıların sayfa konusunu anında anlamasını sağlıyoruz.",
  },
  {
    title: "Rich Snippet",
    desc: "Product, Offer ve BreadcrumbList JSON-LD ile arama sonuçlarında zengin snippet potansiyelini artırıyor, geçerli şema grafikleriyle hataları minimize ediyoruz.",
  },
  {
    title: "Breadcrumb & UX",
    desc: "İç bağlantı, breadcrumb ve net CTA akışı ile üründen sepete giden yolu kısaltıyor, oturum içi kaybolmayı azaltıyoruz.",
  },
];

const relatedServices = [
  {
    href: "/seo/teknik-seo",
    title: "Teknik SEO",
    desc: "Tarama, indeksleme ve site hızı odaklı teknik altyapı denetimi.",
  },
  {
    href: "/seo/e-ticaret-seo",
    title: "E-Ticaret SEO",
    desc: "Ürün ve kategori mimarisiyle organik gelir büyütme.",
  },
  {
    href: "/seo/link-building",
    title: "Link Building",
    desc: "Kaliteli ve güvenli backlink'lerle alan otoritesi.",
  },
  {
    href: "/seo/icerik-seo",
    title: "İçerik SEO",
    desc: "Arama niyetine uygun blog ve koleksiyon içerikleri.",
  },
];

const deliverables = [
  { t: "Teknik SEO & Site Hızı", d: "Core Web Vitals, canonical, robots.txt, sitemap ve Liquid/uygulama optimizasyonu." },
  { t: "Anahtar Kelime & On-Page", d: "Koleksiyon/ürün eşlemesi, başlık-meta, benzersiz açıklamalar ve görsel alt metni." },
  { t: "Yapılandırılmış Veri", d: "Product, Offer, BreadcrumbList ve FAQ JSON-LD ile zengin sonuç uygunluğu." },
  { t: "İçerik & Blog", d: "Arama niyetine uygun blog içerikleri ve konu kümeleriyle huni üstü trafik." },
  { t: "Link Building", d: "Güvenli ve doğal backlink'lerle alan otoritesini büyütme." },
  { t: "Raporlama & Analitik", d: "GA4 ve Search Console kurulumu, gelir/ROAS bazlı aylık raporlama." },
];

const shopifyGuides = [
  { href: "/blog/shopify-seo-rehberi", t: "Shopify SEO Rehberi (2026)" },
  { href: "/blog/shopify-seo-nedir", t: "Shopify SEO Nedir?" },
  { href: "/blog/shopify-seo-checklist", t: "Shopify SEO Checklist" },
  { href: "/blog/shopify-seo-ayarlari", t: "Shopify SEO Ayarları" },
  { href: "/blog/shopify-seo-uygulamalari", t: "En İyi Shopify SEO Uygulamaları" },
  { href: "/blog/shopify-hiz-optimizasyonu", t: "Shopify Hız Optimizasyonu" },
];

const references = [
  { name: "Novosuit", url: "https://novosuit.com", logo: "https://cdn.sanity.io/images/67vl8x07/production/e6d63d4ed9b44af5e65c60fc1c66f5de63eb3b7c-500x186.png" },
  { name: "Edscarf", url: "https://edscarf.com", logo: "https://cdn.sanity.io/images/67vl8x07/production/f48b8534d6d2580d81c4a3b74ea5d7e2d4d3981f-500x216.png" },
  { name: "Kidzee", url: "https://kidzee.com.tr", logo: "https://cdn.sanity.io/images/67vl8x07/production/0bfefc5c2e5aaffc49eec5f758e85318eec456ea-450x128.png" },
  { name: "Sade Organik", url: "https://sadeorganik.com.tr", logo: "https://cdn.sanity.io/images/67vl8x07/production/edbeac9de5c4296f6bb0221cc95717977ce88cfa-437x211.png" },
  { name: "Take a Shot", url: "https://takeashot.com.tr", logo: "https://cdn.sanity.io/images/67vl8x07/production/05e1d0c1a0b1616e79fdf03cc2f73dfa0e422f6b-500x91.png" },
  { name: "Tante Roza", url: "https://tanteroza.com.tr", logo: "https://cdn.sanity.io/images/67vl8x07/production/0d0a78e9140fac31f80f6e5f3b906be7c5805cc2-500x147.jpg" },
  { name: "Low Lights Studios", url: "https://lowlightsstudios.com", logo: "https://cdn.sanity.io/images/67vl8x07/production/31c1e6d675c6f4228e9710a9254fe6027f2e8c54-600x112.png" },
  { name: "PEQUS", url: "https://pequsclo.com", logo: "https://cdn.sanity.io/images/67vl8x07/production/98d24c27d67d910a22ea374a6d199ddb907408b1-600x240.png" },
  { name: "Holistik Markt", url: "https://www.holistikmarkt.de", logo: "https://cdn.sanity.io/images/67vl8x07/production/83460017912cfee803116dda5903664f8e59bc49-532x220.jpg" },
  { name: "Danger", url: "https://danger.com.tr", logo: "https://cdn.sanity.io/images/67vl8x07/production/2a32595b9acb0e37a767666c3e49021485bfe863-600x171.png" },
  { name: "Spektra Diamond", url: "https://spektradiamond.com", logo: null },
  { name: "Heka Store", url: "https://hekastore.com", logo: "https://cdn.sanity.io/images/67vl8x07/production/c6d51100bfb978651109bbf14681fa73ae16f48c-600x179.png" },
];

export default function ShopifySeoPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          serviceSchema(
            "Shopify SEO Hizmeti",
            "Shopify mağazaları için teknik SEO, Liquid optimizasyonu, uygulama temizliği, JSON-LD ve koleksiyon/ürün sayfası optimizasyonu sunan profesyonel Shopify SEO ajansı hizmeti.",
            "/seo/shopify-seo"
          ),
          faqSchema(faqItems.map((item) => ({ question: item.q, answer: item.a }))),
        ]}
      />

      <SubpageHero
        breadcrumb={[
          { name: "SEO", url: "/seo" },
          { name: "Shopify SEO", url: "/seo/shopify-seo" },
        ]}
        badge="Shopify · Commerce SEO"
        title={
          <>
            Shopify SEO ile Mağazanızı Google&apos;da{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              Zirveye
            </span>{" "}
            Taşıyoruz
          </>
        }
        subtitle="Shopify SEO ajansı olarak tema ve uygulama katmanında hız, teknik SEO ve dönüşüm odaklı içerik sinyalleriyle mağazanızı hem kullanıcılar hem arama motorları için optimize ediyoruz."
        stats={[
          { value: "96/100", label: "Hedef PageSpeed" },
          { value: "0.8s", label: "Hedef LCP" },
        ]}
      >
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-base hover:opacity-95 transition-opacity shadow-lg"
          >
            Ücretsiz Shopify SEO Analizi
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/seo-fiyatlari"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-base hover:bg-primary/5 transition-colors"
          >
            Shopify SEO fiyatları
          </Link>
        </div>
      </SubpageHero>

      {/* References — Shopify stores */}
      <section className="py-12 md:py-16 px-5 md:px-8 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-on-surface-variant font-bold tracking-widest text-xs uppercase mb-8">
            Birlikte Çalıştığımız Shopify Mağazaları
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {references.map((r) => (
              <a
                key={r.url}
                href={r.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                title={r.name}
                aria-label={r.name}
                className="flex items-center justify-center bg-surface-container-lowest border border-outline-variant/10 rounded-2xl px-5 h-24 hover:shadow-lg transition-all"
              >
                {r.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={r.logo}
                    alt={`${r.name} Shopify mağazası logosu`}
                    loading="lazy"
                    className="max-h-12 w-auto max-w-full object-contain"
                  />
                ) : (
                  <span className="font-extrabold tracking-tight text-on-background text-center leading-tight">
                    {r.name}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* What is Shopify SEO — educational */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-t border-outline-variant/10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-6">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <span className="text-primary font-bold tracking-widest text-xs uppercase">Temeller</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tighter text-on-background">
            Shopify SEO Nedir?
          </h2>
          <div className="mt-6 space-y-5 text-on-surface-variant font-light leading-relaxed">
            <p>
              <strong className="font-semibold text-on-background">Shopify SEO</strong>, Shopify altyapısında
              kurulu bir e-ticaret mağazasının arama motorlarında daha görünür olması için tema (Liquid),
              uygulama ve içerik katmanlarında yapılan optimizasyon çalışmalarının bütünüdür. Amaç; ürün ve
              koleksiyon sayfalarınızı doğru anahtar kelimelerle, hızlı ve teknik olarak temiz biçimde
              sunarak ücretli reklama bağımlılığı azaltıp sürdürülebilir organik satış üretmektir.
            </p>
            <p>
              <strong className="font-semibold text-on-background">Shopify&apos;da SEO yapılabilir mi?</strong>{" "}
              Evet. Platform bazı URL ve şablon davranışlarını kısıtlasa da; meta alanları, blog modülü,
              yapılandırılmış veri ve Liquid düzenlemeleriyle güçlü bir teknik SEO mümkündür. Önemli olan
              Shopify&apos;ın sınırlarını bilerek doğru müdahaleleri yapmaktır — bizim{" "}
              <Link href="/seo/teknik-seo" className="text-primary font-medium hover:underline">
                teknik SEO
              </Link>{" "}
              yaklaşımımız tam da bunun üzerine kuruludur.
            </p>
          </div>
        </div>
      </section>

      {/* How to do Shopify SEO */}
      <section className="py-16 md:py-24 px-5 md:px-8 bg-surface-container-low/40">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-6">
              <Rocket className="h-6 w-6 text-primary" />
            </div>
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Yöntem</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tighter text-on-background">
              Shopify SEO Nasıl Yapılır? 4 Temel Adım
            </h2>
            <p className="mt-4 text-on-surface-variant font-light leading-relaxed">
              Mağazanızı sıfırdan üst sıralara taşıyan, önceliklendirilmiş ve ölçülebilir bir yol haritası.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howToSteps.map((step, index) => (
              <div
                key={step.title}
                className="bg-surface-container-lowest border border-outline-variant/10 p-8 rounded-[2rem] hover:shadow-xl transition-shadow"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary text-sm font-black mb-5">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold text-on-background mb-2">{step.title}</h3>
                <p className="text-on-surface-variant text-sm font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topical authority — core components */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Kapsamlı Yaklaşım</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tighter text-on-background">
              Shopify SEO&apos;nun 6 Temel Bileşeni
            </h2>
            <p className="mt-4 text-on-surface-variant font-light leading-relaxed">
              Sürdürülebilir organik büyüme; teknik, içerik ve otorite katmanlarının birlikte çalışmasıyla
              mümkündür. Shopify mağazanızda bu altı bileşeni uçtan uca yönetiyoruz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary text-sm font-black">1</span>
                <h3 className="text-xl font-bold text-on-background">Anahtar Kelime Araştırması</h3>
              </div>
              <p className="text-on-surface-variant font-light leading-relaxed text-sm">
                Ürün, koleksiyon ve bilgi amaçlı aramaları arama niyetine göre ayırır; satın alma niyeti yüksek
                kelimeleri koleksiyon ve ürün şablonlarına, bilgi amaçlı kelimeleri bloga eşleriz. Doğru
                kelime-URL eşlemesi Shopify SEO&apos;nun temelidir. Süreci{" "}
                <Link href="/blog/seo-nasil-yapilir" className="text-primary font-medium hover:underline">
                  SEO nasıl yapılır
                </Link>{" "}
                rehberimizde anlatıyoruz.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary text-sm font-black">2</span>
                <h3 className="text-xl font-bold text-on-background">On-Page Optimizasyon</h3>
              </div>
              <p className="text-on-surface-variant font-light leading-relaxed text-sm">
                Benzersiz meta başlık ve açıklamalar, üreticiden kopyalanmayan özgün ürün/koleksiyon metinleri,
                açıklayıcı görsel alt metinleri ve temiz URL yapısı ile her sayfayı hedef kelimesine hizalarız.
                Temeller için{" "}
                <Link href="/blog/seo-nedir" className="text-primary font-medium hover:underline">
                  SEO nedir
                </Link>{" "}
                yazımıza göz atabilirsiniz.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary text-sm font-black">3</span>
                <h3 className="text-xl font-bold text-on-background">Teknik SEO &amp; Site Hızı</h3>
              </div>
              <p className="text-on-surface-variant font-light leading-relaxed text-sm">
                Core Web Vitals, tarama bütçesi, canonical ve indeksleme yönetimi mağazanın sağlık temelidir.
                Detaylar için{" "}
                <Link href="/seo/teknik-seo" className="text-primary font-medium hover:underline">
                  teknik SEO
                </Link>{" "}
                hizmetimize, kurulum doğrulaması için{" "}
                <Link href="/blog/search-console-nedir" className="text-primary font-medium hover:underline">
                  Search Console
                </Link>{" "}
                rehberine bakın.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary text-sm font-black">4</span>
                <h3 className="text-xl font-bold text-on-background">İçerik Pazarlaması &amp; Blog</h3>
              </div>
              <p className="text-on-surface-variant font-light leading-relaxed text-sm">
                Shopify blog modülüyle &quot;nedir&quot;, &quot;nasıl&quot; ve &quot;en iyi&quot; türü bilgi
                amaçlı aramaları yakalar, ziyaretçiyi satın alma hunisine taşırız. Konu kümeleri otoriteyi
                büyütür —{" "}
                <Link href="/blog/icerik-pazarlamasi-nedir" className="text-primary font-medium hover:underline">
                  içerik pazarlaması nedir
                </Link>{" "}
                yazımızda detaylandırdık.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary text-sm font-black">5</span>
                <h3 className="text-xl font-bold text-on-background">Link Building (Off-Page)</h3>
              </div>
              <p className="text-on-surface-variant font-light leading-relaxed text-sm">
                Kaliteli ve doğal backlink&apos;ler mağazanızın alan otoritesini yükseltir. Konuk yazılar,
                bağlantı değeri taşıyan içerikler ve dijital PR ile güvenli bir link profili kurarız.{" "}
                <Link href="/seo/link-building" className="text-primary font-medium hover:underline">
                  Link building
                </Link>{" "}
                hizmetimizi ve{" "}
                <Link
                  href="/blog/backlink-nedir-seo-icin-onemi-ve-nasil-yapilir"
                  className="text-primary font-medium hover:underline"
                >
                  backlink nedir
                </Link>{" "}
                yazımızı inceleyin.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary text-sm font-black">6</span>
                <h3 className="text-xl font-bold text-on-background">Ölçümleme &amp; Analitik</h3>
              </div>
              <p className="text-on-surface-variant font-light leading-relaxed text-sm">
                GA4 ve Search Console kurulumu, e-ticaret olay takibi ve ROAS ölçümü ile her kararı veriyle
                alırız. Optimizasyonun etkisini gelir bazında raporlarız —{" "}
                <Link href="/blog/google-analytics-4-kurulum-rehberi" className="text-primary font-medium hover:underline">
                  GA4 kurulumu
                </Link>{" "}
                ve{" "}
                <Link href="/blog/roas-nedir" className="text-primary font-medium hover:underline">
                  ROAS nedir
                </Link>{" "}
                yazılarımıza bakabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Speed */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">Performans</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-on-background leading-tight">
                Shopify Hız Optimizasyonu: Gereksiz Uygulama Temizliği ve Işık Hızında Yükleme
              </h2>
              <p className="text-on-surface-variant font-light leading-relaxed max-w-lg">
                Script yükünü azaltıp Liquid ve ön yüz varlıklarını sadeleştirerek Core Web Vitals odaklı bir
                mağaza deneyimi hedefliyoruz.
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-md">
                <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-2xl p-6">
                  <div className="flex items-center gap-2 text-on-surface-variant text-xs uppercase tracking-widest font-bold mb-2">
                    <Gauge className="h-4 w-4 text-primary" />
                    Performans
                  </div>
                  <p className="text-4xl font-black tracking-tighter text-on-background">96</p>
                  <p className="text-sm text-on-surface-variant font-light">/100 hedef skor</p>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-2xl p-6">
                  <div className="flex items-center gap-2 text-on-surface-variant text-xs uppercase tracking-widest font-bold mb-2">
                    <Zap className="h-4 w-4 text-primary" />
                    LCP
                  </div>
                  <p className="text-4xl font-black tracking-tighter text-on-background">0.8s</p>
                  <p className="text-sm text-on-surface-variant font-light">büyük içerik boyaması</p>
                </div>
              </div>
            </div>
            <div className="relative min-h-[280px] md:min-h-[360px] rounded-[2rem] overflow-hidden bg-zinc-950 border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-emerald-500/10" />
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.12), transparent 50%)" }} />
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-3 text-white/90 text-sm font-medium">
                  <Sparkles className="h-5 w-5 text-primary shrink-0" />
                  Tema + uygulama denetimi, kritik CSS ve görsel teslimatı tek çatı altında optimize edilir.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24 px-5 md:px-8 bg-surface-container-low/40">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Mimari</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tighter text-on-background">
              Shopify&apos;a Özel SEO Zorlukları &amp; Mimari Çözümlerimiz
            </h2>
            <p className="mt-4 text-on-surface-variant font-light leading-relaxed">
              Platforma özgü URL ve şablon davranışlarını kontrol altına alarak indeks kalitesini ve sıralama
              sinyallerini güçlendiriyoruz.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest border border-outline-variant/10 p-8 rounded-[2rem] hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Copy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-on-background mb-2">Yinelenen İçerik</h3>
              <p className="text-sm text-primary font-bold uppercase tracking-wide mb-3">Canonical</p>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                Filtre, etiket ve varyant kaynaklı kopya URL&apos;lerde tercih edilen adresi netleştirip otorite
                sızıntısını önlüyoruz.
              </p>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant/10 p-8 rounded-[2rem] hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-on-background mb-2">Robots.txt Kontrolü</h3>
              <p className="text-sm text-primary font-bold uppercase tracking-wide mb-3">Tarama</p>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                Gereksiz şablon ve parametre yollarını kapatıp bütçeyi gelir getiren sayfalara yönlendiriyoruz.
              </p>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant/10 p-8 rounded-[2rem] hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <FileJson className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-on-background mb-2">Gelişmiş JSON-LD</h3>
              <p className="text-sm text-primary font-bold uppercase tracking-wide mb-3">Yapılandırılmış veri</p>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                Ürün, fiyat ve stok bilgisini şema ile tutarlı sunarak zengin sonuç uygunluğunu artırıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical checklist */}
      <section className="py-16 md:py-24 px-5 md:px-8 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Teknik Shopify SEO Kontrol Listesi</h2>
            <p className="mt-4 text-white/60 font-light leading-relaxed">
              Mağazanızın teknik omurgasını sırayla güçlendiren 12 kritik başlık.
            </p>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 list-none">
            {checklistItems.map((item, i) => (
              <li
                key={item.title}
                className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-on-primary text-base font-black">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-base leading-snug mb-1.5 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    {item.title}
                  </p>
                  <p className="text-sm text-white/55 font-light leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Page optimization */}
      <section className="py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28 space-y-4">
                <span className="text-primary font-bold tracking-widest text-xs uppercase">Dönüşüm</span>
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-on-background leading-tight">
                  Koleksiyon ve Ürün Sayfalarında Maksimum Dönüşüm
                </h2>
                <p className="text-on-surface-variant font-light leading-relaxed">
                  Şablon düzeyinde başlık, snippet ve gezinme uyumu ile satış sayfalarını hem SEO hem CRO için
                  hizalarız.
                </p>
                <div className="hidden lg:flex items-center gap-2 pt-4 text-on-surface-variant text-sm">
                  <Layers className="h-4 w-4 text-primary shrink-0" />
                  <span>Koleksiyon → ürün → sepet akışı tek dilde.</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              {optimizationSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-5 p-6 md:p-8 rounded-[2rem] bg-surface-container-lowest border border-outline-variant/10"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-sm font-black">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-on-background mb-2">{step.title}</h3>
                    <p className="text-on-surface-variant text-sm font-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shopify Markets / global */}
      <section className="py-16 md:py-24 px-5 md:px-8 bg-surface-container-low/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <span className="text-primary font-bold tracking-widest text-xs uppercase">Global Satış</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-on-background leading-tight">
                Shopify Markets ile Uluslararası SEO
              </h2>
              <p className="text-on-surface-variant font-light leading-relaxed max-w-lg">
                Birden fazla ülke ve dilde satış yapan mağazalarda doğru hreflang yapılandırması, bölgesel
                fiyat/para birimi sinyalleri ve yerelleştirilmiş içerikle her pazarda görünür olmanızı sağlarız.
                Yurt dışına açılan Shopify mağazaları için global organik trafik en büyük büyüme kaldıracıdır.
              </p>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                Global SEO için görüşelim
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-[2rem] p-8 md:p-10 space-y-4">
              {[
                "Hreflang & dil/bölge hedefleme",
                "Yerelleştirilmiş başlık, meta ve içerik",
                "Bölgesel para birimi ve fiyat sinyalleri",
                "Pazar bazlı anahtar kelime araştırması",
              ].map((row) => (
                <div key={row} className="flex items-center gap-3 text-on-surface-variant font-light">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  {row}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App cleanup */}
      <section className="py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center p-10 md:p-14 rounded-[2rem] bg-surface-container-low border border-outline-variant/10 shadow-lg">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6">
              <Link2 className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-on-background">
              Mağazanızı Yavaşlatan Uygulamalardan Kurtulun
            </h2>
            <p className="mt-4 text-on-surface-variant font-light leading-relaxed max-w-xl mx-auto">
              Yinelenen özellikler, kullanılmayan snippet&apos;ler ve ağır üçüncü parti script&apos;ler kaldırılır;
              gerçekten ihtiyaç duyduğunuz uygulamalar korunarak yükleme ve etkileşim süreleri iyileştirilir.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-t border-outline-variant/10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 md:mb-14 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-background mb-3">
              Shopify SEO Hakkında Sık Sorulan Sorular
            </h2>
            <p className="text-on-surface-variant font-light">
              Mağaza sahiplerinin Shopify SEO hizmeti hakkında en çok sorduğu sorular.
            </p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group bg-surface-container-low rounded-2xl p-6 cursor-pointer open:bg-surface-container-high transition-colors border border-outline-variant/10"
              >
                <summary className="list-none flex justify-between items-center gap-4 font-bold text-base text-on-background [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-on-surface-variant transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-on-surface-variant leading-relaxed font-light text-sm">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables — what's included */}
      <section className="py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Kapsam</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tighter text-on-background">
              Shopify SEO Hizmetimize Neler Dahil?
            </h2>
            <p className="mt-4 text-on-surface-variant font-light leading-relaxed">
              Teknikten içeriğe, mağazanızın organik büyümesi için gereken her katmanı tek çatı altında yönetiyoruz.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((d) => (
              <div
                key={d.t}
                className="bg-surface-container-lowest border border-outline-variant/10 p-7 rounded-[2rem]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <h3 className="text-lg font-bold text-on-background">{d.t}</h3>
                </div>
                <p className="text-on-surface-variant text-sm font-light leading-relaxed">{d.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-on-surface-variant font-light leading-relaxed max-w-2xl">
            Gerçek sonuçlar için{" "}
            <Link href="/vaka-calismalari" className="text-primary font-medium hover:underline">
              vaka çalışmalarımızı
            </Link>{" "}
            ve{" "}
            <Link href="/referanslar" className="text-primary font-medium hover:underline">
              referanslarımızı
            </Link>{" "}
            inceleyebilirsiniz.
          </p>
        </div>
      </section>

      {/* Shopify SEO guides — internal links to blog cluster */}
      <section className="py-16 md:py-24 px-5 md:px-8 bg-surface-container-low/40">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Shopify SEO Rehberleri</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tighter text-on-background">
              Shopify SEO Hakkında Bilmeniz Gerekenler
            </h2>
            <p className="mt-4 text-on-surface-variant font-light leading-relaxed">
              Konuyu derinlemesine ele aldığımız rehberlerimizle Shopify SEO sürecinin her adımını öğrenin.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {shopifyGuides.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group flex items-center justify-between gap-4 bg-surface-container-lowest border border-outline-variant/10 px-6 py-5 rounded-2xl hover:shadow-lg transition-all"
              >
                <span className="font-bold text-on-background">{g.t}</span>
                <ArrowRight className="h-4 w-4 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related services — internal links */}
      <section className="py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">İlgili Hizmetler</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tighter text-on-background">
              Shopify Büyümenizi Tamamlayan Çözümler
            </h2>
            <p className="mt-4 text-on-surface-variant font-light leading-relaxed">
              Shopify mağazanızın büyümesini destekleyen ilgili SEO hizmetlerimiz.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-surface-container-lowest border border-outline-variant/10 p-8 rounded-[2rem] hover:shadow-xl transition-all"
              >
                <h3 className="text-lg font-bold text-on-background mb-2 flex items-center justify-between">
                  {s.title}
                  <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-on-surface-variant text-sm font-light leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-8 md:p-16 lg:p-24 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-on-primary tracking-tight">
              Shopify mağazanız için net bir SEO yol haritası
            </h2>
            <p className="text-on-primary/80 text-lg md:text-xl font-light max-w-2xl mx-auto">
              Teknik denetim, önceliklendirme ve uygulama planıyla birlikte ilerleyelim.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-[1.02] transition-transform shadow-2xl"
            >
              Ücretsiz Shopify SEO Analizi
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
