# Solution: Fluid Paragraph Line-Height

Let's implement fluid line-height for paragraph text that scales smoothly between minimum and maximum values based on viewport width.

## Solution Explanation

### Line-height bounds (Lines 2–3)

`--min-line-height: 2em` and `--max-line-height: 3.2em` define the range. Using `em` units ties the line-height to the element's own font size, so the spacing scales proportionally if the base font size ever changes.

### Pre-computing the slope (Lines 5–6)

```css
--lh-slope: 0.0009375; /* (3.2 - 2) / (1600 - 320) = 1.2 / 1280 */
```

The range spans `1.2em` across a `1280px` viewport window, giving a growth rate of `0.0009375em` per pixel. Storing it as a named custom property keeps the `clamp()` expression readable and makes it easy to adjust the viewport bounds later without recalculating inline.

### Computing `--fluid-line-height` (Lines 8–14)

```css
--fluid-line-height: clamp(
  var(--min-line-height),
  calc(
    var(--min-line-height) +
    var(--lh-slope) * (clamp(320px, 100vw, 1600px) - 320px)
  ),
  var(--max-line-height)
);
```

The inner `clamp(320px, 100vw, 1600px)` pins the viewport term to the defined range before the subtraction, making the midpoint expression monotonic on its own. The outer `clamp()` then locks the computed value between `2em` and `3.2em` at any viewport size.

At 320px: `2em + 0.0009375 * 0 = 2em` — the minimum.
At 1600px: `2em + 0.0009375 * 1280px = 2em + 1.2px ≈ 3.2em` — the maximum.

### Applying the fluid value (Lines 18–20)

`line-height: var(--fluid-line-height)` on `p` is all that's needed. Because the variable is declared on `:root`, any other element can reuse it for consistent fluid spacing without duplicating the interpolation math.
