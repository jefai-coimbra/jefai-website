import { cn } from "@/lib/cn";

type LogoProps = {
  /** "blue" para fundos claros, "white" para fundos escuros. */
  variant?: "blue" | "white";
  className?: string;
};

/**
 * Lockup do logótipo (símbolo + "Junior Enterprise for Artificial Intelligence").
 * Versão vetorial provisória retirada do mockup — substituir pelo SVG oficial em WEB-12.
 */
export function Logo({ variant = "blue", className }: LogoProps) {
  const isWhite = variant === "white";

  return (
    <span className={cn("inline-flex items-center gap-3 select-none", className)}>
      <svg
        viewBox="0 0 120 110"
        className={cn("h-10 w-auto", isWhite ? "fill-white" : "fill-jefai")}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M 16 88 C 12 88, 10 82, 12 72 L 19 34 C 23 15, 35 10, 48 10 C 62 10, 72 18, 76 38 L 80 65 C 82 78, 86 85, 92 85 C 98 85, 102 78, 102 64 L 98 25 C 97 14, 101 10, 107 10 C 113 10, 117 15, 115 26 L 109 68 C 106 86, 99 95, 89 95 C 78 95, 71 84, 66 64 L 60 44 C 56 32, 48 28, 41 28 C 33 28, 26 35, 24 52 L 22 73 C 22 83, 20 88, 16 88 Z" />
      </svg>
      <span
        className={cn(
          "text-left font-mono text-[10px] leading-[1.2] font-semibold tracking-[0.16em] uppercase",
          isWhite ? "text-white" : "text-slate-900",
        )}
      >
        <span className="block">Junior Enterprise</span>
        <span className="block">for</span>
        <span className="block">Artificial Intelligence</span>
      </span>
    </span>
  );
}
