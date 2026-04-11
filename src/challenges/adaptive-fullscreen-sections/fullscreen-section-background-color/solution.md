## Solution: Fullscreen Section with Background Color

Let's create a fullscreen section with centered content and a solid background color.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Line 2**: This uses `min-height: 100vh;` to cover the viewport.

**Lines 3–5**: These use Flexbox centering with `display: flex;`, `justify-content: center;`, and `align-items: center;`.

**Line 6**: This applies a `background-color` (`#f5f7fa`).

```css
.fullscreen-section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f7fa;
}
```

### Why it works

| Property | Effect |
| --- | --- |
| `min-height: 100vh` | Section always fills at least the full viewport height |
| `display: flex` | Enables Flexbox alignment on children |
| `justify-content: center` | Centers content on the horizontal (main) axis |
| `align-items: center` | Centers content on the vertical (cross) axis |
| `background: #f5f7fa` | Applies a solid light background color |
