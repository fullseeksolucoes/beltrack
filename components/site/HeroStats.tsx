import { Satellite, FileText, Smartphone } from "lucide-react";

const items = [
  { icon: Satellite, k: "GPS em tempo real", v: "Monitoramento inteligente" },
  { icon: FileText, k: "Relat\u00f3rios completos", v: "Hist\u00f3rico de trajetos" },
  { icon: Smartphone, k: "Acesso mobile", v: "Controle via aplicativo" },
];

export default function HeroStats() {
  return (
    <div className="mt-12 flex flex-wrap gap-x-8 gap-y-5">
      {items.map((s) => (
        <div key={s.k} className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-brand-green-soft flex items-center justify-center shrink-0">
            <s.icon className="size-4 text-brand-green" />
          </div>
          <div>
            <div className="text-sm font-semibold text-ink leading-snug">{s.k}</div>
            <div className="text-xs text-ink-muted leading-snug mt-0.5">{s.v}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
