<!--
  zeroheight-shaped source for the Event Banner component page.
  Each "## " heading is intended as a separate zeroheight block (Tab / Section)
  so the page can be built by pasting block-by-block into the editor.
  Markers like [Embed Figma: ...] and [Image: ...] mark slots where the
  zeroheight editor's native blocks (Figma frame, image, color swatch, code
  tab) should be added after import — Markdown import cannot create these.
-->

# Event Banner

> A full-width banner for surfacing time-sensitive announcements — scheduled
> events, sales, training sessions, and maintenance windows. Sits inline on a
> page and pairs short copy with a single primary action.

| | |
| --- | --- |
| **Status** | Ready |
| **Library** | FPDS / Web / Components |
| **Figma** | [Open in Figma](https://www.figma.com/design/HGkmlNBKwKdXzhLYQIPfHk/FPDS---Web_-Components?node-id=65763-21875) |
| **Last updated** | 2026-06-02 |

[Embed Figma frame: 65763:21875 — Event Banner overview]

---

## Overview

Event Banner draws attention to a single timely message — a webinar, a limited
sale, a planned outage. It is a page-level surface, not a notification: it
belongs in the page flow rather than as a toast or modal.

**Use it when**

- You need to announce a scheduled or time-bound event inline on a page.
- A single primary action (e.g. *Learn More*, *Register*) is sufficient.
- The message benefits from a visual anchor (the 72px event icon).

**Don't use it when**

- The message is dismissible or transient → use a **Notification / Toast**.
- The message blocks the user from continuing → use a **Modal**.
- You need multiple actions or rich content → use a **Card** or **Hero**.

---

## Anatomy

[Image: anatomy diagram with numbered callouts]

1. **Event Icon** — 72×72 illustrative graphic at the leading edge. Uses the
   `_Graphic` dependency; do not resize.
2. **Event Title & Information** — stacked headline, optional title, and
   description.
3. **Divider** — 2px vertical rule that separates content from the CTA.
   Visible only when a CTA is present.
4. **CTA** — single primary Button (Large / Primary).

---

## Variants

Three variant axes: **Breakpoint**, **Background**, **Headline Placement**.
Nine variants are published. The *Left* placement is desktop-only.

### Variant matrix

| Breakpoint | Background | Headline Placement | Frame |
| --- | --- | --- | --- |
| 1024–1919px | neutral-strong | Top  | [Figma](https://www.figma.com/design/HGkmlNBKwKdXzhLYQIPfHk/FPDS---Web_-Components?node-id=66969-11691) |
| 1024–1919px | primary-strong | Top  | [Figma](https://www.figma.com/design/HGkmlNBKwKdXzhLYQIPfHk/FPDS---Web_-Components?node-id=66969-11702) |
| 1024–1919px | onColor        | Top  | [Figma](https://www.figma.com/design/HGkmlNBKwKdXzhLYQIPfHk/FPDS---Web_-Components?node-id=66969-11713) |
| 1024–1919px | neutral-strong | Left | [Figma](https://www.figma.com/design/HGkmlNBKwKdXzhLYQIPfHk/FPDS---Web_-Components?node-id=66969-11724) |
| 1024–1919px | primary-strong | Left | [Figma](https://www.figma.com/design/HGkmlNBKwKdXzhLYQIPfHk/FPDS---Web_-Components?node-id=67072-9240)  |
| 1024–1919px | onColor        | Left | [Figma](https://www.figma.com/design/HGkmlNBKwKdXzhLYQIPfHk/FPDS---Web_-Components?node-id=67072-8818)  |
| 320–1023px  | neutral-strong | Top  | [Figma](https://www.figma.com/design/HGkmlNBKwKdXzhLYQIPfHk/FPDS---Web_-Components?node-id=66969-11751) |
| 320–1023px  | primary-strong | Top  | [Figma](https://www.figma.com/design/HGkmlNBKwKdXzhLYQIPfHk/FPDS---Web_-Components?node-id=66969-11761) |
| 320–1023px  | onColor        | Top  | [Figma](https://www.figma.com/design/HGkmlNBKwKdXzhLYQIPfHk/FPDS---Web_-Components?node-id=66969-11771) |

### Background

[Tab block — one tab per background]

- **neutral-strong** — dark surface for high contrast on light pages.
  [Embed Figma frame: 66969:11691]
- **primary-strong** — brand-blue surface for marketing-led announcements.
  [Embed Figma frame: 66969:11702]
- **onColor** — light surface with a 2px outline, for use on dark or branded
  page backgrounds.
  [Embed Figma frame: 66969:11713]

### Headline placement

[Tab block — one tab per placement]

- **Top** — icon, then a stacked Headline / Title / Description on the left;
  CTA on the right. Available at both breakpoints.
- **Left** — Headline pinned in a 200px leading column, Title + Description
  flex-fill the middle, CTA at the trailing edge. **Desktop only.**

---

## Behavior

[Tab block — one tab per breakpoint]

### Desktop (1024–1919px)

- Horizontal row, `spacing/5x` (20px) gap, items vertically centered.
- Container width 1224px (min 1012px).
- Min height: **176px** (Top placement) / **144px** (Left placement).
- Left placement: the Headline occupies a fixed **200px** column.

### Mobile & tablet (320–1023px)

- Vertical column, `spacing/6x` (24px) gap.
- Container width 552px (max 975px).
- Min height: **368px**.
- CTA stretches to full container width; CTA container height is **72px**.
- Only **Top** placement is published — implementations should fall back to
  Top when the viewport narrows below 1024px.

---

## Properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `headline` | string | `"Headline"` | Primary headline (Headline XL). |
| `title` | string | `"Title"` | Secondary line (Headline L). Hidden when `title1 = false`. |
| `description` | string | `"Description"` | Body copy (Body Regular M). |
| `title1` | boolean | `true` | Toggles the title line. |
| `leadingIcon` | boolean | `true` | Toggles the 72px event icon. |
| `cta` | boolean | `true` | Toggles the call-to-action button. |
| `divider` | boolean | `true` | Toggles the vertical divider between content and CTA. |
| `background` | `"neutral-strong" \| "primary-strong" \| "onColor"` | `"neutral-strong"` | Surface treatment. |
| `headlinePlacement` | `"Top" \| "Left"` | `"Top"` | Layout direction. *Left* is desktop-only. |
| `breakpoint` | `"1024px - 1919px" \| "320px - 1023px"` | `"1024px - 1919px"` | Responsive variant. |

---

## Design tokens

### Container

| Property | Token | Value |
| --- | --- | --- |
| Radius | `radius/medium` | 8px |
| Padding | `spacing/8x` | 32px |
| Min height | — | 144px |
| Overflow | — | clip |

### Surface

[Color block — one swatch per row]

| Background variant | Token | Value |
| --- | --- | --- |
| neutral-strong | `color/fill/neutral-strong` | `#1a1a1a` |
| primary-strong | `color/fill/secondary-strong` | `#00095b` |
| onColor | `color/fill/onColor` + `color/stroke/default` (2px border) | `#ffffff` / `#b2b2b2` |

### Typography

| Slot | Style | Family / Weight | Size / Line height |
| --- | --- | --- | --- |
| Headline | `headline/XL` | Ford-f1 Semibold (600) | 32 / 40 |
| Title    | `headline/L`  | Ford-f1 Semibold (600) | 24 / 32 |
| Description | `body/regular/M` | Ford-f1 Regular (400) | 16 / 24 |
| CTA label | `body/medium/L` | Ford-f1 Medium (500) | 18 / 28 |

### Text color by background

| Background | Headline / Title | Description |
| --- | --- | --- |
| neutral-strong | `color/text/default-inverted` (`#ffffff`) | `color/text/default-inverted` (`#ffffff`) |
| primary-strong | `color/text/default-inverted` (`#ffffff`) | `color/text/default-inverted` (`#ffffff`) |
| onColor        | `color/text/default` (`#000000`)           | `color/text/moderate` (`#1a1a1a`) |

### Divider

| Background | Token | Value |
| --- | --- | --- |
| neutral-strong | `color/fill/neutral-moderate` | `#808080` |
| primary-strong | `color/fill/neutral-moderate` | `#808080` |
| onColor        | `color/fill/neutral-subtle`   | `#cccccc` |

Divider is 2px wide, full height, with `radius/small` (4px). It is only
rendered when a CTA is visible.

### CTA button

| Banner background | Button `type` | Button fill | Label color |
| --- | --- | --- | --- |
| neutral-strong | `OnColor` | `color/action/onColor` (`#ffffff`) | `color/text/default` (`#000000`) |
| primary-strong | `OnColor` | `color/action/onColor` (`#ffffff`) | `color/text/default` (`#000000`) |
| onColor        | `Default` | `color/action/default` (`#0562d2`) | `color/text/onColor` (`#ffffff`) |

Constraints: max width 272px on desktop, full-width on mobile; min height
48px; pill shape (`radius/full`, 8000px). **Do not change the icon size
inside the button.**

### Spacing

| Token | Value | Where |
| --- | --- | --- |
| `spacing/2x` | 8px  | Headline / Title / Description gap |
| `spacing/5x` | 20px | Region gap on desktop row |
| `spacing/6x` | 24px | Region gap on mobile column |
| `spacing/8x` | 32px | Container padding |

---

## Usage

### Do

[Image: do — banner on light page using neutral-strong background]

- Pair every banner with **one** clear, action-oriented CTA label
  (*Learn More*, *Register*, *View schedule*).
- Match background to context: `neutral-strong` / `primary-strong` for light
  pages, `onColor` for dark or branded pages.
- Keep the headline scannable — a few words, sentence case.

### Don't

[Image: don't — two CTAs in the trailing slot]

- Don't put more than one CTA in the trailing slot. Choose the most important
  action.
- Don't resize the 72px event icon or swap it for a small UI icon — it uses
  the `_Graphic` dependency by design.
- Don't show the divider when there is no CTA — toggle `divider` off whenever
  `cta = false`.
- Don't use Left placement on screens narrower than 1024px — fall back to
  Top.

---

## Accessibility

- **Contrast.** All published combinations of background × text token meet
  WCAG 2.1 AA for normal text. The `onColor` variant uses a 2px outline to
  preserve a visible edge against light page backgrounds.
- **Focus.** The CTA inherits the Button component's focus ring (2px
  `color/stroke/focus` (`#0562d2`), inset −2px). Do not suppress it when
  customizing the wrapper.
- **Hierarchy.** The headline is the primary entry point — ensure the
  surrounding page does not also place a competing H1 immediately above the
  banner.
- **Iconography.** The 72px icon is illustrative. Provide `alt=""` (or an
  equivalent decorative role) so screen readers skip it; the headline carries
  the meaning.
- **Reading order.** On mobile, the natural reading order is icon →
  headline / title / description → CTA, matching the visual order. Do not
  reorder with CSS.

---

## Content guidelines

- **Headline** — 2–6 words. Sentence case. Names the event or moment.
- **Title** — Optional. Short qualifier (date, location, audience).
- **Description** — One sentence. Explains why the user should care.
- **CTA label** — Verb-first, ≤3 words. Matches the destination.

---

## Code

[Code tab block — paste implementation per framework]

- **React / Tailwind** — see the [reference output in Figma Code Connect](https://www.figma.com/design/HGkmlNBKwKdXzhLYQIPfHk/FPDS---Web_-Components?node-id=66969-11690).
- **Vue / Angular / Web Component** — _add implementation here_.

---

## Related

- [Button](#) — used as the CTA. *Large / Primary*.
- `_Graphic` — wrapper for the 72px illustrative icon.
- [Notification / Toast](#) — for transient, dismissible messages.
- [Hero](#) — for richer top-of-page promotional surfaces.

---

## Changelog

| Date | Version | Change |
| --- | --- | --- |
| 2026-06-02 | 1.0 | Initial documentation imported from Figma. |
