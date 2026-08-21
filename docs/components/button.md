# Button

A flexible, single-line call-to-action control (e.g. "Learn More", "Register",
"View schedule"). The button hugs its label — it shrinks for short labels and
grows for longer ones — but never wraps to a second line.

## Anatomy

| Region | Purpose | Notes |
| --- | --- | --- |
| **Label** | Button text. | Required. `body/medium/L`, single line, never wraps. |
| **Leading/trailing icon** | Optional 20×20 icon. | Sits inline with the label with `spacing/2x` (8px) gap. |

## Sizing behavior

- **Width:** intrinsic (`width: auto`) — the button hugs its label plus
  horizontal padding. It shrinks for short labels and grows for long ones.
- **No wrapping:** `white-space: nowrap`. The label is always one line.
- **Min width:** 96px, so very short labels ("Go", "OK") don't look cramped.
- **Max width:** none by default. If a layout constrains the button (e.g. a
  narrow sidebar), let it shrink the available space instead of the button —
  set `flex-shrink: 0` on the button so surrounding flex siblings compress
  first. Only truncate (`text-overflow: ellipsis` + `overflow: hidden` on a
  capped `max-width`) as a last resort, and pair it with a `title` attribute
  carrying the full label.
- **Height:** fixed at 48px regardless of label length.

## States

| State | Fill | Label color | Border | Notes |
| --- | --- | --- | --- | --- |
| **Default** | `color/action/default` (`#0562d2`) | `color/text/onColor` (`#ffffff`) | — | Resting state. |
| **Hover** | `color/action/hover` (`#044ba8`) | `color/text/onColor` (`#ffffff`) | — | `cursor: pointer`. Fill darkens; no layout shift. |
| **Focus** | `color/action/default` (`#0562d2`) | `color/text/onColor` (`#ffffff`) | 2px `color/stroke/focus` (`#0562d2`), 2px outset | Shown on keyboard focus (`:focus-visible`); fill unchanged from Default. |
| **Disabled** | `color/fill/neutral-subtle` (`#cccccc`) | `color/text/disabled` (`#808080`) | — | `pointer-events: none`, `cursor: not-allowed`. No hover/focus treatment. |

## Container styling

- **Radius:** 20px, fixed (all four corners) — does not scale into a pill
  regardless of height.
- **Padding:** `spacing/5x` (20px) horizontal, `spacing/3x` (12px) vertical.
- **Height:** 48px.

## Typography

| Slot | Style | Family / Weight | Size / Line height |
| --- | --- | --- | --- |
| Label | `body/medium/L` | Ford-f1 Medium (500) | 18 / 28 |

## Accessibility

- **Focus.** Focus ring is 2px, offset outward (not inset), so it stays
  visible against any adjacent surface. Never suppress it.
- **Disabled.** Communicate disabled state with the `disabled` attribute (or
  `aria-disabled="true"` when the element must stay focusable for a tooltip
  explaining why), not with color alone.
- **Truncation.** If a label is ever truncated, always provide the full text
  via a `title` attribute or accessible name — don't let truncation remove
  information available only visually.

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

## Related

- [Event Banner](./event-banner.md) — uses this component as its CTA.
