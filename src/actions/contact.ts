"use server";

/**
 * Server Action do formulário de contacto.
 * ✅ Já faz: anti-spam (honeypot) e validação.
 * 🚧 Falta: enviar o email (WEB-08).
 */
import { z } from "zod";
import { contactMessages } from "@/content/forms";
import { HONEYPOT_FIELD, type FormState } from "@/lib/forms";
import { contactFromFormData, contactSchema, type ContactField } from "@/lib/validation/contact";

export async function sendContactMessage(
  _previousState: FormState<ContactField>,
  formData: FormData,
): Promise<FormState<ContactField>> {
  if (formData.get(HONEYPOT_FIELD)) {
    return { status: "success", message: contactMessages.success };
  }

  const parsed = contactSchema.safeParse(contactFromFormData(formData));
  if (!parsed.success) {
    return {
      status: "error",
      message: contactMessages.invalid,
      fieldErrors: z.flattenError(parsed.error).fieldErrors as Partial<
        Record<ContactField, string[]>
      >,
    };
  }

  // TODO(WEB-08): enviar parsed.data para CONTACT_INBOX com o helper de src/server/email.ts
  //               (reply-to = email de quem escreveu). Em caso de erro → contactMessages.failure.

  return { status: "error", message: contactMessages.failure };
}
