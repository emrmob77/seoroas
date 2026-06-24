import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Code2,
  LineChart,
  Megaphone,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Store,
  Target,
  Wrench,
} from "lucide-react";
import { generateDynamicSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { serviceSchema, faqSchema } from "@/lib/schema";
import { SubpageHero } from "@/components/sections/SubpageHero";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return generateDynamicSeoMetadata({
    title: "Shopify Danışmanlık & Ajansı — Uçtan Uca Destek",
    description:
      "Shopify danışmanlık ve ajans hizmeti: mağaza kurulumu, SEO, Google Ads, GA4 ve yazılımsal geliştirme tek çatı altında. Ücretsiz keşif görüşmesi alın.",
    path: "/seo/shopify-danismanligi",
  });
}

const faqItems = [
  {
    q: "Shopify danışmanlık nedir?",
    a: "Shopify danışmanlık; bir e-ticaret markasının Shopify altyapısında kurulumdan büyümeye kadar olan tüm sürecini stratejik ve teknik olarak yönetme hizmetidir. Mağaza açılışı, tema ve yazılımsal geliştirme, SEO, Google Ads, analitik kurulumu ve dönüşüm optimizasyonu gibi başlıkların tamamını kapsayabilir. Amaç; doğru kurgu, ölçülebilir veri ve sürekli iyileştirmeyle satışları büyütmektir.",
  },
  {
    q: "Shopify danışmanı tam olarak ne iş yapar?",
    a: "Bir Shopify danışmanı; mağazanızın mevcut durumunu denetler, eksik ve riskli noktaları çıkarır, kurulum/migrasyon planı yapar, tema ve uygulama katmanını optimize eder, SEO ve reklam stratejisini kurar, GA4 ile veri altyapısını doğru kurgular ve büyüme için önceliklendirilmiş bir yol haritası uygular. SEOROAS olarak bu süreci tek ekip ve net hedeflerle yönetiyoruz.",
  },
  {
    q: "Sadece SEO mu yapıyorsunuz, yoksa kurulum ve reklam da dahil mi?",
    a: "Uçtan uca çalışıyoruz. Shopify mağaza kurulumu, tema özelleştirme ve yazılımsal geliştirme (Liquid/özel uygulama), SEO, Google Ads & Performance Max yönetimi, GA4 ve dönüşüm (CAPI) kurulumu, raporlama ve sürekli optimizasyon hizmetlerinin tamamını sağlıyoruz. İhtiyacınıza göre bunların hepsini ya da yalnızca seçtiğiniz başlıkları alabilirsiniz.",
  },
  {
    q: "Mevcut platformumdan Shopify'a geçiş (migrasyon) yapıyor musunuz?",
    a: "Evet. WooCommerce, Ticimax, İdeasoft, Magento veya özel altyapılardan Shopify'a geçişte ürün, kategori, müşteri ve URL yapısını koruyarak migrasyon yaparız. En kritik nokta 301 yönlendirme planıdır; mevcut SEO değerini kaybetmeden taşınmanızı sağlarız.",
  },
  {
    q: "Shopify danışmanlık fiyatları ne kadar?",
    a: "Fiyat; mağaza büyüklüğü, ürün sayısı, talep ettiğiniz kapsam (kurulum, SEO, reklam, geliştirme) ve hedeflerinize göre değişir. Tek seferlik denetim/kurulum projelerinden aylık sürekli danışmanlık ve büyüme paketlerine kadar farklı modeller sunuyoruz. Net teklif için ücretsiz görüşme talep edebilir, paketler için SEO fiyatları sayfamızı inceleyebilirsiniz.",
  },
  {
    q: "Resmi Shopify Partner ile mi çalışıyorum?",
    a: "Çalışmalarımızı Shopify Partner ekosistemi standartlarına uygun yürütüyoruz. Tema geliştirme, uygulama yönetimi ve mağaza kurulumunda Shopify'ın resmi araç ve en iyi uygulamalarını kullanır; markanızı platformun güncel imkânlarıyla büyütürüz.",
  },
  {
    q: "Yazılımsal destek kapsamında neler yapıyorsunuz?",
    a: "Liquid tema düzenlemeleri, özel bölüm (section) ve şablon geliştirme, üçüncü parti uygulama entegrasyonları, API ve webhook çalışmaları, checkout ve sepet özelleştirmeleri (Plus), hız optimizasyonu ve hata gidermeyi kapsar. İhtiyaç halinde özel Shopify uygulaması da geliştirebiliriz.",
  },
  {
    q: "Danışmanlık sürecinde nasıl raporlama alıyorum?",
    a: "GA4 ve Search Console verileriyle aylık performans raporu sunarız; trafik, sıralama, reklam ROAS'ı ve gelir bazlı metrikleri tek panelde takip edersiniz. Her dönem net aksiyon listesi ve bir sonraki ay önceliklerini paylaşırız.",
  },
];

