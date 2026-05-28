# Solution: Fluid Heading Letter-Spacing

Let's implement fluid letter-spacing for headings by interpolating between min and max values using CSS variables and viewport width.

## Solution Explanation

### Letter-spacing bounds (Lines 2–3)

`--min-letter-spacing: -0.5px` and `--max-letter-spacing: 1px` define the range. Unlike font-size, letter-spacing accepts negative values — starting below zero produces tight kerning that relaxes into loose tracking as the viewport widens.

### Pre-computing the slope (Lines 5–6)

```css
--ls-slope: 0.0013392857; /* (1 - (-0.5)) / (1440 - 320) = 1.5 / 1120 */
```

The range spans 1.5px because it crosses zero: `max - min = 1 - (-0.5) = 1.5`. Dividing by the 1120px viewport range gives the per-pixel growth rate. Naming the slope as a custom property keeps the `clamp()` expression readable and makes recalculation straightforward if the viewport bounds change.

### Computing `--fluid-letter-spacing` (Lines 8–12)

```css
--fluid-letter-spacing: clamp(
  var(--min-letter-spacing),
  calc(var(--min-letter-spacing) + var(--ls-slope) * (100vw - 320px)),
  var(--max-letter-spacing)
);
```

At 320px viewport: `-0.5px + 0.0013392857 * 0 = -0.5px` — the minimum. At 1440px: `-0.5px + 0.0013392857 * 1120 = -0.5px + 1.5px = 1px` — the maximum. The outer `clamp()` locks the result to `[-0.5px, 1px]` at any viewport outside the range.

### Applying the fluid value (Lines 15–17)

`letter-spacing: var(--fluid-letter-spacing)` on `h1` is all that's needed. Because the variable lives on `:root`, it can be reused on any other element that needs the same fluid tracking without repeating the interpolation math.
