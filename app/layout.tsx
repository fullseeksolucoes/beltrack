import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import StructuredData from "@/components/site/StructuredData";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://beltrack.com.br";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#133a60",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Beltrack – Rastreador Veicular | Monitoramento em Tempo Real",
    template: "%s | Beltrack",
  },
  description:
    "Rastreador veicular com monitoramento em tempo real, bloqueio remoto e instalação especializada. Acompanhe seu veículo pelo celular. Sem fidelidade.",
  keywords: [
    "rastreador veicular",
    "monitoramento veicular",
    "rastreamento de veículos",
    "bloqueio remoto veicular",
    "GPS veicular",
    "localizador veicular",
    "rastreamento de frota",
    "instalação de rastreador",
    "rastreador para carros",
    "rastreador para motos",
    "Beltrack",
    "rastreamento Belo Horizonte",
    "rastreamento São Paulo",
    "rastreador veicular Brasil",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Beltrack",
    title: "Beltrack – Rastreador Veicular | Monitoramento em Tempo Real",
    description:
      "Rastreador veicular com monitoramento em tempo real, bloqueio remoto e instalação especializada. Acompanhe seu veículo pelo celular. Sem fidelidade.",
    url: siteUrl,
    images: [
      {
        url: "/logo-header.webp",
        width: 170,
        height: 36,
        alt: "Beltrack – Rastreador Veicular Inteligente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beltrack – Rastreador Veicular | Monitoramento em Tempo Real",
    description:
      "Rastreador veicular com monitoramento em tempo real, bloqueio remoto e instalação especializada. Sem fidelidade.",
    images: ["/logo-header.webp"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
