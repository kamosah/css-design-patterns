import type { Topic, PatternIntroduction } from '../../types/challenge'
import { challenge as flexEqualHeightColumns } from './flex-equal-height-columns/meta'
import { challenge as tableDisplayEqualHeight } from './table-display-equal-height/meta'
import { challenge as gridAlignItemsStretch } from './grid-align-items-stretch/meta'
import { challenge as columnsFluidLayout } from './columns-fluid-layout/meta'
import { challenge as flexWrapFluidColumns } from './flex-wrap-fluid-columns/meta'
import { challenge as fluidGridColumnsAutoFit } from './fluid-grid-columns-auto-fit/meta'
import { challenge as containerQueryFluidColumns } from './container-query-fluid-columns/meta'
import { challenge as responsiveFlexboxVariableColumns } from './responsive-flexbox-variable-columns/meta'
import { challenge as balancedMultiColumnContent } from './balanced-multi-column-content/meta'
import { challenge as customPropertyControlledColumnLayout } from './custom-property-controlled-column-layout/meta'
import { challenge as masonryStyleGridEqualColumnWidths } from './masonry-style-grid-equal-column-widths/meta'
import { challenge as equalHeightSubgridLayout } from './equal-height-subgrid-layout/meta'
import { challenge as horizontallyScrollableEqualHeightCards } from './horizontally-scrollable-equal-height-cards/meta'
import { challenge as legacyFallbackEqualHeightColumnsIe11 } from './legacy-fallback-equal-height-columns-ie11/meta'
import { challenge as magazineStyleCardColumnsBreakAvoidance } from './magazine-style-card-columns-break-avoidance/meta'

