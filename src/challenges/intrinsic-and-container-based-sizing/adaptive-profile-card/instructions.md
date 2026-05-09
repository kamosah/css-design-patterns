# Adaptive Profile Card

Build a responsive profile card using CSS Container Queries that adapts layout and typography across breakpoints while keeping a square avatar.

## Problem description

Given a `<div class="profile-card">` containing an `<img class="avatar">`, a `<h3>` for the username, and a `<p>` for the bio, write CSS so the card:

- Displays **vertically stacked** (avatar, heading, and paragraph) when its container inline size is `< 250px`.
- Displays **horizontally** (avatar left, text right) with `0.875rem` h3 font when inline size is `≥ 250px` but `< 500px`.
- Displays **horizontally** with larger spacing and a `1.25rem` h3 font when inline size is `≥ 500px`.
- Ensures the avatar is always **square** (`aspect-ratio: 1 / 1`) and covers its allotted space.

## Goal

Implement CSS in `styles.css` to:

1. Declare `container-type: inline-size` and `container-name: profile` on `.profile-wrapper`.
2. Use `@container` queries at `250px` and `500px` to adjust flex direction, spacing, and typography.
3. Apply `aspect-ratio` and `object-fit: cover` on the avatar image.

## Constraints

- Do not modify the HTML structure.
- Use only CSS (no JavaScript is allowed).
- Breakpoints must be exactly at `250px` and `500px`.
- Avatar must maintain a `1:1` aspect ratio and cover its container.
- Heading `font-size` must be `1rem` by default, `0.875rem` between `250px–499px`, and `1.25rem` at `≥ 500px`.
