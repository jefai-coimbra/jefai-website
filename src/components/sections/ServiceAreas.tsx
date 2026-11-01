import { Section } from "@/components/ui/Section";
import { SectionPlaceholder } from "@/components/ui/SectionPlaceholder";
import { serviceAreas } from "@/content/home";

/**
 * Áreas de Atuação (6 cards) — WEB-03.
 * Conteúdo: `serviceAreas` em src/content/home.ts. Referência: HowWeWork.tsx.
 */
export function ServiceAreas() {
  return (
    <Section id={serviceAreas.id} tone="ice" border="y">
      <SectionPlaceholder issue="WEB-03" title="Áreas de Atuação" />
    </Section>
  );
}
