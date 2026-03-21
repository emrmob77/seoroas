import { defineField, defineType } from "sanity";

export const localPage = defineType({
  name: "localPage",
  title: "Lokal Sayfa",
  type: "document",
  fields: [
    defineField({
      name: "city",
      title: "Şehir",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: { source: (doc) => `${doc.city}-seo-ajansi` },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Sayfa Başlığı",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "İçerik",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "faqs",
      title: "SSS",
      type: "array",
      of: [{ type: "reference", to: [{ type: "faq" }] }],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Başlık",
      type: "string",
      validation: (rule) => rule.max(60),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Açıklama",
      type: "text",
      rows: 2,
      validation: (rule) => rule.max(160),
    }),
  ],
});
