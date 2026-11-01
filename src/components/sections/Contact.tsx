import { Section } from "@/components/ui/Section";
import { SectionPlaceholder } from "@/components/ui/SectionPlaceholder";
import { contact } from "@/content/home";
import { ContactForm } from "./ContactForm";

/**
 * Contacto: painel institucional à esquerda + formulário à direita — WEB-05.
 * Conteúdo: `contact` em src/content/home.ts e `contactInfo`/`socialLinks` em src/content/site.ts.
 * O formulário (<ContactForm />) é uma issue separada (WEB-08) — aqui só se encaixa no layout.
 */
export function Contact() {
  return (
    <Section id={contact.id} tone="ice" border="top">
      <SectionPlaceholder issue="WEB-05" title="Contacto — painel institucional e layout" />
      <div className="mt-6">
        <ContactForm />
      </div>
    </Section>
  );
}
