# Solution: Fluid Modular Scale with CSS Variables

Let's define a fluid root font size with CSS variables and apply a modular scale to headings and paragraphs that adjusts with the viewport width.

In the styles.css file, you'll find the following:

- **Lines 2–3:** These set `--min-root` and `--max-root` font sizes.

- **Lines 4–8:** Compute `--fluid-root` using `clamp()` and a `calc()` expression to scale smoothly between 360px and 1200px.

- **Line 13:** Apply fluid font size to `html` so all `rem` units scale.

- **Lines 21–28:** `h1` and `p` use `rem` units, so they scale with the root font size.
