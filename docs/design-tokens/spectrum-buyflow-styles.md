# Spectrum TV Buy Flow — Extracted Styles

Design tokens, colors, typography, and component styling reverse-engineered
from the rendered CSS of `spectrum.com/buy/tv` (the Angular "DM Buyflow"
application). Extracted from a saved copy of the page (`View Source →
Webpage, Complete`) rather than fetched live — this session's network policy
blocks outbound requests to `spectrum.com`.

> **Source:** Two local page saves — a bare HTML shell (no CSS captured) and
> a full "Save As → Webpage, Complete" capture containing ~266KB of inlined
> `<style>` blocks (Angular emits component styles inline with
> `_ngcontent-*` scoping attributes rather than via a single static
> stylesheet). The site's main stylesheet (`styles-LIVZUCIK.css`) and the
> core `--nova-*` token definitions (`:root` block) were **not** captured in
> either save, so some tokens below are referenced (`var(--nova-...)`) but
> their values are unknown.

## Fonts

| Family | Role | Source |
| --- | --- | --- |
| **Spectrum Sans** | Primary typeface, self-hosted webfont | `spectrum.com/assets/fonts/SpectrumSans/*.woff2` |
| Material Icons / Material Icons Outlined | Iconography | Google Fonts (`close`, `edit`, `file_download`, `print` icons loaded) |

Spectrum Sans weight files loaded: Light (`_Lt`), Regular (`_Rg`), Book
(`_Bk`), Medium (`_Md`), Bold (`_Bd`), Extra Bold (`_XBd`) — all `.woff2`.

Two token systems reference type: `--nova-font-family` (value not captured,
almost certainly resolves to Spectrum Sans) drives the `.nova-typography--*`
and `.nova-button` classes; the buy-flow-specific `--bf-*` tokens below drive
legacy/buyflow-scoped components.

## Color tokens (`--bf-*`, fully captured with hex values)

### Brand / primary

| Token | Value |
| --- | --- |
| `--bf-color-primary` | `#0099d8` |
| `--bf-color-primary-dark` | `var(--bf-color-dark-blue-20)` → `#002133` |
| `--bf-color-selected` | `#0271eb` |
| `--bf-focus-ring-color` | `#0271eb` |

### Blues

| Token | Value |
| --- | --- |
| `--bf-color-blue-5` | `#0171eb` |
| `--bf-color-blue-10` | `#008cff` |
| `--bf-color-blue-20` | `#0073d1` |
| `--bf-color-blue-30` | `#0062b2` |
| `--bf-color-blue-40` | `#00629b` |
| `--bf-color-light-blue-10` | `#b7cee5` |
| `--bf-color-light-blue-15` | `#add8e6` |
| `--bf-color-light-blue-20` | `#5db8fc` |
| `--bf-color-dark-blue-10` | `#004366` |
| `--bf-color-dark-blue-20` | `#002133` |
| `--bf-color-dark-blue-30` | `#001019` |
| `--bf-color-dark-blue-40` | `#003057` |

### Grays / neutrals

| Token | Value |
| --- | --- |
| `--bf-color-white` | `#ffffff` |
| `--bf-color-gray-5` | `#fafafa` |
| `--bf-color-gray-10` | `#f8f8f8` |
| `--bf-color-gray-20` | `#f5f5f5` |
| `--bf-color-gray-25` | `#d9dad9` |
| `--bf-color-gray-27` | `#e0e0e0` |
| `--bf-color-gray-30` | `#737373` |
| `--bf-color-gray-40` | `#808080` |
| `--bf-color-charcoal` | `#333333` |
| `--bf-color-charcoal-2` | `#222222` |
| `--bf-color-black` | `#000000` |

### Semantic (status)

