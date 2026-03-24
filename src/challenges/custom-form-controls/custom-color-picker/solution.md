## Solution: Custom Color Picker Control with Styled Swatch

Let's create a custom color picker by styling the color swatch, removing native appearance, and adding interactive hover and focus effects using only CSS.

## Solution explanation

- **Lines 1–5** — `.color-picker` is set to `inline-flex` with `align-items: center` and a `gap` so the swatch and label text sit side-by-side with consistent spacing; `cursor: pointer` makes the whole label clickable.
- **Lines 7–14** — `.custom-color` is explicitly sized to `32px × 32px`, all native padding and border are removed, and both `appearance: none` and `-webkit-appearance: none` strip the browser's default color widget chrome; `cursor: pointer` is repeated since the input captures its own cursor.
- **Lines 16–18** — `::-webkit-color-swatch-wrapper` resets `padding` to zero, removing the default inset that most WebKit browsers add around the swatch inside the input box.
- **Lines 20–30** — `::-webkit-color-swatch` and `::-moz-color-swatch` both receive a `2px solid #ccc` border, `4px` border-radius for rounded corners, and a `transition` on `border-color` and `transform` so hover changes animate smoothly.
- **Lines 32–36** — On `:hover`, the swatch pseudo-elements update `border-color` to `#0066cc` (blue) and apply `transform: scale(1.1)` — the transition defined on the pseudo-elements handles the animation automatically.
- **Lines 38–41** — On `:focus`, `outline` is removed and replaced with a soft `box-shadow` focus ring using `rgba(0, 102, 204, 0.3)`, keeping visual feedback accessible without the default hard outline.
