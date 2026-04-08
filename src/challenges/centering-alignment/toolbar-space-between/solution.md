## Solution: "Space-Between" + Centering Three Items

Learn how a single Flexbox property distributes three items across the full width of a container.

## Solution explanation

- **`justify-content: space-between`** — Flexbox pushes the first child to the start edge and the last child to the end edge, then distributes any remaining space evenly *between* items. With exactly three equal-width children, the middle item lands at precisely the 50% midpoint.

> **When items differ in width:** `space-between` no longer guarantees true center alignment for the middle child. In that case, combine `justify-content: space-between` on the container with `position: absolute; left: 50%; transform: translateX(-50%)` on the `.center` item — this anchors it to the container's coordinate system independently of the flex layout.
