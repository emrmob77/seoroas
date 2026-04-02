import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, BrainCircuit, ShieldCheck, Target, Sparkles, Activity, Database } from "lucide-react";
import { generateDynamicSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return generateDynamicSeoMetadata({
    title: "GEO Nedir? Generative Engine Optimization Hizmeti",
    description:
      "GEO ile markanızı ChatGPT, Gemini ve Perplexity'de 1. kaynak yapın. Entity mapping, knowledge graph ve AI atıf mühendisliği hizmeti.",
    path: "/geo",
  });
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const comparison = {
  legacy: [
    { icon: "list", title: "İndeksle & Getir", desc: "Arama motorları anahtar kelime ve backlink'e göre sıralama yapar, kullanıcıya mavi link listesi sunar." },
    { icon: "click", title: "CTR Odaklı", desc: "Hedef tıklamayı kazanmaktır. Trafik başarı metriğidir, genellikle parçalı kullanıcı yolculuklarına yol açar." },
  ],
  generative: [
    { icon: "brain", title: "Anla & Üret", desc: "LLM'ler geniş veri kümelerini sentezleyerek doğrudan yanıtlar üretir. Markanız bilgi grafiğine işlenmelidir." },
    { icon: "shield", title: "Kaynak Bütünlüğü", desc: "Atıfı kazanmak. Başarı, üretilen yanıtta \"Otoriter Kaynak\" olmakla ölçülür." },
  ],
};

const methodology = [
  {
    num: "01",
    title: "Entity Mapping",
    subtitle: "Varlık Haritalama",
    desc: "Markanızın çekirdek kimliğini global bilgi grafiğinde tanımlıyoruz. Ürünleriniz, uzmanlarınız ve sektör kavramları arasında net semantik ilişkiler kurarak LLM'lerin değer önerinizi yanlış yorumlamasını imkansız kılıyoruz.",
    tags: ["Knowledge Graph", "Semantic Relations"],
  },
  {
    num: "02",
    title: "Source Integrity",
    subtitle: "Kaynak Bütünlüğü",
    desc: "Doğrusal olmayan AI taraması için özel geliştirilmiş JSON-LD ve mikro-şemalar uyguluyoruz. Ham verilerinizin makine okunabilirliğini artırarak halüsinasyonları azaltıyor, güven puanını yükseltiyoruz.",
    tags: ["JSON-LD", "Schema Validation"],
  },
  {
    num: "03",
    title: "Conversational Tuning",
    subtitle: "Konuşma Ayarlama",
    desc: "İçeriğinizi insanların yapay zeka ile gerçekte konuşma şekline göre optimize ediyoruz. \"Anahtar kelime\" ötesine geçerek \"bilgi yanıtları\" üreten uzun kuyruklu semantik niyeti hedefliyoruz.",
    tags: ["Semantic Intent", "NLP"],
  },
  {
    num: "04",
    title: "Citation Engineering",
    subtitle: "Atıf Mühendisliği",
    desc: "Markanızın kaynak olarak gösterilme olasılığını artırmak için stratejik manevralar uyguluyoruz. Büyük LLM'ler genelinde atıf oranlarını izleyip mimari sinyalleri gerçek zamanlı ayarlıyoruz.",
    tags: ["Real-time", "Monitoring"],
  },
];

const engines = [
  {
    name: "ChatGPT",
    provider: "OpenAI",
    color: "bg-slate-900",
    features: [
      "Uzun form otorite sinyalleri",
      "Plugin & API entegrasyon ayarı",
      "Semantik tutarlılık optimizasyonu",
    ],
  },
  {
    name: "Gemini",
    provider: "Google",
    color: "bg-[#4285F4]",
    features: [
      "Google Knowledge Graph bağlantısı",
      "SGE (Search Generative Experience) uyumu",
      "E-E-A-T puan optimizasyonu",
    ],
  },
  {
    name: "Claude",
    provider: "Anthropic",
    color: "bg-[#D97757]",
    features: [
      "Uzun bağlam penceresi optimizasyonu",
      "Etik marka sentez uyumu",
      "Nüanslı bilgi yapılandırma",
    ],
  },
  {
    name: "Perplexity",
    provider: "Perplexity AI",
    color: "bg-[#20B2AA]",
    features: [
      "Gerçek zamanlı web indeksleme hızı",
      "Kaynak kartları için yapılandırılmış veri",
      "Doğrulama döngüleri entegrasyonu",
    ],
  },
];

const bentoItems = [
  { title: "Knowledge Graph Injection", desc: "Sayfa değil, varlık oluşturuyoruz. Markanızı global bilgi grafiğindeki yerleşik düğümlere bağlayarak AI bellek bankalarında üst düzey varlık sağlıyoruz.", tags: ["Entity Linkage", "Node Mapping"], large: true },
  { title: "LLM-Friendly Schemas", desc: "Büyük Dil Modellerinin gerçek zamanlı verilerinizi okuması için doğrudan API görevi gören özel markup.", tags: [], accent: true },
  { title: "Structured Data Velocity", desc: "Marka bilgilerinizin her model ince-ayar döngüsünde güncel olmasını sağlayan yüksek frekanslı güncellemeler.", tags: [] },
  { title: "Synthetic Latent Alignment", desc: "AI'ın kullanıcıların gelecekte soracağını tahmin ettiği sorular için içeriğinizi optimum pozisyona taşıyan ileri düzey test yöntemleri.", tags: [], wide: true },
];

const dashboardMetrics = [
  { label: "Atıf Oranı", value: "84", unit: "%", status: "Yüksek" },
  { label: "LLM Duygu Puanı", value: "0.92", unit: "", status: "Optimal" },
  { label: "Marka Güncelliği", value: "2.4", unit: "ms", status: "Hızlı" },
];

const capabilities = [
  { title: "Entity Mapping", desc: "Global bilgi düğümleriyle marka varlıklarını ilişkilendirme" },
  { title: "Multi-modal Hazırlık", desc: "Görsel ve doküman verilerini vizyon modelleri için optimize etme" },
  { title: "Mention Monitoring", desc: "Generatif çıktılarda marka ses payı ve duygu takibi" },
  { title: "Hallucination Prevention", desc: "AI modellerinin verilerinizi doğru sunmasını sağlayan teknik güvenceler" },
];

const faqItems = [
  { q: "GEO ile geleneksel SEO arasındaki fark nedir?", a: "Geleneksel SEO, anahtar kelimelere dayalı mavi link sıralamasını optimize eder. GEO ise üretici sürecin kendisini optimize eder. Bu, semantik bütünlük, varlık netliği ve LLM'lerin güvenip yeniden üretebileceği doğrulanabilir gerçekler oluşturmayı gerektirir." },
  { q: "SGE organik trafiği bitirecek mi?", a: "Bitirmeyecek ama dönüştürecek. Kullanıcılar link değil yanıt arıyor. Markanız yanıtı sağlıyor ve otorite olarak atıf gösteriliyorsa, mümkün olan en yüksek niyetli trafiği kazanırsınız. Biz atıf slotunu yakalamaya odaklanıyoruz." },
  { q: "Generative çağda SEO ölecek mi?", a: "SEO ölmüyor, evrimleşiyor. Geleneksel anahtar kelime hacmi azalabilir, ancak atıf yapılan uzman olmanın değeri artıyor. GEO bir sonraki mantıksal adımdır — bulmaktan bilmeye geçiş." },
  { q: "Gemini kaynaklarını nasıl seçiyor?", a: "Gemini kaynak güvenilirliğine ve yapılandırılmış veri yoğunluğuna öncelik verir. Google'ın Knowledge Graph API'si ve özel şema etiketleri kullanarak markanızı modelin gözünde doğrulanmış hale getiriyoruz." },
  { q: "AI atıflarını takip edebilir miyiz?", a: "Evet. Görünürlük Matrisi ile 15+ büyük LLM genelinde üretilen çıktılardaki marka varlığını izliyor, ses payı ve sentez doğruluğunu ölçüyoruz." },
  { q: "Knowledge Graph Injection nedir?", a: "Marka verilerinizin benzersiz veri noktalarını, AI eğitim setleri tarafından kullanılan global bilgi grafiğindeki yerleşik düğümlere bağlama sürecimizdir. Wikidata, schema.org ve sektöre özgü veri tabanları ile entegrasyon sağlanır." },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function GeoPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "GEO - Generative Engine Optimization Hizmeti",
            provider: { "@type": "LocalBusiness", name: "SEOROAS" },
            description:
              "ChatGPT, Gemini, Claude ve Perplexity gibi yapay zeka motorlarında marka görünürlüğü optimizasyonu. Entity mapping, knowledge graph injection ve AI atıf mühendisliği.",
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

      {/* Hero */}
      <SubpageHero
        breadcrumb={[
          { name: "GEO (Generative Engine Optimization)", url: "/geo" },
        ]}
        badge="Yapay Zeka Çağı Optimizasyonu"
        title={
          <>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              Generative Engine
            </span>{" "}
            Optimization ile AI Çağına Hazır Olun.
          </>
        }
        subtitle="Statik içerik ile yapay zeka sentezi arasındaki boşluğu kapatıyoruz. Markanızı ChatGPT, Gemini, Claude ve Perplexity'nin birincil kaynağı haline getiriyoruz."
        stats={[
          { value: "%92", label: "SGE Tercihi" },
          { value: "3.4x", label: "Atıf Oranı" },
        ]}
      />

      {/* GEO Nedir? */}
      <section className="py-16 md:py-32 px-5 md:px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                Paradigma Değişimi
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-background">
                GEO Nedir?
              </h2>
            </div>
            <div className="space-y-5 text-on-surface-variant leading-relaxed">
              <p>
                Generative Engine Optimization (GEO), marka verilerinizi GPT-4, Gemini ve Claude gibi Büyük Dil Modelleri (LLM) tarafından okunabilir, sentezlenebilir ve atıf yapılabilir şekilde optimize eden teknik disiplindir.
              </p>
              <p>
                Geleneksel SEO bağlantı otoritesine ve anahtar kelimelere odaklanırken, GEO{" "}
                <strong className="text-on-background">Bilgi Yoğunluğu</strong> ve{" "}
                <strong className="text-on-background">Bilgi Grafiği İlişkilendirmesi</strong>&apos;ne odaklanır. Yapay zeka motorları sadece &quot;sıralama&quot; yapmaz — yanıtları sentezler ve otoriter kaynakları atıf gösterir.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest border-[0.5px] border-outline-variant/10 p-6 rounded-2xl">
                <span className="text-3xl font-extrabold text-primary block mb-1 tracking-tighter">%92</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">SGE Tercihi</span>
              </div>
              <div className="bg-surface-container-lowest border-[0.5px] border-outline-variant/10 p-6 rounded-2xl">
                <span className="text-3xl font-extrabold text-on-background block mb-1 tracking-tighter">3.4x</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Atıf Oranı</span>
              </div>
            </div>
          </div>

          {/* Query simulation */}
          <div className="bg-surface-container-lowest border-[0.5px] border-outline-variant/10 rounded-3xl p-8 md:p-12 shadow-[0_40px_80px_rgba(0,0,0,0.04)]">
            <div className="space-y-4 border-l-2 border-primary pl-6 mb-10">
              <p className="text-xs font-bold text-primary uppercase tracking-widest">Sorgu İşleniyor</p>
              <p className="text-xl md:text-2xl font-medium italic text-on-background leading-snug">
                &quot;2026 için en iyi kurumsal GEO stratejisini anlat...&quot;
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-3 w-3/4 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[65%] rounded-full" />
              </div>
              <div className="h-3 w-1/2 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[80%] rounded-full" />
              </div>
              <div className="h-3 w-2/3 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[45%] rounded-full" />
              </div>
              <p className="text-sm text-on-surface-variant mt-6">
                AI Sentez Katmanı:{" "}
                <span className="text-on-background font-bold">seoroas.com analiz ediliyor...</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Paradigma Karşılaştırma */}
      <section className="py-16 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-background mb-4">
              Neden GEO?
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-light">
              Arama motorlarından yapay zeka motorlarına geçişte stratejinizi dönüştürün.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-[1px] rounded-3xl overflow-hidden border-[0.5px] border-outline-variant/10 bg-outline-variant/10">
            {/* Legacy */}
            <div className="bg-surface p-8 md:p-16 space-y-10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4 block">Eski Mimari</span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Geleneksel Arama</h3>
              </div>
              {comparison.legacy.map((item) => (
                <div key={item.title} className="flex gap-5 items-start">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
                    {item.icon === "list" ? <Database className="w-5 h-5 text-on-surface-variant" /> : <Target className="w-5 h-5 text-on-surface-variant" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide mb-2">{item.title}</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Generative */}
            <div className="bg-surface-container-low p-8 md:p-16 space-y-10 relative">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 block">Gelecek Sentezi</span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Generative Motorlar</h3>
              </div>
              {comparison.generative.map((item) => (
                <div key={item.title} className="flex gap-5 items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    {item.icon === "brain" ? <BrainCircuit className="w-5 h-5 text-primary" /> : <ShieldCheck className="w-5 h-5 text-primary" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide mb-2">{item.title}</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metodoloji — 4 Adım */}
      <section className="py-16 md:py-32 px-5 md:px-8 bg-surface-container-low">
        <div className="max-w-5xl mx-auto text-center mb-10 md:mb-20">
          <span className="text-primary font-bold tracking-widest text-xs uppercase">Metodoloji</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-background mt-4 mb-4">
            4 Adımlı GEO Süreci.
          </h2>
          <p className="text-on-surface-variant font-light max-w-2xl mx-auto">
            AI-First çağı için mühendislik sürecimiz.
          </p>
        </div>
        <div className="max-w-7xl mx-auto space-y-6">
          {methodology.map((step) => (
            <div
              key={step.num}
              className="bg-surface-container-lowest border-[0.5px] border-outline-variant/10 rounded-[2rem] p-8 md:p-12 hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <span className="text-7xl font-black text-primary/10 leading-none select-none shrink-0">
                  {step.num}
                </span>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-on-background">{step.title}</h3>
                    <span className="text-sm text-on-surface-variant">{step.subtitle}</span>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed">
                    {step.desc}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Motor Kartları */}
      <section className="py-16 md:py-32 px-5 md:px-8 bg-[#0c0e10] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Motor Özel Optimizasyon</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4">
              Her AI Motoru İçin Ayrı Strateji.
            </h2>
            <p className="text-white/50 font-light max-w-xl mx-auto">
              Farklı LLM&apos;lerin farklı veri tüketim kalıpları vardır. Her motorun benzersiz mimarisine özel optimize ediyoruz.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {engines.map((engine) => (
              <div
                key={engine.name}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl hover:bg-white/10 transition-colors duration-500"
              >
                <div className={`w-12 h-12 mb-6 flex items-center justify-center rounded-xl ${engine.color} text-white`}>
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-1">{engine.name}</h3>
                <span className="text-[10px] font-medium text-white/40 block uppercase tracking-widest mb-6">{engine.provider}</span>
                <ul className="space-y-3">
                  {engine.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-white/60 text-sm">
                      <Sparkles className="w-3.5 h-3.5 text-primary mt-1 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Neler Yapılabilir? */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="space-y-3">
                <div className="w-8 h-[1px] bg-primary" />
                <h4 className="text-white font-bold text-sm uppercase tracking-wide">{cap.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teknik Mühendislik — Bento Grid */}
      <section className="py-16 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                Teknik Derinlik
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-background">
                Teknik Mühendislik.
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-sm font-light">
              Dijital çekirdeğinizi AI tarafından sorunsuz okunabilir hale getiren hassas ayarlamalar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
            {bentoItems.map((item) => (
              <div
                key={item.title}
                className={`${
                  item.large ? "md:col-span-2" : ""
                } ${item.wide ? "md:col-span-2 flex items-center gap-8" : ""} ${
                  item.accent
                    ? "bg-primary text-white"
                    : "bg-surface-container-lowest border-[0.5px] border-outline-variant/10 hover:shadow-2xl"
                } rounded-3xl p-10 flex flex-col justify-between transition-all duration-500`}
              >
                <div>
                  <h3 className={`${item.large ? "text-2xl" : "text-lg"} font-bold mb-3 ${item.accent ? "" : "text-on-background"}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${item.accent ? "text-white/70" : "text-on-surface-variant"}`}>
                    {item.desc}
                  </p>
                </div>
                {item.tags.length > 0 && (
                  <div className="flex gap-2 flex-wrap mt-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-surface-container-high text-[9px] uppercase font-bold tracking-wider rounded-full text-on-surface-variant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Görünürlük Metrikleri */}
      <section className="py-16 md:py-32 px-5 md:px-8 bg-surface-container-low">
        <div className="max-w-5xl mx-auto">
          <div className="bg-surface-container-lowest rounded-[2.5rem] shadow-[0_80px_120px_rgba(77,74,213,0.08)] p-8 md:p-12 border-[0.5px] border-outline-variant/10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 md:mb-16 gap-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-on-background">AI Görünürlük Metrikleri</h2>
                <p className="text-xs text-on-surface-variant font-medium uppercase tracking-widest mt-1">Canlı İstihbarat Terminali</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" />
                <span className="text-[10px] font-bold uppercase text-on-surface-variant">Gerçek Zamanlı</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center">
              {dashboardMetrics.map((m) => (
                <div key={m.label} className="space-y-4">
                  <div className="text-5xl font-extrabold tracking-tighter text-primary">
                    {m.value}
                    {m.unit && <span className="text-xl font-normal opacity-50 ml-1">{m.unit}</span>}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{m.label}</div>
                  <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${m.label === "Marka Güncelliği" ? 60 : parseInt(m.value)}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-emerald-500 font-bold uppercase">{m.status}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 md:mt-16 p-6 md:p-8 rounded-2xl bg-surface-container-low border-l-4 border-primary">
              <div className="flex gap-4 md:gap-6 items-start">
                <Activity className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  <span className="text-primary font-bold">ANALİZ:</span>{" "}
                  Tahminsel modeller, kaynak bütünlüğü düğümleri 72 saat içinde güncellenirse marka otoritesinde %12.4 artış öngörmektedir. &quot;Ürün Yeteneği&quot; kümesinde semantik kayma tespit edildi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-32 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 md:mb-20 text-center">
            <h2 className="text-4xl font-extrabold tracking-tighter mb-4">
              Sık Sorulan Sorular
            </h2>
            <p className="text-on-surface-variant font-light">
              GEO hizmetimiz hakkında merak edilenler.
            </p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group bg-surface-container-low rounded-2xl p-6 cursor-pointer open:bg-surface-container-high transition-colors"
              >
                <summary className="list-none flex justify-between items-center font-bold text-base text-on-background [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <svg className="h-5 w-5 shrink-0 text-on-surface-variant transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-on-surface-variant leading-relaxed font-light text-sm">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-8 md:p-16 lg:p-32 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-on-primary tracking-tighter">
              AI Görünürlüğünüzü Güvence Altına Alın.
            </h2>
            <p className="text-on-primary/70 text-xl font-light max-w-2xl mx-auto">
              Markanızı yapay zeka motorlarının birincil kaynağı haline getirmek için bugün başlayın.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl"
            >
              Ücretsiz GEO Denetimi
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
