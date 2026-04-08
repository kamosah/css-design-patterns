## Solution: CSS-Only Modal Centering with Fallbacks

Learn how to center a fixed-size modal using CSS transforms and a legacy fallback.

## Solution explanation

- **`position: fixed`** — Removes the modal from document flow and positions it relative to the viewport. This keeps it centered even as the page scrolls, because `fixed` elements ignore scroll position entirely.

- **`top: 50%; left: 50%`** — Percentage values for `top`/`left` on a `fixed` element are relative to the **viewport dimensions**. This places the modal's top-left corner at the viewport's center point.

- **`transform: translate(-50%, -50%)`** — Unlike `top`/`left`, `translate` percentages are relative to the **element's own size**. Shifting by −50% of the modal's width and height moves its center onto the viewport center — no hardcoded pixel offsets needed.

- **IE11 fallback** — `transform` is supported in IE11 with the `-ms-` prefix, but if a true fallback is needed: `margin-left: -150px; margin-top: -100px` (half the modal's fixed dimensions) achieves identical centering without transforms, at the cost of requiring known dimensions.
