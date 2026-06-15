// Static preview templates — full landing pages rendered in iframes
// 3 visual styles × 6 segment families = 18 distinct designs

export interface ContentVars {
  nome: string;
  tagline: string;
  subtitulo: string;
  servicos: string[];
  cta: string;
  emoji: string;
}

export interface ColorSet {
  // bg: page background
  bg: string;
  // card: card/surface background
  card: string;
  // border: card border
  border: string;
  // accent: primary accent (buttons, highlights)
  accent: string;
  // accentText: text on accent bg
  accentText: string;
  // accent2: secondary accent / gradient end
  accent2: string;
  // text: main body text
  text: string;
  // muted: secondary/muted text
  muted: string;
  // heading: heading text
  heading: string;
}

// ─── Per-family color palettes (3 sets per family) ────────────────────────────

export type FamilyId = 'saude' | 'profissional' | 'beleza' | 'alimentacao' | 'educacao' | 'servicos';

export const familyColors: Record<FamilyId, [ColorSet, ColorSet, ColorSet]> = {
  saude: [
    // Style 1 — Dark Teal Premium
    { bg:'#071c2c', card:'rgba(0,212,170,.05)', border:'rgba(0,212,170,.15)', accent:'#00D4AA', accentText:'#071c2c', accent2:'#00A382', text:'#ffffff', muted:'rgba(255,255,255,.55)', heading:'#ffffff' },
    // Style 2 — Clean Blue Medical
    { bg:'#ffffff', card:'#F0F7FF', border:'#DBEAFE', accent:'#2563EB', accentText:'#ffffff', accent2:'#1D4ED8', text:'#1E293B', muted:'#64748B', heading:'#0F172A' },
    // Style 3 — Forest Green Wellness
    { bg:'#0D2818', card:'rgba(16,185,129,.07)', border:'rgba(16,185,129,.18)', accent:'#10B981', accentText:'#0D2818', accent2:'#059669', text:'#ffffff', muted:'rgba(255,255,255,.55)', heading:'#ffffff' },
  ],
  profissional: [
    // Style 1 — Dark Gold Authority
    { bg:'#0a0c14', card:'rgba(184,151,58,.06)', border:'rgba(184,151,58,.18)', accent:'#B8973A', accentText:'#0a0c14', accent2:'#D4AF37', text:'#ffffff', muted:'rgba(255,255,255,.5)', heading:'#ffffff' },
    // Style 2 — Clean Navy Institutional
    { bg:'#ffffff', card:'#F0F4FF', border:'#C7D2FE', accent:'#3730A3', accentText:'#ffffff', accent2:'#4338CA', text:'#1E293B', muted:'#64748B', heading:'#0F172A' },
    // Style 3 — Dark Slate Prestige
    { bg:'#0f172a', card:'rgba(99,102,241,.07)', border:'rgba(99,102,241,.18)', accent:'#818CF8', accentText:'#0f172a', accent2:'#A5B4FC', text:'#ffffff', muted:'rgba(255,255,255,.5)', heading:'#ffffff' },
  ],
  beleza: [
    // Style 1 — Dark Rose Glamour
    { bg:'#12050e', card:'rgba(233,30,140,.06)', border:'rgba(233,30,140,.18)', accent:'#E91E8C', accentText:'#ffffff', accent2:'#B71C8B', text:'#ffffff', muted:'rgba(255,255,255,.5)', heading:'#ffffff' },
    // Style 2 — Cream Gold Luxe
    { bg:'#FDFAF4', card:'#FFFBEB', border:'#FDE68A', accent:'#D97706', accentText:'#ffffff', accent2:'#B45309', text:'#1C1917', muted:'#78716C', heading:'#1C1917' },
    // Style 3 — Deep Purple Chic
    { bg:'#1a0535', card:'rgba(168,85,247,.07)', border:'rgba(168,85,247,.18)', accent:'#A855F7', accentText:'#ffffff', accent2:'#9333EA', text:'#ffffff', muted:'rgba(255,255,255,.5)', heading:'#ffffff' },
  ],
  alimentacao: [
    // Style 1 — Dark Fire Restaurant
    { bg:'#140800', card:'rgba(251,146,60,.06)', border:'rgba(251,146,60,.18)', accent:'#FB923C', accentText:'#140800', accent2:'#EA580C', text:'#ffffff', muted:'rgba(255,255,255,.5)', heading:'#ffffff' },
    // Style 2 — Warm Cream Bistro
    { bg:'#FAF6F0', card:'#FFFFFF', border:'#E8D5B7', accent:'#C4482D', accentText:'#ffffff', accent2:'#9A3412', text:'#2C1810', muted:'#92400E', heading:'#1C0A00' },
    // Style 3 — Dark Green Organic
    { bg:'#0a1a0f', card:'rgba(34,197,94,.06)', border:'rgba(34,197,94,.18)', accent:'#22C55E', accentText:'#0a1a0f', accent2:'#16A34A', text:'#ffffff', muted:'rgba(255,255,255,.5)', heading:'#ffffff' },
  ],
  educacao: [
    // Style 1 — Dark Indigo Tech
    { bg:'#0f0b2d', card:'rgba(99,102,241,.07)', border:'rgba(99,102,241,.18)', accent:'#6366F1', accentText:'#ffffff', accent2:'#4F46E5', text:'#ffffff', muted:'rgba(255,255,255,.5)', heading:'#ffffff' },
    // Style 2 — Clean Sky Academic
    { bg:'#F0F9FF', card:'#FFFFFF', border:'#BAE6FD', accent:'#0284C7', accentText:'#ffffff', accent2:'#0369A1', text:'#0C4A6E', muted:'#0369A1', heading:'#082F49' },
    // Style 3 — Dark Lime Digital
    { bg:'#111827', card:'rgba(132,204,22,.07)', border:'rgba(132,204,22,.18)', accent:'#84CC16', accentText:'#111827', accent2:'#65A30D', text:'#ffffff', muted:'rgba(255,255,255,.5)', heading:'#ffffff' },
  ],
  servicos: [
    // Style 1 — Dark Orange Pro
    { bg:'#0d1117', card:'rgba(249,115,22,.06)', border:'rgba(249,115,22,.18)', accent:'#F97316', accentText:'#0d1117', accent2:'#EA580C', text:'#ffffff', muted:'rgba(255,255,255,.5)', heading:'#ffffff' },
    // Style 2 — Clean Blue Trust
    { bg:'#F0F4FF', card:'#FFFFFF', border:'#BFDBFE', accent:'#1D4ED8', accentText:'#ffffff', accent2:'#1E40AF', text:'#1E293B', muted:'#475569', heading:'#0F172A' },
    // Style 3 — Dark Cyan Technical
    { bg:'#071e26', card:'rgba(6,182,212,.06)', border:'rgba(6,182,212,.18)', accent:'#06B6D4', accentText:'#071e26', accent2:'#0891B2', text:'#ffffff', muted:'rgba(255,255,255,.5)', heading:'#ffffff' },
  ],
};

