import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Clock } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "İletişim — SEO Danışmanlığı İçin Bize Ulaşın",
  description:
    "SEO stratejinizi birlikte oluşturalım. Ücretsiz SEO analizi ve teklif için formumuzu doldurun veya doğrudan bize ulaşın.",
  path: "/iletisim",
});

const contactInfo = [
  {
    icon: Mail,
    label: "E-posta",
    value: "info@seoroas.com",
    href: "mailto:info@seoroas.com",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+90 (212) 555 0 SEO",
    href: "tel:+902125550736",
  },
  {
    icon: MapPin,
    label: "Adres",
    value: "İstanbul, Türkiye",
    href: null,
  },
  {
    icon: Clock,
    label: "Çalışma Saatleri",
    value: "Pzt — Cum: 09:00 — 18:00",
    href: null,
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
            telephone: "+902125550736",
            address: {
              "@type": "PostalAddress",
              addressLocality: "İstanbul",
              addressCountry: "TR",
            },
          },
        }}
      />

      <main className="pt-32">
        <section className="max-w-7xl mx-auto px-8 mb-12">
          <Breadcrumb items={[{ name: "İletişim", url: "/iletisim" }]} />
        </section>

        <section className="max-w-7xl mx-auto px-8 mb-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface tight-tracking mb-8">
              Birlikte{" "}
              <span className="text-primary italic">Büyüyelim.</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Organik trafik hedeflerinizi, mevcut SEO performansınızı ve rakip
              analizinizi birlikte değerlendirelim. Ücretsiz ön analiz için
              formu doldurun veya doğrudan bize ulaşın.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-8 mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-surface-container-low rounded-[2rem] p-10 md:p-14">
                <h2 className="text-2xl font-bold text-on-surface tight-tracking mb-10">
                  Ücretsiz SEO Analizi Talep Edin
                </h2>

                <form action="/api/lead" method="POST" className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-3">
                        Ad Soyad
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full bg-surface-container-lowest px-6 py-4 rounded-xl text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-3">
                        E-posta
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full bg-surface-container-lowest px-6 py-4 rounded-xl text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        placeholder="email@sirketiniz.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-3">
                      Web Sitesi
                    </label>
                    <input
                      id="website"
                      name="website"
                      type="url"
                      className="w-full bg-surface-container-lowest px-6 py-4 rounded-xl text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      placeholder="https://siteniz.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-3">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full bg-surface-container-lowest px-6 py-4 rounded-xl text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                      placeholder="SEO hedefleriniz, mevcut durumunuz veya sorularınız..."
                    />
                  </div>

                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <input type="text" name="company_fax" tabIndex={-1} autoComplete="off" />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-12 py-5 bg-primary text-on-primary font-bold rounded-full hover:bg-primary-dim transition-all shadow-xl shadow-primary/20 tracking-widest uppercase text-xs flex items-center justify-center gap-3 group"
                  >
                    Gönder
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              <div>
                <h2 className="text-2xl font-bold text-on-surface tight-tracking mb-10">
                  İletişim Bilgileri
                </h2>
                <div className="flex flex-col gap-8">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-on-surface font-semibold hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-on-surface font-semibold">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-surface-container-low rounded-[2rem] p-10">
                <h3 className="text-lg font-bold text-on-surface tight-tracking mb-4">
                  Hızlı Yanıt Garantisi
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Tüm taleplere 24 saat içinde yanıt veriyoruz. Acil durumlar
                  için doğrudan arayabilirsiniz.
                </p>
                <Link
                  href="/seo-fiyatlari"
                  className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest group"
                >
                  Paketleri İncele
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
