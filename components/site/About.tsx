import AboutVisual from "./AboutVisual";
import CheckList from "./CheckList";

const points = [
  "Instalação especializada e suporte técnico",
  "Acesso via aplicativo em tempo real",
  "Histórico de trajetos e deslocamentos",
  "Planos sem fidelidade",
];

const aboutStats = [
  { k: "+100", v: "Veículos monitorados" },
  { k: "Suporte", v: "Técnico especializado" },
  { k: "Sem", v: "Fidelidade" },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative py-24 md:py-32"
      aria-label="Sobre a Beltrack"
    >
      <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <AboutVisual />
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-green">
            Sobre a Beltrack
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-balance">
            Rastreador veicular com tecnologia e praticidade para seu dia a dia.
          </h2>
          <p className="mt-5 text-ink-muted leading-relaxed">
            A Beltrack oferece soluções de rastreamento veicular para carros,
            motos e frotas. Com instalação especializada, acesso via aplicativo
            e informações em tempo real, você tem mais controle e segurança
            sobre seu veículo.
          </p>

          <CheckList items={points} />

          <div className="mt-10 flex items-center gap-8 pt-8 border-t border-border">
            {aboutStats.map((s) => (
              <div key={s.k}>
                <div className="font-display text-3xl font-extrabold text-primary">
                  {s.k}
                </div>
                <div className="text-xs text-ink-muted mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