export const segmentoFamily: Record<string, FamilyId> = {
  'clinica-medica':'saude','clinica-odontologica':'saude','psicologo':'saude',
  'fisioterapeuta':'saude','clinica-estetica':'beleza','pilates-yoga':'saude',
  'academia':'saude','personal-trainer':'saude','nutricionista':'alimentacao',
  'salao-barbearia':'beleza','depilacao-estetica':'beleza','manicure-nail':'beleza',
  'micropigmentacao':'beleza','advogado':'profissional','contador':'profissional',
  'arquiteto-designer':'profissional','engenheiro':'profissional',
  'corretor-imoveis':'profissional','consultor-financeiro':'profissional','coach':'profissional',
  'restaurante':'alimentacao','cafeteria':'alimentacao','confeitaria':'alimentacao',
  'marmitaria':'alimentacao','buffet':'alimentacao',
  'escola-idiomas':'educacao','escola-artes':'educacao','cursinho':'educacao',
  'professor-tutor':'educacao','infoprodutor':'educacao',
  'eletricista-encanador':'servicos','ar-condicionado':'servicos',
  'assistencia-tecnica':'servicos','limpeza-conservacao':'servicos','dedetizadora':'servicos',
  'petshop-veterinaria':'saude','banho-tosa':'beleza','veterinario':'saude',
  'imobiliaria':'profissional','construtora':'profissional',
  'corretor-autonomo':'profissional','decorador-paisagista':'profissional',
  'fotografo':'beleza','videomaker':'beleza','designer-grafico':'beleza',
  'agencia-marketing':'profissional','loja-roupas':'beleza','otica':'saude',
  'floricultura':'alimentacao','papelaria-livraria':'educacao',
  'loja-presentes':'beleza','espaco-festas':'profissional',
  'dj-banda':'beleza','cerimonialista':'profissional','fotografo-eventos':'beleza',
};

function getColors(segmentoId: string, styleIdx: number): ColorSet {
  const family: FamilyId = segmentoFamily[segmentoId] ?? 'saude';
  return familyColors[family][styleIdx];
}

// ─── Shared CSS reset ─────────────────────────────────────────────────────────

function reset() {
  return `*{box-sizing:border-box;margin:0;padding:0}html{font-size:16px;scroll-behavior:smooth}body{font-family:'Segoe UI',system-ui,-apple-system,sans-serif;-webkit-font-smoothing:antialiased}a{text-decoration:none}button{cursor:pointer;font-family:inherit;border:none}ul{list-style:none}`;
}

// ─── STYLE 1 — Dark Premium (Glassmorphism + Glow) ───────────────────────────

