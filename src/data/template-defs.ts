// Template definitions — each render function returns a full, standalone HTML document
// rendered inside an iframe for complete CSS isolation.

export interface TemplateVars {
  nome: string;
  tagline: string;
  subtitulo: string;
  servicos: string[];
  cta: string;
  cor1: string;       // primary (hero bg, buttons, main)
  cor2: string;       // accent (headings highlights, icons)
  corFundo: string;   // page background
  corTexto: string;   // body text
  cor1Text: string;   // text on cor1 bg (usually white or dark)
  emoji: string;      // decorative
}

export interface TemplateStyle {
  id: string;
  nome: string;
  descricao: string;
  defaultColors: Pick<TemplateVars, 'cor1' | 'cor2' | 'corFundo' | 'corTexto' | 'cor1Text'>;
  render: (v: TemplateVars) => string;
}

export interface TemplateFamily {
  id: string;
  styles: TemplateStyle[];
}

// ─── Utility ───────────────────────────────────────────────────────────────

function srv(list: string[], max = 6) {
  return list.slice(0, max);
}

function base(): string {
  return `*{box-sizing:border-box;margin:0;padding:0}body{font-family:'Segoe UI',system-ui,-apple-system,sans-serif;-webkit-font-smoothing:antialiased}a{text-decoration:none}button{cursor:pointer;font-family:inherit}`;
}

// ─── FAMÍLIA: SAÚDE ─────────────────────────────────────────────────────────
// Clínicas, psicólogos, fisioterapeutas, estéticas, pilates, academias

const saude: TemplateFamily = {
  id: 'saude',
  styles: [
    {
      id: '1',
      nome: 'Luxury Clinic',
      descricao: 'Elegância premium — verde escuro + creme',
      defaultColors: { cor1: '#2B4A3F', cor2: '#7d9990', corFundo: '#FAF8F4', corTexto: '#1a2e2a', cor1Text: '#ffffff' },
      render: (v) => `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><style>
${base()}
body{background:${v.corFundo};color:${v.corTexto}}
nav{display:flex;justify-content:space-between;align-items:center;padding:1.1rem 2rem;background:${v.corFundo};border-bottom:1px solid rgba(0,0,0,.07)}
.logo{font-size:15px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:${v.cor1}}
nav ul{display:flex;gap:1.4rem;list-style:none}
nav a{font-size:11.5px;color:${v.cor2};letter-spacing:.05em;text-transform:uppercase}
.hero{display:grid;grid-template-columns:1fr 1fr;min-height:400px}
.hl{padding:3.5rem 2.5rem;display:flex;flex-direction:column;justify-content:center;background:${v.corFundo}}
.hr{background:${v.cor1};display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.hr::before{content:'';position:absolute;width:260px;height:260px;border-radius:50%;border:1px solid rgba(255,255,255,.1);top:-70px;right:-60px}
.hr::after{content:'';position:absolute;width:180px;height:180px;border-radius:50%;border:1px solid rgba(255,255,255,.07);bottom:-50px;left:-30px}
.viz{width:150px;height:190px;background:rgba(255,255,255,.09);border-radius:90px 90px 0 0;border:1px solid rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;font-size:52px;position:relative;z-index:1}
.tg{font-size:10.5px;letter-spacing:.15em;text-transform:uppercase;color:${v.cor2};margin-bottom:.7rem}
h1{font-size:30px;font-weight:300;line-height:1.28;color:${v.cor1};margin-bottom:.7rem}
h1 strong{font-weight:700;display:block}
.sub{font-size:13.5px;color:rgba(0,0,0,.5);line-height:1.75;margin-bottom:1.7rem;max-width:300px}
.btn{padding:11px 22px;background:${v.cor1};color:${v.cor1Text};border:none;border-radius:3px;font-size:13px;font-weight:600;letter-spacing:.04em}
.stats{display:grid;grid-template-columns:repeat(3,1fr);background:${v.cor1}}
.st{padding:1.1rem;text-align:center;border-right:1px solid rgba(255,255,255,.1)}
.st:last-child{border:none}
.stn{font-size:22px;font-weight:300;color:${v.cor1Text}}
.stl{font-size:10px;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.08em;margin-top:2px}
.sec{padding:2.5rem}
.sl{font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:${v.cor2};margin-bottom:.3rem}
.st2{font-size:19px;font-weight:300;color:${v.cor1};margin-bottom:1.6rem}
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.card{padding:1.3rem;background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:5px}
.ci{font-size:18px;margin-bottom:.5rem}
.card h3{font-size:13px;font-weight:700;color:${v.cor1};margin-bottom:.25rem}
.card p{font-size:11.5px;color:rgba(0,0,0,.45);line-height:1.6}
</style></head><body>
<nav><div class="logo">${v.nome}</div><ul><li><a>Serviços</a></li><li><a>Equipe</a></li><li><a>Contato</a></li></ul></nav>
<div class="hero">
  <div class="hl">
    <div class="tg">${v.tagline}</div>
    <h1>${v.subtitulo.split(',')[0] || v.subtitulo} <strong>${v.subtitulo.split(',')[1] || ''}</strong></h1>
    <p class="sub">${v.subtitulo}</p>
    <button class="btn">${v.cta}</button>
  </div>
  <div class="hr"><div class="viz">${v.emoji}</div></div>
</div>
<div class="stats">
  <div class="st"><div class="stn">+2k</div><div class="stl">Atendidos</div></div>
  <div class="st"><div class="stn">8+</div><div class="stl">Especialidades</div></div>
  <div class="st"><div class="stn">98%</div><div class="stl">Satisfação</div></div>
</div>
<div class="sec">
  <div class="sl">O que oferecemos</div>
  <div class="st2">Nossos serviços</div>
  <div class="cards">
    ${srv(v.servicos, 3).map((s, i) => `<div class="card"><div class="ci">${['✦','◆','●'][i]}</div><h3>${s}</h3><p>Atendimento especializado com qualidade e cuidado.</p></div>`).join('')}
  </div>
</div>
</body></html>`,
    },
    {
      id: '2',
      nome: 'Bold Neon',
      descricao: 'Dark mode com acento neon — impacto visual',
      defaultColors: { cor1: '#0D0D0D', cor2: '#00E5A0', corFundo: '#0D0D0D', corTexto: '#ffffff', cor1Text: '#000000' },
      render: (v) => `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><style>
${base()}
body{background:${v.corFundo};color:${v.corTexto}}
nav{display:flex;justify-content:space-between;align-items:center;padding:1.1rem 2rem;border-bottom:1px solid #1f1f1f}
.logo{font-size:17px;font-weight:800;color:${v.cor2};letter-spacing:-.02em}
nav ul{display:flex;gap:1.4rem;list-style:none}
nav a{font-size:13px;color:#777}
.hero{padding:3.5rem 2rem 2.5rem;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;width:460px;height:460px;border-radius:50%;background:radial-gradient(circle,${v.cor2}12 0%,transparent 70%);top:-200px;right:-80px;pointer-events:none}
.label{display:inline-block;padding:4px 12px;background:${v.cor2}1a;color:${v.cor2};font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;border-radius:20px;margin-bottom:1.1rem;border:1px solid ${v.cor2}30}
h1{font-size:38px;font-weight:800;line-height:1.1;margin-bottom:.9rem;letter-spacing:-.02em}
h1 span{color:${v.cor2}}
.sub{font-size:14px;color:#888;max-width:400px;line-height:1.72;margin-bottom:1.8rem}
.cta-row{display:flex;gap:12px;align-items:center}
.btn{padding:13px 26px;background:${v.cor2};color:${v.cor1Text};border:none;border-radius:5px;font-size:13.5px;font-weight:700}
.bl{font-size:13px;color:#777;text-decoration:underline}
.metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#1f1f1f;margin-top:2rem}
.m{background:${v.corFundo};padding:1.4rem 1.8rem}
.mn{font-size:28px;font-weight:800;color:${v.cor2}}
.ml{font-size:12px;color:#555;margin-top:3px}
.srvs{padding:2rem;background:#111}
.st{font-size:18px;font-weight:700;margin-bottom:1.3rem;color:${v.corTexto}}
.list{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.item{padding:.9rem 1.1rem;background:${v.corFundo};border:1px solid #1f1f1f;border-radius:7px;display:flex;align-items:center;gap:10px}
.dot{width:7px;height:7px;border-radius:50%;background:${v.cor2};flex-shrink:0}
.item span{font-size:13px;color:#ccc}
</style></head><body>
<nav><div class="logo">${v.nome}</div><ul><li><a>Especialidades</a></li><li><a>Planos</a></li><li><a>Agendar</a></li></ul></nav>
<div class="hero">
  <div class="label">${v.tagline}</div>
  <h1>Cuide de você com <span>quem mais entende</span></h1>
  <p class="sub">${v.subtitulo}</p>
  <div class="cta-row"><button class="btn">${v.cta}</button><span class="bl">Ver mais →</span></div>
  <div class="metrics">
    <div class="m"><div class="mn">+5k</div><div class="ml">Pacientes</div></div>
    <div class="m"><div class="mn">10+</div><div class="ml">Especialistas</div></div>
    <div class="m"><div class="mn">4.9★</div><div class="ml">Avaliação</div></div>
  </div>
</div>
<div class="srvs">
  <div class="st">Nossos serviços</div>
  <div class="list">
    ${srv(v.servicos, 6).map(s => `<div class="item"><div class="dot"></div><span>${s}</span></div>`).join('')}
  </div>
</div>
</body></html>`,
    },
    {
      id: '3',
      nome: 'Soft Editorial',
      descricao: 'Tom suave e acolhedor — ideal para bem-estar',
      defaultColors: { cor1: '#C85A8A', cor2: '#d4829f', corFundo: '#FFF9F5', corTexto: '#1a1a1a', cor1Text: '#ffffff' },
      render: (v) => `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><style>
${base()}
body{background:${v.corFundo};color:${v.corTexto}}
nav{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem}
.logo{font-size:19px;font-weight:700;color:${v.cor1};font-style:italic}
nav ul{display:flex;gap:1.4rem;list-style:none}
nav a{font-size:13px;color:#999}
.hero{padding:2.8rem 2rem 2rem;text-align:center}
.pill{display:inline-block;padding:5px 15px;background:${v.cor1}20;color:${v.cor1};font-size:11.5px;border-radius:20px;margin-bottom:1.1rem;font-weight:600}
h1{font-size:34px;font-weight:800;color:#1a1a1a;line-height:1.18;margin-bottom:.7rem}
h1 em{font-style:italic;color:${v.cor1}}
.sub{font-size:14px;color:#888;max-width:380px;margin:0 auto 1.8rem;line-height:1.72}
.btn{padding:13px 30px;background:${v.cor1};color:${v.cor1Text};border:none;border-radius:50px;font-size:13.5px;font-weight:600}
.trust{font-size:11.5px;color:#bbb;margin-top:.7rem}
.cards-row{display:grid;grid-template-columns:repeat(3,1fr);gap:11px;padding:1.5rem 2rem}
.c{background:#fff;border-radius:14px;padding:1.4rem;text-align:center;border:1px solid #f0e8e8}
.ce{font-size:26px;margin-bottom:.4rem}
.c h3{font-size:13px;font-weight:700;color:#1a1a1a;margin-bottom:.25rem}
.c p{font-size:11.5px;color:#999;line-height:1.6}
.banner{margin:0 2rem 2rem;background:${v.cor1};border-radius:14px;padding:1.8rem;color:#fff;text-align:center}
.banner h2{font-size:19px;font-weight:700;margin-bottom:.4rem}
.banner p{font-size:12.5px;opacity:.85;margin-bottom:1.1rem}
.bbn{padding:9px 22px;background:#fff;color:${v.cor1};border:none;border-radius:50px;font-size:13px;font-weight:700}
</style></head><body>
<nav><div class="logo">${v.nome}</div><ul><li><a>Tratamentos</a></li><li><a>Sobre</a></li><li><a>Agendar</a></li></ul></nav>
<div class="hero">
  <div class="pill">✨ ${v.tagline}</div>
  <h1>Você merece se sentir <em>incrível</em></h1>
  <p class="sub">${v.subtitulo}</p>
  <button class="btn">${v.cta}</button>
  <p class="trust">Sem compromisso · Atendimento humanizado</p>
</div>
<div class="cards-row">
  ${srv(v.servicos, 3).map((s, i) => `<div class="c"><div class="ce">${['💆','🌿','💎'][i]}</div><h3>${s}</h3><p>Cuidado especializado para você.</p></div>`).join('')}
</div>
<div class="banner">
  <h2>Primeira consulta com desconto especial</h2>
  <p>Oferta para novos clientes. Agende ainda hoje.</p>
  <button class="bbn">${v.cta}</button>
</div>
</body></html>`,
    },
  ],
};

