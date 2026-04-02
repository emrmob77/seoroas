import { defineField, defineType } from "sanity";

export const pageSeo = defineType({
  name: "pageSeo",
  title: "Sayfa SEO",
  type: "document",
  fields: [
    defineField({
      name: "pagePath",
      title: "Sayfa URL Yolu",
      type: "string",
      description: "Sayfa URL yolu (ör: /seo/teknik-seo). Başında / olmalı.",
      validation: (r) =>
        r
          .required()
          .custom((val) =>
            typeof val === "string" && val.startsWith("/")
              ? true
              : "URL / ile başlamalıdır"
          ),
    }),
    defineField({
      name: "pageLabel",
      title: "Sayfa Adı",
      type: "string",
      description: "Sadece Studio'da tanımlama için (ör: On-Page SEO). Sitede görünmez.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "seoTitle",
      title: "Meta Title",
      type: "string",
      description:
        "50-60 karakter önerilir. Boş bırakılırsa koddaki varsayılan title kullanılır. | SEOROAS otomatik eklenir.",
      validation: (r) =>
        r.max(70).warning("60 karakterin altında tutmaya çalışın"),
    }),
    defineField({
      name: "seoDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description: "145-160 karakter önerilir. CTA içermeli.",
      validation: (r) =>
        r.max(170).warning("160 karakterin altında tutmaya çalışın"),
    }),
    defineField({
      name: "focusKeyword",
      title: "Hedef Anahtar Kelime",
      type: "string",
      description: "Bu sayfanın optimize edildiği birincil anahtar kelime.",
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      description:
        "Farklı bir canonical URL belirtmek için. Boş bırakılırsa mevcut sayfa URL'i kullanılır.",
    }),
    defineField({
      name: "ogImage",
      title: "OG Görseli",
      type: "image",
      description: "Sosyal medya paylaşım görseli (1200x630px önerilir).",
      options: { hotspot: true },
    }),
    defineField({
      name: "priority",
      title: "Sitemap Önceliği",
      type: "number",
      description:
        "0.0 – 1.0 arası. Ana sayfa 1.0, önemli sayfalar 0.8-0.9, düşük öncelikli sayfalar 0.3-0.5. Varsayılan 0.7.",
      initialValue: 0.7,
      validation: (r) => r.min(0).max(1),
    }),
    defineField({
      name: "changeFrequency",
      title: "Değişim Sıklığı",
      type: "string",
      description: "Arama motorlarına bu sayfanın ne sıklıkla değiştiğini bildirir.",
      initialValue: "monthly",
      options: {
        list: [
          { title: "Her zaman", value: "always" },
          { title: "Saatlik", value: "hourly" },
          { title: "Günlük", value: "daily" },
          { title: "Haftalık", value: "weekly" },
          { title: "Aylık", value: "monthly" },
          { title: "Yıllık", value: "yearly" },
          { title: "Asla", value: "never" },
        ],
      },
    }),
    defineField({
      name: "noIndex",
      title: "noIndex",
      type: "boolean",
      description: "Aktifse arama motorları bu sayfayı indekslemez.",
      initialValue: false,
    }),
    defineField({
      name: "noFollow",
      title: "noFollow",
      type: "boolean",
      description: "Aktifse arama motorları bu sayfadaki linkleri takip etmez.",
      initialValue: false,
    }),
    defineField({
      name: "isPublished",
      title: "Sayfa Yayında",
      type: "boolean",
      description:
        "Kapatıldığında: sitemap'ten çıkar, menüde gizlenir, noindex eklenir.",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "pageLabel",
      path: "pagePath",
      seoTitle: "seoTitle",
      isPublished: "isPublished",
      noIndex: "noIndex",
    },
    prepare({ title, path, seoTitle, isPublished, noIndex }) {
      const badges: string[] = [];
      if (isPublished === false) badges.push("⏸ Taslak");
      if (noIndex) badges.push("🚫 noIndex");
      const status = badges.length > 0 ? badges.join(" · ") : "✓ Yayında";

      return {
        title: title || path,
        subtitle: `${path || ""}  —  ${status}${seoTitle ? `  —  "${seoTitle}"` : ""}`,
      };
    },
  },
  orderings: [
    {
      title: "URL Yolu (A-Z)",
      name: "pathAsc",
      by: [{ field: "pagePath", direction: "asc" }],
    },
    {
      title: "Sayfa Adı",
      name: "labelAsc",
      by: [{ field: "pageLabel", direction: "asc" }],
    },
  ],
});
