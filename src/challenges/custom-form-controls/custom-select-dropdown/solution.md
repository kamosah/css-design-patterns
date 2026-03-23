## Solution: Custom Select Dropdown Control

Let's create a custom-styled select dropdown by hiding the default arrow and adding a custom icon with smooth border transitions.

## Solution explanation

- **Lines 1–4** — Set `.custom-select-wrapper` to `position: relative` and `display: inline-block` so its `::after` pseudo-element can be absolutely positioned inside it.
- **Lines 6–17** — Hide the native arrow via `appearance: none` (including `-webkit-` and `-moz-` vendor prefixes), then set `width`, `height`, `padding`, `border`, `border-radius`, `background-color`, and a `0.2s` `transition` scoped to `border-color` only.
- **Lines 19–28** — Use `::after` on the wrapper to inject a `"▼"` arrow at the right edge. `top: 50%` + `transform: translateY(-50%)` centres it vertically. `pointer-events: none` lets clicks pass through to the select.
- **Lines 30–32** — Change `border-color` to `#0066cc` on `:hover` — the transition defined on `.custom-select` animates this smoothly.
- **Lines 34–37** — Remove the default `:focus` outline and apply the same blue `border-color` for keyboard-accessible focus feedback.
