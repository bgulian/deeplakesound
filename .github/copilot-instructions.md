# Copilot / AI Agent Instructions for deeplakesound

Summary
- Small Create-React-App (CRA) site that serves a marketing/promo site for Deep Lake Sound.
- Frontend-only React app using Material-UI (MUI) and `react-router-dom` for page routing.

Quick commands
- Start dev server: `npm start` (see [package.json](package.json)).
- Build production bundle: `npm run build` (output in `/build`).
- Run tests: `npm test`.

Big-picture architecture
- Entry: [src/index.js](src/index.js) wraps the app with MUI `ThemeProvider` and mounts `App`.
- Routing: [src/App.js](src/App.js) defines all top-level routes; add new pages by adding a component to `src/components/` and adding a `<Route/>` there.
- Theme: centralized MUI theme in [src/theme.js](src/theme.js).
- Static assets: `public/` is conventional CRA public content; production build output is in `build/`.

Conventions & patterns (observed)
- Components live in `src/components/`. Filenames are inconsistent (snake_case like `landing_page.js` and camelCase like `lowVolumeAudioPlayer.js`) — follow the existing local file's style when editing that file.
- Pages are simple components exported as default and imported in `App.js` for routing.
- The project uses MUI components (see imports in `src/index.js` and components). Prefer MUI patterns for layout and theming.
- There is an `assets/buildimages.json` used by image lists/components — update that JSON rather than hardcoding image lists when possible.
- Ignore `something.rb` (non-JS artifact) unless the task explicitly requires it.

Integration points & external dependencies
- MUI packages: `@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled` (see `package.json`).
- Routing: `react-router-dom` (v6) — use `Routes`/`Route` element syntax (no `Switch`).
- Build tooling: standard CRA via `react-scripts` (use the `scripts` shown in [package.json](package.json)).

Examples (how to implement common tasks)
- Add a new page component:
  1. Create `src/components/MyNewPage.js` exporting default React component.
  2. Import and add route in [src/App.js](src/App.js): `<Route path="/mynewpage" element={<MyNewPage/>} />`.
- Update theme tokens: edit [src/theme.js](src/theme.js) and restart dev server to see live changes.
- Add images to image lists: update `src/assets/buildimages.json` and confirm the consuming component (e.g., `imagelist.js`) reads it.

What to watch for (repo-specific notes)
- File naming inconsistency: preserve local style when touching files to avoid churn.
- No CI configs detected: propose GitHub Actions only if requested; do not assume workflows exist.
- `build/` contains a previously generated production bundle — do not modify it directly; use `npm run build` to regenerate.

When you open a PR
- Summarize what files changed and why, reference the route(s) affected in [src/App.js](src/App.js), and list any dependency changes to `package.json`.

If anything here is unclear or incomplete, ask for the exact task (bug, feature, or refactor) and I will update these instructions with examples and missing references.
