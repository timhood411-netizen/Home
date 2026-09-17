# Home

React + TypeScript app scaffolded with Vite, using MUI as the component library.

## Getting started

```sh
npm install
npm run dev
```

The app boots into a single demo page (`src/App.tsx`) wired up through a
top-level `ThemeProvider` (`src/theme.ts`) and `CssBaseline`. The demo is
split into sections under `src/demo/`:

- `ButtonsSection` — button variants and an icon button
- `TextFieldsSection` — text field variants and states
- `CardSection` — a `Card` with content and actions
- `DataTableSection` — a paginated `DataGrid` (`@mui/x-data-grid`)

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build
- `npm run lint` — run Oxlint
