FROM node:22-alpine AS build

WORKDIR /app
RUN npm install --global npm@11.13.0 --no-audit --no-fund

COPY package.json package-lock.json ./

RUN npm ci --no-audit --no-fund

COPY . .

RUN npm run build:shell \
    && test -f /app/dist/daruix-hub-shell/index.html


FROM nginx:alpine

ENV BFF_UPSTREAM=host.docker.internal:8000 \
    REMESSAS_UPSTREAM=host.docker.internal:4301 \
    NGINX_ENVSUBST_FILTER="^(BFF_UPSTREAM|REMESSAS_UPSTREAM)$"

COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist/daruix-hub-shell/ /usr/share/nginx/html/

EXPOSE 80

HEALTHCHECK --interval=20s --timeout=5s --start-period=10s --retries=5 \
    CMD wget -q -O /dev/null http://127.0.0.1/health || exit 1
