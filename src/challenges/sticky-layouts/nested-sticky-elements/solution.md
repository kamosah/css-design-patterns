# Solution: Nested Sticky Elements

## Explanation

`position: sticky` keeps each element in the normal document flow until it reaches its `top` threshold — at that point it behaves like `position: fixed` but remains constrained to its scroll container.

```css
.main-header {
  height: 50px;
  background: #333;
  color: white;
  padding-left: 10px;
  position: sticky;
  top: 0;
  z-index: 10;
}

.subheader {
  height: 30px;
  background: lightgray;
  padding-left: 10px;
  position: sticky;
  top: 50px;
  z-index: 5;
}
```

- **`position: sticky; top: 0` on `.main-header`** — the header scrolls with the page until its top edge would pass the viewport's top edge, then it locks in place at `0px`.
- **`position: sticky; top: 50px` on `.subheader`** — the subheader locks in place only once its top edge would pass the `50px` threshold, placing it flush against the bottom of the sticky main header.
- **`z-index: 10` vs `z-index: 5`** — ensures the main header always renders above the subheader when both are sticky simultaneously. Without this, the subheader could visually overlap the main header as it snaps into its sticky position.
- **Unlike `position: fixed`**, both elements still occupy their original layout space, so there is no content jump or layout shift when stickiness activates.
