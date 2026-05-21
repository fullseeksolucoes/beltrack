import { Check, X } from "lucide-react";
import Button from "./Button";
import { waLink } from "@/lib/whatsapp";

interface PlanCardProps {
  name: string;
  eyebrow: string;
  description: string;
  features: string[];
  unavailableFeatures?: string[];
  featured?: boolean;
  badge?: string;
  note?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PlanCard({
  name,
  eyebrow,
  description,
  features,
  featured = false,
  badge,
  note,
  ctaLabel = "Falar no WhatsApp",
  ctaHref,
  unavailableFeatures = [],
}: PlanCardProps) {
  return (
    <article
      className={`relative flex flex-col rounded-[28px] p-8 md:p-10 transition-all duration-300 ${
        featured
          ? "bg-white ring-2 ring-brand-green shadow-[0_10px_40px_-15px_rgba(97,166,54,0.25)] -translate-y-1.5 z-10"
          : "bg-white ring-1 ring-border hover:ring-brand-green/30 hover:shadow-xl hover:-translate-y-1"
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-brand-green px-4 py-1 text-xs font-semibold text-white shadow-lg">
          {badge}
        </span>
      )}

      <div className="flex-1">
        <span
          className={`text-xs font-semibold uppercase tracking-[0.16em] ${
            featured ? "text-brand-green" : "text-ink-muted"
          }`}
        >
          {eyebrow}
        </span>

        <h3 className="mt-3 text-2xl font-bold text-ink">{name}</h3>

        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {description}
        </p>

        <div className="my-6 h-px bg-border" />

        <p className="mb-4 text-sm font-semibold text-ink">
          O que está incluso:
        </p>

        <ul className="space-y-3">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm text-ink"
            >
              <span
                className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
                  featured
                    ? "bg-brand-green text-white"
                    : "bg-brand-green-soft text-brand-green"
                }`}
              >
                <Check className="size-3" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
          {unavailableFeatures.length > 0 && (
            <ul className="mt-3 space-y-3">
              {unavailableFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-ink-muted"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-muted text-ink-muted">
                    <X className="size-3" />
                  </span>
                  <span className="line-through opacity-70">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </ul>
      </div>

      {note && <p className="mt-6 text-xs text-ink-muted">{note}</p>}

      <Button
        href={ctaHref ?? waLink(`Olá, gostaria de saber mais sobre o ${name}`)}
        variant={featured ? "green" : "primary"}
        className="mt-8"
      >
        {ctaLabel}
      </Button>
    </article>
  );
}
