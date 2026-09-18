import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
// Ford-f1 (Semibold only, for now) — see src/theme/fonts.css and
// src/theme/index.ts for how the weight-scoped fallback to Inter works.
import './theme/fonts.css'
import './index.css'
import App from './App.tsx'
import { theme } from './theme/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
