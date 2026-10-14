// Conteúdo do site: textos (PT/EN), projetos e experiência.
// Para editar um texto ou adicionar um projeto, mexa só neste arquivo.

const I18N = {
  pt: {
    skip: 'Ir para os trabalhos', menu: 'Abrir menu',
    'nav.work': 'Trabalhos', 'nav.about': 'Sobre', 'nav.experience': 'Experiência', 'nav.contact': 'Contato',
    'hero.role': 'Brand manager e designer. Do conceito à loja online.',
    'hero.intro': 'Crio identidades, campanhas, e-mails e páginas que funcionam juntos. Baseado no Porto.',
    'hero.cta': 'Ver trabalhos', 'hero.cta2': 'Falar comigo', 'hero.status': 'Aberto a novos projetos',
    'work.title': 'Trabalhos',
    'work.sub': 'Uma seleção do que já fiz. Clique em um projeto para ver tudo aqui mesmo.',
    'f.all': 'Tudo', 'f.social': 'Social media', 'f.email': 'E-mail', 'f.brand': 'Marca e print', 'f.photo': 'Foto e imagem', 'f.ui': 'UI/UX e web',
    'view': 'Ver',
    'proj.close': 'Fechar', 'proj.next': 'Próximo projeto', 'proj.empty': 'As imagens deste projeto entram em breve.',
    'about.title': 'Sobre',
    'about.p1': 'Sou publicitário formado pela ESPM e trabalho com design e marca desde 2016, entre o Rio de Janeiro, Lisboa, São Paulo e Porto.',
    'about.p2': 'Hoje cuido da marca da Curiouz de ponta a ponta: materiais online e offline, e-mail marketing no Klaviyo e a loja em Shopify. Prefiro ver o desenho e a execução no mesmo lugar, por isso estudei front-end e construo as páginas que desenho.',
    'about.p3': 'Estou sempre testando ferramentas novas, incluindo IA como ChatGPT, Lovable e Nano Banana, para entregar mais rápido sem perder o cuidado.',
    'stat.years': 'anos de experiência', 'stat.cities': 'cidades, 2 países', 'stat.brands': 'marcas e clientes',
    'skills.title': 'Ferramentas',
    'sk.design': 'Design', 'sk.mkt': 'Marketing e e-commerce', 'sk.web': 'Web', 'sk.ai': 'Inteligência artificial',
    'exp.title': 'Experiência', 'exp.sub': 'Clique em cada empresa para ver o que eu fazia lá.',
    'edu.title': 'Educação', 'lang.title': 'Idiomas',
    'langs': ['Português', 'Inglês', 'Alemão'],
    'contact.title': 'Vamos criar algo juntos?', 'contact.copy': 'Copiar e-mail', 'contact.copied': 'E-mail copiado',
    'foot.top': 'Voltar ao topo'
  },
  en: {
    skip: 'Skip to work', menu: 'Open menu',
    'nav.work': 'Work', 'nav.about': 'About', 'nav.experience': 'Experience', 'nav.contact': 'Contact',
    'hero.role': 'Brand manager and designer. From concept to online store.',
    'hero.intro': 'I make identities, campaigns, emails and pages that work together. Based in Porto.',
    'hero.cta': 'See work', 'hero.cta2': 'Get in touch', 'hero.status': 'Open to new projects',
    'work.title': 'Work',
    'work.sub': 'A selection of what I have done. Click a project to see it all right here.',
    'f.all': 'All', 'f.social': 'Social media', 'f.email': 'Email', 'f.brand': 'Brand and print', 'f.photo': 'Photo and imagery', 'f.ui': 'UI/UX and web',
    'view': 'View',
    'proj.close': 'Close', 'proj.next': 'Next project', 'proj.empty': 'Images for this project are coming soon.',
    'about.title': 'About',
    'about.p1': 'I studied advertising at ESPM and have worked in design and branding since 2016, across Rio de Janeiro, Lisbon, São Paulo and Porto.',
    'about.p2': 'Today I run the Curiouz brand end to end: online and offline materials, email marketing in Klaviyo and the Shopify store. I like keeping design and execution in one place, so I studied front-end and build the pages I design.',
    'about.p3': 'I keep testing new tools, including AI like ChatGPT, Lovable and Nano Banana, to deliver faster without losing care.',
    'stat.years': 'years of experience', 'stat.cities': 'cities, 2 countries', 'stat.brands': 'brands and clients',
    'skills.title': 'Tools',
    'sk.design': 'Design', 'sk.mkt': 'Marketing and e-commerce', 'sk.web': 'Web', 'sk.ai': 'Artificial intelligence',
    'exp.title': 'Experience', 'exp.sub': 'Click a company to see what I did there.',
    'edu.title': 'Education', 'lang.title': 'Languages',
    'langs': ['Portuguese', 'English', 'German'],
    'contact.title': "Let's make something together?", 'contact.copy': 'Copy email', 'contact.copied': 'Email copied',
    'foot.top': 'Back to top'
  }
};

