/**
 * Conteúdo das páginas secundárias (404, etc.).
 * Pode ser editado por quem trata do conteúdo, sem mexer em componentes.
 */

// ─── 404 ─────────────────────────────────────────────────────────────────────
export const notFound = {
  eyebrow: "Erro 404",
  title: "Página não encontrada",
  description:
    "O link que seguiste não existe ou foi movido. Volta à página inicial para continuar.",
  cta: { label: "Voltar à página inicial", href: "/" },
} as const;