// ─── FAMÍLIA: PROFISSIONAL LIBERAL ───────────────────────────────────────────
// Advogados, contadores, consultores, arquitetos, engenheiros, coaches

const profissional: TemplateFamily = {
  id: 'profissional',
  styles: [
    {
      id: '1',
      nome: 'Authority Dark',
      descricao: 'Fundo escuro com dourado — poder e confiança',
      defaultColors: { cor1: '#0F1117', cor2: '#B8973A', corFundo: '#0F1117', corTexto: '#ffffff', cor1Text: '#0F1117' },
      render: (v) => `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><style>
${base()}
body{background:${v.corFundo};color:${v.corTexto}}
nav{display:flex;justify-content:space-between;align-items:center;padding:1.1rem 2rem;border-bottom:1px solid #1e2030}
.logo-w{display:flex;align-items:center;gap:8px}
.lm{width:26px;height:26px;background:${v.cor2};border-radius:2px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:${v.corFundo}}
.lt{font-size:13.5px;font-weight:600;letter-spacing:.05em;text-transform:uppercase}
nav ul{display:flex;gap:1.4rem;list-style:none}
nav a{font-size:11.5px;color:#666;letter-spacing:.05em;text-transform:uppercase}
.hero{padding:3.5rem 2rem;display:grid;grid-template-columns:3fr 2fr;gap:2.5rem;align-items:center}
.line{width:38px;height:2px;background:${v.cor2};margin-bottom:1.4rem}
h1{font-size:32px;font-weight:700;line-height:1.22;color:#fff;margin-bottom:.9rem;letter-spacing:-.01em}
h1 span{color:${v.cor2}}
.sub{font-size:13.5px;color:#888;line-height:1.72;margin-bottom:1.8rem}
.btn{padding:12px 24px;background:${v.cor2};color:${v.cor1Text};border:none;border-radius:3px;font-size:12.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase}
.hcard{background:#161820;border:1px solid #1e2030;border-radius:7px;padding:1.6rem}
.hcl{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:${v.cor2};margin-bottom:.9rem}
.area{display:flex;align-items:center;gap:9px;padding:.6rem 0;border-bottom:1px solid #1e2030}
.area:last-child{border:none}
.ad{width:5px;height:5px;border-radius:50%;background:${v.cor2};flex-shrink:0}
.area span{font-size:12.5px;color:#ccc}
.trust{display:grid;grid-template-columns:repeat(3,1fr);background:#161820;border-top:1px solid #1e2030}
.tb{padding:1.4rem;text-align:center;border-right:1px solid #1e2030}
.tb:last-child{border:none}
.tbn{font-size:24px;font-weight:700;color:${v.cor2}}
.tbl{font-size:10.5px;color:#666;margin-top:3px;text-transform:uppercase;letter-spacing:.07em}
</style></head><body>
<nav>
  <div class="logo-w"><div class="lm">${v.nome.charAt(0)}</div><div class="lt">${v.nome}</div></div>
  <ul><li><a>Áreas</a></li><li><a>Equipe</a></li><li><a>Contato</a></li></ul>
</nav>
<div class="hero">
  <div><div class="line"></div>
    <h1>Defendemos seus direitos com <span>excelência</span></h1>
    <p class="sub">${v.subtitulo}</p>
    <button class="btn">${v.cta}</button>
  </div>
  <div class="hcard">
    <div class="hcl">Áreas de atuação</div>
    ${srv(v.servicos, 5).map(s => `<div class="area"><div class="ad"></div><span>${s}</span></div>`).join('')}
  </div>
</div>
<div class="trust">
  <div class="tb"><div class="tbn">+500</div><div class="tbl">Clientes</div></div>
  <div class="tb"><div class="tbn">15</div><div class="tbl">Anos</div></div>
  <div class="tb"><div class="tbn">98%</div><div class="tbl">Sucesso</div></div>
</div>
</body></html>`,
    },
    {
      id: '2',
      nome: 'Clean Institutional',
      descricao: 'Branco + azul institucional — seriedade moderna',
      defaultColors: { cor1: '#3B5BDB', cor2: '#364fc7', corFundo: '#ffffff', corTexto: '#1a1a2e', cor1Text: '#ffffff' },
      render: (v) => `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><style>
${base()}
body{background:${v.corFundo};color:${v.corTexto}}
nav{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;box-shadow:0 1px 0 #f0f0f0}
.logo{font-size:15.5px;font-weight:700;color:${v.corTexto}}
.logo span{color:${v.cor1}}
nav ul{display:flex;gap:1.4rem;list-style:none}
nav a{font-size:13px;color:#666}
.hero{padding:3.2rem 2rem;background:#fff}
.badge{display:inline-flex;align-items:center;gap:5px;padding:4px 11px;background:${v.cor1}15;color:${v.cor1};font-size:11px;border-radius:5px;margin-bottom:1.4rem;font-weight:600}
h1{font-size:33px;font-weight:800;color:${v.corTexto};line-height:1.16;margin-bottom:.9rem;letter-spacing:-.02em}
h1 span{color:${v.cor1}}
.sub{font-size:14px;color:#666;line-height:1.72;max-width:420px;margin-bottom:1.8rem}
.cr{display:flex;gap:11px;align-items:center;flex-wrap:wrap}
.btn{padding:12px 24px;background:${v.cor1};color:${v.cor1Text};border:none;border-radius:7px;font-size:13.5px;font-weight:600}
.btn2{padding:12px 18px;background:#fff;color:${v.cor1};border:1.5px solid ${v.cor1};border-radius:7px;font-size:13.5px;font-weight:600}
.areas{display:grid;grid-template-columns:repeat(2,1fr);gap:11px;padding:1.4rem 2rem;background:#F8F9FF}
.area{background:#fff;border:1px solid #E8ECFF;border-radius:9px;padding:1.1rem}
.ai{font-size:19px;margin-bottom:.4rem}
.area h3{font-size:13.5px;font-weight:700;color:${v.corTexto};margin-bottom:.25rem}
.area p{font-size:11.5px;color:#888;line-height:1.6}
.sp{padding:1.4rem 2rem;background:#fff;border-top:1px solid #f0f0f0}
.spt{font-size:13px;font-weight:600;color:${v.corTexto};margin-bottom:.9rem}
.test{padding:.9rem 1.1rem;background:#F8F9FF;border-radius:7px;border-left:3px solid ${v.cor1}}
.tt{font-size:12.5px;color:#444;line-height:1.6;margin-bottom:.4rem;font-style:italic}
.ta{font-size:11.5px;color:#888;font-weight:600}
</style></head><body>
<nav><div class="logo"><span>${v.nome.split(' ')[0]}</span> ${v.nome.split(' ').slice(1).join(' ')}</div><ul><li><a>Serviços</a></li><li><a>Sobre</a></li><li><a>Contato</a></li></ul></nav>
<div class="hero">
  <div class="badge">⚖️ ${v.tagline}</div>
  <h1>Soluções <span>inteligentes</span> para você e sua empresa</h1>
  <p class="sub">${v.subtitulo}</p>
  <div class="cr"><button class="btn">${v.cta}</button><button class="btn2">Nossas áreas</button></div>
</div>
<div class="areas">
  ${srv(v.servicos, 4).map((s, i) => `<div class="area"><div class="ai">${['🏢','👨‍👩‍👧','🏠','⚖️'][i]}</div><h3>${s}</h3><p>Atendimento especializado e personalizado.</p></div>`).join('')}
</div>
<div class="sp">
  <div class="spt">O que nossos clientes dizem</div>
  <div class="test"><p class="tt">"Atendimento excelente e resultado além do esperado. Recomendo muito!"</p><p class="ta">— Cliente satisfeito</p></div>
</div>
</body></html>`,
    },
    {
      id: '3',
      nome: 'Serif Premium',
      descricao: 'Tipografia elegante — para posicionamento de alto padrão',
      defaultColors: { cor1: '#1a1a1a', cor2: '#8B7355', corFundo: '#FAFAF8', corTexto: '#1a1a1a', cor1Text: '#ffffff' },
      render: (v) => `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><style>
${base()}
body{background:${v.corFundo};color:${v.corTexto}}
nav{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem}
.logo{font-size:17px;font-weight:400;color:#1a1a1a;letter-spacing:.02em;font-family:Georgia,serif}
nav ul{display:flex;gap:1.4rem;list-style:none}
nav a{font-size:11.5px;color:#888;letter-spacing:.08em;text-transform:uppercase}
.hero{display:grid;grid-template-columns:1fr 1fr}
.hl{padding:3.8rem 2rem;background:${v.corFundo};display:flex;flex-direction:column;justify-content:center}
.hr{background:#1a1a1a;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:2rem;gap:1.4rem}
.ey{font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;color:#888;margin-bottom:.9rem}
h1{font-size:31px;font-weight:400;line-height:1.28;color:#1a1a1a;margin-bottom:.9rem;font-family:Georgia,serif}
h1 em{font-style:italic;color:${v.cor2}}
.sub{font-size:13.5px;color:#666;line-height:1.8;margin-bottom:1.8rem}
.btn{padding:12px 26px;background:#1a1a1a;color:#fff;border:none;font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase}
.cert{background:#2a2a2a;border-radius:7px;padding:.9rem 1.1rem;width:100%}
.cl{font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#888;margin-bottom:.35rem}
.cv{font-size:13.5px;color:#fff;font-weight:500}
.qb{padding:1.8rem;background:#1a1a1a;text-align:center;width:100%}
.qm{font-size:44px;color:${v.cor2};line-height:1;font-family:Georgia,serif;margin-bottom:-.4rem}
.qt{font-size:12.5px;color:#ccc;line-height:1.8;font-style:italic;font-family:Georgia,serif}
</style></head><body>
<nav><div class="logo">${v.nome}</div><ul><li><a>Expertise</a></li><li><a>Equipe</a></li><li><a>Contato</a></li></ul></nav>
<div class="hero">
  <div class="hl">
    <div class="ey">${v.tagline}</div>
    <h1>Onde a excelência encontra a <em>solução ideal</em></h1>
    <p class="sub">${v.subtitulo}</p>
    <button class="btn">${v.cta}</button>
  </div>
  <div class="hr">
    <div class="cert"><div class="cl">Especialidade principal</div><div class="cv">${v.servicos[0] || 'Consultoria especializada'}</div></div>
    <div class="cert"><div class="cl">Experiência</div><div class="cv">+10 anos no mercado</div></div>
    <div class="cert"><div class="cl">Atendimento</div><div class="cv">Presencial e Online</div></div>
    <div class="qb"><div class="qm">"</div><p class="qt">Comprometidos com o resultado de cada cliente.</p></div>
  </div>
</div>
</body></html>`,
    },
  ],
};