const scopeAreas = [
  {
    icon: Settings,
    title: "Mağaza Kurulumu & Migrasyon",
    desc: "Sıfırdan Shopify mağaza kurulumu, alan adı/ödeme/kargo yapılandırması ve diğer platformlardan (WooCommerce, Ticimax, İdeasoft vb.) SEO değerini koruyarak taşıma.",
  },
  {
    icon: Code2,
    title: "Tema & Yazılımsal Geliştirme",
    desc: "Liquid tema özelleştirme, özel section/şablon geliştirme, uygulama entegrasyonu, API/webhook ve checkout düzenlemeleriyle mağazanızı isteğinize göre şekillendiririz.",
  },
  {
    icon: Search,
    title: "Shopify SEO",
    desc: "Teknik SEO, koleksiyon/ürün optimizasyonu, yapılandırılmış veri ve içerik stratejisiyle organik trafiği büyütürüz.",
    link: { href: "/seo/shopify-seo", label: "Shopify SEO hizmeti" },
  },
  {
    icon: Megaphone,
    title: "Google Ads & Performance Max",
    desc: "Alışveriş (Shopping), Performance Max ve arama kampanyalarını kârlı ROAS hedefiyle kurar, ürün feed'ini ve Merchant Center'ı optimize ederiz.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Veri (GA4 + CAPI)",
    desc: "GA4, Google Tag Manager, e-ticaret olay takibi ve sunucu taraflı dönüşüm (CAPI) kurulumuyla her kararı doğru veriyle alırsınız.",
    link: { href: "/hizmetler/google-tag-manager", label: "Google Tag Manager kurulumu" },
  },
  {
    icon: Target,
    title: "Dönüşüm (CRO) & Büyüme",
    desc: "Koleksiyon, ürün ve checkout akışında dönüşüm optimizasyonu; A/B testleri ve UX iyileştirmeleriyle aynı trafikten daha fazla satış üretiriz.",
  },
];

const processSteps = [
  {
    title: "Keşif & Denetim",
    desc: "Mağazanızı, hedeflerinizi ve rakiplerinizi analiz eder; teknik, SEO, reklam ve veri tarafındaki eksikleri tek raporda çıkarırız.",
  },
  {
    title: "Strateji & Yol Haritası",
    desc: "Önceliklendirilmiş, ölçülebilir bir plan kurarız: hangi iş, ne zaman, hangi beklenen etkiyle yapılacak — net biçimde tanımlanır.",
  },
  {
    title: "Uygulama",
    desc: "Kurulum, geliştirme, SEO, reklam ve analitik çalışmalarını ekibimiz hayata geçirir; siz tek noktadan ilerlemeyi takip edersiniz.",
  },
  {
    title: "Ölçüm & Büyüme",
    desc: "GA4 ve Search Console verisiyle sonuçları raporlar, kazanan kanalları büyütür, sürekli optimizasyonla bileşik büyüme sağlarız.",
  },
];

const whyUs = [
  "Tek ekip, tek muhatap: kurulum, SEO, reklam ve geliştirme dağınık ajanslara bölünmez.",
  "Veri odaklı: her aksiyon GA4 ve Search Console verisiyle gerekçelendirilir.",
  "Gerçek e-ticaret deneyimi: aktif Shopify mağazalarıyla çalışıyoruz.",
  "Şeffaf raporlama: gelir ve ROAS bazlı, anlaşılır aylık raporlar.",
  "Esnek kapsam: yalnızca ihtiyacınız olan başlıkları alabilirsiniz.",
  "Platform sınırlarını bilen yaklaşım: Shopify'a özgü doğru müdahaleler.",
];

const relatedServices = [
  {
    href: "/seo/shopify-seo",
    title: "Shopify SEO",
    desc: "Mağazanız için teknik SEO, Liquid optimizasyonu ve içerik stratejisi.",
  },
  {
    href: "/seo/e-ticaret-seo",
    title: "E-Ticaret SEO",
    desc: "Ürün ve kategori mimarisiyle organik gelir büyütme.",
  },
  {
    href: "/hizmetler/google-tag-manager",
    title: "Google Tag Manager",
    desc: "GA4, dönüşüm ve etiket yönetiminin doğru kurulumu.",
  },
  {
    href: "/seo-fiyatlari",
    title: "Fiyatlar & Paketler",
    desc: "Danışmanlık ve büyüme paketleri için güncel fiyatlandırma.",
  },
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
  { name: "Heka Store", url: "https://hekastore.com", logo: "https://cdn.sanity.io/images/67vl8x07/production/c6d51100bfb978651109bbf14681fa73ae16f48c-600x179.png" },
];

