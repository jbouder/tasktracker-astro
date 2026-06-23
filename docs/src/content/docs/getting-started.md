---
title: Getting started
description: Install dependencies and run the Tasker backend and frontend locally.
---

Tasker is a monorepo with two packages: a FastAPI **backend** and a React
**frontend**. This guide gets both running on your machine.

## Prerequisites

- **Node.js** 20+ and npm
- **Python** 3.12+ and [uv](https://github.com/astral-sh/uv)
- **Docker** (for the local Postgres database)

:::note
The frontend's Vite dev server proxies `/api` to the backend at
`http://localhost:8000`, so run both processes side by side during development.
:::

## 1. Start the backend

```bash
cd backend
docker-compose up -d            # Postgres (dev: 5432, test: 5433)
uv sync                         # install dependencies
uv run alembic upgrade head     # run migrations
uv run uvicorn app.main:app --reload --port 8000
```

The API is now serving at `http://localhost:8000`. Confirm it's healthy:

```bash
curl http://localhost:8000/health
# {"status":"ok"}
```

## 2. Start the frontend

In a second terminal:

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
```

Open [http://localhost:5173](http://localhost:5173) and you'll see the
Tasker app, styled with the Nebari design system.

:::tip
Run `npm run check` in `frontend/` to lint and format with Biome before you
commit. The backend uses `ruff` + `mypy` + `pytest` as its quality gate.
:::

## Next steps

- Learn the day-to-day workflow in [Managing tasks](/tasktracker-astro/guides/managing-tasks/).
- Browse the live UI building blocks in the [Component showcase](/tasktracker-astro/guides/components/).
- Look up endpoints in the [API reference](/tasktracker-astro/reference/api/).