// Cada projeto tem uma pasta assets/projects/<slug>/ com:
//   cover.webp  -> capa que aparece na página principal (pode ser animada)
//   1.webp, 2.webp, ... -> imagens que abrem dentro do site (informe quantas em gallery())
const gallery = (slug, n, ext = 'webp') => Array.from({ length: n }, (_, i) => `assets/projects/${slug}/${i + 1}.${ext}`);
const cover = slug => `assets/projects/${slug}/cover.webp`;

// cat: social | email | brand | photo | ui
// text: descrição opcional do projeto { pt: '...', en: '...' }
const PROJECTS = [
  { slug: 'social-media-1', title: 'Social Media', cat: 'social', cover: cover('social-media-1'), images: gallery('social-media-1', 5) },
  { slug: 'newsletter', title: 'Newsletter', cat: 'email', cover: cover('newsletter'), images: gallery('newsletter', 4) },
  { slug: 'merch', title: 'Brand Material', cat: 'brand', cover: cover('merch'), images: gallery('merch', 2) },
  { slug: 'photography', title: 'Photography', cat: 'photo', cover: cover('photography'), images: gallery('photography', 12) },
  { slug: 'uiux', title: 'UI/UX', cat: 'ui', cover: cover('uiux'), images: gallery('uiux', 3) },
  { slug: 'nosso-camarote-cartaz', title: 'Nosso Camarote Poster', cat: 'brand', meta: { pt: 'Cartaz · Bulli Create, 2019', en: 'Poster · Bulli Create, 2019' }, cover: cover('nosso-camarote-cartaz'), images: gallery('nosso-camarote-cartaz', 1) },
  { slug: 'formula-da-licitacao', title: 'Fórmula da Licitação', cat: 'brand', meta: { pt: 'Film In, 2019–2020', en: 'Film In, 2019–2020' }, cover: cover('formula-da-licitacao'), images: gallery('formula-da-licitacao', 1) },
  { slug: 'iron-box-landing-page', title: 'Iron Box Landing Page', cat: 'ui', meta: { pt: 'Landing page', en: 'Landing page' }, cover: cover('iron-box-landing-page'), images: gallery('iron-box-landing-page', 1) },
  { slug: 'manipulacao-cidade', title: 'Image Manipulation', cat: 'photo', cover: cover('manipulacao-cidade'), images: gallery('manipulacao-cidade', 2) },
  { slug: 'club-med', title: 'Club Med', cat: 'social', cover: cover('club-med'), images: gallery('club-med', 3) },
  { slug: 'social-media', title: 'Social Media Posts', cat: 'social', cover: cover('social-media'), images: gallery('social-media', 1) }
];

const SKILLS = [
  ['sk.design', ['Photoshop', 'Illustrator', 'InDesign', 'After Effects', 'Premiere', 'Audition', 'Figma', 'Adobe XD', 'Canva / Adobe Express']],
  ['sk.mkt', ['Klaviyo', 'Shopify', 'Google Analytics']],
  ['sk.web', ['HTML / CSS']],
  ['sk.ai', ['ChatGPT', 'Claude', 'Lovable', 'Nano Banana']]
];

