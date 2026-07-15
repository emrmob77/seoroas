const SITE_URL = "https://seoroas.com";
const SITE_NAME = "SEOROAS";

// Yazar kütüğü. E-E-A-T: isimli yazarı gerçek, doğrulanabilir bir kimliğe bağlar.
// YALNIZCA doğrulanmış bilgi — jobTitle ve sameAs herkese açık kaynaklarla teyitli.
interface AuthorInfo {
  jobTitle?: string;
  sameAs: string[];
}
const AUTHORS: Record<string, AuthorInfo> = {
  "Emrah Tonlak": {
    jobTitle: "SEO Direktörü",
    sameAs: ["https://www.linkedin.com/in/emrtonlak/"],
  },
};

export function authorInfo(name?: string): AuthorInfo | undefined {
  return name ? AUTHORS[name] : undefined;
}

// Yazar kartında görünür profil linki için (şema ile tek kaynak).
export function authorProfiles(name?: string): string[] {
  return (name && AUTHORS[name]?.sameAs) || [];
}

export interface SiteContactInfo {
  phone?: string;
  email?: string;
  address?: string;
}

let _contactCache: SiteContactInfo = {};

export function setSiteContactInfo(info: SiteContactInfo) {
  _contactCache = info;
}

export function localBusinessSchema(overrides?: Record<string, unknown>) {
  const phone = _contactCache.phone || undefined;
  const email = _contactCache.email || undefined;
  const address = _contactCache.address || undefined;

  const addressLines = address?.split("\n").map((l) => l.trim()).filter(Boolean);
  const streetAddress = addressLines?.[0];
  const locality = addressLines?.[1];

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    ...(phone && { telephone: phone }),
    ...(email && { email }),
    address: {
      "@type": "PostalAddress",
      addressCountry: "TR",
      ...(streetAddress && { streetAddress }),
      ...(locality && { addressLocality: locality }),
    },
    areaServed: "TR",
    ...overrides,
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: localBusinessSchema(),
  };
}

export function articleSchema(params: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  modifiedAt?: string;
  image?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    url: `${SITE_URL}${params.url}`,
    datePublished: params.publishedAt,
    dateModified: params.modifiedAt || params.publishedAt,
    image: params.image,
    author: params.author
      ? {
          "@type": "Person",
          name: params.author,
          url: `${SITE_URL}/hakkimizda`,
          ...(AUTHORS[params.author]?.jobTitle && {
            jobTitle: AUTHORS[params.author].jobTitle,
          }),
          ...(AUTHORS[params.author]?.sameAs && {
            sameAs: AUTHORS[params.author].sameAs,
          }),
        }
      : { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.svg`,
      },
    },
  };
}

// E-E-A-T: markayı arama motorlarına bir varlık olarak tanımlar (otorite + güven).
// sameAs YALNIZCA gerçek, doğrulanmış profilleri içermeli — uydurma profil ekleme.
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icon.svg`,
    },
    description:
      "Organik gelir odaklı SEO ajansı. Teknik SEO, içerik, e-ticaret ve AI arama görünürlüğü hizmetleri.",
    sameAs: ["https://linkedin.com/company/seoroas"],
    founder: {
      "@type": "Person",
      name: "Emrah Tonlak",
      url: "https://www.linkedin.com/in/emrtonlak/",
    },
    areaServed: "TR",
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
