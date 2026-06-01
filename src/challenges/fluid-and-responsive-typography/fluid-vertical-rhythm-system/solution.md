# Solution: Fluid Vertical Rhythm System

Let's implement a fluid vertical rhythm system by scaling the root font-size, line-height, and margin spacing proportionally as the viewport width changes.

## Solution Explanation

### Lines 2–6: Base custom properties in `:root`

Inside `:root`, base custom properties are defined: `--min-root: 16px` and `--max-root: 20px` for font sizes, `--min-line-height: 1.4` and `--max-line-height: 1.8` for line heights, and `--spacing-multiplier: 1.5` to calculate vertical spacing.

### Lines 9–13: Fluid root font-size (`--fluid-root`)

`--fluid-root` uses `clamp()` and a slope of `0.0037037037` to fluidly scale font size between 16px and 20px across viewport widths from 360px to 1440px.

```
slope = (20 - 16) / (1440 - 360) = 4 / 1080 = 0.0037037037
```

The inner `clamp(360px, 100vw, 1440px)` pins the viewport contribution to the valid range before the slope is applied.

### Lines 16–20: Fluid line-height (`--fluid-line`)

`--fluid-line` uses `clamp()` and a slope of `0.0003703704` to fluidly scale line-height between 1.4 and 1.8 across the same viewport range. Because line-height is unitless, the slope operates on a much smaller numeric delta (0.4 vs 4px), but the linear interpolation formula is identical.

```
slope = (1.8 - 1.4) / (1440 - 360) = 0.4 / 1080 = 0.0003703704
```

### Line 22: Fluid spacing unit (`--fluid-space`)

`--fluid-space` is calculated as `var(--fluid-root) * var(--spacing-multiplier)`. Because both values track the same fluid root, vertical spacing stays proportional as the base size grows — this is the core of vertical rhythm.

### Lines 25–28: Applying to `body`

The `body` applies `font-size: var(--fluid-root)` and `line-height: var(--fluid-line)` so all text inherits the fluid scale by default.

### Lines 30–34: Vertical spacing on headings and paragraphs

`.post h1`, `.post h2`, and `.post p` use `margin-bottom: var(--fluid-space)` to maintain consistent vertical rhythm throughout the article.

### Lines 35–51: `@supports not` fallback

An `@supports not` rule provides a fallback for browsers without `clamp()`. It resets `--fluid-root`, `--fluid-line`, and `--fluid-space` to fixed values, then reapplies them to `body` and `.post` text elements for consistent spacing.
