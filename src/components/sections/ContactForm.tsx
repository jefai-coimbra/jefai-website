import { SectionPlaceholder } from "@/components/ui/SectionPlaceholder";

/**
 * Formulário de contacto — WEB-08.
 * A Server Action já existe e já valida: src/actions/contact.ts (falta enviar o email).
 * Este componente passa a "use client" e usa `useActionState(sendContactMessage, initialFormState)`.
 */
export function ContactForm() {
  return <SectionPlaceholder issue="WEB-08" title="Formulário de contacto (envio + validação)" />;
}
