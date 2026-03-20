## Full Centering with Flexbox

The most requested CSS pattern: centering something **perfectly in the middle of the screen** (or any container).

### The Holy Grail

```css
.container {
  display: flex;
  align-items: center;     /* vertical center */
  justify-content: center; /* horizontal center */
}
```

That's it. Three lines. This works in any modern browser and is the recommended approach.

### Why This Works

- `display: flex` creates a **flex formatting context**
- `align-items` controls alignment on the **cross axis** — by default that's vertical
- `justify-content` controls alignment on the **main axis** — by default that's horizontal

### The Container Needs Size

For the centering to be visible, the container must be larger than the item. In this challenge, the container is `100vw × 100vh` (full viewport).

### Your Task

Center the white card `.box` both horizontally and vertically within the gradient `.container`.
