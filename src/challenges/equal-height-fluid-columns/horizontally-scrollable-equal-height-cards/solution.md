## Solution: Horizontally Scrollable Equal Height Cards

Let's create a horizontally scrollable row of equal height cards using Flexbox and CSS scroll snap for smooth, snap-aligned navigation.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Lines 1-6** (`.scroller`): `display: flex` puts all cards into a single horizontal flex row. `gap: 1rem` adds consistent spacing between cards. `overflow-x: auto` enables horizontal scrolling once the row is wider than the viewport. `scroll-snap-type: x mandatory` tells the browser to snap the scroll position to the nearest child along the x-axis. `padding: 0.5rem` keeps the first and last cards from touching the container edge.

**Lines 8-14** (`.card`): `flex: 0 0 200px` gives each card a fixed flex basis so they stay wide enough to scroll horizontally instead of shrinking to fit. `scroll-snap-align: start` makes each card snap with its leading edge aligned to the scroll container. `align-self: stretch` stretches every card to the height of the tallest item in the flex row. `padding` and `box-sizing: border-box` keep the card content comfortably spaced without changing the intended width.

```css
.scroller {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0.5rem;
}

.card {
  background: lightgray;
  flex: 0 0 200px;
  scroll-snap-align: start;
  align-self: stretch;
  padding: 1rem;
  box-sizing: border-box;
}
```

### Why it works

| Property | Effect |
| --- | --- |
| `display: flex` | Arranges all cards in one horizontal row |
| `overflow-x: auto` | Lets the row scroll horizontally when needed |
| `scroll-snap-type: x mandatory` | Forces the scroll position to snap to a card |
| `flex: 0 0 200px` | Preserves a scrollable card width instead of shrinking |
| `align-self: stretch` | Makes every card match the tallest card's height |
| `scroll-snap-align: start` | Aligns each snapped card to the container start edge |
