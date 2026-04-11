## Solution: Grid Align-Items Stretch

Use CSS Grid to create two fluid columns that automatically equalize in height and fill the row.

## Solution explanation

- **`display: grid`** — Transforms `.grid-container` into a grid container. Direct children become grid items, subject to grid placement and alignment rules.

- **`grid-template-columns: 1fr 1fr`** — Defines two equal-width columns using the `fr` (fractional) unit. Each column gets exactly half the available space, regardless of content length.

- **`align-items: stretch`** — Controls how grid items are aligned within their row track on the block axis. `stretch` (the default) expands each item to fill the full height of its row, so both columns match the height of the tallest one.
