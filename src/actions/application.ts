"use server";

/**
 * Server Action da candidatura.
 * ✅ Já faz: verificar se o recrutamento está aberto, anti-spam (honeypot) e validação completa.
 * 🚧 Falta: guardar (WEB-25) e notificar (WEB-26) — ver os TODO abaixo.
 *
 * Regras:
 *  - NUNCA fazer console.log de dados pessoais (nome, email, CV…). Para depurar, registar só o id.
 *  - Chaves e clientes externos (Neon, Blob, Resend) vivem em src/server/ com `import "server-only"`.
 */
import { z } from "zod";
import { applicationMessages } from "@/content/forms";
import { recruitment } from "@/content/home";
import { HONEYPOT_FIELD, type FormState } from "@/lib/forms";
import {
  applicationFromFormData,
  applicationSchema,
  type ApplicationField,
} from "@/lib/validation/application";

export async function submitApplication(
  _previousState: FormState<ApplicationField>,
  formData: FormData,
): Promise<FormState<ApplicationField>> {
  if (!recruitment.isOpen) {
    return { status: "error", message: applicationMessages.closed };
  }

  // Bots preenchem todos os campos, incluindo o escondido. Fingimos sucesso e não guardamos nada.
  if (formData.get(HONEYPOT_FIELD)) {
    return { status: "success", message: applicationMessages.success };
  }

  const parsed = applicationSchema.safeParse(applicationFromFormData(formData));
  if (!parsed.success) {
    return {
      status: "error",
      message: applicationMessages.invalid,
      fieldErrors: z.flattenError(parsed.error).fieldErrors as Partial<
        Record<ApplicationField, string[]>
      >,
    };
  }

  // TODO(WEB-25): 1) guardar parsed.data.cv no Vercel Blob (store privada)
  //               2) inserir a candidatura no Neon com o pathname do CV
  //               (se 2 falhar, apagar o ficheiro de 1 — não deixar CVs órfãos)
  // TODO(WEB-26): 3) notificar RH  4) enviar confirmação ao candidato
  //               (uma falha de email NÃO deve fazer falhar a candidatura já guardada)

  return { status: "error", message: applicationMessages.notImplemented };
}
