## Solution: Columns Fluid Layout

Let's use the CSS multi-column layout (`column-count` and `column-gap`) to create fluid, equal height newspaper-style columns.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Line 2** (`column-count: 2`): This property instructs the `.container` to divide its content into two columns. The browser automatically flows the text from the top of the first column into the second, ensuring a continuous and balanced layout without content being cut off.

**Line 3** (`column-gap: 1rem`): This defines the horizontal space between the two columns. A gap of `1rem` ensures that the columns are visually separated while maintaining a cohesive layout.

**Line 7** (`margin: 0`): This removes the default margin above and below the `<p>` element inside the container. Eliminating the top margin prevents any unintended space at the beginning of the column, ensuring that text begins right at the top.

**Line 8** (`text-align: justify`): This property aligns the paragraph text evenly along both the left and right edges. Justified text creates a clean and professional block appearance, enhancing readability and visual uniformity.

```css
.container {
  column-count: 2;
  column-gap: 1rem;
}

.container p {
  margin: 0;
  text-align: justify;
}
```

### Why it works

| Property | Effect |
| --- | --- |
| `column-count: 2` | Splits the container's content into two balanced columns |
| `column-gap: 1rem` | Adds spacing between the columns |
| `margin: 0` | Removes default paragraph margin that would create a gap at the column top |
| `text-align: justify` | Aligns text evenly on both edges for a clean, newspaper-style look |
