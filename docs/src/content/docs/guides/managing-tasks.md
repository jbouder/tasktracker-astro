---
title: Managing tasks
description: Create, organize, and complete tasks in Tasker.
---

This guide walks through the core task workflow. Every action here maps to a
backend endpoint documented in the [API reference](/reference/api/).

## The task lifecycle

A task moves through three states, surfaced in the UI as colored
[badges](/guides/components/#badges):

| State | Badge | Meaning |
| --- | --- | --- |
| `backlog` | Backlog | Captured but not started |
| `in_progress` | In progress | Actively being worked on |
| `done` | Done | Completed |

## Create a task

1. Click **New task** in the top-right of the board.
2. Give the task a **title** (required) and an optional **description**.
3. Press **Save**. The task is created via `POST /api/tasks` and appears in the
   **Backlog** column immediately — TanStack Query optimistically updates the
   board before the server responds.

## Organize the board

Drag a card between columns to change its state, or use the status menu on the
card. Each move issues a `PATCH /api/tasks/{id}` with the new `status`.

:::tip
Use the search box to filter by title. Filtering happens client-side against the
already-loaded board, so it stays instant even with hundreds of tasks.
:::

## Complete and archive

Mark a task **Done** to move it to the Done column. Completed tasks stay on the
board until you archive them, which issues a `DELETE /api/tasks/{id}`.

:::caution
Archiving is permanent — there's no undo. The UI confirms with a destructive
[Alert](/guides/components/#alerts) before the request is sent.
:::
