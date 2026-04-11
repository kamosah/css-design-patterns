## Solution: Flex Wrap Fluid Columns

Let's create a responsive two-column layout that wraps on narrow screens, ensuring columns are equal height and fluid using Flexbox.

## Solution explanation

**Line 2** (`display: flex`): This turns the `.container` into a Flex container. Its child `.column` elements will now follow the Flexbox layout model, placing items side-by-side and aligning them evenly.

**Line 3** (`flex-wrap: wrap`): By default, Flex items stay in a single row and may overflow on smaller screens. This allows `.column` items to wrap onto a new line when there is not enough horizontal space, making the layout responsive.

**Line 6** (`flex: 1 1 50%`): Sets the behavior for each `.column`. The three values are:
- `1` (flex-grow): allows the column to grow and fill extra space
- `1` (flex-shrink): allows it to shrink when needed
- `50%` (flex-basis): sets the preferred width to half the container

Two columns sit side-by-side, each taking up half the width. Because they share a Flex row, they automatically match each other's height — creating an equal height layout with no extra properties required.

**Line 10** (`flex: 1 1 100%`): Inside the media query, this applies only when the screen width is 600px or narrower. Changing the flex-basis from `50%` to `100%` makes each `.column` take up the full container width, turning the two-column layout into a single column for mobile screens.

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
.column {
  flex: 1 1 50%;
}
@media (max-width: 600px) {
  .column {
    flex: 1 1 100%;
  }
}
```

### Why it works

| Property | Effect |
| --- | --- |
| `display: flex` | Enables Flexbox on the container |
| `flex-wrap: wrap` | Allows columns to wrap onto a new row when space is tight |
| `flex: 1 1 50%` | Two columns per row, each half the container width, equal height |
| `flex: 1 1 100%` (media query) | Single column on screens ≤ 600px |
