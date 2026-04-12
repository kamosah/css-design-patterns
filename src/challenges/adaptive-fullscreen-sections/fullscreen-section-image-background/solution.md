## Solution: Fullscreen Section with Image Background

Let's create a fullscreen section with a centered background image and centered content.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Lines 1–5**: Fullscreen and center content with Flexbox, just like before.

**Line 6** (`background-image`): This adds a background image to the section using a URL.

**Lines 7–8** (`background-size: cover` and `background-position: center`): These ensure the image covers and centers the section. `cover` scales the image to the smallest size that fully fills the container (it may crop), and `center` ensures the focal point of the image stays centered.

```css
.fullscreen-section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://raw.githubusercontent.com/Educative-Content/css-design-patterns/26c68d4d2c4a7833aabb68f4e9c2994c11642b80/Banner.svg');
  background-size: cover;
  background-position: center;
}
```

### Why it works

| Property | Effect |
| --- | --- |
| `min-height: 100vh` | Section fills at least the full viewport height |
| `display: flex` + centering | Centers the `<h1>` content both horizontally and vertically |
| `background-image: url(...)` | Applies the image as a CSS background |
| `background-size: cover` | Scales the image to fill the entire section without gaps |
| `background-position: center` | Keeps the image centered when it is cropped by `cover` |