const EXPERIENCE = [
  { co: 'Curiouz', place: 'Porto', period: '2024 – 2026',
    role: { pt: 'Brand Manager', en: 'Brand Manager' },
    items: {
      pt: ['Gestão de todos os materiais online e offline da marca.', 'Klaviyo: newsletters, listas, flows de e-mail e popups.', 'Shopify: landing pages, sections, automações, coleções e ajustes.'],
      en: ['Owned all online and offline brand materials.', 'Klaviyo: newsletters, lists, email flows and popups.', 'Shopify: landing pages, sections, automations, collections and tweaks.'] } },
  { co: 'Oriente 2000', place: 'Porto', period: '2023 – 2024',
    role: { pt: 'Designer / Marketing', en: 'Designer / Marketing' },
    items: { pt: ['Social media e e-mail marketing.', 'Fotografia e edição de produtos.'], en: ['Social media and email marketing.', 'Product photography and editing.'] } },
  { co: 'AW', place: 'São Paulo', period: '2022 – hoje',
    role: { pt: 'Designer freelancer', en: 'Freelance designer' },
    items: {
      pt: ["Social media e e-mail marketing para Clínica Sesma, Redes 2000, Robgraph, Atamed, Just Traduções, Editora Valentina, Colégio Edu'C Mais e Colégio Guilherme Dumont Villares."],
      en: ["Social media and email marketing for Clínica Sesma, Redes 2000, Robgraph, Atamed, Just Traduções, Editora Valentina, Colégio Edu'C Mais and Colégio Guilherme Dumont Villares."] } },
  { co: 'Zyrgon', place: 'Lisboa', period: '2021 – 2022',
    role: { pt: 'Designer', en: 'Designer' },
    items: {
      pt: ['Social media e material gráfico para Vimeiro, Discovery, Luggage, Focca, Vila Monte, Pioneer, Drama, Estoril e Sara Carreira.'],
      en: ['Social media and graphic materials for Vimeiro, Discovery, Luggage, Focca, Vila Monte, Pioneer, Drama, Estoril and Sara Carreira.'] } },
  { co: 'Film In', place: 'Rio de Janeiro', period: '2019 – 2020',
    role: { pt: 'Designer', en: 'Designer' },
    items: {
      pt: ['Material gráfico online e offline para Marea Club, Fórmula de Licitação e Best Sun Energy.', 'Identidade visual e layouts de sites e aplicativos.'],
      en: ['Online and offline graphic materials for Marea Club, Fórmula de Licitação and Best Sun Energy.', 'Visual identity and layouts for websites and apps.'] } },
  { co: 'Bulli Create', place: 'Rio de Janeiro', period: '2018 – 2019',
    role: { pt: 'Designer', en: 'Designer' },
    items: {
      pt: ['Identidade visual e comunicação estratégica: Nosso Camarote 2019 e Go Punta 2019.'],
      en: ['Visual identity and strategic communication: Nosso Camarote 2019 and Go Punta 2019.'] } },
  { co: 'Noblinddz', place: 'Rio de Janeiro', period: '2016 – 2017',
    role: { pt: 'Estagiário', en: 'Intern' },
    items: {
      pt: ['Material gráfico e conteúdo digital para Top Shopping e Maia Bebidas Finas.', 'Layouts para sites.'],
      en: ['Graphic materials and digital content for Top Shopping and Maia Bebidas Finas.', 'Website layouts.'] } }
];

const EDUCATION = [
  { t: { pt: 'Rumos · Especializado em Front-End Web Development', en: 'Rumos · Front-End Web Development specialization' }, d: '2022 – 2023 · Porto' },
  { t: { pt: 'Responsive Web Design Essentials: HTML5, CSS3, Bootstrap', en: 'Responsive Web Design Essentials: HTML5, CSS3, Bootstrap' }, d: '2020' },
  { t: { pt: 'ESPM · Publicidade e Propaganda', en: 'ESPM · Advertising' }, d: '2014 – 2018 · Rio de Janeiro' },
  { t: { pt: 'Colégio Cruzeiro', en: 'Colégio Cruzeiro' }, d: '2000 – 2012 · Rio de Janeiro' }
];
const LANG_LEVELS = [5, 4, 3];