| Token | Value |
| --- | --- |
| `--bf-color-success` / `--bf-color-positive` | `var(--bf-color-green-20)` → `#008516` |
| `--bf-color-positive-dark` | `var(--bf-color-green-10)` → `#00bf1f` |
| `--bf-color-error` / `--bf-color-negative` | `var(--bf-color-red-20)` → `#d6312b` |
| `--bf-color-error-dark` / `--bf-color-negative-dark` | `var(--bf-color-red-10)` → `#ff4d4a` |
| `--bf-color-caution` | `var(--bf-color-yellow-20)` → `#feb533` |
| `--bf-color-info` / `--bf-color-neutral` | `var(--bf-color-light-blue-20)` → `#5db8fc` |
| `--bf-color-red-30` | `#e71313` |
| `--bf-color-red-40` | `#e71414` |
| `--bf-color-yellow-10` | `#ffd400` |
| `--bf-color-green-10` | `#00bf1f` |
| `--bf-color-green-20` | `#008516` |

## Primary CTA button (`.nova-button`, Nova design system)

The buy flow's modern component library ("Nova") drives buttons via
CSS custom properties set per-variant on top of a shared `.nova-button` base
(pill-shaped, `border-radius: 999px`, `padding: 10px 22px`, bold weight,
16px/1.5 line-height).

| Variant | Background | Border | Text | Hover bg | Active bg |
| --- | --- | --- | --- | --- | --- |
| **Ghost (default)** | `transparent` | `transparent` | `#005eff` | `#d9e7ff` | `#c1d8ff` |
| **Primary** | `#005eff` | `#005eff` | `#ffffff` | `#003ca4` | `#002b75` |
| **Secondary** | `#ffffff` | `#005eff` | `#005eff` | — | — |
| **Dark (on dark surfaces)** | `#ffffff` | `#005eff` | `#005eff` | `#d9e7ff` | `#c1d8ff` |

Disabled state: `#f0f0f0` background / `#cccccc` text (light); `#4d4d4d`
background (dark). Focus ring: `rgba(0, 94, 255, .75)` outline glow.

Note the brand blue used for primary actions (`#005eff`) is a brighter,
more saturated blue than the legacy `--bf-color-primary` (`#0099d8`) —
evidence of an in-progress rebrand from the older buy-flow palette to the
newer "Nova" system.

## Typography scale (`.nova-typography--*`)

All sizes are mobile-first `px`; a `--fixed-desktop` modifier scales most
roles up for wide viewports (roughly a 1.3–1.5× jump), and a
`--fixed-mobile` modifier pins the base size regardless of viewport.

| Role | Mobile / base | Desktop (`--fixed-desktop`) |
| --- | --- | --- |
| `display-large` | 56px / 1.214 | 96px / 1.104 |
| `header-h1` / `heading-large` | 48px / 1.208 | 72px / 1.111 |
| `header-h2` / `heading-medium` | 36px / 1.222 | 56px / 1.214 |
| `header-h3` / `heading-small` | 32px / 1.25 | 48px / 1.208 |
| `header-h4` | 24px / 1.417 | 36px / 1.222 |
| `header-h5` / `subtitle-small` | 20px / 1.4 | 32px / 1.25 |
| `header-h6` | 18px / 1.444 | 24px / 1.417 |
| `subtitle-medium` | 24px / 1.417 | 36px / 1.222 |
| `body-large` | 18px / 1.444 | 24px / 1.417 |
| `body-medium` / `paragraph-p1` | 16px / 1.375 | 18px / 1.444 |
| `body-small` / `paragraph-p2` | 14px / 1.429 | 16px / 1.375 |
| `body-extra-small` / `paragraph-p3` | 12px / 1.5 | 14px / 1.429 |
| `label-large` | 14px / 1.286 | 16px / 1.25 |
| `label-medium` | 14px / 1.286 | — |
| `label-small` | 12px / 1.167 | — |
| `disclaimer` | 12px / 1.5 | — |

Font weight is applied via a separate `--font-weight` custom property, with
`.nova-typography--medium` / `--bold` modifier classes switching between
`var(--nova-font-weight-regular|medium|bold|extra-bold)`.

## Spacing scale (`--bf-size-*` / `--bf-spacing-*`)

