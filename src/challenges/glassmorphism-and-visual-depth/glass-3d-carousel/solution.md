# Solution: Glass 3D Carousel

## Explanation

The 3D carousel is built in three layers: a perspective container, a rotating inner wrapper that preserves its children in 3D space, and individual items placed around a circle using Y-axis rotations paired with Z-axis translations.

```css
.carousel {
  width: 600px;
  height: 400px;
  perspective: 1000px;
}

.carousel-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: spin 20s linear infinite;
}

@keyframes spin {
  from { transform: rotateY(0deg); }
  to   { transform: rotateY(-360deg); }
}

.carousel-item {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 250px;
  margin: -125px 0 0 -100px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-item:nth-child(1) { transform: rotateY(0deg)   translateZ(300px); }
.carousel-item:nth-child(2) { transform: rotateY(60deg)  translateZ(300px); }
.carousel-item:nth-child(3) { transform: rotateY(120deg) translateZ(300px); }
.carousel-item:nth-child(4) { transform: rotateY(180deg) translateZ(300px); }
.carousel-item:nth-child(5) { transform: rotateY(240deg) translateZ(300px); }
.carousel-item:nth-child(6) { transform: rotateY(300deg) translateZ(300px); }

.carousel:hover .carousel-inner {
  animation-play-state: paused;
}
```

- **`perspective` on the parent**: The 3D depth context must be set on the *parent* of the element that transforms — putting it on `.carousel-inner` itself has no effect on how its own transform is rendered, only on its children.
- **`transform-style: preserve-3d`**: Without this on `.carousel-inner`, the browser flattens all children onto a 2D plane before compositing — the carousel would look like flat cards stacking rather than fanning out in 3D.
- **Transform order matters**: `rotateY(Ndeg) translateZ(300px)` rotates the local coordinate system first, then pushes outward along *that rotated Z axis*. Reversing to `translateZ(300px) rotateY(Ndeg)` would move all items to the same translated point and spin them in place.
- **`animation-play-state: paused`**: This freezes the animation at its current frame rather than resetting it — the carousel stops exactly where it is and resumes from that point when the hover ends.