// ─── FAMÍLIA: BELEZA ─────────────────────────────────────────────────────────
// Salões, barbearias, nail, depilação, micropigmentação

const beleza: TemplateFamily = {
  id: 'beleza',
  styles: [
    {
      id: '1',
      nome: 'Glam Dark',
      descricao: 'Dark glamour com dourado — luxo e sofisticação',
      defaultColors: { cor1: '#D4AF37', cor2: '#c9a227', corFundo: '#111111', corTexto: '#ffffff', cor1Text: '#111111' },
      render: (v) => `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><style>
${base()}
body{background:${v.corFundo};color:${v.corTexto}}
nav{display:flex;justify-content:space-between;align-items:center;padding:1.1rem 2rem;border-bottom:1px solid #222}
.logo{font-size:16px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:${v.cor1}}
nav ul{display:flex;gap:1.4rem;list-style:none}
nav a{font-size:11.5px;color:#666;letter-spacing:.06em;text-transform:uppercase}
.hero{padding:4rem 2rem;display:grid;grid-template-columns:3fr 2fr;gap:2.5rem;align-items:center}
.flag{display:inline-block;padding:3px 11px;background:${v.cor1};color:${v.cor1Text};font-size:10.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:2px;margin-bottom:1.1rem}
h1{font-size:36px;font-weight:900;color:#fff;line-height:1.12;text-transform:uppercase;letter-spacing:-.01em;margin-bottom:.7rem}
h1 span{color:${v.cor1};display:block}
.sub{font-size:13.5px;color:#888;line-height:1.72;margin-bottom:1.8rem}
.btn{padding:13px 26px;background:${v.cor1};color:${v.cor1Text};border:none;border-radius:3px;font-size:12.5px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}
.nums{display:flex;flex-direction:column;gap:.9rem}
.num{background:#1a1a1a;border:1px solid #222;border-radius:7px;padding:.9rem 1.1rem}
.nn{font-size:26px;font-weight:900;color:${v.cor1}}
.nl{font-size:11px;color:#666;text-transform:uppercase;letter-spacing:.09em;margin-top:2px}
.svs{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#222}
.sv{background:${v.corFundo};padding:1.4rem;text-align:center}
.si{font-size:24px;margin-bottom:.5rem}
.sv h3{font-size:13px;font-weight:700;color:${v.cor1};margin-bottom:.25rem}
.sv p{font-size:11.5px;color:#666}
</style></head><body>
<nav><div class="logo">${v.nome}</div><ul><li><a>Serviços</a></li><li><a>Galeria</a></li><li><a>Agendar</a></li></ul></nav>
<div class="hero">
  <div>
    <div class="flag">${v.tagline}</div>
    <h1>Arte & <span>Estilo</span></h1>
    <p class="sub">${v.subtitulo}</p>
    <button class="btn">${v.cta}</button>
  </div>
  <div class="nums">
    <div class="num"><div class="nn">+1k</div><div class="nl">Clientes</div></div>
    <div class="num"><div class="nn">5★</div><div class="nl">Avaliações</div></div>
    <div class="num"><div class="nn">8+</div><div class="nl">Anos</div></div>
  </div>
</div>
<div class="svs">
  ${srv(v.servicos, 3).map((s, i) => `<div class="sv"><div class="si">${['💇','✨','💅'][i]}</div><h3>${s}</h3><p>Especialistas no que fazem</p></div>`).join('')}
</div>
</body></html>`,
    },
    {
      id: '2',
      nome: 'Rose Feminine',
      descricao: 'Rosa feminino + branco — leveza e elegância',
      defaultColors: { cor1: '#E91E8C', cor2: '#c2185b', corFundo: '#FFF0F5', corTexto: '#1a1a1a', cor1Text: '#ffffff' },
      render: (v) => `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><style>
${base()}
body{background:${v.corFundo};color:${v.corTexto}}
nav{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;background:#fff;box-shadow:0 1px 0 rgba(0,0,0,.06)}
.logo{font-size:18px;font-weight:700;color:${v.cor1};font-style:italic}
nav ul{display:flex;gap:1.4rem;list-style:none}
nav a{font-size:13px;color:#999}
.hero{padding:3rem 2rem;text-align:center;background:linear-gradient(180deg,${v.cor1}08 0%,transparent 100%)}
.pill{display:inline-block;padding:5px 14px;background:${v.cor1}18;color:${v.cor1};font-size:11.5px;border-radius:20px;margin-bottom:1.1rem;font-weight:600;border:1px solid ${v.cor1}25}
h1{font-size:34px;font-weight:800;color:#1a1a1a;line-height:1.2;margin-bottom:.7rem}
h1 span{color:${v.cor1}}
.sub{font-size:14px;color:#888;max-width:380px;margin:0 auto 1.8rem;line-height:1.72}
.btns{display:flex;justify-content:center;gap:11px;flex-wrap:wrap}
.btn{padding:12px 28px;background:${v.cor1};color:#fff;border:none;border-radius:50px;font-size:13.5px;font-weight:600}
.btn2{padding:12px 22px;background:#fff;color:${v.cor1};border:1.5px solid ${v.cor1};border-radius:50px;font-size:13.5px;font-weight:600}
.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:11px;padding:1.8rem 2rem}
.card{background:#fff;border-radius:14px;padding:1.4rem;display:flex;gap:12px;align-items:flex-start;box-shadow:0 2px 12px rgba(0,0,0,.06)}
.ci{width:38px;height:38px;background:${v.cor1}15;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:19px;flex-shrink:0}
.card h3{font-size:13.5px;font-weight:700;color:#1a1a1a;margin-bottom:.2rem}
.card p{font-size:11.5px;color:#aaa;line-height:1.55}
.cta{margin:0 2rem 2rem;background:${v.cor1};border-radius:14px;padding:1.7rem;text-align:center;color:#fff}
.cta h2{font-size:18px;font-weight:700;margin-bottom:.35rem}
.cta p{font-size:12.5px;opacity:.85;margin-bottom:1.1rem}
.ctab{padding:9px 22px;background:#fff;color:${v.cor1};border:none;border-radius:50px;font-size:13px;font-weight:700}
</style></head><body>
<nav><div class="logo">${v.nome}</div><ul><li><a>Serviços</a></li><li><a>Galeria</a></li><li><a>Agendar</a></li></ul></nav>
<div class="hero">
  <div class="pill">✨ ${v.tagline}</div>
  <h1>Realce sua beleza <span>natural</span></h1>
  <p class="sub">${v.subtitulo}</p>
  <div class="btns"><button class="btn">${v.cta}</button><button class="btn2">Ver serviços</button></div>
</div>
<div class="grid">
  ${srv(v.servicos, 4).map((s, i) => `<div class="card"><div class="ci">${['💇','💆','💅','✨'][i]}</div><div><h3>${s}</h3><p>Profissionalismo e cuidado em cada detalhe.</p></div></div>`).join('')}
</div>
<div class="cta">
  <h2>Agende agora pelo WhatsApp</h2>
  <p>Horários disponíveis esta semana!</p>
  <button class="ctab">${v.cta}</button>
</div>
</body></html>`,
    },
    {
      id: '3',
      nome: 'Modern Minimal',
      descricao: 'Minimalista clean — para posicionamento premium',
      defaultColors: { cor1: '#2D2D2D', cor2: '#FF6B6B', corFundo: '#F5F5F5', corTexto: '#1a1a1a', cor1Text: '#ffffff' },
      render: (v) => `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><style>
${base()}
body{background:${v.corFundo};color:${v.corTexto}}
nav{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;background:#fff}
.logo{font-size:15px;font-weight:600;color:${v.corTexto};letter-spacing:.04em}
nav ul{display:flex;gap:1.4rem;list-style:none}
nav a{font-size:12.5px;color:#999;letter-spacing:.04em}
.hero{display:grid;grid-template-columns:1fr 1fr;background:#fff;border-bottom:1px solid #eee}
.hl{padding:4rem 2.5rem;display:flex;flex-direction:column;justify-content:center}
.hr{background:${v.corTexto};display:flex;align-items:center;justify-content:center}
.hvi{font-size:80px}
.micro{font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;color:#bbb;margin-bottom:.9rem}
h1{font-size:30px;font-weight:300;color:${v.corTexto};line-height:1.3;margin-bottom:.7rem}
h1 strong{font-weight:700;color:${v.cor2}}
.sub{font-size:13.5px;color:#888;line-height:1.75;margin-bottom:1.8rem}
.btn{padding:12px 28px;background:${v.corTexto};color:#fff;border:none;font-size:13px;font-weight:500;letter-spacing:.05em}
.proc{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:#eee;border-top:1px solid #eee}
.step{background:#fff;padding:1.4rem 1rem;text-align:center}
.sn{font-size:24px;font-weight:300;color:#ddd;margin-bottom:.4rem}
.step h3{font-size:12.5px;font-weight:600;color:${v.corTexto};margin-bottom:.2rem}
.step p{font-size:11px;color:#aaa;line-height:1.55}
.ctas{padding:2.5rem 2rem;background:${v.corTexto};text-align:center}
.ctas h2{font-size:21px;font-weight:300;color:#fff;margin-bottom:.4rem}
.ctas p{font-size:13.5px;color:#888;margin-bottom:1.4rem}
.ctab{padding:11px 30px;background:#fff;color:${v.corTexto};border:none;font-size:13.5px;font-weight:600}
</style></head><body>
<nav><div class="logo">${v.nome}</div><ul><li><a>Serviços</a></li><li><a>Portfólio</a></li><li><a>Contato</a></li></ul></nav>
<div class="hero">
  <div class="hl">
    <div class="micro">${v.tagline}</div>
    <h1>Arte que <strong>transforma</strong> <br>seu visual</h1>
    <p class="sub">${v.subtitulo}</p>
    <button class="btn">${v.cta}</button>
  </div>
  <div class="hr"><div class="hvi">${v.emoji}</div></div>
</div>
<div class="proc">
  ${srv(v.servicos, 4).map((s, i) => `<div class="step"><div class="sn">0${i+1}</div><h3>${s}</h3><p>Especialistas no que fazem.</p></div>`).join('')}
</div>
<div class="ctas">
  <h2>Pronto para se transformar?</h2>
  <p>Agende seu horário e garanta seu atendimento.</p>
  <button class="ctab">${v.cta}</button>
</div>
</body></html>`,
    },
  ],
};

