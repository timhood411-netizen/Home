# Event Banner

A full-width banner for surfacing time-sensitive announcements — scheduled events,
sales, training sessions, maintenance windows, and similar notices that need a
prominent inline placement on a page.

> **Source:** [Figma — FPDS / Web / Components / Event Banner](https://www.figma.com/design/HGkmlNBKwKdXzhLYQIPfHk/FPDS---Web_-Components?node-id=65763-21875)

## Anatomy

| Region | Purpose | Notes |
| --- | --- | --- |
| **Event Icon** | 72×72 illustrative graphic at the leading edge. | Uses the `_Graphic` dependency. Do not resize. |
| **Event Title & Information** | Headline, optional title, description. | Stacks with `spacing/2x` (8px). |
| **Trailing Container** | Vertical divider + CTA button. | Only renders when `cta = true`. |

## Variant matrix

The component exposes three variant properties: `Breakpoint`, `Background`, and
`Headline Placement`. Nine variants are published — the **Left** placement is
only available at the desktop breakpoint.

| # | Breakpoint | Background | Headline Placement | Size (w × h) |
| - | --- | --- | --- | --- |
| 1 | 1024–1919px | neutral-strong  | Top  | 1224 × 176 |
| 2 | 1024–1919px | primary-strong  | Top  | 1224 × 176 |
| 3 | 1024–1919px | onColor         | Top  | 1224 × 176 |
| 4 | 1024–1919px | neutral-strong  | Left | 1224 × 144 |
| 5 | 1024–1919px | primary-strong  | Left | 1224 × 144 |
| 6 | 1024–1919px | onColor         | Left | 1224 × 144 |
| 7 | 320–1023px  | neutral-strong  | Top  | 552  × 368 |
| 8 | 320–1023px  | primary-strong  | Top  | 552  × 368 |
| 9 | 320–1023px  | onColor         | Top  | 552  × 368 |

## Component properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `headline` | string | `"Headline"` | Primary headline (Headline XL). |
| `title` | string | `"Title"` | Secondary line (Headline L). Hidden when `title1 = false`. |
| `description` | string | `"Description"` | Body copy (Body Regular M). |
| `title1` | boolean | `true` | Toggles the title line. |
| `leadingIcon` | boolean | `true` | Toggles the 72px event icon. |
| `cta` | boolean | `true` | Toggles the call-to-action button. |
| `divider` | boolean | `true` | Toggles the vertical divider between content and CTA. |

## Layout

### Desktop — Top placement (1024–1919px, Top)
Horizontal row, `spacing/5x` (20px) gap, items vertically centered.
Order: **Icon → Title & Info (flex) → Trailing (divider + CTA)**.

### Desktop — Left placement (1024–1919px, Left)
Horizontal row, no icon. The headline lives in a fixed **200px** column at the
leading edge; the title + description take the remaining flex space; the
trailing divider + CTA sit at the end.

### Mobile / Tablet (320–1023px, Top only)
Vertical column, `spacing/6x` (24px) gap. Order: **Icon → Title & Info →
Full-width CTA** (CTA container is `72px` tall, button stretches to full width).

## Container styling

- **Radius:** `radius/medium` — 8px
- **Padding:** `spacing/8x` — 32px
- **Overflow:** clipped
- **Min height:** 144px

| Background | Fill token | Surface | Border |
| --- | --- | --- | --- |
| `neutral-strong` | `color/fill/neutral-strong` | `#1a1a1a` | — |
| `primary-strong` | `color/fill/secondary-strong` | `#00095b` | — |
| `onColor` | `color/fill/onColor` | `#ffffff` | 2px `color/stroke/default` (`#b2b2b2`) |

## Typography

| Slot | Style | Family / Weight | Size / Line height |
| --- | --- | --- | --- |
| Headline | headline/XL | Ford-f1 Semibold (600) | 32 / 40 |
| Title    | headline/L  | Ford-f1 Semibold (600) | 24 / 32 |
| Description | body/regular/M | Ford-f1 Regular (400) | 16 / 24 |
| CTA label | body/medium/L | Ford-f1 Medium (500) | 18 / 28 |

### Text color by background

| Background | Headline / Title | Description |
| --- | --- | --- |
| `neutral-strong` | `color/text/default-inverted` (`#ffffff`) | `color/text/default-inverted` (`#ffffff`) |
| `primary-strong` | `color/text/default-inverted` (`#ffffff`) | `color/text/default-inverted` (`#ffffff`) |
| `onColor`        | `color/text/default` (`#000000`)           | `color/text/moderate` (`#1a1a1a`) |

## Divider

- 2px wide, full height, `radius/small` (4px).
- Only rendered when the CTA is present (sits between content and CTA).

| Background | Divider fill |
| --- | --- |
| `neutral-strong` | `color/fill/neutral-moderate` (`#808080`) |
| `primary-strong` | `color/fill/neutral-moderate` (`#808080`) |
| `onColor`        | `color/fill/neutral-subtle` (`#cccccc`) |

## CTA button

Uses the **Button** component (size `Large`, style `Primary`, state `Default`).
The button `type` flips based on banner background so the CTA always meets
contrast against its surface.

| Banner background | Button `type` | Button fill | Label color |
| --- | --- | --- | --- |
| `neutral-strong` | `OnColor` | `color/action/onColor` (`#ffffff`) | `color/text/default` (`#000000`) |
| `primary-strong` | `OnColor` | `color/action/onColor` (`#ffffff`) | `color/text/default` (`#000000`) |
| `onColor`        | `Default` | `color/action/default` (`#0562d2`) | `color/text/onColor` (`#ffffff`) |

Constraints:
- Max width 272px at the desktop breakpoint; the button is full-width at the
  mobile breakpoint.
- Min height 48px, pill shape (`radius/full`, 8000px).
- Per the Button source: **do not change icon size inside the button.**

## Spacing tokens used

| Token | Value | Where |
| --- | --- | --- |
| `spacing/2x` | 8px  | Gap between headline / title / description |
| `spacing/5x` | 20px | Gap between regions on desktop row |
| `spacing/6x` | 24px | Gap between regions on mobile column |
| `spacing/8x` | 32px | Container padding |

## Usage guidance

- **Pick a background** based on page context: `neutral-strong` and
  `primary-strong` for prominent placement on light surfaces; `onColor` for
  placement on dark or branded page backgrounds where the banner should appear
  as a lifted light surface.
- **Top vs Left placement (desktop):** use **Top** when the headline and title
  both carry weight; use **Left** for a compact 144px banner with a single
  prominent headline at the leading edge.
- **Headline placement Left is desktop-only.** At the 320–1023px breakpoint,
  only Top is published — implementations should fall back to Top when the
  viewport narrows.
- **Keep the icon size fixed (72px).** It is part of the `_Graphic` dependency
  and is intended to be illustrative, not a UI icon.
- **Divider visibility tracks CTA visibility.** If `cta = false`, hide the
  divider as well.

## Dependencies

- `_Graphic` — illustrative graphic wrapper for the leading icon
  ([DS Guidelines](https://www.figma.com/proto/cAOoFkzK5x9TUREZbIRr2A/DS-Guidelines?page-id=978%3A180050&type=design&node-id=69-34117)).
- `Button` (size `Large`, style `Primary`)
  ([DS Guidelines](https://www.figma.com/file/cAOoFkzK5x9TUREZbIRr2A/DS-Guidelines?type=design&node-id=69-21468)).
