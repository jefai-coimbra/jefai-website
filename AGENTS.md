<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Regras do projeto JEFAI (para assistentes de IA e humanos)

Se usares um assistente de IA (Copilot, Claude, Cursor…), ele deve seguir estas regras. Tu és responsável por todo o código que submetes, incluindo o que foi gerado por IA.

- Alojado na **Vercel**. Páginas estáticas por defeito; só os formulários usam **Server Actions** (`src/actions/`).
- **Validação:** sempre com os schemas Zod de `src/lib/validation/`, no cliente E no servidor. As actions devolvem `FormState` (`src/lib/forms.ts`).
- **Segredos e integrações** (Neon, Blob, Resend) só em `src/server/` com `import "server-only"`. Nunca usar `NEXT_PUBLIC_` para chaves.
- **Dados pessoais:** nunca em `console.log`, nunca em URLs, CVs só em Blob **privado**.
- Upload: limite de 4,5 MB por pedido na Vercel → CV até 2 MB (ver ADR 0002).
- **Texto** vive em `src/content/`; componentes não têm texto escrito diretamente no JSX.
- **Cores e fontes** só através dos tokens de `src/app/globals.css` (`bg-jefai`, `font-display`…).
- Reutilizar `src/components/ui/` antes de criar componentes novos.
- Server Components por defeito; `"use client"` só no componente mínimo que precisa de estado.
- Seguir o padrão de `src/components/sections/HowWeWork.tsx`.
- Antes de terminar: `npm run check`.