// ─── FAMÍLIA: ALIMENTAÇÃO ────────────────────────────────────────────────────
// Restaurantes, cafeterias, confeitarias, marmitarias, buffets

const alimentacao: TemplateFamily = {
  id: 'alimentacao',
  styles: [
    {
      id: '1',
      nome: 'Warm Rustic',
      descricao: 'Tons quentes e rústicos — sensação de autenticidade',
      defaultColors: { cor1: '#C4482D', cor2: '#D4721A', corFundo: '#FAF6F0', corTexto: '#2C1810', cor1Text: '#ffffff' },
      render: (v) => `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><style>
${base()}
body{background:${v.corFundo};color:${v.corTexto}}
nav{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;background:${v.cor1}}
.logo{font-size:18px;font-weight:700;color:#fff;letter-spacing:.02em}
nav ul{display:flex;gap:1.4rem;list-style:none}
nav a{font-size:12.5px;color:rgba(255,255,255,.75)}
.hero{padding:3.5rem 2rem;display:grid;grid-template-columns:1fr 1fr;gap:2rem;align-items:center;background:${v.corFundo}}
.tag{display:inline-block;padding:4px 13px;background:${v.cor2}25;color:${v.cor2};font-size:11px;border-radius:20px;margin-bottom:.9rem;font-weight:600;border:1px solid ${v.cor2}30}
h1{font-size:32px;font-weight:800;color:${v.corTexto};line-height:1.22;margin-bottom:.7rem}
h1 em{font-style:italic;color:${v.cor1}}
.sub{font-size:13.5px;color:#7a6254;line-height:1.75;margin-bottom:1.7rem}
.btn{padding:12px 26px;background:${v.cor1};color:#fff;border:none;border-radius:50px;font-size:13.5px;font-weight:600}
.imgb{background:${v.cor2}20;border-radius:18px;min-height:240px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:.5rem;border:2px solid ${v.cor2}15}
.imgb span{font-size:60px}
.imgb p{font-size:12.5px;color:${v.cor2};font-weight:500}
.bens{display:grid;grid-template-columns:repeat(3,1fr);gap:11px;padding:1.5rem 2rem;background:#fff;border-top:1px solid rgba(0,0,0,.06)}
.b{padding:1.2rem;background:${v.corFundo};border-radius:11px;text-align:center}
.bi{font-size:22px;margin-bottom:.4rem}
.b h3{font-size:12.5px;font-weight:700;color:${v.corTexto};margin-bottom:.2rem}
.b p{font-size:11px;color:#999}
</style></head><body>
<nav><div class="logo">${v.nome}</div><ul><li><a>Cardápio</a></li><li><a>Sobre</a></li><li><a>Reserva</a></li></ul></nav>
<div class="hero">
  <div>
    <div class="tag">🍽️ ${v.tagline}</div>
    <h1>Sabor que <em>conecta</em> pessoas</h1>
    <p class="sub">${v.subtitulo}</p>
    <button class="btn">${v.cta}</button>
  </div>
  <div class="imgb"><span>${v.emoji}</span><p>Feito com ingredientes frescos</p></div>
</div>
<div class="bens">
  ${srv(v.servicos, 3).map((s, i) => `<div class="b"><div class="bi">${['🔥','⭐','🎯'][i]}</div><h3>${s}</h3><p>Qualidade e sabor garantidos</p></div>`).join('')}
</div>
</body></html>`,
    },
    {
      id: '2',
      nome: 'Bold Moderno',
      descricao: 'Dinâmico e vibrante — ideal para delivery e fast-food',
      defaultColors: { cor1: '#FF5722', cor2: '#f4511e', corFundo: '#ffffff', corTexto: '#1a1a1a', cor1Text: '#ffffff' },
      render: (v) => `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><style>
${base()}
body{background:${v.corFundo};color:${v.corTexto}}
nav{display:flex;justify-content:space-between;align-items:center;padding:1.1rem 2rem;background:${v.cor1}}
.logo{font-size:17px;font-weight:900;color:#fff;text-transform:uppercase;letter-spacing:.05em}
nav ul{display:flex;gap:1.4rem;list-style:none}
nav a{font-size:12.5px;color:rgba(255,255,255,.75)}
.ht{background:${v.cor1};padding:2.8rem 2rem 2rem;text-align:center}
h1{font-size:40px;font-weight:900;color:#fff;line-height:1.1;text-transform:uppercase;letter-spacing:-.02em;margin-bottom:.4rem}
h1 span{display:block;font-size:18px;font-weight:400;text-transform:none;opacity:.85;letter-spacing:0}
.hb{display:grid;grid-template-columns:1fr 1fr;background:#fff}
.hbl{padding:1.8rem;border-right:1px solid #f0f0f0}
.hbr{padding:1.8rem;background:#FFF3F0}
.rl{list-style:none}
.rl li{display:flex;align-items:flex-start;gap:9px;padding:.55rem 0;border-bottom:1px solid #f0f0f0;font-size:13.5px;color:#333}
.rl li::before{content:'✓';color:${v.cor1};font-weight:700;flex-shrink:0}
.pb{background:${v.cor1};border-radius:11px;padding:1.4rem;text-align:center}
.pl{font-size:10.5px;color:rgba(255,255,255,.7);text-transform:uppercase;letter-spacing:.09em;margin-bottom:.25rem}
.pp{font-size:32px;font-weight:900;color:#fff}
.pps{font-size:14px;font-weight:400}
.bwh{display:block;margin-top:.9rem;padding:12px;background:#fff;color:${v.cor1};border:none;border-radius:7px;font-size:13.5px;font-weight:800;width:100%;text-align:center}
</style></head><body>
<nav><div class="logo">${v.nome}</div><ul><li><a>Cardápio</a></li><li><a>Pedido</a></li><li><a>Contato</a></li></ul></nav>
<div class="ht"><h1>${v.tagline.toUpperCase()}<span>${v.subtitulo}</span></h1></div>
<div class="hb">
  <div class="hbl">
    <p style="font-size:13px;font-weight:700;color:#1a1a1a;margin-bottom:.7rem;text-transform:uppercase;letter-spacing:.04em">Por que nos escolher:</p>
    <ul class="rl">
      ${srv(v.servicos, 4).map(s => `<li>${s}</li>`).join('')}
    </ul>
  </div>
  <div class="hbr">
    <div class="pb">
      <div class="pl">Peça agora</div>
      <div class="pp">${v.cta}</div>
      <button class="bwh">🛵 Fazer Pedido</button>
    </div>
  </div>
</div>
</body></html>`,
    },
    {
      id: '3',
      nome: 'Bistrô Clean',
      descricao: 'Clean e sofisticado — cafeterias e bistrôs premium',
      defaultColors: { cor1: '#2D5016', cor2: '#4A7C2F', corFundo: '#F8F5F0', corTexto: '#1a1a1a', cor1Text: '#ffffff' },
      render: (v) => `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><style>
${base()}
body{background:${v.corFundo};color:${v.corTexto}}
nav{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;background:${v.corFundo};border-bottom:1px solid rgba(0,0,0,.08)}
.logo{font-size:16px;font-weight:300;color:${v.cor1};letter-spacing:.1em;text-transform:uppercase;font-style:italic}
nav ul{display:flex;gap:1.4rem;list-style:none}
nav a{font-size:12px;color:#999;letter-spacing:.06em;text-transform:uppercase}
.hero{padding:4rem 2rem;display:flex;flex-direction:column;align-items:center;text-align:center;background:${v.corFundo}}
.mi{font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#bbb;margin-bottom:.9rem}
h1{font-size:36px;font-weight:300;color:${v.corTexto};line-height:1.25;margin-bottom:.9rem;max-width:440px}
h1 strong{font-weight:700;color:${v.cor1}}
.sub{font-size:14px;color:#888;max-width:370px;line-height:1.72;margin-bottom:2.2rem}
.btn{padding:13px 34px;background:${v.cor1};color:#fff;border:none;border-radius:3px;font-size:13.5px;font-weight:500;letter-spacing:.05em}
.div{width:38px;height:1px;background:#e0e0e0;margin:2.2rem auto}
.mn{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#e8e0d0;border-top:1px solid #e8e0d0;border-bottom:1px solid #e8e0d0}
.mi2{background:${v.corFundo};padding:1.4rem 1rem;text-align:center}
.mi2-i{font-size:24px;margin-bottom:.4rem}
.mi2 h3{font-size:12.5px;font-weight:600;color:${v.cor1};margin-bottom:.2rem}
.mi2 p{font-size:11px;color:#aaa}
.cs{padding:2.5rem 2rem;background:${v.cor1};text-align:center}
.cs h2{font-size:20px;font-weight:300;color:#fff;margin-bottom:.4rem}
.cs p{font-size:13.5px;color:rgba(255,255,255,.7);margin-bottom:1.4rem}
.csb{padding:11px 30px;background:#fff;color:${v.cor1};border:none;font-size:13.5px;font-weight:600}
</style></head><body>
<nav><div class="logo">${v.nome}</div><ul><li><a>Cardápio</a></li><li><a>Sobre</a></li><li><a>Reserva</a></li></ul></nav>
<div class="hero">
  <div class="mi">${v.tagline}</div>
  <h1>Sabor <strong>artesanal</strong> para momentos especiais</h1>
  <p class="sub">${v.subtitulo}</p>
  <button class="btn">${v.cta}</button>
</div>
<div class="div"></div>
<div class="mn">
  ${srv(v.servicos, 3).map((s, i) => `<div class="mi2"><div class="mi2-i">${['☕','🍰','🌿'][i]}</div><h3>${s}</h3><p>Feito com amor e cuidado</p></div>`).join('')}
</div>
<div class="cs">
  <h2>Venha nos visitar</h2>
  <p>Aberto todos os dias. Reserve sua mesa online.</p>
  <button class="csb">${v.cta}</button>
</div>
</body></html>`,
    },
  ],
};

