# AttanoTech – Site Institucional

Site institucional estático da **AttanoTech**, desenvolvido em HTML/CSS puro, sem dependências de frameworks ou build tools.

## Visão Geral

Landing page com identidade visual dark purple, fiel ao material de marca da empresa (apresentações, banners e proposta comercial 2026).

## Estrutura

```
attano-tech.html   # Arquivo único — todo o site (HTML + CSS inline)
```

## Seções

| Seção | ID | Descrição |
|---|---|---|
| Hero | — | Headline principal, CTA e contatos |
| Quem Somos | `#sobre` | Missão, texto institucional e stats |
| Diferenciais | `#recursos` | 6 cards de diferenciais |
| Depoimentos | `#depoimentos` | 3 cards de cases de sucesso |
| FAQ | `#perguntas-frequentes` | 4 perguntas e respostas |
| Reunião | `#reuniao` | CTA para contato e agendamento |

## Tecnologias

- **HTML5** semântico
- **CSS3** puro (custom properties, grid, flexbox, animações)
- **Google Fonts** — Barlow Condensed + Inter
- Sem JavaScript, sem frameworks, sem dependências

## Identidade Visual

| Variável | Valor | Uso |
|---|---|---|
| `--bg` | `#080810` | Fundo principal |
| `--bg-mid` | `#0d0d1a` | Fundo seções alternadas |
| `--purple` | `#7c3aed` | Cor de destaque principal |
| `--purple-lt` | `#a855f7` | Itálicos, stars, hover |
| `--white` | `#ffffff` | Títulos |
| `--muted` | `#7777aa` | Textos secundários |

## Como usar

Basta abrir o arquivo diretamente no navegador — não requer servidor:

```bash
# Linux / macOS
xdg-open attano-tech.html   # ou
open attano-tech.html

# Ou com Python (opcional, para servir localmente)
python3 -m http.server 8080
```

## Deploy

Por ser um arquivo estático único, pode ser publicado em qualquer serviço:

- **Nginx / Apache** — copiar para o diretório `www`
- **GitHub Pages** — commit do arquivo na branch `gh-pages`
- **Netlify / Vercel** — drag & drop do arquivo

## Contato

| Canal | Info |
|---|---|
| Site | [attano.tech](https://www.attanotech.com.br) |
| E-mail | contato@attanotech.com.br |
| Telefone | (14) 9 9136 4099 |
| Instagram | [@attanotech](https://instagram.com/attanotech) |