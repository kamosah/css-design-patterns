# Nested Grid Subgrid Rhythm

You have a parent `.layout` container with two `.module` children. Each module holds an `<h3>` and one or more `<p>` elements. Your task is to use CSS Subgrid so the nested module grids inherit the parent's row tracks, aligning all headings and paragraphs to the same baseline grid — **without using margins**.

## Goal

Use CSS only to:

- Define `--rhythm: 1rem` in `:root` as the baseline spacing unit.
- On `.layout`: apply `display: grid`, two equal columns, and set row tracks using `--rhythm`.
- On `.module`: enable a subgrid so it inherits the parent's row tracks, spans enough rows to accommodate its children, and uses a single column.
- On `.module h3` and `.module p`: remove default margins and set `line-height` to `--rhythm` so text sits squarely in each inherited row.
- Scale the heading so it occupies two rhythm rows with an appropriate `font-size`.

## Constraints

- Only CSS is allowed — do not modify the HTML or use JavaScript.
- Use `rem` units and CSS custom properties throughout.
- Do not use `margin` or `padding` to achieve vertical alignment — let the grid rows do the work.
- Assume the browser supports CSS Subgrid (`grid-template-rows: subgrid`).
