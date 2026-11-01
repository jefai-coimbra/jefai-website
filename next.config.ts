import type { NextConfig } from "next";

/**
 * Alojado na Vercel (ver docs/adr/0001-stack-e-alojamento.md).
 * As páginas são geradas estaticamente sempre que possível; só os formulários
 * (contacto e candidatura) correm no servidor, através de Server Actions.
 */
const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // Candidatura: CV em PDF até 2 MB + restantes campos + overhead do multipart.
      // Nunca subir acima de ~4 MB: a Vercel rejeita pedidos acima de 4,5 MB (ADR 0002).
      bodySizeLimit: "3mb",
    },
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
