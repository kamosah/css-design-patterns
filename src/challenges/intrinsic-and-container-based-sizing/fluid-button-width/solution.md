# Solution: Fluid Button Width

`width: clamp(150px, 25vw, 300px)` gives the button a fluid width with hard boundaries. The browser prefers `25vw`, but if that value becomes smaller than `150px` or larger than `300px`, `clamp()` limits it to the nearest allowed size.

This makes the button responsive without media queries. As the viewport grows or shrinks, the button width scales proportionally until it reaches one of the defined limits.

`padding: 1rem 2rem` keeps the click target comfortable, and `font-size: 1rem` preserves readable text sizing inside the button.
