# CRA to Vite + Express Migration Guide

## Overview
This guide provides step-by-step instructions to convert Deep Lake Sound from Create-React-App (CRA) to Vite (frontend) with Express (backend), formatted for DigitalOcean App Platform.

**Architecture after migration:**
- **Frontend**: Vite + React 18 (fast dev builds, optimized production bundles)
- **Backend**: Express.js Node server (serves SPA, static assets, potential API routes)
- **Deployment**: DigitalOcean App Platform via `app.yaml` manifest
- **Structure**: Monorepo with `/client` and `/server` directories

---

## Phase 1: Project Structure Setup

### 1.1 Create new directory structure
```bash
mkdir -p deeplakesound-vite/{client,server}
cd deeplakesound-vite
```

### 1.2 Initialize Git for the new structure (or create branch)
```bash
# Option A: Create separate branch for migration
git checkout -b vite-express-migration

# Option B: Start fresh
git init
git remote add origin <your-repo-url>
```

### 1.3 Copy frontend source files to `/client`
```bash
# Copy all frontend source
cp -r src/ client/src/
cp -r public/ client/public/
cp package.json client/
cp .gitignore client/

# Copy only needed assets/styles
cp -r src/assets/ client/src/assets/
```

---

## Phase 2: Frontend Conversion (Vite Setup)

### 2.1 Update `client/package.json`
Replace CRA dependencies with Vite equivalents:

```json
{
  "name": "deeplakesound-client",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.3.0",
    "@mui/material": "^7.3.4",
    "@mui/icons-material": "^7.3.4",
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.0.0",
    "vitest": "^1.0.0"
  }
}
```

### 2.2 Create `client/vite.config.js`
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser'
  }
})
```

### 2.3 Convert `client/src/main.jsx` (new entry point, replace index.js)
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
```

### 2.4 Create `client/index.html` (new Vite entry, replaces public/index.html)
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Deep Lake Sound</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### 2.5 Update component references in `client/src/`
- Rename `src/index.js` → delete (use `main.jsx` instead)
- Keep `src/App.js` unchanged
- Keep all components in `src/components/`
- Update CSS imports if using `.css` files (Vite handles these natively)

---

## Phase 3: Backend Setup (Express)

### 3.1 Initialize `server/package.json`
```json
{
  "name": "deeplakesound-server",
  "version": "0.1.0",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}
```

### 3.2 Create `server/index.js`
```javascript
import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Serve static files from Vite build output
const clientBuildPath = path.join(__dirname, '../client/dist')
app.use(express.static(clientBuildPath))

// Example API route (optional)
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// SPA fallback: serve index.html for all unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'))
})

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal Server Error' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
```

### 3.3 Create `server/.env.example`
```
PORT=5000
NODE_ENV=development
```

### 3.4 Create `.gitignore` at root
```
node_modules/
dist/
.env
.DS_Store
*.log
```

---

## Phase 4: DigitalOcean App Platform Configuration

### 4.1 Create `app.yaml` at project root
```yaml
name: deeplakesound
services:
  - name: web
    github:
      branch: main
      repo: YOUR_GITHUB_ORG/deeplakesound
    build_command: cd client && npm install && npm run build && cd ../server && npm install
    run_command: cd server && npm start
    http_port: 5000
    envs:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: "5000"
    source_dir: .
```

### 4.2 Create `Dockerfile` (optional, for custom builds)
```dockerfile
FROM node:18-alpine

WORKDIR /app

# Build frontend
COPY client ./client
WORKDIR /app/client
RUN npm ci && npm run build

# Setup server
WORKDIR /app
COPY server ./server
WORKDIR /app/server
RUN npm ci

EXPOSE 5000

CMD ["npm", "start"]
```

---

## Phase 5: Root Configuration & Scripts

### 5.1 Create root `package.json` (monorepo coordinator)
```json
{
  "name": "deeplakesound",
  "version": "0.1.0",
  "description": "Deep Lake Sound marketing site - Vite + Express",
  "scripts": {
    "dev": "npm run dev:client & npm run dev:server",
    "dev:client": "cd client && npm run dev",
    "dev:server": "cd server && npm run dev",
    "build": "cd client && npm run build && cd ../server && npm install",
    "start": "cd server && npm start",
    "install-all": "npm install && cd client && npm install && cd ../server && npm install"
  }
}
```

### 5.2 Update root `.gitignore`
```
node_modules/
client/node_modules/
server/node_modules/
client/dist/
server/dist/
.env
.env.local
.DS_Store
*.log
.git/
```

### 5.3 Create `README.md` (root level)
```markdown
# Deep Lake Sound (Vite + Express)

## Quick Start

### Development
```bash
npm install-all
npm run dev
```
Frontend: http://localhost:5173
Server: http://localhost:5000

### Production Build
```bash
npm run build
npm start
```

### Deployment
Commit to main branch on GitHub. DigitalOcean App Platform will auto-deploy via `app.yaml`.

## Project Structure
- `/client`: Vite + React frontend
- `/server`: Express.js backend
- `app.yaml`: DigitalOcean App Platform config
```

---

## Phase 6: Migration Checklist

- [ ] Clone current repo to new branch: `git checkout -b vite-express-migration`
- [ ] Create `/client` and `/server` directories
- [ ] Copy frontend files to `/client`, update entry point to `main.jsx`
- [ ] Install Vite and create `vite.config.js`, `index.html`
- [ ] Install Express and create `server/index.js` with SPA fallback
- [ ] Create root-level `package.json` with dev/build scripts
- [ ] Create `app.yaml` for DigitalOcean App Platform
- [ ] Test locally: `npm run dev` (both frontend & server)
- [ ] Build production: `npm run build`
- [ ] Test production: `npm start` (serves built client from `/server`)
- [ ] Push to GitHub and verify DigitalOcean deployment

---

## Key Differences: CRA → Vite

| Aspect | CRA | Vite |
|--------|-----|------|
| Entry Point | `public/index.html` + `src/index.js` | `index.html` + `src/main.jsx` |
| Dev Server | Slow (rebuilds entire app) | Fast HMR (sub-100ms updates) |
| Build Output | `/build` | `/dist` |
| Config File | `react-scripts` (hidden) | `vite.config.js` (explicit) |
| Backend | None | Can proxy to Express via config |
| ES Modules | CommonJS default | ESM default |

---

## Common Issues & Solutions

### Issue: SPA routing broken after deploy
**Solution**: Ensure `app.yaml` build command runs `npm run build` in client, and Express has SPA fallback in `server/index.js`.

### Issue: Assets not loading in production
**Solution**: Verify `vite.config.js` has correct `base` property if hosted in subdirectory:
```javascript
export default defineConfig({
  base: '/',
  // ...
})
```

### Issue: Environment variables not available
**Solution**: Use `import.meta.env.VITE_*` in Vite apps (not `process.env`). Create `.env` files:
```
VITE_API_URL=https://api.example.com
```

### Issue: Port conflicts in development
**Solution**: Use different ports for client (5173 default) and server (5000):
```javascript
// vite.config.js
export default defineConfig({
  server: {
    port: 5173,
    proxy: { '/api': 'http://localhost:5000' }
  }
})
```

---

## Next Steps
1. **Start with a new branch** to preserve current CRA setup
2. **Follow Phases 1-3** to set up directory structure and dependencies
3. **Test locally** before committing
4. **Push to GitHub** and enable DigitalOcean App Platform deployment
5. **Monitor** deployment logs via DigitalOcean dashboard

For questions on specific migrations, refer to [Vite Migration Guide](https://vitejs.dev/guide/ssr.html) and [Express Docs](https://expressjs.com/).
