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
    'proj.close': 'Fechar', 'proj.client': 'Cliente', 'proj.deliver': 'O que entreguei', 'proj.type': 'Tipo', 'proj.pieces': 'Imagens', 'proj.scroll': 'Role para ver', 'proj.next': 'Próximo projeto', 'proj.empty': 'As imagens deste projeto entram em breve.',
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
    'proj.close': 'Close', 'proj.client': 'Client', 'proj.deliver': 'What I delivered', 'proj.type': 'Type', 'proj.pieces': 'Images', 'proj.scroll': 'Scroll to see', 'proj.next': 'Next project', 'proj.empty': 'Images for this project are coming soon.',
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
// lead: frase de abertura | text: apresentação | client: cliente ou contexto | deliver: o que foi entregue
// bg / hi: cor de fundo e cor de destaque da página de abertura do projeto
const PROJECTS = [
  { slug: 'social-media-1', title: 'Social Media', cat: 'social', cover: cover('social-media-1'), images: gallery('social-media-1', 5),
    bg: '#2A1B14', hi: '#F5C84C',
    lead: { pt: 'Uma linguagem de marca pensada para a tela vertical.', en: 'A brand language made for the vertical screen.' },
    text: { pt: 'Posts e stories para a Curiouz, plataforma de mobiliário vintage e peças de design, e para a Legacy Gallery. Retratos, peças icônicas e uma paleta quente de marrons, creme e amarelo dão ritmo ao feed, com textos curtos e tipografia limpa para ler em segundos.', en: 'Posts and stories for Curiouz, a platform for vintage furniture and design pieces, and for Legacy Gallery. Portraits, iconic pieces and a warm palette of browns, cream and yellow give the feed its rhythm, with short copy and clean type that reads in seconds.' },
    client: { pt: 'Curiouz e Legacy Gallery', en: 'Curiouz and Legacy Gallery' },
    deliver: { pt: ['Posts e stories', 'Direção de arte', 'Sistema visual para o feed'], en: ['Posts and stories', 'Art direction', 'Visual system for the feed'] } },
  { slug: 'newsletter', title: 'Newsletter', cat: 'email', cover: cover('newsletter'), images: gallery('newsletter', 4),
    bg: '#14110F', hi: '#E8A65A',
    lead: { pt: 'E-mails que contam uma história até o botão.', en: 'Emails that tell a story all the way to the button.' },
    text: { pt: 'Newsletters e e-mails de relacionamento para a Legacy Gallery: boas-vindas, onboarding, novidades do mercado e convites para feiras de design. Cada layout alterna blocos escuros e claros, com hierarquia clara e uma chamada para ação em destaque.', en: 'Newsletters and relationship emails for Legacy Gallery: welcome, onboarding, market news and invitations to design fairs. Each layout alternates dark and light blocks, with clear hierarchy and a standout call to action.' },
    client: { pt: 'Legacy Gallery', en: 'Legacy Gallery' },
    deliver: { pt: ['Layouts de e-mail', 'Montagem no Klaviyo', 'Séries de boas-vindas e novidades'], en: ['Email layouts', 'Klaviyo build', 'Welcome and news series'] } },
  { slug: 'merch', title: 'Brand Material', cat: 'brand', cover: cover('merch'), images: gallery('merch', 2),
    bg: '#0B0B0B', hi: '#2CB5A8',
    lead: { pt: 'A marca saindo da tela e indo para as mãos.', en: 'The brand leaving the screen and reaching your hands.' },
    text: { pt: 'Materiais de marca da Curiouz: logotipo, cartão de visita, tote bags, almofada, camiseta e adesivos. As peças levam o tom da marca para o mundo físico, com frases curtas e um preto e branco que deixa o produto e a luz aparecerem.', en: 'Curiouz brand materials: logo, business card, tote bags, cushion, t-shirt and stickers. The pieces take the brand voice into the physical world, with short lines and a black and white that lets the product and the light show.' },
    client: { pt: 'Curiouz', en: 'Curiouz' },
    deliver: { pt: ['Logotipo e aplicações', 'Cartão de visita', 'Brindes e merchandising'], en: ['Logo and applications', 'Business card', 'Merchandise and giveaways'] } },
  { slug: 'photography', title: 'Photography', cat: 'photo', cover: cover('photography'), images: gallery('photography', 12),
    bg: '#1E1A17', hi: '#F2C230',
    lead: { pt: 'Objetos de design vistos de perto.', en: 'Design objects seen up close.' },
    text: { pt: 'Fotografia de ambiente e de detalhe em showroom de design: poltronas, jogo de xadrez em mármore e latão, prateleiras, luz natural entrando pela vitrine. Imagens que mostram a peça no espaço onde ela vive.', en: 'Ambient and detail photography in a design showroom: armchairs, a marble and brass chess set, shelves, natural light through the shop window. Images that show each piece in the space where it lives.' },
    client: { pt: 'Showroom de design', en: 'Design showroom' },
    deliver: { pt: ['Fotografia de produto e ambiente', 'Seleção e edição', 'Imagens para site e redes'], en: ['Product and ambient photography', 'Selection and editing', 'Images for web and social'] } },
  { slug: 'uiux', title: 'UI/UX', cat: 'ui', cover: cover('uiux'), images: gallery('uiux', 3),
    bg: '#231A1C', hi: '#D9B99B',
    lead: { pt: 'Do catálogo ao painel do vendedor.', en: 'From the catalog to the seller dashboard.' },
    text: { pt: 'Design de interface para a plataforma da Curiouz: home, catálogo, páginas de produto, páginas de marca, formulário e um painel de desempenho com receita e categorias. Muito espaço em branco e fotografia grande para o produto ser o protagonista.', en: 'Interface design for the Curiouz platform: home, catalog, product pages, brand pages, forms and a performance dashboard with revenue and categories. Plenty of white space and large photography so the product stays the hero.' },
    client: { pt: 'Curiouz', en: 'Curiouz' },
    deliver: { pt: ['Layouts de páginas', 'Fluxos de catálogo e produto', 'Painel de desempenho'], en: ['Page layouts', 'Catalog and product flows', 'Performance dashboard'] } },
  { slug: 'nosso-camarote-cartaz', title: 'Nosso Camarote Poster', cat: 'brand', meta: { pt: 'Cartaz · Bulli Create', en: 'Poster · Bulli Create' }, cover: cover('nosso-camarote-cartaz'), images: gallery('nosso-camarote-cartaz', 1),
    bg: '#120A18', hi: '#FF2DAA',
    lead: { pt: 'Neon, máscara e Sapucaí.', en: 'Neon, masks and the Sapucaí.' },
    text: { pt: 'Identidade e cartaz do Nosso Camarote para o Carnaval. O logotipo em listras com brilho neon rosa sobre fundo escuro ganha uma peça de conceito com máscara e a palavra Carnaval, para a comunicação da festa.', en: 'Identity and poster for Nosso Camarote at Carnival. The striped logo with a pink neon glow on a dark background becomes a concept piece with a mask and the word Carnaval, for the party communication.' },
    client: { pt: 'Nosso Camarote, via Bulli Create', en: 'Nosso Camarote, via Bulli Create' },
    deliver: { pt: ['Identidade visual', 'Cartaz', 'Peças de divulgação'], en: ['Visual identity', 'Poster', 'Promotional pieces'] } },
  { slug: 'formula-da-licitacao', title: 'Fórmula da Licitação', cat: 'brand', meta: { pt: 'Film In', en: 'Film In' }, cover: cover('formula-da-licitacao'), images: gallery('formula-da-licitacao', 1),
    bg: '#0E1A2B', hi: '#6BE04B',
    lead: { pt: 'Um monograma que vira ícone.', en: 'A monogram that becomes an icon.' },
    text: { pt: 'Marca para a Fórmula da Licitação, com o monograma FL em verde sobre um bloco em perspectiva e detalhes que lembram uma tela e uma rede. Apresentada em mockup de parede para mostrar a marca em um escritório real.', en: 'Brand for Fórmula da Licitação, with a green FL monogram on a block in perspective and details that recall a screen and a network. Shown in a wall mockup to place the brand in a real office.' },
    client: { pt: 'Fórmula da Licitação, via Film In', en: 'Fórmula da Licitação, via Film In' },
    deliver: { pt: ['Logotipo', 'Aplicação em mockup'], en: ['Logo', 'Mockup application'] } },
  { slug: 'iron-box-landing-page', title: 'Iron Box Landing Page', cat: 'ui', meta: { pt: 'Landing page', en: 'Landing page' }, cover: cover('iron-box-landing-page'), images: gallery('iron-box-landing-page', 1),
    bg: '#0C0C0C', hi: '#F58B1F',
    lead: { pt: 'Escuro, intenso e com laranja onde importa.', en: 'Dark, intense, with orange where it counts.' },
    text: { pt: 'Landing page para a academia Iron Box. Foto de treino em largura total, blocos com ícones para comunicação, aulas e atividades, e uma seção Quem Somos. O laranja guia o olhar até as chamadas para ação.', en: 'Landing page for the Iron Box gym. A full-width training photo, icon blocks for communication, classes and activities, and an About section. Orange guides the eye to the calls to action.' },
    client: { pt: 'Iron Box', en: 'Iron Box' },
    deliver: { pt: ['Layout da página', 'Seleção de imagens', 'Ícones e blocos'], en: ['Page layout', 'Image selection', 'Icons and blocks'] } },
  { slug: 'manipulacao-cidade', title: 'Image Manipulation', cat: 'photo', cover: cover('manipulacao-cidade'), images: gallery('manipulacao-cidade', 2),
    bg: '#151515', hi: '#E6E6E6',
    lead: { pt: 'Uma cidade que nunca existiu.', en: 'A city that never existed.' },
    text: { pt: 'Fotomontagens em preto e branco: um horizonte urbano, nuvens carregadas e elementos de fantasia combinados em uma só cena. Exercício de luz, escala e textura para que tudo pareça parte da mesma fotografia.', en: 'Black and white photo manipulations: an urban skyline, heavy clouds and fantasy elements merged into a single scene. An exercise in light, scale and texture so everything feels like part of the same photograph.' },
    deliver: { pt: ['Fotomontagem', 'Tratamento de cor e luz'], en: ['Photo manipulation', 'Color and light treatment'] } },
  { slug: 'club-med', title: 'Club Med', cat: 'social', cover: cover('club-med'), images: gallery('club-med', 3),
    bg: '#0B2A5B', hi: '#FF5A4F',
    lead: { pt: 'Férias com tudo incluído, em duas palavras.', en: 'All-inclusive holidays, in two words.' },
    text: { pt: 'Peças promocionais para o Club Med em torno dos conceitos Action Inclusive e Fun Inclusive. Letras manuscritas sobre fotografias de mar e de pessoas em movimento, para vender energia e leveza antes de qualquer detalhe.', en: 'Promotional pieces for Club Med built around the Action Inclusive and Fun Inclusive concepts. Hand-lettered type over sea photography and people in motion, selling energy and lightness before any detail.' },
    client: { pt: 'Club Med', en: 'Club Med' },
    deliver: { pt: ['Peças promocionais', 'Lettering', 'Composição de imagens'], en: ['Promotional pieces', 'Lettering', 'Image composition'] } }
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