| Token | Value (rem) | px equivalent |
| --- | --- | --- |
| `--bf-size-xxs` | 0.25rem | 4px |
| `--bf-size-2` | 0.125rem | 2px |
| `--bf-size-xs` | 0.5rem | 8px |
| `--bf-size-sm` | 0.75rem | 12px |
| `--bf-size-14` | 0.875rem | 14px |
| `--bf-size-md` | 1rem | 16px |
| `--bf-size-lg` | 1.25rem | 20px |
| `--bf-size-xl` | 1.5rem | 24px |
| `--bf-size-xxl` | 2rem | 32px |
| `--bf-size-xxxl` | 2.5rem | 40px |
| `--bf-spacing-section-xs` | — | 48px (3rem) |
| `--bf-spacing-section-sm` | — | 64px (4rem) |
| `--bf-spacing-section-md` | — | 80px (5rem) |
| `--bf-spacing-section-lg` | — | 100px (6.25rem) |
| `--bf-spacing-section-xl` | — | 120px (7.5rem) |

`--bf-spacing-element-*` tokens alias directly to the `--bf-size-*` scale
(e.g. `--bf-spacing-element-md` = `--bf-size-md` = 1rem).

## Border radius

| Token / literal | Value | Usage |
| --- | --- | --- |
| `--bf-size-radius-sm` | 0.125rem (2px) | — |
| `--bf-size-radius-md` | 0.25rem (4px) | — |
| `--bf-size-radius-lg` | 0.5rem (8px) | — |
| `--bf-size-radius-circle` | 50% | avatars / round icons |
| Nova modal container | 16px | dialogs |
| Buttons (`.nova-button`) | 999px | pill shape |
| Other literals observed | 3px, 5px!important, 6px, 9px, 10px, 12px, 14px, 20px | scattered component overrides |

## Shadows

| Value | Likely use |
| --- | --- |
| `0 2px 4px #0000001a` | subtle card elevation |
| `0 4px 12px #0000001a` | card elevation (hover) |
| `0 8px 32px #0000001f` | modal / overlay elevation |
| `0 2px 8px #0476d933`, `0 4px 12px #0476d91a`, `0 8px 24px #0476d926` / `#0476d940` | blue-tinted glow, likely focus/selected promo cards |
| `0 2px 8px #00a65166`, `0 4px 12px #00a65166` | green-tinted glow, likely a "savings"/promo highlight |

## Gradients

| Value | Likely use |
| --- | --- |
| `linear-gradient(135deg,#1e3a8a,#1e40af)` | `.app.optimized-flow` full-page background (deep blue) |
| `linear-gradient(135deg,#008542,#00c965)` | green promo surface |
| `linear-gradient(135deg,#f0f7ff,#e3f2fd)`, `linear-gradient(135deg,#f0f7ff,#e8f1fd)` | light blue card backgrounds |
| `linear-gradient(135deg,#f0fff0,#e8f5e9)` | light green card background |
| `linear-gradient(135deg,#f8f9fa,#fff)` | neutral card background |

## Breakpoints in use

Multiple slightly-inconsistent breakpoints appear across components
(evidence of several component libraries coexisting):

- **320px** — smallest supported width (explicit range start)
- **575px / 600px** — small mobile cutoffs
- **744px / 745px / 767px / 768px** — primary mobile/tablet breakpoint (most common)
- **810px / 840px** — tablet-specific overrides
- **992px / 999px / 1000px / 1024px** — desktop cutoffs
- **1200px / 1281px** — large-desktop cutoffs

The most consistently used pair is **≤767px (mobile)** vs **≥768px
(desktop)**, matching the `--fixed-mobile` / `--fixed-desktop` typography
modifiers.

## Known gaps

The following were referenced via `var(--nova-...)` throughout the captured
CSS but never defined in what was saved — their values live in the
uncaptured `styles-LIVZUCIK.css`:

- `--nova-surface-base`, `--nova-surface-overlay-page`
- `--nova-border-focus-primary`, `--nova-border-minimal`, `--nova-border-moderate`
- `--nova-text-primary-dark`, `--nova-text-secondary-dark`, `--nova-text-tertiary-dark`
- `--nova-font-family`, `--nova-font-weight-regular|medium|bold|extra-bold`
- `--nova-icon-color`, `--nova-icon-size`

To fill these in, capture `styles-LIVZUCIK.css` directly (DevTools →
Sources/Network, or a "Save As" that preserves the linked stylesheet
alongside the HTML) and search it for a `:root { --nova-... }` block.
