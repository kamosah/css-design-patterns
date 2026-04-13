## Solution: Fullscreen Section with Max Width Content

Let's center content in a fullscreen section with a maximum width limit.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Lines 1–6** (`.fullscreen-section`): `min-height: 100vh` ensures the section fills the viewport. `display: flex` with `justify-content: center` and `align-items: center` centers the `.content` block both horizontally and vertically.

**Lines 7–12** (`.content`): `max-width: 600px` caps the content width on large screens. `width: 100%` ensures it shrinks on smaller screens rather than overflowing. `margin: 0 auto` keeps it centered as a block element. `text-align: center` centers the text within the content block.

```css
.fullscreen-section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
```

### Why it works

| Property | Effect |
| --- | --- |
| `min-height: 100vh` | Section always fills at least the full viewport height |
| `display: flex` + `justify-content` + `align-items` | Centers `.content` both horizontally and vertically |
| `max-width: 600px` | Prevents content from stretching too wide on large screens |
| `width: 100%` | Allows content to shrink on screens narrower than 600px |
| `margin: 0 auto` | Horizontally centers the block within the flex container |
