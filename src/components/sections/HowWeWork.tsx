/**
 * ⭐ COMPONENTE DE REFERÊNCIA
 * Esta secção está completa e é o modelo a seguir nas outras secções:
 *   1. o conteúdo vem de src/content (nunca texto escrito diretamente no JSX);
 *   2. o layout usa os componentes de src/components/ui (Section, SectionHeader, Card);
 *   3. as cores vêm dos tokens (bg-jefai, text-jefai-light…), nunca de hex soltos;
 *   4. listas são geradas com .map() e uma `key` estável;
 *   5. a grelha é mobile-first: 1 coluna → 2 (sm) → 4 (lg).
 */
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { howWeWork } from "@/content/home";
import { cn } from "@/lib/cn";

export function HowWeWork() {
  const { id, eyebrow, title, description, steps } = howWeWork;

  return (
    <Section id={id}>
      <SectionHeader eyebrow={eyebrow} title={title} description={description} layout="split" />

      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => {
          // O último passo é destacado com o fundo azul JEFAI, como no mockup.
          const isLast = index === steps.length - 1;

          return (
            <li key={step.title}>
              <Card tone={isLast ? "brand" : "ice"} className="h-full">
                <span
                  aria-hidden="true"
                  className={cn(
                    "font-mono text-4xl font-extrabold",
                    isLast ? "text-sky-300/40" : "text-jefai/25",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}.
                </span>
                <h3 className={cn("mt-4 text-lg font-bold", !isLast && "text-slate-900")}>
                  {step.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed",
                    isLast ? "text-sky-100" : "text-slate-600",
                  )}
                >
                  {step.description}
                </p>
              </Card>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
