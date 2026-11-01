import { Section } from "@/components/ui/Section";
import { SectionPlaceholder } from "@/components/ui/SectionPlaceholder";
import { departments } from "@/content/home";

/**
 * Os 4 Departamentos (tabs interativas) — WEB-06.
 * Conteúdo: `departments` em src/content/home.ts.
 * Nota: as tabs precisam de estado → criar um Client Component ("use client") só para essa parte.
 */
export function Departments() {
  return (
    <Section id={departments.id} tone="ice" border="top">
      <SectionPlaceholder issue="WEB-06" title="Departamentos (tabs)" />
    </Section>
  );
}
