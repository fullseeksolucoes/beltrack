"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { waLink } from "@/lib/whatsapp";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md border-b border-border"
            : open
              ? "bg-white border-b border-border"
              : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl container-px h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0" aria-label="Beltrack - Página inicial">
            <Logo />
          </Link>

          <NavLinks className="hidden md:flex items-center gap-9" />

          <div className="hidden md:flex items-center gap-3">
            <a
              href={waLink("Olá, gostaria de solicitar um orçamento")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-brand-blue-deep transition-colors shadow-[0_6px_20px_-8px_rgba(19,58,96,0.5)]"
            >
              Solicitar orçamento
            </a>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-md text-primary"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
