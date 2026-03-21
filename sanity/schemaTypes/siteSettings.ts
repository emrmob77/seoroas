import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Ayarları",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site Başlığı",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Site Açıklaması",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "phone",
      title: "Telefon",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "E-posta",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Adres",
      type: "text",
      rows: 2,
    }),
  ],
});
