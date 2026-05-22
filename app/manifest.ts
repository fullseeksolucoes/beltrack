import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Beltrack – Rastreador Veicular",
    short_name: "Beltrack",
    description:
      "Rastreador veicular com monitoramento em tempo real, bloqueio remoto e instalação especializada.",
    start_url: "/",
    display: "minimal-ui",
    background_color: "#ffffff",
    theme_color: "#133a60",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
