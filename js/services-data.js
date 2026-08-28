const WHATSAPP_NUMBER = "244947151562";

const SERVICE_PAGES = {
  "mecanica-geral": {
    title: "Mecânica geral",
    file: "mecanica-geral.html",
    image: {
      src: "assets/services/mecanica-geral.png",
      alt: "Mecânica geral na Oficina ELIF",
    },
    items: [
      {
        title: "Diagnóstico computadorizado",
        description: "Identificação precisa de avarias com equipamento de diagnóstico para um reparo mais rápido e seguro.",
      },
      {
        title: "Revisão geral",
        description: "Inspecção completa do veículo para garantir fiabilidade, segurança e bom desempenho em estrada.",
      },
      {
        title: "Troca de óleo e filtros",
        description: "Manutenção essencial para proteger o motor e prolongar a vida útil do seu automóvel.",
      },
      {
        title: "Sistema de travagem",
        description: "Reparação e substituição de pastilhas, discos e fluido de travões para máxima segurança.",
      },
      {
        title: "Suspensão",
        description: "Correção de amortecedores, molas e braços para conforto, estabilidade e controlo da condução.",
      },
      {
        title: "Direção",
        description: "Ajuste e reparação do sistema de direcção para resposta precisa e condução segura.",
      },
      {
        title: "Embraiagem",
        description: "Substituição e reparação de embraiagem para transmissão suave e sem falhas.",
      },
      {
        title: "Caixa de velocidades",
        description: "Diagnóstico e intervenção em caixas manuais e automáticas com rigor técnico.",
      },
      {
        title: "Motor",
        description: "Reparações mecânicas no motor, desde ajustes até intervenções mais complexas.",
      },
      {
        title: "Sistema de arrefecimento",
        description: "Manutenção de radiador, ventoinha e líquido de arrefecimento para evitar sobreaquecimento.",
      },
      {
        title: "Sistema de combustível",
        description: "Limpeza, diagnóstico e reparação de injectores, bombas e linhas de combustível.",
      },
      {
        title: "Correias e corrente de distribuição",
        description: "Substituição programada para proteger o motor e evitar avarias graves.",
      },
      {
        title: "Reparação de fugas de óleo/água",
        description: "Localização e correção de fugas para manter o motor e o sistema de arrefecimento saudáveis.",
      },
    ],
  },
  "diagnostico-eletronica": {
    title: "Diagnóstico e eletrónica",
    file: "diagnostico-eletronica.html",
    image: {
      src: "assets/services/diagnostico-eletronica.jpg",
      alt: "Diagnóstico e eletrónica na Oficina ELIF",
    },
    items: [
      {
        title: "Diagnóstico OBD",
        description: "Leitura de códigos de avaria para identificar falhas electrónicas com rapidez e precisão.",
      },
      {
        title: "Programação e codificação de módulos",
        description: "Configuração de unidades de controlo para restabelecer funções e compatibilidade do veículo.",
      },
      {
        title: "Diagnóstico de falhas eletrónicas",
        description: "Análise detalhada de circuitos e componentes para resolver avisos e mau funcionamento.",
      },
      {
        title: "Sistema de injeção eletrónica",
        description: "Teste e reparação do sistema de injecção para melhor consumo e desempenho do motor.",
      },
      {
        title: "Sensores e atuadores",
        description: "Substituição e calibração de sensores essenciais ao funcionamento correcto do automóvel.",
      },
      {
        title: "Alternador e motor de arranque",
        description: "Reparação e teste dos sistemas de carga e arranque para fiabilidade diária.",
      },
      {
        title: "Baterias",
        description: "Teste, substituição e instalação de baterias com verificação do sistema eléctrico.",
      },
      {
        title: "Reparação elétrica automóvel",
        description: "Intervenção em instalações eléctricas, cablagem e acessórios do veículo.",
      },
    ],
  },
  "pneus-direcao": {
    title: "Pneus e direção",
    file: "pneus-direcao.html",
    image: {
      src: "assets/services/pneus-direcao.jpg",
      alt: "Pneus e direção na Oficina ELIF",
      credit: "Steward Masweneng",
      creditUrl: "https://unsplash.com/@stewardmasweneng",
    },
    items: [
      {
        title: "Alinhamento computadorizado",
        description: "Correcção precisa da geometria das rodas para desgaste uniforme e condução estável.",
      },
      {
        title: "Balanceamento",
        description: "Eliminação de vibrações ao volante e melhoria do conforto em viagem.",
      },
      {
        title: "Montagem de pneus",
        description: "Instalação profissional de pneus novos com segurança e acabamento cuidado.",
      },
      {
        title: "Reparação de pneus",
        description: "Reparação pontual de furos quando a condição do pneu permite uma solução segura.",
      },
      {
        title: "Calibragem",
        description: "Ajuste correcto da pressão dos pneus para segurança, economia e durabilidade.",
      },
      {
        title: "Rodízio de pneus",
        description: "Rotação dos pneus para distribuir o desgaste de forma equilibrada.",
      },
      {
        title: "Verificação de suspensão e direção",
        description: "Inspecção completa dos componentes ligados à estabilidade e controlo do veículo.",
      },
    ],
  },
  "chapa-pintura": {
    title: "Chapa e pintura",
    file: "chapa-pintura.html",
    image: {
      src: "assets/services/chapa-pintura.jpg",
      alt: "Chapa e pintura na Oficina ELIF",
      credit: "uma dantara",
      creditUrl: "https://unsplash.com/@umadantara",
    },
    items: [
      {
        title: "Chapa e bate-chapa",
        description: "Reparação de amolgadelas e deformações para recuperar a linha original da carroçaria.",
      },
      {
        title: "Pintura automóvel",
        description: "Pintura profissional com acabamento uniforme e protecção da lataria.",
      },
      {
        title: "Pintura personalizada",
        description: "Soluções de pintura sob medida para um resultado único e de alta qualidade.",
      },
      {
        title: "Polimento",
        description: "Remoção de micro-riscos e recuperação do brilho da pintura original.",
      },
      {
        title: "Recuperação de faróis",
        description: "Restauro de faróis opacos para melhor visibilidade e aspecto renovado.",
      },
      {
        title: "Reparação de para-choques",
        description: "Reparação ou substituição de para-choques danificados com acabamento cuidado.",
      },
      {
        title: "Retoques de pintura",
        description: "Correcção localizada de riscos e imperfeições sem necessidade de pintar todo o painel.",
      },
      {
        title: "Pintura de jantes",
        description: "Renovação estética das jantes com pintura resistente e acabamento profissional.",
      },
    ],
  },
  "ar-condicionado": {
    title: "Ar condicionado",
    file: "ar-condicionado.html",
    image: {
      src: "assets/services/ar-condicionado.jpg",
      alt: "Ar condicionado automóvel",
      credit: "Olav Tvedt",
      creditUrl: "https://unsplash.com/@olavt",
    },
    items: [
      {
        title: "Diagnóstico do AC",
        description: "Identificação de falhas no sistema de climatização para uma reparação efectiva.",
      },
      {
        title: "Recarga de gás",
        description: "Recarga do gás refrigerante para restaurar o ar frio e o conforto no habitáculo.",
      },
      {
        title: "Higienização",
        description: "Limpeza e desinfecção do sistema para eliminar odores e melhorar a qualidade do ar.",
      },
      {
        title: "Reparação de compressor",
        description: "Diagnóstico e reparação do compressor para restabelecer o funcionamento do AC.",
      },
      {
        title: "Reparação de fugas",
        description: "Detecção e correcção de fugas no circuito de ar condicionado.",
      },
      {
        title: "Manutenção do sistema",
        description: "Manutenção preventiva para garantir desempenho e durabilidade do ar condicionado.",
      },
    ],
  },
  "estetica-automoveel": {
    title: "Estética automóvel",
    file: "estetica-automoveel.html",
    image: {
      src: "assets/services/estetica-automoveel.jpg",
      alt: "Estética automóvel na Oficina ELIF",
      credit: "Fortune Vieyra",
      creditUrl: "https://unsplash.com/@fortunevieyra",
    },
    items: [
      {
        title: "Lavagem detalhada",
        description: "Limpeza completa interior e exterior para um acabamento impecável.",
      },
      {
        title: "Higienização interna",
        description: "Desinfecção do habitáculo para um ambiente mais limpo e agradável.",
      },
      {
        title: "Limpeza de estofos",
        description: "Remoção de manchas e odores dos bancos e revestimentos interiores.",
      },
      {
        title: "Polimento profissional",
        description: "Correcção de pintura e brilho profundo com técnicas profissionais de polimento.",
      },
      {
        title: "Enceramento",
        description: "Protecção da pintura com cera de alta qualidade para durabilidade e brilho.",
      },
      {
        title: "Tratamento de plásticos",
        description: "Renovação e protecção de plásticos interiores e exteriores do veículo.",
      },
      {
        title: "Tratamento de couro",
        description: "Limpeza e hidratação de estofos em couro para preservar o aspecto e a textura.",
      },
      {
        title: "Detalhamento automóvel",
        description: "Serviço completo de detailing para realçar cada detalhe do seu automóvel.",
      },
    ],
  },
};

const NAV_ITEMS = [
  { label: "Sobre nós", href: "sobre-nos.html", type: "page" },
  ...Object.entries(SERVICE_PAGES).map(([id, page]) => ({
    label: page.title,
    href: page.file,
    type: "service",
    id,
  })),
  { label: "Contactos e Localização", href: "index.html#contactos", type: "page" },
];

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getServiceUrl(categoryId, serviceTitle) {
  const page = SERVICE_PAGES[categoryId];
  if (!page) return "#";
  return `${page.file}#${slugify(serviceTitle)}`;
}

function getQuoteUrl(serviceName, categoryName) {
  const message = `Olá, gostaria de um orçamento para: ${serviceName} (${categoryName})`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
