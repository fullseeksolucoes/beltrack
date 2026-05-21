import PlanCard from "./PlanCard";

const plans = [
  {
    name: "Plano Essencial",
    eyebrow: "Para uso diário",
    description:
      "Rastreamento veicular em tempo real com acesso ao aplicativo, ideal para acompanhar seu veículo no dia a dia.",
    unavailableFeatures: ["Bloqueio remoto"],
    features: [
      "Rastreamento em tempo real",
      "Acesso via aplicativo",
      "Histórico de trajetos",
      "Relatórios de deslocamento",
      "Acompanhamento pelo celular",
      "Sem fidelidade",
    ],
    note: "Bloqueio remoto disponível no Premium",
  },
  {
    name: "Plano Premium",
    eyebrow: "Mais controle e segurança",
    description:
      "O plano completo com bloqueio remoto, rastreamento GPS em tempo real e todos os recursos de segurança.",
    featured: true,
    badge: "Mais escolhido",
    features: [
      "Rastreamento em tempo real",
      "Acesso via aplicativo",
      "Histórico de trajetos",
      "Relatórios de deslocamento",
      "Acompanhamento pelo celular",
      "Sem fidelidade",
      "Bloqueio remoto",
    ],
    note: "Instalação inclusa • Sem fidelidade",
  },
];

export default function Plans() {
  return (
    <section
      id="planos"
      className="relative py-24 md:py-32 bg-surface-muted"
      aria-label="Planos de rastreamento veicular"
    >
      <div className="mx-auto max-w-7xl container-px">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-green">
            Planos
          </span>

          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-balance">
            Escolha seu plano de rastreador veicular.
          </h2>

          <p className="mt-4 text-ink-muted max-w-lg">
            Todos os planos incluem instalação especializada, suporte técnico e
            acesso ao aplicativo de monitoramento.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 md:gap-8 items-start max-w-4xl mx-auto">
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
