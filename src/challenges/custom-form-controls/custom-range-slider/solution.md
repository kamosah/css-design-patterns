## Solution: Custom Range Slider Control

Let's create a custom-styled range slider with a modern track and thumb by overriding the default browser appearance using CSS.

## Solution explanation

- **Lines 1–5** — Set `.custom-range` to full width, remove native appearance with `-webkit-appearance: none`, and ensure a transparent background so the custom track shows through cleanly.
- **Lines 7–9** — Remove the focus outline when the input receives focus.
- **Lines 11–17** — Style the `::-webkit-slider-runnable-track` pseudo-element as a `100%` wide, `6px` high light-gray bar with rounded corners and a pointer cursor.
- **Lines 19–27** — Style the `::-webkit-slider-thumb` pseudo-element to be a `16px` circle in blue. The `-webkit-appearance: none` here is required again — without it the custom sizing is ignored. The negative `margin-top: -5px` vertically centers the `16px` thumb over the `6px` track: `(6px − 16px) / 2 = −5px`.
