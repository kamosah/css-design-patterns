## Solution: Center Inside a Transformed (Parallax) Container

Learn how to center an element inside a transformed container by compensating for parent transforms.

## Solution explanation

- **`position: absolute`** — Takes `.child` out of normal flow so `top`/`left` are resolved relative to the `.parallax` container's **layout box** (pre-transform dimensions), not its painted position.

- **`top: calc(50% + 50%)`** — Percentage `top` values reference the parent's height. The parent is visually shifted up by `translateY(-50%)` (200px), so adding an extra 50% compensates: the child's anchor lands at the original visual center of the container.

- **`left: 50%`** — No horizontal transform on the parent, so a standard `left: 50%` reaches the horizontal midpoint.

- **`transform: translate(-50%, -50%)`** — Shifts the child back by half its own dimensions so its center — not its corner — aligns with that point.
