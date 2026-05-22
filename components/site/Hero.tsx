import { ArrowRight } from "lucide-react";
import HeroVisual from "./HeroVisual";
import { waLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg radar-mask opacity-70 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-130 h-130 rounded-full bg-brand-green-soft blur-3xl opacity-60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl container-px grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white hairline text-xs font-medium text-ink-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75 animate-ping-slow" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green" />
            </span>
            Monitoramento ativo · 24/7
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.05] font-extrabold text-balance">
            Monitoramento e rastreamento veicular em tempo real.
          </h1>
          <p className="mt-5 text-lg text-ink-muted max-w-xl leading-relaxed">
            Acompanhe localização, trajetos e informações do veículo diretamente
            pelo celular. Soluções de rastreamento para carros, motos,
            caminhões, máquinas, tratores e veículos automotores em geral.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={waLink("Olá, gostaria de solicitar um orçamento")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-brand-blue-deep transition-colors shadow-[0_10px_30px_-12px_rgba(19,58,96,0.55)]"
            >
              Solicitar orçamento <ArrowRight className="size-4" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white hairline text-sm font-semibold text-primary hover:bg-secondary transition-colors"
            >
              Ver serviços
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 relative" aria-hidden="true">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
