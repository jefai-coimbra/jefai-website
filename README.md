# JEFAI — Website

Website institucional da **JEFAI — Junior Enterprise for Artificial Intelligence** (Júnior Iniciativa da Universidade de Coimbra).

Site de uma página com formulário de contacto e candidaturas online, construído com Next.js e publicado na Vercel.

## Arranque rápido

Requisitos: **Node 22+** e **Git**.

```bash
git clone https://github.com/<organizacao>/jefai-website.git
cd jefai-website
npm install
npm run dev
```

Abrir http://localhost:3000. As alterações aparecem automaticamente ao gravar.

Para o site em si não é preciso configurar nada. Só quem trabalha nos formulários (WEB-08, WEB-25/26) precisa de um `.env.local`: ver `.env.example`.

## Scripts

| Comando             | O que faz                                                         |
| ------------------- | ----------------------------------------------------------------- |
| `npm run dev`       | Servidor de desenvolvimento                                       |
| `npm run build`     | Build de produção                                                 |
| `npm run start`     | Serve a build de produção localmente (depois do build)            |
| `npm run lint`      | ESLint                                                            |
| `npm run typecheck` | Verificação de tipos TypeScript                                   |
| `npm run format`    | Formata o código com Prettier (também ordena as classes Tailwind) |
| `npm run check`     | **Corre tudo o que a CI corre.** Usar antes de abrir um PR        |

## Onde está cada coisa

```
src/
├── app/
│   ├── layout.tsx          # Estrutura comum: <html>, Navbar, Footer, fontes, metadata
│   ├── page.tsx            # Página inicial: só junta as secções por ordem
│   ├── candidatura/        # Página /candidatura
│   └── globals.css         # Design tokens (cores, fontes) — fonte única de verdade
├── components/
│   ├── ui/                 # Peças reutilizáveis: Section, SectionHeader, Card, ButtonLink…
│   ├── layout/             # Navbar, Footer
│   ├── brand/              # Logo
│   └── sections/           # Uma secção da página por ficheiro (Hero, HowWeWork…)
├── content/                # TODO o texto do site. Editável sem tocar em componentes
├── actions/                # Server Actions dos formulários (correm no servidor)
├── server/                 # Integrações: Neon, Blob, Resend — só servidor (criado em WEB-25/26)
└── lib/
    ├── validation/         # Schemas Zod: contrato de cada formulário (cliente + servidor)
    ├── forms.ts            # Tipo FormState devolvido pelas Server Actions
    └── cn.ts
docs/
├── ARCHITECTURE.md         # Como o sistema está organizado e porquê
├── adr/                    # Registo de decisões técnicas
├── backlog/                # Issues iniciais (WEB-01…)
└── SETUP-GITHUB.md         # Configuração do repositório (coordenação)
```

⭐ **Componente de referência:** [`src/components/sections/HowWeWork.tsx`](src/components/sections/HowWeWork.tsx). Antes de começares uma secção, lê este ficheiro.

## Como contribuir

Ler o [CONTRIBUTING.md](CONTRIBUTING.md): fluxo de trabalho, convenções e Definition of Done.

## Documentação

- [Arquitetura](docs/ARCHITECTURE.md)
- [ADR 0001 — Stack e alojamento](docs/adr/0001-stack-e-alojamento.md)
- [ADR 0002 — Candidaturas no site](docs/adr/0002-candidaturas-no-site.md)
- [Backlog inicial](docs/backlog/README.md)
