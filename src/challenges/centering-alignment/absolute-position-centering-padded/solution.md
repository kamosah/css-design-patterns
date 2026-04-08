## Solution: Absolute-Position Centering inside a Padded Container

Learn how percentage offsets and CSS transforms combine to center an absolutely positioned element inside a padded container.

## Solution explanation

- **`top: 50%` / `left: 50%`** — Percentage values for `top` and `left` are relative to the containing block's **padding box** dimensions. This places the top-left corner of `.inner` at the visual midpoint of `.outer`.

- **`transform: translate(-50%, -50%)`** — Unlike `top`/`left`, `translate` percentages are relative to the **element's own size**. Shifting by −50% of `.inner`'s width and height moves its center exactly onto the container's midpoint, completing the centering regardless of `.inner`'s dimensions.
