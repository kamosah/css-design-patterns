## Solution: Fullscreen Section with Gradient Overlay

Let's apply a background image with a dark gradient overlay to ensure text readability.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Line 2** (`min-height: 100vh`): The section always fills the full viewport height.

**Lines 3–5** (`display: flex`, `justify-content: center`, `align-items: center`): Centers the content both horizontally and vertically.

**Line 6** (`color: #fff`): Makes text white for contrast against the dark overlay.

**Lines 7–9** (`background`): Combines a dark `linear-gradient` overlay with the background image in a single declaration. CSS layers backgrounds from top to bottom — the gradient renders in front of the image, darkening it enough to keep text readable.

**Line 10** (`background-size: cover`): Scales the image to fill the section without distortion.

**Line 11** (`background-position: center`): Keeps the image centered across all screen sizes.

```css
.fullscreen-section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background:
    linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3)),
    url('https://ui-avatars.com/api/?name=Hero&size=512&background=random');
  background-size: cover;
  background-position: center;
}
```

### Why it works

| Property | Effect |
| --- | --- |
| `linear-gradient(...)` as first background layer | Renders on top of the image, darkening it |
| `rgba(0,0,0,0.7)` → `rgba(0,0,0,0.3)` | Stronger at top where text sits, lighter at bottom |
| `url(...)` as second background layer | The actual photo, rendered behind the gradient |
| `background-size: cover` | Image fills the section regardless of aspect ratio |
