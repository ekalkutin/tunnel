FROM node:22.17.1 AS builder
WORKDIR /app
COPY tsconfig.json ./
COPY package*.json ./
COPY apps/ ./apps
RUN npm i
RUN cd apps/backend && npm run build

FROM amneziavpn/amnezia-wg:latest AS tunnel
WORKDIR /tunnel
RUN apk add --no-cache nodejs npm curl
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
    CMD curl -sf http://localhost:3000/api/v1/health || exit 1

COPY --from=builder /app/package.json /tunnel
COPY --from=builder /app/node_modules /tunnel/apps/node_modules
COPY --from=builder /app/apps/backend /tunnel/apps/backend

EXPOSE 3000 51820/udp

CMD ["node", "apps/backend/build/index.js"]
# CMD ["sleep", "infinity"]