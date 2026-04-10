## Solution: Table Display Equal Height

Leverage CSS `display: table` and `display: table-cell` to ensure two side-by-side columns always share the same height without Flexbox.

## Solution explanation

- **`display: table`** — Sets `.container` to behave like a `<table>` element. The browser applies table-based layout rules, allowing child elements to be arranged as table cells within a single row. `width: 100%` is required because, unlike block elements, a table shrinks to fit its content by default.

- **`display: table-cell`** — Gives each `.column` the behaviour of a `<td>`. The browser's table-layout algorithm stretches all cells in a row to the height of the tallest cell automatically — no extra alignment property needed.

- **`padding: 1rem`** — Adds breathing room inside each column so text doesn't press against the edges.
