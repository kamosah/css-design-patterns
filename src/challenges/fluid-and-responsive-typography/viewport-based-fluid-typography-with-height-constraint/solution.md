# Solution: Viewport-Based Fluid Typography with Height Constraint

Let's implement viewport-based fluid typography that scales with both width and height while constraining extremes using nested `clamp()` logic.

## Solution Explanation

### Lines 1–9: Custom properties in `:root`

Inside `:root`, custom properties define the minimum and maximum font sizes (`--min-font: 18px` and `--max-font: 48px`), as well as viewport width (`--min-vw` and `--max-vw`) and height (`--min-vh` and `--max-vh`) breakpoints.

### Lines 13–15: Slopes for scaling

Slopes are calculated for scaling. `--vw-slope: 0.01875` controls scaling across viewport width from 320px to 1920px, and `--vh-slope: 0.05` controls scaling across viewport height from 480px to 1080px.

```
--vw-slope: (48 - 18) / (1920 - 320) = 30 / 1600 = 0.01875
--vh-slope: (48 - 18) / (1080 - 480) = 30 / 600  = 0.05
```

### Lines 18–25: Width-based fluid value (`--fluid-vw`)

`--fluid-vw` uses `clamp()` and `calc()` to generate a fluid font-size that scales with viewport width, constrained between the minimum and maximum values. The inner `clamp(var(--min-vw), 100vw, var(--max-vw))` pins the viewport contribution to the valid range before the slope is applied.

### Lines 28–32: Height-based fluid value (`--fluid-vh`)

`--fluid-vh` similarly uses `clamp()` to generate a fluid font-size that scales with viewport height, constrained between the minimum and maximum values.

### Line 34: Choosing the smaller axis (`--fluid-size`)

`--fluid-size` is defined as `min(var(--fluid-vw), var(--fluid-vh))` to ensure responsive scaling based on whichever axis is more constrained. This prevents text from growing too large on wide-but-short landscape screens.

### `.intro h1` and `.intro p`

`.intro h1` applies `font-size: var(--fluid-size)` so the heading scales responsively with viewport dimensions. `.intro p` applies `font-size: calc(var(--fluid-size) * 0.6)` so paragraphs are slightly smaller, maintaining a consistent type scale.
