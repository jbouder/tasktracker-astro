# TaskTracker Docs

The documentation site for TaskTracker, built with
[Astro](https://astro.build) + [Starlight](https://starlight.astro.build) and
themed with the [Nebari design system](https://github.com/nebari-dev/nebari-design)
so it matches the app's look and feel.

## Quick start

```bash
cd docs
npm install
npm run dev        # http://localhost:4321
```

## How the Nebari theming works

- **Tokens** — `src/styles/global.css` ports the Nebari OKLCH color tokens
  (the same ones in `frontend/src/index.css`) and the Geist / IBM Plex Mono
  fonts, then maps them onto Starlight's own `--sl-*` chrome variables. One
  palette themes the entire site, and Starlight's light/dark toggle drives both
  the chrome and the embedded components together.
- **Components** — the Nebari `Button`, `Badge`, `Alert`, and `Switch` live in
  `src/components/ui/` (installed from the `@nebari` shadcn registry; treat them
  as upstream-managed — don't edit them). Small demo islands in
  `src/components/demos/` compose them and are embedded in
  `src/content/docs/guides/components.mdx` with `client:load`.
- **React** — `@astrojs/react` + the `@` path alias (configured in
  `astro.config.mjs` and `tsconfig.json`) let MDX import the components.

## Content

| Path | Page |
| --- | --- |
| `src/content/docs/index.mdx` | Splash landing page |
| `src/content/docs/getting-started.md` | Install & run |
| `src/content/docs/guides/managing-tasks.md` | Workflow guide |
| `src/content/docs/guides/components.mdx` | Live component showcase |
| `src/content/docs/reference/api.md` | API reference |

## Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |
