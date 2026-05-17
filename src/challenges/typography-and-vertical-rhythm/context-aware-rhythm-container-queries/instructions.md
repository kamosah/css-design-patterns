## Problem: Context-Aware Rhythm with Container Queries

Use CSS Container Queries and custom properties to adjust vertical rhythm in different container widths, ensuring consistent baseline alignment within each context.

## Problem description

You have a `.container` element holding `<h1>` and `<p>` content. Your task is to establish `.container` as a CSS container, define local `--rhythm` and `--scale` variables, apply `clamp()`-based fluid typography, and then use `@container` queries to increase the rhythm and scale at wider breakpoints.

## Goal

Use only HTML and CSS to:

- Declare `.container` as a `container-type: inline-size` container with `--rhythm: 1rem` and `--scale: 1.5`.
- Apply `clamp()` to `font-size`, `line-height`, and `margin-bottom` on `.container h1` and `.container p` using the local variables.
- Add a `@container (min-width: 400px)` rule that updates `--rhythm` to `1.5rem` and `--scale` to `2`.
- Add a `@container (min-width: 800px)` rule that updates `--rhythm` to `2rem` and `--scale` to `2.5`.

## Constraints

- Only HTML and CSS are allowed.
- Use CSS variables, `clamp()`, and `container-type: inline-size`.
- Do not use JavaScript or modify the HTML structure.
