## Solution: Three-State Checkbox with Indeterminate Animation

Let's create a three-state checkbox that visually handles unchecked, checked, and indeterminate states with tick and dash animations using only CSS.

## Solution explanation

- **Lines 1–4** — `.tri-checkbox` is set to `inline-flex` with `align-items: center` so the custom checkmark and label text sit on a shared baseline; `cursor: pointer` extends the click affordance to the whole label.
- **Lines 6–10** — The native `<input>` is hidden with `position: absolute`, `opacity: 0`, and zero width/height — it stays in the DOM (and therefore participates in `:checked` and `:indeterminate` state) but is invisible and takes no layout space.
- **Lines 12–20** — `.checkmark` is sized to `20px × 20px`, given a gray border, `4px` border-radius, and `position: relative` so its pseudo-elements can be absolutely positioned inside it; `transition` on `background-color` and `border-color` animates the switch to the checked state.
- **Lines 22–25** — `input:checked + .checkmark` uses the adjacent sibling combinator to target the span immediately after a checked input, filling it blue (`#2196F3`) on both background and border.
- **Lines 27–36** — `::after` draws the tick: `content: ''` satisfies the pseudo-element requirement; `border-width: 0 2px 2px 0` draws only the right and bottom edges of a box; `transform: rotate(45deg)` tilts those two edges into a checkmark shape — a classic CSS-only tick technique.
- **Lines 38–45** — `input:indeterminate + .checkmark::before` draws the dash: a `12px × 2px` rectangle absolutely positioned at `top: 9px` (vertically centered in the 20px box) and `left: 4px`; `animation: pulse` applies the scaling loop.
- **Lines 47–51** — `@keyframes pulse` scales only the X axis (`scaleX`) to make the dash appear to breathe — from `0.8×` at 0% and 100% to `1.2×` at 50% — over a `1s infinite ease-in-out` cycle.
