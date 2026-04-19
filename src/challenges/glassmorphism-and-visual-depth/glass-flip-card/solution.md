# Solution: Glass Flip Card

## Explanation

The flip effect is a three-layer CSS technique: perspective on the container, 3D preservation on the inner wrapper, and pre-rotated faces that become visible when the wrapper rotates.

```css
.flip-card {
  width: 300px;
  height: 200px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s ease-in-out;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.flip-card-back {
  transform: rotateY(180deg);
}
```

- **`perspective: 1000px` on `.flip-card`** sets the depth of the 3D scene. It must be on the *parent* of the element that transforms — setting it on `.flip-card-inner` has no effect on its own children. A larger value (like 2000px) makes the flip feel more subtle and distant; a smaller value (like 400px) exaggerates the 3D distortion.
- **`transform-style: preserve-3d` on `.flip-card-inner`** tells the browser to render its children in 3D space. Without it, the browser flattens all children into a 2D plane before compositing — the flip would look like a `scaleX(0)` animation instead of a genuine 3D rotation.
- **`backface-visibility: hidden`** on both faces hides each face when it's rotated past 90° away from the viewer. Without it, you'd see a mirror-image of the front face bleeding through the back (and vice versa).
- **`transform: rotateY(180deg)` pre-applied to `.flip-card-back`** starts the back face pointing away from the viewer. When `.flip-card-inner` rotates 180°, the back face completes a full 360° rotation to face the viewer — while the front face rotates to face away and is hidden by `backface-visibility`.
