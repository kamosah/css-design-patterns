# Solution: Fluid Hero Heading and Subheading

Create fluid typography for hero section headings and subheadings using CSS variables that interpolate between min and max sizes based on viewport width.

## Solution Explanation

### Declaring size variables (Lines 2–5)

`--min-heading`, `--max-heading`, `--min-subheading`, and `--max-subheading` are declared as unitless numbers on `:root`. Keeping these unitless lets the `calc()` expressions do arithmetic without unit-multiplication conflicts — the `px` unit is introduced only at the point where a concrete length is needed.

### Computing `--fluid-heading` (Lines 10–16)

```css
--fluid-heading: clamp(
  32px,
  calc(32px + (56 - 32) * ((100vw - 360px) / 1080)),
  56px
);
```

The inner `calc()` applies the linear interpolation formula:

```
min + (max - min) × ((viewport - minVp) / (maxVp - minVp))
```

- `32px` — the base (minimum) size, already a length.
- `(56 - 32)` — the total growth range (`24` units, dimensionless).
- `((100vw - 360px) / 1080)` — a ratio that goes from `0` at 360 px wide to `1` at 1440 px wide (`1080 = 1440 - 360`).

Multiplying a dimensionless number by a dimensionless ratio and adding it to a `px` value is valid CSS. `clamp()` then pins the result to `[32px, 56px]` so the size never exceeds the bounds on extreme viewports.

### Computing `--fluid-subheading` (Lines 17–23)

Identical pattern with `24px` / `32px` bounds, producing an 8-unit growth range instead of 24.

### Applying the variables (Lines 26–32)

```css
.hero h2 { font-size: var(--fluid-heading); }
.hero h3 { font-size: var(--fluid-subheading); }
```

Scoping selectors to `.hero` keeps the fluid sizes local to the hero section — other `h2`/`h3` elements elsewhere on the page are unaffected.
