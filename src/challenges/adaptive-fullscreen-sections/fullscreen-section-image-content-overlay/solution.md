## Solution: Fullscreen Section with Image and Content Overlay

Let's make the background image cover and center the section while dimming it and centering the overlay content for readability.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Lines 1–8** (`.fullscreen-section`): `position: relative` establishes the stacking context so absolutely-positioned children are anchored to this section. `overflow: hidden` clips the image if it ever exceeds the section bounds. `display: flex` with `justify-content: center` and `align-items: center` centers the overlay content in the remaining stacking layer.

**Lines 9–18** (`.bg-img`): `position: absolute` with `top: 0; left: 0; width: 100%; height: 100%` stretches the image to fill the section. `object-fit: cover` scales it to fill without distortion, just like `background-size: cover`. `filter: brightness(0.6)` dims only the image element, leaving the overlay text fully bright. `z-index: 0` keeps the image beneath the overlay.

**Lines 19–23** (`.overlay`): `position: relative` is required to respect `z-index: 1` and lift it above the absolutely-positioned image. `color: #fff` and `text-align: center` make the text legible and centered.

```css
.fullscreen-section {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
  z-index: 0;
}
.overlay {
  position: relative;
  z-index: 1;
  color: #fff;
  text-align: center;
}
```

### Why it works

| Property | Effect |
| --- | --- |
| `position: relative` on section | Anchors absolutely-positioned children to the section |
| `overflow: hidden` | Clips the image at the section boundary |
| `object-fit: cover` | Fills the image container without distortion, same as `background-size: cover` |
| `filter: brightness(0.6)` | Dims only the `<img>`, leaving overlay text at full brightness |
| `z-index: 0` / `z-index: 1` | Stacks the image behind the overlay without a wrapper element |
| `position: relative` on overlay | Required for `z-index` to take effect on a non-absolute child |
