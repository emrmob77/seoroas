import type { Metadata } from "next";
import Link from "next/link";
import { generateDynamicSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { Star } from "lucide-react";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return generateDynamicSeoMetadata({
    title: "Referanslar — SEO Başarı Hikayeleri & Vaka Analizleri",
    description:
      "E-ticaret, SaaS, sağlık ve gayrimenkul sektörlerinde somut verilerle kanıtlanmış SEO başarı hikayelerini inceleyin.",
    path: "/referanslar",
  });
}

const summaryStats = [
  { value: "500+", label: "Tamamlanan Proje" },
  { value: "94%", label: "Müşteri Sadakati" },
  { value: "3.2X", label: "Ortalama ROI Artışı" },
  { value: "+240%", label: "Organik Trafik İvmesi" },
];

const caseStudies = [
  {
    category: "E-Ticaret",
    title: "Moda Devinde %312 Gelir Artışı",
    desc: "Uluslararası bir moda markasının organik kanal gelirlerini 12 ayda 3 katına çıkardık.",
    metrics: [
      { label: "Trafik", value: "+180%" },
      { label: "Dönüşüm", value: "+45%" },
      { label: "Anahtar K.", value: "12k+" },
    ],
  },
  {
    category: "B2B SaaS",
    title: "Global SaaS Lead Gen Stratejisi",
    desc: "CRM yazılımı için her ay 2.500+ nitelikli demo talebi üreten içerik hunisi mimarisi.",
    metrics: [
      { label: "Demo", value: "+210%" },
      { label: "CPL", value: "-35%" },
      { label: "Global Sıra", value: "#1" },
    ],
  },
  {
    category: "Hukuk",
    title: "Otorite Odaklı Hukuki SEO",
    desc: "Zorlu hukuki terimlerde Google ilk sayfa dominasyonu ve prestij artışı.",
    metrics: [
      { label: "Görünürlük", value: "+125%" },
      { label: "Güven Skoru", value: "92/100" },
      { label: "Tıklama", value: "4.2k" },
    ],
  },
  {
    category: "Sağlık",
    title: "Sağlık Turizminde Dijital Köprü",
    desc: "Avrupa pazarından gelen hasta randevularını 240% artıran çok dilli SEO çalışması.",
    metrics: [
      { label: "Randevu", value: "+240%" },
      { label: "ROI", value: "5.5X" },
      { label: "Diller", value: "4" },
    ],
  },
  {
    category: "Eğitim",
    title: "Üniversite Tercih Dönemi Dominasyonu",
    desc: "3 ayda kritik terimlerde ilk 3 sıra hedefiyle rekor başvuru sayısı.",
    metrics: [
      { label: "Başvuru", value: "+90%" },
      { label: "Erişim", value: "1.2M" },
      { label: "Sıralama", value: "Top 3" },
    ],
  },
  {
    category: "Gayrimenkul",
    title: "Lüks Konut Satışlarında %40 Artış",
    desc: "Niche hedeflerle yüksek bütçeli konut projelerinde nitelikli lead üretimi.",
    metrics: [
      { label: "Satış", value: "+40%" },
      { label: "Lead", value: "1.8k" },
      { label: "CPA", value: "-22%" },
    ],
  },
];

const testimonials = [
  {
    text: "Organik trafiğimizin bir yılda 3 katına çıkması sadece başlangıçtı. Asıl farkı, gelen trafiğin satışa dönme hızında hissettik.",
    name: "Ahmet B.",
    role: "Moda CEO",
  },
  {
    text: "SEO'yu sadece bir teknik iş olarak görüyorduk, SEOROAS bize bunun bir iş stratejisi olduğunu kanıtladı.",
    name: "Selin K.",
    role: "SaaS Pazarlama Müdürü",
  },
  {
    text: "E-ticaret hacmimiz o kadar hızlı büyüdü ki, operasyon merkezimizi büyütmek zorunda kaldık.",
    name: "Murat Y.",
    role: "E-Ticaret Direktörü",
  },
];

