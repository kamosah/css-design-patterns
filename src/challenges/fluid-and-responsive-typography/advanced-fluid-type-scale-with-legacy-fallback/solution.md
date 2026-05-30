# Solution: Advanced Fluid Type Scale with Legacy Fallback

Let's create a fluid typography system with modular scaling and legacy fallbacks for browsers without `clamp()` support.

## Solution Explanation

### Root bounds and scale multipliers (Lines 1–7)

`--min-root: 16px` and `--max-root: 24px` bound the root font size. The four `--scale-*` multipliers (`2.5`, `2`, `1.5`, `1`) define the typographic hierarchy relative to that root — changing a single scale value reshapes the entire type system without touching individual element rules.

### Pre-computing the slope (Lines 9–10)

```css
--root-slope: 0.0035714286; /* (20 - 16) / (1440 - 320) = 4 / 1120 */
```

The slope targets an intermediate root of `20px` at `1440px` — the outer `clamp()` then enforces the `24px` hard cap at wider viewports, producing a two-phase growth curve rather than a single linear ramp.

### Computing `--fluid-root` (Lines 12–19)

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

The inner `clamp(320px, 100vw, 1440px)` keeps the viewport term monotonic, preventing the midpoint from overshooting before the outer `clamp()` applies its ceiling.

### Applying scale multipliers (Lines 22–25)

Each heading and paragraph computes its final size as `calc(var(--fluid-root) * var(--scale-*))`. Because the scale factors live on `:root`, any element in the tree can join the system with a single `calc()` expression.

### Legacy fallback with `@supports not` (Lines 27–32)

```css
@supports not (font-size: clamp(1rem, 1vw + 1rem, 2rem)) {
  h1 { font-size: calc(16px * var(--scale-h1)); }
  h2 { font-size: calc(16px * var(--scale-h2)); }
  h3 { font-size: calc(16px * var(--scale-h3)); }
  p  { font-size: calc(16px * var(--scale-p)); }
}
```

Browsers that don't recognise `clamp()` skip this `@supports` block entirely. For those that do understand `@supports` but not `clamp()`, the block activates and pins each element to its minimum size — `16px * scale`. This preserves the modular ratio even without viewport-responsive scaling.
