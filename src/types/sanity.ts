import type { PortableTextBlock } from "@portabletext/react";

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  body: PortableTextBlock[];
  seoTitle: string;
  seoDescription: string;
  mainImage: SanityImage;
  author?: string;
  readingTime?: number;
}

export interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  shortDesc: string;
  body: PortableTextBlock[];
  icon: string;
  faqs: FAQ[];
  seoTitle: string;
  seoDescription: string;
}

export interface CaseStudy {
  _id: string;
  client: string;
  industry: string;
  result: string;
  body: PortableTextBlock[];
  beforeAfter: {
    before: string;
    after: string;
  };
  mainImage: SanityImage;
}

export interface LocalPage {
  _id: string;
  city: string;
  slug: { current: string };
  title: string;
  body: PortableTextBlock[];
  faqs: FAQ[];
  seoTitle: string;
  seoDescription: string;
}

export interface FAQ {
  _id: string;
  question: string;
  answer: PortableTextBlock[] | string;
}

export interface Testimonial {
  _id: string;
  author: string;
  company: string;
  quote: string;
  rating: number;
}

export interface SiteSettings {
  _id: string;
  title: string;
  description: string;
  phone: string;
  email: string;
  address: string;
}