const clients: { name: string; url: string; logo: string | null; invert?: boolean }[] = [
  { name: "Saat ve Saat", url: "https://www.saatvesaat.com", logo: "https://cdn.sanity.io/images/67vl8x07/production/5e8a0f00d048cf7f5b14207911263abc2e729152-300x70.png" },
  { name: "Lizay Pırlanta", url: "https://www.lizaypirlanta.com", logo: "https://cdn.sanity.io/images/67vl8x07/production/605fe1bc09c1be3d70b40b3b64b5f5d14be4b563-125x40.svg" },
  { name: "Lescon", url: "https://www.lescon.com.tr", logo: "https://cdn.sanity.io/images/67vl8x07/production/4382a4287dc6d22ae69ce5fd1c389bb9857ee843-180x19.svg" },
  { name: "Dagi", url: "https://www.dagi.com.tr", logo: "https://cdn.sanity.io/images/67vl8x07/production/051214d837784e57a32651f9cc73aa520a56c942-685x166.svg" },
  { name: "Roman", url: "https://www.roman.com.tr", logo: "https://cdn.sanity.io/images/67vl8x07/production/f34ab39583e11515ea2b8d02780f59162c8b26a9-130x24.webp" },
  { name: "Gizia", url: "https://www.gizia.com", logo: "https://cdn.sanity.io/images/67vl8x07/production/f2439c3747c1668833d9517f9ce43ae2fdbdf4e3-174x50.png" },
  { name: "Teksan", url: "https://www.teksan.com", logo: "https://cdn.sanity.io/images/67vl8x07/production/401bc87b1ff7af9ff2e72d1d4fc37c531e635fc6-180x39.png" },
  { name: "Tergan", url: "https://www.tergan.com.tr", logo: "https://cdn.sanity.io/images/67vl8x07/production/289f5caefa08fac8292707aa77ed378f9ad2bec6-298x36.svg" },
  { name: "Kozmela", url: "https://www.kozmela.com", logo: "https://cdn.sanity.io/images/67vl8x07/production/776227dda3a5d134b9199ac3f47cb1a4eb3a2729-524x116.svg" },
  { name: "Ogstore", url: "https://www.ogstore.com.tr", logo: "https://cdn.sanity.io/images/67vl8x07/production/77558b94b396179aafd1b3ee5ed42a527fabc76c-145x171.png" },
  { name: "Malitur", url: "https://malitur.com", logo: "https://cdn.sanity.io/images/67vl8x07/production/b4878827ca45b412cc9a14ca1f9c748a5bbc68ae-723x111.png" },
  { name: "İmza", url: "https://www.imza.com.tr", logo: "https://cdn.sanity.io/images/67vl8x07/production/1dc89e3b66bc202826f8286b329a89263354059f-270x80.png" },
  { name: "Güven Sanat", url: "https://www.guvensanat.com", logo: "https://cdn.sanity.io/images/67vl8x07/production/b940257aac03dbfbf48e1bdfd437ca3b7d8b5bb6-285x149.png" },
  { name: "Drd", url: "https://www.drd.com.tr", logo: "https://cdn.sanity.io/images/67vl8x07/production/6b13767d171494cc0815399aa024b9ef9810f123-317x69.svg" },
  { name: "İntegral Menkul", url: "https://integralyatirim.com.tr", logo: "https://cdn.sanity.io/images/67vl8x07/production/3862108844ead5e24d617067f37b393d8bfe0434-1997x570.webp" },
  { name: "Sneaksup", url: "https://www.sneaksup.com", logo: "https://cdn.sanity.io/images/67vl8x07/production/f92ecf877d19c47cc93d29790bb2b503a4254e10-262x40.svg" },
  { name: "Teknotel", url: "https://teknotel.com.tr", logo: "https://cdn.sanity.io/images/67vl8x07/production/c115ce9be3603834561bbd7a0826587b3f7381f1-400x158.png" },
  { name: "Konyalı Saat", url: "https://www.konyalisaat.com.tr", logo: "https://cdn.sanity.io/images/67vl8x07/production/97fc2d9d342bdc18190063804cf297b5db0a481e-600x121.png" },
  { name: "SecretCv", url: "https://www.secretcv.com", logo: "https://cdn.sanity.io/images/67vl8x07/production/72fe617306fe5aa6258667b2bae530caa02da72b-3190x1080.svg", invert: true },
  { name: "forex.com.tr", url: "https://www.forex.com.tr", logo: "https://cdn.sanity.io/images/67vl8x07/production/bf46a8d6e1cc0314a40aa46621bc8568b3e9e7b8-182x62.png", invert: true },
  { name: "Donanımhaber", url: "https://www.donanimhaber.com", logo: "https://cdn.sanity.io/images/67vl8x07/production/3fe1e0744ba11dd0a642ff7d355a166c607aa8ee-122x80.png", invert: true },
  { name: "Kosovalı Saat", url: "https://www.kosovalisaat.com", logo: "https://cdn.sanity.io/images/67vl8x07/production/d7c3939f68f8d4efb558a6284c0bfc268b425b17-281x30.png" },
  { name: "Tamer Tanca", url: "https://www.tamertanca.com.tr", logo: "https://cdn.sanity.io/images/67vl8x07/production/08a19b659288b0ad1f2137a2b7da4ee621b94a90-200x70.svg" },
  { name: "Kumtel", url: "https://www.kumtel.com", logo: "https://cdn.sanity.io/images/67vl8x07/production/e7dd70ab983c3806e57fdb1be5d901cda55c9730-300x45.png" },
  { name: "İntegral Forex", url: "https://www.integralforex.com.tr", logo: "https://cdn.sanity.io/images/67vl8x07/production/81e65fdb5c9c1dadbb5b8af481a34cf969fb5f57-250x107.png" },
  { name: "Uyumsoft", url: "https://www.uyumsoft.com", logo: "https://cdn.sanity.io/images/67vl8x07/production/977a2fd9bbf9da9e4ec0c5f14cc8bf6ae5d8e733-153x35.svg" },
  { name: "Yıldız Mobilya", url: "https://yildiz-mobilya.com", logo: "https://cdn.sanity.io/images/67vl8x07/production/d089c3c1a7ca2996d40760273d192049e5d92df8-900x116.png", invert: true },
  { name: "Hekim Holding", url: "https://www.hekimholding.com.tr", logo: "https://cdn.sanity.io/images/67vl8x07/production/717e95a30ca50a96f2ac691ec5759cf9600b7927-200x105.jpg" },
  // Shopify mağaza referansları
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
  { name: "Spektra Diamond", url: "https://spektradiamond.com", logo: null },
];

