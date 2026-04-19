# Solution: 3D Rotating Image Carousel

## Explanation

Each item is placed at the carousel's center (`top: 50%; left: 50%`), then a chained transform rotates it to a position on the ring, pushes it outward, and centers it on its own origin.

```css
.carousel {
  width: 400px;
  height: 300px;
  margin: 2rem auto;
  perspective: 1000px;
  transform-style: preserve-3d;
  animation: spin 20s linear infinite;
}

.carousel-item {
  position: absolute;
  width: 200px;
  height: 150px;
  top: 50%;
  left: 50%;
  transform-style: preserve-3d;
}

.carousel-item:nth-child(1) { transform: rotateY(0deg)   translateZ(300px) translate(-50%, -50%); }
.carousel-item:nth-child(2) { transform: rotateY(60deg)  translateZ(300px) translate(-50%, -50%); }
.carousel-item:nth-child(3) { transform: rotateY(120deg) translateZ(300px) translate(-50%, -50%); }
.carousel-item:nth-child(4) { transform: rotateY(180deg) translateZ(300px) translate(-50%, -50%); }
.carousel-item:nth-child(5) { transform: rotateY(240deg) translateZ(300px) translate(-50%, -50%); }
.carousel-item:nth-child(6) { transform: rotateY(300deg) translateZ(300px) translate(-50%, -50%); }

@keyframes spin {
  from { transform: rotateY(0deg); }
  to   { transform: rotateY(-360deg); }
}
```

- **Transform order matters** — CSS applies transforms right-to-left. `rotateY(Ndeg) translateZ(300px) translate(-50%, -50%)` means: center the element on its own axis, push it 300px outward along its local Z, then rotate that offset position around the carousel's Y axis — placing it on a ring of radius 300px.
- **`transform-style: preserve-3d` on both `.carousel` and `.carousel-item`** — ensures child elements participate in the parent's 3D space rather than being flattened to a 2D plane.
- **Animating the parent** — rotating `.carousel` spins all children together without touching their individual transforms, keeping the ring geometry intact.
- **`rotateY(-360deg)` in `@keyframes`** — negative rotation produces a clockwise spin when viewed from above, matching the natural left-to-right reading direction of the items.
