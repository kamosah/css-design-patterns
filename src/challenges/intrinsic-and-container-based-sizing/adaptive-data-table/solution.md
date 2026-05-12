# Solution: Adaptive Data Table

Let's create a responsive data table that morphs from a traditional table to a grid card layout and then to a stacked flex format using CSS Container Queries.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Lines 1–4:** `.table-wrapper` declares the wrapper as an inline-size container and enables horizontal overflow if needed.

**Lines 6–15:** `table`, `th`, and `td` set base full-width table, collapsed borders, and consistent cell padding.

**Lines 17–34:** `@container ≥800px` applies native table layout with fixed column widths:
- Column 1: `minmax(150px, max-content)`
- Column 2: `2fr`
- Column 3: `fit-content(200px)`
- Column 4: `1fr`

**Lines 36–51:** `@container 400–799px` hides the header and renders each row as a 2-column grid card with gaps and margins.

**Lines 53–70:** `@container <400px` switches to block layout, displays rows as flex columns of label–value pairs using `content: attr(data-label)`, and styles separators.
