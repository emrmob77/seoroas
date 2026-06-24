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

    // Enhanced fields for better blog content (based on Reddit/X research for Shopify topics)
    defineField({
      name: "keyPainPoints",
      title: "Ana Sorun Noktaları (Reddit & X'ten gerçek şikayetler)",
      type: "array",
      of: [{ type: "string" }],
      description: "Kullanıcıların en çok şikayet ettiği noktalar. Her biri ayrı madde.",
    }),
    defineField({
      name: "appAudit",
      title: "App Audit / Uygulama Tavsiyeleri",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "appName", title: "Uygulama Adı", type: "string" }),
            defineField({ name: "impact", title: "Etkisi (hız, SEO vs)", type: "string" }),
            defineField({ name: "recommendation", title: "Tavsiye (kaldır / kullan / alternatif)", type: "string" }),
          ],
        },
      ],
      description: "Reddit ve X'te en sık bahsedilen uygulamalar ve etkileri.",
    }),
    defineField({
      name: "themeAdvice",
      title: "Tema Tavsiyeleri ve Bloat Uyarısı",
      type: "array",
      of: [{ type: "string" }],
      description: "Dawn önerisi, premium tema sorunları, kullanılmayan özellik kapatma ipuçları.",
    }),
    defineField({
      name: "commonMistakes",
      title: "Yaygın Hatalar ve Uyarılar",
      type: "array",
      of: [{ type: "string" }],
      description: "Speed optimization scam servisleri, lab vs gerçek metrik farkı gibi uyarılar.",
    }),
    defineField({
      name: "realResults",
      title: "Gerçek Sonuçlar / Örnekler",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "example", title: "Örnek / Vaka (anonim)", type: "string" }),
            defineField({ name: "before", title: "Önceki Durum", type: "string" }),
            defineField({ name: "after", title: "Sonraki Durum", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "measurementNote",
      title: "Ölçüm Notu (Lab vs Gerçek Veri)",
      type: "text",
      rows: 3,
      description: "PageSpeed vs Shopify rapor vs CrUX ayrımı için kısa açıklama.",
    }),
    defineField({
      name: "author",
      title: "Yazar",
      type: "string",
    }),
    defineField({
      name: "categories",
      title: "Kategoriler",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({
      name: "seo",
      title: "SEO Ayarları",
      type: "seoFields",
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