function renderStyle1(v: ContentVars, c: ColorSet): string {
  const s = v.servicos.slice(0, 6);
  const icons = ['✦','◆','●','★','▲','❋'];
  return `<!DOCTYPE html>
<html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=1200">
<style>
${reset()}
body{background:${c.bg};color:${c.text}}
nav{display:flex;justify-content:space-between;align-items:center;padding:1.1rem 3rem;background:rgba(0,0,0,.3);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border-bottom:1px solid ${c.border};position:sticky;top:0;z-index:99}
.logo{font-size:18px;font-weight:800;letter-spacing:-.02em;background:linear-gradient(135deg,${c.accent},${c.accent2});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.nav-links{display:flex;gap:2.5rem}
.nav-links a{font-size:13.5px;color:${c.muted};letter-spacing:.02em}
.nav-cta{padding:9px 22px;background:${c.accent};color:${c.accentText};border-radius:8px;font-size:13.5px;font-weight:700}
.hero{padding:6rem 3rem 5rem;text-align:center;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,${c.accent}20 0%,transparent 65%);top:-280px;left:50%;transform:translateX(-50%);pointer-events:none}
.hero::after{content:'';position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,${c.accent2}12 0%,transparent 65%);bottom:-200px;right:-100px;pointer-events:none}
.hero-badge{position:relative;z-index:1;display:inline-flex;align-items:center;gap:8px;padding:7px 18px;background:${c.accent}18;border:1px solid ${c.accent}35;color:${c.accent};font-size:12px;letter-spacing:.14em;text-transform:uppercase;border-radius:50px;margin-bottom:1.8rem;font-weight:600}
.hero h1{position:relative;z-index:1;font-size:58px;font-weight:900;line-height:1.06;margin-bottom:1.4rem;letter-spacing:-.04em;color:${c.heading}}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,${c.accent},${c.accent2});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero p{position:relative;z-index:1;font-size:17px;color:${c.muted};max-width:540px;margin:0 auto 2.8rem;line-height:1.75}
.hero-btns{position:relative;z-index:1;display:flex;justify-content:center;gap:14px;flex-wrap:wrap}
.btn-p{padding:16px 36px;background:${c.accent};color:${c.accentText};border-radius:12px;font-size:15px;font-weight:800;letter-spacing:.02em;box-shadow:0 8px 32px ${c.accent}40}
.btn-s{padding:16px 30px;background:${c.card};color:${c.heading};border:1px solid ${c.border};border-radius:12px;font-size:15px;font-weight:600}
.hero-trust{position:relative;z-index:1;margin-top:2.5rem;display:flex;justify-content:center;align-items:center;gap:24px;flex-wrap:wrap}
.trust-item{display:flex;align-items:center;gap:7px;font-size:13px;color:${c.muted}}
.trust-dot{width:6px;height:6px;border-radius:50%;background:${c.accent}}
.stats{display:grid;grid-template-columns:repeat(4,1fr);background:${c.card};border-top:1px solid ${c.border};border-bottom:1px solid ${c.border}}
.stat{padding:2rem 1.5rem;text-align:center;border-right:1px solid ${c.border}}
.stat:last-child{border:none}
.stat-n{font-size:38px;font-weight:900;background:linear-gradient(135deg,${c.accent},${c.accent2});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.stat-l{font-size:11.5px;color:${c.muted};text-transform:uppercase;letter-spacing:.1em;margin-top:5px}
.section{padding:5.5rem 3rem}
.sec-header{text-align:center;margin-bottom:3.5rem}
.sec-badge{display:inline-block;padding:4px 13px;background:${c.accent}18;color:${c.accent};font-size:11px;letter-spacing:.14em;text-transform:uppercase;border-radius:4px;margin-bottom:1rem;font-weight:700}
.sec-title{font-size:36px;font-weight:800;color:${c.heading};letter-spacing:-.03em}
.sec-sub{font-size:15px;color:${c.muted};margin-top:.7rem}
.srv-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.srv-card{background:${c.card};border:1px solid ${c.border};border-radius:18px;padding:2.2rem;transition:all .3s}
.srv-card:hover{border-color:${c.accent}60;transform:translateY(-4px);box-shadow:0 20px 60px ${c.accent}15}
.srv-icon{width:52px;height:52px;background:${c.accent}20;border:1px solid ${c.accent}30;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:1.3rem;color:${c.accent}}
.srv-card h3{font-size:17px;font-weight:700;color:${c.heading};margin-bottom:.6rem}
.srv-card p{font-size:13.5px;color:${c.muted};line-height:1.7}
.srv-arrow{display:inline-flex;align-items:center;gap:5px;font-size:12.5px;color:${c.accent};font-weight:600;margin-top:1.2rem}
.how-section{padding:5.5rem 3rem;background:${c.card}}
.steps-row{display:grid;grid-template-columns:repeat(3,1fr);gap:3rem;position:relative}
.steps-row::before{content:'';position:absolute;top:28px;left:calc(16.7%);right:calc(16.7%);height:1px;background:linear-gradient(90deg,transparent 0%,${c.accent}50 20%,${c.accent}50 80%,transparent 100%)}
.step-item{text-align:center;position:relative}
.step-num{width:56px;height:56px;border-radius:50%;background:${c.accent};color:${c.accentText};font-size:20px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 1.3rem;position:relative;z-index:1;box-shadow:0 0 0 8px ${c.bg},0 0 0 9px ${c.accent}30}
.step-item h3{font-size:16px;font-weight:700;color:${c.heading};margin-bottom:.4rem}
.step-item p{font-size:13px;color:${c.muted};line-height:1.65}
.testi-section{padding:5.5rem 3rem}
.testi-card{background:${c.card};border:1px solid ${c.border};border-radius:24px;padding:3.5rem;max-width:720px;margin:0 auto;position:relative}
.testi-card::before{content:open-quote;position:absolute;top:.5rem;left:2.8rem;font-size:90px;color:${c.accent};line-height:1;font-family:Georgia,serif;opacity:.6}
.testi-stars{display:flex;gap:4px;margin-bottom:1.2rem;color:${c.accent};font-size:18px}
.testi-text{font-size:17px;color:${c.muted};line-height:1.8;font-style:italic;margin-bottom:2rem}
.testi-author{display:flex;align-items:center;gap:14px}
.testi-av{width:48px;height:48px;border-radius:50%;background:${c.accent}25;border:2px solid ${c.accent}40;display:flex;align-items:center;justify-content:center;font-size:20px}
.testi-name{font-size:15px;font-weight:700;color:${c.heading}}
.testi-role{font-size:12.5px;color:${c.muted};margin-top:2px}
.cta-section{padding:6rem 3rem;background:${c.card};text-align:center;border-top:1px solid ${c.border};position:relative;overflow:hidden}
.cta-section::before{content:'';position:absolute;width:800px;height:400px;border-radius:50%;background:radial-gradient(circle,${c.accent}15 0%,transparent 70%);top:-200px;left:50%;transform:translateX(-50%)}
.cta-section h2{position:relative;font-size:44px;font-weight:900;color:${c.heading};margin-bottom:1rem;letter-spacing:-.04em}
.cta-section h2 em{font-style:normal;background:linear-gradient(135deg,${c.accent},${c.accent2});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.cta-section p{position:relative;font-size:16px;color:${c.muted};margin-bottom:2.5rem}
.cta-btns{position:relative;display:flex;justify-content:center;gap:14px;flex-wrap:wrap}
.cta-note{position:relative;margin-top:1.5rem;font-size:12px;color:${c.muted};opacity:.7}
footer{padding:1.8rem 3rem;border-top:1px solid ${c.border};display:flex;justify-content:space-between;align-items:center;background:${c.bg}}
footer p{font-size:12.5px;color:${c.muted}}
footer .f-links{display:flex;gap:2rem}
footer .f-links a{font-size:12.5px;color:${c.muted}}
</style></head>
<body>
<nav>
  <div class="logo">${v.nome}</div>
  <div class="nav-links">
    <a href="#">Serviços</a><a href="#">Sobre nós</a><a href="#">Depoimentos</a><a href="#">Contato</a>
  </div>
  <button class="nav-cta">${v.cta}</button>
</nav>

<div class="hero">
  <div class="hero-badge"><span>${v.emoji}</span> ${v.tagline}</div>
  <h1>A escolha certa para<br><em>${v.nome}</em></h1>
  <p>${v.subtitulo}</p>
  <div class="hero-btns">
    <button class="btn-p">${v.cta}</button>
    <button class="btn-s">Conhecer serviços →</button>
  </div>
  <div class="hero-trust">
    <span class="trust-item"><span class="trust-dot"></span>Sem burocracia</span>
    <span class="trust-item"><span class="trust-dot"></span>Atendimento rápido</span>
    <span class="trust-item"><span class="trust-dot"></span>Resultados reais</span>
    <span class="trust-item"><span class="trust-dot"></span>Garantia total</span>
  </div>
</div>

<div class="stats">
  <div class="stat"><div class="stat-n">+2k</div><div class="stat-l">Clientes atendidos</div></div>
  <div class="stat"><div class="stat-n">10+</div><div class="stat-l">Anos de experiência</div></div>
  <div class="stat"><div class="stat-n">98%</div><div class="stat-l">Taxa de satisfação</div></div>
  <div class="stat"><div class="stat-n">4.9★</div><div class="stat-l">Avaliação no Google</div></div>
</div>

<div class="section">
  <div class="sec-header">
    <div class="sec-badge">Nossos serviços</div>
    <div class="sec-title">Tudo que você precisa,<br>em um só lugar</div>
    <div class="sec-sub">Soluções completas e personalizadas para o seu caso</div>
  </div>
  <div class="srv-grid">
    ${s.map((srv, i) => `
    <div class="srv-card">
      <div class="srv-icon">${icons[i]}</div>
      <h3>${srv}</h3>
      <p>Atendimento especializado com qualidade e atenção em cada detalhe do processo.</p>
      <div class="srv-arrow">Saiba mais →</div>
    </div>`).join('')}
  </div>
</div>

<div class="how-section">
  <div class="sec-header">
    <div class="sec-badge">Como funciona</div>
    <div class="sec-title">Processo simples,<br>resultado garantido</div>
  </div>
  <div class="steps-row">
    <div class="step-item">
      <div class="step-num">1</div>
      <h3>Entre em contato</h3>
      <p>Fale com nossa equipe pelo WhatsApp ou formulário. Respondemos em minutos.</p>
    </div>
    <div class="step-item">
      <div class="step-num">2</div>
      <h3>Avaliação gratuita</h3>
      <p>Analisamos sua necessidade e apresentamos a melhor solução personalizada.</p>
    </div>
    <div class="step-item">
      <div class="step-num">3</div>
      <h3>Resultados reais</h3>
      <p>Acompanhe a evolução e veja os resultados acontecendo na prática.</p>
    </div>
  </div>
</div>

<div class="testi-section">
  <div class="sec-header">
    <div class="sec-badge">Depoimentos</div>
    <div class="sec-title">O que dizem nossos clientes</div>
  </div>
  <div class="testi-card">
    <div class="testi-stars">★★★★★</div>
    <p class="testi-text">"Superou todas as minhas expectativas. O atendimento foi excepcional, o processo foi simples e os resultados foram além do que eu esperava. Recomendo de olhos fechados para qualquer pessoa que precise de ${s[0]?.toLowerCase() ?? 'nossos serviços'}."</p>
    <div class="testi-author">
      <div class="testi-av">${v.emoji}</div>
      <div>
        <div class="testi-name">Maria Silva</div>
        <div class="testi-role">Cliente há 2 anos</div>
      </div>
    </div>
  </div>
</div>

<div class="cta-section">
  <h2>Pronto para começar?<br><em>Fale com a gente agora.</em></h2>
  <p>Atendimento rápido, sem compromisso, sem burocracia.</p>
  <div class="cta-btns">
    <button class="btn-p">${v.cta}</button>
    <button class="btn-s">Ver todos os serviços</button>
  </div>
  <div class="cta-note">✓ Resposta em até 1 hora · ✓ Orçamento gratuito · ✓ Sem compromisso</div>
</div>

<footer>
  <p>© 2025 ${v.nome} · Todos os direitos reservados</p>
  <div class="f-links">
    <a href="#">Instagram</a><a href="#">WhatsApp</a><a href="#">Contato</a>
  </div>
</footer>
</body></html>`;
}

