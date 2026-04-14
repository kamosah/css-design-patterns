## Problem: Custom-Property Controlled Column Layout

Try to use CSS custom properties to control column count and gutter spacing in a flexible, theme-ready layout.

## Problem description

A `.container` should display its children in a number of columns defined by CSS variables `--cols` and `--gutter`. By changing these variables, you must switch between 2, 3, or 4 columns with corresponding gutter spaces, all equal height.

## Goal

Implement the layout so that modifying `--cols` and `--gutter` on the container immediately updates the number of equal height columns and spacing.

## Constraints

- Only CSS changes with custom properties are allowed; HTML and JavaScript must remain unchanged.
