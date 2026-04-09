## Solution: Accessible Custom Radio Group with Visible Focus

Learn how to replace native radio buttons with a fully accessible custom design using only CSS.

## Solution explanation

- **`.radio-group` layout** — `display: flex; flex-direction: column` stacks radio items vertically with `gap` for consistent spacing, avoiding margin collapsing concerns.

- **Visually hiding `.custom-radio`** — `position: absolute; opacity: 0; width: 0; height: 0` removes the input from visual flow while keeping it in the accessibility tree and tab order. `display: none` or `visibility: hidden` would break keyboard navigation and screen reader announcements.

- **`.custom-radio-label::before` as indicator** — `content: ''` on `::before` creates the circular indicator with `border-radius: 50%`. `position: absolute; left: 0; top: 50%; transform: translateY(-50%)` pins it to the left of the label text regardless of text height. `padding-left: 2.2rem` on the label creates space for it without affecting text flow.

- **Checked state with `radial-gradient`** — `radial-gradient(circle at center, #2684FF 55%, #fff 56%)` draws a filled blue dot inside the circle using a hard colour stop (55% → 56% with no transition zone). This avoids needing a nested element and keeps the indicator pure CSS.

- **Focus ring via `box-shadow`** — `.custom-radio:focus + .custom-radio-label::before` uses the adjacent sibling combinator to reach the pseudo-element when the hidden input is focused. `box-shadow: 0 0 0 3px #2684FF` spreads outside the circle without disturbing its size or the checked fill, since `box-shadow` doesn't affect layout.

- **`transition`** — Animating `box-shadow` and `border-color` together gives smooth state changes between rest, focus, and checked without jarring jumps.
