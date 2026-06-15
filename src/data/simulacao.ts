export interface Segmento {
  id: string;
  nome: string;
}

export interface Categoria {
  id: string;
  nome: string;
  icon: string;
  segmentos: Segmento[];
}

export const categorias: Categoria[] = [
  {
    id: "saude",
    nome: "Saúde & Bem-estar",
    icon: "🏥",
    segmentos: [
      { id: "clinica-medica", nome: "Clínica Médica" },
      { id: "clinica-odontologica", nome: "Clínica Odontológica" },
      { id: "psicologo", nome: "Psicólogo / Psiquiatra" },
      { id: "nutricionista", nome: "Nutricionista" },
      { id: "fisioterapeuta", nome: "Fisioterapeuta" },
      { id: "personal-trainer", nome: "Personal Trainer" },
      { id: "clinica-estetica", nome: "Clínica de Estética" },
      { id: "pilates-yoga", nome: "Pilates & Yoga" },
      { id: "academia", nome: "Academia" },
    ],
  },
  {
    id: "beleza",
    nome: "Beleza & Cuidado Pessoal",
    icon: "💇",
    segmentos: [
      { id: "salao-barbearia", nome: "Salão / Barbearia" },
      { id: "depilacao-estetica", nome: "Depilação & Estética Corporal" },
      { id: "manicure-nail", nome: "Manicure / Nail Designer" },
      { id: "micropigmentacao", nome: "Micropigmentação / Tatuagem" },
    ],
  },
  {
    id: "profissionais",
    nome: "Profissionais Liberais",
    icon: "⚖️",
    segmentos: [
      { id: "advogado", nome: "Advogado / Escritório de Advocacia" },
      { id: "contador", nome: "Contador / Escritório de Contabilidade" },
      { id: "arquiteto-designer", nome: "Arquiteto / Designer de Interiores" },
      { id: "engenheiro", nome: "Engenheiro Civil / Consultor" },
      { id: "corretor-imoveis", nome: "Corretor de Imóveis" },
      { id: "consultor-financeiro", nome: "Consultor Financeiro" },
      { id: "coach", nome: "Coach de Carreira / Life Coach" },
    ],
  },
  {
    id: "alimentacao",
    nome: "Alimentação",
    icon: "🍽️",
    segmentos: [
      { id: "restaurante", nome: "Restaurante / Lanchonete" },
      { id: "cafeteria", nome: "Cafeteria / Bistrô" },
      { id: "confeitaria", nome: "Confeitaria / Bolos Personalizados" },
      { id: "marmitaria", nome: "Marmitaria / Delivery" },
      { id: "buffet", nome: "Buffet de Eventos" },
    ],
  },
  {
    id: "educacao",
    nome: "Educação & Capacitação",
    icon: "🎓",
    segmentos: [
      { id: "escola-idiomas", nome: "Escola de Idiomas" },
      { id: "escola-artes", nome: "Escola de Música / Dança / Artes" },
      { id: "cursinho", nome: "Cursinho / Aulas Particulares" },
      { id: "professor-tutor", nome: "Professor / Tutor Autônomo" },
      { id: "infoprodutor", nome: "Infoprodutor / Curso Online" },
    ],
  },
  {
    id: "servicos-tecnicos",
    nome: "Serviços Técnicos & Manutenção",
    icon: "🔧",
    segmentos: [
      { id: "eletricista-encanador", nome: "Eletricista / Encanador / Pedreiro" },
      { id: "ar-condicionado", nome: "Ar-condicionado & Refrigeração" },
      { id: "assistencia-tecnica", nome: "Assistência Técnica" },
      { id: "limpeza-conservacao", nome: "Limpeza & Conservação" },
      { id: "dedetizadora", nome: "Dedetizadora" },
    ],
  },
  {
    id: "pet",
    nome: "Pet & Animal",
    icon: "🐾",
    segmentos: [
      { id: "petshop-veterinaria", nome: "Petshop / Clínica Veterinária" },
      { id: "banho-tosa", nome: "Banho & Tosa" },
      { id: "veterinario", nome: "Veterinário Autônomo" },
    ],
  },
  {
    id: "imoveis",
    nome: "Imóveis & Construção",
    icon: "🏡",
    segmentos: [
      { id: "imobiliaria", nome: "Imobiliária de Pequeno Porte" },
      { id: "construtora", nome: "Construtora Local" },
      { id: "corretor-autonomo", nome: "Corretor Autônomo" },
      { id: "decorador-paisagista", nome: "Decorador / Paisagista" },
    ],
  },
  {
    id: "criativos",
    nome: "Criativos & Comunicação",
    icon: "📸",
    segmentos: [
      { id: "fotografo", nome: "Fotógrafo" },
      { id: "videomaker", nome: "Videomaker / Produtora" },
      { id: "designer-grafico", nome: "Designer Gráfico" },
      { id: "agencia-marketing", nome: "Agência de Marketing" },
    ],
  },
  {
    id: "comercio",
    nome: "Comércio Local",
    icon: "🛍️",
    segmentos: [
      { id: "loja-roupas", nome: "Loja de Roupas & Acessórios" },
      { id: "otica", nome: "Ótica" },
      { id: "floricultura", nome: "Floricultura" },
      { id: "papelaria-livraria", nome: "Papelaria / Livraria Independente" },
      { id: "loja-presentes", nome: "Loja de Presentes & Artesanato" },
    ],
  },
  {
    id: "eventos",
    nome: "Eventos & Entretenimento",
    icon: "🎉",
    segmentos: [
      { id: "espaco-festas", nome: "Espaço de Festas & Eventos" },
      { id: "dj-banda", nome: "DJ & Banda" },
      { id: "cerimonialista", nome: "Cerimonialista / Wedding Planner" },
      { id: "fotografo-eventos", nome: "Fotógrafo de Eventos" },
    ],
  },
];

