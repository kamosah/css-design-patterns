# Solution: Glass Mega Dropdown Menu

## Explanation

The navbar is `position: fixed` so it stays pinned while the page scrolls. Each `.menu li` is `position: relative`, making it the containing block for its absolutely-positioned `.dropdown`.

```css
.glass-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  z-index: 1000;
  padding: 0 2rem;
}

.menu {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.menu li {
  position: relative;
}

.menu a {
  text-decoration: none;
  color: #aaa;
  font-weight: 500;
}

.dropdown {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
}

.menu li:hover > .dropdown,
.menu li:focus-within > .dropdown {
  opacity: 1;
  visibility: visible;
}

@media (max-width: 768px) {
  .dropdown {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

- **`position: fixed` on `.glass-nav`**: the navbar is removed from normal flow and painted relative to the viewport, so it stays visible as the user scrolls.
- **`backdrop-filter: blur(8px)` on the gradient backdrop**: the semi-transparent `rgba(255,255,255,0.2)` background lets the coloured gradient show through and the blur composites it into a frosted-glass surface.
- **`visibility: hidden` + `opacity: 0`**: unlike `display: none`, `visibility` can be transitioned. Setting `opacity: 0` alone leaves the element interactive (pointer events still fire); `visibility: hidden` removes pointer events so hovering over a hidden dropdown doesn't accidentally trigger the reveal.
- **`:focus-within` on `.menu li`**: when keyboard focus moves into a dropdown link, `:focus-within` matches the parent `li`, keeping the panel open. Without it, tabbing into the dropdown would close it immediately.
- **`position: relative` on `.menu li`**: makes each li the containing block for its `.dropdown`, so `top: 60px; left: 0` anchors the panel directly below the nav item.
- **`grid-template-columns: repeat(4, 1fr)`**: divides the dropdown panel into four equal columns. `flex-wrap: wrap` is not needed — CSS Grid handles layout without it.
- **Media query `max-width: 768px`**: collapses to two columns on narrow viewports without JavaScript or extra markup.
