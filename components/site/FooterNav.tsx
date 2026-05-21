import { navItems } from "./NavLinks";

export default function FooterNav() {
  return (
    <div className="md:col-span-3">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-white/80">
        Navegação
      </h3>
      <nav aria-label="Navegação do rodapé">
        <ul className="mt-4 space-y-3 text-sm text-white/60">
          {navItems.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="hover:text-white transition-colors">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
