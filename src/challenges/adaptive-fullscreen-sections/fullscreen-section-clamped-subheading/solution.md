## Solution: Fullscreen Section with Clamped Subheading

Let's limit a subheading to two lines with ellipsis and center the content.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Lines 1–9** (`.fullscreen-section`): `min-height: 100vh` makes the section fullscreen. `display: flex` with `flex-direction: column`, `justify-content: center`, and `align-items: center` stacks and centers the children. `text-align: center` centers inline text. `padding: 24px` prevents content from touching the viewport edges.

**Lines 10–17** (`.subheading`): The `-webkit-line-clamp` technique limits the paragraph to two lines. `display: -webkit-box` and `-webkit-box-orient: vertical` activate the multi-line clamp context. `overflow: hidden` hides the text beyond the clamped lines. `text-overflow: ellipsis` shows `…` at the cut-off point. `max-width: 500px` and `margin: 0 auto` keep the text readable and centered.

```css
.fullscreen-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 24px;
}
.subheading {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 500px;
  margin: 0 auto;
}
```

### Why it works

| Property | Effect |
| --- | --- |
| `display: -webkit-box` | Activates the legacy flexbox model required for line clamping |
| `-webkit-line-clamp: 2` | Limits the element to 2 lines of text |
| `-webkit-box-orient: vertical` | Sets the box children to flow vertically, required for clamping |
| `overflow: hidden` | Hides text beyond the clamped lines |
| `text-overflow: ellipsis` | Shows `…` where the text is cut off |
