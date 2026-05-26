# Solution: Fluid Modular Scale with CSS Variables

The key insight is separating *scale definition* (on `:root`) from *scale usage* (`rem` on each element).

## How it works

### Step 1 — Define the bounds as custom properties

```css
:root {
  --min-root: 16px;
  --max-root: 24px;
}
```

These two variables act as the single source of truth for the entire type scale. Change one value here and every `rem`-based element adjusts automatically.

### Step 2 — Compute the fluid root size with `clamp()`

```css
:root {
  --fluid-root: clamp(
    var(--min-root),
    calc(16px + 8 * ((100vw - 360px) / 840)),
    var(--max-root)
  );
}
```

Breaking down the `calc()` expression:

| Part | Meaning |
|------|---------|
| `16px` | Starting size at the minimum viewport (360px) |
| `8` | Range in px (`24 - 16`) |
| `(100vw - 360px) / 840` | Normalised viewport progress: `0` at 360px, `1` at 1200px |

The result scales linearly from `16px` → `24px` across the 360–1200px window, then clamps at both ends.

### Step 3 — Apply to `html`, not `body`

```css
html {
  font-size: var(--fluid-root);
}
```

Setting `font-size` on `html` makes `1rem` equal to the fluid root everywhere — including inside components that set their own `font-size` in `rem`.

### Step 4 — Use `rem` on headings and paragraphs

```css
h1 { font-size: 2.5rem; }
p  { font-size: 1rem; }
```

Because `1rem` now equals the fluid root, both elements scale in lock-step across the entire viewport range — a true proportional modular scale with no media queries.
