import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Copy,
  FileJson,
  Gauge,
  Layers,
  Link2,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { generateDynamicSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return generateDynamicSeoMetadata({
    title: "Shopify SEO Hizmeti — Liquid & Mağaza Optimizasyonu",
    description:
      "Shopify Liquid şablon optimizasyonu, uygulama temizliği, JSON-LD schema ve koleksiyon/ürün sayfası SEO ile organik satışlarınızı artırın.",
    path: "/seo/shopify-seo",
  });
}

const faqItems = [
  {
    q: "Shopify SEO nedir?",
    a: "Shopify SEO, mağazanızın tema, uygulama ve içerik katmanlarında arama motorlarının anlayacağı net sinyaller üretmenizi sağlar. Ürün ve koleksiyon sayfalarında doğru başlık hiyerarşisi, canonical yönetimi, yapılandırılmış veri ve site hızı ile organik trafik ve dönüşümü birlikte büyütür.",
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

const checklistItems = [
  "Liquid Kod Optimizasyonu",
  "Dinamik XML Sitemap",
  "Görsel Sıkıştırma & WebP",
  "Internal Link Mimarisi",
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
    desc: "İç bağlantı, breadcrumb ve net CTA akışı ile ürünten sepete giden yolu kısaltıyor, oturum içi kaybolmayı azaltıyoruz.",
  },
];

export default function ShopifySeoPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Shopify SEO Hizmeti",
            provider: { "@type": "LocalBusiness", name: "SEOROAS" },
            description:
              "Shopify mağazaları için teknik SEO, Liquid optimizasyonu, uygulama temizliği, JSON-LD ve koleksiyon/ürün sayfası optimizasyonu.",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          },
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
            Shopify Mağazanızı Google&apos;da{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              Zirveye
            </span>{" "}
            Taşıyoruz
          </>
        }
        subtitle="Tema ve uygulama katmanında hız, teknik SEO ve dönüşüm odaklı içerik sinyalleriyle mağazanızı hem kullanıcılar hem arama motorları için optimize ediyoruz."
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
            Tüm çözümler
          </Link>
        </div>
      </SubpageHero>

      {/* Speed */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">Performans</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-on-background leading-tight">
                Gereksiz Uygulama Temizliği ve Işık Hızında Yükleme
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
              Shopify&apos;a Özel Zorluklar &amp; Mimari Çözümlerimiz
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
              Mağazanızın teknik omurgasını sırayla güçlendiren dört kritik başlık.
            </p>
          </div>
          <ol className="grid sm:grid-cols-2 gap-6 md:gap-8 list-none">
            {checklistItems.map((item, i) => (
              <li
                key={item}
                className="flex gap-5 p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-on-primary text-xl font-black">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-lg leading-snug">{item}</p>
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
              Shopify SEO SSS
            </h2>
            <p className="text-on-surface-variant font-light">Mağaza sahiplerinin en sık sorduğu üç soru.</p>
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
              İletişime geçin
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
