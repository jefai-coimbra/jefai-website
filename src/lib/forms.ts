/**
 * Estado devolvido por TODAS as Server Actions de formulários.
 * É o contrato entre o formulário (cliente) e a action (servidor):
 * o formulário usa `useActionState(action, initialFormState)` e mostra
 * `message` + `fieldErrors[campo]` conforme o `status`.
 */
export type FormState<Field extends string = string> =
  | { status: "idle" }
  | { status: "success"; message: string }
  | {
      status: "error";
      message: string;
      /** Erros por campo, ex.: { email: ["Email inválido."] } */
      fieldErrors?: Partial<Record<Field, string[]>>;
    };

export const initialFormState: FormState<never> = { status: "idle" };

/** Lê um campo de texto de um FormData (devolve "" se não existir). */
export function getText(formData: FormData, name: string): string {
  const value = formData.get(name);
  return typeof value === "string" ? value : "";
}

/** Nome do campo-armadilha anti-spam. Fica escondido; humanos não o preenchem. */
export const HONEYPOT_FIELD = "website";
