import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionPlaceholder } from "@/components/ui/SectionPlaceholder";
import { applicationPage } from "@/content/application";

export const metadata: Metadata = {
  title: "Candidatura",
  description: applicationPage.description,
};

/**
 * Página de candidatura — WEB-24.
 * - Se `recruitment.isOpen` for false: mostrar closedTitle/closedDescription em vez do formulário.
 * - O formulário é um Client Component (ApplicationForm.tsx) que usa a action `submitApplication`.
 */
export default function ApplicationPage() {
  return (
    <Section>
      <SectionPlaceholder issue="WEB-24" title="Formulário de candidatura" />
    </Section>
  );
}
