import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { navLinks, primaryCta, site } from "@/content/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" aria-label={`${site.name} — página inicial`} className="flex items-center">
          <Logo />
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-jefai">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
          {/* WEB-07: botão + menu mobile (md:hidden) entra aqui */}
        </div>
      </Container>
    </header>
  );
}
