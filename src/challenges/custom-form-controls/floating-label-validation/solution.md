## Solution: Floating Label Input with Validation Message

Let's create a floating label email input that shows a custom validation message below when invalid and not focused, using only CSS.

## Solution explanation

- **Lines 1–9** — `.validate-wrapper` defines three component-level CSS variables (`--primary-color`, `--error-color`, `--transition-duration`) and sets `position: relative` so the label and error message can be absolutely positioned inside it; `padding-top` reserves space above the input for the floated label, `padding-bottom` reserves space below for the error message.
- **Lines 11–17** — `.validate-input` spans the full wrapper width, has inner padding and a gray border, and removes `outline` — the focus ring will be expressed through the floating label color change instead.
- **Lines 19–33** — The label is absolutely positioned inside the input at `top: 2.375rem` (vertically centered over the input) with `transform: translateY(-50%)`. A white `background` clips the input border behind the label text when it floats. `pointer-events: none` prevents the label from blocking clicks on the input; `z-index: 1` keeps it above the input border.
- **Lines 35–40** — On `:focus` or `:not(:placeholder-shown)` (filled), the label floats to `top: 1rem` and shrinks to `scale(0.8)`, changing color to `--primary-color`. The `placeholder=" "` (single space) on the input is what makes `:not(:placeholder-shown)` detectable — it is "shown" when the field is empty, and "not shown" once the user has typed.
- **Lines 42–54** — `label::after` pulls its text from the label's `data-error` attribute via `content: attr(data-error)`. It starts hidden with `opacity: 0` and shifted up with `transform: translateY(-0.5rem)`, ready to animate in.
- **Lines 56–59** — The compound selector `:invalid:not(:focus):not(:placeholder-shown)` targets a filled, unfocused, invalid input — exactly the moment the user has typed something wrong and moved on. It reveals the error by setting `opacity: 1` and `transform: translateY(0)`, which the transitions on `::after` animate smoothly.
