FROM node:24-alpine

RUN npm install --global pnpm@12.4.1

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/web/package.json apps/web/
RUN pnpm install --frozen-lockfile --filter web

COPY apps/web apps/web
RUN pnpm --filter web build

USER node
EXPOSE 3001
WORKDIR /app/apps/web
CMD ["node_modules/.bin/next", "start", "--port", "3001"]
