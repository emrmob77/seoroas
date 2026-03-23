const SITE_URL = "https://seoroas.com";
const SITE_NAME = "SEOROAS";

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
    author: {
      "@type": "Organization",
      name: params.author || SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
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
