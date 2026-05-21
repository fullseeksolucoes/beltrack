import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  variant?: "primary" | "green";
  children: ReactNode;
  className?: string;
}

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all duration-200 ${
        variant === "green"
          ? "bg-brand-green text-white shadow-[0_8px_24px_-8px_rgba(97,166,54,0.4)] hover:brightness-110"
          : "bg-primary text-primary-foreground hover:bg-brand-blue-deep"
      } ${className}`}
    >
      {children}
    </a>
  );
}
