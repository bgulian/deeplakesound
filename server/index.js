import express from 'express'
import cors from 'cors'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3000
const NODE_ENV = process.env.NODE_ENV || 'development'

// Middleware
app.use(cors())
app.use(express.json())

// Serve static files from Vite build output (only in production or if dist exists)
const clientBuildPath = path.join(__dirname, '../client/dist')
const distExists = fs.existsSync(clientBuildPath)

if (distExists) {
  app.use(express.static(clientBuildPath))
  console.log('✓ Serving static files from client/dist')
} else if (NODE_ENV === 'production') {
  console.error('ERROR: client/dist directory not found. Run "npm run build" first.')
  process.exit(1)
} else {
  console.log('ℹ Development mode: client/dist not built. Make sure Vite dev server is running on http://localhost:5173')
}

// Example API route (optional)
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// SPA fallback: serve index.html for all unmatched routes (only if dist exists)
if (distExists) {
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'))
  })
} else {
  // Development: show helpful message
  app.get('*', (req, res) => {
    res.status(503).json({
      error: 'Frontend not built',
      message: 'Run "npm run build" to create client/dist, or use "npm run dev" to run both servers'
    })
  })
}

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal Server Error' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
