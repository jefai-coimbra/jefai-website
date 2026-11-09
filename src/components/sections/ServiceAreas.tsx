import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { serviceAreas } from "@/content/home";

/**
 * Áreas de Atuação (6 cards) — WEB-03.
 * Conteúdo: `serviceAreas` em src/content/home.ts. Segue o padrão de HowWeWork.tsx.
 */
export function ServiceAreas() {
  const { id, eyebrow, title, areas } = serviceAreas;

  return (
    <Section id={id} tone="ice" border="y">
      <SectionHeader eyebrow={eyebrow} title={title} layout="center" />

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((area, index) => (
          <li key={area.title}>
            {/* O mockup usa cantos mais pequenos (xl) do que o Card por defeito (2xl). */}
            <Card tone="white" className="h-full rounded-xl">
              <span className="font-mono text-xs font-semibold text-jefai-light uppercase">
                {String(index + 1).padStart(2, "0")} / {area.tag}
              </span>
              <h3 className="mt-2 text-lg font-bold text-slate-900">{area.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{area.description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
