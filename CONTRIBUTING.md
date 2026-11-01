# Como contribuir

## O fluxo, do início ao fim

```
Issue → branch → commits → Pull Request → CI + preview → revisão → merge → deploy automático
```

1. **Escolhe uma issue** na coluna **Pronto** do quadro do projeto. Atribui-a a ti e passa-a para **Em curso**.
   Só uma issue de cada vez.
2. **Cria um branch** a partir da `main` atualizada:
   ```bash
   git switch main && git pull
   git switch -c feat/web-03-areas-atuacao
   ```
3. **Trabalha e faz commits pequenos** (ver convenções abaixo).
4. **Antes do PR**, corre `npm run check`. Se falhar aqui, também vai falhar na CI.
5. **Abre o Pull Request** e preenche o template, incluindo os screenshots. Escreve `Closes #<n.º>` para a issue fechar sozinha.
6. **Aguarda a CI e o preview.** A Vercel publica um link de preview no PR.
7. **Revisão:** pelo menos 1 aprovação de um tech lead. Responde aos comentários com novos commits no mesmo branch.
8. **Merge:** quem revê faz _Squash and merge_. A `main` é publicada automaticamente.

> 🆘 Bloqueado há mais de 30 minutos? Pergunta no canal ou ao teu par. Pedir ajuda cedo é sinal de profissionalismo, não de fraqueza.

## Convenções

### Branches

`<tipo>/web-<n>-<descricao-curta>`, por exemplo `feat/web-06-departamentos`, `fix/web-07-menu-mobile`.

### Commits — [Conventional Commits](https://www.conventionalcommits.org/pt-br/)

```
feat: adiciona secção Áreas de Atuação
fix: corrige contraste do botão secundário
style: formata Hero.tsx
docs: atualiza README
chore: atualiza dependências
```

### Código

- **Texto nunca no JSX.** Todo o texto vive em `src/content/`. O componente recebe ou importa os dados.
- **Cores só com tokens:** `bg-jefai`, `text-jefai-light`, `border-jefai-ice-border`… Nada de `bg-[#05324B]`.
- **Reutiliza antes de criar.** Vê primeiro `src/components/ui/`. Se repetires o mesmo padrão em 2 sítios, sugere no PR que passe para `ui/`.
- **Server Components por defeito.** Só usar `"use client"` quando há estado ou eventos (tabs, menu, formulário), e só no componente mais pequeno possível.
- **Um `<h1>` por página** (está no Hero). As secções usam `<h2>`; os cards, `<h3>`.
- **Acessibilidade mínima:** `alt` em imagens, `aria-label` em botões só com ícone, foco visível, contraste AA.
- **Mobile-first:** escreve primeiro as classes para mobile e acrescenta `sm:`, `md:` e `lg:` para ecrãs maiores.

## Definition of Done

Uma issue só passa para **Feito** quando:

- [ ] Cumpre todos os critérios de aceitação
- [ ] A CI passa (lint, tipos, formatação, build)
- [ ] O preview foi verificado em mobile e desktop
- [ ] Teve pelo menos 1 aprovação e foi feito o merge na `main`

## Labels

| Label              | Significado                                            |
| ------------------ | ------------------------------------------------------ |
| `good-first-issue` | Ideal para começar. Segue um padrão já existente       |
| `intermediate`     | Tem lógica ou estado. Fazer em par com um sénior       |
| `senior`           | Infraestrutura, integração ou decisões técnicas        |
| `content`          | Textos, links, dados — não exige programar             |
| `design`           | Assets, ajustes visuais, revisão de UI                 |
| `ops`              | Domínio, alojamento, contas                            |
| `qa`               | Testes, auditorias, revisão final                      |
| `v1.1`             | Depois do lançamento — não mexer até lá                |
| `blocked`          | À espera de algo externo (indicar o quê no comentário) |
