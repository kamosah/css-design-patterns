## Solution: Simple Adaptive Fullscreen Hero Section

Let's create a fullscreen hero section that centers its content on any screen size.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Line 2** (`min-height: 100vh`): Ensures the section always takes up at least the full height of the viewport, even if the content inside is smaller. Using `min-height` instead of `height` allows the section to grow if content overflows.

**Line 3** (`display: flex`): Turns the section into a flex container, enabling Flexbox alignment properties for its child elements.

**Line 4** (`justify-content: center`): Horizontally centers the child content within the section.

**Line 5** (`align-items: center`): Vertically centers the child content, so together with horizontal centering, the content is perfectly centered in both directions.

```css
.fullscreen-section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### Why it works

| Property | Effect |
| --- | --- |
| `min-height: 100vh` | Section always fills at least the full viewport height |
| `display: flex` | Enables Flexbox alignment on children |
| `justify-content: center` | Centers content on the horizontal (main) axis |
| `align-items: center` | Centers content on the vertical (cross) axis |
