import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { footer } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-jefai-dark py-12 text-white">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <Logo variant="white" />
        <div className="text-center text-xs text-slate-300 sm:text-right">
          <p>{footer.copyright}</p>
          <p className="mt-1 text-slate-400">{footer.institution}</p>
          {/* WEB-10: link para /privacidade entra aqui */}
        </div>
      </Container>
    </footer>
  );
}
