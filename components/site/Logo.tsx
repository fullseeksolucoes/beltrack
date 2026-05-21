import Image from "next/image";

interface LogoProps {
  variant?: "header" | "footer";
}

export default function Logo({ variant = "header" }: LogoProps) {
  return (
    <Image
      src={`/logo-${variant}.webp`}
      alt="Beltrack"
      width={170}
      height={36}
      priority
      draggable={false}
    />
  );
}