const patternIntro: PatternIntroduction = {
  tagline: 'Explore equal height and fluid column layouts in CSS and understand why they are the foundation of every card grid and multi-column design.',

  overview: `<p><strong>Equal height and fluid columns</strong> solve one of the most persistent layout problems on the web: keeping sibling containers visually aligned regardless of how much content each one holds. Without this pattern, cards in a grid collapse to different heights, creating a jagged, unprofessional appearance. When columns are also fluid — meaning they adapt their width to the available space rather than relying on fixed breakpoints — layouts become resilient to any screen size or container width. Together, these two ideas form the backbone of modern card grids, dashboards, and multi-column content areas.</p>`,

  howItWorks: `<p>The simplest path to equal height columns is <code>display: flex</code> on the row container. Flexbox's default <code>align-items: stretch</code> forces all direct children to match the tallest sibling — no extra properties needed. CSS Grid achieves the same result: <code>display: grid</code> with <code>align-items: stretch</code> (also the default) makes every cell in the same row equal height. For fluid widths, <code>flex: 1</code> distributes available space evenly among flex children, while Grid's <code>repeat(auto-fit, minmax(200px, 1fr))</code> creates a self-adjusting column count that reflows as the container grows or shrinks.</p>`,

  previewHtml: `<div class="row">
  <div class="card">
    <h3>Design</h3>
    <p>Visual hierarchy, typography, and color theory for modern interfaces.</p>
  </div>
  <div class="card">
    <h3>Development</h3>
    <p>HTML, CSS, and JavaScript fundamentals for the modern web, including accessibility and performance patterns that ship real products.</p>
  </div>
  <div class="card">
    <h3>Deploy</h3>
    <p>Ship it.</p>
  </div>
</div>`,

  previewCss: `* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, sans-serif; padding: 24px; background: #f8fafc; }
.row { display: flex; gap: 16px; }
.card { flex: 1; background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; }
.card h3 { font-size: 15px; margin-bottom: 8px; color: #0f172a; }
.card p { font-size: 13px; color: #64748b; line-height: 1.6; }`,

  previewCaption: 'Three cards with different content amounts all reach the same height — Flexbox stretch does this by default',

  anatomyLabel: 'This pattern requires only a flex or grid container on the row wrapper. No height values, no JavaScript. A minimal setup:',

  anatomyCss: `.card-row {
  display: flex;
  gap: 16px;
}

.card-row > * {
  flex: 1; /* fluid equal-width columns */
  /* align-items: stretch is the flex default — equal height is automatic */
}`,

  anatomyCaption: 'Example CSS for the Equal Height & Fluid Columns pattern',

  anatomyExplanation: `<p>The key insight is that equal height is <em>opt-out</em> in Flexbox and Grid, not opt-in — you get it for free unless you set <code>align-items</code> to something else. For Grid, replace <code>flex: 1</code> with <code>grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))</code> on the parent to also gain automatic column reflowing.</p>`,

  diveDeep: [
    {
      title: 'Strengths and tradeoffs',
      content: `<p>The Flexbox and Grid approaches are declarative and require almost no CSS. Equal height is automatic, and fluid widths eliminate most responsive breakpoints. The main tradeoff is that <code>align-items: stretch</code> stretches the container background and border, which is often exactly what you want for cards — but can be surprising if you expect children to shrink to their content height. Grid's <code>auto-fit</code> + <code>minmax</code> is powerful but can leave orphaned wide cards on the last row; <code>auto-fill</code> with an empty placeholder or <code>grid-template-columns</code> constraints can control that.</p>`,
    },
    {
      title: 'Common pitfalls',
      content: `<ul>
  <li>Setting a fixed <code>height</code> on cards directly — content will overflow or be clipped instead of stretching the card.</li>
  <li>Forgetting that <code>align-items: stretch</code> is the default: developers sometimes add it explicitly then wonder why removing it breaks the layout.</li>
  <li>Using <code>inline-flex</code> instead of <code>flex</code> — inline-flex only sizes to content width, so the row does not fill its container.</li>
  <li>Nesting a block layout (like a <code>&lt;div&gt;</code> with no display set) inside a flex child — the grandchild won't inherit the equal height unless you pass it down with <code>display: flex; flex-direction: column</code> on the child.</li>
  <li>Expecting <code>auto-fit</code> columns to maintain a minimum of N columns — <code>minmax</code> will let the layout collapse to one column if the container is narrow enough.</li>
</ul>`,
    },
    {
      title: 'Alternate approaches',
      content: `<p>Before Flexbox, developers faked equal height with negative margin hacks or <code>display: table-cell</code> on siblings — the latter is still occasionally useful for legacy browser support. CSS Grid subgrid (now widely supported) solves a deeper problem: aligning content <em>inside</em> equal-height cells, so headers and footers across cards line up even when their labels differ in length. Container queries let you base column count on the card container's width rather than the viewport, which is more accurate for reusable components dropped into different layout slots.</p>`,
    },
    {
      title: "Where you've seen it before",
      content: `<p>Equal height fluid columns are everywhere: pricing tables where three tiers must align their feature lists, dashboard stat cards that sit side by side, e-commerce product grids where titles and CTAs align across varying description lengths, news or blog card grids, settings panels with side-by-side option groups, and feature comparison sections on landing pages. Any time you see a row of cards that look like they belong together visually — that's this pattern at work.</p>`,
    },
  ],
}

export const topic: Topic = {
  id: 'equal-height-fluid-columns',
  title: 'Equal Height & Fluid Columns',
  challenges: [flexEqualHeightColumns, tableDisplayEqualHeight, gridAlignItemsStretch, columnsFluidLayout, flexWrapFluidColumns, fluidGridColumnsAutoFit, containerQueryFluidColumns, responsiveFlexboxVariableColumns, balancedMultiColumnContent, customPropertyControlledColumnLayout, masonryStyleGridEqualColumnWidths, equalHeightSubgridLayout, horizontallyScrollableEqualHeightCards, legacyFallbackEqualHeightColumnsIe11, magazineStyleCardColumnsBreakAvoidance],
  patternIntro,
}
