import {
  Satellite,
  Headphones,
  Smartphone,
  LockKeyhole,
  Route,
  Wrench,
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Satellite,
    title: "Rastreador Veicular GPS",
    desc: "Acompanhe a localização do veículo em tempo real com acesso ao histórico de rotas, paradas e informações de deslocamento pelo aplicativo.",
  },
  {
    icon: Smartphone,
    title: "Aplicativo de Monitoramento",
    desc: "Tenha acesso a todas as informações do veículo diretamente pelo celular: localização, trajetos, alertas e muito mais de forma prática.",
  },
  {
    icon: LockKeyhole,
    title: "Bloqueio Remoto",
    desc: "Função disponível em planos selecionados para desligar o veículo à distância pelo aplicativo em caso de furto ou roubo.",
    options: ["Disponível em planos selecionados"],
  },
  {
    icon: Route,
    title: "Histórico de Rotas e Relatórios",
    desc: "Consulte trajetos percorridos, paradas realizadas, tempo de deslocamento e gere relatórios detalhados sempre que precisar.",
  },
  {
    icon: Wrench,
    title: "Instalação de Rastreador",
    desc: "Instalação realizada por técnicos especializados com segurança e cuidado para garantir o funcionamento correto do rastreador veicular.",
  },
  {
    icon: Headphones,
    title: "Suporte Técnico Especializado",
    desc: "Atendimento humano para suporte e orientações relacionadas ao sistema de rastreamento, com acompanhamento personalizado.",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative py-24 md:py-32 bg-surface-muted"
      aria-label="Serviços de rastreamento veicular"
    >
      <div className="mx-auto max-w-7xl container-px">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-green">
              Serviços
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-balance">
              Rastreador veicular com monitoramento em tempo real pelo celular.
            </h2>
          </div>
          <p className="max-w-md text-ink-muted">
            Tecnologia e praticidade para acompanhar seu veículo de onde estiver.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden hairline">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
              options={service.options}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
