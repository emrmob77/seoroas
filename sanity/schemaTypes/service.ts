import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Hizmet",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Hizmet Adı",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortDesc",
      title: "Kısa Açıklama",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "icon",
      title: "İkon Adı",
      type: "string",
      description: "Lucide React ikon adı (ör: Search, Code, Link)",
    }),
    defineField({
      name: "body",
      title: "İçerik",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
      ],
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
