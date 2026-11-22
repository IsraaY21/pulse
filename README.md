# Pulse

[![CI](https://github.com/IsraaY21/pulse/actions/workflows/ci.yml/badge.svg)](https://github.com/IsraaY21/pulse/actions/workflows/ci.yml)

Pulse is an uptime monitor. You add a website address. Pulse checks it every minute, records how fast it answered, and shows the history on a web dashboard and a phone app.

Stack: NestJS, Next.js, React Native, PostgreSQL, Redis and Docker.

## Status

Work in progress. The API has one endpoint, `GET /health`. It runs in Docker, and GitHub Actions checks every pull request.

## Start with Docker

You need Docker Desktop, and nothing else.

```bash
docker compose up --build --detach --wait
curl http://localhost:3000/health
```

The answer is `{"status":"ok"}`. Stop everything with `docker compose down`.

To use another port, copy `.env.example` to `.env` and change `API_PORT`.

## Work on the code

You need Node.js 24 or newer and pnpm 12.

```bash
pnpm install
pnpm check
pnpm --filter api start:dev
```

`pnpm check` runs the type check and all tests. GitHub Actions runs the same command.
