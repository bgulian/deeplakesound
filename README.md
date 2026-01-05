# Deep Lake Sound (Vite + Express)

A modern web marketing site for Deep Lake Sound built with Vite (React frontend) and Express.js (Node backend).

## Project Structure

```
.
├── client/          # React + Vite frontend
│   ├── src/
│   ├── public/
│   ├── vite.config.js
│   ├── index.html
│   └── package.json
├── server/          # Express.js backend
│   ├── index.js
│   └── package.json
├── app.yaml         # DigitalOcean App Platform config
└── package.json     # Root monorepo scripts
```

## Quick Start

### Install dependencies
```bash
npm run install-all
```

### Development (Recommended)
```bash
npm run dev
```

This starts BOTH servers in parallel:
- **Frontend**: http://localhost:5173 (Vite dev server with HMR)
- **Backend**: http://localhost:3000 (Express - serves `/api` routes only in dev)

Visit **http://localhost:5173** to see the app with hot reload.

### Production Build & Run
```bash
# Build the client and prepare server
npm run build

# Start the server (serves built client from /client/dist/)
npm start
```

Then visit **http://localhost:3000**

## Development Workflow

### Option 1: Run both servers together (Recommended)
```bash
npm run dev
```
- Starts Vite dev server on 5173 with hot reload
- Starts Express server on 3000 (for API routes)
- Frontend automatically reloads when you save files

### Option 2: Run separately in different terminals
```bash
# Terminal 1: Frontend (Vite)
cd client
npm run dev

# Terminal 2: Backend (Express)
cd server
npm run dev
```

### Option 3: Production mode
```bash
# First time only: build the client
npm run build

# Then start server (serves built files)
npm start
```

## Deployment (DigitalOcean App Platform)

1. Push to GitHub (`vite-express-migration` branch)
2. Update `app.yaml` with your GitHub repository details
3. Connect to DigitalOcean App Platform
4. Deploy will automatically:
   - Build Vite frontend (`client/dist/`)
   - Install server dependencies
   - Start Express server on port 5000

## Key Features

- **Fast Development**: Vite hot module reloading (HMR)
- **Modern Stack**: React 18, Material-UI 7, Express 4
- **Client-side Routing**: React Router v6 with SPA fallback
- **Production Ready**: Monorepo with separate build outputs
- **DigitalOcean Ready**: `app.yaml` for App Platform deployment

## Environment Variables

Create a `.env` file in the `server/` directory (see `server/.env.example`):

```env
PORT=5000
NODE_ENV=development
```

## Testing

```bash
cd client
npm test
```

## Troubleshooting

### Port already in use
- **Frontend** defaults to 5173, **Server** to 3000
- Port 3000 was chosen for the backend (instead of 5000) because **port 5000 conflicts with macOS Control Center in newer versions of macOS**
- Change ports in `client/vite.config.js` and `server/index.js` if needed

### Assets not loading in production
- Verify `client/dist/` is generated after `npm run build`
- Check that Express static middleware serves from correct path

### Routes not working
- Ensure Express SPA fallback is enabled (in `server/index.js`)
- Client-side routes should work via React Router

## References

- [Vite Documentation](https://vitejs.dev/)
- [Express Documentation](https://expressjs.com/)
- [React Router v6](https://reactrouter.com/)
- [Material-UI](https://mui.com/)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform/)