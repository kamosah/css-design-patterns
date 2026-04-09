## Solution: Center a Rotated Element

Learn how to center a rotated element visually within its container using absolute positioning and CSS transforms.

## Solution explanation

- **`top: 50%; left: 50%;`** — Percentage values on `top`/`left` are relative to the **parent's dimensions**. This places the element's top-left corner at the container's center point.

- **`translate(-50%, -50%)`** — Unlike `top`/`left`, `translate` percentages are relative to the **element's own size**. Shifting by −50% of its width and height moves the element's center onto the container's center — no hardcoded pixel values needed.

- **Transform order matters** — `translate(-50%, -50%) rotate(45deg)` first centers the element, then rotates it around its own center. If you wrote `rotate(45deg) translate(-50%, -50%)` instead, the translation would occur along the already-rotated axes, producing a visually off-center result.
