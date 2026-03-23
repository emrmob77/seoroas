import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, ChevronDown } from "lucide-react";
import { generateDynamicSeoMetadata } from "@/lib/seo";
import { localBusinessSchema } from "@/lib/schema";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { getSiteSettings } from "@/sanity/queries/settings";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return generateDynamicSeoMetadata({
    title: "İletişim — Ücretsiz SEO Analizi Alın",
    description:
      "SEO stratejinizi birlikte oluşturalım. Ücretsiz site analizi ve teklif için formumuzu doldurun veya doğrudan bize ulaşın.",
    path: "/iletisim",
  });
}

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
    a: "Evet, ofisimizde yüz yüze toplantı yapabilir veya online görüşme planlayabiliriz.",
  },
];

export default async function IletisimPage() {
  const settings = await getSiteSettings();

  const phone = settings?.phone || "";
  const email = settings?.email || "info@seoroas.com";
  const address = settings?.address || "";
  const phoneClean = phone.replace(/[\s()-]/g, "");

  const contactCards = [
    ...(address
      ? [{ icon: MapPin, label: "Adres", value: address.replace(/\n/g, ", "), href: undefined as string | undefined }]
      : []),
    ...(phone
      ? [{ icon: Phone, label: "Telefon", value: phone, href: `tel:${phoneClean}` }]
      : []),
    {
      icon: Mail,
      label: "E-Posta",
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: Clock,
      label: "Mesai Saatleri",
      value: "Pzt - Cum: 09:00 - 18:00",
      href: undefined as string | undefined,
    },
  ];

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "SEOROAS İletişim",
    url: "https://seoroas.com/iletisim",
    mainEntity: localBusinessSchema(),
  };

  return (
    <>
      <SchemaOrg schema={contactSchema} />

      <SubpageHero
        breadcrumb={[{ name: "İletişim", url: "/iletisim" }]}
        badge="Bize Ulaşın"
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
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 md:gap-16">
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
                    <p className="text-on-surface font-semibold text-sm whitespace-pre-line">
                      {card.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <ContactForm />
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <div className="w-full h-64 md:h-96 bg-surface-container-high relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg max-w-xs">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mb-3 mx-auto">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold text-sm text-center mb-1">Genel Merkez</h3>
                <p className="text-xs text-on-surface-variant text-center">
                  Verinin ve teknolojinin buluşma noktasındayız.
                </p>
              </div>
            </div>
          </div>
        </section>

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