// ─── STYLE 2 — Light Clean (Modern SaaS-like) ────────────────────────────────

function renderStyle2(v: ContentVars, c: ColorSet): string {
  const s = v.servicos.slice(0, 6);
  const emojis = ['🎯','⚡','🏆','💎','🔥','✅'];
  return `<!DOCTYPE html>
<html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=1200">
<style>
${reset()}
body{background:${c.bg};color:${c.text}}
nav{display:flex;justify-content:space-between;align-items:center;padding:1.1rem 3rem;background:${c.bg};border-bottom:1px solid ${c.border};position:sticky;top:0;z-index:99}
.logo{font-size:17px;font-weight:800;color:${c.accent};letter-spacing:-.02em}
.nav-links{display:flex;gap:2.5rem}
.nav-links a{font-size:13.5px;color:${c.muted}}
.nav-cta{padding:9px 22px;background:${c.accent};color:${c.accentText};border-radius:8px;font-size:13.5px;font-weight:700}
.hero{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;padding:5rem 3rem;background:${c.card};border-bottom:1px solid ${c.border}}
.hero-badge{display:inline-flex;align-items:center;gap:7px;padding:6px 14px;background:${c.accent}15;color:${c.accent};font-size:11.5px;border-radius:6px;margin-bottom:1.4rem;font-weight:700;border:1px solid ${c.accent}25}
.hero h1{font-size:46px;font-weight:900;line-height:1.1;margin-bottom:1.2rem;letter-spacing:-.04em;color:${c.heading}}
.hero h1 span{color:${c.accent}}
.hero p{font-size:16px;color:${c.muted};line-height:1.75;margin-bottom:2.2rem;max-width:440px}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap}
.btn-p{padding:14px 32px;background:${c.accent};color:${c.accentText};border-radius:10px;font-size:15px;font-weight:700;box-shadow:0 4px 20px ${c.accent}35}
.btn-s{padding:14px 24px;background:transparent;color:${c.accent};border:2px solid ${c.accent}40;border-radius:10px;font-size:15px;font-weight:600}
.hero-check{display:flex;flex-direction:column;gap:.7rem;margin-top:2rem}
.check-item{display:flex;align-items:center;gap:9px;font-size:13.5px;color:${c.muted}}
.check-icon{width:20px;height:20px;border-radius:50%;background:${c.accent};display:flex;align-items:center;justify-content:center;font-size:10px;color:${c.accentText};flex-shrink:0;font-weight:700}
.hero-visual{background:${c.bg};border:1px solid ${c.border};border-radius:24px;padding:2.5rem;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1.5rem;min-height:380px;position:relative;overflow:hidden}
.hero-visual::before{content:'';position:absolute;width:300px;height:300px;border-radius:50%;background:${c.accent}08;top:-80px;right:-80px}
.vis-emoji{font-size:88px;filter:drop-shadow(0 8px 24px ${c.accent}40)}
.vis-name{font-size:16px;font-weight:700;color:${c.accent};text-align:center}
.vis-tagline{font-size:12.5px;color:${c.muted};text-align:center}
.vis-badge{padding:6px 16px;background:${c.accent};color:${c.accentText};border-radius:50px;font-size:12px;font-weight:700}
.stats-bar{display:grid;grid-template-columns:repeat(4,1fr);background:${c.accent};padding:2rem 3rem}
.s-item{text-align:center;color:${c.accentText}}
.s-n{font-size:34px;font-weight:900;margin-bottom:.2rem}
.s-l{font-size:12px;opacity:.8;text-transform:uppercase;letter-spacing:.08em}
.section{padding:5.5rem 3rem}
.sec-label{font-size:11px;font-weight:700;color:${c.accent};letter-spacing:.14em;text-transform:uppercase;margin-bottom:.6rem}
.sec-title{font-size:34px;font-weight:800;color:${c.heading};letter-spacing:-.03em;margin-bottom:.8rem}
.sec-sub{font-size:15px;color:${c.muted}}
.srv-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:3rem}
.srv-card{background:${c.card};border:1px solid ${c.border};border-radius:16px;padding:2rem;transition:all .3s}
.srv-card:hover{box-shadow:0 10px 40px rgba(0,0,0,.1);transform:translateY(-3px);border-color:${c.accent}50}
.srv-icon{font-size:32px;margin-bottom:1rem}
.srv-card h3{font-size:16px;font-weight:700;color:${c.heading};margin-bottom:.5rem}
.srv-card p{font-size:13.5px;color:${c.muted};line-height:1.65}
.tag-pill{display:inline-block;margin-top:1.2rem;padding:4px 12px;background:${c.accent}12;color:${c.accent};font-size:12px;border-radius:50px;font-weight:600}
.how-section{padding:5.5rem 3rem;background:${c.card}}
.steps-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-top:3.5rem}
.step-card{background:${c.bg};border:1px solid ${c.border};border-radius:16px;padding:2rem;position:relative}
.step-n{position:absolute;top:-16px;left:2rem;width:36px;height:36px;background:${c.accent};color:${c.accentText};border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:900}
.step-card h3{font-size:16px;font-weight:700;color:${c.heading};margin-top:.3rem;margin-bottom:.5rem}
.step-card p{font-size:13px;color:${c.muted};line-height:1.65}
.testi-section{padding:5.5rem 3rem}
.testi-inner{background:${c.card};border:1px solid ${c.border};border-radius:24px;padding:4rem 3rem;display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center}
.testi-quote h2{font-size:28px;font-weight:800;color:${c.heading};line-height:1.3;margin-bottom:1.5rem}
.testi-quote p{font-size:15px;color:${c.muted};line-height:1.75;font-style:italic}
.testi-rating{display:flex;gap:4px;font-size:20px;color:${c.accent};margin-bottom:1.2rem}
.testi-info{margin-top:2rem}
.testi-name{font-size:15px;font-weight:700;color:${c.heading}}
.testi-role{font-size:12.5px;color:${c.muted};margin-top:2px}
.testi-visuals{display:flex;flex-direction:column;gap:12px}
.t-card{background:${c.bg};border:1px solid ${c.border};border-radius:12px;padding:1.2rem 1.4rem;display:flex;align-items:center;gap:12px}
.t-emoji{width:38px;height:38px;background:${c.accent}18;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px}
.t-text{font-size:13px;color:${c.muted};line-height:1.55}
.t-name{font-size:12.5px;font-weight:700;color:${c.heading}}
.cta-section{padding:6rem 3rem;background:${c.accent};text-align:center}
.cta-section h2{font-size:40px;font-weight:900;color:${c.accentText};margin-bottom:1rem;letter-spacing:-.04em}
.cta-section p{font-size:16px;color:${c.accentText};opacity:.85;margin-bottom:2.5rem}
.btn-white{padding:16px 36px;background:${c.bg};color:${c.accent};border-radius:12px;font-size:15px;font-weight:800;box-shadow:0 8px 32px rgba(0,0,0,.25)}
.cta-note{margin-top:1.5rem;font-size:12px;color:${c.accentText};opacity:.6}
footer{padding:1.8rem 3rem;border-top:1px solid ${c.border};display:flex;justify-content:space-between;align-items:center;background:${c.card}}
footer p{font-size:12.5px;color:${c.muted}}
footer .f-links{display:flex;gap:2rem}
footer .f-links a{font-size:12.5px;color:${c.muted}}
</style></head>
<body>
<nav>
  <div class="logo">${v.nome}</div>
  <div class="nav-links">
    <a href="#">Serviços</a><a href="#">Processo</a><a href="#">Depoimentos</a><a href="#">Contato</a>
  </div>
  <button class="nav-cta">${v.cta}</button>
</nav>

<div class="hero">
  <div>
    <div class="hero-badge"><span>${v.emoji}</span> ${v.tagline}</div>
    <h1>A melhor solução para <span>${v.nome}</span></h1>
    <p>${v.subtitulo}</p>
    <div class="hero-btns">
      <button class="btn-p">${v.cta}</button>
      <button class="btn-s">Ver serviços</button>
    </div>
    <div class="hero-check">
      <div class="check-item"><div class="check-icon">✓</div>Sem taxa de adesão</div>
      <div class="check-item"><div class="check-icon">✓</div>Atendimento personalizado</div>
      <div class="check-item"><div class="check-icon">✓</div>Resultado garantido</div>
    </div>
  </div>
  <div class="hero-visual">
    <div class="vis-emoji">${v.emoji}</div>
    <div class="vis-name">${v.nome}</div>
    <div class="vis-tagline">${v.tagline}</div>
    <div class="vis-badge">${v.cta}</div>
  </div>
</div>

<div class="stats-bar">
  <div class="s-item"><div class="s-n">+2k</div><div class="s-l">Clientes</div></div>
  <div class="s-item"><div class="s-n">10+</div><div class="s-l">Anos</div></div>
  <div class="s-item"><div class="s-n">98%</div><div class="s-l">Satisfação</div></div>
  <div class="s-item"><div class="s-n">4.9★</div><div class="s-l">Google</div></div>
</div>

<div class="section">
  <div class="sec-label">Serviços</div>
  <div class="sec-title">Tudo que você precisa</div>
  <div class="sec-sub">Soluções completas e personalizadas para cada caso</div>
  <div class="srv-grid">
    ${s.map((srv, i) => `
    <div class="srv-card">
      <div class="srv-icon">${emojis[i]}</div>
      <h3>${srv}</h3>
      <p>Atendimento especializado com qualidade em cada etapa do processo.</p>
      <div class="tag-pill">Ver detalhes →</div>
    </div>`).join('')}
  </div>
</div>

<div class="how-section">
  <div class="sec-label">Como funciona</div>
  <div class="sec-title">Simples e rápido</div>
  <div class="steps-grid">
    <div class="step-card"><div class="step-n">1</div><h3>Entre em contato</h3><p>Fale conosco pelo WhatsApp ou preencha o formulário. Retornamos em minutos.</p></div>
    <div class="step-card"><div class="step-n">2</div><h3>Avaliação gratuita</h3><p>Analisamos seu caso e apresentamos a solução ideal sem compromisso.</p></div>
    <div class="step-card"><div class="step-n">3</div><h3>Resultados reais</h3><p>Acompanhe cada etapa e veja os resultados na prática com total transparência.</p></div>
  </div>
</div>

<div class="testi-section">
  <div class="testi-inner">
    <div class="testi-quote">
      <div class="testi-rating">★★★★★</div>
      <h2>"A melhor decisão que tomei foi entrar em contato"</h2>
      <p>Fui muito bem atendida desde o primeiro contato. O processo foi transparente, rápido e o resultado foi exatamente o que eu precisava. Com certeza vou indicar para todos!</p>
      <div class="testi-info">
        <div class="testi-name">Carla Mendes</div>
        <div class="testi-role">Cliente há 1 ano · Avaliou no Google</div>
      </div>
    </div>
    <div class="testi-visuals">
      <div class="t-card"><div class="t-emoji">${v.emoji}</div><div><div class="t-name">João Paulo</div><div class="t-text">Atendimento excelente. Resultados acima do esperado!</div></div></div>
      <div class="t-card"><div class="t-emoji">${v.emoji}</div><div><div class="t-name">Ana Lúcia</div><div class="t-text">Profissionalismo e cuidado em cada detalhe. Recomendo!</div></div></div>
      <div class="t-card"><div class="t-emoji">${v.emoji}</div><div><div class="t-name">Roberto S.</div><div class="t-text">Transformou completamente minha experiência. 5 estrelas!</div></div></div>
    </div>
  </div>
</div>

<div class="cta-section">
  <h2>Comece agora mesmo</h2>
  <p>Atendimento rápido · Orçamento gratuito · Sem burocracia</p>
  <button class="btn-white">${v.cta}</button>
  <div class="cta-note">✓ Resposta em até 1h · ✓ Sem compromisso · ✓ 100% gratuito</div>
</div>

<footer>
  <p>© 2025 ${v.nome} · Todos os direitos reservados</p>
  <div class="f-links">
    <a href="#">Instagram</a><a href="#">WhatsApp</a><a href="#">Privacidade</a>
  </div>
</footer>
</body></html>`;
}

