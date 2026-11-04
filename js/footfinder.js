// Corpo do projeto "Footfinder": apresentação do site footfinder.cc.
(function () {
  const D = 'assets/projects/footfinder/';
  const LG = [['English', 'What are they for?'], ['Português', 'Para que você vai usar?'], ['Español', '¿Para qué las vas a usar?'], ['Français', 'Pour quoi faire ?'], ['Deutsch', 'Wofür brauchst du sie?'], ['Italiano', 'Per cosa le userai?']];
  const TX = {
    pt: {
      h1: 'Uma tela. Uma pergunta por vez.', h2: 'Só toques. Nada para escrever.', s2: 'Cada resposta muda o título, as opções e quais perguntas aparecem depois.', tag: '10 perguntas',
      steps: ['Objetivo', 'Volume semanal', 'Superfície', 'Distância', 'Faixa de peso', 'Sensação sob o pé', 'Largura do pé', 'Onde o tênis gasta', 'Orçamento', 'Um tênis que gostou ou não'],
      h3: 'Seis idiomas, um quiz.', h4: 'A ficha técnica de cada tênis.', s4: 'A lista traz até 12 tênis, ordenados por compatibilidade. Cada um abre com peso, drop e características, e um botão para a loja.',
      spec: [['Peso', '246 g'], ['Drop', '5 mm'], ['Altura do solado', '47 / 42 mm'], ['Amortecimento', 'Máximo'], ['Retorno', 'Responsivo'], ['Suporte', 'Neutro'], ['Placa', 'Nenhuma'], ['Superfície', 'Rua'], ['Indicado para', '5–42 km'], ['Versão larga', 'Não'], ['Lançamento', '2026']],
      badges: ['Melhor opção', 'Mais leve', 'Mais barato'],
      h5: 'Claro e escuro.', s5: 'Arraste para comparar a mesma tela nos dois temas.', light: 'Claro', dark: 'Escuro',
      h6: 'O mesmo fluxo no celular.', h8: 'Neutro, para a foto aparecer.', bg: 'Fundo', card: 'Cartão', text: 'Texto', aux: 'Apoio', line: 'Linha', block: 'Bloco', cta: 'Ver o projeto no ar'
    },
    en: {
      h1: 'One screen. One question at a time.', h2: 'Taps only. Nothing to type.', s2: 'Each answer changes the title, the options and which questions come next.', tag: '10 questions',
      steps: ['Goal', 'Weekly volume', 'Surface', 'Distance', 'Weight range', 'Feel underfoot', 'Foot width', 'Where shoes wear out', 'Budget', 'A shoe you loved or hated'],
      h3: 'Six languages, one quiz.', h4: 'The spec sheet of every shoe.', s4: 'The list has up to 12 shoes, ordered by match. Each one opens with weight, drop and features, and a button to the store.',
      spec: [['Weight', '246 g'], ['Drop', '5 mm'], ['Stack height', '47 / 42 mm'], ['Cushioning', 'Maximum'], ['Ride', 'Bouncy'], ['Support', 'Neutral'], ['Plate', 'None'], ['Surface', 'Road'], ['Best for', '5–42 km'], ['Wide version', 'No'], ['Released', '2026']],
      badges: ['Best match', 'Lightest', 'Cheapest'],
      h5: 'Light and dark.', s5: 'Drag to compare the same screen in both themes.', light: 'Light', dark: 'Dark',
      h6: 'The same flow on the phone.', h8: 'Neutral, so the photo stands out.', bg: 'Background', card: 'Card', text: 'Text', aux: 'Muted', line: 'Line', block: 'Tile', cta: 'See the project live'
    }
  };
  const frame = (src, alt, cls) => `<div class="bf ${cls || ''}"><div class="bar"><i></i><i></i><i></i><span>footfinder.cc</span></div><img src="${D}${src}" alt="${alt}" loading="lazy"></div>`;
  const sw = (bg, fg, b, hex) => `<div class="sw" style="background:${hex};color:${fg}"><b>${b}</b>${hex}</div>`;

  window.footfinderHTML = function (lang) {
    const T = TX[lang] || TX.pt;
    return `<div class="ff" id="ff">
 <section class="ff-s"><h3 class="ff-h rv-l">${T.h1}</h3>
  <div class="ff-tilt rv-l" id="ffTilt">${frame('home-light.webp', 'Home do Footfinder', '')}</div></section>
 <section class="ff-s"><h3 class="ff-h rv-l">${T.h2}</h3><p class="ff-sub rv-l">${T.s2}</p>
  <div class="ff-quiz">
   <ol class="ff-steps rv-l" id="ffSteps">${T.steps.map(x => '<li>' + x + '</li>').join('')}</ol>
   <div class="ff-qcard rv-l"><span class="ff-tag">${T.tag}</span><img src="${D}quiz-feel.webp" alt="" loading="lazy"></div>
  </div></section>
 <section class="ff-s"><h3 class="ff-h rv-l">${T.h3}</h3>
  <div class="ff-lg"><div class="rv-l"><div class="ff-lgbig" id="ffLg" aria-live="polite"></div><div class="ff-lgchips" id="ffLgc"></div></div>
  <div class="rv-l">${frame('home-pt.webp', 'Footfinder em português', '')}</div></div></section>
 <section class="ff-s"><h3 class="ff-h rv-l">${T.h4}</h3><p class="ff-sub rv-l">${T.s4}</p>
  <div class="ff-res"><div class="rv-l">${frame('result-light.webp', 'Resultado do quiz', '')}</div>
   <div class="rv-l"><ul class="ff-specs">${T.spec.map(r => '<li><span>' + r[0] + '</span><span>' + r[1] + '</span></li>').join('')}</ul><div class="ff-badges">${T.badges.map(x => '<span>' + x + '</span>').join('')}</div></div></div></section>
 <section class="ff-s"><h3 class="ff-h rv-l">${T.h5}</h3><p class="ff-sub rv-l">${T.s5}</p>
  <div class="ff-cmp rv-l" id="ffCmp"><img src="${D}result-dark.webp" alt="" loading="lazy"><div class="top2"><img src="${D}result-light.webp" alt="" loading="lazy"></div><div class="hd"></div><span class="lb l">${T.light}</span><span class="lb r">${T.dark}</span><input type="range" min="0" max="100" value="50" aria-label="${T.h5}"></div></section>
 <section class="ff-s"><h3 class="ff-h rv-l">${T.h6}</h3>
  <div class="ff-ph3"><div class="ff-phone" data-sp="-26"><img src="${D}m-home.webp" alt="" loading="lazy"></div><div class="ff-phone" data-sp="18"><img src="${D}m-q.webp" alt="" loading="lazy"></div><div class="ff-phone" data-sp="-10"><img src="${D}m-result.webp" alt="" loading="lazy"></div></div></section>
 <section class="ff-s"><h3 class="ff-h rv-l">${T.h8}</h3>
  <div class="ff-sys"><div class="rv-l">
   <div class="ff-pal">${sw(0, '#292524', T.bg, '#F5F5F4')}${sw(0, '#292524', T.card, '#FFFFFF')}${sw(0, '#F5F5F4', T.text, '#292524')}${sw(0, '#fff', T.aux, '#78716C')}${sw(0, '#292524', T.line, '#E7E5E4')}</div>
   <div class="ff-pal">${sw(0, '#F5F5F4', T.bg, '#1C1917')}${sw(0, '#F5F5F4', T.card, '#292524')}${sw(0, '#F5F5F4', T.block, '#33302D')}${sw(0, '#292524', T.text, '#F5F5F4')}${sw(0, '#1C1917', T.aux, '#A8A29E')}</div></div>
   <div class="ff-tp rv-l"><div class="aa">Aa</div><p>Inter</p><div class="wt"><span style="font-weight:400">Regular</span><span style="font-weight:500">Medium</span><span style="font-weight:600">Semibold</span></div></div></div></section>
 <div class="ff-cta rv-l"><small>${T.cta}</small><a href="https://footfinder.cc" target="_blank" rel="noopener">footfinder.cc</a></div>
</div>`;
  };

  let off = null;
  window.footfinderWire = function (root, scroller) {
    if (off) off();
    const el = root.querySelector('#ff'); if (!el) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    // idiomas
    const big = el.querySelector('#ffLg'), chips = el.querySelector('#ffLgc'); let li = 0, lt = null;
    LG.forEach((x, k) => { const b = document.createElement('button'); b.type = 'button'; b.textContent = x[0]; b.addEventListener('click', () => { show(k); clearInterval(lt); }); chips.appendChild(b); });
    function show(k) { li = k; big.innerHTML = '<span>' + LG[k][1] + '</span>'; chips.querySelectorAll('button').forEach((b, j) => b.setAttribute('aria-pressed', j === k)); }
    show(0); if (!reduce) lt = setInterval(() => { if (!document.hidden) show((li + 1) % LG.length); }, 2400);
    // perguntas
    const steps = el.querySelectorAll('#ffSteps li'); let si = 0, st = null;
    const setS = n => steps.forEach((x, k) => x.classList.toggle('on', k === n)); setS(0);
    if (!reduce) st = setInterval(() => { if (!document.hidden) { si = (si + 1) % steps.length; setS(si); } }, 1800);
    // comparador
    const cmp = el.querySelector('#ffCmp'), rg = cmp.querySelector('input');
    rg.addEventListener('input', () => cmp.style.setProperty('--p', rg.value + '%'));
    // rolagem
    const tl = el.querySelector('#ffTilt'), ph = [...el.querySelectorAll('.ff-phone')];
    const tick = () => {
      if (reduce) return; const vh = innerHeight;
      const r = tl.getBoundingClientRect(); const p = Math.max(0, Math.min(1, (vh * .95 - r.top) / (vh * .8)));
      tl.style.setProperty('--rx', (12 * (1 - p)).toFixed(2) + 'deg'); tl.style.setProperty('--sc', (.9 + .1 * p).toFixed(3));
      ph.forEach(e => { const q = e.getBoundingClientRect(); const k = Math.max(-1, Math.min(1, (q.top + q.height / 2 - vh / 2) / vh)); e.style.setProperty('--ty', (k * parseFloat(e.dataset.sp)).toFixed(1) + 'px'); });
    };
    scroller.addEventListener('scroll', tick, { passive: true }); addEventListener('resize', tick); tick();
    off = () => { scroller.removeEventListener('scroll', tick); removeEventListener('resize', tick); clearInterval(lt); clearInterval(st); off = null; };
  };
})();
