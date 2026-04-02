import { defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Vaka Çalışması",
  type: "document",
  fields: [
    defineField({
      name: "client",
      title: "Müşteri Adı",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "industry",
      title: "Sektör",
      type: "string",
    }),
    defineField({
      name: "result",
      title: "Sonuç (kısa)",
      type: "string",
      description: 'Ör: "6 ayda %420 organik trafik artışı"',
    }),
    defineField({
      name: "mainImage",
      title: "Görsel",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Metin",
          type: "string",
          description: "Görsel açıklaması (SEO ve erişilebilirlik için zorunlu)",
          validation: (r) => r.required().warning("Alt metin SEO için önemlidir"),
        }),
      ],
    }),
    defineField({
      name: "beforeAfter",
      title: "Öncesi / Sonrası",
      type: "object",
      fields: [
        defineField({ name: "before", title: "Öncesi", type: "string" }),
        defineField({ name: "after", title: "Sonrası", type: "string" }),
      ],
    }),
    defineField({
      name: "body",
      title: "Detaylı Açıklama",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "seo",
      title: "SEO Ayarları",
      type: "seoFields",
    }),
  ],
});
