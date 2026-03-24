## Solution: Custom Search Input Control

Let's create a custom search input with a styled icon, smooth focus expansion, and no default browser decorations.

## Solution explanation

- **Lines 1–4** — `.search-wrapper` is set to `position: relative` and `display: inline-block` to contain the icon pseudo-element and size itself to the input.
- **Lines 6–15** — `::before` on the wrapper injects the magnifier icon, positions it inside the input at `left: 0.5rem`, centers it vertically with `top: 50%` + `translateY(-50%)`, sets `font-size` and `color`, and sets `pointer-events: none` so clicks pass through to the input.
- **Lines 17–25** — `.custom-search` starts at `200px` width, `2rem` height, pads space for the icon with `padding: 0 1rem 0 2rem`, styles border and radius, and applies transitions on `width` and `border-color`; `-webkit-appearance: none` removes the native search styling.
- **Lines 27–31** — On `:focus`, `.custom-search` expands `width` to `300px`, changes `border-color` to `#0066cc`, and removes the outline.
- **Lines 33–35** — `::placeholder` selector sets placeholder text color to light gray `#999`.
- **Lines 37–42** — WebKit-specific pseudo-elements (`-webkit-search-decoration`, `-webkit-search-cancel-button`, `-webkit-search-results-button`, `-webkit-search-results-decoration`) are hidden with `display: none` to remove default search decorations and the clear button.
