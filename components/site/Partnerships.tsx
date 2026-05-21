import {
  Building2,
  Wrench,
  ClipboardList,
  Headset,
  ArrowUpRight,
} from "lucide-react";

import { waLink } from "@/lib/whatsapp";
import Button from "./Button";

const benefits = [
  {
    icon: Building2,
    title: "Atendimento para frotas",
    desc: "Soluções de rastreamento para empresas e veículos de frota.",
  },
  {
    icon: Wrench,
    title: "Instalação especializada",
    desc: "Equipe técnica treinada para instalação segura e de qualidade.",
  },
  {
    icon: ClipboardList,
    title: "Planos flexíveis",
    desc: "Modelos de parceria que se adaptam ao porte e necessidade do negócio.",
  },
  {
    icon: Headset,
    title: "Suporte técnico",
    desc: "Atendimento para suporte e acompanhamento técnico sempre que necessário.",
  },
];

const partnershipTypes = [
  "Associações",
  "Empresas",
  "Frotas",
  "Parceiros automotivos",
];

export default function Partnerships() {
  return (
    <section className="relative py-24 md:py-32 bg-surface-muted overflow-hidden">
      <div className="mx-auto max-w-7xl container-px">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-green">
              Parcerias
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-balance">
              Soluções para associações, empresas e parceiros automotivos.
            </h2>

            <p className="mt-5 text-ink-muted leading-relaxed max-w-xl">
              A Beltrack também atende parceiros que buscam soluções de
              rastreamento veicular com instalação especializada, suporte
              técnico e acompanhamento via aplicativo.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="group rounded-2xl bg-white p-5 transition-all duration-300 hairline hover:shadow-[0_10px_30px_-15px_rgba(19,58,96,0.12)] hover:-translate-y-1"
                >
                  <div className="h-10 w-10 rounded-xl bg-brand-green-soft flex items-center justify-center text-brand-green transition-transform duration-300 group-hover:scale-105">
                    <benefit.icon className="size-4" />
                  </div>

                  <h4 className="mt-4 text-sm font-semibold text-ink">
                    {benefit.title}
                  </h4>

                  <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                href={waLink("Olá, gostaria de saber mais sobre parcerias com a Beltrack.")}
                variant="green"
              >
                Falar sobre parceria
                <ArrowUpRight className="ml-1 size-4" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-[32px] bg-white p-6 md:p-7 hairline shadow-[0_30px_80px_-40px_rgba(19,58,96,0.25)] overflow-hidden">
              {/* glow */}
              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-brand-green/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />

              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-green animate-pulse" />

                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Parcerias ativas
                  </span>
                </div>

                <div className="rounded-2xl bg-surface-muted p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                    Atendimento
                  </span>

                  <div className="mt-3 text-3xl font-bold font-display text-primary">
                    Empresas & Frotas
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    Soluções para associações, parceiros automotivos e veículos
                    de frota.
                  </p>
                </div>

                <div className="rounded-2xl bg-surface-muted p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-ink">
                      Tipos de parceria
                    </span>
                  </div>

                  <div className="space-y-3">
                    {partnershipTypes.map((type) => (
                      <div
                        key={type}
                        className="flex items-center justify-between rounded-xl bg-white px-4 py-3"
                      >
                        <span className="text-sm text-ink">{type}</span>

                        <div className="h-2 w-2 rounded-full bg-brand-green" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-primary p-5 text-white">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                      <Building2 className="size-4" />
                    </div>

                    <div>
                      <div className="text-sm font-semibold">
                        Parcerias flexíveis
                      </div>

                      <p className="mt-1 text-xs leading-relaxed text-white/70">
                        Soluções adaptáveis para diferentes tipos de operação e
                        parceiros automotivos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
