## Solution: Custom Floating Label Input

Let's create a floating-label input where the label moves above the field on focus or when filled, using only CSS.

## Solution explanation

- **Lines 1–4** — `.float-label` is set to `position: relative` so the absolutely-positioned label can be anchored inside it. `margin-top: 1.5rem` reserves space above the wrapper for the label to float into without clipping.
- **Lines 6–10** — The input is given `width: 100%`, standard padding, a `1px solid #ccc` border, and `border-radius: 4px` — no special tricks needed here.
- **Lines 12–21** — The label is placed `position: absolute` and centred vertically with `top: 50%` + `transform: translateY(-50%)`. A white `background` and horizontal `padding` mask the border behind it when it floats up. `pointer-events: none` ensures the label never intercepts clicks intended for the input. The `transition` on `top`, `transform`, and `font-size` drives the animation.
- **Lines 23–27** — The adjacent sibling combinator (`input:focus + label` and `input:not(:placeholder-shown) + label`) targets the label only when the input is active or contains text. `top: 0` + `translateY(-100%) scale(0.8)` moves the label above the border line and shrinks it; changing `color` to `#0066cc` signals the active state visually.
