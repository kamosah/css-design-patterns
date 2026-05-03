# Responsive Video Embed

Create a responsive video embed component that preserves a 16:9 aspect ratio and scales fluidly with its container using only CSS.

## Problem description

Given a container element wrapping an `<iframe>` such as a YouTube video, write CSS rules so the wrapper maintains a 16:9 aspect ratio and the video scales to fill the wrapper without overflow or distortion.

## Goal

Implement CSS in `styles.css` so that `.video-container` enforces a 16:9 aspect ratio, and the nested `<iframe>` fills this container entirely.

## Constraints

- Do not modify the HTML structure.
- Use only CSS (no JavaScript is allowed).
- The video must maintain a 16:9 aspect ratio.
- The `<iframe>` should fully cover the container without cropping.
