# Fluid Typography with CSS Container Queries

Given a `.card` element with a heading (`<h2>`) and paragraph (`<p>`), write CSS rules to:

- Enable a container query on `.card` by setting `container-type: inline-size`.
- Define fluid font sizes inside a container query for container widths between **300px** and **800px**:
  - `<h2>` scales from 20px (min) to 32px (max) using `clamp()`.
  - `<p>` scales from 14px (min) to 18px (max) using `clamp()`.
- Provide a fallback using `@supports not (container-type: inline-size)` to apply static font sizes:
  - `<h2>` at 20px
  - `<p>` at 14px

## Goal

Demonstrate advanced fluid typography techniques by adapting text size based on container width with graceful degradation for legacy browsers.

## Constraints

- The solution must use an external stylesheet named `styles.css`.
- Do not use JavaScript.
- Support modern browsers with CSS Container Queries and fallback in others.
- Container width range: **300px** to **800px**.
- Static fallback sizes: `<h2>` at 20px and `<p>` at 14px.
