type SectionPlaceholderProps = {
  /** ID da issue, ex.: "WEB-03". */
  issue: string;
  title: string;
};

/**
 * 🚧 Marcador temporário para secções ainda por implementar.
 * Quem pegar na issue apaga a utilização deste componente.
 * Quando não houver nenhuma utilização, apagar este ficheiro (WEB-14).
 */
export function SectionPlaceholder({ issue, title }: SectionPlaceholderProps) {
  return (
    <div className="rounded-2xl border-2 border-dashed border-jefai-ice-border bg-white/60 p-10 text-center">
      <p className="font-mono text-xs font-semibold tracking-widest text-jefai-light uppercase">
        🚧 Por implementar · {issue}
      </p>
      <p className="mt-2 font-display text-xl font-bold text-slate-900">{title}</p>
      <p className="mt-1 text-sm text-slate-500">
        Ver docs/backlog/{issue}.md para os critérios de aceitação.
      </p>
    </div>
  );
}
