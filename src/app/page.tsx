import { Contact } from "@/components/sections/Contact";
import { Departments } from "@/components/sections/Departments";
import { Hero } from "@/components/sections/Hero";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Recruitment } from "@/components/sections/Recruitment";
import { ServiceAreas } from "@/components/sections/ServiceAreas";

/**
 * Página inicial — one-page, pela ordem do mockup (opção 2).
 * Cada secção vive no seu ficheiro em src/components/sections/: isto permite que várias
 * pessoas trabalhem em paralelo sem conflitos de merge.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <HowWeWork />
      <ServiceAreas />
      <Departments />
      <Recruitment />
      <Contact />
    </>
  );
}
