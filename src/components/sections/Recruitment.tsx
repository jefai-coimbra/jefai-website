import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { recruitment } from "@/content/home";
import { cn } from "@/lib/cn";

/**
 * Recrutamento (estado aberto/fechado + 3 etapas) — WEB-04.
 * Conteúdo: `recruitment` em src/content/home.ts. Segue o padrão de HowWeWork.tsx.
 * O estado é controlado só por `recruitment.isOpen`.
 */
export function Recruitment() {
  const { id, isOpen, open, closed, stepLabel, title, description, steps } = recruitment;
  const status = isOpen ? open : closed;

  return (
    <Section id={id} border="top">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold",
              isOpen
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-amber-200 bg-amber-50 text-amber-700",
            )}
          >
            <span
              aria-hidden="true"
              className={cn("size-2 rounded-full", isOpen ? "bg-emerald-500" : "bg-amber-500")}
            />
            {status.badge}
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">{description}</p>

          <ButtonLink href={status.href} size="lg" className="mt-7">
            {status.cta}
          </ButtonLink>
        </div>

        <ol className="grid gap-5 sm:grid-cols-3 lg:col-span-7">
          {steps.map((step, index) => (
            <li key={step.title}>
              {/* O mockup usa padding mais pequeno (p-6) do que o Card por defeito (p-7). */}
              <Card tone="ice" className="h-full p-6">
                <span className="font-mono text-xs font-bold text-jefai uppercase">
                  {stepLabel} {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-base font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{step.description}</p>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
