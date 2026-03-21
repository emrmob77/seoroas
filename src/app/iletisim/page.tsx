import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ChevronDown, ArrowRight } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "İletişim — SEO Danışmanlığı İçin Bize Ulaşın",
  description:
    "SEO stratejinizi birlikte oluşturalım. Ücretsiz SEO analizi ve teklif için formumuzu doldurun veya doğrudan bize ulaşın.",
  path: "/iletisim",
});

const contactCards = [
  {
    icon: MapPin,
    label: "Adres",
    value: "Levent, Büyükdere Cd. No:126, 34394 Beşiktaş/İstanbul",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+90 5XX XXX XX XX",
    href: "tel:+905000000000",
  },
  {
    icon: Mail,
    label: "E-Posta",
    value: "info@seoroas.com",
    href: "mailto:info@seoroas.com",
  },
  {
    icon: Clock,
    label: "Mesai Saatleri",
    value: "Pzt - Cum: 09:00 - 18:00",
  },
];

const faqItems = [
  {
    q: "Analiz süreci ne kadar sürer?",
    a: "Ücretsiz ön analiz 2-3 iş günü içinde tamamlanır. Kapsamlı teknik SEO denetimi ise 1-2 hafta sürer.",
  },
  {
    q: "Minimum sözleşme süresi var mı?",
    a: "Aylık retainer modelimizde minimum 3 ay taahhüt öneriyoruz. Proje bazlı çalışmalarda ise süre projenin kapsamına göre belirlenir.",
  },
  {
    q: "Ofiste toplantı yapabilir miyiz?",
    a: "Evet, İstanbul ofisimizde yüz yüze toplantı yapabilir veya online görüşme planlayabiliriz.",
  },
];

export default function IletisimPage() {
  return (
    <>
      <SchemaOrg
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "SEOROAS İletişim",
          url: "https://seoroas.com/iletisim",
          mainEntity: {
            "@type": "LocalBusiness",
            name: "SEOROAS",
            email: "info@seoroas.com",
            telephone: "+905000000000",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Levent, Büyükdere Cd. No:126",
              addressLocality: "İstanbul",
              postalCode: "34394",
              addressCountry: "TR",
            },
          },
        }}
      />

      <SubpageHero
        breadcrumb={[{ name: "İletişim", url: "/iletisim" }]}
        badge="Contact Us"
        title={
          <>
            Bizimle{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              İletişime Geçin
            </span>
          </>
        }
        subtitle="Projeleriniz hakkında konuşmak için bizimle iletişime geçin."
      />

      <main>
        {/* Contact Info Cards + Form */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 md:gap-16">
            {/* Left: Contact Cards */}
            <div className="flex flex-col gap-4 md:gap-6">
              {contactCards.map((card) => (
                <div
                  key={card.label}
                  className="bg-surface-container-low rounded-2xl p-6"
                >
                  <card.icon className="h-5 w-5 text-primary mb-3" strokeWidth={1.5} />
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">
                    {card.label}
                  </p>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="text-on-surface font-semibold text-sm hover:text-primary transition-colors"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-on-surface font-semibold text-sm">
                      {card.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Right: Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.04em] text-on-surface mb-3">
                Ücretsiz SEO Analizi İsteyin
              </h2>
              <p className="text-on-surface-variant mb-8 md:mb-10">
                Web sitenizin potansiyelini keşfedin. Uzman ekibimiz size özel
                bir strateji hazırlasın.
              </p>

              <form action="/api/lead" method="POST" className="flex flex-col gap-5 md:gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">
                      Ad Soyad
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 px-5 py-3.5 rounded-xl text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">
                      Firma Adı
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 px-5 py-3.5 rounded-xl text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                      placeholder="Şirketiniz"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">
                      E-Posta Adresi
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 px-5 py-3.5 rounded-xl text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                      placeholder="email@domain.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">
                      Telefon
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 px-5 py-3.5 rounded-xl text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                      placeholder="+90"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">
                    Web Sitesi
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 px-5 py-3.5 rounded-xl text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    placeholder="https://www.ornek.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label htmlFor="service" className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">
                      Hizmet Türü
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 px-5 py-3.5 rounded-xl text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none"
                      defaultValue=""
                    >
                      <option value="" disabled>Seçiniz</option>
                      <option value="teknik-seo">Teknik SEO</option>
                      <option value="icerik-seo">İçerik SEO</option>
                      <option value="e-ticaret-seo">E-ticaret SEO</option>
                      <option value="lokal-seo">Lokal SEO</option>
                      <option value="wordpress-seo">WordPress SEO</option>
                      <option value="shopify-seo">Shopify SEO</option>
                      <option value="seo-danismanligi">SEO Danışmanlığı</option>
                      <option value="gtm-kurulum">GTM / Pixel Kurulum</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">
                      Aylık Bütçe
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 px-5 py-3.5 rounded-xl text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none"
                      defaultValue=""
                    >
                      <option value="" disabled>Seçiniz</option>
                      <option value="10000-25000">10.000₺ - 25.000₺</option>
                      <option value="25000-50000">25.000₺ - 50.000₺</option>
                      <option value="50000-100000">50.000₺ - 100.000₺</option>
                      <option value="100000+">100.000₺+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 px-5 py-3.5 rounded-xl text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none"
                    placeholder="Projenizden bahsedin..."
                  />
                </div>

                <div className="hidden" aria-hidden="true">
                  <input type="text" name="company_fax" tabIndex={-1} autoComplete="off" />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="kvkk"
                    required
                    className="mt-1 h-4 w-4 rounded accent-primary"
                  />
                  <span className="text-xs text-on-surface-variant leading-relaxed">
                    <Link href="/gizlilik-politikasi" className="text-primary hover:underline" target="_blank">
                      Gizlilik Politikası
                    </Link>
                    {" "}ve{" "}
                    <Link href="/kullanim-sartlari" className="text-primary hover:underline" target="_blank">
                      KVKK Aydınlatma Metni
                    </Link>
                    &apos;ni okudum ve kabul ediyorum.
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary font-bold py-4 rounded-full hover:bg-primary-dim transition-all shadow-xl shadow-primary/20 tracking-widest uppercase text-xs flex items-center justify-center gap-3 group"
                >
                  Analiz Talebini Gönder
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-16 md:mb-24">
          <div className="w-full h-64 md:h-96 bg-surface-container-high relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg max-w-xs">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mb-3 mx-auto">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold text-sm text-center mb-1">Genel Merkez</h3>
                <p className="text-xs text-on-surface-variant text-center">
                  İstanbul&apos;un kalbinde, verinin ve teknolojinin buluşma noktasındayız.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-6 md:px-8 mb-20 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.04em] text-center mb-10 md:mb-16">
            Hızlı Sorular
          </h2>
          <div className="space-y-3 md:space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group bg-surface-container-low rounded-xl overflow-hidden"
              >
                <summary className="list-none p-5 md:p-6 flex justify-between items-center cursor-pointer font-bold text-sm md:text-base">
                  {item.q}
                  <ChevronDown className="h-5 w-5 text-primary shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-on-surface-variant leading-relaxed text-sm">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
