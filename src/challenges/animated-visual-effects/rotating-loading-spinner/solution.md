# Solution: Rotating Loading Spinner

## Explanation

The spinner is a circle whose top border is a contrasting color. Rotating the element continuously makes that colored arc appear to chase itself around the ring.

```css
.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top: 5px solid #333;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
```

- **`border-radius: 50%`** turns the square element into a circle, so the border renders as a ring.
- **`border-top: 5px solid #333`** overrides one side of the uniform `#ccc` border with a darker color, creating the visible arc that appears to move.
- **`animation: spin 1s linear infinite`** runs the `spin` keyframes for 1 second per cycle with `linear` timing (constant speed — `ease` would cause subtle acceleration that looks wrong for a loader) and repeats forever.
- **`transform: rotate(0deg → 360deg)`** completes one full clockwise revolution per cycle.
