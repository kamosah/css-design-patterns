## Problem: Baseline Alignment of Image and Text

Learn to align an image and a paragraph so their baselines match.

## Problem description

You are given a page with an avatar `<img>` and a `<p>User Name</p>` placed next to each other. By default, the paragraph drops below the image because it is a block-level element and leaves the inline formatting context.

Write CSS to meet the following requirements:

1. The image's bottom edge should align with the text baseline (`vertical-align: baseline`).
2. The paragraph should flow **inline** next to the image so that its text baseline lines up with the image.

## Goal

Make the image and the paragraph text sit on the same baseline — as if they were written on the same ruled line.

## Constraints

- Do not change the HTML structure.
- Do not use flexbox or grid.
