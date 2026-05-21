import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export default function CTASection() {
  return (
    <section
      id="contato"
      className="relative py-24 md:py-32"
      aria-label="Fale conosco"
    >
      <div className="mx-auto max-w-7xl container-px">
        <div className="relative overflow-hidden rounded-[32px] bg-primary text-white p-10 md:p-16 lg:p-20">
          <div className="absolute inset-0 grid-bg-dark opacity-60 radar-mask pointer-events-none" />
          <div className="absolute -right-24 -bottom-24 w-105 h-105 rounded-full bg-brand-green/15 blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-green">
                Fale com a gente
              </span>
              <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white text-balance">
                Pronto para proteger seu veículo com um rastreador de qualidade?
              </h2>
              <p className="mt-5 text-white/75 max-w-xl">
                Receba uma proposta personalizada em minutos. Atendimento
                humano, sem robôs e sem compromisso.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={waLink("Olá, gostaria de saber mais sobre os planos da Beltrack.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-brand-green text-white text-sm font-semibold hover:brightness-110 transition shadow-[0_12px_32px_-12px_rgba(97,166,54,0.7)]"
                >
                  <MessageCircle className="size-4" /> Falar no WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 space-y-4">
                {[
                  ["Resposta em", "menos de 5 min"],
                  ["Atendimento", "humano e técnico"],
                  ["Instalação", "agendada em 24h"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between text-sm border-b border-white/10 last:border-0 pb-3 last:pb-0"
                  >
                    <span className="text-white/60">{k}</span>
                    <span className="font-semibold text-white">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
