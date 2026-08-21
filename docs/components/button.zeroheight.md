<!--
  zeroheight-shaped source for the Button component page.
  Each "## " heading is intended as a separate zeroheight block (Tab / Section)
  so the page can be built by pasting block-by-block into the editor.
  Markers like [Embed Figma: ...] and [Image: ...] mark slots where the
  zeroheight editor's native blocks (Figma frame, image, color swatch, code
  tab) should be added after import — Markdown import cannot create these.
-->

# Button

> A single-line call-to-action control that hugs its label — shrinking for
> short text and growing for long text — without ever wrapping to a second
> line. Used standalone or as the CTA inside other components (e.g. Event
> Banner).

| | |
| --- | --- |
| **Status** | Ready |
| **Library** | FPDS / Web / Components |
| **Last updated** | 2026-08-21 |

[Embed Figma frame: Button overview]

---

## Overview

Button is the primary action control across the system. It is built to stay
one line regardless of label length: a short label ("Go") and a long one
("Learn more about our new product") both render as a single row of text,
with the button's own width adjusting to fit — never the text wrapping to
accommodate the button.

**Use it when**

- You need a single, clear call to action ("Learn More", "Register").
- The action's label length may vary across contexts (localization,
  different CTA copy per page).

**Don't use it when**

- You need a text link inline with a paragraph → use a **Link**.
- You need multiple equally-weighted actions → use a **Button Group**.

---

## Anatomy

[Image: anatomy diagram with numbered callouts]

1. **Label** — required text, `body/medium/L`. Always a single line.
2. **Leading/trailing icon** (optional) — 20×20, `spacing/2x` (8px) gap from
   the label.

---

## Sizing & flexible width

[Tab block — Default / Short label / Long label / Constrained container]

- **Intrinsic width.** `width: auto`. The button is exactly as wide as its
  padding plus its label content — it does not stretch or compress to fill
  a fixed track unless the layout explicitly asks it to (e.g. full-width on
  mobile, per the Event Banner spec).
- **No two-line labels, ever.** `white-space: nowrap` on the label. This is
  the core constraint: as label copy changes (translation, CMS content,
  A/B copy), the button reflows its own width rather than breaking the
  label across lines.
- **Min width:** 96px — keeps very short labels ("Go", "OK", "Yes") from
  looking like a square icon button.
- **Max width:** none by default; the button is allowed to grow. In a
  constrained container, give the button `flex-shrink: 0` so flex siblings
  absorb the squeeze first. Only fall back to truncation
  (`text-overflow: ellipsis`, capped `max-width`) when no other layout
  option exists, and always carry the untruncated label in a `title`
  attribute or accessible name.
- **Fixed height:** 48px in all cases — only width is flexible.

---

## States

[Tab block — one tab per state]

### Default

[Embed Figma frame: Button — Default]

- Fill: `color/action/default` (`#0562d2`)
- Label: `color/text/onColor` (`#ffffff`)
- No border, no shadow.

### Hover

[Embed Figma frame: Button — Hover]

- Fill: `color/action/hover` (`#044ba8`) — a darkened step from Default.
- Label color unchanged (`#ffffff`).
- `cursor: pointer`. Transition fill over ~120ms; no size or position change
  (hover must never trigger reflow that could start the label wrapping).

### Focus

[Embed Figma frame: Button — Focus]

- Fill unchanged from Default (`#0562d2`).
- Ring: 2px `color/stroke/focus` (`#0562d2`), offset **outward** 2px (not
  inset), so the ring stays visible regardless of button fill.
- Triggered on keyboard focus (`:focus-visible`), not on mouse click.

### Disabled

[Embed Figma frame: Button — Disabled]

- Fill: `color/fill/neutral-subtle` (`#cccccc`)
- Label: `color/text/disabled` (`#808080`)
- `cursor: not-allowed`, `pointer-events: none`.
- No hover or focus treatment applies while disabled.

---

## Properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | string | `"Button"` | Button text. Always single line. |
| `leadingIcon` | boolean | `false` | Toggles a 20px icon before the label. |
| `trailingIcon` | boolean | `false` | Toggles a 20px icon after the label. |
| `disabled` | boolean | `false` | Applies the Disabled state and blocks interaction. |

