/**
 * Dados institucionais e navegação.
 * ✏️  Ficheiros em src/content/ podem ser editados por quem trata do conteúdo, sem mexer em componentes.
 */

export const site = {
  name: "JEFAI",
  fullName: "Junior Enterprise for Artificial Intelligence",
  description:
    "Júnior Iniciativa da Universidade de Coimbra dedicada a soluções de Inteligência Artificial, Machine Learning, análise de dados e automação.",
  // TODO(conteúdo): substituir pelo domínio final quando o DNS estiver configurado (issue WEB-17)
  url: "https://jefai.pt",
  locale: "pt_PT",
} as const;

export type NavLink = { label: string; href: `#${string}` };

/** Cada href tem de corresponder ao `id` de uma secção em src/app/page.tsx. */
export const navLinks: NavLink[] = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como Trabalhamos", href: "#como-trabalhamos" },
  { label: "Departamentos", href: "#departamentos" },
  { label: "Recrutamento", href: "#recrutamento" },
];

export const primaryCta = { label: "Fale Connosco", href: "#contacto" } as const;

export const contactInfo = {
  address: ["Rua Larga, Departamento de Física da FCTUC", "3004-516 Coimbra, Portugal"],
  email: "jefaicoimbra@gmail.com",
  legalName: "Associação Juvenil JEFAI",
  nipc: "517 706 040",
} as const;

// TODO(conteúdo): preencher os URLs reais (issue WEB-16)
export const socialLinks = [
  { label: "LinkedIn", href: "" },
  { label: "Instagram", href: "" },
  { label: "TikTok", href: "" },
] as const;

export const footer = {
  copyright: `© ${new Date().getFullYear()} Associação Juvenil JEFAI — Júnior Iniciativa da Universidade de Coimbra.`,
  institution: "Faculdade de Ciências e Tecnologia da Universidade de Coimbra (FCTUC)",
} as const;
