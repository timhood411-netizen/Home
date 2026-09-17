# Home

React + TypeScript app scaffolded with Vite, using MUI as the component library.

## Getting started

```sh
npm install
npm run dev
```

The app boots into a single demo page (`src/App.tsx`) wired up through a
top-level `ThemeProvider` (`src/theme/index.ts`) and `CssBaseline`. The demo
is split into sections under `src/demo/`:

- `ButtonsSection` — button variants and an icon button
- `TextFieldsSection` — text field variants and states
- `CardSection` — a `Card` with content and actions
- `DataTableSection` — a paginated `DataGrid` (`@mui/x-data-grid`)

## Design tokens

`tokens/primitive.tokens.json` and `tokens/semantic.tokens.json` are the raw
Figma variable export (rb-theme, "Mode 1"). `src/theme/tokens.ts` merges the
two files and resolves the semantic layer's `{a.b.c}` aliases down to their
primitive values; `src/theme/index.ts` builds the MUI theme from those
resolved values.

Not every token maps to a MUI theme slot (icon colors, hover-state swatches,
a border-width scale, etc.), and MUI needs a few things the export doesn't
define (font family, state-overlay opacities, breakpoints, shadows). Those
gaps are called out inline in `src/theme/index.ts` — either as a documented
fallback (e.g. `text.secondary`/`text.disabled` use the Neutral ramp instead
of the tokens' buggy `tertiary`-aliased values) or left at MUI's own default.
Breakpoints are pulled from the 320px/1024px device ranges documented in
`docs/components/event-banner.md`, since the token export has none.

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build
- `npm run lint` — run Oxlint
