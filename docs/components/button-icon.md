# Button: Icon

A circular, icon-only action button used where a label would be redundant or
where space is constrained (toolbars, cards, table rows, app headers). Part of
the Universal Component Library (`#UCL`).

> **Source:** [Figma — FPDS / Web / Components / Button: Icon](https://www.figma.com/design/HGkmlNBKwKdXzhLYQIPfHk/FPDS---Web_-Components?node-id=114-4767)
> **Related:** [Icon](https://www.figma.com/proto/cAOoFkzK5x9TUREZbIRr2A/DS-Guidelines?page-id=978%3A180050&node-id=69-34117) (child dependency, node `108:7061`) · [Button (labeled)](./event-banner.md#cta-button) usage guidance

## Anatomy

| Region | Purpose | Notes |
| --- | --- | --- |
| **Container** | Circular hit area and fill/border/background surface. | `radius/full` (8000px) — always a perfect circle since width = height. |
| **Icon** | Centered glyph. | Swappable `Icon` instance (node `108:7061`). Per the Icon component's own spec: **do not change its size property** — use the slot size documented below for each button size. |
| **Focus ring** *(optional)* | 2px outline shown when the button has keyboard focus. | Controlled by the boolean `focus` prop, independent of `state`. |
| **Tooltip** *(optional)* | Floating label above the button. | Controlled by the boolean `showTooltip` prop. See [Tooltip](#tooltip). |

## Component properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `"XSmall" \| "Small" \| "Medium" \| "Large"` | `"Large"` | Overall diameter of the button. |
| `type` | `"Default" \| "Danger" \| "Success" \| "OnColor"` | `"Default"` | Color role. `OnColor` is for placing the button on a colored or dark surface (e.g. inside a banner or hero). |
| `style` | `"Primary" \| "Secondary" \| "Tertiary" \| "Ghost"` | `"Primary"` | Visual weight/emphasis. |
| `state` | `"Default" \| "Hover" \| "Disabled"` | `"Default"` | Interaction state. **No separate "Pressed"/"Active" state is published** — implementations should derive a pressed treatment (e.g. a darker shade of the hover fill) or confirm one with design before shipping. |
| `focus` | `boolean` | `false` | Renders the focus-ring overlay. Drive this from real keyboard-focus state (`:focus-visible`), not from `state`. |
| `showTooltip` | `boolean` | `false` | Renders a floating tooltip label above the button. |

`size` × `type` × `style` × `state` gives **144 published variants** (4 × 4 × 3 × 3), each independently combinable with `focus` and `showTooltip`.

## Sizing

| Size | Container (w × h) | Icon slot | Nominal padding token | **Effective visual gap** | Focus ring diameter |
| --- | --- | --- | --- | --- | --- |
| XSmall | 24 × 24px | 16 × 16px | `spacing/1x` (4px) | 4px | 28px |
| Small | 32 × 32px | 20 × 20px | `spacing/2x` (8px) | **6px** | 36px |
| Medium | 40 × 40px | 24 × 24px | `spacing/3x` (12px) | **8px** | 44px |
| Large | 48 × 48px | 32 × 32px | `spacing/3x` (12px) | **8px** | 52px |

**Implementation note:** the padding token recorded on the Figma frame does not
match `(container − icon slot) / 2` for Small, Medium, and Large (only XSmall
is consistent). Build to the **container** and **icon slot** columns — they're
the values that actually render — and treat the padding token as informational
only. If you need to confirm which is authoritative, check with design before
encoding `spacing/2x` / `spacing/3x` directly into the button's padding.

## Style variants

| Style | Fill (Default state) | Border | Icon color source |
| --- | --- | --- | --- |
| **Primary** | Solid, saturated `type` color | None | White/`onColor` icon |
| **Secondary** | Transparent | 2px, `type` color | `type` color icon |
| **Tertiary** | Transparent | None | `type` color icon |
| **Ghost** | Transparent | None | `type` color icon |

Secondary and Tertiary look identical at rest but **differ on hover**: Secondary
keeps its border and tints its fill with the `type`'s hover-subtle color;
Tertiary (borderless) uses the same type-tinted hover-subtle fill; **Ghost's
hover fill is neutral gray, independent of `type`** (see table below). This is
the one behavioral difference between Tertiary and Ghost — don't collapse them
into a single variant in code.

## Color tokens by `type`

| `type` | Primary fill | Primary fill (Hover) | Secondary/Tertiary/Ghost border & icon | Secondary/Tertiary hover fill | Ghost hover fill |
| --- | --- | --- | --- | --- | --- |
| **Default** | `color/action/default` `#0562d2` | `color/action/hover` `#044ea7` | `color/stroke/primary-strong` / `color/icon/primary` `#0562d2` | `color/action/hover-subtle` `#e4f1ff` | `color/action/neutral-hover-subtle` `#e5e5e5` |
| **Danger** | `color/action/danger` `#c41a1a` | `color/action/danger-hover` `#8c0f0f` | `color/stroke/danger` / `color/icon/danger` `#c41a1a` | `color/action/danger-hover-subtle` `#fde9e9` | `color/action/neutral-hover-subtle` `#e5e5e5` |
| **Success** | `color/action/success` `#00714b` | `color/action/success-hover` `#004f34` | `color/stroke/success` / `color/icon/success` `#00714b` | `color/action/success-hover-subtle` `#e0f5ee` | `color/action/neutral-hover-subtle` `#e5e5e5` |
| **OnColor** | `color/action/onColor` `#ffffff` | `color/fill/neutral-subtle` `#cccccc` | `color/stroke/onColor` / `color/icon/onColor` `#ffffff` | `color/opacity/surface/inverted/20` `rgba(255,255,255,0.2)` | `color/opacity/surface/inverted/20` `rgba(255,255,255,0.2)` |

**Verify with design:** the icon color for **Primary + OnColor** (a white-filled
button, since the fill itself already equals `color/action/onColor`) isn't
resolvable from the exported node data — the icon's fill is set on the nested
`Icon` instance rather than the button wrapper. It needs to be a dark or
brand color to contrast against the white fill; confirm the exact token
(likely `color/icon/default` or `color/icon/primary`) against the Icon
instance in Figma before implementing.

## Disabled state

| Style | Fill | Border | Icon |
| --- | --- | --- | --- |
| Primary — Default/Danger/Success | `color/action/disabled` `#b2b2b2` | None | `color/icon/onDisabled` `#ffffff` |
| Primary — OnColor | `color/action/neutral-moderate` `#808080` | None | `color/icon/onDisabled` `#ffffff` |
| Secondary — any type | Transparent | `color/stroke/disabled` `#b2b2b2` | `color/icon/disabled` `#b2b2b2` |
| Tertiary / Ghost — any type | Transparent | None | `color/icon/disabled` `#b2b2b2` |

Note `Primary + OnColor + Disabled` uses a **darker** gray
(`neutral-moderate`, `#808080`) than every other disabled Primary combination
(`action/disabled`, `#b2b2b2`) — this keeps it visible against the colored or
dark surface an `OnColor` button sits on. Don't normalize this to the same
gray as the other types.

## Focus ring

- 2px stroke, `color/stroke/focus` (`#0562d2`), circular, matching the
  container's `radius/full`.
- For **Primary, Tertiary, and Ghost**: the ring is offset symmetrically —
  ring diameter = container + 4px, positioned −2px on every edge (extends
  2px past the button edge on all sides).
- For **Secondary**: the source file positions the ring at diameter =
  container + 4px but offset −4px (i.e. it extends 4px past the button on
  the leading/top edges but sits flush with the trailing/bottom edges). This
  reads as an authoring inconsistency rather than an intentional style
  difference — **implement Secondary's focus ring symmetrically, the same
  as the other three styles, unless design confirms the asymmetry is
  intentional.**

## Tooltip

When `showTooltip` is true, a small pill-shaped label (white fill,
`color/stroke/neutral-strong` 1px border, `radius/small` 4px, drop shadow)
appears **above** the button with a centered pointer/caret, offset so its
bottom edge sits ~12px above the button's top edge. Content is a single line
of `body/regular/S` text (`color/text/default`, black), horizontally centered,
truncating with ellipsis if it overflows. Treat this as a hover/focus-driven
disclosure, not always-on — most consuming code should toggle `showTooltip`
from `:hover`/`:focus-visible` rather than rendering it statically.

## Accessibility

- **This is an icon-only control — it has no visible text label.** Every
  instance must set an accessible name via `aria-label` (or equivalent)
  describing the action (e.g. "Close", "Delete row"), not the icon's shape.
- **Tooltip is not an accessible name.** Even when `showTooltip` is used, the
  underlying control still needs `aria-label`; don't rely on the tooltip text
  alone for screen reader users.
- **Touch target size:** `XSmall` (24px) and `Small` (32px) are both below
  the WCAG 2.5.5/2.5.8 recommended 44×44px (AAA) / 24×24px (AA) minimum
  target sizes. Use `Medium` or `Large` wherever the button is a primary
  touch target; if `XSmall`/`Small` must be used on touch surfaces, add
  invisible hit-area padding rather than growing the visual button.
- **Focus visibility:** never suppress the focus ring for pointer users only
  — drive `focus` off `:focus-visible` so keyboard users retain a visible
  indicator, matching the labeled Button component's focus treatment.
- **Disabled buttons** should also carry `aria-disabled`/`disabled` so
  assistive tech announces the unavailable state, since color alone
  (grayed icon/fill) does not convey it.

## Usage guidance

- **Style selection:** use **Primary** for the single most important action
  in a toolbar or group; **Secondary** for a visible-but-lower-emphasis
  action; **Tertiary** or **Ghost** for low-emphasis or repeated actions
  (e.g. a row of icon buttons in a table), where a filled or bordered
  treatment for every item would be visually noisy.
- **Ghost vs. Tertiary:** functionally similar at rest; pick Ghost when the
  button sits over varied/imagery backgrounds and a neutral gray hover reads
  better than a brand-tinted one — otherwise default to Tertiary.
- **`type=OnColor`** is for buttons placed directly on a saturated or dark
  background (banners, heroes, media overlays) — don't use it on standard
  light page backgrounds.
- **`type=Danger`** is reserved for destructive actions (delete, remove);
  **`type=Success`** for confirping/positive actions (approve, complete).
- Keep icon glyphs simple and instantly recognizable at the smallest size
  the button will be used at — don't rely on fine detail that disappears at
  `XSmall`/`Small`.

## Dependencies

- `Icon` (node `108:7061`) — swappable glyph. Its own spec: **if it lives
  inside a larger component (as it does here), don't change its size
  property**; size it via the parent button's icon-slot dimensions instead.

## Changelog

| Date | Version | Change |
| --- | --- | --- |
| 2026-09-12 | 1.0 | Initial documentation imported from Figma for dev handoff. |
