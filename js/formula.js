// Corpo do projeto "Fórmula da Licitação": apresentação com animações.
(function () {
  const LOGO = "<svg class=\"logo\" viewBox=\"0 0 151 133\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><defs><linearGradient id=\"lg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"var(--lc1)\"/><stop offset=\"1\" stop-color=\"var(--lc2)\"/></linearGradient></defs><path class=\"lf\" fill=\"url(#lg)\" d=\"M34.9 106.7 L34.9 111.2 L35.9 113.5 L37.3 115.8 L37.1 116.4 L37.1 117.9 L37.2 118.2 L37.9 118.7 L115.4 118.8 L118.4 118.7 L119.1 118.3 L119.5 117.6 L119.5 115.8 L119.3 115.5 L118.5 115.2 L40.9 115.2 L40.2 114.9 L38.9 114.0 L38.4 113.5 L38.1 112.9 L38.0 107.8 L38.2 107.0 L38.2 105.2 L38.0 104.6 L37.8 104.4 L36.3 104.5 L35.7 105.1ZM35.6 31.6 L34.5 32.2 L34.5 33.0 L35.6 33.0 L35.1 33.5 L34.8 34.2 L34.8 83.9 L35.3 84.9 L35.7 85.1 L37.2 85.1 L37.7 84.8 L38.0 84.2 L38.1 83.5 L38.1 33.8 L37.8 33.2 L37.5 33.0 L35.6 33.0 L35.6 32.8 L36.4 32.4 L36.4 31.6ZM103.8 29.4 L103.4 30.2 L103.4 47.5 L103.7 48.5 L104.1 48.9 L104.6 49.1 L122.4 49.0 L122.8 48.5 L122.7 47.0 L121.8 46.3 L119.0 43.5 L118.4 43.1 L117.0 41.6 L115.3 40.2 L111.2 36.1 L110.9 34.9 L109.7 33.8 L108.5 32.4 L108.0 32.1 L105.9 29.8 L104.9 29.3ZM40.3 28.4 L39.8 29.4 L39.8 111.8 L40.3 113.3 L41.3 113.8 L77.7 113.5 L118.8 113.4 L120.9 113.2 L122.7 113.4 L123.4 113.2 L123.8 112.8 L124.1 112.0 L124.0 51.8 L123.7 51.5 L122.8 51.2 L120.0 51.2 L119.1 51.6 L118.9 52.0 L118.9 53.9 L119.1 55.2 L119.0 78.7 L118.8 79.3 L118.5 79.6 L118.0 78.9 L117.9 54.7 L118.1 53.6 L118.1 52.1 L117.6 51.5 L116.6 51.2 L104.2 51.2 L103.2 50.8 L102.1 49.5 L101.8 48.7 L101.8 34.6 L101.5 34.1 L100.8 33.8 L65.6 33.8 L57.5 33.6 L55.8 33.7 L55.4 33.5 L55.9 33.2 L65.3 33.3 L90.8 33.0 L100.8 33.1 L101.6 32.6 L101.8 32.0 L101.8 29.5 L101.5 28.6 L101.1 28.3 L100.6 28.2 L70.3 28.3 L58.9 28.1 L41.2 28.1Z\"/><path class=\"lp\" style=\"--i:0;--cx:79px;--cy:74px\" fill-rule=\"evenodd\" d=\"M138.8 8.4 L138.1 8.3 L137.4 8.6 L136.5 9.5 L135.7 10.9 L135.6 13.5 L134.8 15.1 L133.5 16.5 L132.2 18.5 L130.7 20.3 L128.1 23.9 L127.4 24.6 L126.6 25.7 L126.1 26.7 L125.5 27.2 L124.4 27.3 L123.2 28.7 L121.6 31.3 L120.2 32.7 L119.5 33.0 L115.0 32.9 L113.9 32.4 L112.8 31.3 L112.0 30.1 L108.0 25.7 L106.8 24.0 L104.5 21.3 L104.1 20.0 L104.3 18.5 L104.3 17.3 L104.1 16.6 L103.1 14.8 L102.4 14.1 L101.9 13.9 L101.3 14.0 L100.4 14.5 L99.2 14.9 L98.2 15.7 L97.4 17.7 L97.4 18.2 L97.8 19.4 L98.4 20.4 L99.2 21.0 L100.3 21.3 L102.2 21.3 L103.0 21.7 L105.6 24.6 L106.7 26.8 L109.0 29.4 L109.5 30.4 L110.9 31.9 L111.2 32.4 L111.1 32.5 L110.8 32.5 L110.2 32.1 L109.1 31.1 L108.3 30.6 L106.3 28.5 L104.7 27.4 L103.4 27.0 L78.8 27.0 L77.6 27.2 L73.1 27.0 L41.1 27.0 L40.2 27.2 L39.5 27.7 L38.8 28.6 L38.5 29.5 L37.8 30.7 L35.9 32.2 L34.6 32.8 L34.2 33.3 L34.0 34.0 L34.0 84.5 L33.6 85.1 L32.7 85.4 L32.2 85.9 L31.8 86.9 L30.8 88.4 L30.5 89.4 L30.0 89.9 L29.2 90.2 L25.8 90.3 L24.2 90.1 L19.5 90.1 L18.3 89.6 L17.3 89.4 L16.4 88.0 L15.4 87.2 L12.6 87.1 L11.6 87.5 L10.0 89.2 L9.5 90.3 L9.6 91.4 L10.4 92.9 L11.2 94.1 L11.9 94.8 L12.6 95.1 L15.3 95.0 L16.4 94.2 L17.2 93.1 L17.6 92.9 L18.3 92.9 L19.3 92.1 L20.3 91.7 L25.3 91.7 L29.2 91.9 L29.9 92.2 L30.5 92.8 L31.0 94.1 L32.2 96.3 L33.5 97.9 L33.7 99.1 L33.6 104.5 L33.1 106.4 L32.1 108.2 L31.6 108.7 L30.8 109.0 L25.4 108.9 L25.0 109.1 L24.3 109.8 L22.5 112.8 L22.3 113.5 L21.1 114.9 L21.0 115.9 L21.4 117.0 L23.1 119.9 L23.6 121.3 L24.2 122.3 L24.7 122.8 L25.4 123.1 L32.5 123.1 L33.4 122.6 L34.2 121.5 L34.6 120.6 L35.1 120.1 L36.3 119.7 L117.6 119.8 L119.2 119.6 L120.0 119.0 L120.7 117.7 L120.7 116.2 L120.9 115.5 L121.6 114.7 L123.2 114.7 L124.3 114.3 L125.5 114.2 L126.1 113.5 L126.4 112.6 L126.4 55.0 L127.0 53.4 L127.0 52.2 L127.5 51.6 L128.1 51.6 L128.8 52.2 L129.0 52.7 L129.0 53.6 L129.6 54.9 L130.3 55.9 L131.4 56.6 L132.7 56.6 L133.8 56.1 L134.4 55.5 L134.8 54.7 L134.9 53.7 L134.6 52.7 L133.4 51.7 L132.5 51.4 L131.3 51.4 L130.7 51.2 L129.8 50.6 L126.4 46.8 L125.6 45.4 L125.3 45.2 L124.2 45.1 L122.2 43.1 L121.5 42.0 L121.3 41.4 L121.3 40.6 L121.8 38.6 L122.1 38.1 L122.9 37.4 L124.4 36.9 L126.4 36.8 L127.4 36.5 L127.9 36.2 L128.0 35.8 L128.5 35.3 L129.0 35.1 L130.1 35.0 L130.6 35.2 L131.0 35.8 L131.0 36.1 L131.5 36.6 L132.2 36.9 L133.6 37.1 L134.5 36.8 L134.9 36.4 L135.0 35.2 L135.8 34.0 L135.9 32.9 L135.6 32.3 L134.3 31.1 L133.7 30.9 L132.5 30.9 L131.7 31.3 L131.1 31.9 L130.8 32.5 L129.8 33.4 L128.7 33.9 L127.0 34.1 L125.4 34.8 L124.1 34.8 L123.0 35.1 L122.3 35.0 L121.5 34.4 L121.4 33.5 L122.2 31.9 L124.3 29.7 L125.3 29.5 L125.7 29.1 L126.3 28.0 L128.8 25.1 L130.6 22.4 L131.5 21.5 L132.3 20.1 L133.8 18.5 L136.0 15.3 L137.1 14.5 L138.0 14.2 L139.0 14.1 L139.6 13.8 L140.5 12.9 L140.9 11.9 L140.9 11.0 L140.4 10.0ZM35.2 107.1 L36.0 105.5 L36.7 104.8 L37.4 104.7 L37.7 105.0 L37.9 105.6 L37.9 106.6 L37.7 107.4 L37.8 113.3 L38.5 114.3 L39.8 115.2 L40.5 115.5 L118.1 115.5 L118.9 115.8 L119.2 116.2 L119.2 117.2 L118.8 117.9 L118.0 118.4 L115.0 118.5 L38.3 118.4 L38.0 118.3 L37.4 117.5 L37.4 116.8 L37.6 116.2 L37.5 115.1 L36.2 113.1 L35.3 111.2ZM36.3 33.2 L37.3 33.4 L37.8 34.2 L37.8 83.1 L37.7 83.8 L37.4 84.4 L36.8 84.8 L36.1 84.8 L35.7 84.6 L35.3 84.1 L35.1 83.5 L35.1 34.6 L35.4 33.9 L36.0 33.3ZM104.2 29.7 L104.5 29.6 L105.5 30.1 L106.7 31.5 L109.1 33.7 L109.4 34.2 L110.6 35.3 L110.9 36.5 L114.9 40.5 L116.6 41.9 L118.0 43.4 L118.6 43.8 L121.4 46.6 L122.4 47.4 L122.5 48.1 L122.0 48.7 L105.0 48.8 L104.5 48.6 L104.0 48.1 L103.7 47.1 L103.7 30.6 L103.9 30.0ZM40.7 28.7 L41.6 28.4 L58.5 28.4 L69.9 28.6 L100.2 28.5 L100.7 28.6 L101.2 29.0 L101.5 29.9 L101.5 31.6 L101.3 32.2 L100.9 32.6 L100.4 32.8 L90.4 32.7 L64.9 33.0 L55.5 32.9 L55.0 33.1 L54.8 33.3 L54.9 33.8 L55.4 34.0 L57.1 33.9 L65.2 34.1 L73.7 34.0 L90.5 34.2 L100.4 34.1 L101.1 34.4 L101.5 35.0 L101.5 49.1 L101.8 49.9 L102.8 51.1 L104.3 51.6 L116.2 51.5 L117.2 51.8 L117.8 52.5 L117.6 54.3 L117.7 79.3 L117.8 79.6 L118.3 80.0 L118.9 79.9 L119.3 79.1 L119.4 54.8 L119.2 52.4 L119.5 51.9 L120.4 51.5 L122.9 51.6 L123.7 52.2 L123.8 111.6 L123.5 112.4 L123.0 112.9 L122.3 113.1 L121.5 112.9 L118.4 113.1 L77.3 113.2 L41.7 113.5 L40.9 113.2 L40.6 112.9 L40.1 111.4 L40.1 43.0 L39.9 42.9 L39.9 30.0 L40.1 29.9 L40.3 29.2Z\"/><path class=\"lp\" style=\"--i:1;--cx:69px;--cy:66px\" fill-rule=\"evenodd\" d=\"M81.6 49.9 L81.0 49.8 L63.5 50.0 L62.8 50.3 L62.4 50.9 L62.3 89.3 L62.5 89.7 L63.0 90.1 L63.8 90.3 L67.6 90.3 L68.1 90.1 L68.6 89.3 L68.5 72.4 L68.8 71.6 L69.5 71.1 L81.2 71.1 L81.8 70.6 L82.1 69.9 L82.1 66.1 L81.8 65.4 L81.2 64.9 L69.3 64.8 L68.8 64.3 L68.5 63.4 L68.5 56.8 L68.9 56.2 L69.5 55.9 L78.0 56.0 L81.1 55.9 L81.9 55.6 L82.4 55.0 L82.6 54.3 L82.4 53.3 L82.5 51.4 L82.1 50.3Z\"/><path class=\"lp\" style=\"--i:2;--cx:92px;--cy:78px\" fill-rule=\"evenodd\" d=\"M88.9 61.3 L88.3 61.7 L88.0 62.3 L88.1 89.5 L88.5 90.1 L89.4 90.4 L100.1 90.4 L100.6 90.1 L100.9 89.4 L101.0 87.0 L100.5 86.2 L99.5 85.9 L93.5 86.0 L93.0 85.6 L92.8 85.2 L92.8 62.8 L92.5 61.7 L91.9 61.3Z\"/><path class=\"lp\" style=\"--i:3;--cx:56px;--cy:89px\" fill-rule=\"evenodd\" d=\"M44.0 43.0 L44.0 107.0 L44.2 108.2 L44.5 108.5 L45.2 108.7 L60.9 108.7 L91.4 109.0 L93.9 108.8 L94.2 108.5 L94.1 107.9 L93.1 107.6 L61.7 107.8 L46.6 108.1 L45.6 107.4 L45.1 106.4 L45.2 43.0Z\"/><path class=\"lp\" style=\"--i:4;--cx:102px;--cy:108px\" fill-rule=\"evenodd\" d=\"M97.0 108.1 L97.0 108.6 L97.6 109.0 L105.4 109.0 L105.8 108.8 L106.0 108.5 L105.9 107.9 L104.7 107.6 L99.4 107.6 L97.4 107.8Z\"/><path class=\"lp\" style=\"--i:5;--cx:119px;--cy:94px\" fill-rule=\"evenodd\" d=\"M118.3 92.3 L117.9 92.6 L117.7 93.0 L117.6 93.9 L118.0 94.6 L118.8 94.8 L119.3 94.5 L119.5 93.6 L119.2 92.8 L118.8 92.4Z\"/><path class=\"lp\" style=\"--i:6;--cx:119px;--cy:89px\" fill-rule=\"evenodd\" d=\"M118.5 87.9 L118.2 88.0 L117.8 88.6 L117.7 89.6 L118.2 90.3 L118.7 90.4 L119.3 89.8 L119.4 88.9 L119.1 88.2Z\"/><path class=\"lp\" style=\"--i:7;--cx:118px;--cy:84px\" fill-rule=\"evenodd\" d=\"M118.2 83.2 L117.7 83.9 L117.7 84.8 L117.9 85.3 L118.5 85.7 L119.1 85.4 L119.3 85.0 L119.3 84.2 L119.1 83.6 L118.7 83.2Z\"/><text class=\"l21\" x=\"43.2\" y=\"39.6\">21</text></svg>";
  const logo = id => LOGO.replace('id="lg"', 'id="lg' + id + '"').replace('url(#lg)', 'url(#lg' + id + ')');
  const D = 'assets/projects/formula-da-licitacao/';
  const SW = [
    ['Verde', '#1BB11B', '#6BE04B', 'Green', true],
    ['Vermelho', '#C60D27', '#F2556B', 'Red'],
    ['Verde-água', '#2CB48F', '#6FE8C4', 'Teal'],
    ['Amarelo', '#B8A902', '#F0DE33', 'Yellow'],
    ['Laranja', '#C45802', '#FF9840', 'Orange'],
    ['Roxo', '#A402B9', '#DD5CF0', 'Purple']
  ];
  const TX = {
    pt: {
      wall: 'Aplicação', wallH: 'Na parede.', wallCap: 'Logotipo em mockup de parede',
      brand: 'A marca', stmt: 'Monograma FL no formato de um elemento da tabela periódica, com o número 21 e as ligações de uma molécula.',
      orig: 'Origem do logotipo', origH: 'Três referências, um ícone.', ref: 'Tabela periódica', mol: 'Moléculas e papéis', res: 'Monograma FL',
      note: 'O logotipo parte da referência visual de Breaking Bad e de estruturas moleculares e documentos, reunidos em um único monograma.',
      use: 'Aplicações do logotipo', useH: 'Horizontal e vertical.', hor: 'Horizontal', ver: 'Vertical',
      col: 'Cores', colH: 'Uma cor principal. Cinco variações.', main: 'principal', hint: 'Clique em uma cor para trocar o ícone.',
      typ: 'Tipografia', fam: 'Família', hd: 'Títulos', body: 'Texto'
    },
    en: {
      wall: 'Application', wallH: 'On the wall.', wallCap: 'Logo in a wall mockup',
      brand: 'The brand', stmt: 'An FL monogram shaped like a periodic table element, with the number 21 and the bonds of a molecule.',
      orig: 'Logo origin', origH: 'Three references, one icon.', ref: 'Periodic table', mol: 'Molecules and papers', res: 'FL monogram',
      note: 'The logo starts from the visual reference of Breaking Bad and from molecular structures and documents, brought together in one monogram.',
      use: 'Logo lockups', useH: 'Horizontal and vertical.', hor: 'Horizontal', ver: 'Vertical',
      col: 'Colors', colH: 'One main color. Five variations.', main: 'main', hint: 'Click a color to change the icon.',
      typ: 'Typography', fam: 'Family', hd: 'Headings', body: 'Text'
    }
  };
  const words = s => s.split(' ').map(w => '<span class="t' + (/^(FL|monograma|monogram)/i.test(w) ? ' hl' : '') + '">' + w + ' </span>').join('');

  window.formulaHTML = function (lang) {
    const T = TX[lang] || TX.pt;
    return `<div class="fl" id="fl">
 <section class="fl-s"><p class="fl-k rv-l">${T.wall}</p><h3 class="fl-h rv-l">${T.wallH}</h3>
  <div class="fl-wall rv-l" id="flWall"><img src="${D}cover.webp" alt="${T.wallCap}" loading="lazy"><span></span></div>
  <p class="fl-cap rv-l"><span>${T.wallCap}</span><span>FL · Film In</span></p></section>
 <section class="fl-s"><p class="fl-k rv-l">${T.brand}</p><p class="fl-stmt" id="flStmt">${words(T.stmt)}</p></section>
 <section class="fl-s"><p class="fl-k rv-l">${T.orig}</p><h3 class="fl-h rv-l">${T.origH}</h3>
  <div class="fl-eq rv-l">
   <div class="fl-card it"><div class="im d"><img src="${D}bb.webp" alt="" loading="lazy"></div><small>${T.ref}</small></div>
   <div class="op it">+</div>
   <div class="fl-card it"><div class="im"><img src="${D}mol.webp" alt="" loading="lazy"></div><small>${T.mol}</small></div>
   <div class="op it">=</div>
   <div class="fl-card res it">${logo(1)}<small>${T.res}</small></div>
  </div>
  <p class="fl-note rv-l">${T.note}</p></section>
 <section class="fl-s"><p class="fl-k rv-l">${T.use}</p><h3 class="fl-h rv-l">${T.useH}</h3>
  <div class="fl-use">
   <div class="fl-panel rv-l"><span>${T.hor}</span><img src="${D}lock-h.webp" alt="${T.hor}" loading="lazy"></div>
   <div class="fl-panel rv-l"><span>${T.ver}</span><img src="${D}lock-v.webp" alt="${T.ver}" loading="lazy"></div>
  </div></section>
 <section class="fl-s"><p class="fl-k rv-l">${T.col}</p><h3 class="fl-h rv-l">${T.colH}</h3>
  <div class="fl-cols">
   <div class="fl-big rv-l" id="flBig">${logo(2)}</div>
   <div class="rv-l"><div class="fl-sws">${SW.map(s => `<button type="button" class="fl-sw" style="background:linear-gradient(135deg,${s[1]},${s[2]})${s[0] === 'Amarelo' ? ';color:#1a1700' : ''}" data-c1="${s[1]}" data-c2="${s[2]}" aria-pressed="${!!s[4]}">${s[4] ? '<em>' + T.main + '</em>' : ''}<b>${lang === 'en' ? s[3] : s[0]}</b>${s[1]}</button>`).join('')}</div>
   <p class="fl-hint">${T.hint}</p></div>
  </div></section>
 <section class="fl-s"><p class="fl-k rv-l">${T.typ}</p>
  <div class="fl-type"><div class="fl-aa rv-l" aria-hidden="true">Aa</div>
   <div class="rv-l"><div class="fl-spec"><div>Futura<span>${T.fam}</span></div><div style="font-weight:700">Bold<span>${T.hd}</span></div><div style="font-weight:500">Medium<span>${T.body}</span></div></div>
   <p class="fl-abc">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz<br>0123456789</p></div></div></section>
</div>`;
  };

  let off = null;
  window.formulaWire = function (root, scroller) {
    if (off) off();
    const fl = root.querySelector('#fl'); if (!fl) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sws = fl.querySelectorAll('.fl-sw'), big = fl.querySelector('#flBig .logo');
    sws.forEach(b => b.addEventListener('click', () => {
      sws.forEach(x => x.setAttribute('aria-pressed', x === b));
      fl.style.setProperty('--fc1', b.dataset.c1); fl.style.setProperty('--fc2', b.dataset.c2); fl.style.setProperty('--phi', b.dataset.c2);
      big.classList.remove('sw'); void big.getBoundingClientRect(); big.classList.add('sw');
    }));
    const wall = fl.querySelector('#flWall'), wi = wall.querySelector('img');
    wall.addEventListener('pointermove', e => { const r = wall.getBoundingClientRect(); wall.style.setProperty('--mx', (e.clientX - r.left) + 'px'); wall.style.setProperty('--my', (e.clientY - r.top) + 'px'); });
    const st = fl.querySelector('#flStmt'), ws = st.querySelectorAll('.t');
    const tick = () => {
      const vh = innerHeight;
      if (reduce) { ws.forEach(w => w.classList.add('on')); return; }
      const r = st.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
      const n = Math.round(p * ws.length); ws.forEach((w, i) => w.classList.toggle('on', i < n));
      const q = wall.getBoundingClientRect(); const k = Math.max(-.7, Math.min(.7, (q.top + q.height / 2 - vh / 2) / vh));
      wi.style.transform = 'translateY(' + (k * -30).toFixed(1) + 'px) scale(' + (1 + Math.abs(k) * .02) + ')';
    };
    scroller.addEventListener('scroll', tick, { passive: true }); addEventListener('resize', tick); tick();
    off = () => { scroller.removeEventListener('scroll', tick); removeEventListener('resize', tick); off = null; };
  };
})();
