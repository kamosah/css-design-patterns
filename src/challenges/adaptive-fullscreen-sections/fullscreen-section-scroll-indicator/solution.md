## Solution: Fullscreen Section with Scroll Indicator

Let's make a fullscreen section with centered content and a bottom-centered scroll indicator.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Line 2** (`min-height: 100vh`): Ensures the section fills at least the full viewport height.

**Lines 3–6** (`display: flex`, `flex-direction: column`, `justify-content: center`, `align-items: center`): A flex column layout centers the `<h1>` both vertically and horizontally. `flex-direction: column` is needed so that `justify-content: center` operates on the vertical axis.

**Line 7** (`position: relative`): Establishes a positioning context so the absolutely-positioned scroll indicator is anchored to this section, not the viewport.

**Lines 10–15** (`.scroll-indicator`): `position: absolute` removes the indicator from normal flow. `left: 50%` + `transform: translateX(-50%)` centers it horizontally regardless of its own width. `bottom: 20px` pins it near the bottom of the section.

```css
.fullscreen-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.scroll-indicator {
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  font-size: 2rem;
  color: #666;
}
```

### Why it works

| Property | Effect |
| --- | --- |
| `min-height: 100vh` | Section fills the viewport |
| `flex-direction: column` | Stacks children vertically so `justify-content` centers on the y-axis |
| `position: relative` | Anchors absolutely-positioned children to this element |
| `left: 50%` + `translateX(-50%)` | Centers the indicator regardless of its own width |
| `bottom: 20px` | Pins the indicator near the bottom of the section |
