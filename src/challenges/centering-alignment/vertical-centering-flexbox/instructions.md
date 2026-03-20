## Vertical Centering with Flexbox

Vertical centering has historically been one of the trickiest problems in CSS. **Flexbox** makes it trivial.

### The Pattern

Apply flexbox to the **parent container** and use `align-items` to control vertical positioning:

```css
.container {
  display: flex;
  align-items: center; /* vertically centers all flex children */
}
```

### Key Properties

| Property | Effect |
|---|---|
| `display: flex` | Turns container into a flex formatting context |
| `align-items: center` | Aligns children along the **cross axis** (vertical by default) |
| `justify-content: center` | Aligns children along the **main axis** (horizontal by default) |

### Important

The container needs an explicit **height** for vertical centering to be visible. Without it, the container shrinks to wrap its content and there's no extra space to distribute.

### Your Task

Make the `.box` vertically centered within the `.container` using Flexbox.
