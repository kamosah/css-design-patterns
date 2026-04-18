# Solution: Sticky Table Header

Apply `position: sticky` and `top: 0` directly to `thead th` — not to `<thead>` itself. In a table formatting context, only `<th>` and `<td>` cells support sticky positioning; `<thead>` and `<tr>` are ignored by the browser's sticky algorithm.

The `.table-container` must have a fixed `height` and `overflow-y: auto` to create the scrolling context that sticky positions against.
