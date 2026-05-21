import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  options?: string[];
}

export default function ServiceCard({
  icon: Icon,
  title,
  desc,
  options,
}: ServiceCardProps) {
  return (
    <article className="group relative bg-white p-8 md:p-9 transition-colors hover:bg-brand-green-soft/40">
      <div className="flex items-start justify-between">
        <div className="h-12 w-12 rounded-xl bg-brand-green-soft text-brand-green flex items-center justify-center transition-transform group-hover:-rotate-3">
          <Icon className="size-5" />
        </div>
        <ArrowUpRight className="size-4 text-ink-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      </div>
      <h3 className="mt-7 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm text-ink-muted leading-relaxed">{desc}</p>
      {options?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {options.map((opt, i) => (
            <a
              key={i}
              href={waLink(`Olá, gostaria de saber mais sobre o serviço de ${title}`)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-brand-green/30 px-3 py-1 text-xs font-medium text-brand-green transition-colors hover:bg-brand-green hover:text-white"
            >
              {opt}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
