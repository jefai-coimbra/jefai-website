import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { departments } from "@/content/home";
import { DepartmentTabs } from "./DepartmentTabs";

/**
 * Os 4 Departamentos (tabs interativas) — WEB-06.
 * Conteúdo: `departments` em src/content/home.ts.
 * Este ficheiro continua a ser um Server Component: só o <DepartmentTabs /> tem estado ("use client").
 * O cabeçalho é passado como `heading` para ficar à esquerda das tabs no desktop.
 */
export function Departments() {
  const { id, eyebrow, title, tablistLabel, responsibilitiesTitle, items } = departments;

  return (
    <Section id={id} tone="ice" border="top">
      <DepartmentTabs
        heading={<SectionHeader eyebrow={eyebrow} title={title} className="mb-0" />}
        tablistLabel={tablistLabel}
        responsibilitiesTitle={responsibilitiesTitle}
        items={items}
      />
    </Section>
  );
}
