# Solution: Glass Header Navbar

## Explanation

A glass navbar combines two independent CSS mechanisms: `position: fixed` for sticky placement and `backdrop-filter: blur()` for the frosted-glass look. Both must be present — the navbar won't blur the scroll content beneath it without `backdrop-filter`, and the background color won't stay in view without `fixed` positioning.

```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.hero {
  height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #533483 100%);
}

.glass-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 2rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.nav-links li a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  padding-block: 0.5rem;
  padding-inline: 0.25rem;
}
```

- **`backdrop-filter: blur(8px)`** blurs whatever is rendered behind the navbar in the compositing layer. The `background` must have `alpha < 1` — `rgba(255, 255, 255, 0.15)` lets enough of the gradient bleed through to make the blur visible. The `.hero` must extend to the top of the viewport (no body padding) so there is gradient content behind the nav for `backdrop-filter` to act on.
- **`z-index: 1000`** places the navbar above all scroll content. Without this, page sections that create their own stacking contexts (e.g. elements with `position: relative`) could overlap the nav.
- **`height: 100vh` on `.hero`** ensures the gradient fills the full viewport and scrolls beneath the fixed bar — this is the content that `backdrop-filter` blurs as the user scrolls.
- **`list-style: none` + `margin: 0; padding: 0`** on `.nav-links` resets the browser's default `<ul>` styling, which otherwise adds bullets and left padding that would misalign the links.