// ─── FAMÍLIA: EDUCAÇÃO ───────────────────────────────────────────────────────
// Escolas de idiomas, artes, cursinhos, professores, infoprodutores

const educacao: TemplateFamily = {
  id: 'educacao',
  styles: [
    {
      id: '1',
      nome: 'Academic Bold',
      descricao: 'Azul navy + amarelo — autoridade acadêmica',
      defaultColors: { cor1: '#1E3A5F', cor2: '#F59E0B', corFundo: '#F8FAFF', corTexto: '#1a1a2e', cor1Text: '#ffffff' },
      render: (v) => `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><style>
${base()}
body{background:${v.corFundo};color:${v.corTexto}}
nav{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;background:${v.cor1}}
.logo{font-size:15.5px;font-weight:700;color:#fff;letter-spacing:.02em}
nav ul{display:flex;gap:1.4rem;list-style:none}
nav a{font-size:12.5px;color:rgba(255,255,255,.7)}
.hero{padding:3.5rem 2rem;display:grid;grid-template-columns:3fr 2fr;gap:2.5rem;align-items:center}
.badge{display:inline-flex;align-items:center;gap:5px;padding:4px 11px;background:${v.cor2}20;color:${v.cor2};font-size:11px;border-radius:4px;margin-bottom:1.1rem;font-weight:700;border:1px solid ${v.cor2}30}
h1{font-size:32px;font-weight:800;color:${v.corTexto};line-height:1.2;margin-bottom:.8rem;letter-spacing:-.01em}
h1 span{color:${v.cor2}}
.sub{font-size:13.5px;color:#666;line-height:1.72;margin-bottom:1.7rem}
.btn{padding:12px 24px;background:${v.cor2};color:#1a1a1a;border:none;border-radius:5px;font-size:13.5px;font-weight:700}
.scard{background:#fff;border:1px solid #e0e8ff;border-radius:11px;padding:1.5rem}
.sl{font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:${v.cor1};margin-bottom:.7rem;font-weight:600}
.sitem{display:flex;align-items:center;gap:9px;padding:.55rem 0;border-bottom:1px solid #f0f4ff}
.sitem:last-child{border:none}
.sc{width:20px;height:20px;background:${v.cor2};border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;color:#1a1a1a;flex-shrink:0;font-weight:700}
.sitem span{font-size:12.5px;color:#444}
.nums{display:grid;grid-template-columns:repeat(3,1fr);background:${v.cor1};margin-top:0}
.n{padding:1.2rem;text-align:center;border-right:1px solid rgba(255,255,255,.1)}
.n:last-child{border:none}
.nn{font-size:22px;font-weight:700;color:${v.cor2}}
.nl{font-size:10.5px;color:rgba(255,255,255,.55);text-transform:uppercase;letter-spacing:.07em;margin-top:2px}
</style></head><body>
<nav><div class="logo">${v.nome}</div><ul><li><a>Cursos</a></li><li><a>Metodologia</a></li><li><a>Matrículas</a></li></ul></nav>
<div class="hero">
  <div>
    <div class="badge">🎓 ${v.tagline}</div>
    <h1>O conhecimento que <span>transforma</span> sua carreira</h1>
    <p class="sub">${v.subtitulo}</p>
    <button class="btn">${v.cta}</button>
  </div>
  <div class="scard">
    <div class="sl">O que você aprende</div>
    ${srv(v.servicos, 5).map(s => `<div class="sitem"><div class="sc">✓</div><span>${s}</span></div>`).join('')}
  </div>
</div>
<div class="nums">
  <div class="n"><div class="nn">+500</div><div class="nl">Alunos</div></div>
  <div class="n"><div class="nn">95%</div><div class="nl">Aprovações</div></div>
  <div class="n"><div class="nn">10+</div><div class="nl">Anos</div></div>
</div>
</body></html>`,
    },
    {
      id: '2',
      nome: 'Modern Learning',
      descricao: 'Roxo + branco — digital e inovador',
      defaultColors: { cor1: '#7C3AED', cor2: '#6D28D9', corFundo: '#FAFAFE', corTexto: '#1a1a1a', cor1Text: '#ffffff' },
      render: (v) => `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><style>
${base()}
body{background:${v.corFundo};color:${v.corTexto}}
nav{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;background:#fff;border-bottom:1px solid #f0f0f0}
.logo-w{display:flex;align-items:center;gap:8px}
.li{width:26px;height:26px;background:${v.cor1};border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:13px}
.lt{font-size:15px;font-weight:700;color:${v.corTexto}}
nav ul{display:flex;gap:1.4rem;list-style:none}
nav a{font-size:13px;color:#888}
.hero{padding:2.8rem 2rem;background:linear-gradient(135deg,${v.cor1}0f 0%,${v.cor1}08 100%)}
.hero-in{max-width:460px;margin:0 auto;text-align:center}
.pill{display:inline-flex;align-items:center;gap:5px;padding:4px 13px;background:${v.cor1};color:#fff;font-size:11px;border-radius:20px;margin-bottom:1.1rem;font-weight:600}
h1{font-size:33px;font-weight:800;color:${v.corTexto};line-height:1.2;margin-bottom:.7rem}
h1 span{color:${v.cor1}}
.sub{font-size:14px;color:#666;line-height:1.72;margin-bottom:1.8rem}
.cr{display:flex;gap:11px;justify-content:center;flex-wrap:wrap}
.btn{padding:13px 26px;background:${v.cor1};color:#fff;border:none;border-radius:7px;font-size:13.5px;font-weight:600}
.btn2{padding:13px 18px;background:#fff;color:${v.cor1};border:1.5px solid ${v.cor1};border-radius:7px;font-size:13.5px;font-weight:600}
.feats{display:grid;grid-template-columns:repeat(2,1fr);gap:11px;padding:1.5rem 2rem;background:#fff}
.feat{display:flex;gap:11px;padding:.9rem;background:${v.cor1}08;border-radius:9px;align-items:flex-start}
.fi{width:34px;height:34px;background:${v.cor1};border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
.ft{font-size:13px;font-weight:700;color:${v.corTexto};margin-bottom:.15rem}
.fd{font-size:11.5px;color:#888;line-height:1.55}
.cbot{padding:1.8rem;background:${v.cor1};text-align:center}
.cbt{font-size:19px;font-weight:700;color:#fff;margin-bottom:.35rem}
.cbs{font-size:12.5px;color:rgba(255,255,255,.7);margin-bottom:1.1rem}
.cbtn{padding:11px 26px;background:#fff;color:${v.cor1};border:none;border-radius:7px;font-size:13.5px;font-weight:700}
</style></head><body>
<nav><div class="logo-w"><div class="li">📚</div><div class="lt">${v.nome}</div></div><ul><li><a>Cursos</a></li><li><a>Planos</a></li><li><a>Entrar</a></li></ul></nav>
<div class="hero">
  <div class="hero-in">
    <div class="pill">🏆 ${v.tagline}</div>
    <h1>Aprenda de onde <span>quiser</span></h1>
    <p class="sub">${v.subtitulo}</p>
    <div class="cr"><button class="btn">${v.cta}</button><button class="btn2">Ver cursos</button></div>
  </div>
</div>
<div class="feats">
  ${srv(v.servicos, 4).map((s, i) => `<div class="feat"><div class="fi">${['📱','📊','💬','🎯'][i]}</div><div><div class="ft">${s}</div><div class="fd">Conteúdo de qualidade ao seu alcance.</div></div></div>`).join('')}
</div>
<div class="cbot">
  <div class="cbt">Comece sua jornada hoje</div>
  <div class="cbs">Acesso imediato · Sem mensalidade fixa · Cancele quando quiser</div>
  <button class="cbtn">${v.cta}</button>
</div>
</body></html>`,
    },
    {
      id: '3',
      nome: 'Dark Digital',
      descricao: 'Dark + verde lima — tech e infoprodutores',
      defaultColors: { cor1: '#111827', cor2: '#84CC16', corFundo: '#111827', corTexto: '#ffffff', cor1Text: '#111827' },
      render: (v) => `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><style>
${base()}
body{background:${v.corFundo};color:${v.corTexto}}
nav{display:flex;justify-content:space-between;align-items:center;padding:1.1rem 2rem;background:${v.corFundo};border-bottom:1px solid #1f2937}
.logo{font-size:16px;font-weight:900;color:${v.cor2};letter-spacing:.05em;text-transform:uppercase}
nav ul{display:flex;gap:1.4rem;list-style:none}
nav a{font-size:12.5px;color:#6b7280}
.hero{padding:3.5rem 2rem;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,${v.cor2}10 0%,transparent 70%);top:-150px;right:-60px;pointer-events:none}
.lbl{display:inline-block;padding:4px 12px;background:${v.cor2}18;color:${v.cor2};font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;border-radius:20px;margin-bottom:1.1rem;border:1px solid ${v.cor2}28}
h1{font-size:36px;font-weight:800;line-height:1.12;margin-bottom:.9rem;letter-spacing:-.01em}
h1 span{color:${v.cor2}}
.sub{font-size:14px;color:#9ca3af;max-width:400px;line-height:1.72;margin-bottom:1.8rem}
.cr{display:flex;gap:11px;align-items:center}
.btn{padding:13px 26px;background:${v.cor2};color:${v.cor1Text};border:none;border-radius:5px;font-size:13.5px;font-weight:700}
.bl{font-size:13px;color:#6b7280;text-decoration:underline}
.mets{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#1f2937;margin-top:2rem}
.m{background:${v.corFundo};padding:1.3rem 1.7rem}
.mn{font-size:26px;font-weight:800;color:${v.cor2}}
.ml{font-size:11.5px;color:#6b7280;margin-top:3px}
.mods{padding:1.8rem 2rem;background:#1f2937}
.mst{font-size:17px;font-weight:700;margin-bottom:1.2rem}
.mg{display:grid;grid-template-columns:1fr 1fr;gap:9px}
.mi{padding:.8rem 1rem;background:${v.corFundo};border:1px solid #374151;border-radius:6px;display:flex;align-items:center;gap:9px}
.mid{width:7px;height:7px;border-radius:50%;background:${v.cor2};flex-shrink:0}
.mi span{font-size:12.5px;color:#d1d5db}
</style></head><body>
<nav><div class="logo">${v.nome}</div><ul><li><a>Cursos</a></li><li><a>Mentoria</a></li><li><a>Entrar</a></li></ul></nav>
<div class="hero">
  <div class="lbl">${v.tagline}</div>
  <h1>Conteúdo que <span>transforma</span> sua carreira</h1>
  <p class="sub">${v.subtitulo}</p>
  <div class="cr"><button class="btn">${v.cta}</button><span class="bl">Ver planos →</span></div>
  <div class="mets">
    <div class="m"><div class="mn">+2k</div><div class="ml">Alunos</div></div>
    <div class="m"><div class="mn">98%</div><div class="ml">Satisfação</div></div>
    <div class="m"><div class="mn">50+</div><div class="ml">Módulos</div></div>
  </div>
</div>
<div class="mods">
  <div class="mst">O que você vai aprender</div>
  <div class="mg">
    ${srv(v.servicos, 6).map(s => `<div class="mi"><div class="mid"></div><span>${s}</span></div>`).join('')}
  </div>
</div>
</body></html>`,
    },
  ],
};

