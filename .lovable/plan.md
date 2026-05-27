## Objetivo

Fazer o projeto rodar na Hostinger (hospedagem compartilhada, só estáticos) sem perder nenhuma funcionalidade do downloader do Facebook. Isso exige duas mudanças grandes:

1. **Frontend**: deixar de ser TanStack Start (SSR) e virar SPA puro (Vite + React + TanStack Router em modo client-only). Hostinger consegue servir `index.html` + assets, mas não executa Node/Workers.
2. **Backend do downloader**: o `extractFacebookVideo` (server function) e o `/api/public/fb-download` (proxy de stream) precisam ir para um servidor de verdade. Vou habilitar **Lovable Cloud** e criar uma **Edge Function** que faz as duas coisas, chamada por fetch do frontend.

## Passos

### 1. Habilitar Lovable Cloud
- Necessária para hospedar a função do downloader (a Hostinger não roda código).
- Criar a edge function `fb-extract` (POST, recebe `{ url }`, retorna `{ title, thumbnail, hd, sd }`) reaproveitando a lógica de `src/lib/facebook.functions.ts`.
- Criar a edge function `fb-download` (GET, recebe `?u=...&name=...`, faz streaming do MP4 com header `Content-Disposition`).
- Ambas com CORS liberado para o domínio da Hostinger.

### 2. Migrar Vite config e entry para SPA
- Substituir `@lovable.dev/vite-tanstack-config` por `@vitejs/plugin-react` puro.
- Criar `index.html` na raiz (entry estático do Vite).
- Criar `src/main.tsx` que monta `<RouterProvider>` no client.
- Remover `src/server.ts`, `src/start.ts`, `wrangler.jsonc`.
- Manter `src/router.tsx` e o `routeTree.gen.ts` do TanStack Router (continua funcionando em SPA — só o "Start" sai).

### 3. Ajustar rotas
- Remover `head()` baseado em SSR; usar `react-helmet-async` (ou setar `document.title` + meta no client) para preservar título/description/OG/JSON-LD por rota. SEO em SPA é mais fraco, mas mantém o que dá.
- Apagar `src/routes/api/public/fb-download.ts` (substituído pela edge function).
- Apagar `src/lib/facebook.functions.ts` (substituído por chamada `fetch` no `Downloader.tsx`).

### 4. Atualizar `src/components/Downloader.tsx`
- Trocar `useServerFn(extractFacebookVideo)` por um `fetch(<edge-function-url>/fb-extract)`.
- Trocar o link `/api/public/fb-download?...` pela URL da edge function `fb-download`.

### 5. Build e deploy na Hostinger
- `npm run build` agora gera `dist/` com `index.html` + assets (sem `dist/server`).
- Adicionar `public/.htaccess` com fallback SPA:
  ```
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
  ```
- O workflow `.github/workflows/deploy.yml` continua igual (já envia `./dist/` para `/`).

### 6. Variáveis
- A URL pública das edge functions da Lovable Cloud fica em `VITE_FB_API_URL` (env do Vite, exposta no client) para o frontend usar.

## Riscos / observações

- **SEO piora**: sem SSR, crawlers veem só o `index.html` inicial. Os títulos/JSON-LD por rota viram client-side. Para esse tipo de site (ferramenta), é aceitável.
- **CORS**: precisa configurar a edge function pra aceitar o domínio da Hostinger.
- **Edge function timeout**: extrair vídeo do Facebook normalmente < 5s, dentro do limite.
- A primeira versão do projeto provavelmente já era SPA pura — esse plano volta pra essa arquitetura.

## Arquivos principais que vou criar/editar/remover

**Criar**: `index.html`, `src/main.tsx`, `public/.htaccess`, edge functions `fb-extract` e `fb-download`.
**Editar**: `vite.config.ts`, `package.json` (scripts/deps), `src/router.tsx`, `src/components/Downloader.tsx`, todas as rotas (remover `head()` SSR, usar Helmet).
**Remover**: `src/server.ts`, `src/start.ts`, `src/lib/facebook.functions.ts`, `src/routes/api/public/fb-download.ts`, `wrangler.jsonc`.

Confirma que posso seguir com esse plano? Em particular: **(a)** posso habilitar Lovable Cloud para hospedar o downloader, e **(b)** confirma que aceita perder o SSR (SEO via Helmet client-side em vez de tags no HTML inicial)?