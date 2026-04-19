# Solution: Bouncing Ball Animation

## Explanation

The ball's physics are encoded entirely in the keyframe stops — no JavaScript needed.

```css
.bounce-container {
  width: 100%;
  height: 200px;
  position: relative;
}

.ball {
  width: 40px;
  height: 40px;
  background-color: #ff4757;
  border-radius: 50%;
  position: absolute;
  left: calc(50% - 20px);
  animation: bounce 2s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
}

@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(160px); }
  70%  { transform: translateY(100px); }
  90%  { transform: translateY(160px); }
  100% { transform: translateY(0); }
}
```

- **`cubic-bezier(0.28, 0.84, 0.42, 1)`** mimics gravity: the ball accelerates falling and decelerates rising. A symmetric `ease-in-out` would look floaty and unnatural.
- **Diminishing peaks** (`160px → 100px → 160px`) encode energy loss in the keyframes themselves — each rebound is lower because the ball loses kinetic energy on impact.
- **`left: calc(50% - 20px)`** centers the absolutely-positioned ball regardless of container width, by offsetting 50% of the container by half the ball's own width.
- **`position: relative` on the container** establishes the coordinate origin so `translateY` offsets move the ball downward within the card rather than relative to the viewport.
