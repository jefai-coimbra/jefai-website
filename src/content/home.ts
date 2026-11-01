/**
 * Conteúdo da página inicial (mockup opção 2 — "Engenharia & Processo").
 * Textos copiados do mockup: ainda NÃO são finais (revisão em WEB-15).
 */

// ─── Hero ────────────────────────────────────────────────────────────────────
export const hero = {
  // O mockup tinha "JUNITEC / JEP Inspired" — removido, não podemos referir outras JE.
  badge: "Júnior Iniciativa · Universidade de Coimbra",
  titleStart: "Soluções de Inteligência Artificial com",
  titleHighlight: "Impacto Real.",
  // TODO(conteúdo): confirmar se o "Manual de Supervisão de Projetos" existe e pode ser citado
  description:
    "Desenvolvemos software inteligente, modelos de Machine Learning e automação de processos seguindo o nosso Manual de Supervisão de Projetos — garantindo cumprimento rigoroso de escopo, prazo e orçamento.",
  primaryCta: { label: "Iniciar um Projeto com a JEFAI", href: "#contacto" },
  secondaryCta: { label: "Ver Metodologia de Trabalho", href: "#como-trabalhamos" },
} as const;

export type Highlight = { label: string; href: string };

/**
 * Barra "Em Destaque & Cooperação Institucional".
 * TODO(conteúdo): só publicar itens com link real e verificável (WEB-16). Lista vazia = barra escondida.
 */
export const highlights: { title: string; items: Highlight[] } = {
  title: "Em Destaque & Cooperação Institucional",
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
  eyebrow: "Manual de Supervisão de Projetos",
  title: "Como Trabalhamos",
  description:
    "Cada projeto na JEFAI segue 4 pilares de supervisão para reduzir riscos e garantir transparência total com o cliente.",
  steps: [
    {
      title: "Objetivos Claros",
      description:
        "Reunião de diagnóstico com o cliente para identificar o problema de negócio e definir métricas concretas de sucesso.",
    },
    {
      title: "Estrutura Bem-Definida",
      description:
        "Delimitação rigorosa das atividades, arquitetura técnica, entregáveis e alocação da equipa e ferramentas adequadas.",
    },
    {
      title: "Cronograma & Execução",
      description:
        "Desenvolvimento iterativo com prazos viáveis para cada fase, desde a conceção e treino de modelos até à integração.",
    },
    {
      title: "Supervisão & Entrega",
      description:
        "Validação de qualidade, testes finais, documentação técnica e acompanhamento pós-entrega para garantir retorno real.",
    },
  ] satisfies ProcessStep[],
};

// ─── Áreas de Atuação (Serviços) ─────────────────────────────────────────────
export type ServiceArea = { tag: string; title: string; description: string };

