FROM node:24-alpine

RUN npm install --global pnpm@12.4.1

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/api/package.json apps/api/

RUN pnpm install --frozen-lockfile

COPY apps/api apps/api

RUN pnpm --filter api build

USER node

EXPOSE 3000

CMD ["node", "apps/api/dist/main.js"]
