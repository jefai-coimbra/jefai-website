import { Container } from "@/components/ui/Container";
import { SectionPlaceholder } from "@/components/ui/SectionPlaceholder";
import { HighlightsBar } from "./HighlightsBar";

/**
 * Hero da página inicial — WEB-01.
 * Conteúdo: `hero` em src/content/home.ts. A barra de destaques (WEB-02) já está encaixada no fundo.
 */
export function Hero() {
  return (
    <section className="border-b border-slate-200 bg-white bg-subtle-grid py-16 lg:py-24">
      <Container>
        <SectionPlaceholder issue="WEB-01" title="Hero (título, descrição e botões)" />
        <HighlightsBar />
      </Container>
    </section>
  );
}
