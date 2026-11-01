/**
 * CONTRATO DO FORMULÁRIO DE CONTACTO — partilhado entre o formulário e a Server Action (WEB-08).
 */
import { z } from "zod";
import { contact } from "@/content/home";
import { getText } from "@/lib/forms";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Indique o seu nome.").max(120),
  email: z.email("Email inválido.").max(254),
  subject: z
    .string()
    .refine((value) => contact.subjects.includes(value), "Escolha um assunto da lista."),
  message: z
    .string()
    .trim()
    .min(10, "A mensagem é demasiado curta.")
    .max(5000, "A mensagem tem um máximo de 5000 caracteres."),
  consent: z.literal(true, "É necessário aceitar a Política de Privacidade."),
});

export type ContactMessage = z.output<typeof contactSchema>;
export type ContactField = keyof ContactMessage;

export function contactFromFormData(formData: FormData): Record<string, unknown> {
  return {
    name: getText(formData, "name"),
    email: getText(formData, "email"),
    subject: getText(formData, "subject"),
    message: getText(formData, "message"),
    consent: formData.get("consent") === "on",
  };
}
