import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog Yazısı",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Başlık",
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
      name: "publishedAt",
      title: "Yayın Tarihi",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Özet",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "mainImage",
      title: "Ana Görsel",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Metin",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "İçerik",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Metin",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "author",
      title: "Yazar",
      type: "string",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Başlık",
      type: "string",
      description: "50-60 karakter, keyword ile başlar",
      validation: (rule) => rule.max(60),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Açıklama",
      type: "text",
      rows: 2,
      description: "145-160 karakter, CTA içerir",
      validation: (rule) => rule.max(160),
    }),
  ],
  preview: {
    select: { title: "title", media: "mainImage", date: "publishedAt" },
    prepare({ title, media, date }) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString("tr-TR") : "",
        media,
      };
    },
  },
});
