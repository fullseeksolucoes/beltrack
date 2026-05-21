export const navItems = [
  { href: "#servicos", label: "Serviços" },
  { href: "#planos", label: "Planos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

interface NavLinksProps {
  className?: string;
  linkClassName?: string;
  onClick?: () => void;
}

export default function NavLinks({
  className = "",
  linkClassName = "",
  onClick,
}: NavLinksProps) {
  return (
    <nav className={className} aria-label="Navegação principal">
      {navItems.map((n) => (
        <a
          key={n.href}
          href={n.href}
          onClick={onClick}
          className={
            linkClassName ||
            "text-sm font-medium text-ink-muted hover:text-primary transition-colors"
          }
        >
          {n.label}
        </a>
      ))}
    </nav>
  );
}
