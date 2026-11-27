/**
 * Conteúdo da página inicial (mockup opção 2 — "Engenharia & Processo").
 * Textos copiados do mockup: ainda NÃO são finais (revisão em WEB-15).
 */

// ─── Hero ────────────────────────────────────────────────────────────────────
export const hero = {
  // O mockup tinha "JUNITEC / JEP Inspired" — removido, não podemos referir outras JE.
  badge: "Júnior Iniciativa · Universidade de Coimbra",
  titleStart: "Soluções de inteligência artificial para",
  titleHighlight: "desafios reais.",
  // TODO(conteúdo): confirmar se o "Manual de Supervisão de Projetos" existe e pode ser citado
  description:
    "Desenvolvemos soluções de software inteligente, aprendizagem automática e automação de processos, orientadas para as necessidades de cada organização, com foco na qualidade, no rigor técnico e na colaboração.",
  primaryCta: { label: "Iniciar um projeto com a JEFAI", href: "#contacto" },
  secondaryCta: { label: "Conhecer a nossa metodologia", href: "#como-trabalhamos" },
} as const;

export type Highlight = { label: string; href: string };

/**
 * Barra "Em Destaque & Cooperação Institucional".
 * TODO(conteúdo): só publicar itens com link real e verificável (WEB-16). Lista vazia = barra escondida.
 */
export const highlights: { title: string; items: Highlight[] } = {
  title: "Destaques e cooperação institucional",
  items: [
    { label: "FCTUC · Universidade de Coimbra", href: "" },
    { label: 'Notícias UC ("Porque os chatbots vieram para ficar")', href: "" },
    { label: "Entrevista Oficial YouTube UC", href: "" },
  ],
};

// ─── Como Trabalhamos ────────────────────────────────────────────────────────
export type ProcessStep = { title: string; description: string };

export const howWeWork = {
  id: "como-trabalhamos",
  eyebrow: "Metodologia de trabalho",
  title: "Como trabalhamos",
  description:
    "A nossa metodologia assenta em quatro pilares que procuram reduzir riscos, promover a transparência e facilitar a colaboração com o cliente.",
  steps: [
    {
      title: "Objetivos claros",
      description:
        "Identificação das necessidades do cliente, compreensão do problema e definição dos objetivos e critérios de sucesso do projeto.",
    },
    {
      title: "Estrutura bem definida",
      description:
        "Definição do âmbito do projeto, da arquitetura técnica, dos resultados esperados e dos recursos necessários.",
    },
    {
      title: "Planeamento e execução",
      description:
        "Desenvolvimento iterativo, com planeamento das diferentes fases do projeto, desde a conceção até à integração da solução.",
    },
    {
      title: "Supervisão e entrega",
      description:
        "Realização de testes, validação da qualidade, preparação da documentação técnica e avaliação dos resultados do projeto.",
    },
  ] satisfies ProcessStep[],
};

// ─── Áreas de Atuação (Serviços) ─────────────────────────────────────────────
export type ServiceArea = { tag: string; title: string; description: string };

export const serviceAreas = {
  id: "servicos",
  eyebrow: "Áreas de intervenção",
  title: "Competências técnicas ao serviço das empresas",
  areas: [
    {
      tag: "Inteligência artificial",
      title: "Algoritmos e aprendizagem automática",
      description:
        "Desenvolvimento de modelos preditivos, algoritmos de classificação e sistemas de recomendação adaptados às necessidades de cada organização.",
    },
    {
      tag: "Linguagem natural",
      title: "Chatbots e processamento de linguagem natural",
      description:
        "Desenvolvimento de assistentes virtuais para apoio ao cliente e consulta de documentação interna.",
    },
    {
      tag: "Eficiência",
      title: "Automação de processos",
      description:
        "Automatização de tarefas repetitivas e integração de sistemas, com o objetivo de melhorar a eficiência operacional.",
    },
    {
      tag: "Ciência de dados",
      title: "Análise de dados",
      description:
        "Tratamento estatístico, visualização e interpretação de dados para apoiar a tomada de decisão.",
    },
    {
      tag: "Estratégia e I&D",
      title: "Consultoria em IA e investigação",
      description:
        "Identificação de oportunidades de aplicação da IA nas empresas e desenvolvimento de projetos de investigação e desenvolvimento.",
    },
    {
      tag: "Formação e comunicação",
      title: "Formação e redes sociais",
      description:
        "Dinamização de workshops sobre inteligência artificial e apoio à gestão de redes sociais.",
    },
  ] satisfies ServiceArea[],
};

// ─── Departamentos ───────────────────────────────────────────────────────────
export type Department = {
  key: string;
  name: string;
  tag: string;
  title: string;
  description: string;
  responsibilities: string[];
};

