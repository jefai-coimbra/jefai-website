# ADR 0001 — Stack e alojamento do website

- **Estado:** Aceite (revisto a 2026-11-01: alojamento passou de Cloudflare Pages para Vercel)
- **Data:** 2026-11-02
- **Decisores:** Coordenação de Projetos + tech leads

## Contexto

- Site institucional de uma página principal, com dois formulários: **contacto** e **candidatura** (esta com upload de CV, ver ADR 0002).
- A equipa é mista: alguns seniores (mestrado) e vários juniores, alguns sem experiência em web.
- Prioridade: **lançar depressa**, com custo zero ou quase, e uma base que os seniores consigam rever com confiança.

## Decisão

| Área          | Escolha                                                                                                  |
| ------------- | -------------------------------------------------------------------------------------------------------- |
| Framework     | **Next.js (App Router) + TypeScript**. Páginas geradas estaticamente; formulários com **Server Actions** |
| Estilos       | **Tailwind CSS v4**, com os design tokens em `globals.css`                                               |
| Validação     | **Zod**, com schemas partilhados entre cliente e servidor (`src/lib/validation/`)                        |
| Fontes        | Self-hosted via `@fontsource-variable`                                                                   |
| Conteúdo      | Ficheiros TypeScript em `src/content/` (sem CMS)                                                         |
| Alojamento    | **Vercel**, com preview automático por PR                                                                |
| Dados e email | Neon Postgres, Vercel Blob (privado) e Resend — ver ADR 0002                                             |
| Qualidade     | ESLint + Prettier + `tsc` na CI (GitHub Actions)                                                         |

## Alternativas consideradas

- **Cloudflare Pages com export estático:** funcionava sem custos para o site, mas a candidatura no próprio site precisa de servidor. Com o Next.js, a Vercel é a plataforma com menos fricção e o coordenador já a conhece.
- **Astro:** muito adequado a sites de conteúdo, mas quem revê o código domina React/Next.
- **CMS headless:** para cerca de 6 secções que mudam pouco, os ficheiros TS chegam.

## Riscos e mitigação

⚠️ **Termos do plano Hobby (gratuito) da Vercel.** O plano Hobby está limitado a uso pessoal e não comercial. Um site que promove serviços pagos de uma associação pode ser considerado uso comercial.

- **Decisão consciente da coordenação:** começar no Hobby.
- **Mitigação:** (1) pedir esclarecimento ao suporte da Vercel, já que a JEFAI é uma associação juvenil sem fins lucrativos e de voluntariado; (2) passar ao plano Pro quando a JEFAI faturar o primeiro projeto ou se a Vercel o exigir; (3) o código não depende de nada exclusivo da Vercel, por isso migrar continua a ser possível.

⚠️ **Repositório numa organização GitHub.** O plano Hobby só faz deploy a partir de repositórios **públicos** de organizações. O repositório tem de continuar público.

⚠️ **Limite de 4,5 MB por pedido** nas funções da Vercel. Condiciona o upload do CV (ver ADR 0002).

## Consequências

✅ Previews por PR, deploy automático e Server Actions sem configuração.
✅ As páginas continuam estáticas (rápidas e baratas); só os formulários executam código no servidor.
⚠️ Para alterar textos é preciso fazer um PR. O responsável de conteúdo pode editar diretamente no GitHub pelo browser.
🔁 **Reavaliar** o plano da Vercel quando houver o primeiro projeto pago.
