# syntax=docker/dockerfile:1

# Base dependencies stage
FROM node:22-alpine AS base
WORKDIR /app
COPY package.json .
# Install deps once (no lock file provided, so npm install)
RUN npm install

# Development stage (hot reload)
FROM base AS dev
ENV NODE_ENV=development
COPY . .
EXPOSE 5173
# --host allows Vite to be reachable from the host machine
CMD ["npm", "run", "dev", "--", "--host"]

# Build stage (production assets)
FROM base AS build
ENV NODE_ENV=production
COPY . .
RUN npm run build

# Production runtime (serving static files)
FROM nginx:1.27-alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
