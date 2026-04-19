# Morphing Blob Background

Given an HTML page containing a `<div class="blob"></div>` element, write CSS to animate a full-screen blob that smoothly morphs between multiple shapes using `clip-path` and `@keyframes`.

## Goal

Write CSS rules to produce a continuously morphing blob background by animating `clip-path` through multiple polygon shapes using CSS-only techniques.

## Constraints

- Use only CSS (no JavaScript)
- Blob element dimensions: `width: 100vw; height: 100vh`
- Background: `linear-gradient(135deg, #ff9a9e, #fad0c4)`
- Define at least four distinct `clip-path` polygon shapes in CSS custom properties (`--clip1` through `--clip4`)
- All polygon definitions must have the same number of points for smooth interpolation
- Animation name: `blobMorph`
- Animation duration: `8s`
- Animation timing function: `ease-in-out`
- Animation iteration count: `infinite`