---

## Design tokens

### Container

| Property | Token | Value |
| --- | --- | --- |
| Radius | — (component-level, not on the shared radius scale) | 20px, fixed |
| Padding | `spacing/5x` horizontal / `spacing/3x` vertical | 20px / 12px |
| Height | — | 48px |
| Min width | — | 96px |

### Fill by state

[Color block — one swatch per row]

| State | Token | Value |
| --- | --- | --- |
| Default | `color/action/default` | `#0562d2` |
| Hover | `color/action/hover` | `#044ba8` |
| Focus | `color/action/default` | `#0562d2` |
| Disabled | `color/fill/neutral-subtle` | `#cccccc` |

### Label color by state

| State | Token | Value |
| --- | --- | --- |
| Default / Hover / Focus | `color/text/onColor` | `#ffffff` |
| Disabled | `color/text/disabled` | `#808080` |

### Focus ring

| Property | Token | Value |
| --- | --- | --- |
| Width | — | 2px |
| Color | `color/stroke/focus` | `#0562d2` |
| Offset | — | 2px outward |

### Typography

| Slot | Style | Family / Weight | Size / Line height |
| --- | --- | --- | --- |
| Label | `body/medium/L` | Ford-f1 Medium (500) | 18 / 28 |

---

## Usage

### Do

[Image: do — short and long labels rendering as single-line buttons of
different widths]

- Let the button's width follow its label; don't force a fixed width that
  could clip or wrap the text.
- Keep the disabled state visually distinct via both fill and label color,
  not opacity alone.
- Preserve the outward focus ring — it's the only reliable focus indicator
  since fill doesn't change on focus.

### Don't

[Image: don't — label wrapping to two lines inside a fixed-width button]

- Don't set a fixed `width` on the button — it defeats the flexible sizing
  this component is built for.
- Don't allow the label to wrap; if a container is too narrow, let the
  button shrink other content or truncate with a `title` fallback instead.
- Don't suppress the focus ring or rely on `outline: none` without a
  replacement.

---

## Accessibility

- **Focus.** 2px `color/stroke/focus` ring, offset 2px outward. Always
  visible on keyboard focus; never suppressed.
- **Disabled.** Signaled via the `disabled` attribute (or `aria-disabled`
  when the control must remain focusable, e.g. to show a tooltip explaining
  why), and via both fill and label color — never color alone.
- **Truncation.** If layout constraints ever force truncation, the full
  label must still be available via `title` or an accessible name; visual
  truncation must never remove information.
- **Contrast.** Default/Hover/Focus label-on-fill (`#ffffff` on `#0562d2` /
  `#044ba8`) and Disabled label-on-fill (`#808080` on `#cccccc`) both meet
  WCAG 2.1 AA for normal text at this size.

---

## Content guidelines

- **Label** — verb-first, ≤ 3 words when possible ("Learn More", "Register",
  "View schedule"). Longer labels are supported (the button grows to fit)
  but should stay a short phrase, not a sentence.
- Sentence case, no trailing punctuation.

---

## Code

```html
<button class="btn">Learn More</button>
<button class="btn" disabled>Learn More</button>
```

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: auto;
  min-width: 96px;
  height: 48px;
  padding: 0 20px;
  border: none;
  border-radius: 20px;
  white-space: nowrap;
  font: 500 18px/28px "Ford-f1", sans-serif;
  background: #0562d2;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 120ms ease;
}

.btn:hover {
  background: #044ba8;
}

.btn:focus-visible {
  outline: 2px solid #0562d2;
  outline-offset: 2px;
}

.btn:disabled {
  background: #cccccc;
  color: #808080;
  cursor: not-allowed;
  pointer-events: none;
}
```

---

## Related

- [Event Banner](./event-banner.md) — consumes this component as its CTA
  (size Large / style Primary).

---

## Changelog

| Date | Version | Change |
| --- | --- | --- |
| 2026-08-21 | 1.0 | Initial documentation: flexible sizing, 20px radius, Default/Hover/Focus/Disabled states. |
