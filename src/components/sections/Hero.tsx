import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { hero } from "@/content/home";
import { HighlightsBar } from "./HighlightsBar";

/**
 * Hero da página inicial — WEB-01.
 * Conteúdo: `hero` em src/content/home.ts. A barra de destaques (WEB-02) fica encaixada no fundo.
 * Tem o único <h1> da página.
 */
export function Hero() {
  const { badge, titleStart, titleHighlight, description, primaryCta, secondaryCta } = hero;

  return (
    <section className="border-b border-slate-200 bg-white bg-subtle-grid py-16 lg:py-24">
      <Container>
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded bg-jefai px-3 py-1 font-mono text-xs tracking-wider text-white uppercase">
            {badge}
          </span>

          <h1 className="mt-6 text-4xl leading-[1.1] font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {titleStart}{" "}
            <span className="text-jefai underline decoration-jefai-ice-border decoration-4 underline-offset-8">
              {titleHighlight}
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={primaryCta.href} variant="primary" size="lg">
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href={secondaryCta.href} variant="secondary" size="lg">
              {secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <HighlightsBar />
      </Container>
    </section>
  );
}
