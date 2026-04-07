## Solution: Inline-Block Group Centering via text-align

Let's learn to center a group of inline-block elements within a container using the `text-align` property.

## Solution explanation

- **Line 4** — `text-align: center` on `.wrapper` centers all inline and inline-block children as a group. Because `.item` elements use `display: inline-block`, they participate in the parent's inline formatting context and respond to `text-align` just like text would.
