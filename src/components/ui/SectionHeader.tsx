import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  /**
   * - "split": eyebrow + título à esquerda, descrição à direita (ex.: Como Trabalhamos)
   * - "center": tudo centrado (ex.: Áreas de Atuação)
   * - "left": tudo alinhado à esquerda
   */
  layout?: "split" | "center" | "left";
  className?: string;
};

/** Cabeçalho padrão das secções. Usa sempre <h2> — o <h1> é exclusivo do Hero. */
export function SectionHeader({
  eyebrow,
  title,
  description,
  layout = "left",
  className,
}: SectionHeaderProps) {
  const heading = (
    <div>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
    </div>
  );

  if (layout === "split") {
    return (
      <div
        className={cn("mb-14 flex flex-col justify-between md:flex-row md:items-end", className)}
      >
        {heading}
        {description && (
          <p className="mt-3 max-w-md text-sm text-slate-600 md:mt-0">{description}</p>
        )}
      </div>
    );
  }

  return (
    <div className={cn("mb-14", layout === "center" && "mx-auto max-w-2xl text-center", className)}>
      {heading}
      {description && <p className="mt-3 text-slate-600">{description}</p>}
    </div>
  );
}
