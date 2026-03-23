import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SEOROAS — Türkiye'nin Güvenilir SEO Ajansı",
    short_name: "SEOROAS",
    description:
      "Kanıtlanmış SEO stratejileriyle organik trafiğinizi artırın.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4d4ad5",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
