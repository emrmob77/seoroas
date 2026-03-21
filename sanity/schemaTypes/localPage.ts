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
      name: "seo",
      title: "SEO Ayarları",
      type: "seoFields",
    }),
  ],
});
