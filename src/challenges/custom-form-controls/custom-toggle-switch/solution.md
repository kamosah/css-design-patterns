## Solution: Custom Toggle Switch Control

Let's build a custom toggle switch with a sliding knob and background change using only CSS.

## Solution explanation

- **Lines 1–5** — Set `.switch` as an `inline-block` container sized `50×24px`, with `position: relative` so the absolutely-positioned slider fills it correctly.
- **Lines 7–9** — Hide the native checkbox with `display: none`. The label element still forwards click events to the hidden input, keeping the toggle functional.
- **Lines 11–20** — Style `.slider` as an `absolute`-fill track (top/right/bottom/left: 0) with a gray background, `border-radius: 24px` for the pill shape, and a `background-color` transition.
- **Lines 22–31** — Use the `::before` pseudo-element to render a `20×20px` white circle, offset `2px` from the left and top edges, with its own `transform` transition for the sliding motion.
- **Lines 33–35** — The adjacent sibling combinator (`input:checked + .slider`) changes the track background to `#2196F3` when checked.
- **Lines 37–39** — `translateX(26px)` moves the knob to the right: `50px` track − `20px` knob − `2px` right margin − `2px` left offset = `26px`.
