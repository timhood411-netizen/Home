import { createTheme } from '@mui/material/styles'
import { color, num, str } from './tokens'

// type.font-family.headline ("Ford-f1") is Ford's proprietary typeface —
// the token names it, but no font files for it are available in this
// project, so every variant leads with it and falls back to the body font
// (type.font-family.body, "Inter", installed via @fontsource/inter) until
// real Ford-f1 files are supplied.
const fallbackFontStack = `"${str('type.font-family.body')}", "Helvetica", "Arial", sans-serif`
const fontStack = `"${str('type.font-family.headline')}", ${fallbackFontStack}`

// Semantic weight scale (semibold is the heaviest weight the tokens define —
// there is no separate "bold" token, so fontWeightBold reuses it rather than
// MUI's usual 700).
const weight = {
  regular: num('type.font-weight.regular'),
  medium: num('type.font-weight.medium'),
  semibold: num('type.font-weight.semibold'),
}

// fontSize/lineHeight are both px in the tokens; MUI wants lineHeight as a
// unitless multiplier, so each variant below divides line-height by font-size.
const type = (sizePath: string, lineHeightPath: string) => {
  const fontSize = num(sizePath)
  const lineHeight = num(lineHeightPath) / fontSize
  return { fontSize, lineHeight }
}

export const theme = createTheme({
  palette: {
    // Confirmed with the file's owner: primary is Skyview, secondary is
    // Ford Blue, tertiary is Grabber. (The "fpds/ref/color/primary/*" etc.
    // variable names found bound to the Ford Blue/Grabber/Skyview swatches
    // in the Tim's Foundations file are reference-tier naming, not the
    // actual semantic assignment — get_variable_defs flattens alias
    // chains, so that naming was misleading and briefly caused this file
    // to be re-pointed incorrectly.)
    primary: {
      main: color('color.palette.primary.1000'), // Skyview/1000
      light: color('color.palette.primary.400'),
      dark: color('color.palette.primary.1200'),
      contrastText: color('color.text.primary.on-color'), // Skyview/100
    },
    secondary: {
      main: color('color.palette.secondary.1000'), // Ford Blue/1000
      light: color('color.palette.secondary.400'),
      dark: color('color.palette.secondary.1200'),
      contrastText: color('color.text.secondary.on-color'), // Ford Blue/100
    },
    // Tokens have no "info" family. Tertiary (Grabber) is the leftover
    // brand accent once primary/secondary/success/caution/error are spoken
    // for, so it fills MUI's fifth intent.
    info: {
      main: color('color.palette.tertiary.1000'), // Grabber/1000
      light: color('color.palette.tertiary.400'),
      dark: color('color.palette.tertiary.1200'),
      contrastText: '#ffffff', // no token — contrast-checked against Grabber/1000
    },
    success: {
      main: color('color.palette.success.1000'), // Green/1000
      light: color('color.palette.success.400'),
      dark: color('color.palette.success.1200'),
      contrastText: '#ffffff', // no token — contrast-checked against Green/1000
    },
    // "caution" in the tokens is MUI's "warning". Amber/1000 was fixed
    // against the Tim's Foundations file (#ba4e00) — the original FPDS
    // export had it duplicating Amber/900 (#c16019).
    warning: {
      main: color('color.palette.caution.1000'), // Amber/1000
      light: color('color.palette.caution.400'),
      dark: color('color.palette.caution.1200'),
      contrastText: '#ffffff', // no token — contrast-checked against Amber/1000
    },
    error: {
      main: color('color.palette.error.1000'), // Red/1000
      light: color('color.palette.error.400'),
      dark: color('color.palette.error.1200'),
      contrastText: '#ffffff', // no token — contrast-checked against Red/1000
    },
    // Not a standard MUI intent. The Event Banner doc's Button "OnColor"
    // type (white fill / black label, used when the button sits on a
    // neutral-strong or primary-strong banner) has no semantic path in the
    // export — color.fill only defines "action-default". Built directly
    // from the Base primitives instead, and exposed as Button color="onColor"
    // via the module augmentation in src/theme/augment.d.ts.
    onColor: {
      main: color('color.palette.base.white'),
      contrastText: color('color.text.default.body'), // Base/black
    },
    text: {
      primary: color('color.text.default.body'), // Base/black
      // No "secondary"/"disabled" text tokens exist — the tokens' own
      // text.disabled.* is a copy/paste bug (aliases tertiary/Grabber
      // purple), so these fall back to the Neutral ramp instead.
      secondary: color('Color.Neutral.700'),
      disabled: color('Color.Neutral.500'),
    },
    background: {
      default: color('color.background.default'), // literal #ffffff in tokens
      paper: color('Color.Neutral.100'), // no "paper" token — nearest Neutral step
    },
    // color.stroke.default is hardcoded to #ffffff in the export (invisible
    // on a white background) — using the Neutral step the Event Banner doc
    // already treats as its default stroke color instead.
    divider: color('Color.Neutral.300'),
    grey: {
      50: color('Color.Neutral.100'),
      100: color('Color.Neutral.200'),
      200: color('Color.Neutral.300'),
      300: color('Color.Neutral.400'),
      400: color('Color.Neutral.500'),
      500: color('Color.Neutral.600'),
      600: color('Color.Neutral.700'),
      700: color('Color.Neutral.800'),
      800: color('Color.Neutral.900'),
      900: color('Color.Neutral.1000'),
      // No accent-neutral (A100/A200/A400/A700) tokens — left at MUI defaults.
    },
    // action.hover/selected/disabled/focus overlays have no token source
    // (they need alpha values, not hex swatches) — left at MUI defaults.
  },

  typography: {
    // All variants use type.font-family.headline ("Ford-f1") — see the
    // stack comment above for why it falls back to the body font (Inter).
    fontFamily: fontStack,
    fontWeightRegular: weight.regular,
    fontWeightMedium: weight.medium,
    fontWeightBold: weight.semibold,
    h1: { ...type('type.font-size.headline.XXL', 'type.line-height.headline.XXL'), fontWeight: weight.semibold },
    h2: { ...type('type.font-size.headline.XL', 'type.line-height.headline.XL'), fontWeight: weight.semibold },
    h3: { ...type('type.font-size.headline.L', 'type.line-height.headline.L'), fontWeight: weight.semibold },
    h4: { ...type('type.font-size.headline.M', 'type.line-height.headline.M'), fontWeight: weight.semibold },
    h5: { ...type('type.font-size.headline.S', 'type.line-height.headline.S'), fontWeight: weight.semibold },
    h6: { ...type('type.font-size.headline.XS', 'type.line-height.headline.XS'), fontWeight: weight.semibold },
    body1: { ...type('type.font-size.body.regular.M', 'type.line-height.body.regular.M'), fontWeight: weight.regular },
    body2: { ...type('type.font-size.body.regular.S', 'type.line-height.body.regular.S'), fontWeight: weight.regular },
    caption: { ...type('type.font-size.caption.S', 'type.line-height.caption.S'), fontWeight: weight.regular },
    // Closest match to the tokens' "eyebrow" style — MUI has no eyebrow variant.
    overline: { ...type('type.font-size.eyebrow.S', 'type.line-height.eyebrow.S'), fontWeight: weight.medium },
    // Button doc names "body/medium" as the CTA label style; body.medium.M
    // is the baseline (MuiButton styleOverrides below swap in .S/.L for the
    // small/large size variants).
    button: {
      ...type('type.font-size.body.medium.M', 'type.line-height.body.medium.M'),
      fontWeight: weight.medium,
      textTransform: 'none', // no text-case token — FPDS button labels are sentence case, not uppercase
    },
    // subtitle1/subtitle2 have no matching semantic type token — left at MUI defaults.
  },

  shape: {
    borderRadius: num('radius.XS'), // 8px — radius.S/M/L/full have no MUI slot
  },

  // Tokens are 4px-based (spacing.4x = 4), so spacing(1) below equals 4px
  // instead of MUI's default 8px, to match the scale exactly.
  spacing: num('scale.4'),

  // No breakpoint tokens in the export. Pulled from the Event Banner
  // component doc instead: mobile/tablet is documented as 320–1023px,
  // desktop as 1024–1919px. xl has no documented range — 2560 is a
  // sensible default for an "ultra-wide" bucket beyond it.
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 1024,
      lg: 1920,
      xl: 2560,
    },
  },

  // shadows, transitions, and zIndex have no token source — left at MUI defaults.

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true, // no shadow/elevation tokens are defined for buttons
      },
      styleOverrides: {
        root: {
          borderRadius: num('radius.full'), // pill shape — Button/CTA doc: radius/full
        },
        outlined: {
          // No button-specific border-width token; stroke.sm (2px) is the
          // closest generic stroke step in the tokens.
          borderWidth: num('stroke.sm'),
          '&:hover': {
            borderWidth: num('stroke.sm'),
          },
        },
        sizeSmall: {
          // No button-padding tokens — inferred from the spacing scale.
          paddingInline: num('spacing.16x'),
          paddingBlock: num('spacing.8x'),
          ...type('type.font-size.body.medium.S', 'type.line-height.body.medium.S'),
        },
        sizeMedium: {
          paddingInline: num('spacing.24x'),
          paddingBlock: num('spacing.12x'),
          ...type('type.font-size.body.medium.M', 'type.line-height.body.medium.M'),
        },
        sizeLarge: {
          paddingInline: num('spacing.32x'),
          paddingBlock: num('spacing.16x'),
          minHeight: 48, // Event Banner CTA doc: Large CTA min-height 48px (no token — doc-only value)
          ...type('type.font-size.body.medium.L', 'type.line-height.body.medium.L'),
        },
      },
      // outlined's border (stroke.sm, 2px) adds height that text/contained
      // don't have (they have no border) — trim outlined's padding by the
      // border width on each edge so all three variants render the same
      // size. MUI does this by default for its own 1px border; the
      // sizeSmall/Medium/Large overrides above apply to every variant
      // uniformly, so it has to be redone here for stroke.sm.
      variants: [
        {
          props: { variant: 'outlined', size: 'small' },
          style: {
            paddingInline: num('spacing.16x') - num('stroke.sm'),
            paddingBlock: num('spacing.8x') - num('stroke.sm'),
          },
        },
        {
          props: { variant: 'outlined', size: 'medium' },
          style: {
            paddingInline: num('spacing.24x') - num('stroke.sm'),
            paddingBlock: num('spacing.12x') - num('stroke.sm'),
          },
        },
        {
          props: { variant: 'outlined', size: 'large' },
          style: {
            paddingInline: num('spacing.32x') - num('stroke.sm'),
            paddingBlock: num('spacing.16x') - num('stroke.sm'),
          },
        },
      ],
    },
  },
})
