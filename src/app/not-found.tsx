/**
 * Página 404 — WEB-09.
 * Mostrada automaticamente para qualquer URL que não exista.
 * Navbar e Footer vêm do layout.tsx. Estilo baseado no Hero do mockup (opção 2).
 */

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { notFound } from "@/content/pages";

export default function NotFound() {
  const { eyebrow, title, description, cta } = notFound;

  return (
    <Section className="flex min-h-svh items-center bg-subtle-grid">
      <div className="mx-auto max-w-xl text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">{description}</p>
        <ButtonLink href={cta.href} size="lg" className="mt-8">
          {cta.label}
        </ButtonLink>
      </div>
    </Section>
  );
}
