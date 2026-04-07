## Problem: Media Object Alignment

Try to build a responsive media object layout that aligns an avatar and text side by side on desktop and stacks them centered on mobile using Flexbox and media queries.

## Problem description

The `.media` container holds a 120×140 avatar image alongside a block of text comprising an `<h4>` and a `<p>`. The task is to display the image and text side by side with their top edges aligned on viewports wider than 480px, and to stack the image above the text, centered horizontally, on viewports narrower than 480px.

Write CSS to meet the following requirements:

1. On desktop (wider than 480px), the avatar and text should appear **side by side** with their **top edges aligned** and a `1rem` gap between them.
2. The image should maintain its aspect ratio within its 120×140px bounds using `object-fit: cover`.
3. On mobile (≤480px), the layout should **stack vertically** with the avatar centered above the text.

## Goal

On desktop, the avatar and text must appear side by side with tops aligned; on mobile (≤480px), the avatar should stack above and be centered with the text below.

## Constraints

- Only CSS may be added or modified — no JavaScript or extra HTML wrappers.
