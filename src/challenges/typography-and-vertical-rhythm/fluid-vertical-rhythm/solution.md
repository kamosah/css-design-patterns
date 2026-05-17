## Solution: Fluid Vertical Rhythm

Let's scale text rhythm fluidly using CSS `clamp()` and custom properties between `1rem` and `2rem`.

## Solution explanation

- **Lines 1–6** — Define CSS variables for the minimum and maximum rhythm values (`--min-rhythm`, `--max-rhythm`) and viewport bounds (`--min-vw`, `--max-vw`).
- **Lines 8–10** — Define the font size for the body.
- **Lines 12–17** — In the shared selector for `h1`, `h2`, and `p`, calculate `--fluid-rhythm` via `clamp()`: the middle expression linearly interpolates rhythm between the min and max based on the viewport width.
- **Lines 18–19** — Apply the computed `--fluid-rhythm` to both `line-height` and `margin-bottom`, ensuring text spacing scales fluidly while preserving a responsive baseline grid.