export const serviceAreas = {
  id: "servicos",
  eyebrow: "Áreas de Atuação",
  title: "Competências Técnicas ao Serviço das Empresas",
  areas: [
    {
      tag: "Core IA",
      title: "Algoritmos & Machine Learning",
      description: "Modelos preditivos, classificação e sistemas de recomendação personalizados.",
    },
    {
      tag: "Linguagem Natural",
      title: "Chatbots & Soluções NLP",
      description:
        "Assistentes virtuais inteligentes para apoio ao cliente e consulta de documentação interna.",
    },
    {
      tag: "Eficiência",
      title: "Automação de Processos",
      description:
        "Redução de tarefas manuais e integração inteligente entre plataformas empresariais.",
    },
    {
      tag: "Data Science",
      title: "Análise de Dados",
      description:
        "Tratamento estatístico, visualização de dados e apoio quantitativo à tomada de decisão.",
    },
    {
      tag: "Estratégia & I&D",
      title: "Consultoria em IA & Investigação",
      description:
        "Avaliação de oportunidades de IA nas empresas e projetos internos de Investigação e Desenvolvimento.",
    },
    {
      tag: "Formação & Comunicação",
      title: "Workshops & Redes Sociais",
      description: "Formações práticas de literacia em IA e gestão profissional de redes sociais.",
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
  eyebrow: "Estrutura Interna",
  title: "Os 4 Departamentos da JEFAI",
  items: [
    {
      key: "projetos",
      name: "Projetos",
      tag: "Departamento Técnico & Operacional",
      title: "Departamento de Projetos",
      description:
        "O núcleo técnico da JEFAI. Responsável pelo desenvolvimento de algoritmos de Inteligência Artificial, modelos preditivos, sistemas de recomendação, NLP e análise de dados, aplicando o Manual de Supervisão de Projetos e dinamizando workshops técnicos internos e externos.",
      responsibilities: [
        "Arquitetura e desenvolvimento de soluções de IA e Machine Learning",
        "Gestão e supervisão técnica de projetos para clientes e I&D interno",
        "Organização de workshops técnicos (Git, Python, IA) e mini-projetos",
      ],
    },
    {
      key: "marketing",
      name: "Marketing",
      tag: "Comunicação, Imagem & Redes Sociais",
      title: "Departamento de Marketing",
      description:
        "Gere a identidade visual e a presença digital da JEFAI no LinkedIn, Instagram e TikTok, além de colaborar na prestação de serviços de gestão de redes sociais e divulgação de eventos e recrutamentos na Universidade de Coimbra.",
      responsibilities: [
        "Gestão estratégica das redes sociais e comunicação institucional",
        "Design gráfico, criação de conteúdos e cobertura de eventos/workshops",
        "Apoio comercial na prestação de serviços de gestão de redes sociais",
      ],
    },
    {
      key: "rh",
      name: "Recursos Humanos",
      tag: "Talento, Cultura & Formação Interna",
      title: "Departamento de Recursos Humanos",
      description:
        "Coordena todo o ciclo de vida dos membros da JEFAI: desde o planeamento das fases de recrutamento (Formulário, Entrevistas Individuais e Dinâmica de Grupo) até ao acompanhamento da motivação, coesão multidisciplinar e formação.",
      responsibilities: [
        "Condução dos processos anuais de recrutamento e seleção na UC",
        "Acompanhamento de equipas e integração de novos membros",
        "Promoção da cultura interna e eventos de team building",
      ],
    },
    {
      key: "financeiro",
      name: "Financeiro",
      tag: "Sustentabilidade, Legal & Orçamentação",
      title: "Departamento Financeiro",
      description:
        "Assegura o rigor orçamental, fiscal e legal da Associação Juvenil JEFAI (NIPC 517706040), estruturando propostas financeiras competitivas para clientes e gerindo parcerias e protocolos institucionais.",
      responsibilities: [
        "Elaboração de orçamentos e controlo financeiro dos projetos",
        "Gestão administrativa, fiscal e cumprimento de protocolos (FCTUC)",
        "Análise de viabilidade e sustentabilidade da Júnior Iniciativa",
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
    badge: "Candidaturas Abertas para Estudantes da UC",
    cta: "Submeter Candidatura",
    href: "/candidatura",
  },
  closed: {
    badge: "Candidaturas Encerradas · Próxima edição em breve",
    // v1.1 (WEB-30): substituir por "Receber alerta do próximo recrutamento"
    cta: "Fala connosco",
    href: "#contacto",
  },
  title: "Queres desenvolver competências em IA através de projetos reais?",
  description:
    "A JEFAI recruta estudantes do 1.º ano de Licenciatura ao 2.º ano de Mestrado da Universidade de Coimbra que queiram crescer em ambiente empresarial.",
  steps: [
    {
      title: "Formulário Online",
      description:
        "Preenchimento dos teus dados académicos, seleção dos departamentos por ordem de preferência (1.ª a 4.ª opção), CV e Carta de Motivação.",
    },
    {
      title: "Entrevista Individual",
      description:
        "Conversa simples para conhecer o teu percurso académico, interesses em IA e explicar como funciona o departamento a que te candidatas.",
    },
    {
      title: "Dinâmica de Grupo",
      description:
        "Fase prática colaborativa para avaliar trabalho em equipa, comunicação, resolução de problemas e espírito de iniciativa.",
    },
  ] satisfies RecruitmentStep[],
};

// ─── Contacto ────────────────────────────────────────────────────────────────
export const contact = {
  id: "contacto",
  eyebrow: "Contacto Direto",
  title: "Vamos conversar sobre o seu próximo projeto?",
  description:
    "Quer procure implementar Inteligência Artificial na sua empresa, estabelecer uma parceria institucional ou juntar-se à equipa, estamos disponíveis.",
  subjects: [
    "Pedido de Proposta — Soluções de IA / Machine Learning",
    "Pedido de Proposta — Análise de Dados & Automação",
    "Consultoria em IA, Workshops ou Gestão de Redes Sociais",
    "Parceria Institucional / Evento Universitário",
    "Recrutamento de Estudantes UC",
  ],
};
