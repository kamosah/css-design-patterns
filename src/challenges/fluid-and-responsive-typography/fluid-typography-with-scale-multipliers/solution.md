# Solution: Fluid Typography with Scale Multipliers

Use CSS variables and scale multipliers to apply fluid typography that proportionally sizes headings and paragraphs across viewport widths.

## Solution Explanation

### Root size bounds (Lines 2–3)

`--min-root: 16px` and `--max-root: 20px` declare the lower and upper bounds for the fluid root font size. Storing them as named variables makes the relationship between the bounds and the slope calculation explicit.

### Pre-computing the slope (Lines 5–6)

```css
--root-slope: 0.0035714286; /* (20 - 16) / (1440 - 320) = 4 / 1120 */
```

The slope describes how many pixels the root size grows per pixel of viewport width. Extracting it as a named custom property keeps the `clamp()` expression readable and makes it easy to recalculate if the viewport range changes.

### Computing `--fluid-root` (Lines 8–14)

```css
--fluid-root: clamp(
  var(--min-root),
  calc(
    var(--min-root) +
    var(--root-slope) * (clamp(320px, 100vw, 1440px) - 320px)
  ),
  var(--max-root)
);
```

The inner `clamp(320px, 100vw, 1440px)` pins the viewport value *before* arithmetic, ensuring `(vw - 320px)` never goes negative on very narrow screens. Multiplying the clamped offset by `--root-slope` produces the proportional growth, which is then added to `--min-root`. The outer `clamp()` provides a safety net, locking the result to `[16px, 20px]`.

### Scale multipliers (Lines 15–16)

`--scale-2: 1.5` and `--scale-1: 1.2` are dimensionless ratios. Because they multiply a fluid root, the heading and paragraph grow at 1.5× and 1.2× the root rate respectively — the typographic hierarchy stays consistent at every viewport width.

### Applying the scale (Lines 19–25)

```css
.content h2 { font-size: calc(var(--fluid-root) * var(--scale-2)); }
.content p  { font-size: calc(var(--fluid-root) * var(--scale-1)); }
```

`calc()` accepts `<length> * <number>`, so multiplying a `px` root by a unitless scalar is valid CSS. Scoping to `.content` keeps these rules local to the section, leaving global heading and paragraph defaults untouched.
