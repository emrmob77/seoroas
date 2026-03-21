import { defineField, defineType } from "sanity";

export const seoFields = defineType({
  name: "seoFields",
  title: "SEO Ayarları",
  type: "object",
  fields: [
    defineField({
      name: "seoTitle",
      title: "SEO Başlık",
      type: "string",
      description: "50-60 karakter önerilir. Boş bırakılırsa sayfa başlığı kullanılır.",
      validation: (rule) => rule.max(70).warning("60 karakterin altında tutmaya çalışın"),
    }),
    defineField({
      name: "seoDescription",
      title: "Meta Açıklama",
      type: "text",
      rows: 3,
      description: "145-160 karakter önerilir. CTA içermeli.",
      validation: (rule) => rule.max(170).warning("160 karakterin altında tutmaya çalışın"),
    }),
    defineField({
      name: "focusKeyword",
      title: "Hedef Anahtar Kelime",
      type: "string",
      description: "İçeriğin optimize edildiği birincil anahtar kelime",
    }),
    defineField({
      name: "noIndex",
      title: "noIndex",
      type: "boolean",
      description: "Aktifse arama motorları bu sayfayı indekslemez",
      initialValue: false,
    }),
    defineField({
      name: "noFollow",
      title: "noFollow",
      type: "boolean",
      description: "Aktifse arama motorları bu sayfadaki linkleri takip etmez",
      initialValue: false,
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      description: "Farklı bir canonical URL belirtmek için. Boş bırakılırsa mevcut sayfa URL'i kullanılır.",
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Görseli",
      type: "image",
      description: "Sosyal medya paylaşımlarında görünecek görsel (1200x630px önerilir)",
      options: { hotspot: true },
    }),
  ],
  options: {
    collapsible: true,
    collapsed: false,
  },
});
