/**
 * CONTRATO DA CANDIDATURA — partilhado entre o formulário (WEB-24) e o servidor (WEB-25).
 * Alterar este ficheiro = alterar o contrato → avisar quem trabalha nas duas pontas.
 *
 * A mesma validação corre no browser (feedback imediato) e no servidor (segurança:
 * nunca confiar no que vem do browser).
 */
import { z } from "zod";
import { getText } from "@/lib/forms";

export const DEPARTMENT_KEYS = ["projetos", "marketing", "rh", "financeiro"] as const;
export type DepartmentKey = (typeof DEPARTMENT_KEYS)[number];

export const DEGREES = ["licenciatura", "mestrado", "mestrado-integrado"] as const;
export type Degree = (typeof DEGREES)[number];

/** Ano máximo por grau (1.º ano de licenciatura → 2.º ano de mestrado). */
export const MAX_YEAR_BY_DEGREE: Record<Degree, number> = {
  licenciatura: 3,
  mestrado: 2,
  "mestrado-integrado": 5,
};

/** CV: só PDF, até 2 MB. Não aumentar sem rever o bodySizeLimit (next.config.ts) e o ADR 0002. */
export const CV_MAX_BYTES = 2 * 1024 * 1024;
export const CV_MIME_TYPE = "application/pdf";

export const MOTIVATION_MIN = 300;
export const MOTIVATION_MAX = 3000;

const emptyToUndefined = (value: unknown) => (value === "" ? undefined : value);

export const applicationSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(3, "Indica o teu nome completo.")
      .max(120, "Nome demasiado longo."),
    email: z.email("Email inválido.").max(254),
    phone: z.preprocess(
      emptyToUndefined,
      z
        .string()
        .trim()
        .regex(/^\+?[\d\s]{9,15}$/, "Número de telemóvel inválido.")
        .optional(),
    ),
    course: z.string().trim().min(2, "Indica o teu curso.").max(120),
    degree: z.enum(DEGREES, "Escolhe o grau."),
    year: z.coerce.number().int().min(1, "Escolhe o ano.").max(5),
    departments: z
      .array(z.enum(DEPARTMENT_KEYS))
      .min(1, "Escolhe pelo menos a 1.ª opção.")
      .max(DEPARTMENT_KEYS.length)
      .refine((list) => new Set(list).size === list.length, "Não repitas departamentos."),
    motivation: z
      .string()
      .trim()
      .min(
        MOTIVATION_MIN,
        `A carta de motivação precisa de pelo menos ${MOTIVATION_MIN} caracteres.`,
      )
      .max(MOTIVATION_MAX, `A carta de motivação tem um máximo de ${MOTIVATION_MAX} caracteres.`),
    linkedinUrl: z.preprocess(
      emptyToUndefined,
      z
        .url({ protocol: /^https$/, error: "Link inválido (tem de começar por https://)." })
        .optional(),
    ),
    cv: z
      .file("Anexa o teu CV.")
      .mime(CV_MIME_TYPE, "O CV tem de ser um PDF.")
      .max(CV_MAX_BYTES, "O CV tem um máximo de 2 MB."),
    consent: z.literal(true, "Tens de aceitar a Política de Privacidade para continuar."),
  })
  .refine((data) => data.year <= MAX_YEAR_BY_DEGREE[data.degree], {
    path: ["year"],
    message: "Ano inválido para o grau escolhido.",
  });

export type ApplicationInput = z.input<typeof applicationSchema>;
export type Application = z.output<typeof applicationSchema>;
export type ApplicationField = keyof Application;

/**
 * Converte o FormData do formulário no objeto que o schema valida.
 * Nomes dos campos no <form> = chaves do schema.
 * `departments` vem de vários <select name="departments"> pela ordem de preferência.
 */
export function applicationFromFormData(formData: FormData): Record<string, unknown> {
  const cv = formData.get("cv");

  return {
    fullName: getText(formData, "fullName"),
    email: getText(formData, "email"),
    phone: getText(formData, "phone"),
    course: getText(formData, "course"),
    degree: getText(formData, "degree"),
    year: getText(formData, "year"),
    departments: formData
      .getAll("departments")
      .filter((value): value is string => typeof value === "string" && value !== ""),
    motivation: getText(formData, "motivation"),
    linkedinUrl: getText(formData, "linkedinUrl"),
    // Um input de ficheiro vazio envia um File com tamanho 0 → tratar como "não anexado".
    cv: cv instanceof File && cv.size > 0 ? cv : undefined,
    consent: formData.get("consent") === "on",
  };
}
