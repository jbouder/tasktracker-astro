---
title: API reference
description: Endpoints and payload shapes for the Tasker FastAPI backend.
---

The backend exposes a small REST API under `/api`. All payloads are JSON. During
local development the frontend proxies `/api` to `http://localhost:8000`.

## Health

```http
GET /health
```

```json
{ "status": "ok" }
```

## Tasks

### List tasks

```http
GET /api/tasks
```

Returns an array of [Task](#task-object) objects, newest first.

### Create a task

```http
POST /api/tasks
Content-Type: application/json
```

```json
{
  "title": "Write the docs",
  "description": "Cover the task lifecycle",
  "status": "backlog"
}
```

Responds `201 Created` with the created [Task](#task-object).

### Update a task

```http
PATCH /api/tasks/{id}
Content-Type: application/json
```

Send any subset of fields. Moving a card between columns sends just `status`:

```json
{ "status": "in_progress" }
```

### Delete a task

```http
DELETE /api/tasks/{id}
```

Responds `204 No Content`. This is permanent.

## The `Task` object

| Field | Type | Notes |
| --- | --- | --- |
| `id` | `string` | UUID, server-generated |
| `title` | `string` | Required, 1–200 chars |
| `description` | `string \| null` | Optional |
| `status` | `"backlog" \| "in_progress" \| "done"` | Defaults to `backlog` |
| `created_at` | `string` | ISO 8601 timestamp |
| `updated_at` | `string` | ISO 8601 timestamp |

## Errors

Errors use standard HTTP status codes with a JSON body:

```json
{ "detail": "Task not found" }
```

| Status | When |
| --- | --- |
| `404` | The task `id` doesn't exist |
| `422` | Request body failed validation |
