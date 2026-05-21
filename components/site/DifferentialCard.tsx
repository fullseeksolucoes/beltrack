import type { LucideIcon } from "lucide-react";

interface DifferentialCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  index: number;
}

export default function DifferentialCard({
  icon: Icon,
  title,
  desc,
  index,
  options,
}: DifferentialCardProps & { options?: string }) {
  return (
    <article className="flex flex-col bg-primary/60 backdrop-blur-sm p-8 transition-colors hover:bg-brand-blue-deep">
      <div className="flex items-center gap-3">
        <span className="text-xs font-mono text-white/40" aria-hidden="true">
          0{index + 1}
        </span>
        <span className="h-px flex-1 bg-white/15" />
      </div>
      <div className="mt-6 h-11 w-11 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-brand-green">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/65 leading-relaxed grow">{desc}</p>
      {options && (
        <p className="mt-4 text-[10px] font-medium text-white/70">
          <span className="text-brand-green" aria-hidden="true">*</span> {options}
        </p>
      )}
    </article>
  );
}