export default function ShopifyDanismanligiPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          serviceSchema(
            "Shopify Danışmanlık",
            "Shopify mağazaları için uçtan uca danışmanlık: mağaza kurulumu ve migrasyon, tema/yazılımsal geliştirme, SEO, Google Ads, GA4 & dönüşüm kurulumu ve sürekli optimizasyon sunan Shopify ajansı hizmeti.",
            "/seo/shopify-danismanligi"
          ),
          faqSchema(faqItems.map((item) => ({ question: item.q, answer: item.a }))),
        ]}
      />

      <SubpageHero
        breadcrumb={[
          { name: "SEO", url: "/seo" },
          { name: "Shopify Danışmanlık", url: "/seo/shopify-danismanligi" },
        ]}
        badge="Shopify · Uçtan Uca Danışmanlık"
        title={
          <>
            Shopify Danışmanlık: Kurulumdan Büyümeye{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              Tek Çatı
            </span>{" "}
            Altında
          </>
        }
        subtitle="Shopify ajansı olarak mağaza kurulumu, tema ve yazılımsal geliştirme, SEO, Google Ads ve veri/analitik kurulumunun tamamını yönetiyoruz. Dağınık ekipler yerine tek muhatapla, ölçülebilir büyüme."
        stats={[
          { value: "6 Alan", label: "Tek çatı kapsam" },
          { value: "Uçtan Uca", label: "Kurulum → Büyüme" },
        ]}
      >
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-base hover:opacity-95 transition-opacity shadow-lg"
          >
            Ücretsiz Shopify Görüşmesi
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/seo-fiyatlari"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-base hover:bg-primary/5 transition-colors"
          >
            Danışmanlık paketleri
          </Link>
        </div>
      </SubpageHero>

      {/* References — Shopify stores */}
      <section className="py-12 md:py-16 px-5 md:px-8 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-on-surface-variant font-bold tracking-widest text-xs uppercase mb-8">
            Danışmanlık Verdiğimiz Shopify Mağazaları
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

      {/* What is Shopify Danışmanlık — educational */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-t border-outline-variant/10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-6">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <span className="text-primary font-bold tracking-widest text-xs uppercase">Temeller</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tighter text-on-background">
            Shopify Danışmanlık Nedir?
          </h2>
          <div className="mt-6 space-y-5 text-on-surface-variant font-light leading-relaxed">
            <p>
              <strong className="font-semibold text-on-background">Shopify danışmanlık</strong>, bir e-ticaret
              markasının Shopify altyapısındaki tüm yolculuğunu — kurulumdan büyümeye kadar — stratejik ve teknik
              olarak yönetme hizmetidir. Mağaza açılışı, tema ve yazılımsal geliştirme, SEO, Google Ads, analitik
              kurulumu ve dönüşüm optimizasyonu tek bir ekip tarafından, birbirini destekleyecek şekilde planlanır.
            </p>
            <p>
              Markaların en sık yaşadığı sorun, bu başlıkların farklı ajans ve freelancer&apos;lara dağılması ve
              kimsenin bütünü görmemesidir. <strong className="font-semibold text-on-background">SEOROAS</strong>{" "}
              olarak danışmanlığı tek çatı altında topluyoruz: aynı veri, aynı hedef ve tek muhatapla ilerliyoruz.
              Yalnızca SEO&apos;ya odaklanmak isterseniz{" "}
              <Link href="/seo/shopify-seo" className="text-primary font-medium hover:underline">
                Shopify SEO
              </Link>{" "}
              hizmetimize de ayrıca bakabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Scope — 6 areas */}
      <section className="py-16 md:py-24 px-5 md:px-8 bg-surface-container-low/40">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-6">
              <Store className="h-6 w-6 text-primary" />
            </div>
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Kapsam</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tighter text-on-background">
              Shopify Danışmanlığımıza Neler Dahil?
            </h2>
            <p className="mt-4 text-on-surface-variant font-light leading-relaxed">
              Kurulumdan reklama, yazılımdan veriye kadar bir Shopify markasının ihtiyaç duyduğu altı temel alanı
              uçtan uca yönetiyoruz. Hepsini ya da yalnızca seçtiğiniz başlıkları alabilirsiniz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scopeAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="bg-surface-container-lowest border border-outline-variant/10 p-8 rounded-[2rem] hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-on-background mb-2">{area.title}</h3>
                  <p className="text-on-surface-variant text-sm font-light leading-relaxed">{area.desc}</p>
                  {area.link && (
                    <Link
                      href={area.link.href}
                      className="mt-4 inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
                    >
                      {area.link.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-6">
              <Rocket className="h-6 w-6 text-primary" />
            </div>
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Süreç</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tighter text-on-background">
              Danışmanlık Sürecimiz: 4 Adımda Sonuç
            </h2>
            <p className="mt-4 text-on-surface-variant font-light leading-relaxed">
              Belirsizliği ortadan kaldıran, önceliklendirilmiş ve ölçülebilir bir çalışma modeli.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
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

      {/* Software / technical support highlight */}
      <section className="py-16 md:py-24 px-5 md:px-8 bg-surface-container-low/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <span className="text-primary font-bold tracking-widest text-xs uppercase">Yazılımsal Destek</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-on-background leading-tight">
                Tema, Liquid ve Özel Geliştirme İhtiyaçlarınız Bizde
              </h2>
              <p className="text-on-surface-variant font-light leading-relaxed max-w-lg">
                Hazır temaların yetmediği yerde devreye giriyoruz. Liquid düzenlemeleri, özel section ve şablon
                geliştirme, uygulama entegrasyonları ve checkout özelleştirmeleriyle mağazanızı tam istediğiniz
                gibi kurguluyoruz.
              </p>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                Geliştirme ihtiyacınızı konuşalım
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-[2rem] p-8 md:p-10 space-y-4">
              {[
                "Liquid tema özelleştirme & özel section geliştirme",
                "Üçüncü parti uygulama entegrasyonu ve sadeleştirme",
                "API, webhook ve ERP/muhasebe entegrasyonları",
                "Checkout & sepet özelleştirmeleri (Shopify Plus)",
                "Hız optimizasyonu ve Core Web Vitals iyileştirme",
                "Özel Shopify uygulaması geliştirme",
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

      {/* Why us */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-6">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Neden SEOROAS</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tighter text-on-background">
              Neden Shopify Danışmanlığı İçin Bizi Seçmelisiniz?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
            {whyUs.map((row) => (
              <div key={row} className="flex items-start gap-3 text-on-surface-variant font-light leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{row}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration highlight */}
      <section className="py-16 md:py-24 px-5 md:px-8 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/20">
              <ShoppingBag className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Shopify&apos;a Geçiş mi Planlıyorsunuz?
            </h2>
            <p className="text-white/60 font-light leading-relaxed max-w-lg">
              WooCommerce, Ticimax, İdeasoft, Magento veya özel bir altyapıdan Shopify&apos;a geçerken en büyük risk
              SEO değerini kaybetmektir. Ürün, kategori ve URL yapınızı koruyup eksiksiz bir 301 yönlendirme planıyla
              taşıyarak organik trafiğinizi güvenceye alırız.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white text-zinc-900 px-7 py-4 rounded-full font-bold hover:scale-[1.02] transition-transform"
            >
              Migrasyon planı isteyin
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: LineChart, t: "SEO Değerini Koru", d: "301 yönlendirme planıyla sıralama kaybı yaşamadan geçiş." },
              { icon: Settings, t: "Eksiksiz Kurulum", d: "Ödeme, kargo, vergi ve tema yapılandırması baştan doğru." },
              { icon: Code2, t: "Veri Taşıma", d: "Ürün, müşteri ve sipariş verisinin güvenli aktarımı." },
              { icon: BarChart3, t: "Ölçümleme", d: "GA4 ve dönüşüm takibi ilk günden hazır." },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.t} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <Icon className="h-6 w-6 text-primary mb-3" />
                  <p className="font-bold text-base mb-1.5">{c.t}</p>
                  <p className="text-sm text-white/55 font-light leading-relaxed">{c.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-t border-outline-variant/10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 md:mb-14 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-background mb-3">
              Shopify Danışmanlık Hakkında Sık Sorulan Sorular
            </h2>
            <p className="text-on-surface-variant font-light">
              Mağaza sahiplerinin Shopify danışmanlık hizmeti hakkında en çok sorduğu sorular.
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

      {/* Related services */}
      <section className="py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">İlgili Hizmetler</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tighter text-on-background">
              Shopify Büyümenizi Tamamlayan Çözümler
            </h2>
            <p className="mt-4 text-on-surface-variant font-light leading-relaxed">
              Danışmanlık kapsamında en sık birlikte yürüttüğümüz hizmetler.
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
              Shopify markanız için tek bir büyüme ortağı
            </h2>
            <p className="text-on-primary/80 text-lg md:text-xl font-light max-w-2xl mx-auto">
              Kurulum, SEO, reklam ve veri — hepsini tek çatı altında konuşalım. Ücretsiz keşif görüşmesiyle başlayın.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-[1.02] transition-transform shadow-2xl"
            >
              Ücretsiz Shopify Görüşmesi
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