// ─── FAMÍLIA: SERVIÇOS TÉCNICOS ───────────────────────────────────────────────
// Eletricistas, ar-condicionado, assistência técnica, limpeza, dedetização

const servicos: TemplateFamily = {
  id: 'servicos',
  styles: [
    {
      id: '1',
      nome: 'Pro Dark',
      descricao: 'Azul profundo + laranja — autoridade e urgência',
      defaultColors: { cor1: '#1a1a2e', cor2: '#FF6600', corFundo: '#1a1a2e', corTexto: '#ffffff', cor1Text: '#ffffff' },
      render: (v) => `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><style>
${base()}
body{background:${v.corFundo};color:${v.corTexto}}
nav{display:flex;justify-content:space-between;align-items:center;padding:1.1rem 2rem;background:${v.corFundo};border-bottom:1px solid #252540}
.logo{font-size:16px;font-weight:700;color:#fff;text-transform:uppercase;letter-spacing:.06em}
.logo span{color:${v.cor2}}
nav ul{display:flex;gap:1.4rem;list-style:none}
nav a{font-size:12px;color:#888;text-transform:uppercase;letter-spacing:.05em}
.hero{padding:3.5rem 2rem;display:grid;grid-template-columns:3fr 2fr;gap:2.5rem;align-items:center}
.flag{display:inline-block;padding:4px 11px;background:${v.cor2};color:#fff;font-size:10.5px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;border-radius:2px;margin-bottom:1.1rem}
h1{font-size:32px;font-weight:900;color:#fff;line-height:1.18;text-transform:uppercase;letter-spacing:-.01em;margin-bottom:.8rem}
h1 span{color:${v.cor2}}
.sub{font-size:13.5px;color:#9a9ab0;line-height:1.72;margin-bottom:1.8rem}
.cr{display:flex;gap:11px;align-items:center}
.btn{padding:13px 26px;background:${v.cor2};color:#fff;border:none;border-radius:3px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.08em}
.bl{font-size:13px;color:#888}
.stats{display:flex;flex-direction:column;gap:.9rem}
.stat{background:#252540;border:1px solid #33334d;border-radius:7px;padding:.9rem 1.1rem}
.sn{font-size:24px;font-weight:900;color:${v.cor2}}
.sl{font-size:11px;color:#888;text-transform:uppercase;letter-spacing:.08em;margin-top:2px}
.progs{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#252540}
.prog{background:${v.corFundo};padding:1.4rem;border-top:2px solid transparent}
.prog.active{border-top-color:${v.cor2}}
.pl{font-size:10px;letter-spacing:.13em;text-transform:uppercase;color:#666;margin-bottom:.4rem}
.prog h3{font-size:14.5px;font-weight:700;color:#fff;margin-bottom:.25rem}
.prog p{font-size:12px;color:#777;line-height:1.6}
</style></head><body>
<nav><div class="logo">${v.nome.split(' ')[0]}<span> ${v.nome.split(' ').slice(1).join(' ')}</span></div><ul><li><a>Serviços</a></li><li><a>Sobre</a></li><li><a>Orçamento</a></li></ul></nav>
<div class="hero">
  <div>
    <div class="flag">${v.tagline}</div>
    <h1>Serviços <span>rápidos</span> com garantia</h1>
    <p class="sub">${v.subtitulo}</p>
    <div class="cr"><button class="btn">${v.cta}</button><span class="bl">Ver serviços →</span></div>
  </div>
  <div class="stats">
    <div class="stat"><div class="sn">+500</div><div class="sl">Clientes</div></div>
    <div class="stat"><div class="sn">24h</div><div class="sl">Atendimento</div></div>
    <div class="stat"><div class="sn">⭐5.0</div><div class="sl">Avaliação</div></div>
  </div>
</div>
<div class="progs">
  ${srv(v.servicos, 3).map((s, i) => `<div class="prog${i===0?' active':''}"><div class="pl">${i===0?'Mais solicitado':'Serviço'}</div><h3>${s}</h3><p>Serviço profissional com garantia.</p></div>`).join('')}
</div>
</body></html>`,
    },
    {
      id: '2',
      nome: 'Trust Blue',
      descricao: 'Azul claro + branco — confiança e transparência',
      defaultColors: { cor1: '#1E40AF', cor2: '#3B82F6', corFundo: '#F0F4FF', corTexto: '#1a1a2e', cor1Text: '#ffffff' },
      render: (v) => `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><style>
${base()}
body{background:${v.corFundo};color:${v.corTexto}}
nav{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;background:${v.cor1}}
.logo{font-size:16px;font-weight:700;color:#fff;letter-spacing:.02em}
nav ul{display:flex;gap:1.4rem;list-style:none}
nav a{font-size:12.5px;color:rgba(255,255,255,.75)}
.hero{padding:3rem 2rem;display:grid;grid-template-columns:1fr 1fr;gap:2rem;align-items:center;background:#fff}
.badge{display:inline-flex;align-items:center;gap:5px;padding:4px 11px;background:${v.cor2}18;color:${v.cor1};font-size:11px;border-radius:5px;margin-bottom:1.1rem;font-weight:600}
h1{font-size:30px;font-weight:800;color:${v.corTexto};line-height:1.22;margin-bottom:.8rem}
h1 span{color:${v.cor1}}
.sub{font-size:13.5px;color:#666;line-height:1.72;margin-bottom:1.7rem}
.btn{padding:12px 24px;background:${v.cor1};color:#fff;border:none;border-radius:6px;font-size:13.5px;font-weight:600}
.imgb{background:${v.cor2}15;border-radius:14px;min-height:220px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:.5rem}
.imgb span{font-size:56px}
.imgb p{font-size:12.5px;color:${v.cor1};font-weight:500}
.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:11px;padding:1.5rem 2rem;background:${v.corFundo}}
.card{background:#fff;border-radius:11px;padding:1.2rem;border:1px solid #dbe4ff}
.ci{font-size:22px;margin-bottom:.5rem}
.card h3{font-size:13px;font-weight:700;color:${v.corTexto};margin-bottom:.2rem}
.card p{font-size:11.5px;color:#888;line-height:1.6}
.cta{padding:1.8rem 2rem;background:${v.cor1};text-align:center}
.cta h2{font-size:18px;font-weight:700;color:#fff;margin-bottom:.35rem}
.cta p{font-size:12.5px;color:rgba(255,255,255,.8);margin-bottom:1.1rem}
.ctab{padding:10px 24px;background:#fff;color:${v.cor1};border:none;border-radius:6px;font-size:13px;font-weight:700}
</style></head><body>
<nav><div class="logo">${v.nome}</div><ul><li><a>Serviços</a></li><li><a>Sobre</a></li><li><a>Orçamento</a></li></ul></nav>
<div class="hero">
  <div>
    <div class="badge">✓ ${v.tagline}</div>
    <h1>Serviços com <span>qualidade</span> e garantia</h1>
    <p class="sub">${v.subtitulo}</p>
    <button class="btn">${v.cta}</button>
  </div>
  <div class="imgb"><span>${v.emoji}</span><p>Atendimento profissional</p></div>
</div>
<div class="grid">
  ${srv(v.servicos, 4).map((s, i) => `<div class="card"><div class="ci">${['🔧','⚡','🏆','✅'][i]}</div><h3>${s}</h3><p>Serviço rápido com garantia.</p></div>`).join('')}
</div>
<div class="cta">
  <h2>Solicite seu orçamento gratuito</h2>
  <p>Atendimento rápido e sem compromisso.</p>
  <button class="ctab">${v.cta}</button>
</div>
</body></html>`,
    },
    {
      id: '3',
      nome: 'Clean Green',
      descricao: 'Verde + branco — transparência e confiança',
      defaultColors: { cor1: '#059669', cor2: '#10B981', corFundo: '#F0FDF4', corTexto: '#1a1a1a', cor1Text: '#ffffff' },
      render: (v) => `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><style>
${base()}
body{background:${v.corFundo};color:${v.corTexto}}
nav{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;background:#fff;border-bottom:1px solid ${v.cor2}25}
.logo{font-size:15px;font-weight:600;color:${v.cor1};letter-spacing:.02em}
nav ul{display:flex;gap:1.4rem;list-style:none}
nav a{font-size:12.5px;color:#888}
.hero{padding:3.5rem 2rem;display:flex;flex-direction:column;align-items:center;text-align:center;background:#fff}
.mi{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:${v.cor2};margin-bottom:.9rem;font-weight:600}
h1{font-size:34px;font-weight:300;color:${v.corTexto};line-height:1.25;margin-bottom:.9rem;max-width:440px}
h1 strong{font-weight:700;color:${v.cor1}}
.sub{font-size:14px;color:#888;max-width:370px;line-height:1.72;margin-bottom:2rem}
.btn{padding:13px 32px;background:${v.cor1};color:#fff;border:none;border-radius:50px;font-size:13.5px;font-weight:600}
.proc{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:${v.cor2}20;border-top:1px solid ${v.cor2}20;border-bottom:1px solid ${v.cor2}20}
.step{background:#fff;padding:1.4rem 1rem;text-align:center}
.sn{font-size:22px;font-weight:300;color:${v.cor2}50;margin-bottom:.4rem}
.step h3{font-size:12.5px;font-weight:600;color:${v.cor1};margin-bottom:.2rem}
.step p{font-size:11px;color:#aaa;line-height:1.55}
.cs{padding:2.2rem 2rem;background:${v.cor1};text-align:center}
.cs h2{font-size:20px;font-weight:300;color:#fff;margin-bottom:.4rem}
.cs p{font-size:13.5px;color:rgba(255,255,255,.7);margin-bottom:1.4rem}
.csb{padding:11px 30px;background:#fff;color:${v.cor1};border:none;border-radius:50px;font-size:13.5px;font-weight:600}
</style></head><body>
<nav><div class="logo">${v.nome}</div><ul><li><a>Serviços</a></li><li><a>Portfólio</a></li><li><a>Contato</a></li></ul></nav>
<div class="hero">
  <div class="mi">${v.tagline}</div>
  <h1>Serviço <strong>profissional</strong> com garantia real</h1>
  <p class="sub">${v.subtitulo}</p>
  <button class="btn">${v.cta}</button>
</div>
<div class="proc">
  ${srv(v.servicos, 4).map((s, i) => `<div class="step"><div class="sn">0${i+1}</div><h3>${s}</h3><p>Feito com qualidade e cuidado.</p></div>`).join('')}
</div>
<div class="cs">
  <h2>Orçamento gratuito e sem compromisso</h2>
  <p>Atendemos em toda a região. Fale conosco agora.</p>
  <button class="csb">${v.cta}</button>
</div>
</body></html>`,
    },
  ],
};

