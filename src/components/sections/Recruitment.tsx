import { Section } from "@/components/ui/Section";
import { SectionPlaceholder } from "@/components/ui/SectionPlaceholder";
import { recruitment } from "@/content/home";

/**
 * Recrutamento (estado aberto/fechado + 3 etapas) — WEB-04.
 * Conteúdo: `recruitment` em src/content/home.ts.
 */
export function Recruitment() {
  return (
    <Section id={recruitment.id} border="top">
      <SectionPlaceholder issue="WEB-04" title="Recrutamento" />
    </Section>
  );
}