export interface SegmentoContent {
  titulo: string;
  subtitulo: string;
  servicos: string[];
  cta: string;
  tagline: string;
}

const contentMap: Record<string, SegmentoContent> = {
  "clinica-medica": {
    titulo: "Clínica Médica Saúde Plena",
    subtitulo: "Cuidando de você com excelência e humanidade",
    servicos: ["Consultas Gerais", "Exames Clínicos", "Acompanhamento Preventivo", "Telemedicina"],
    cta: "Agende sua consulta",
    tagline: "Sua saúde em boas mãos",
  },
  "clinica-odontologica": {
    titulo: "Odonto Sorriso",
    subtitulo: "O sorriso que você merece, o cuidado que você precisa",
    servicos: ["Limpeza & Prevenção", "Clareamento Dental", "Ortodontia", "Implantes"],
    cta: "Agende uma avaliação gratuita",
    tagline: "Transformando sorrisos desde 2015",
  },
  "psicologo": {
    titulo: "Dra. Ana Lima — Psicologia",
    subtitulo: "Um espaço seguro para o seu cuidado emocional",
    servicos: ["Terapia Individual", "Psicoterapia Online", "Avaliação Psicológica", "Grupos Terapêuticos"],
    cta: "Agende sua primeira sessão",
    tagline: "Saúde mental é qualidade de vida",
  },
  "nutricionista": {
    titulo: "Nutrição Viva",
    subtitulo: "Alimentação consciente para uma vida mais saudável",
    servicos: ["Consulta Nutricional", "Plano Alimentar Personalizado", "Acompanhamento Online", "Reeducação Alimentar"],
    cta: "Comece sua jornada",
    tagline: "Comer bem é viver bem",
  },
  "fisioterapeuta": {
    titulo: "FisioVida — Reabilitação",
    subtitulo: "Recuperando movimentos, transformando vidas",
    servicos: ["Fisioterapia Ortopédica", "RPG", "Pilates Clínico", "Reabilitação Pós-Cirúrgica"],
    cta: "Marque sua avaliação",
    tagline: "Movimento é saúde",
  },
  "personal-trainer": {
    titulo: "Rodrigo Silva — Personal",
    subtitulo: "Treinos personalizados para resultados reais",
    servicos: ["Treino Funcional", "Musculação", "Emagrecimento", "Condicionamento Físico"],
    cta: "Quero transformar meu corpo",
    tagline: "Seu objetivo, nosso compromisso",
  },
  "clinica-estetica": {
    titulo: "Estética & Beleza Premium",
    subtitulo: "Realce sua beleza natural com procedimentos seguros",
    servicos: ["Harmonização Facial", "Botox & Preenchimento", "Limpeza de Pele", "Tratamentos Corporais"],
    cta: "Agende uma avaliação",
    tagline: "Beleza que transforma",
  },
  "pilates-yoga": {
    titulo: "Studio Equilíbrio",
    subtitulo: "Corpo em movimento, mente em paz",
    servicos: ["Pilates Solo", "Pilates Aparelho", "Yoga Flow", "Meditação Guiada"],
    cta: "Experimente uma aula grátis",
    tagline: "Encontre seu equilíbrio",
  },
  "academia": {
    titulo: "Academia FitLife",
    subtitulo: "Sua evolução começa aqui",
    servicos: ["Musculação", "Cardio", "Aulas Coletivas", "Avaliação Física"],
    cta: "Matricule-se agora",
    tagline: "Mais que uma academia, um estilo de vida",
  },
  "salao-barbearia": {
    titulo: "Barbearia & Salão Estilo",
    subtitulo: "Cortes precisos, estilo inconfundível",
    servicos: ["Corte Masculino", "Barba", "Coloração", "Tratamentos Capilares"],
    cta: "Agende agora pelo WhatsApp",
    tagline: "Onde o estilo encontra a tradição",
  },
  "depilacao-estetica": {
    titulo: "Studio Depil & Beauty",
    subtitulo: "Pele lisa e cuidada o ano todo",
    servicos: ["Depilação a Laser", "Depilação com Cera", "Limpeza de Pele", "Hidratação Corporal"],
    cta: "Agende sua sessão",
    tagline: "Liberdade para a sua pele",
  },
  "manicure-nail": {
    titulo: "Nail Studio by Camila",
    subtitulo: "Unhas impecáveis do jeito que você merece",
    servicos: ["Manicure & Pedicure", "Alongamento em Gel", "Nail Art", "Unhas em Fibra"],
    cta: "Reserve seu horário",
    tagline: "Arte nas suas mãos",
  },
  "micropigmentacao": {
    titulo: "Studio Ink & Beauty",
    subtitulo: "Arte permanente com técnica e cuidado",
    servicos: ["Microblading", "Micropigmentação Labial", "Tatuagem Artística", "Remoção a Laser"],
    cta: "Solicite seu orçamento",
    tagline: "Arte que dura pra sempre",
  },
  "advogado": {
    titulo: "Dr. Carlos Mendes — Advocacia",
    subtitulo: "Defenda seus direitos com quem entende",
    servicos: ["Direito Civil", "Direito Trabalhista", "Direito de Família", "Consultoria Jurídica"],
    cta: "Fale com um especialista",
    tagline: "Seu direito, nossa missão",
  },
  "contador": {
    titulo: "Contabilidade Ativa",
    subtitulo: "Gestão contábil que faz seu negócio crescer",
    servicos: ["Abertura de Empresa", "Declaração de IR", "Folha de Pagamento", "Consultoria Tributária"],
    cta: "Solicite uma consultoria gratuita",
    tagline: "Números certos, negócio próspero",
  },
  "arquiteto-designer": {
    titulo: "Arq. Sofia Alves — Design",
    subtitulo: "Transformando espaços, criando experiências",
    servicos: ["Projeto Residencial", "Design de Interiores", "Reforma & Decoração", "Consultoria Online"],
    cta: "Solicite seu projeto",
    tagline: "Seu espaço dos sonhos",
  },
  "engenheiro": {
    titulo: "Eng. Paulo Costa — Construção",
    subtitulo: "Projetos sólidos, execução impecável",
    servicos: ["Projetos Estruturais", "Laudos Técnicos", "Gestão de Obras", "Consultoria"],
    cta: "Peça um orçamento",
    tagline: "Engenharia com responsabilidade",
  },
  "corretor-imoveis": {
    titulo: "Marcos Viana — Imóveis",
    subtitulo: "Encontre o imóvel perfeito para sua vida",
    servicos: ["Compra & Venda", "Aluguel", "Avaliação de Imóveis", "Consultoria Imobiliária"],
    cta: "Ver imóveis disponíveis",
    tagline: "O lar certo para você",
  },
  "consultor-financeiro": {
    titulo: "Investir Bem — Consultoria",
    subtitulo: "Seu dinheiro trabalhando para você",
    servicos: ["Planejamento Financeiro", "Investimentos", "Aposentadoria", "Controle de Dívidas"],
    cta: "Agende sua consultoria",
    tagline: "Liberdade financeira ao seu alcance",
  },
  "coach": {
    titulo: "Viviane Costa — Coaching",
    subtitulo: "Desperte o seu melhor potencial",
    servicos: ["Coaching de Carreira", "Life Coaching", "Gestão de Tempo", "Mentoria Executiva"],
    cta: "Quero evoluir agora",
    tagline: "Sua vida, seu protagonismo",
  },
  "restaurante": {
    titulo: "Sabores da Terra",
    subtitulo: "Culinária autêntica com ingredientes frescos",
    servicos: ["Almoço Executivo", "Jantar à La Carte", "Delivery", "Eventos Privados"],
    cta: "Faça sua reserva",
    tagline: "Uma experiência para todos os sentidos",
  },
  "cafeteria": {
    titulo: "Café Aconchego",
    subtitulo: "O melhor café da cidade, para começar bem o dia",
    servicos: ["Cafés Especiais", "Brunch", "Bolos Artesanais", "Coworking"],
    cta: "Venha nos visitar",
    tagline: "Cada xícara, um momento especial",
  },
  "confeitaria": {
    titulo: "Doce Arte — Confeitaria",
    subtitulo: "Bolos e doces que encantam em cada detalhe",
    servicos: ["Bolos Personalizados", "Docinhos de Festa", "Tortas", "Encomendas Especiais"],
    cta: "Faça seu pedido",
    tagline: "Arte que se come",
  },
  "marmitaria": {
    titulo: "Marmita Saudável",
    subtitulo: "Comida caseira e nutritiva na sua porta todo dia",
    servicos: ["Marmitas Fit", "Marmitas Tradicionais", "Planos Semanais", "Delivery Express"],
    cta: "Monte seu cardápio",
    tagline: "Comida de casa, onde você estiver",
  },
  "buffet": {
    titulo: "Buffet Celebrar",
    subtitulo: "Seu evento inesquecível começa aqui",
    servicos: ["Casamentos", "Festas Corporativas", "Formaturas", "Buffet Personalizado"],
    cta: "Solicite um orçamento",
    tagline: "Momentos que ficam para sempre",
  },
  "escola-idiomas": {
    titulo: "Fala Fluente — Idiomas",
    subtitulo: "Inglês, Espanhol e muito mais com fluência real",
    servicos: ["Inglês", "Espanhol", "Francês", "Preparatório TOEFL / IELTS"],
    cta: "Aula experimental gratuita",
    tagline: "O mundo fala, e você?",
  },
  "escola-artes": {
    titulo: "Escola Harmonia — Artes",
    subtitulo: "Música, dança e arte para todas as idades",
    servicos: ["Violão & Piano", "Dança Contemporânea", "Desenho & Pintura", "Teatro"],
    cta: "Matricule-se agora",
    tagline: "Arte transforma vidas",
  },
  "cursinho": {
    titulo: "Cursinho Aprovação",
    subtitulo: "Preparação completa para vestibulares e concursos",
    servicos: ["ENEM", "Vestibulares", "Concursos Públicos", "Reforço Escolar"],
    cta: "Garanta sua vaga",
    tagline: "Seu futuro começa agora",
  },
  "professor-tutor": {
    titulo: "Prof. Lucas Andrade",
    subtitulo: "Aulas personalizadas para você evoluir de verdade",
    servicos: ["Matemática", "Física & Química", "Português", "Redação ENEM"],
    cta: "Agende uma aula experimental",
    tagline: "Aprender ficou mais fácil",
  },
  "infoprodutor": {
    titulo: "Academia Digital Pro",
    subtitulo: "Conhecimento que transforma sua carreira",
    servicos: ["Cursos Online", "Mentorias", "Comunidade Exclusiva", "Certificados"],
    cta: "Acesse agora",
    tagline: "Aprenda no seu ritmo",
  },
  "eletricista-encanador": {
    titulo: "ElétricaFix — Serviços",
    subtitulo: "Serviços rápidos e seguros para sua casa ou empresa",
    servicos: ["Instalações Elétricas", "Encanamento", "Reformas", "Manutenção Preventiva"],
    cta: "Solicite um orçamento",
    tagline: "Resolvemos na hora",
  },
  "ar-condicionado": {
    titulo: "ClimaTech — Ar-condicionado",
    subtitulo: "Conforto térmico durante todo o ano",
    servicos: ["Instalação", "Manutenção Preventiva", "Limpeza & Higienização", "Conserto"],
    cta: "Agende a visita técnica",
    tagline: "Frescor que você pode confiar",
  },
  "assistencia-tecnica": {
    titulo: "TechRepair — Assistência",
    subtitulo: "Consertos rápidos com garantia",
    servicos: ["Celulares", "Notebooks", "Tablets", "Periféricos"],
    cta: "Traga seu aparelho",
    tagline: "Seu dispositivo nas mãos certas",
  },
  "limpeza-conservacao": {
    titulo: "Limpa & Brilha — Serviços",
    subtitulo: "Ambientes limpos e organizados para viver melhor",
    servicos: ["Limpeza Residencial", "Limpeza Comercial", "Pós-Obra", "Higienização de Estofados"],
    cta: "Solicite um orçamento",
    tagline: "Limpeza que transforma ambientes",
  },
  "dedetizadora": {
    titulo: "PestControl — Dedetização",
    subtitulo: "Proteção garantida contra pragas e insetos",
    servicos: ["Dedetização", "Descupinização", "Controle de Roedores", "Sanitização"],
    cta: "Agende a visita",
    tagline: "Sua casa, sua proteção",
  },
  "petshop-veterinaria": {
    titulo: "PetLove — Clínica & Loja",
    subtitulo: "Tudo para a saúde e felicidade do seu pet",
    servicos: ["Consultas Veterinárias", "Vacinação", "Pet Shop", "Internação"],
    cta: "Agende uma consulta",
    tagline: "Amor e cuidado para seu melhor amigo",
  },
  "banho-tosa": {
    titulo: "Grooming Pet Studio",
    subtitulo: "Seu pet saindo impecável e feliz",
    servicos: ["Banho Completo", "Tosa Higiênica", "Tosa Estética", "Spa Canino"],
    cta: "Agende o banho",
    tagline: "Pets bonitos, donos felizes",
  },
  "veterinario": {
    titulo: "Dr. Felipe Lima — Vet",
    subtitulo: "Cuidado especializado para o seu animal",
    servicos: ["Clínica Geral", "Vacinação", "Cirurgias", "Exames Laboratoriais"],
    cta: "Marque uma consulta",
    tagline: "Saúde animal com dedicação",
  },
  "imobiliaria": {
    titulo: "Imóveis Premium",
    subtitulo: "Realizando o sonho da casa própria há mais de 10 anos",
    servicos: ["Venda de Imóveis", "Locação", "Avaliações", "Consultoria"],
    cta: "Ver imóveis disponíveis",
    tagline: "O imóvel certo para você",
  },
  "construtora": {
    titulo: "Construir & Crescer",
    subtitulo: "Da fundação ao acabamento, com qualidade garantida",
    servicos: ["Construção Residencial", "Reformas", "Projetos", "Administração de Obras"],
    cta: "Solicite um orçamento",
    tagline: "Construindo sonhos com solidez",
  },
  "corretor-autonomo": {
    titulo: "João Pereira — Corretor",
    subtitulo: "Encontre o imóvel ideal com quem conhece o mercado",
    servicos: ["Compra", "Venda", "Aluguel", "Financiamento"],
    cta: "Entre em contato",
    tagline: "Negócios imobiliários com confiança",
  },
  "decorador-paisagista": {
    titulo: "Verde & Design — Decoração",
    subtitulo: "Ambientes que inspiram e encantam",
    servicos: ["Paisagismo", "Decoração Residencial", "Jardins Verticais", "Consultoria Online"],
    cta: "Solicite seu projeto",
    tagline: "Natureza e design em harmonia",
  },
  "fotografo": {
    titulo: "Studio Foto & Arte",
    subtitulo: "Momentos únicos capturados para sempre",
    servicos: ["Casamentos", "Newborn", "Ensaios de Família", "Ensaios Corporativos"],
    cta: "Solicite um orçamento",
    tagline: "Cada foto conta uma história",
  },
  "videomaker": {
    titulo: "Frame Films — Produtora",
    subtitulo: "Vídeos que conectam e convertem",
    servicos: ["Vídeos Institucionais", "Cobertura de Eventos", "Reels & TikTok", "Motion Design"],
    cta: "Solicite um projeto",
    tagline: "Sua história em movimento",
  },
  "designer-grafico": {
    titulo: "Design Studio Criativo",
    subtitulo: "Identidade visual que faz sua marca ser lembrada",
    servicos: ["Logotipos", "Identidade Visual", "Social Media", "Materiais Gráficos"],
    cta: "Quero minha identidade visual",
    tagline: "Design que comunica",
  },
  "agencia-marketing": {
    titulo: "Agência Impulso Digital",
    subtitulo: "Estratégias digitais que geram resultados reais",
    servicos: ["Gestão de Redes Sociais", "Tráfego Pago", "SEO", "Criação de Sites"],
    cta: "Fale com um especialista",
    tagline: "Sua marca no lugar certo",
  },
  "loja-roupas": {
    titulo: "Boutique Estilo Único",
    subtitulo: "Moda exclusiva para o seu estilo",
    servicos: ["Roupas Femininas", "Roupas Masculinas", "Acessórios", "Personalização"],
    cta: "Ver coleção",
    tagline: "Vista-se com personalidade",
  },
  "otica": {
    titulo: "Ótica Vision Plus",
    subtitulo: "Enxergue o mundo com clareza e estilo",
    servicos: ["Exame de Vista", "Óculos de Grau", "Óculos de Sol", "Lentes de Contato"],
    cta: "Agende seu exame",
    tagline: "Clareza para a sua vida",
  },
  "floricultura": {
    titulo: "Flora Encantada",
    subtitulo: "Flores que expressam sentimentos únicos",
    servicos: ["Buquês", "Arranjos Especiais", "Cestas", "Delivery de Flores"],
    cta: "Encomendar agora",
    tagline: "Flores para cada momento",
  },
  "papelaria-livraria": {
    titulo: "Papelaria & Cultura",
    subtitulo: "Tudo para criar, aprender e se expressar",
    servicos: ["Material Escolar", "Artigos para Arte", "Livros", "Personalizados"],
    cta: "Ver produtos",
    tagline: "Criatividade à sua disposição",
  },
  "loja-presentes": {
    titulo: "Presente Perfeito",
    subtitulo: "O presente ideal para cada momento especial",
    servicos: ["Lembranças Artesanais", "Kits Personalizados", "Decoração", "Presentes Corporativos"],
    cta: "Ver catálogo",
    tagline: "Afeto em cada detalhe",
  },
  "espaco-festas": {
    titulo: "Espaço Celebrar",
    subtitulo: "O cenário perfeito para as suas comemorações",
    servicos: ["Festas Infantis", "Casamentos", "Confraternizações", "Formaturas"],
    cta: "Verificar disponibilidade",
    tagline: "Onde os momentos se tornam memórias",
  },
  "dj-banda": {
    titulo: "DJ & Banda SomFesta",
    subtitulo: "A trilha sonora perfeita para o seu evento",
    servicos: ["Festas & Casamentos", "Eventos Corporativos", "Aniversários", "Shows"],
    cta: "Verifique a disponibilidade",
    tagline: "Música que conecta pessoas",
  },
  "cerimonialista": {
    titulo: "Celebrar — Cerimonial",
    subtitulo: "Seu dia especial organizado com amor e perfeição",
    servicos: ["Casamentos", "Debutantes", "Aniversários", "Eventos Corporativos"],
    cta: "Solicite um orçamento",
    tagline: "Cada detalhe, perfeito",
  },
  "fotografo-eventos": {
    titulo: "Click Events — Fotografia",
    subtitulo: "Capturando a emoção de cada momento",
    servicos: ["Casamentos", "Festas", "15 Anos", "Eventos Corporativos"],
    cta: "Verificar disponibilidade",
    tagline: "Memórias que duram para sempre",
  },
};

export function getSegmentoContent(segmentoId: string): SegmentoContent {
  return (
    contentMap[segmentoId] ?? {
      titulo: "Seu Negócio Aqui",
      subtitulo: "Uma presença digital profissional para você",
      servicos: ["Serviço 1", "Serviço 2", "Serviço 3", "Serviço 4"],
      cta: "Entre em contato",
      tagline: "Qualidade e confiança",
    }
  );
}

export function findSegmento(id: string): Segmento | undefined {
  for (const cat of categorias) {
    const seg = cat.segmentos.find((s) => s.id === id);
    if (seg) return seg;
  }
  return undefined;
}

export const templates = [
  {
    id: "landing",
    nome: "Landing Page",
    tipo: "web" as const,
    descricao: "Página de captação moderna com foco em conversão",
    preview: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
  },
  {
    id: "institucional",
    nome: "Site Institucional",
    tipo: "web" as const,
    descricao: "Apresentação completa e profissional do seu negócio",
    preview: "bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900",
  },
  {
    id: "arte",
    nome: "Arte para Redes",
    tipo: "arte" as const,
    descricao: "Post profissional para Instagram e Facebook",
    preview: "bg-gradient-to-br from-yellow-500 via-orange-500 to-pink-600",
  },
];
