## Problem: Custom Search Input Control

Try to create a custom search input with a styled icon, smooth focus expansion, and no default browser decorations.

## Problem description

Given an HTML page containing a `div` with class `.search-wrapper` that wraps an `<input type="search" class="custom-search" placeholder="Search...">`, write CSS to:

1. Remove native search decorations and clear button using WebKit pseudo-elements: `::-webkit-search-decoration`, `::-webkit-search-cancel-button`, `::-webkit-search-results-button`, `::-webkit-search-results-decoration`.
2. Style `.search-wrapper` with `position: relative` and `display: inline-block`.
3. Use `.search-wrapper::before` to display a magnifier icon (`content: "🔍"`) positioned at `left: 0.5rem`, vertically centered, non-interactive, with `font-size: 1rem` and `color: #666`.
4. Style `.custom-search` as follows:
   - Initial `width: 200px`; `height: 2rem`.
   - `padding: 0 1rem 0 2rem` (space for icon).
   - `border: 1px solid #ccc`; `border-radius: 4px`.
   - `transition` on `width 0.3s ease` and `border-color 0.2s ease`.
   - Hide default appearance with `-webkit-appearance: none`.
5. On `.custom-search:focus`, expand `width` to `300px`, change `border-color` to `#0066cc`, and remove `outline`.
6. Style `.custom-search::placeholder` color to `#999`.

## Goal

Write CSS rules so the search input shows a custom magnifier icon inside it, hides native decorations, smoothly expands on focus, and has styled placeholder text.

## Constraints

- Use only CSS (no JavaScript).
- Ensure the icon pseudo-element does not capture pointer events.
- Apply transitions only on `width` and `border-color`.
- Style placeholders using the `::placeholder` pseudo-element.
- Limit vendor-specific pseudo-elements to WebKit.
