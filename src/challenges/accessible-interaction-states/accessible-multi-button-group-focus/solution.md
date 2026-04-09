## Solution: Accessible Multi-Button Group Focus

Learn how to style a grouped icon toolbar with a clear keyboard focus ring.

## Solution explanation

- **`.toolbar-group` layout** — `display: flex` with `gap`, shared `background`, `padding`, and `border-radius` groups the buttons visually without extra markup. `align-items: center` keeps them vertically aligned regardless of icon size variation.

- **Circular buttons** — `width`/`height` fixed at `48px` with `border-radius: 50%` creates the circular shape. `display: flex; align-items: center; justify-content: center` centers the SVG icon without relying on `line-height` hacks.

- **`outline: none` + `box-shadow` focus ring** — Suppressing the browser default outline and replacing it with `box-shadow: 0 0 0 3px #2684FF` keeps the ring within the button's coordinate system and respects `border-radius`. Adding `z-index: 1` on `:focus` ensures the ring renders above adjacent buttons in the flex row.

- **`transition`** — Animating both `background` and `box-shadow` together gives smooth state changes for both mouse hover and keyboard focus transitions.

- **RTL support** — `flex-direction: row-reverse` on `[dir="rtl"]` reverses button order for right-to-left layouts without any JavaScript.