// ─── ALL FAMILIES ─────────────────────────────────────────────────────────────

export const families: Record<string, TemplateFamily> = {
  saude,
  profissional,
  beleza,
  alimentacao,
  educacao,
  servicos,
};

// ─── SEGMENT → FAMILY MAPPING ─────────────────────────────────────────────────

export const segmentoFamilia: Record<string, string> = {
  // Saúde
  'clinica-medica': 'saude',
  'clinica-odontologica': 'saude',
  'psicologo': 'saude',
  'fisioterapeuta': 'saude',
  'clinica-estetica': 'saude',
  'pilates-yoga': 'saude',
  'academia': 'saude',
  'personal-trainer': 'saude',
  'nutricionista': 'alimentacao',
  // Beleza
  'salao-barbearia': 'beleza',
  'depilacao-estetica': 'beleza',
  'manicure-nail': 'beleza',
  'micropigmentacao': 'beleza',
  // Profissionais
  'advogado': 'profissional',
  'contador': 'profissional',
  'arquiteto-designer': 'profissional',
  'engenheiro': 'profissional',
  'corretor-imoveis': 'profissional',
  'consultor-financeiro': 'profissional',
  'coach': 'profissional',
  // Alimentação
  'restaurante': 'alimentacao',
  'cafeteria': 'alimentacao',
  'confeitaria': 'alimentacao',
  'marmitaria': 'alimentacao',
  'buffet': 'alimentacao',
  // Educação
  'escola-idiomas': 'educacao',
  'escola-artes': 'educacao',
  'cursinho': 'educacao',
  'professor-tutor': 'educacao',
  'infoprodutor': 'educacao',
  // Serviços técnicos
  'eletricista-encanador': 'servicos',
  'ar-condicionado': 'servicos',
  'assistencia-tecnica': 'servicos',
  'limpeza-conservacao': 'servicos',
  'dedetizadora': 'servicos',
  // Pet → saúde
  'petshop-veterinaria': 'saude',
  'banho-tosa': 'beleza',
  'veterinario': 'saude',
  // Imóveis → profissional
  'imobiliaria': 'profissional',
  'construtora': 'profissional',
  'corretor-autonomo': 'profissional',
  'decorador-paisagista': 'profissional',
  // Criativos → beleza (estética visual)
  'fotografo': 'beleza',
  'videomaker': 'beleza',
  'designer-grafico': 'beleza',
  'agencia-marketing': 'profissional',
  // Comércio → alimentação (varejo/loja)
  'loja-roupas': 'beleza',
  'otica': 'saude',
  'floricultura': 'alimentacao',
  'papelaria-livraria': 'educacao',
  'loja-presentes': 'beleza',
  // Eventos → profissional
  'espaco-festas': 'profissional',
  'dj-banda': 'beleza',
  'cerimonialista': 'profissional',
  'fotografo-eventos': 'beleza',
};

