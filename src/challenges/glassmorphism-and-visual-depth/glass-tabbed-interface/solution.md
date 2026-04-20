# Solution: Glass Tabbed Interface

## Explanation

This tab component is built on the hidden-radio pattern: three `<input type="radio">` elements stay invisible in the DOM, but their `:checked` state drives panel visibility and tab highlighting via the general sibling combinator (`~`).

```css
.tabs input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.tab-labels {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.tab-labels label {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  border-bottom: 2px solid transparent;
}

#tab1:checked ~ .tab-labels label[for="tab1"],
#tab2:checked ~ .tab-labels label[for="tab2"],
#tab3:checked ~ .tab-labels label[for="tab3"] {
  color: #bbb;
  border-bottom-color: #bbb;
}

.tab-content > div {
  display: none;
  opacity: 0;
  transition: opacity 0.8s ease;
}

#tab1:checked ~ .tab-content #content1,
#tab2:checked ~ .tab-content #content2,
#tab3:checked ~ .tab-content #content3 {
  display: block;
  opacity: 1;
}
```

- **Hidden radio inputs**: `position: absolute; opacity: 0; pointer-events: none` removes them visually and from pointer interaction while keeping them in the DOM so `:checked` still fires when the associated `<label>` is clicked.
- **General sibling combinator (`~`)**: Unlike the adjacent sibling (`+`), `~` reaches *any* subsequent sibling. This is required here because `.tab-labels` and `.tab-content` are not immediately adjacent to each individual `<input>` — two other inputs sit between them.
- **`label[for="tab1"]`**: Targeting the label by its `for` attribute value is how a single `:checked` rule can highlight exactly one tab without extra wrapper elements.
- **`display: none` vs `opacity: 0`**: `display: none` removes the element from layout entirely; `opacity: 0` alone keeps the space. The combination means hidden panels take no space, but the `opacity` transition only fires on the *fade-in* direction (from `none` to `block` the browser skips the transition for the first frame). For bidirectional fades, replace `display` with `visibility`.
