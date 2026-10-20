(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  document.documentElement.classList.add('js');

  /* ---------- idioma ---------- */
  let lang = 'pt';
  try { lang = localStorage.getItem('lang') || ((navigator.language || '').toLowerCase().startsWith('pt') ? 'pt' : 'en'); }
  catch (e) { lang = (navigator.language || '').toLowerCase().startsWith('pt') ? 'pt' : 'en'; }
  const t = (k) => (I18N[lang] && I18N[lang][k]) || I18N.pt[k] || k;

  let filter = 'all';
  let openExp = 0;

  function applyLang() {
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
    $('.skip').textContent = t('skip');
    $$('#langBtn [data-l]').forEach(s => s.classList.toggle('on', s.dataset.l === lang));
    $('#langBtn').setAttribute('aria-label', lang === 'pt' ? 'Mudar idioma: mudar para inglês' : 'Change language: switch to Portuguese');
    document.title = lang === 'pt'
      ? 'Matheus Mendonça — Brand manager e designer'
      : 'Matheus Mendonça — Brand manager and designer';
    renderProjects(); renderSkills(); renderExperience(); renderEdu();
    updateTimeline();
  }

  /* ---------- projetos ---------- */
  const pad2 = n => String(n).padStart(2, '0');
  function renderProjects() {
    const ul = $('#projectList');
    ul.innerHTML = PROJECTS.map((p, i) => {
      const cov = p.cover || (p.images && p.images[0]);
      return `<li class="p-item" style="--cd:${i % 3}" data-cat="${p.cat}"${filter !== 'all' && p.cat !== filter ? ' hidden' : ''}>
        <button class="card" type="button" data-i="${i}" data-cursor="${t('view')}">
          <span class="card-cover" data-cat="${p.cat}"><span class="card-tile">${p.title}</span>${cov ? `<img src="${cov}" alt="" loading="lazy" decoding="async">` : ''}</span>
          <span class="card-info"><span class="card-title">${p.title}</span></span>
        </button></li>`;
    }).join('');
    $$('.card-cover img', ul).forEach(img => img.addEventListener('error', () => img.remove()));
    bindCursorTargets();
    watchCards();
  }
  const cardIO = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); cardIO.unobserve(e.target); }
  }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }) : null;
  function watchCards() { $$('.p-item').forEach(li => (cardIO ? cardIO.observe(li) : li.classList.add('in'))); }

  $('#projectList').addEventListener('click', e => {
    const b = e.target.closest('.card'); if (!b) return;
    const r = b.getBoundingClientRect();
    openProject(+b.dataset.i, e.detail ? e.clientX : r.left + r.width / 2, e.detail ? e.clientY : r.top + r.height / 2);
  });

  $('#filters').addEventListener('click', e => {
    const b = e.target.closest('.chip'); if (!b) return;
    filter = b.dataset.filter;
    $$('.chip').forEach(c => c.classList.toggle('is-on', c === b));
    $$('.p-item').forEach(li => {
      const show = filter === 'all' || li.dataset.cat === filter;
      if (show) { li.hidden = false; li.classList.add('in'); requestAnimationFrame(() => li.classList.remove('hide')); }
      else { li.classList.add('hide'); setTimeout(() => { if (li.classList.contains('hide')) li.hidden = true; }, 350); }
    });
  });

  /* ---------- cursor ---------- */
  const cursor = $('.cursor'), cLabel = $('.cursor-label');
  const m = { x: innerWidth / 2, y: innerHeight / 2 };
  const c = { x: m.x, y: m.y };
  let cs = 1, csv = 1;

  function bindCursorTargets() {
    if (!fine) return;
    $$('[data-cursor]').forEach(el => {
      if (el._cb) return; el._cb = true;
      el.addEventListener('mouseenter', () => { cLabel.textContent = el.dataset.cursor; cursor.classList.add('is-big'); });
      el.addEventListener('mouseleave', () => cursor.classList.remove('is-big'));
    });
  }
  if (fine) {
    addEventListener('pointermove', e => { m.x = e.clientX; m.y = e.clientY; }, { passive: true });
    $$('a,button').forEach(el => {
      if (el.dataset.cursor) return;
      el.addEventListener('mouseenter', () => { if (!cursor.classList.contains('is-big')) { cs = 1.8; } });
      el.addEventListener('mouseleave', () => { cs = 1; });
    });
  }

  /* ---------- projeto aberto dentro do site ---------- */
  const proj = $('#proj'), pBody = $('#projBody'), pClose = $('#projClose');
  const behind = [$('main'), $('.site-header')];
  let lastFocus = null;

  /* galeria: layout publicado (js/layouts.js) (sem editor) */
  function baseLayout(p) {
    const L = (window.LAYOUTS || {})[p.slug] || {};
    const items = (L.items || (p.images || []).map(src => ({ src }))).map(x => typeof x === 'string' ? { src: x } : x);
    return { grid: L.grid || p.grid || '1', gap: L.gap || 'm', items };
  }
  const layoutOf = p => (window.PortfolioEditor && window.PortfolioEditor.layoutFor(p)) || baseLayout(p);
  function galleryInner(p) {
    const L = layoutOf(p);
    return L.items.map((it, k) =>
      `<figure class="${it.span === 'full' ? 'full' : ''}" data-k="${k}"><img src="${it.src}" alt="${p.title}, ${k + 1}" loading="lazy" decoding="async"></figure>`).join('')
      || `<p class="proj-empty">${t('proj.empty')}</p>`;
  }
  function wireImages(root) {
    $$('img', root).forEach(img => {
      const done = () => img.classList.add('in');
      if (img.complete && img.naturalWidth) done();
      else {
        img.addEventListener('load', done);
        img.addEventListener('error', () => { const f = img.closest('figure'); if (f) f.remove(); });
      }
    });
  }
  let cur = -1;
  function renderGallery(i = cur) {
    const g = $('#projGallery'); if (!g || i < 0) return;
    const L = layoutOf(PROJECTS[i]);
    g.dataset.grid = L.grid; g.dataset.gap = L.gap;
    g.innerHTML = galleryInner(PROJECTS[i]);
    wireImages(g); watchReveals(g);
    document.dispatchEvent(new CustomEvent('project:render', { detail: i }));
  }

  /* revelações ao rolar dentro da página de projeto */
  let revealIO = null;
  function watchReveals(root) {
    if (!('IntersectionObserver' in window)) { $$('.rv,figure,.pi-facts', root).forEach(el => el.classList.add('in')); return; }
    if (!revealIO) revealIO = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); revealIO.unobserve(e.target); }
    }), { root: proj, threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    const cols = (() => { const g = $('#projGallery'); const n = g && g.dataset.grid; return n === 'masonry' ? 3 : Math.max(1, +n || 1); })();
    $$('.proj-gallery figure', root).forEach((f, k) => { f.style.setProperty('--cd', k % cols); revealIO.observe(f); });
    $$('.rv, .pi-facts', root).forEach(el => revealIO.observe(el));
  }
  const words = txt => String(txt).split(' ').map((w, k) => `<span class="rw" style="--k:${k}">${w}</span>`).join(' ');
  const titleHTML = txt => String(txt).split(' ').map((w, wi, arr) => {
    const off = arr.slice(0, wi).join(' ').length + (wi ? 1 : 0);
    return `<span class="w">${[...w].map((ch, k) => `<span class="c"><span style="--k:${off + k}">${ch}</span></span>`).join('')}</span>`;
  }).join(' ');

  function projHTML(i) {
    const p = PROJECTS[i], next = PROJECTS[(i + 1) % PROJECTS.length], L = layoutOf(p);
    const cat = t('f.' + p.cat), meta = p.meta && p.meta[lang];
    const lead = p.lead && p.lead[lang], text = p.text && p.text[lang];
    const items = (p.deliver && p.deliver[lang]) || [];
    const facts = [
      `<div style="--d:0"><dt>${t('proj.type')}</dt><dd>${[cat, meta].filter(Boolean).join(' · ')}</dd></div>`,
      items.length ? `<div style="--d:1"><dt>${t('proj.deliver')}</dt><dd><ul>${items.map((x, k) => `<li style="--k:${k}">${x}</li>`).join('')}</ul></dd></div>` : ''
    ].join('');
    const strip = `<span>${p.title}</span><span>${cat}</span>`.repeat(5);
    return `<header class="ph">
        <div class="ph-glow" aria-hidden="true"></div>
        <div class="ph-in">
          <div class="ph-top fade" style="--d:0"><span class="ph-idx">${pad2(i + 1)}<small> / ${pad2(PROJECTS.length)}</small></span><span class="ph-chip">${cat}</span>${meta ? `<span class="ph-chip">${meta}</span>` : ''}</div>
          <h2 class="ph-title" id="projTitle" aria-label="${p.title}"><span aria-hidden="true">${titleHTML(p.title)}</span></h2>
          ${lead ? `<p class="ph-lead fade" style="--d:2">${lead}</p>` : ''}
        </div>
        ${p.cover ? `<div class="ph-cover"><img src="${p.cover}" alt=""></div>` : ''}
        <p class="ph-hint fade" style="--d:4"><span>${t('proj.scroll')}</span><i></i></p>
      </header>
      <div class="ph-strip" aria-hidden="true"><div>${strip}${strip}</div></div>
      <section class="pi">
        ${text ? `<p class="pi-text rv">${words(text)}</p>` : '<span></span>'}
        <dl class="pi-facts">${facts}</dl>
      </section>
      <div class="proj-gallery" id="projGallery" data-grid="${L.grid}" data-gap="${L.gap}">${galleryInner(p)}</div>
      <button class="proj-next" type="button" data-next="${(i + 1) % PROJECTS.length}"><span class="proj-next-label">${t('proj.next')}</span><span class="proj-next-title">${next.title}</span></button>`;
  }

  function openProject(i, x, y) {
    cur = i;
    const pr = PROJECTS[i];
    proj.style.setProperty('--pbg', pr.bg || '#14110F'); proj.style.setProperty('--phi', pr.hi || '#F2C230');
    pBody.innerHTML = projHTML(i);
    wireImages(pBody); watchReveals(pBody);
    proj.style.setProperty('--pp', 0); proj.style.setProperty('--py', 0);
    proj.style.setProperty('--ox', clamp(x == null ? innerWidth / 2 : x, 0, innerWidth) + 'px');
    proj.style.setProperty('--oy', clamp(y == null ? innerHeight / 2 : y, 0, innerHeight) + 'px');
    proj.scrollTop = 0;
    if (!proj.classList.contains('open')) lastFocus = document.activeElement;
    proj.classList.add('open'); proj.setAttribute('aria-hidden', 'false');
    behind.forEach(el => { el.inert = true; });
    document.documentElement.classList.add('lock');
    if (cursor) cursor.classList.remove('is-big');
    setTimeout(() => pClose.focus({ preventScroll: true }), 60);
    try { history.replaceState(null, '', '#p-' + PROJECTS[i].slug); } catch (e) {}
    document.dispatchEvent(new CustomEvent('project:open', { detail: i }));
  }

  function closeProject() {
    if (!proj.classList.contains('open')) return;
    proj.classList.remove('open'); proj.setAttribute('aria-hidden', 'true');
    behind.forEach(el => { el.inert = false; });
    document.documentElement.classList.remove('lock');
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    try { history.replaceState(null, '', '#work'); } catch (e) {}
    document.dispatchEvent(new CustomEvent('project:close'));
    cur = -1;
  }
  let pTick = false;
  proj.addEventListener('scroll', () => {
    if (pTick) return; pTick = true;
    requestAnimationFrame(() => {
      pTick = false;
      const max = proj.scrollHeight - proj.clientHeight;
      proj.style.setProperty('--pp', max > 0 ? (proj.scrollTop / max).toFixed(4) : 0);
      proj.style.setProperty('--py', reduce ? 0 : (proj.scrollTop * 0.18).toFixed(1));
    });
  }, { passive: true });
  pClose.addEventListener('click', closeProject);
  pBody.addEventListener('click', e => {
    const n = e.target.closest('[data-next]'); if (!n) return;
    const r = n.getBoundingClientRect();
    openProject(+n.dataset.next, e.clientX || r.left + r.width / 2, e.clientY || r.top + r.height / 2);
  });
  addEventListener('keydown', e => { if (e.key === 'Escape') closeProject(); });

  /* ---------- hero: nome com peso reagindo ao cursor ---------- */
  const name = $('#name');
  const chars = [];
  $$('.line', name).forEach(line => {
    const txt = line.textContent; line.textContent = '';
    [...txt].forEach(ch => {
      const s = document.createElement('span');
      s.className = 'char'; s.textContent = ch; s.setAttribute('aria-hidden', 'true');
      s.style.setProperty('--i', chars.length);
      line.appendChild(s); chars.push(s);
    });
  });
  requestAnimationFrame(() => requestAnimationFrame(() => name.classList.add('in')));
  const introDone = reduce ? 0 : 1500;
  let introReady = false; setTimeout(() => { introReady = true; }, introDone);

  /* ---------- marquees ---------- */
  const marquees = $$('.marquee').map(el => {
    const track = $('.track', el);
    const items = track.dataset.items.split(',');
    const html = items.map(i => `<span>${i}</span>`).join('');
    track.innerHTML = html + html;
    return { el, track, dir: +el.dataset.dir, speed: +el.dataset.speed, x: 0, half: 0 };
  });
  const measure = () => marquees.forEach(mq => { mq.half = mq.track.scrollWidth / 2; });
  addEventListener('load', measure); addEventListener('resize', measure);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);

  let lastY = scrollY, vel = 0;

  /* ---------- timeline ---------- */
  function updateTimeline() {
    const list = $('#expList'); if (!list) return;
    const r = list.getBoundingClientRect();
    const p = clamp((innerHeight * 0.6 - r.top) / r.height, 0, 1);
    $('.tl-fill', list).style.setProperty('--p', p.toFixed(4));
    $$('.x-item', list).forEach(it => {
      it.classList.toggle('on', it.getBoundingClientRect().top < innerHeight * 0.6);
    });
  }

  /* ---------- loop principal ---------- */
  let t0 = performance.now();
  function frame(now) {
    const dt = Math.min(48, now - t0); t0 = now;
    const y = scrollY; vel = lerp(vel, y - lastY, 0.15); lastY = y;

    if (fine && cursor) {
      c.x = lerp(c.x, m.x, 0.22); c.y = lerp(c.y, m.y, 0.22);
      csv = lerp(csv, cs, 0.2);
      cursor.style.transform = `translate(${c.x}px,${c.y}px) scale(${csv})`;
    }

    if (!reduce) {
      // nome: peso por proximidade (mouse) ou onda (toque)
      if (introReady) {
        chars.forEach((ch, i) => {
          let k;
          if (fine) {
            const b = ch.getBoundingClientRect();
            const d = Math.hypot(b.left + b.width / 2 - m.x, b.top + b.height / 2 - m.y);
            k = clamp(1 - d / (innerWidth * 0.22), 0, 1);
            ch._k = lerp(ch._k || 0, k, 0.14);
          } else {
            ch._k = 0.5 + 0.5 * Math.sin(now / 900 + i * 0.7);
          }
          const w = Math.round(lerp(380, 820, ch._k));
          const wd = Math.round(lerp(96, 78, ch._k));
          ch.style.fontVariationSettings = `"wght" ${w},"wdth" ${wd}`;
        });
      }
      // marquees: velocidade acompanha o scroll
      marquees.forEach(mq => {
        if (!mq.half) return;
        mq.x += mq.dir * (mq.speed * dt * 0.06 + Math.abs(vel) * 0.4);
        if (mq.x <= -mq.half) mq.x += mq.half;
        if (mq.x >= 0) mq.x -= mq.half;
        mq.track.style.transform = `translateX(${mq.x}px)`;
      });
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  /* ---------- tom da seção (fundo muda ao rolar) ---------- */
  const tones = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) document.body.dataset.tone = e.target.dataset.tone; });
  }, { rootMargin: '-50% 0px -50% 0px' });
  $$('section[data-tone]').forEach(s => tones.observe(s));

  /* ---------- header some ao descer ---------- */
  const header = $('.site-header');
  let hy = 0;
  addEventListener('scroll', () => {
    const y = scrollY;
    header.classList.toggle('is-hidden', y > hy && y > 200 && !document.body.classList.contains('menu-open'));
    hy = y;
    updateTimeline();
  }, { passive: true });

  /* ---------- menu mobile ---------- */
  const menuBtn = $('#menuBtn'), nav = $('#nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open);
    document.body.classList.toggle('menu-open', open);
  }
  menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  $$('a', nav).forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  /* ---------- skills ---------- */
  function renderSkills() {
    $('#skills').innerHTML = SKILLS.map(([k, items]) =>
      `<div class="sg"><h4>${t(k)}</h4><ul>${items.map(i => `<li>${i}</li>`).join('')}</ul></div>`).join('');
  }

  /* ---------- experiência ---------- */
  function renderExperience() {
    const ol = $('#expList');
    $$('.x-item', ol).forEach(n => n.remove());
    EXPERIENCE.forEach((x, i) => {
      const li = document.createElement('li');
      li.className = 'x-item' + (i === openExp ? ' open' : '');
      li.innerHTML = `<span class="x-dot"></span>
        <button class="x-head" type="button" aria-expanded="${i === openExp}" aria-controls="xp${i}">
          <span class="x-co">${x.co}</span><span class="x-role">${x.role[lang]}</span>
          <span class="x-meta">${x.period} · ${x.place}</span><span class="x-plus" aria-hidden="true"></span>
        </button>
        <div class="x-panel" id="xp${i}" role="region"><div><ul>${x.items[lang].map(b => `<li>${b}</li>`).join('')}</ul></div></div>`;
      ol.appendChild(li);
    });
    $$('.x-head', ol).forEach((b, i) => b.addEventListener('click', () => {
      const items = $$('.x-item', ol);
      const wasOpen = items[i].classList.contains('open');
      items.forEach((it, j) => {
        const open = j === i && !wasOpen;
        it.classList.toggle('open', open);
        $('.x-head', it).setAttribute('aria-expanded', open);
      });
      openExp = wasOpen ? -1 : i;
    }));
  }

  function renderEdu() {
    $('#eduList').innerHTML = EDUCATION.map(e => `<li><span>${e.t[lang]}</span><span>${e.d}</span></li>`).join('');
    const names = t('langs');
    $('#langList').innerHTML = names.map((n, i) =>
      `<li><span>${n}</span><span class="dots" aria-label="${LANG_LEVELS[i]}/5">${[0, 1, 2, 3, 4].map(k => `<i class="${k < LANG_LEVELS[i] ? 'on' : ''}"></i>`).join('')}</span></li>`).join('');
  }

  /* ---------- contadores ---------- */
  const counters = new IntersectionObserver(es => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      counters.unobserve(e.target);
      const el = e.target, to = +el.dataset.to;
      if (reduce) { el.textContent = to; return; }
      const start = performance.now(), dur = 1300;
      (function tick(n) {
        const p = clamp((n - start) / dur, 0, 1);
        el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      })(start);
    });
  }, { threshold: 0.6 });
  $$('.count').forEach(el => counters.observe(el));

  /* ---------- botões magnéticos ---------- */
  if (fine && !reduce) {
    $$('.magnetic').forEach(el => {
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.25, dy = (e.clientY - (r.top + r.height / 2)) * 0.35;
        el.style.transform = `translate(${dx}px,${dy}px)`;
      });
      el.addEventListener('pointerleave', () => { el.style.transition = 'transform .6s cubic-bezier(.2,.7,.1,1), background-color .35s, color .35s'; el.style.transform = ''; setTimeout(() => { el.style.transition = ''; }, 600); });
    });
  }

  /* ---------- copiar e-mail ---------- */
  const copyBtn = $('#copyBtn');
  copyBtn.addEventListener('click', async () => {
    const mail = $('#mailLink').textContent.trim();
    try { await navigator.clipboard.writeText(mail); } catch (e) {
      const ta = document.createElement('textarea'); ta.value = mail; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch (_) {} ta.remove();
    }
    const span = $('span', copyBtn); span.textContent = t('contact.copied');
    $('#live').textContent = t('contact.copied');
    setTimeout(() => { span.textContent = t('contact.copy'); }, 1800);
  });

  /* ---------- idioma toggle ---------- */
  $('#langBtn').addEventListener('click', () => {
    lang = lang === 'pt' ? 'en' : 'pt';
    try { localStorage.setItem('lang', lang); } catch (e) {}
    applyLang();
  });

  window.Portfolio = { PROJECTS, current: () => cur, renderGallery, lang: () => lang, baseLayout };

  $('#year').textContent = new Date().getFullYear();
  applyLang();

  // link direto para um projeto, ex.: site/#p-club-med
  const hash = location.hash;
  if (hash.startsWith('#p-')) {
    const i = PROJECTS.findIndex(p => '#p-' + p.slug === hash);
    if (i >= 0) openProject(i);
  }
})();
