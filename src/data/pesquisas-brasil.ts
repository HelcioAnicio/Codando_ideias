/**
 * Base de dados: volume estimado de buscas mensais no Google por segmento × estado.
 * Fonte: estimativas baseadas em Google Keyword Planner, Semrush e proporções populacionais (IBGE 2023).
 * Os valores representam buscas por termos relacionados ao segmento + localidade.
 */

export const ESTADOS = [
  { sigla: "AC", nome: "Acre" },
  { sigla: "AL", nome: "Alagoas" },
  { sigla: "AM", nome: "Amazonas" },
  { sigla: "AP", nome: "Amapá" },
  { sigla: "BA", nome: "Bahia" },
  { sigla: "CE", nome: "Ceará" },
  { sigla: "DF", nome: "Distrito Federal" },
  { sigla: "ES", nome: "Espírito Santo" },
  { sigla: "GO", nome: "Goiás" },
  { sigla: "MA", nome: "Maranhão" },
  { sigla: "MG", nome: "Minas Gerais" },
  { sigla: "MS", nome: "Mato Grosso do Sul" },
  { sigla: "MT", nome: "Mato Grosso" },
  { sigla: "PA", nome: "Pará" },
  { sigla: "PB", nome: "Paraíba" },
  { sigla: "PE", nome: "Pernambuco" },
  { sigla: "PI", nome: "Piauí" },
  { sigla: "PR", nome: "Paraná" },
  { sigla: "RJ", nome: "Rio de Janeiro" },
  { sigla: "RN", nome: "Rio Grande do Norte" },
  { sigla: "RO", nome: "Rondônia" },
  { sigla: "RR", nome: "Roraima" },
  { sigla: "RS", nome: "Rio Grande do Sul" },
  { sigla: "SC", nome: "Santa Catarina" },
  { sigla: "SE", nome: "Sergipe" },
  { sigla: "SP", nome: "São Paulo" },
  { sigla: "TO", nome: "Tocantins" },
];

export interface SegmentoDados {
  id: string;
  nome: string;
  categoria: string;
  /** Ticket médio padrão em R$ (usado quando o usuário não informa) */
  ticketMedioDefault: number;
  /** Taxa de conversão estimada site → lead (ex: 0.025 = 2,5%) */
  taxaConversao: number;
  /** Buscas mensais estimadas por estado (sigla → volume) */
  buscasPorEstado: Record<string, number>;
}

// Multiplicadores populacionais relativos a SP (base = 1.0)
// Ajustados também por penetração de internet e comportamento digital
const M: Record<string, number> = {
  SP: 1.00,
  MG: 0.46,
  RJ: 0.40,
  BA: 0.30,
  PR: 0.26,
  RS: 0.25,
  PE: 0.22,
  CE: 0.21,
  PA: 0.17,
  SC: 0.19,
  GO: 0.18,
  MA: 0.13,
  ES: 0.10,
  AM: 0.10,
  DF: 0.13,
  MT: 0.09,
  MS: 0.07,
  PI: 0.07,
  RN: 0.08,
  AL: 0.07,
  PB: 0.08,
  SE: 0.05,
  TO: 0.04,
  RO: 0.04,
  AC: 0.02,
  AP: 0.02,
  RR: 0.01,
};

function vol(base: number): Record<string, number> {
  const result: Record<string, number> = {};
  for (const [sigla, mult] of Object.entries(M)) {
    result[sigla] = Math.round(base * mult);
  }
  return result;
}

