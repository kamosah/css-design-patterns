## Solution: Modular Scale Fluid Typography

Let's create a fluid, modular scale typography system using CSS variables and `clamp()`, aligned to a 1rem vertical rhythm.

## Solution explanation

- **Lines 1–7** — Define CSS variables for the baseline grid (`--rhythm`), base font-size, scale factor, and viewport bounds.
- **Lines 9–12** — Set the body to use the base-size and apply the rhythm as `line-height`.
- **Lines 14–21** — For `<h1>`, use `clamp()` with a calculated minimum (base × scale²), a fluid viewport-based midpoint (`5vw`), and a maximum (base × scale³), then apply `margin-bottom` to align to the 1rem grid.
- **Lines 23–30** — Similarly configure `<h2>` with scale¹ to scale² bounds and maintain rhythm.
- **Lines 32–39** — Apply fluid sizing to `<p>` from base-size up to base × scale¹, ensuring both fluidity and vertical rhythm.
