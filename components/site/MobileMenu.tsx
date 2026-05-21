import NavLinks from "./NavLinks";
import { waLink } from "@/lib/whatsapp";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="md:hidden border-t border-border bg-white" role="dialog" aria-modal="true" aria-label="Menu de navegação">
      <div className="px-5 py-4 flex flex-col gap-1">
        <NavLinks
          className="flex flex-col gap-1"
          linkClassName="py-3 text-sm font-medium text-ink-muted hover:text-primary"
          onClick={onClose}
        />
        <a
          href={waLink("Olá, gostaria de solicitar um orçamento")}
          target="_blank"
          rel="noreferrer"
          onClick={onClose}
          className="mt-2 inline-flex items-center justify-center h-11 rounded-full px-6 bg-primary text-primary-foreground text-sm font-semibold"
        >
          Solicitar orçamento
        </a>
      </div>
    </div>
  );
}
