# Solution: Feature Grid with Container Queries

Setting `container-type: inline-size` on `.features` registers it as a containment context. Any `@container` rule that follows without an explicit name targets the nearest ancestor containment context — here, `.features` itself.

The grid starts at `grid-template-columns: 1fr` (one column, mobile-first). The first `@container (min-width: 500px)` block switches to `repeat(2, 1fr)`, and the second `@container (min-width: 800px)` block switches to `repeat(4, 1fr)`. Because the queries watch the container's own inline size rather than the viewport, this grid reflows correctly even inside a narrow sidebar or a multi-column layout.

The `fr` unit distributes remaining space after gaps equally across tracks — no fixed pixel widths needed, keeping the layout fluid within each breakpoint range.
