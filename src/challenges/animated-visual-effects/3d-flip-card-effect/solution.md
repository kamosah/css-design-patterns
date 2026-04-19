# Solution: 3D Flip Card Effect

## Explanation

The flip effect is achieved by layering two absolutely-positioned faces inside a 3D-context container and rotating the entire container on hover.

```css
.card {
  width: 300px;
  height: 200px;
  perspective: 1000px;
  margin: 2rem auto;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.card-back {
  transform: rotateY(180deg);
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}
```

- **`perspective: 1000px` on `.card`** — establishes the 3D viewing cone. Lower values create a more exaggerated perspective; `1000px` is a natural-feeling depth for a card this size.
- **`transform-style: preserve-3d` on `.card-inner`** — tells the browser not to flatten child elements into a 2D plane. Without this, both faces would render as flat images and the flip would look like a 2D scale animation.
- **`backface-visibility: hidden`** — hides a face when it is rotated more than 90° away from the viewer. This prevents the front face from ghosting through the back and vice versa.
- **`rotateY(180deg)` on `.card-back`** — pre-rotates the back so it starts facing away from the viewer. When `.card-inner` also rotates `180deg` on hover, both rotations cancel out, bringing the back face into view.
- **Transitioning `.card-inner`**, not individual faces — rotating the container is the key insight. Both faces travel together, preserving their relative orientation throughout the flip.
