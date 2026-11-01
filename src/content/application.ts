/**
 * Conteúdo da página /candidatura (WEB-24).
 * As opções dos selects derivam dos dados já existentes, para não haver duas listas para manter.
 */
import { departments } from "@/content/home";
import { DEGREES, type Degree } from "@/lib/validation/application";

export const applicationPage = {
  title: "Candidatura à JEFAI",
  description:
    "Preenche o formulário com os teus dados académicos, as tuas preferências de departamento, a carta de motivação e o CV. Demora cerca de 10 minutos.",
  closedTitle: "Candidaturas encerradas",
  closedDescription:
    "De momento não estamos a recrutar. Segue-nos nas redes sociais para saberes quando abre a próxima edição.",

  sections: {
    personal: "Dados pessoais",
    academic: "Percurso académico",
    preferences: "Preferências de departamento",
    motivation: "Motivação e CV",
  },

  labels: {
    fullName: "Nome completo",
    email: "Email",
    phone: "Telemóvel (opcional)",
    course: "Curso",
    degree: "Grau",
    year: "Ano",
    departments: [
      "1.ª opção",
      "2.ª opção (opcional)",
      "3.ª opção (opcional)",
      "4.ª opção (opcional)",
    ],
    motivation: "Carta de motivação",
    linkedinUrl: "LinkedIn (opcional)",
    cv: "CV (PDF, máx. 2 MB)",
    consent:
      "Li e aceito a Política de Privacidade e autorizo o tratamento dos meus dados para efeitos de recrutamento.",
    submit: "Submeter candidatura",
    submitting: "A submeter…",
  },

  hints: {
    motivation:
      "Porque queres entrar na JEFAI? O que esperas aprender e o que podes trazer à equipa?",
    course: "Ex.: Licenciatura em Engenharia Informática",
  },
} as const;

export const degreeOptions: { value: Degree; label: string }[] = DEGREES.map((value) => ({
  value,
  label: {
    licenciatura: "Licenciatura",
    mestrado: "Mestrado",
    "mestrado-integrado": "Mestrado Integrado",
  }[value],
}));

export const departmentOptions = departments.items.map(({ key, name }) => ({
  value: key,
  label: name,
}));
