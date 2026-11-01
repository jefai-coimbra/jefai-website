# Arquitetura

## Em 30 segundos

O site é uma aplicação **Next.js alojada na Vercel**. As páginas são geradas como **HTML estático** no build. Só **duas coisas correm no servidor**: os formulários de **contacto** e de **candidatura**, implementados como **Server Actions**. Os dados das candidaturas ficam no **Neon Postgres**, os CVs no **Vercel Blob** (privado), e os emails saem pelo **Resend**.

```mermaid
flowchart LR
    subgraph Repo["📦 Repositório (GitHub)"]
        C["src/content/<br/><i>textos e dados</i>"]
        UI["components/ui/<br/><i>peças reutilizáveis</i>"]
        S["components/sections/<br/><i>1 ficheiro por secção</i>"]
        P["app/<br/><i>páginas: / e /candidatura</i>"]
        V["lib/validation/<br/><i>schemas Zod partilhados</i>"]
        A["actions/<br/><i>Server Actions</i>"]
        C --> S
        UI --> S
        S --> P
        V --> A
        V --> P
    end

    Repo -- "push → build" --> VER["▲ Vercel"]

    subgraph VER["▲ Vercel"]
        HTML["Páginas estáticas<br/>(CDN)"]
        FN["Server Actions<br/>contacto · candidatura"]
    end

    U["👤 Visitante"] --> HTML
    U -- "submete formulário" --> FN
    FN --> DB[("Neon Postgres<br/>candidaturas")]
    FN --> BL[("Vercel Blob<br/>CVs — privado")]
    FN --> EM["Resend<br/>emails"]
    EM --> RH["📥 RH / JEFAI"]

    U -. "v1.1: chat" .-> CB["API do chatbot<br/>(FastAPI — projeto 2)"]
    style CB stroke-dasharray: 5 5
```

## Camadas do código

| Camada          | Pasta                 | Responsabilidade                                                                       | Quem mexe                     |
| --------------- | --------------------- | -------------------------------------------------------------------------------------- | ----------------------------- |
| **Conteúdo**    | `src/content/`        | Todo o texto, listas, links e mensagens dos formulários                                | Qualquer pessoa               |
| **Componentes** | `src/components/`     | Apresentação. `ui/` = peças genéricas; `sections/` = uma secção da página por ficheiro | Equipa de desenvolvimento     |
| **Páginas**     | `src/app/`            | Rotas (`/`, `/candidatura`, `/privacidade`), layout comum, metadata, tokens            | Tech leads + quem tem a issue |
| **Contratos**   | `src/lib/validation/` | Schemas Zod: o que um formulário pode enviar. Usados **no cliente e no servidor**      | Tech leads                    |
| **Ações**       | `src/actions/`        | Server Actions: recebem o formulário, validam, chamam `server/`                        | Seniores                      |
| **Integrações** | `src/server/`         | Clientes de Neon, Blob e Resend. Só servidor (`import "server-only"`)                  | Seniores                      |

**Regras de dependência**

- `app → sections → ui`; `sections → content`.
- `ui/` nunca importa de `content/`, `sections/` nem `actions/`.
- `server/` só é importado por `actions/`, nunca por componentes. O `import "server-only"` garante-o: se for importado no cliente, a build falha.

### Porque é que isto importa

- **Trabalho em paralelo:** cada secção é um ficheiro. E o formulário de candidatura (UI) e o backend (BD, Blob, email) avançam ao mesmo tempo, porque o **contrato** (`lib/validation/application.ts` + `lib/forms.ts`) já está definido.
- **Separação conteúdo/código:** mudar textos não exige perceber React.
- **Segurança por defeito:** a validação corre sempre no servidor, e as chaves e os dados pessoais nunca chegam ao browser.

## Server vs Client Components

Por defeito, **Server Components**: são renderizados no build e não enviam JavaScript para o browser. Só levam `"use client"` os componentes com estado ou eventos:

| Componente                | Porquê                                                    | Issue  |
| ------------------------- | --------------------------------------------------------- | ------ |
| Tabs dos departamentos    | Tab selecionada                                           | WEB-06 |
| Menu mobile               | Aberto/fechado                                            | WEB-07 |
| Formulário de contacto    | `useActionState`, erros por campo                         | WEB-08 |
| Formulário de candidatura | `useActionState`, erros por campo, contador de caracteres | WEB-24 |

## Fluxo de um formulário

```mermaid
sequenceDiagram
    participant B as Browser (Client Component)
    participant A as Server Action
    participant S as server/ (Neon · Blob · Resend)
    B->>B: validação Zod (feedback imediato)
    B->>A: FormData
    A->>A: honeypot + validação Zod (outra vez — nunca confiar no browser)
    alt inválido
        A-->>B: { status: "error", fieldErrors }
    else válido
        A->>S: guardar / enviar
        A-->>B: { status: "success", message }
    end
```

O contrato de resposta é sempre o tipo `FormState` (`src/lib/forms.ts`).

## Fluxo de trabalho → produção

```mermaid
flowchart LR
    I["Issue"] --> B["Branch<br/>feat/web-03-…"] --> PR["Pull Request"]
    PR --> CI["CI: lint · tipos ·<br/>formatação · build"]
    PR --> PV["Preview<br/>na Vercel"]
    CI --> R["Revisão<br/>(1 tech lead)"]
    PV --> R
    R --> M["Squash merge<br/>na main"] --> D["Deploy automático<br/>em produção"]
```

> Os previews usam variáveis de ambiente **de Preview**, ligadas a uma base de dados e a uma store de Blob **de teste**, nunca às de produção. Assim, testar um PR não mistura dados falsos com candidaturas reais.

## Ligação ao projeto 2 (chatbot)

O chatbot é um **serviço separado** (Python/FastAPI, repositório próprio). No site entra apenas como widget (Client Component) que comunica com a API do chatbot.

## Decisões

- [ADR 0001 — Stack e alojamento](adr/0001-stack-e-alojamento.md)
- [ADR 0002 — Candidaturas no próprio site](adr/0002-candidaturas-no-site.md)
