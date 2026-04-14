## Problem: Equal Height Subgrid Layout

Try to create a multi-level grid layout with consistent row heights by using CSS subgrid to inherit row sizing from the parent grid.

## Problem description

A parent `.parent-grid` defines two columns and multiple rows of equal height. Each `.child-grid` spans three parent rows and should align its own rows to the parent's row heights. The task is to use `display: subgrid` so that child grids inherit row track sizes, producing a perfectly aligned multi-level grid.

## Goal

Implement a nested grid layout where child grids use subgrid to match parent row track sizes, achieving equal heights without duplicate definitions.

## Constraints

- Only CSS may be modified; assume subgrid support.
- No JavaScript or extra wrappers are allowed.
