# Solution: Glass Responsive Dashboard Cards

## Explanation

This challenge stacks two levels of containment: the `.dashboard` grid responds to viewport width via `@media`, while each `.card` responds to its *own* width via `@container`.

```css
:root {
  --gap: 1rem;
}

.dashboard {
  container-type: inline-size;
  display: grid;
  gap: var(--gap);
  grid-template-columns: 1fr;
}

@media (min-width: 400px) {
  .dashboard {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 800px) {
  .dashboard {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.card {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  container-type: inline-size;
}

.card-header {
  font-size: clamp(1rem, 2vw, 2rem);
  margin-bottom: 0.5rem;
}

.card-details {
  display: none;
}

@container (min-width: 300px) {
  .card .card-details {
    display: block;
    margin-top: 0.5rem;
  }
}
```

- **`container-type: inline-size` on `.dashboard`**: Establishes the dashboard as a container so its children can query its inline size. Without this, `@container` rules would look up the tree for the nearest ancestor container — in this case, the viewport.
- **`container-type: inline-size` on `.card`**: Each card becomes its own containment context. The `@container (min-width: 300px)` rule fires when *that card's* computed inline size crosses 300px — a card in a narrow column stays collapsed while a wide card expands.
- **`clamp(1rem, 2vw, 2rem)`**: Sets a minimum of `1rem`, a preferred value of `2vw` (scales with viewport width), and a maximum of `2rem`. The header font grows proportionally across screen sizes without needing breakpoints.
- **Why `.card .card-details` inside `@container`**: The selector inside `@container` still needs to be scoped — writing just `.card-details` would match *any* `.card-details` inside a container that is ≥300px wide. The `.card .card-details` descendant selector ensures the rule applies only to details that are children of a card container meeting the condition.
