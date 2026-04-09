## Problem: Center Inside a Transformed (Parallax) Container

Try to center an element inside a transformed container by compensating for parent transforms.

## Problem description

A `.parallax` container sized `400×400px` has `transform: translateY(-50%)` applied for a parallax effect. It contains a `50×50px` child `.child`. The task is to center `.child` at the container's original center point (before translation) without extra wrappers or JavaScript.

## Goal

Place the `.child` element at the midpoint of the container's original (pre-transform) position.

## Constraints

- Only CSS may be modified; adding HTML wrappers or JavaScript is not allowed.
