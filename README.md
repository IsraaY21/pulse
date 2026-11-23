# Pulse

[![CI](https://github.com/IsraaY21/pulse/actions/workflows/ci.yml/badge.svg)](https://github.com/IsraaY21/pulse/actions/workflows/ci.yml)

Pulse is an uptime monitor. You add a website address. Pulse checks it every minute, records how fast it answered, and shows the history on a web dashboard and a phone app.

Stack: NestJS, Next.js, React Native, PostgreSQL, Redis and Docker.

## Status

Work in progress. The API has one endpoint, `GET /health`. A web page asks it and shows the answer. Both run in Docker, and GitHub Actions checks every pull request.

## Start with Docker

You need Docker Desktop, and nothing else.

```bash
docker compose up --build --detach --wait
```

Open http://localhost:3001 in a browser. The page shows `Server says: ok`. Click the button, and it shows `Browser says: ok` too.

The API answers on http://localhost:3000/health. Stop everything with `docker compose down`.

To use other ports, copy `.env.example` to `.env` and change `API_PORT` or `WEB_PORT`.

## Work on the code

You need Node.js 24 or newer and pnpm 12.

```bash
pnpm install
pnpm check
```

`pnpm check` runs the type check and all tests. GitHub Actions runs the same command.

Start the API and the web page in two terminals. The API listens on port 3000 and the web page on port 3001.

```bash
pnpm --filter api start:dev
```

```bash
pnpm --filter web dev
```
