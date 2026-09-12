export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const nucoe = {
  brand: "Instituto 2630",
  productName: "Cultura de Elite",
  productFull: "Formação Cultura de Elite",

  /** Placeholder. Troque pelo link Hotmart, Kiwify ou checkout escolhido. */
  checkoutUrl: "",

  event: {
    formatLabel: "2 dias • 4 horas por dia • 8 horas totais",
    platform: "Online e ao vivo via Zoom",
    dateLabel: "[DATA A CONFIRMAR]",
    timeLabel: "[HORÁRIO A CONFIRMAR]",
    locationLabel: "[LOCAL A CONFIRMAR]",
    seatsLabel: "Vagas limitadas",
  },

  priceLabel: "[PREÇO A DEFINIR]",

  ctas: {
    primary: "Quero aprender a construir a cultura da minha empresa",
    secondary: "Quero construir meu NUCOE",
    offer: "Quero construir a essência da cultura da minha empresa",
  },

  hero: {
    eyebrow: "CULTURA DE ELITE | FORMAÇÃO AO VIVO",
    headline: "Sem cultura, você se torna funcionário do seu colaborador.",
    subheadline:
      "Aprenda a construir a essência da cultura da sua empresa para criar uma referência comum capaz de orientar líderes, decisões e comportamentos.",
  },

  problem: {
    headline: "Sua empresa depende demais de você para funcionar?",
    body: "Falhas na execução, decisões que sempre voltam para o dono e valores que não orientam comportamento revelam uma cultura sem estrutura.",
  },

  idea: {
    eyebrow: "O plano",
    headline: "Em 8 horas, você começa a estruturar a essência da cultura da sua empresa.",
    intro: "Propósito, Valores e Princípios organizados como base do NUCOE.",
    pillars: [
      {
        title: "Propósito",
        micro: "Dá sentido",
        detail: "Por que a empresa existe.",
      },
      {
        title: "Valores",
        micro: "Orientam o caminho",
        detail: "Como se lidera, trabalha e se relaciona.",
      },
      {
        title: "Princípios",
        micro: "Protegem a essência",
        detail: "Critérios claros para decisões e consequências.",
      },
    ],
    closing: "A essência cria uma referência comum para a empresa.",
  },

  bridge: {
    headline: "O BOPE já nasceu caveira. E isso ensina algo fundamental sobre cultura.",
    body: "Antes da ação existe uma essência. O Instituto 2630 traduz aprendizados das Operações Especiais para a cultura e a realidade empresarial.",
  },

  deliverables: {
    headline: "Você não termina apenas com anotações.",
    intro: "Você começa a organizar a estrutura da essência da cultura da sua empresa.",
    items: [
      "Propósito separado de objetivo",
      "Valores que realmente orientam a organização",
      "Princípios transformados em regras claras",
      "Estrutura inicial do NUCOE",
      "Conexão com experiências reais da empresa",
      "Movimento pós-formação definido",
    ],
  },

  method: {
    headline: "Ensinar. Construir. Aplicar.",
    intro: "Do fundamento à ferramenta, com aplicação na realidade da empresa.",
    steps: [
      {
        title: "Ensinar fundamentos",
        detail: "Compreender cultura, essência, Propósito, Valores e Princípios.",
      },
      {
        title: "Conectar experiências",
        detail: "Relacionar os fundamentos aos desafios reais da empresa.",
      },
      {
        title: "Aplicar ferramentas",
        detail: "Usar ferramentas para transformar reflexão em estrutura.",
      },
      {
        title: "Construir",
        detail: "Organizar a essência da cultura como base do NUCOE.",
      },
      {
        title: "Consolidar e mover",
        detail: "Discutir, consolidar e definir o próximo movimento pós-curso.",
      },
    ],
  },

  audience: {
    headline: "Para quem carrega responsabilidade por pessoas e resultados.",
    for: [
      "Empresários e empreendedores",
      "Gestores e líderes de equipe",
      "Quem decide e responde por resultados",
      "Quem percebe que cobrar mais não cria alinhamento",
      "Quem está cansado de resolver tudo pessoalmente",
    ],
    against: [
      "Quem busca uma palestra de motivação",
      "Quem quer uma cultura pronta para copiar",
      "Quem não acredita que cultura é a solução",
      "Quem não pretende aplicar na empresa",
    ],
  },

  guide: {
    headline: "Quem conduz",
    name: "Freitas",
    bio: "O Instituto 2630 traduz aprendizados da cultura do BOPE e das Operações Especiais para o ambiente empresarial. A experiência vem do BOPE. A aplicação acontece na empresa.",
    imageSrc: "/images/freitas-guide.png",
  },

  proof: {
    eyebrow: "Quem aplicou",
    headline: "Provas de aplicação empresarial.",
    intro: "Cases e depoimentos específicos sobre cultura, alinhamento, liderança e decisão serão selecionados.",
    testimonials: [
      {
        quote: "Case de cultura, alinhamento ou decisão será inserido aqui.",
        name: "CASE A SELECIONAR",
        role: "Evidência empresarial",
      },
      {
        quote: "Depoimento específico sobre aplicação do NUCOE será inserido aqui.",
        name: "DEPOIMENTO A SELECIONAR",
        role: "Evidência empresarial",
      },
      {
        quote: "Prova relacionada a liderança, unidade ou comportamento será inserida aqui.",
        name: "PROVA A SELECIONAR",
        role: "Evidência empresarial",
      },
    ] satisfies Testimonial[],
  },

  offer: {
    headline: "Uma essência clara cria uma referência comum para a empresa.",
    includes: [
      "2 dias ao vivo pelo Zoom",
      "4 horas por dia, 8 horas totais",
      "Aplicação prática guiada pelo Instituto 2630",
      "Estrutura da essência: Propósito, Valores e Princípios",
    ],
    microcopy: "Escolha o formato na inscrição.",
  },

  bonus: {
    headline: "A experiência vem do BOPE. A aplicação acontece na empresa.",
    body: "As Operações Especiais são fonte de aprendizagem sobre cultura, unidade, responsabilidade e decisão. O trabalho da formação é empresarial.",
  },

  faq: [
    {
      question: "É um curso de desenvolvimento pessoal?",
      answer: "Não. A comunicação e a entrega estão centradas na construção da essência da cultura da empresa por meio do NUCOE.",
    },
    {
      question: "Preciso já ter missão, visão e valores definidos?",
      answer: "Não. A formação parte dos fundamentos e conduz a construção de Propósito, Valores e Princípios.",
    },
    {
      question: "É um treinamento militar?",
      answer: "Não. As Operações Especiais são fonte de aprendizagem. A aplicação é empresarial.",
    },
    {
      question: "Vou sair com a cultura inteira implantada?",
      answer: "Não. A formação inicia e estrutura a essência. A implementação exige um nível posterior de desenvolvimento.",
    },
    {
      question: "Há certificado?",
      answer: "Não. O entregável é a estrutura da essência da cultura: Propósito, Valores e Princípios.",
    },
    {
      question: "Como funciona?",
      answer: "Ao vivo pelo Zoom, em dois dias, com quatro horas de formação por dia.",
    },
    {
      question: "O que será construído?",
      answer: "A estrutura inicial da essência da cultura da empresa, organizada em Propósito, Valores, Princípios e NUCOE.",
    },
    {
      question: "Preciso levar materiais da empresa?",
      answer: "Não é obrigatório. Se você tiver materiais atuais de missão, visão ou valores, eles podem ajudar na aplicação.",
    },
    {
      question: "O NUCOE fica pronto em 8 horas?",
      answer: "Você começa a estruturar a essência. O refinamento e a implementação continuam depois da formação.",
    },
    {
      question: "Para quem é essa formação?",
      answer: "Para empresários, empreendedores, gestores e líderes responsáveis por pessoas e resultados.",
    },
  ] satisfies FaqItem[],

  close: {
    headline: "A cultura nasce de 2 formas.",
    body: "1. Criada, nutrida e protegida desde o início da empresa.\n2. Através das crenças e comportamentos dos seus colaboradores.\n\nVocê decide quem está no comando.",
  },

  mother: "Sem cultura, você se torna funcionário do seu colaborador.",
} as const;

export type NucoeContent = typeof nucoe;

export function resolveCheckoutHref(checkoutUrl: string): string {
  const trimmed = checkoutUrl.trim();
  return trimmed.length > 0 ? trimmed : "#oferta";
}
