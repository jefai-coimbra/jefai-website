import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { contact } from "@/content/home";
import { contactInfo, socialLinks } from "@/content/site";
import { ContactForm } from "./ContactForm";

/**
 * Contacto: painel institucional à esquerda + formulário à direita — WEB-05.
 * Conteúdo: `contact` em src/content/home.ts e `contactInfo`/`socialLinks` em src/content/site.ts.
 * O formulário (<ContactForm />) é uma issue separada (WEB-08) — aqui só se encaixa no layout.
 */
export function Contact() {
  const { id, eyebrow, title, description, labels } = contact;

  // Só mostramos as redes sociais que já têm link real (WEB-16).
  const visibleSocialLinks = socialLinks.filter((link) => link.href);

  return (
    <Section id={id} tone="ice" border="top">
      <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white lg:grid-cols-12">
        {/* Painel institucional: primeiro no DOM → fica por cima do formulário em mobile. */}
        <div className="flex flex-col bg-jefai p-8 text-white lg:col-span-5 lg:p-10">
          <Eyebrow tone="onDark">{eyebrow}</Eyebrow>
          <h2 className="mt-2 text-3xl font-bold">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-sky-100">{description}</p>

          <address className="mt-10 space-y-6 text-sm not-italic">
            <div>
              <Eyebrow tone="onDark" className="block">
                {labels.address}
              </Eyebrow>
              <p className="mt-1">
                {contactInfo.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>

            <div>
              <Eyebrow tone="onDark" className="block">
                {labels.email}
              </Eyebrow>
              <a
                href={`mailto:${contactInfo.email}`}
                className="mt-1 inline-block underline-offset-4 hover:underline"
              >
                {contactInfo.email}
              </a>
            </div>

            <div>
              <Eyebrow tone="onDark" className="block">
                {labels.legal}
              </Eyebrow>
              <p className="mt-1">{contactInfo.legalName}</p>
              <p className="text-sky-100">
                {labels.nipc} {contactInfo.nipc}
              </p>
            </div>
          </address>

          {visibleSocialLinks.length > 0 && (
            <div className="mt-auto pt-10">
              <Eyebrow tone="onDark" className="block">
                {labels.social}
              </Eyebrow>
              <ul className="mt-3 flex flex-wrap gap-4 text-sm">
                {visibleSocialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 hover:underline"
                    >
                      {link.label}
                      <span className="sr-only"> {labels.newTab}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="p-8 lg:col-span-7 lg:p-10">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