export function getFamily(segmentoId: string): TemplateFamily {
  const familyId = segmentoFamilia[segmentoId] ?? 'saude';
  return families[familyId] ?? saude;
}

// ─── DEFAULT EMOJIS ─────────────────────────────────────────────────────────

export const segmentoEmoji: Record<string, string> = {
  'clinica-medica': '🩺', 'clinica-odontologica': '🦷', 'psicologo': '🧠',
  'fisioterapeuta': '💪', 'clinica-estetica': '✨', 'pilates-yoga': '🧘',
  'academia': '🏋️', 'personal-trainer': '💪', 'nutricionista': '🥗',
  'salao-barbearia': '✂️', 'depilacao-estetica': '✨', 'manicure-nail': '💅',
  'micropigmentacao': '🖊️', 'advogado': '⚖️', 'contador': '📊',
  'arquiteto-designer': '🏠', 'engenheiro': '🔩', 'corretor-imoveis': '🏡',
  'consultor-financeiro': '💰', 'coach': '🎯', 'restaurante': '🍽️',
  'cafeteria': '☕', 'confeitaria': '🎂', 'marmitaria': '🥡',
  'buffet': '🥂', 'escola-idiomas': '🌍', 'escola-artes': '🎨',
  'cursinho': '📚', 'professor-tutor': '📖', 'infoprodutor': '💻',
  'eletricista-encanador': '⚡', 'ar-condicionado': '❄️',
  'assistencia-tecnica': '📱', 'limpeza-conservacao': '🧹', 'dedetizadora': '🛡️',
  'petshop-veterinaria': '🐾', 'banho-tosa': '🐶', 'veterinario': '🐱',
  'imobiliaria': '🏢', 'construtora': '🏗️', 'corretor-autonomo': '🏡',
  'decorador-paisagista': '🌿', 'fotografo': '📷', 'videomaker': '🎬',
  'designer-grafico': '🎨', 'agencia-marketing': '📣', 'loja-roupas': '👗',
  'otica': '👓', 'floricultura': '💐', 'papelaria-livraria': '📚',
  'loja-presentes': '🎁', 'espaco-festas': '🎉', 'dj-banda': '🎵',
  'cerimonialista': '💍', 'fotografo-eventos': '📸',
};
