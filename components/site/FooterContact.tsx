import { MessageCircle, MapPin } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const contacts = [
  {
    icon: MessageCircle,
    content: (
      <a
        href={waLink("Olá, gostaria de mais informações sobre a Beltrack.")}
        className="hover:text-white transition-colors"
      >
        WhatsApp · (31) 99435-1895
      </a>
    ),
  },
  {
    icon: MapPin,
    content: "Belo Horizonte, MG · Brasil",
    isFlexStart: true,
  },
];

export default function FooterContact() {
  return (
    <address className="md:col-span-4 not-italic">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-white/80">
        Contato
      </h3>
      <ul className="mt-4 space-y-3 text-sm text-white/60">
        {contacts.map((c) => (
          <li
            key={String(c.content)}
            className={`flex items-center gap-3 ${c.isFlexStart ? "items-start" : ""}`}
          >
            <c.icon className="size-4 text-brand-green mt-0.5 shrink-0" />
            <span>{c.content}</span>
          </li>
        ))}
      </ul>
    </address>
  );
}
