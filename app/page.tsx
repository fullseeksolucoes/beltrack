import type { Metadata } from "next";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Differentials from "@/components/site/Differentials";
import Plans from "@/components/site/Plans";
import About from "@/components/site/About";
import Partnerships from "@/components/site/Partnerships";
import CTASection from "@/components/site/CTASection";

export const metadata: Metadata = {
  title: "Rastreador Veicular | Monitoramento em Tempo Real",
  description:
    "Rastreador veicular com GPS em tempo real, bloqueio remoto e instalação especializada. Acompanhe seu veículo pelo celular sem fidelidade.",
  alternates: {
    canonical: "https://beltrack.com.br",
  },
  openGraph: {
    title: "Rastreador Veicular Beltrack | Monitoramento em Tempo Real",
    description:
      "Rastreador veicular com GPS em tempo real, bloqueio remoto e instalação especializada. Acompanhe seu veículo pelo celular sem fidelidade.",
    url: "https://beltrack.com.br",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Differentials />
      <Plans />
      <About />
      <Partnerships />
      <CTASection />
    </>
  );
}