export default function ReferanslarPage() {
  return (
    <>
      <SchemaOrg
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Referanslar & Vaka Analizleri — SEOROAS",
          description:
            "Somut verilerle tescillenmiş büyüme grafikleri. Her sektörün dinamiğine özel kurgulanmış SEO mimarisi.",
          publisher: {
            "@type": "Organization",
            name: "SEOROAS",
            url: "https://seoroas.com",
          },
        }}
      />

      <SubpageHero
        breadcrumb={[{ name: "Referanslar", url: "/referanslar" }]}
        badge="Başarı Hikayeleri"
        title={
          <>
            Rakamlarla Anlattığımız{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              Başarı Hikayeleri
            </span>
          </>
        }
        subtitle="Kelimelerin ötesinde, somut verilerle tescillenmiş büyüme grafikleri. Her sektörün dinamiğine özel kurgulanmış SEO mimarisi."
      />

      {/* Summary Stats */}
      <section className="bg-surface-container-low py-16 md:py-24 mb-16 md:mb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {summaryStats.map((s) => (
              <div key={s.label} className="space-y-2">
                <div className="text-4xl md:text-7xl font-extrabold tracking-[-0.04em] text-primary">
                  {s.value}
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-on-surface-variant/70">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients / Müşterilerimiz */}
      <section className="px-6 md:px-8 mb-16 md:mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-on-background">
              Birlikte Çalıştığımız Markalar
            </h2>
            <p className="mt-3 text-on-surface-variant font-light">
              SEO ve dijital büyüme süreçlerinde iş birliği yaptığımız markalardan bazıları.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((c) => (
              <a
                key={c.url}
                href={c.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                title={c.name}
                aria-label={c.name}
                className="group flex items-center justify-center bg-surface-container-lowest border border-outline-variant/10 rounded-2xl px-6 h-24 hover:shadow-lg transition-all"
              >
                {c.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={c.logo}
                    alt={`${c.name} logosu`}
                    loading="lazy"
                    className={`max-h-10 w-auto max-w-full object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 ${c.invert ? "invert" : ""}`}
                  />
                ) : (
                  <span className="font-bold text-on-background text-center leading-tight">
                    {c.name}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-20 md:mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="group bg-surface-container-lowest rounded-xl p-2 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 md:mb-6 relative bg-surface-container-high">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary">
                  {cs.category}
                </div>
              </div>
              <div className="px-4 md:px-6 pb-6 md:pb-8">
                <h3 className="text-xl md:text-2xl font-bold tracking-[-0.04em] mb-3 md:mb-4 group-hover:text-primary transition-colors">
                  {cs.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 md:mb-8">
                  {cs.desc}
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4 md:pt-6 border-t border-outline-variant/10">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-xs text-on-surface-variant/60 mb-1">
                        {m.label}
                      </div>
                      <div className="text-base md:text-lg font-bold text-primary">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-20 md:mb-40">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.04em] mb-10 md:mb-16 text-center">
          İş Ortaklarımız Ne Diyor?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-surface-container-low p-8 md:p-10 rounded-xl relative ${i === 1 ? "lg:translate-y-12" : ""}`}
            >
              <div className="flex text-primary mb-4 md:mb-6 gap-0.5">
                {[...Array(5)].map((_, si) => (
                  <Star
                    key={si}
                    className="h-4 w-4 fill-primary"
                  />
                ))}
              </div>
              <p className="text-base md:text-lg font-medium leading-relaxed italic mb-6 md:mb-8 text-on-surface">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-on-surface-variant uppercase tracking-wider">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16 md:mb-24">
        <div className="bg-primary rounded-2xl md:rounded-3xl p-8 md:p-24 text-center text-on-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-[-0.04em] mb-6 md:mb-8 leading-none">
              Siz de Bu Başarı Hikayelerinin Parçası Olun
            </h2>
            <p className="text-base md:text-xl opacity-80 max-w-2xl mx-auto mb-8 md:mb-12">
              Markanızın dijital potansiyelini rakamlarla keşfedin. Ücretsiz ön
              analiz raporu için bugün iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <Link
                href="/iletisim"
                className="w-full sm:w-auto bg-white text-primary px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-bold tracking-tight hover:scale-105 transition-transform duration-300 text-center"
              >
                Strateji Toplantısı Planla
              </Link>
              <Link
                href="/seo-fiyatlari"
                className="w-full sm:w-auto bg-primary-container/20 backdrop-blur-md text-white border border-white/20 px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-bold tracking-tight hover:bg-white/10 transition-colors text-center"
              >
                Hizmetlerimizi İncele
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
