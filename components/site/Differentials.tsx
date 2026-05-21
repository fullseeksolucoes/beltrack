import {
  BadgeCheck,
  Wrench,
  Smartphone,
  LockKeyhole,
  Route,
  RadioTower,
} from "lucide-react";
import DifferentialCard from "./DifferentialCard";

const items = [
  {
    icon: BadgeCheck,
    title: "Sem Fidelidade",
    desc: "Use enquanto fizer sentido para você, sem contratos longos ou burocracia. Cancele quando quiser.",
  },
  {
    icon: Wrench,
    title: "Instalação Especializada",
    desc: "Instalação realizada com cuidado e segurança por técnicos treinados, garantindo o funcionamento correto do rastreador.",
  },
  {
    icon: Smartphone,
    title: "Acesso via Aplicativo",
    desc: "Acompanhe localização, trajetos e alertas do veículo diretamente pelo celular, de forma intuitiva e prática.",
  },
  {
    icon: LockKeyhole,
    title: "Bloqueio Remoto",
    desc: "Desligue o veículo à distância em caso de furto ou roubo. Função disponível em planos selecionados.",
    options: "Disponível em planos selecionados",
  },
  {
    icon: Route,
    title: "Histórico de Trajetos",
    desc: "Consulte rotas percorridas, paradas realizadas e informações de deslocamento sempre que precisar.",
  },
  {
    icon: RadioTower,
    title: "Sinal e Conectividade",
    desc: "Equipamentos com chips de qualidade para melhor estabilidade, alcance e comunicação do rastreador veicular.",
  },
];

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative py-24 md:py-32 bg-primary text-white overflow-hidden"
      aria-label="Diferenciais Beltrack"
    >
      <div className="absolute inset-0 grid-bg-dark opacity-60 radar-mask pointer-events-none" />
      <div className="absolute -left-32 top-20 w-96 h-96 rounded-full bg-brand-green/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl container-px">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-green">
            Diferenciais
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white text-balance">
            Por que escolher a Beltrack para seu rastreador veicular.
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">
            Tecnologia, processos e uma equipe preparada para responder no
            momento que importa.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden ring-1 ring-white/10">
          {items.map((it, i) => (
            <DifferentialCard
              key={it.title}
              icon={it.icon}
              title={it.title}
              desc={it.desc}
              index={i}
              options={it.options}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
