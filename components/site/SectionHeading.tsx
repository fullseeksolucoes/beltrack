interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-green">
        {label}
      </span>
      <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-balance">
        {title}
      </h2>
      {description && <p className="mt-4 text-ink-muted max-w-xl">{description}</p>}
    </div>
  );
}
