export interface TemplateVariant {
  slug: string;
  name: string;
  desc: string;
  file: string; // path relativo a /public
}

export interface TemplateSegmento {
  id: string;
  nome: string;
  emoji: string;
  variants: [TemplateVariant, TemplateVariant, TemplateVariant];
}

export const templateSegmentos: TemplateSegmento[] = [
  {
    id: "odonto",
    nome: "Odontologia",
    emoji: "🦷",
    variants: [
      { slug: "warm-friendly", name: "Warm Friendly", desc: "Coral acolhedor — família e proximidade", file: "/templates/odonto/odonto-warm-friendly.html" },
      { slug: "tech-aqua",     name: "Tech Aqua",     desc: "Teal digital — tecnologia e confiança",  file: "/templates/odonto/odonto-tech-aqua.html" },
      { slug: "dark-premium",  name: "Dark Premium",  desc: "Preto & ouro — estética de alto padrão", file: "/templates/odonto/odonto-dark-premium.html" },
    ],
  },
  {
    id: "saude",
    nome: "Saúde & Clínicas",
    emoji: "🏥",
    variants: [
      { slug: "soft-acolhedor",      name: "Soft Acolhedor",      desc: "Rosa suave — cuidado e acolhimento",      file: "/templates/saude/saude-soft-acolhedor.html" },
      { slug: "clean-institucional", name: "Clean Institucional", desc: "Azul institucional — seriedade médica",    file: "/templates/saude/saude-clean-institucional.html" },
      { slug: "luxury-premium",      name: "Luxury Premium",      desc: "Verde floresta & ouro — medicina premium", file: "/templates/saude/saude-luxury-premium.html" },
    ],
  },
  {
    id: "salao",
    nome: "Salão de Beleza",
    emoji: "💇",
    variants: [
      { slug: "pop-colorido",  name: "Pop Colorido",  desc: "Amarelo & roxo vibrante — energia e jovialidade", file: "/templates/salao/salao-pop-colorido.html" },
      { slug: "organic-nude",  name: "Organic Nude",  desc: "Creme & terra — natural e sofisticado",           file: "/templates/salao/salao-organic-nude.html" },
      { slug: "glam-dark",     name: "Glam Dark",     desc: "Preto & rosa — glamour e elegância",              file: "/templates/salao/salao-glam-dark.html" },
    ],
  },
  {
    id: "personal",
    nome: "Personal Trainer",
    emoji: "💪",
    variants: [
      { slug: "digital-fit",    name: "Digital Fit",    desc: "Roxo digital — plataforma moderna de treino",  file: "/templates/personal/personal-digital-fit.html" },
      { slug: "premium-coach",  name: "Premium Coach",  desc: "Verde musgo — coach de alto desempenho",       file: "/templates/personal/personal-premium-coach.html" },
      { slug: "beast-mode",     name: "Beast Mode",     desc: "Preto & amarelo — intensidade APEX",           file: "/templates/personal/personal-beast-mode.html" },
    ],
  },
  {
    id: "arq",
    nome: "Arquitetura",
    emoji: "🏛️",
    variants: [
      { slug: "bold-modern",      name: "Bold Modern",      desc: "Laranja & preto — estúdio arrojado e contemporâneo", file: "/templates/arq/arq-bold-modern.html" },
      { slug: "organic-studio",   name: "Organic Studio",   desc: "Verde floresta — biofílico e sustentável",           file: "/templates/arq/arq-organic-studio.html" },
      { slug: "editorial-luxury", name: "Editorial Luxury", desc: "Preto & areia — editorial de alto luxo",             file: "/templates/arq/arq-editorial-luxury.html" },
    ],
  },
  {
    id: "edu",
    nome: "Educação",
    emoji: "🎓",
    variants: [
      { slug: "academy-pro",    name: "Academy Pro",    desc: "Azul marinho — cursos online profissionais", file: "/templates/edu/edu-academy-pro.html" },
      { slug: "escola-criativa", name: "Escola Criativa", desc: "Amarelo & roxo — escola de artes e criatividade", file: "/templates/edu/edu-escola-criativa.html" },
      { slug: "mentor-premium", name: "Mentor Premium", desc: "Dourado escuro — mentoria executiva de luxo",  file: "/templates/edu/edu-mentor-premium.html" },
    ],
  },
  {
    id: "imoveis",
    nome: "Imóveis",
    emoji: "🏠",
    variants: [
      { slug: "aconchego-local", name: "Aconchego Local", desc: "Terra & creme — corretor local e próximo",      file: "/templates/imoveis/imoveis-aconchego-local.html" },
      { slug: "modern-broker",   name: "Modern Broker",   desc: "Azul marinho — corretagem moderna e profissional", file: "/templates/imoveis/imoveis-modern-broker.html" },
      { slug: "luxury-estate",   name: "Luxury Estate",   desc: "Dourado escuro — alto padrão e exclusividade",  file: "/templates/imoveis/imoveis-luxury-estate.html" },
    ],
  },
];