// ─── STYLE 3 — Bold Gradient (High Energy, Full-Bleed) ───────────────────────

function renderStyle3(v: ContentVars, c: ColorSet): string {
  const s = v.servicos.slice(0, 6);
  return `<!DOCTYPE html>
<html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=1200">
<style>
${reset()}
body{background:${c.bg};color:${c.text}}
nav{display:flex;justify-content:space-between;align-items:center;padding:1.1rem 3rem;background:${c.card};border-bottom:1px solid ${c.border};position:sticky;top:0;z-index:99;backdrop-filter:blur(12px)}
.logo{font-size:17px;font-weight:900;color:${c.heading};text-transform:uppercase;letter-spacing:.06em}
.logo em{font-style:normal;color:${c.accent}}
.nav-links{display:flex;gap:2.5rem}
.nav-links a{font-size:13.5px;color:${c.muted}}
.nav-cta{padding:9px 22px;background:${c.accent};color:${c.accentText};border-radius:8px;font-size:13.5px;font-weight:800;text-transform:uppercase;letter-spacing:.06em}
.hero{background:linear-gradient(135deg,${c.accent} 0%,${c.accent2} 100%);padding:6rem 3rem 5rem;position:relative;overflow:hidden;text-align:center}
.hero::before{content:'';position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")}
.hero-flag{position:relative;display:inline-block;padding:6px 18px;background:rgba(255,255,255,.2);color:#fff;font-size:12px;letter-spacing:.16em;text-transform:uppercase;border-radius:4px;margin-bottom:1.8rem;font-weight:800;border:1px solid rgba(255,255,255,.3)}
.hero h1{position:relative;font-size:64px;font-weight:900;line-height:1.04;color:#fff;margin-bottom:1.4rem;letter-spacing:-.05em;text-shadow:0 4px 32px rgba(0,0,0,.2)}
.hero h1 br+span{opacity:.9}
.hero p{position:relative;font-size:17px;color:rgba(255,255,255,.85);max-width:540px;margin:0 auto 3rem;line-height:1.75}
.hero-btns{position:relative;display:flex;justify-content:center;gap:14px;flex-wrap:wrap}
.btn-white{padding:17px 40px;background:#fff;color:${c.accent};border-radius:12px;font-size:15px;font-weight:900;box-shadow:0 10px 40px rgba(0,0,0,.25);letter-spacing:.02em}
.btn-outline{padding:17px 32px;background:transparent;color:#fff;border:2px solid rgba(255,255,255,.5);border-radius:12px;font-size:15px;font-weight:600}
.hero-badges{position:relative;margin-top:3rem;display:flex;justify-content:center;gap:10px;flex-wrap:wrap}
.hb{display:flex;align-items:center;gap:7px;padding:8px 18px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.25);border-radius:50px;color:#fff;font-size:13px;font-weight:600;backdrop-filter:blur(8px)}
.stats-row{display:grid;grid-template-columns:repeat(4,1fr);background:${c.card}}
.stat{padding:2.2rem 1.5rem;text-align:center;border-right:1px solid ${c.border};position:relative}
.stat:last-child{border:none}
.stat-n{font-size:40px;font-weight:900;color:${c.accent}}
.stat-l{font-size:11.5px;color:${c.muted};text-transform:uppercase;letter-spacing:.1em;margin-top:4px}
.section{padding:5.5rem 3rem}
.sec-header-center{text-align:center;margin-bottom:3.5rem}
.sec-eyebrow{font-size:11px;font-weight:800;color:${c.accent};letter-spacing:.18em;text-transform:uppercase;margin-bottom:.8rem}
.sec-h{font-size:38px;font-weight:900;color:${c.heading};letter-spacing:-.04em}
.sec-p{font-size:15px;color:${c.muted};margin-top:.8rem}
.srv-grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.srv-item{display:flex;gap:16px;align-items:flex-start;padding:1.8rem;background:${c.card};border:1px solid ${c.border};border-radius:14px;transition:all .3s}
.srv-item:hover{border-color:${c.accent}50;box-shadow:0 8px 32px ${c.accent}15}
.si-num{width:44px;height:44px;border-radius:12px;background:${c.accent};color:${c.accentText};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;flex-shrink:0}
.si-content h3{font-size:16px;font-weight:700;color:${c.heading};margin-bottom:.35rem}
.si-content p{font-size:13px;color:${c.muted};line-height:1.65}
.si-tag{display:inline-block;margin-top:.8rem;font-size:12px;color:${c.accent};font-weight:600}
.diff-section{padding:5.5rem 3rem;background:${c.card}}
.diff-grid{display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center;margin-top:3rem}
.diff-list{display:flex;flex-direction:column;gap:1.4rem}
.diff-item{display:flex;align-items:flex-start;gap:14px;padding:1.4rem;background:${c.bg};border:1px solid ${c.border};border-radius:14px}
.di-icon{width:42px;height:42px;border-radius:12px;background:${c.accent}20;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0}
.di-t{font-size:15px;font-weight:700;color:${c.heading};margin-bottom:.25rem}
.di-p{font-size:13px;color:${c.muted};line-height:1.6}
.diff-cta{background:linear-gradient(135deg,${c.accent} 0%,${c.accent2} 100%);border-radius:24px;padding:3.5rem;text-align:center;color:#fff}
.diff-cta h3{font-size:28px;font-weight:900;margin-bottom:.8rem;letter-spacing:-.03em}
.diff-cta p{font-size:14px;opacity:.85;margin-bottom:2rem;line-height:1.7}
.diff-cta-btn{padding:15px 34px;background:#fff;color:${c.accent};border-radius:10px;font-size:15px;font-weight:900}
.cta-strip{background:linear-gradient(135deg,${c.accent} 0%,${c.accent2} 100%);padding:5rem 3rem;text-align:center;position:relative;overflow:hidden}
.cta-strip::before{content:'${v.emoji}';position:absolute;font-size:200px;opacity:.07;right:-30px;top:-30px;line-height:1}
.cta-strip h2{position:relative;font-size:46px;font-weight:900;color:#fff;margin-bottom:1rem;letter-spacing:-.05em}
.cta-strip p{position:relative;font-size:16px;color:rgba(255,255,255,.8);margin-bottom:2.5rem}
.cta-strip-btns{position:relative;display:flex;justify-content:center;gap:14px;flex-wrap:wrap}
.cta-note{position:relative;margin-top:1.5rem;font-size:12px;color:rgba(255,255,255,.5)}
footer{padding:2rem 3rem;border-top:1px solid ${c.border};display:flex;justify-content:space-between;align-items:center;background:${c.bg}}
footer p{font-size:12.5px;color:${c.muted}}
footer .f-links{display:flex;gap:2rem}
footer .f-links a{font-size:12.5px;color:${c.muted}}
</style></head>
<body>
<nav>
  <div class="logo">${v.nome.split(' ')[0]}<em>${v.nome.includes(' ') ? ' '+v.nome.split(' ').slice(1).join(' ') : ''}</em></div>
  <div class="nav-links">
    <a href="#">Serviços</a><a href="#">Sobre</a><a href="#">Depoimentos</a><a href="#">Contato</a>
  </div>
  <button class="nav-cta">${v.cta}</button>
</nav>

<div class="hero">
  <div class="hero-flag">${v.emoji} ${v.tagline}</div>
  <h1>${v.nome}<br><span>começa aqui</span></h1>
  <p>${v.subtitulo}</p>
  <div class="hero-btns">
    <button class="btn-white">${v.cta}</button>
    <button class="btn-outline">Saiba mais</button>
  </div>
  <div class="hero-badges">
    <div class="hb">✓ Sem compromisso</div>
    <div class="hb">✓ Atendimento rápido</div>
    <div class="hb">✓ Resultados reais</div>
  </div>
</div>

<div class="stats-row">
  <div class="stat"><div class="stat-n">+2k</div><div class="stat-l">Clientes</div></div>
  <div class="stat"><div class="stat-n">10+</div><div class="stat-l">Anos</div></div>
  <div class="stat"><div class="stat-n">98%</div><div class="stat-l">Satisfação</div></div>
  <div class="stat"><div class="stat-n">4.9★</div><div class="stat-l">Google</div></div>
</div>

<div class="section">
  <div class="sec-header-center">
    <div class="sec-eyebrow">Nossos serviços</div>
    <div class="sec-h">Tudo que você precisa,<br>em um só lugar</div>
    <div class="sec-p">Soluções completas para o seu caso</div>
  </div>
  <div class="srv-grid-2">
    ${s.map((srv, i) => `
    <div class="srv-item">
      <div class="si-num">${i + 1}</div>
      <div class="si-content">
        <h3>${srv}</h3>
        <p>Atendimento especializado com qualidade e atenção em cada detalhe.</p>
        <div class="si-tag">Saiba mais →</div>
      </div>
    </div>`).join('')}
  </div>
</div>

<div class="diff-section">
  <div class="sec-header-center">
    <div class="sec-eyebrow">Por que nos escolher</div>
    <div class="sec-h">O que nos torna diferentes</div>
  </div>
  <div class="diff-grid">
    <div class="diff-list">
      <div class="diff-item"><div class="di-icon">⚡</div><div><div class="di-t">Atendimento ágil</div><div class="di-p">Respondemos em menos de 1 hora e resolvemos no menor tempo possível.</div></div></div>
      <div class="diff-item"><div class="di-icon">🏆</div><div><div class="di-t">Qualidade comprovada</div><div class="di-p">Mais de 2.000 clientes satisfeitos e avaliação 4.9 no Google.</div></div></div>
      <div class="diff-item"><div class="di-icon">💎</div><div><div class="di-t">Preço justo e transparente</div><div class="di-p">Sem surpresas, sem taxas escondidas. Orçamento gratuito sempre.</div></div></div>
    </div>
    <div class="diff-cta">
      <h3>Pronto para começar?</h3>
      <p>Entre em contato agora e receba uma avaliação gratuita sem compromisso. Nossa equipe está pronta para te atender.</p>
      <button class="diff-cta-btn">${v.cta}</button>
    </div>
  </div>
</div>

<div class="cta-strip">
  <h2>Não espere mais.<br>Fale com a gente.</h2>
  <p>Atendimento rápido · Orçamento gratuito · Sem compromisso</p>
  <div class="cta-strip-btns">
    <button class="btn-white">${v.cta}</button>
    <button class="btn-outline">Ver serviços</button>
  </div>
  <div class="cta-note">✓ Resposta em até 1h · ✓ Sem taxa · ✓ 100% gratuito</div>
</div>

<footer>
  <p>© 2025 ${v.nome} · Todos os direitos reservados</p>
  <div class="f-links">
    <a href="#">Instagram</a><a href="#">WhatsApp</a><a href="#">Contato</a>
  </div>
</footer>
</body></html>`;
}

// ─── Main export ─────────────────────────────────────────────────────────────

export const STYLE_NAMES = ['Dark Premium', 'Clean Modern', 'Bold Gradient'];
export const STYLE_DESCS = [
  'Design escuro com glow e glassmorphism — elegância e impacto',
  'Layout clean e luminoso — moderno e profissional',
  'Gradiente bold e tipografia forte — energia e conversão',
];

export function getTemplateHtml(styleIdx: 0 | 1 | 2, segmentoId: string, v: ContentVars): string {
  const c = getColors(segmentoId, styleIdx);
  if (styleIdx === 0) return renderStyle1(v, c);
  if (styleIdx === 1) return renderStyle2(v, c);
  return renderStyle3(v, c);
}
