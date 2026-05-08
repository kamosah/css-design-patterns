# Three-Panel Responsive Layout

Create a three-panel CSS Grid layout with a flexible main area, a min-width expanding sidebar, and a max-width-constrained ad panel.

## Problem description

You are given a container `<div class="layout">` with three child elements: `<nav>` for navigation, `<main>` for primary content, and `<aside>` for ads. Write CSS so:

- The navigation sidebar is at least `200px` wide but expands as needed to fit its content.
- The main section takes all remaining space.
- The ad panel fits its content width but never exceeds `300px`.

## Goal

Implement CSS in `styles.css` to define a grid layout on `.layout` using intrinsic sizing functions that satisfy each column width requirement.

## Constraints

- Do not modify the HTML structure.
- Use only CSS (no JavaScript is allowed).
- Sidebar width must be at least `200px` and expand up to its content's required width.
- Main section must fill leftover space.
- Ad panel width must fit its content but not exceed `300px`.
- Layout must reflow without overflow or visible gaps.
