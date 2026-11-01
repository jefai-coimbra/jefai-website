import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = {
  /** Âncora usada pela navbar (ex.: "servicos" → /#servicos). */
  id?: string;
  /** Fundo: branco ou "ice" (azul muito claro). Alternar entre secções seguidas. */
  tone?: "white" | "ice";
  /** Linha separadora. */
  border?: "none" | "top" | "bottom" | "y";
  className?: string;
  children: React.ReactNode;
};

const toneClasses = {
  white: "bg-white",
  ice: "bg-jefai-ice",
} as const;

const borderClasses = {
  none: "",
  top: "border-t",
  bottom: "border-b",
  y: "border-y",
} as const;

/**
 * Bloco base de qualquer secção da página.
 * Trata do espaçamento vertical, cor de fundo, bordas e do Container.
 *
 * @example
 * <Section id="servicos" tone="ice" border="y">
 *   <SectionHeader ... />
 *   ...
 * </Section>
 */
export function Section({
  id,
  tone = "white",
  border = "none",
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20",
        toneClasses[tone],
        borderClasses[border],
        tone === "ice" ? "border-jefai-ice-border" : "border-slate-200",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
