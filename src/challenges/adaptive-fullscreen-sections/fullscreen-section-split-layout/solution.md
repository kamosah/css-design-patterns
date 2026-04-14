## Solution: Fullscreen Section with Split Layout (Vertical Halves)

Let's split a fullscreen section into two equal halves with centered content and distinct backgrounds.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Lines 1–4** (`.fullscreen-section`): `min-height: 100vh` ensures the section fills the full viewport height. `display: flex` turns the section into a flex container, placing `.left` and `.right` side by side. `width: 100vw` guarantees full viewport width regardless of body margins.

**Lines 5–11** (`.left, .right`): `flex: 1 1 50%` gives each half a base size of 50% while allowing them to grow and shrink equally. `display: flex` with `justify-content: center` and `align-items: center` centers each half's content both horizontally and vertically. `min-width: 0` prevents flex children from overflowing when content is wider than 50%.

**Lines 12–15** (`.left`): Blue background (`#1557a0`) with white text for strong contrast.

**Lines 16–19** (`.right`): White background with dark text (`#333`).

```css
.fullscreen-section {
  min-height: 100vh;
  display: flex;
  width: 100vw;
}
.left, .right {
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
}
.left {
  background: #1557a0;
  color: #fff;
}
.right {
  background: #fff;
  color: #333;
}
```

### Why it works

| Property | Effect |
| --- | --- |
| `min-height: 100vh` | Section always fills the viewport, even when content is short |
| `display: flex` on section | Lays out `.left` and `.right` as a horizontal row |
| `flex: 1 1 50%` | Both halves start at 50% and scale equally under pressure |
| `min-width: 0` | Prevents flex children from overflowing their 50% boundary |
| Nested `display: flex` | Centers each half's own content without extra markup |
