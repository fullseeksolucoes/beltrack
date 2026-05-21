import { Check } from "lucide-react";

interface CheckListProps {
  items: string[];
}

export default function CheckList({ items }: CheckListProps) {
  return (
    <ul className="mt-8 space-y-3">
      {items.map((p) => (
        <li key={p} className="flex items-start gap-3">
          <span className="mt-0.5 h-6 w-6 rounded-full bg-brand-green-soft text-brand-green flex items-center justify-center shrink-0">
            <Check className="size-3.5" strokeWidth={3} />
          </span>
          <span className="text-sm text-ink">{p}</span>
        </li>
      ))}
    </ul>
  );
}
