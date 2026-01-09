# Multi-stage build for Deep Lake Sound - DigitalOcean App Platform

# Stage 1: Build the client (Vite)
FROM node:20-alpine AS client-builder

WORKDIR /app

# Copy root and client package files
COPY package.json package-lock.json* ./
COPY client/ ./client/

# Install dependencies and build client
RUN npm install && \
    cd client && \
    npm install && \
    npm run build

# Stage 2: Production runtime
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./
COPY server/ ./server/

# Copy built client from previous stage
COPY --from=client-builder /app/client/dist ./client/dist

# Install server dependencies only (production)
RUN cd server && npm install --production

# Expose port (DigitalOcean App Platform default)
EXPOSE 8080

# Set environment to production
ENV NODE_ENV=production
ENV PORT=8080

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:8080', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start the server
CMD ["npm", "start", "--prefix", "server"]
