# Solution: Adaptive Testimonial Grid

## Solution explanation

**Lines 1–7:** `.testimonials` declares `container-type: inline-size`, sets up a CSS Grid with `auto-fit` and `minmax(250px, 1fr)` for intrinsic column sizing, and applies a consistent `gap`.

**Lines 8–24:** Three `@container` blocks keyed at `max-width: 499px`, `500px–899px`, and `min-width: 900px` override `grid-template-columns` to force 1, 2, or 3 equal columns respectively, giving precise layout breakpoints.

**Lines 26–36:** `.testimonial` applies base card styling — flex column layout, rounded corners, centered text, and default small padding (`0.5rem`). A transition on `padding` and `gap` keeps state changes smooth.

**Lines 38–42:** `.testimonial .avatar` sets `width: 100%`, `aspect-ratio: 1 / 1`, and `object-fit: cover` so avatars are always perfectly square and never distorted.

**Lines 44–52:** Default font sizes for `.name` (`0.875rem`) and `.quote` (`0.75rem`) match the smallest card state (container width below `200px`).

**Lines 54–68:** `@container (min-width: 200px) and (max-width: 399px)` uses `clamp()` to fluidly scale card padding, gap, avatar width (`80px`), name font (`clamp(1rem, 2vw, 1.25rem)`), and quote font (`clamp(0.875rem, 1.5vw, 1rem)`) across the mid-size range.

**Lines 70–84:** `@container (min-width: 400px)` locks in generous static values — `1.5rem` padding, `1rem` gap, `100px` avatar, `1.5rem` name font, and `1rem` quote font — for wide card layouts.
