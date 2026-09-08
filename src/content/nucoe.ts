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
  productName: "NUCOE",
  productFull: "Núcleo Organizacional da Empresa",

  /** Placeholder. Troque pelo link Hotmart, Kiwify ou checkout escolhido. */
  checkoutUrl: "",

  event: {
    formatLabel: "2 noites de 4 horas",
    platform: "Presencial e Zoom simultaneamente",
    dateLabel: "[DATA A CONFIRMAR]",
    timeLabel: "[HORÁRIO A CONFIRMAR]",
    locationLabel: "[LOCAL A CONFIRMAR]",
    seatsLabel: "Vagas limitadas",
  },

  priceLabel: "[PREÇO A DEFINIR]",

  ctas: {
    primary: "Quero construir o NUCOE",
    secondary: "Garantir minha vaga",
    offer: "Garantir minha vaga",
  },

  hero: {
    eyebrow: "NUCOE | Formação ao vivo",
    headline: "Sua empresa sabe quem é?",
    subheadline:
      "Construa Propósito, Valores e Princípios para orientar pessoas e decisões.",
  },

  problem: {
    headline: "Treinar sem essência é começar pelo fim.",
    body: "Vendas, gestão e liderança só funcionam quando o time sabe o que está protegendo. Sem isso, há atividade, mas não há unidade.",
  },

  idea: {
    eyebrow: "A essência antes das práticas",
    headline: "O que está na sua cabeça vira referência.",
    intro: "Três elementos que precisam funcionar juntos.",
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
    closing: "Produtos mudam. Estratégias evoluem. O núcleo permanece.",
  },

  bridge: {
    headline: "Sob pressão, ninguém espera ordem.",
    body: "Nas Operações Especiais, identidade e princípios compartilhados fazem pessoas diferentes agirem com unidade. Freitas traduz isso para quem lidera uma empresa.",
  },

  deliverables: {
    headline: "Você sai com o núcleo em construção.",
    intro: "Durante a formação, você registra o que hoje está disperso ou só na sua cabeça.",
    items: [
      "O propósito da empresa",
      "Os valores essenciais",
      "Primeira estrutura de princípios",
      "Visão integrada do NUCOE",
      "Diagnóstico das práticas atuais",
      "Próximos passos com sócios e líderes",
    ],
  },

  method: {
    headline: "Da identidade à decisão.",
    intro: "Primeiro, quem a empresa é. Depois, como isso orienta pessoas e práticas.",
    steps: [
      {
        title: "Quem somos",
        detail: "A razão de existir e as convicções inegociáveis.",
      },
      {
        title: "Como lideramos",
        detail: "O que se espera dos líderes nas relações e nos exemplos.",
      },
      {
        title: "Como decidimos",
        detail: "Critérios para escolhas sem resposta pronta.",
      },
      {
        title: "Como praticamos",
        detail: "Rituais e processos que reforçam o núcleo.",
      },
      {
        title: "Como crescemos",
        detail: "Contratar, delegar e expandir sem perder a essência.",
      },
    ],
  },

  audience: {
    headline: "Para quem lidera pessoas.",
    for: [
      "Empresários com equipe",
      "Sócios que precisam se alinhar",
      "Líderes com responsabilidade sobre cultura",
      "Empresas em crescimento perdendo unidade",
      "Donos sobrecarregados de decisões",
    ],
    against: [
      "Quem busca só motivação",
      "Quem quer assistir passivamente",
      "Quem quer uma cultura pronta para copiar",
      "Quem espera resolver tudo em dois encontros",
    ],
  },

  guide: {
    headline: "Quem conduz",
    name: "Freitas",
    bio: "Operações Especiais, empreendedorismo e a criação do Instituto 2630. Freitas conduz com perguntas e ferramentas. Ele não define sua identidade por você.",
    imageSrc: "/images/freitas-guide.png",
  },

  proof: {
    eyebrow: "Quem aplicou",
    headline: "Clareza que aparece na rotina.",
    intro: "Depoimentos modelo. Validar ou substituir antes da publicação.",
    testimonials: [
      {
        quote:
          "Eu cobrava alinhamento, mas nunca tinha dito o que deveria orientar as decisões. Agora está no papel.",
        name: "DEPOIMENTO MODELO 1",
        role: "Validar ou substituir",
      },
      {
        quote:
          "Cultura parecia abstrato. Ligando propósito, valores e princípios ao dia a dia, ficou claro o que mudar.",
        name: "DEPOIMENTO MODELO 2",
        role: "Validar ou substituir",
      },
      {
        quote:
          "Não saí com uma frase pronta. Saí com um primeiro desenho do nosso núcleo e direção para seguir com meus sócios.",
        name: "DEPOIMENTO MODELO 3",
        role: "Validar ou substituir",
      },
    ] satisfies Testimonial[],
  },

  offer: {
    headline: "Uma empresa que sabe quem é.",
    includes: [
      "2 noites consecutivas, 4 horas cada",
      "Presencial ou pelo Zoom",
      "Aplicação prática guiada por Freitas",
      "Ferramenta para construção do NUCOE",
    ],
    microcopy: "Escolha o formato na inscrição.",
  },

  bonus: {
    headline: "O encontro termina. A construção continua.",
    body: "Após o ao vivo, você recebe o treinamento gravado “A Essência da Cultura do BOPE para sua Empresa” como biblioteca de apoio.",
  },

  faq: [
    {
      question: "Preciso ter uma empresa grande?",
      answer: "Não. Basta ter equipe e decisões de liderança para tomar.",
    },
    {
      question: "Posso participar com meu sócio?",
      answer: "Sim. Costuma deixar a conversa mais produtiva.",
    },
    {
      question: "Serve para líderes que não são donos?",
      answer: "Sim, desde que influenciem decisões e práticas da empresa.",
    },
    {
      question: "Preciso ter feito o Pé na Porta ou CEO-L?",
      answer: "Não. O NUCOE pode ser sua primeira formação com o Instituto.",
    },
    {
      question: "Presencial ou Zoom?",
      answer: "Você escolhe. Os dois formatos acontecem ao mesmo tempo.",
    },
    {
      question: "Haverá gravação?",
      answer: "A formação é ao vivo. Gravação será confirmada com a turma.",
    },
    {
      question: "O curso gravado está incluso?",
      answer: "Sim, como bônus liberado após a participação ao vivo.",
    },
    {
      question: "O que preciso preparar?",
      answer: "Honestidade sobre a empresa. Se tiver, os materiais atuais de missão e valores.",
    },
    {
      question: "Vou sair com meu NUCOE pronto?",
      answer: "Você sai com a base construída. O refinamento continua com seus sócios.",
    },
    {
      question: "Isso resolve a cultura da empresa?",
      answer: "Nenhuma formação resolve sozinha. O NUCOE dá a estrutura. O resultado depende da aplicação.",
    },
  ] satisfies FaqItem[],

  close: {
    headline: "Cada decisão ensina\nno que sua empresa acredita.",
    body: "Deixe isso ao acaso ou dê clareza ao seu time.\nConstrua o núcleo.",
  },

  mother: "A cultura começa quando a empresa descobre quem é.",
} as const;

export type NucoeContent = typeof nucoe;

export function resolveCheckoutHref(checkoutUrl: string): string {
  const trimmed = checkoutUrl.trim();
  return trimmed.length > 0 ? trimmed : "#oferta";
}
