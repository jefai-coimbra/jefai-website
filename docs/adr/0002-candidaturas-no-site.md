# ADR 0002 — Candidaturas no próprio site

- **Estado:** Aceite
- **Data:** 2026-11-02
- **Decisores:** Coordenação de Projetos + tech leads (+ RH para o processo)

## Contexto

As candidaturas passam a ser feitas no site (`/candidatura`) e não num formulário externo. Cada candidatura tem:
dados pessoais e académicos, até 4 preferências de departamento por ordem, carta de motivação e **CV**.

Isto obriga a ter **servidor, base de dados, armazenamento de ficheiros e email**, e implica tratar **dados pessoais** (RGPD).

## Decisão

```
Browser ──(FormData)──► Server Action submitApplication (Vercel)
                          │ 1. recrutamento aberto? honeypot? validação Zod
                          ├─► 2. CV (PDF) ──► Vercel Blob (store PRIVADA)
                          ├─► 3. dados + pathname do CV ──► Neon Postgres
                          └─► 4. emails ──► Resend: notificação RH + confirmação ao candidato
```

| Peça          | Escolha                                                       | Porquê                                                                                                                |
| ------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Receção       | **Server Action** (`src/actions/application.ts`)              | Sem API pública para manter; validação no servidor com o mesmo schema do cliente                                      |
| Validação     | **Zod** (`src/lib/validation/application.ts`)                 | Um só contrato para o formulário e para o servidor                                                                    |
| Base de dados | **Neon Postgres** (via Vercel Marketplace), região UE         | Plano gratuito; o processamento suspende quando não há uso e retoma sozinho no pedido seguinte, sem reativação manual |
| Acesso à BD   | `@neondatabase/serverless` com SQL simples, **sem ORM** na v1 | Menos uma ferramenta para aprender; é uma tabela só                                                                   |
| CV            | **Vercel Blob, store privada**                                | Os CVs nunca ficam públicos; integrado na Vercel                                                                      |
| Email         | **Resend**                                                    | API simples; o plano gratuito chega para o volume da JEFAI                                                            |

### Porque não Supabase

Seria a opção mais confortável para o RH (tem um editor de tabelas), mas no plano gratuito **o projeto é pausado ao fim de 7 dias sem atividade** e só volta com reativação manual. Num recrutamento sazonal isso significaria perder candidaturas sem ninguém dar por isso.

### Limites que condicionam o desenho

- **Vercel: 4,5 MB por pedido**, incluindo Server Actions; não é configurável. Por isso:
  - o CV só pode ser **PDF até 2 MB**;
  - a carta de motivação é **texto** (300 a 3000 caracteres) e não um ficheiro;
  - `serverActions.bodySizeLimit = "3mb"` em `next.config.ts` (o Next aceita 1 MB por defeito).
  - Se um dia forem precisos ficheiros maiores: upload direto do browser para o Blob (`@vercel/blob/client`).
- **Resend, plano gratuito:** 100 emails/dia. Cada candidatura gasta 2 (RH + candidato), o que dá cerca de 50 candidaturas por dia. Chega.
- **Resend sem domínio verificado:** só entrega emails ao endereço da conta Resend. Por isso a conta Resend é criada com o email da JEFAI: **a notificação para o RH funciona desde o primeiro dia**, e a confirmação ao candidato só fica ativa depois do domínio (WEB-17).

## Modelo de dados (v1)

```sql
create table applications (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz not null default now(),
  edition        text not null,                 -- recruitment.edition, ex.: '2026-27-1'
  full_name      text not null,
  email          text not null,
  phone          text,
  course         text not null,
  degree         text not null check (degree in ('licenciatura','mestrado','mestrado-integrado')),
  year           smallint not null check (year between 1 and 5),
  departments    text[] not null,               -- por ordem de preferência
  motivation     text not null,
  linkedin_url   text,
  cv_pathname    text not null,                 -- caminho no Vercel Blob (privado)
  consent_at     timestamptz not null,
  status         text not null default 'nova'
                 check (status in ('nova','em-analise','entrevista','aceite','recusada'))
);
create index on applications (edition, created_at);
```

## RGPD (mínimos obrigatórios — WEB-27)

- Consentimento explícito (checkbox) com link para a Política de Privacidade; guardar `consent_at`.
- **Minimização:** só pedimos o necessário. Não pedimos número de estudante, morada nem data de nascimento.
- **Prazo de conservação** definido pela Direção (proposta: até 6 meses após o fim da edição para quem não entra) e um script para apagar os dados expirados (BD + CVs).
- Logs sem dados pessoais. Chaves só no servidor (`import "server-only"`).
- Neon na região UE (Frankfurt) e, na Vercel, região das funções na UE.
- Acesso aos dados restrito a RH + 1 tech lead.

## Como o RH acede às candidaturas (v1)

1. **Email por candidatura** com um resumo (nome, curso, ano, departamentos). O CV **não** segue em anexo, para não espalhar cópias por caixas de correio.
2. **Exportação CSV + download dos CVs** através de um script corrido por um tech lead (WEB-28).
3. Área de administração no site com autenticação → **v1.1** (WEB-29).

## Consequências

✅ Candidatos não saem do site; dados estruturados e exportáveis; CVs privados.
⚠️ Mais peças (BD, Blob, email, RGPD), cerca de 1 semana de trabalho de seniores. **Não deve bloquear o lançamento do site:** se não estiver pronto, o site sai com `recruitment.isOpen = false`.
🔁 Reavaliar o acesso do RH (área de admin) quando houver mais de 30 candidaturas por edição.
