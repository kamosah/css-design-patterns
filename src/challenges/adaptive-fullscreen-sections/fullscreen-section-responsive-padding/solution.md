## Solution: Fullscreen Section with Responsive Padding

Let's apply responsive padding and center content within a fullscreen section.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Line 2** (`background-color: #5054f4`): Sets the section background to the indigo brand color.

**Lines 3–6** (`min-height: 100vh`, Flexbox): Ensures the section fills the viewport and keeps its content centered at all screen sizes.

**Line 7** (`padding: 24px`): Applies the base (small-screen) padding. Because this is mobile-first, this value is active by default and gets overridden at wider viewports.

**Lines 9–13** (`@media (min-width: 768px)`): Once the viewport reaches 768px, the padding grows to `64px`, giving desktop layouts more breathing room.

```css
.fullscreen-section {
  background-color: #5054f4;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
}

@media (min-width: 768px) {
  .fullscreen-section {
    padding: 64px;
  }
}
```

### Why it works

| Property / Rule | Effect |
| --- | --- |
| `min-height: 100vh` | Section always fills the viewport height |
| `display: flex` + centering | Content stays centered regardless of padding |
| `padding: 24px` (base) | Comfortable touch-friendly spacing on small screens |
| `@media (min-width: 768px)` | Mobile-first breakpoint — enhances layout at desktop widths |
| `padding: 64px` (desktop) | More generous whitespace on larger screens |
