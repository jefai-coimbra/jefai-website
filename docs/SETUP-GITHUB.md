# Configuração do repositório (coordenação)

Feito uma vez, pelo coordenador. Demora cerca de 45 minutos, sem contar com os serviços de dados.

## 1. Organização no GitHub

Criar uma **organização** (plano Free) em vez de usar uma conta pessoal, por exemplo `jefai-coimbra`. Assim o código continua a pertencer à JEFAI quando a coordenação mudar.

- github.com → **+** → _New organization_ → **Free**
- Adicionar pelo menos **2 owners** (tu e outro sénior), para nunca ficarem sem acesso.

## 2. Criar o repositório e enviar o código

**Repositório público.** Há duas razões. No plano Free para organizações, as regras de proteção de branches só funcionam em repositórios públicos. E o código público também conta como portfólio da JEFAI.

```bash
cd jefai-website
npm install && npm run check        # confirmar que tudo passa localmente
git init
git add .
git commit -m "chore: scaffold inicial do website"
git branch -M main

# Opção A — com GitHub CLI (gh auth login primeiro)
gh repo create jefai-coimbra/jefai-website --public --source=. --push

# Opção B — criar o repo vazio no site e depois:
git remote add origin https://github.com/jefai-coimbra/jefai-website.git
git push -u origin main
```

## 3. Definições do repositório

**Settings → General → Pull Requests**

- ✅ Allow squash merging (desligar _merge commits_ e _rebase merging_). Assim cada PR fica 1 commit limpo na `main`.
- ✅ Automatically delete head branches

## 4. Equipas e permissões

**Organização → Teams**

| Equipa       | Membros                  | Permissão no repo |
| ------------ | ------------------------ | ----------------- |
| `tech-leads` | Tu + seniores (mestrado) | **Maintain**      |
| `developers` | Juniores                 | **Write**         |

Depois, editar `.github/CODEOWNERS`: trocar `@ORGANIZACAO/tech-leads` por `@jefai-coimbra/tech-leads` e `@COORDENADOR` pelo teu utilizador.

## 5. Proteger a `main` (Ruleset)

**Settings → Rules → Rulesets → New branch ruleset**

- Nome: `main` · Enforcement: **Active** · Target: _Default branch_
- ✅ Restrict deletions
- ✅ Block force pushes
- ✅ Require a pull request before merging
  - Required approvals: **1**
  - ✅ Require review from Code Owners
  - ✅ Require conversation resolution before merging
- ✅ Require status checks to pass → adicionar **`Lint, tipos, formatação e build`**
  (o check só aparece na lista depois de a CI correr uma vez: abre primeiro um PR de teste)
- Bypass list: só a equipa `tech-leads`, e apenas para emergências.

## 6. Labels, milestone e issues iniciais

```bash
gh auth login                       # uma vez
node scripts/github/bootstrap.mjs --repo jefai-coimbra/jefai-website --dry-run   # ver o que vai criar
node scripts/github/bootstrap.mjs --repo jefai-coimbra/jefai-website --due 2026-11-22
```

O script:

- cria/atualiza as labels (cores e descrições);
- cria as milestones **v1.0 — Lançamento** (com o prazo `--due`) e **Candidaturas online**;
- cria uma issue por cada ficheiro `docs/backlog/WEB-*.md`. Ignora as que já existem, por isso pode correr-se mais do que uma vez.

## 7. Quadro do projeto (GitHub Projects)

**Organização → Projects → New project → Board**, com o nome `Website v1`.

1. Colunas: `Backlog` · `Pronto` · `Em curso` · `Em revisão` · `Feito`
2. _Add items_ → selecionar todas as issues do repo.
3. Arrastar para **Pronto** as issues que podem começar já (ver `docs/backlog/README.md`).
4. **Workflows** do projeto (ícone ⋯ → Workflows):
   - _Item closed_ → `Feito`
   - _Pull request merged_ → `Feito`
   - _Auto-add to project_ → filtro `repo:jefai-coimbra/jefai-website is:issue`

## 8. Alojamento: Vercel

1. Criar a conta Vercel (plano **Hobby**) com o email institucional da JEFAI, e não com uma conta pessoal. Ver os riscos do plano no ADR 0001.
2. **Add New → Project → Import Git Repository** → autorizar a organização GitHub → escolher `jefai-website`.
   - O plano Hobby só faz deploy a partir de repositórios **públicos** de organizações.
3. As predefinições detetadas para Next.js estão corretas: não mudar o build command nem a pasta de output.
4. **Settings → Functions → Function Region**: escolher uma região na UE (ex.: Frankfurt), por causa do RGPD e para ficar perto da base de dados.
5. **Settings → Git**: confirmar que os _Preview Deployments_ estão ativos. Cada PR passa a ter um link de preview comentado pelo bot da Vercel.

### Serviços de dados (só quando as issues WEB-25/26 arrancarem)

| Serviço           | Onde                                 | Notas                                                                                                                                                                                                       |
| ----------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Neon Postgres** | Vercel → **Storage → Create → Neon** | Região **UE (Frankfurt)**. Criar 2 branches: `main` (produção) e `preview` (testes). A Vercel injeta `DATABASE_URL`                                                                                         |
| **Vercel Blob**   | Vercel → **Storage → Create → Blob** | **Store privada**. Uma para produção, outra para preview. A Vercel injeta `BLOB_READ_WRITE_TOKEN`                                                                                                           |
| **Resend**        | resend.com                           | Criar a conta **com o email da JEFAI** (até o domínio estar verificado, só entrega emails a esse endereço). Criar a API key e definir `RESEND_API_KEY`, `EMAIL_FROM`, `CONTACT_INBOX` e `RECRUITMENT_INBOX` |

Em **Settings → Environment Variables**, cada variável define-se separadamente para _Production_ e para _Preview_: os previews **nunca** devem usar a base de dados nem a store de produção.

Para desenvolver localmente com as mesmas variáveis: `npx vercel link` e depois `npx vercel env pull .env.local` (só tech leads).

> Se a Vercel recusar deploys de commits feitos por outros membros, confirma que o repositório é público. Em último caso, faz o deploy por GitHub Actions com a Vercel CLI.

## 9. Testar o fluxo completo (antes da 1.ª reunião técnica)

Abrir um PR de teste (ex.: corrigir uma vírgula no README) e confirmar:

- [ ] A CI corre e fica verde
- [ ] A Vercel publica um preview no PR
- [ ] Não é possível fazer merge sem 1 aprovação
- [ ] Depois do merge, a produção atualiza sozinha

Este PR de teste é também a melhor demonstração para os juniores: mostra-o ao vivo na reunião.
