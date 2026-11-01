import { cn } from "@/lib/cn";

type EyebrowProps = {
  /** "brand" em fundos claros, "onDark" em fundos azul-escuros. */
  tone?: "brand" | "onDark";
  className?: string;
  children: React.ReactNode;
};

/** Pequeno rótulo monoespaçado em maiúsculas que aparece por cima dos títulos. */
export function Eyebrow({ tone = "brand", className, children }: EyebrowProps) {
  return (
    <span
      className={cn(
        "font-mono text-xs font-semibold tracking-widest uppercase",
        tone === "brand" ? "text-jefai" : "text-sky-300",
        className,
      )}
    >
      {children}
    </span>
  );
}
