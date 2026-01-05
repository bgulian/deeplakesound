# 🚀 Quick Start Guide - Vite + Express Migration

## Prerequisites

Ensure you're using **Node v20+**:

```bash
# Check your Node version
node --version  # Should be v20.x.x or higher

# If you have nvm, switch to v20:
nvm use 20

# If you don't have Node 20, install it:
nvm install 20
nvm alias default 20
```

## Setup (One Time)

```bash
cd /Users/robertgulian/Sites/deeplakesound
npm run install-all
```

## Development (Recommended)

```bash
npm run dev
```

This starts **both servers automatically**:
- **Frontend**: http://localhost:5173 (React dev server with hot reload)
- **Backend**: http://localhost:3000 (Express server)

**Visit http://localhost:5173 in your browser** to see changes instantly as you edit.

## Production (Build & Run)

```bash
# Build the client
npm run build

# Start the server (serves built files)
npm start

# Visit http://localhost:3000
```

## Running Servers Separately

If you prefer to run them in separate terminals:

```bash
# Terminal 1 - Frontend
cd client
npm run dev

# Terminal 2 - Backend
cd server
npm run dev
```

## Project Structure

```
.
├── client/           # React + Vite frontend
│   ├── src/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── server/           # Express backend
│   ├── index.js
│   └── package.json
├── app.yaml          # DigitalOcean config
└── package.json      # Root monorepo config
```

## Useful Commands

```bash
# Frontend only
cd client
npm run dev           # Start dev server
npm run build         # Build for production
npm run test          # Run tests

# Backend only
cd server
npm run dev           # Start with auto-reload (nodemon)
npm start             # Start production server

# Root (both)
npm run dev           # Start all servers
npm run build         # Build client + setup server
npm start             # Start production server
npm run install-all   # Install deps for all packages
```

## Troubleshooting

### Port already in use?
```bash
# Find what's using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>
```

### Changes not showing in dev?
- Make sure you're on **http://localhost:5173** (not 3000)
- Check browser console for errors
- Restart the dev server if needed

### Build failed?
```bash
# Clear node_modules and reinstall
rm -rf client/node_modules server/node_modules
npm run install-all
npm run build
```

### Wrong Node version?
```bash
# Check current version
node --version

# Use Node 20
nvm use 20

# Then rebuild
npm run install-all
npm run build
```

## Deployment to DigitalOcean

1. Update `app.yaml` with your GitHub repo URL
2. Push to GitHub: `git push origin vite-express-migration`
3. Connect repo to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
4. It will automatically:
   - Build the client
   - Install server dependencies
   - Start the server on port 3000

## Next Steps

- ✅ Test locally with `npm run dev`
- ✅ Verify routes work at http://localhost:5173
- ✅ Check API health at http://localhost:3000/api/health
- 📝 Commit changes to `vite-express-migration` branch
- 🚀 Deploy to DigitalOcean App Platform

---

For detailed migration info, see [VITE_MIGRATION_GUIDE.md](VITE_MIGRATION_GUIDE.md)

For what was fixed, see [MIGRATION_COMPLETE.md](MIGRATION_COMPLETE.md)
