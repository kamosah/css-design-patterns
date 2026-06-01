# Solution: Multi-Range Fluid Typography with Media Query Overrides

Let's build a multi-range fluid typography system with media query overrides and modular scales for headings and body text.

## Solution Explanation

### Lines 2–7: Custom properties in `:root`

Inside `:root`, custom properties define font-size ranges for mobile (`--min-root-mobile: 14px` and `--max-root-mobile: 18px`) and desktop (`--min-root-desktop: 18px` and `--max-root-desktop: 24px`). Scaling factors `--scale-h1: 2.2` and `--scale-p: 1` control heading and paragraph sizes relative to the computed root.

### Lines 10–14: Mobile fluid root (`--fluid-root-mobile`)

`--fluid-root-mobile` uses `clamp()` with a slope of `0.0089285714` to fluidly scale between 14px and 18px across viewport widths 320px–768px.

```
slope = (18 - 14) / (768 - 320) = 4 / 448 = 0.0089285714
```

### Lines 17–19: Mobile `h1` size

`h1` font size is set with `calc(var(--fluid-root-mobile) * var(--scale-h1))`, scaling headings relative to the mobile root size.

### Lines 21–23: Mobile `p` size

`p` font size is set with `calc(var(--fluid-root-mobile) * var(--scale-p))`, scaling paragraphs relative to the mobile root size.

### Lines 25–41: Desktop overrides via `@media (min-width: 768px)`

A media query redefines `--fluid-root-desktop` using `clamp()` with the same slope (`0.0089285714`), scaling between 18px and 24px across 768px–1440px. The identical slope is not a coincidence — the mobile range grows 4px over 448px and the desktop range grows 6px over 672px, producing the same rate. Inside this query, `h1` and `p` font sizes are recalculated using the desktop root size for larger screens.

```
slope = (24 - 18) / (1440 - 768) = 6 / 672 = 0.0089285714
```
