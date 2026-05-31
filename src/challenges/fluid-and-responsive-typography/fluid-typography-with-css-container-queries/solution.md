# Solution: Fluid Typography with CSS Container Queries

Let's implement fluid typography using CSS Container Queries that adapts to the width of a parent container with fallbacks for unsupported browsers.

## Solution Explanation

### Enabling the container (Line 2)

```css
.card { container-type: inline-size; }
```

`container-type: inline-size` registers `.card` as a containment context. Child elements can then query its inline (horizontal) size using `@container`. Without this declaration, `@container` rules targeting `.card`'s children are ignored entirely.

### Fluid sizes inside the container query (Lines 5–11)

```css
@container (min-width: 300px) and (max-width: 800px) {
  .card h2 {
    font-size: clamp(20px, calc(20px + (32 - 20) * ((100% - 300px) / (800 - 300))), 32px);
  }
  .card p {
    font-size: clamp(14px, calc(14px + (18 - 14) * ((100% - 300px) / (800 - 300))), 18px);
  }
}
```

Inside an `@container` block, `%` resolves to the container's inline size — not the viewport. The midpoint formula `min + (max - min) * ((100% - minWidth) / (maxWidth - minWidth))` linearly interpolates between the size bounds as the container grows. For `h2`: at 300px container, `clamp` evaluates to 20px; at 800px, it reaches 32px. The outer `clamp()` caps the result at the boundaries.

### Legacy fallback with `@supports not` (Lines 14–21)

```css
@supports not (container-type: inline-size) {
  .card h2 { font-size: 20px; }
  .card p  { font-size: 14px; }
}
```

Browsers that don't recognise `container-type` also won't understand `@container`, so the fluid rules silently do nothing. The `@supports not` block catches those browsers and pins each element to its minimum (narrowest-container) size, preserving a readable baseline layout.
