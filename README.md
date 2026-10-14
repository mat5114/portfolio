# Portfólio — Matheus Mendonça

Site estático (HTML, CSS e JavaScript puros). Não precisa instalar nada nem fazer build.

## Publicar no GitHub Pages (grátis)

1. Crie uma conta em github.com e um repositório novo, público. Para ter o link curto `https://SEU-USUARIO.github.io`, chame o repositório de `SEU-USUARIO.github.io`.
2. Envie todos os arquivos desta pasta para o repositório (botão **Add file → Upload files**, arrastando o conteúdo da pasta, com `index.html` na raiz).
3. Vá em **Settings → Pages**, em *Branch* escolha `main` e a pasta `/ (root)`, e salve.
4. Em 1 a 2 minutos o site abre no link mostrado nessa mesma tela.

## Como editar

- **Textos, projetos e experiência:** `js/data.js` (tudo em português e inglês).
- **Imagens dos projetos:** cada projeto tem uma pasta `assets/projects/<nome-do-projeto>/` (o nome é o campo `slug` em `js/data.js`). `cover.webp` é a capa mostrada na página principal (pode ser animada) e `1.webp`, `2.webp`... são as imagens que abrem dentro do site. Para trocar ou acrescentar imagens, ponha o arquivo na pasta e ajuste o número em `gallery('<nome-do-projeto>', N)`.
- **Descrição de um projeto:** adicione `text: { pt: '...', en: '...' }` ao projeto em `js/data.js`.
- **Categoria de cada projeto:** campo `cat` em `js/data.js` (`social`, `email`, `brand`, `photo` ou `ui`).
- **Link direto para um projeto:** `seusite/#p-club-med` (o `slug` depois de `#p-`).
- **Cores:** variáveis no começo de `css/style.css` (`--pink`, `--ink`, `--paper`).
- **Foto:** substitua `assets/matheus.jpg`.
- **Nome:** `index.html` (título e bloco `h1`) e `js/main.js` não precisam de mais nada, as letras animadas são geradas a partir do texto do `h1`.

## Fotos e grade dos projetos

Cada projeto tem uma entrada em `js/layouts.js` com `grid` (`'1'`, `'2'`, `'3'`, `'4'` ou `'masonry'`), `gap` (`'s'`, `'m'` ou `'l'`) e a lista `items` com as fotos, na ordem em que aparecem. Para adicionar uma foto, coloque o arquivo em `assets/projects/<projeto>/` e inclua uma linha `{ src: 'assets/projects/<projeto>/arquivo.webp' }`. Para ocupar a largura toda, use `{ src: '...', span: 'full' }`. Para remover, apague a linha.

As fontes (Bricolage Grotesque e Instrument Serif) vêm do Google Fonts, então o site precisa de internet para aparecer exatamente como desenhado.
