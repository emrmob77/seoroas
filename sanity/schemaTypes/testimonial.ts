import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Müşteri Yorumu",
  type: "document",
  fields: [
    defineField({
      name: "author",
      title: "Ad Soyad",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "company",
      title: "Şirket",
      type: "string",
    }),
    defineField({
      name: "quote",
      title: "Yorum",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Puan (1-5)",
      type: "number",
      validation: (rule) => rule.min(1).max(5),
    }),
  ],
});
