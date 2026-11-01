import { cn } from "@/lib/cn";

type CardProps = {
  /**
   * - "ice": fundo azul claro (Como Trabalhamos, Recrutamento)
   * - "white": fundo branco com borda (Áreas de Atuação)
   * - "brand": fundo azul JEFAI com texto branco (destaque)
   */
  tone?: "ice" | "white" | "brand";
  className?: string;
  children: React.ReactNode;
};

const toneClasses = {
  ice: "bg-jefai-ice border border-jefai-ice-border",
  white: "bg-white border border-slate-200",
  brand: "bg-jefai text-white",
} as const;

/** Caixa de conteúdo genérica. O conteúdo interno é livre. */
export function Card({ tone = "ice", className, children }: CardProps) {
  return <div className={cn("rounded-2xl p-7", toneClasses[tone], className)}>{children}</div>;
}
