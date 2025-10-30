# Componentes Web Grupo Base

SPA profissional construída com React, TypeScript, Tailwind CSS e Vite para apresentar os componentes e serviços digitais do Grupo Base.

## Stack principal
- [Vite](https://vitejs.dev/) com React e TypeScript
- [Tailwind CSS](https://tailwindcss.com/) para estilos utilitários
- [React Router DOM](https://reactrouter.com/) para navegação SPA com carregamento preguiçoso

## Como usar
1. Instale as dependências: `npm install`
2. Ambiente de desenvolvimento com hot reload: `npm run dev`
3. Geração de build otimizada e sitemap: `npm run build`
4. Pré-visualização da build: `npm run preview`

## Deploy no GitHub Pages
O pipeline em `.github/workflows/deploy.yml` publica automaticamente o conteúdo de `dist/` no GitHub Pages a cada push na branch `main`.

Após o primeiro build no GitHub Actions, habilite o Pages apontando para **GitHub Actions** nas configurações do repositório.

## Publicação em domínio próprio
- Requisitos: DNS configurado conforme [DEPLOY_DNS.md](DEPLOY_DNS.md).
- Build e deploy automáticos executados em cada push para `main` com GitHub Pages.
- Ambientes filhos por subdomínio (staging, app, docs, blog) compartilham o mesmo deploy e têm rotas dedicadas `/status`, `/docs` e `/blog`.

## Estrutura
```
├── public/              # Arquivos estáticos (favicon, manifest, robots)
├── src/
│   ├── components/      # Componentes reutilizáveis (Navbar, Hero, etc.)
│   ├── data/            # Conteúdos em JSON consumidos pelas páginas
│   ├── lib/             # Utilitários, incluindo SEO helper
│   └── pages/           # Rotas da aplicação carregadas com lazy loading
├── scripts/             # Script de geração de sitemap (executado após o build)
└── .github/workflows/   # Automação de deploy para o GitHub Pages
```

## SEO e acessibilidade
- Metadados dinâmicos configurados por página.
- Sitemap atualizado automaticamente no processo de build.
- Componentes com foco visível, ARIA e navegação por teclado.
