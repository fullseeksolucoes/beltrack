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
    "Rastreamento veicular em Sabará e região metropolitana de Belo Horizonte com monitoramento em tempo real, acesso via aplicativo e instalação especializada. Sem fidelidade.",
  keywords: [
    "rastreador veicular em Sabará",
    "monitoramento veicular em Sabará",
    "rastreamento veicular Belo Horizonte",
    "rastreador veicular BH",
    "rastreamento de veículos em BH",
    "rastreamento região metropolitana BH",
    "GPS veicular Sabará",
    "rastreador para carros",
    "rastreador para motos",
    "rastreamento de frota",
    "bloqueio remoto veicular",
    "Beltrack",
    "rastreador para tratores",
    "rastreador para máquinas",
    "rastreador para caminhões",
    "rastreamento de frota em BH",
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
      "Rastreamento veicular em Sabará e região metropolitana de Belo Horizonte com monitoramento em tempo real, acesso via aplicativo e instalação especializada. Sem fidelidade.",
    url: siteUrl,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Beltrack – Rastreador Veicular Inteligente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beltrack – Rastreador Veicular | Monitoramento em Tempo Real",
    description:
      "Rastreador veicular com monitoramento em tempo real, bloqueio remoto e instalação especializada. Sem fidelidade.",
    images: ["/og-image.jpg"],
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
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta
          name="google-site-verification"
          content="YOUR_VERIFICATION_CODE"
        />
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
