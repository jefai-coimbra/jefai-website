# Backlog inicial — Website v1

Cada ficheiro `WEB-XX.md` é uma issue. O script `scripts/github/bootstrap.mjs` cria-as no GitHub (ver `docs/SETUP-GITHUB.md`, passo 6).

## v1.0 — Lançamento

| ID     | Issue                                   | Label                        | Tam. | Pode começar já?               |
| ------ | --------------------------------------- | ---------------------------- | ---- | ------------------------------ |
| WEB-01 | Secção Hero                             | `good-first-issue`           | M    | ✅                             |
| WEB-02 | Barra de destaques institucionais       | `good-first-issue`           | S    | ✅                             |
| WEB-03 | Secção Áreas de Atuação                 | `good-first-issue`           | S    | ✅                             |
| WEB-04 | Secção Recrutamento                     | `good-first-issue`           | M    | ✅                             |
| WEB-05 | Contacto — painel e layout              | `good-first-issue`           | M    | ✅                             |
| WEB-06 | Departamentos com tabs acessíveis       | `intermediate`               | M    | ✅ (em par)                    |
| WEB-07 | Navbar — menu mobile                    | `intermediate`               | M    | ✅ (em par)                    |
| WEB-08 | Formulário de contacto                  | `senior`                     | M    | ✅                             |
| WEB-09 | Página 404                              | `good-first-issue`           | S    | ✅                             |
| WEB-10 | Política de Privacidade                 | `good-first-issue` `content` | S    | ✅ (texto depende da Direção)  |
| WEB-11 | SEO, Open Graph, sitemap, favicon       | `senior`                     | S    | ✅ (assets provisórios)        |
| WEB-12 | Logótipos e assets oficiais             | `design`                     | S    | ✅                             |
| WEB-13 | Revisão visual responsiva               | `design` `qa`                | S    | ⏳ depois de WEB-01…08         |
| WEB-14 | Auditoria de qualidade final            | `senior` `qa`                | S    | ⏳ último                      |
| WEB-15 | Textos finais                           | `content`                    | M    | ✅ **urgente**                 |
| WEB-16 | Links e dados reais                     | `content`                    | S    | ✅                             |
| WEB-17 | Domínio e DNS                           | `ops`                        | S    | ✅ **urgente**                 |
| WEB-18 | Alojamento, previews e proteção da main | `ops` `senior`               | S    | ✅ coordenação, antes de todos |

**Tamanhos:** S ≈ até 1 dia de trabalho · M ≈ 2–3 dias · L ≈ 1 semana+

## v1.1 — Depois do lançamento (não mexer até lá)

WEB-19 Versão EN · WEB-20 Sobre Nós / Equipa · WEB-21 Portfólio · WEB-22 Widget do chatbot · WEB-23 Analytics · WEB-29 Área de admin para o RH · WEB-30 Alerta do próximo recrutamento

## Ordem sugerida

```
Dia 0      WEB-18 (coordenação)  ─┐
                                  ├─► todos podem começar
Semana 1   WEB-01…12 em paralelo ─┤   WEB-15/16/17 correm em paralelo (conteúdo/ops)
           seniores: WEB-08 → WEB-25 ┤   júnior + sénior: WEB-24
Semana 2   fecho de PRs + WEB-13 ─┤
           WEB-14 → 🚀 lançamento ┘
```
