## Problem: Three-State Checkbox with Indeterminate Animation

Try to create a three-state checkbox that visually handles unchecked, checked, and indeterminate states with tick and dash animations using only CSS.

## Problem description

Given an HTML page containing a `<label>` with class `.tri-checkbox` that wraps a native `<input type="checkbox" class="tri-state">`, a `<span class="checkmark"></span>`, and the text `Agree to terms`, write CSS to:

1. Hide the native checkbox input using `position: absolute`, `opacity: 0`, and zero width/height.
2. Style `.checkmark` as a `20px × 20px` square with a `2px solid #666` border and `4px` border-radius.
3. Add smooth `transition` on `background-color` and `border-color`.
4. **Checked state** (`input:checked + .checkmark`):
   - Set background and border to blue (`#2196F3`).
   - Use `::after` to draw a white tick mark: `6px × 10px`, `border: solid #fff`, `border-width: 0 2px 2px 0`, rotated `45deg`, positioned inside the box.
5. **Indeterminate state** (`input:indeterminate + .checkmark`):
   - Use `::before` to draw a `12px × 2px` horizontal dash, centered in the box.
   - Animate the dash with a `pulse` keyframe that scales it from `0.8×` to `1.2×` over `1s infinite ease-in-out`.

## Goal

Write CSS rules that produce a custom tri-state checkbox with three visual states:

- **Unchecked** — gray-bordered empty box
- **Checked** — blue background with a white tick mark
- **Indeterminate** — gray pulsing dash centered in the box

## Constraints

- Use CSS only (no JavaScript).
- `.checkmark` must be `20px × 20px`, `border: 2px solid #666`, `border-radius: 4px`.
- Checked `background-color` must be `#2196F3`.
- Tick drawn via `::after` using border technique (`border-width: 0 2px 2px 0` + `rotate(45deg)`).
- Indeterminate dash drawn via `::before`, `12px` wide, `2px` tall, centered with absolute positioning.
- `@keyframes pulse` must scale from `0.8×` to `1.2×` over `1s infinite ease-in-out`.
- Use `input:checked` and `input:indeterminate` as state selectors.
