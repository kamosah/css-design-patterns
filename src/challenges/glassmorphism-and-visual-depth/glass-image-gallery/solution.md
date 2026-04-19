# Solution: Glass Image Gallery

## Explanation

Each gallery card clips its children with `overflow: hidden` so the absolutely positioned overlay stays inside the card boundary. The overlay is anchored to the bottom and slides up on hover using `transform` and `opacity` together.

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.gallery-item img {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  padding: 1rem;
  border-radius: 8px 8px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.gallery-item:hover .overlay {
  opacity: 1;
  transform: translateY(0);
}
```

- **`overflow: hidden` on `.gallery-item`** clips the overlay when it's translated 20px below its resting position, so the slide-up animation starts from outside the card boundary rather than being visible below the card.
- **`repeat(auto-fit, minmax(250px, 1fr))`** creates a fully responsive grid with no media queries — columns are at least 250px wide but stretch to fill available space, and auto-fit collapses empty tracks so cards always fill the row.
- **`transform: translateY(20px)` + `opacity: 0`** together create a more natural entrance than opacity alone — the element appears to rise into view rather than simply fading in place.
- **`display: block` on `img`** removes the default inline baseline gap that browsers add below images, which would otherwise create a small gap between the image and the overlay at the card's bottom edge.