export const segmentosDados: SegmentoDados[] = [
  // ── SAÚDE & BEM-ESTAR ─────────────────────────────────────────────────────
  {
    id: "clinica-medica",
    nome: "Clínica Médica",
    categoria: "Saúde & Bem-estar",
    ticketMedioDefault: 280,
    taxaConversao: 0.025,
    buscasPorEstado: vol(48000),
  },
  {
    id: "clinica-odontologica",
    nome: "Clínica Odontológica",
    categoria: "Saúde & Bem-estar",
    ticketMedioDefault: 380,
    taxaConversao: 0.03,
    buscasPorEstado: vol(42000),
  },
  {
    id: "psicologo",
    nome: "Psicólogo / Psiquiatra",
    categoria: "Saúde & Bem-estar",
    ticketMedioDefault: 200,
    taxaConversao: 0.028,
    buscasPorEstado: vol(55000),
  },
  {
    id: "nutricionista",
    nome: "Nutricionista",
    categoria: "Saúde & Bem-estar",
    ticketMedioDefault: 240,
    taxaConversao: 0.025,
    buscasPorEstado: vol(30000),
  },
  {
    id: "fisioterapeuta",
    nome: "Fisioterapeuta",
    categoria: "Saúde & Bem-estar",
    ticketMedioDefault: 170,
    taxaConversao: 0.025,
    buscasPorEstado: vol(24000),
  },
  {
    id: "personal-trainer",
    nome: "Personal Trainer",
    categoria: "Saúde & Bem-estar",
    ticketMedioDefault: 400,
    taxaConversao: 0.02,
    buscasPorEstado: vol(20000),
  },
  {
    id: "clinica-estetica",
    nome: "Clínica de Estética",
    categoria: "Saúde & Bem-estar",
    ticketMedioDefault: 320,
    taxaConversao: 0.03,
    buscasPorEstado: vol(34000),
  },
  {
    id: "pilates-yoga",
    nome: "Pilates & Yoga",
    categoria: "Saúde & Bem-estar",
    ticketMedioDefault: 250,
    taxaConversao: 0.025,
    buscasPorEstado: vol(15000),
  },
  {
    id: "academia",
    nome: "Academia",
    categoria: "Saúde & Bem-estar",
    ticketMedioDefault: 100,
    taxaConversao: 0.035,
    buscasPorEstado: vol(45000),
  },

  // ── BELEZA & CUIDADO PESSOAL ──────────────────────────────────────────────
  {
    id: "salao-barbearia",
    nome: "Salão / Barbearia",
    categoria: "Beleza & Cuidado Pessoal",
    ticketMedioDefault: 75,
    taxaConversao: 0.035,
    buscasPorEstado: vol(38000),
  },
  {
    id: "depilacao-estetica",
    nome: "Depilação & Estética Corporal",
    categoria: "Beleza & Cuidado Pessoal",
    ticketMedioDefault: 200,
    taxaConversao: 0.03,
    buscasPorEstado: vol(20000),
  },
  {
    id: "manicure-nail",
    nome: "Manicure / Nail Designer",
    categoria: "Beleza & Cuidado Pessoal",
    ticketMedioDefault: 65,
    taxaConversao: 0.03,
    buscasPorEstado: vol(26000),
  },
  {
    id: "micropigmentacao",
    nome: "Micropigmentação / Tatuagem",
    categoria: "Beleza & Cuidado Pessoal",
    ticketMedioDefault: 600,
    taxaConversao: 0.025,
    buscasPorEstado: vol(13000),
  },

  // ── PROFISSIONAIS LIBERAIS ────────────────────────────────────────────────
  {
    id: "advogado",
    nome: "Advogado / Escritório de Advocacia",
    categoria: "Profissionais Liberais",
    ticketMedioDefault: 1800,
    taxaConversao: 0.02,
    buscasPorEstado: vol(52000),
  },
  {
    id: "contador",
    nome: "Contador / Escritório de Contabilidade",
    categoria: "Profissionais Liberais",
    ticketMedioDefault: 700,
    taxaConversao: 0.022,
    buscasPorEstado: vol(35000),
  },
  {
    id: "arquiteto-designer",
    nome: "Arquiteto / Designer de Interiores",
    categoria: "Profissionais Liberais",
    ticketMedioDefault: 3000,
    taxaConversao: 0.018,
    buscasPorEstado: vol(22000),
  },
  {
    id: "engenheiro",
    nome: "Engenheiro Civil / Consultor",
    categoria: "Profissionais Liberais",
    ticketMedioDefault: 5000,
    taxaConversao: 0.015,
    buscasPorEstado: vol(17000),
  },
  {
    id: "corretor-imoveis",
    nome: "Corretor de Imóveis",
    categoria: "Profissionais Liberais",
    ticketMedioDefault: 7000,
    taxaConversao: 0.02,
    buscasPorEstado: vol(40000),
  },
  {
    id: "consultor-financeiro",
    nome: "Consultor Financeiro",
    categoria: "Profissionais Liberais",
    ticketMedioDefault: 1500,
    taxaConversao: 0.018,
    buscasPorEstado: vol(16000),
  },
  {
    id: "coach",
    nome: "Coach de Carreira / Life Coach",
    categoria: "Profissionais Liberais",
    ticketMedioDefault: 2000,
    taxaConversao: 0.02,
    buscasPorEstado: vol(10000),
  },

  // ── ALIMENTAÇÃO ────────────────────────────────────────────────────────────
  {
    id: "restaurante",
    nome: "Restaurante / Lanchonete",
    categoria: "Alimentação",
    ticketMedioDefault: 80,
    taxaConversao: 0.04,
    buscasPorEstado: vol(68000),
  },
  {
    id: "cafeteria",
    nome: "Cafeteria / Bistrô",
    categoria: "Alimentação",
    ticketMedioDefault: 40,
    taxaConversao: 0.04,
    buscasPorEstado: vol(30000),
  },
  {
    id: "confeitaria",
    nome: "Confeitaria / Bolos Personalizados",
    categoria: "Alimentação",
    ticketMedioDefault: 150,
    taxaConversao: 0.035,
    buscasPorEstado: vol(24000),
  },
  {
    id: "marmitaria",
    nome: "Marmitaria / Delivery",
    categoria: "Alimentação",
    ticketMedioDefault: 35,
    taxaConversao: 0.045,
    buscasPorEstado: vol(19000),
  },
  {
    id: "buffet",
    nome: "Buffet de Eventos",
    categoria: "Alimentação",
    ticketMedioDefault: 3000,
    taxaConversao: 0.02,
    buscasPorEstado: vol(15000),
  },

  // ── EDUCAÇÃO & CAPACITAÇÃO ────────────────────────────────────────────────
  {
    id: "escola-idiomas",
    nome: "Escola de Idiomas",
    categoria: "Educação & Capacitação",
    ticketMedioDefault: 300,
    taxaConversao: 0.025,
    buscasPorEstado: vol(35000),
  },
  {
    id: "escola-artes",
    nome: "Escola de Música / Dança / Artes",
    categoria: "Educação & Capacitação",
    ticketMedioDefault: 250,
    taxaConversao: 0.025,
    buscasPorEstado: vol(13000),
  },
  {
    id: "cursinho",
    nome: "Cursinho / Aulas Particulares",
    categoria: "Educação & Capacitação",
    ticketMedioDefault: 500,
    taxaConversao: 0.028,
    buscasPorEstado: vol(27000),
  },
  {
    id: "professor-tutor",
    nome: "Professor / Tutor Autônomo",
    categoria: "Educação & Capacitação",
    ticketMedioDefault: 180,
    taxaConversao: 0.03,
    buscasPorEstado: vol(19000),
  },
  {
    id: "infoprodutor",
    nome: "Infoprodutor / Curso Online",
    categoria: "Educação & Capacitação",
    ticketMedioDefault: 400,
    taxaConversao: 0.025,
    buscasPorEstado: vol(12000),
  },

  // ── SERVIÇOS TÉCNICOS & MANUTENÇÃO ────────────────────────────────────────
  {
    id: "eletricista-encanador",
    nome: "Eletricista / Encanador / Pedreiro",
    categoria: "Serviços Técnicos & Manutenção",
    ticketMedioDefault: 300,
    taxaConversao: 0.04,
    buscasPorEstado: vol(42000),
  },
  {
    id: "ar-condicionado",
    nome: "Ar-condicionado & Refrigeração",
    categoria: "Serviços Técnicos & Manutenção",
    ticketMedioDefault: 450,
    taxaConversao: 0.04,
    buscasPorEstado: vol(30000),
  },
  {
    id: "assistencia-tecnica",
    nome: "Assistência Técnica",
    categoria: "Serviços Técnicos & Manutenção",
    ticketMedioDefault: 200,
    taxaConversao: 0.04,
    buscasPorEstado: vol(38000),
  },
  {
    id: "limpeza-conservacao",
    nome: "Limpeza & Conservação",
    categoria: "Serviços Técnicos & Manutenção",
    ticketMedioDefault: 250,
    taxaConversao: 0.035,
    buscasPorEstado: vol(24000),
  },
  {
    id: "dedetizadora",
    nome: "Dedetizadora",
    categoria: "Serviços Técnicos & Manutenção",
    ticketMedioDefault: 350,
    taxaConversao: 0.04,
    buscasPorEstado: vol(15000),
  },

  // ── PET & ANIMAL ──────────────────────────────────────────────────────────
  {
    id: "petshop-veterinaria",
    nome: "Petshop / Clínica Veterinária",
    categoria: "Pet & Animal",
    ticketMedioDefault: 200,
    taxaConversao: 0.035,
    buscasPorEstado: vol(32000),
  },
  {
    id: "banho-tosa",
    nome: "Banho & Tosa",
    categoria: "Pet & Animal",
    ticketMedioDefault: 80,
    taxaConversao: 0.04,
    buscasPorEstado: vol(20000),
  },
  {
    id: "veterinario",
    nome: "Veterinário Autônomo",
    categoria: "Pet & Animal",
    ticketMedioDefault: 250,
    taxaConversao: 0.03,
    buscasPorEstado: vol(26000),
  },

  // ── IMÓVEIS & CONSTRUÇÃO ──────────────────────────────────────────────────
  {
    id: "imobiliaria",
    nome: "Imobiliária de Pequeno Porte",
    categoria: "Imóveis & Construção",
    ticketMedioDefault: 10000,
    taxaConversao: 0.015,
    buscasPorEstado: vol(45000),
  },
  {
    id: "construtora",
    nome: "Construtora Local",
    categoria: "Imóveis & Construção",
    ticketMedioDefault: 50000,
    taxaConversao: 0.01,
    buscasPorEstado: vol(26000),
  },
  {
    id: "corretor-autonomo",
    nome: "Corretor Autônomo",
    categoria: "Imóveis & Construção",
    ticketMedioDefault: 7000,
    taxaConversao: 0.018,
    buscasPorEstado: vol(18000),
  },
  {
    id: "decorador-paisagista",
    nome: "Decorador / Paisagista",
    categoria: "Imóveis & Construção",
    ticketMedioDefault: 2000,
    taxaConversao: 0.02,
    buscasPorEstado: vol(15000),
  },

  // ── CRIATIVOS & COMUNICAÇÃO ───────────────────────────────────────────────
  {
    id: "fotografo",
    nome: "Fotógrafo",
    categoria: "Criativos & Comunicação",
    ticketMedioDefault: 1500,
    taxaConversao: 0.022,
    buscasPorEstado: vol(21000),
  },
  {
    id: "videomaker",
    nome: "Videomaker / Produtora",
    categoria: "Criativos & Comunicação",
    ticketMedioDefault: 3000,
    taxaConversao: 0.018,
    buscasPorEstado: vol(9000),
  },
  {
    id: "designer-grafico",
    nome: "Designer Gráfico",
    categoria: "Criativos & Comunicação",
    ticketMedioDefault: 1200,
    taxaConversao: 0.02,
    buscasPorEstado: vol(13000),
  },
  {
    id: "agencia-marketing",
    nome: "Agência de Marketing",
    categoria: "Criativos & Comunicação",
    ticketMedioDefault: 2500,
    taxaConversao: 0.018,
    buscasPorEstado: vol(16000),
  },

  // ── COMÉRCIO LOCAL ────────────────────────────────────────────────────────
  {
    id: "loja-roupas",
    nome: "Loja de Roupas & Acessórios",
    categoria: "Comércio Local",
    ticketMedioDefault: 200,
    taxaConversao: 0.03,
    buscasPorEstado: vol(48000),
  },
  {
    id: "otica",
    nome: "Ótica",
    categoria: "Comércio Local",
    ticketMedioDefault: 500,
    taxaConversao: 0.03,
    buscasPorEstado: vol(24000),
  },
  {
    id: "floricultura",
    nome: "Floricultura",
    categoria: "Comércio Local",
    ticketMedioDefault: 120,
    taxaConversao: 0.035,
    buscasPorEstado: vol(20000),
  },
  {
    id: "papelaria-livraria",
    nome: "Papelaria / Livraria Independente",
    categoria: "Comércio Local",
    ticketMedioDefault: 60,
    taxaConversao: 0.03,
    buscasPorEstado: vol(13000),
  },
  {
    id: "loja-presentes",
    nome: "Loja de Presentes & Artesanato",
    categoria: "Comércio Local",
    ticketMedioDefault: 100,
    taxaConversao: 0.03,
    buscasPorEstado: vol(17000),
  },

  // ── EVENTOS & ENTRETENIMENTO ──────────────────────────────────────────────
  {
    id: "espaco-festas",
    nome: "Espaço de Festas & Eventos",
    categoria: "Eventos & Entretenimento",
    ticketMedioDefault: 2000,
    taxaConversao: 0.022,
    buscasPorEstado: vol(20000),
  },
  {
    id: "dj-banda",
    nome: "DJ & Banda",
    categoria: "Eventos & Entretenimento",
    ticketMedioDefault: 1000,
    taxaConversao: 0.025,
    buscasPorEstado: vol(13000),
  },
  {
    id: "cerimonialista",
    nome: "Cerimonialista / Wedding Planner",
    categoria: "Eventos & Entretenimento",
    ticketMedioDefault: 3000,
    taxaConversao: 0.02,
    buscasPorEstado: vol(10000),
  },
  {
    id: "fotografo-eventos",
    nome: "Fotógrafo de Eventos",
    categoria: "Eventos & Entretenimento",
    ticketMedioDefault: 1800,
    taxaConversao: 0.022,
    buscasPorEstado: vol(12000),
  },
];

/** Retorna os dados de um segmento pelo ID */
export function getSegmentoDados(id: string): SegmentoDados | undefined {
  return segmentosDados.find((s) => s.id === id);
}

/**
 * Calcula o potencial de visibilidade e receita perdida.
 *
 * Etapa 1 — alcance: quantas pessoas que buscam poderiam chegar ao site
 *   (taxa de clique/alcance típica de um site bem posicionado)
 * Etapa 2 — conversão real: apenas 10% desses visitantes viram clientes
 *   (reflete que nem todo contato fecha negócio)
 *
 * @param buscas  - buscas mensais no estado
 * @param ticket  - ticket médio em R$
 * @param taxa    - fração de buscadores que chegariam ao site (ex: 0.025)
 */
export function calcularPotencial(
  buscas: number,
  ticket: number,
  taxa: number
) {
  const leadsAlcancados = Math.round(buscas * taxa);   // visitantes potenciais
  const clientesConvertidos = Math.round(leadsAlcancados * 0.1); // 10% convertem
  const receitaEstimada = clientesConvertidos * ticket;
  return { leadsAlcancados, clientesConvertidos, receitaEstimada };
}
