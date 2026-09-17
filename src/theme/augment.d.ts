import type {} from '@mui/material/styles'
import type {} from '@mui/material/Button'

// Extends the palette with "onColor" (see src/theme/index.ts) and exposes
// it as a Button color option — Button color="onColor" variant="contained"
// reproduces the Event Banner doc's Button "OnColor" type.
declare module '@mui/material/styles' {
  interface Palette {
    onColor: Palette['primary']
  }
  interface PaletteOptions {
    onColor?: PaletteOptions['primary']
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    onColor: true
  }
}