export const departments = {
  id: "departamentos",
  eyebrow: "Estrutura interna",
  title: "Os quatro departamentos da JEFAI",
  items: [
    {
      key: "projetos",
      name: "Projetos",
      tag: "Desenvolvimento técnico e operacional",
      title: "Departamento de Projetos",
      description:
        "O núcleo técnico da JEFAI, responsável pelo desenvolvimento de soluções de inteligência artificial, aprendizagem automática, processamento de linguagem natural e análise de dados. Promove também a formação técnica dos membros e a aplicação prática dos seus conhecimentos.",
      responsibilities: [
        "Conceção e desenvolvimento de soluções de inteligência artificial e aprendizagem automática",
        "Gestão e supervisão técnica de projetos para clientes e de iniciativas internas de I&D",
        "Organização de workshops técnicos sobre Git, Python e IA, bem como de miniprojetos",
      ],
    },
    {
      key: "marketing",
      name: "Marketing",
      tag: "Comunicação, imagem e redes sociais",
      title: "Departamento de Marketing",
      description:
        "Responsável pela identidade visual, comunicação institucional e presença digital da JEFAI. Colabora na divulgação de eventos, iniciativas e processos de recrutamento, bem como na prestação de serviços de gestão de redes sociais.",
      responsibilities: [
        "Gestão estratégica das redes sociais e da comunicação institucional",
        "Design gráfico, criação de conteúdos e cobertura de eventos e workshops",
        "Apoio à prestação de serviços de gestão de redes sociais",
      ],
    },
    {
      key: "rh",
      name: "Recursos Humanos",
      tag: "Talento, cultura e formação interna",
      title: "Departamento de Recursos Humanos",
      description:
        "Acompanha o percurso dos membros da JEFAI, desde o recrutamento e a integração até ao seu desenvolvimento pessoal e profissional. Promove a colaboração entre departamentos, a motivação e a formação contínua.",
      responsibilities: [
        "Planeamento e realização dos processos de recrutamento e seleção",
        "Acompanhamento das equipas e integração de novos membros",
        "Promoção da cultura interna e organização de atividades de team building",
      ],
    },
    {
      key: "financeiro",
      name: "Financeiro",
      tag: "Sustentabilidade e gestão jurídica e orçamental",
      title: "Departamento Financeiro",
      description:
        "Responsável pela gestão financeira, administrativa e fiscal da Associação Juvenil JEFAI. Contribui para a sustentabilidade da organização, a elaboração de propostas financeiras e a gestão de parcerias institucionais.",
      responsibilities: [
        "Elaboração de orçamentos e controlo financeiro dos projetos",
        "Gestão administrativa e fiscal e acompanhamento de protocolos institucionais",
        "Análise da viabilidade financeira e da sustentabilidade da Júnior Iniciativa",
      ],
    },
  ] satisfies Department[],
};

// ─── Recrutamento ────────────────────────────────────────────────────────────
export type RecruitmentStep = { title: string; description: string };

export const recruitment = {
  id: "recrutamento",
  /**
   * Interruptor único do recrutamento. Controla:
   *  - o selo e o botão desta secção (WEB-04);
   *  - se a página /candidatura mostra o formulário (WEB-24);
   *  - se o servidor aceita candidaturas (src/actions/application.ts).
   */
  isOpen: true,
  /** Identifica a edição nas candidaturas guardadas, ex.: "2026-27-1" (ano letivo + n.º da fase). */
  edition: "2026-27-1",
  open: {
    badge: "Candidaturas abertas para estudantes da UC",
    cta: "Submete a tua candidatura",
    href: "/candidatura",
  },
  closed: {
    badge: "Candidaturas encerradas",
    // v1.1 (WEB-30): substituir por "Receber alerta do próximo recrutamento"
    cta: "Fala connosco",
    href: "#contacto",
  },
  title: "Queres desenvolver competências em IA através de projetos reais?",
  description:
    "Na JEFAI, podes aplicar os teus conhecimentos, desenvolver novas competências e crescer num ambiente empresarial. Recrutamos estudantes da Universidade de Coimbra, desde o 1.º ano de licenciatura até ao 2.º ano de mestrado.",
  steps: [
    {
      title: "Formulário online",
      description:
        "Preenche os teus dados académicos, indica os departamentos por ordem de preferência e envia o teu currículo e a tua carta de motivação.",
    },
    {
      title: "Entrevista individual",
      description:
        "Uma oportunidade para conhecermos o teu percurso académico, os teus interesses e a tua motivação, e para te apresentarmos o funcionamento da JEFAI.",
    },
    {
      title: "Dinâmica de grupo",
      description:
        "Participa numa atividade colaborativa que permite avaliar a tua capacidade de trabalhar em equipa, comunicar, resolver problemas e demonstrar espírito de iniciativa.",
    },
  ] satisfies RecruitmentStep[],
};

// ─── Contacto ────────────────────────────────────────────────────────────────
export const contact = {
  id: "contacto",
  eyebrow: "Contacto direto",
  title: "Vamos conversar sobre o seu próximo projeto?",
  description:
    "Se pretende explorar soluções de inteligência artificial para a sua empresa, estabelecer uma parceria institucional ou saber mais sobre a JEFAI, entre em contacto connosco.",
  subjects: [
    "Pedido de proposta — Soluções de IA e aprendizagem automática",
    "Pedido de proposta — Análise de dados e automação",
    "Consultoria em IA, workshops ou gestão de redes sociais",
    "Parceria institucional ou evento universitário",
    "Recrutamento de estudantes da UC",
  ],
};
