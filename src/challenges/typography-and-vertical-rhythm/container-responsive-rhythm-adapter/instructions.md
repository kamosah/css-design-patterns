## Problem: Container-Responsive Rhythm Adapter

Use container queries to switch a card's vertical rhythm between `1rem` and `2rem` based on its width.

## Problem description

Within a responsive component, adjust the vertical rhythm dynamically based on the component's width. Use CSS `@container` queries and custom properties to switch between `1rem` and `2rem` baseline grid inside a `.card` component, ensuring all `h1`, `p`, and `li` inside the card maintain the correct rhythm at any size.

## Goal

Use only HTML and CSS to:

- Define `--rhythm-min` (`1rem`) and `--rhythm-max` (`2rem`) at the root.
- Enable container queries on `.card` and default `--rhythm` to `--rhythm-min`.
- In a `@container` query for `(min-width: 600px)`, set `--rhythm` to `--rhythm-max` within the `.card`.
- Apply `line-height` and `margin-bottom` based on `var(--rhythm)` to `h1`, `p`, and `li` inside the `.card`.

## Constraints

- Only CSS is allowed.
- Use rem units, CSS custom properties, and CSS Container Queries.
- Do not modify the HTML structure or use JavaScript.
