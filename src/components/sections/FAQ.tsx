"use client";

import { SchemaOrg } from "@/components/seo/SchemaOrg";

const faqItems = [
  {
    question: "SEO çalışmaları ne kadar sürede sonuç verir?",
    answer:
      "SEO uzun vadeli bir yatırımdır. Genellikle stratejik iyileştirmelerin ardından ilk verimli sonuçları 3-6 ay arasında görmeye başlarız. Sektör rekabetine göre bu süre değişkenlik gösterebilir.",
  },
  {
    question: "Hangi sektörlerle çalışıyorsunuz?",
    answer:
      "E-ticaret, SaaS, Fintech ve Kurumsal Hizmetler başta olmak üzere, organik büyümenin kritik olduğu tüm ölçeklenebilir iş modelleriyle çalışıyoruz.",
  },
  {
    question: "Garantili sıralama veriyor musunuz?",
    answer:
      "Hiçbir etik SEO ajansı %100 sıralama garantisi vermez. Bizim taahhüdümüz; trafik artışı, teknik mükemmellik ve veriye dayalı performans iyileştirmesidir.",
  },
  {
    question: "SEO fiyatları ne kadar?",
    answer:
      "SEO fiyatları projenin kapsamına, rekabet ortamına ve hedeflere göre değişir. Detaylı fiyat bilgisi için seo-fiyatlari sayfamızı inceleyebilir veya ücretsiz analiz talep edebilirsiniz.",
  },
  {
    question: "Sözleşme zorunlu mu?",
    answer:
      "Hayır. SEOROAS sözleşmesiz çalışma modeli sunar. Aylık bazda hizmet alır, istediğiniz zaman sonlandırabilirsiniz. Müşterilerimizin %98'i sonuçlardan memnun kalarak çalışmaya devam eder.",
  },
  {
    question: "Lokal SEO hizmeti veriyor musunuz?",
    answer:
      "Evet. İstanbul, Ankara, İzmir, Bursa ve Antalya başta olmak üzere tüm Türkiye'de lokal SEO hizmeti sunuyoruz. Google My Business optimizasyonu, yerel dizin kayıtları ve bölgesel içerik stratejisi ile işletmenizi yerel aramalarda ön plana çıkarıyoruz.",
  },
];

function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function FAQ() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-3xl mx-auto">
        <SchemaOrg schema={[buildFaqSchema()]} />

        <div className="mb-20 text-center">
          <h2 className="text-4xl font-extrabold tight-tracking mb-4 text-on-background">
            Sıkça Sorulanlar
          </h2>
          <p className="text-on-surface-variant font-light">
            Şeffaflık ilkemizdir. Aklınızdaki soruları yanıtlıyoruz.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group bg-surface-container-low rounded-2xl p-6 cursor-pointer open:bg-surface-container-high transition-colors"
            >
              <summary className="list-none flex justify-between items-center font-bold text-lg text-on-background [&::-webkit-details-marker]:hidden">
                {item.question}
                <svg
                  className="h-5 w-5 shrink-0 text-on-surface-variant transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-on-surface-variant leading-relaxed font-light">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
