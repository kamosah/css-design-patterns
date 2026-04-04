# Adaptive Dashboard Widget and Filter Panel Visibility

## Problem

Given an HTML page structured with the following elements:

- A `<div class="dashboard-container">` wrapping all elements.
- Inside, `<aside class="sidebar">` containing navigation icons and `<span class="label">` for each link.
- `<div class="main-content">` containing:
  - `<div class="filter-panel">` with input fields (collapsed by default).
  - `<button class="filter-toggle">` (floating on small viewports).
  - `<section class="widgets">` holding `.widget-summary`, `.widget-detail.detail-1`, `.widget-detail.detail-2`, and `.widget-detail.detail-3`.

Write CSS to satisfy the following:

**Mobile** (viewport width less than 480px):
- `.widgets` displays only `.widget-summary` at full width; hide all `.widget-detail` elements.
- Hide `.sidebar`.
- Show `.filter-toggle` as a fixed circular button at bottom-right; hide `.filter-panel` by default.
- When `.filter-toggle` receives `:focus` or `:hover`, display `.filter-panel` as a fixed overlay covering 80% of viewport height from top.

**Small tablet** (480px–767px):
- `.widgets` shows `.widget-summary` and `.widget-detail.detail-1` stacked vertically; hide other detail widgets.
- Hide `.sidebar`.
- `.filter-panel` appears inline above `.widgets`, collapsed (`height: 0; overflow: hidden`) and expands on `:focus-within` or `:hover` to 200px.
- Hide `.filter-toggle`.

**Large tablet** (768px–1023px):
- `.widgets` displays `.widget-summary`, `.widget-detail.detail-1`, and `.widget-detail.detail-2` in a two-column grid; hide `.widget-detail.detail-3`.
- Show `.sidebar` collapsed: icons only (`width: 60px`; `.label { display: none }`).
- `.filter-panel` is inline above widgets, collapsed by default and always expanded at viewport width ≥ 992px.
- Hide `.filter-toggle`.

**Desktop** (viewport width 1024px or greater):
- `.widgets` displays three columns: `.widget-summary` spanning two rows, `.widget-detail.detail-1`, `.widget-detail.detail-2`, and `.widget-detail.detail-3` filling the remaining cells.
- Show `.sidebar` expanded (`width: 200px`; `.label { display: inline-block }`).
- `.filter-panel` is shown inline and fully expanded.

Do not modify the HTML structure or use JavaScript.

## Goal

Implement a highly adaptive dashboard where the visibility and layout of widgets, the sidebar, and the filter panel change dynamically across four breakpoints.

## Constraints

- Only use CSS; do not modify HTML or use JavaScript.
- Breakpoints are exactly **480px**, **768px**, **992px**, and **1024px**.
- Use CSS Grid and/or Flexbox for layout.
- Use `:hover`, `:focus`, `:focus-within` to control filter panel expansion.
- Ensure the filter panel overlay on mobile is scrollable internally if content overflows.
