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
  tagline: 'Explore the Equal Height and Fluid Columns pattern and understand why it\'s important.',

  overview: `<p>The <strong>Equal Height and Fluid Columns</strong> pattern addresses a common challenge in UI design: how to maintain visual consistency across columns with varying content lengths. By ensuring that columns maintain a consistent height regardless of their content and adapt fluidly to screen size, the layout feels more structured, balanced, and readable. Equal-height columns create harmony, particularly in grid-based layouts like cards, pricing tables, and feature comparisons.</p>`,

  howItWorks: `<p>The pattern relies primarily on CSS Flexbox or Grid to create rows of elements where each column stretches to match the height of the tallest item. Flexbox achieves this by aligning items along the stretch axis, while CSS Grid naturally ensures uniform height alignment across rows. In both cases, setting a flexible width (like percentages or fractional units) enables fluid behavior as the screen size changes. Gap and padding values help maintain spacing without disrupting equal height alignment.</p>`,

  previewHtml: `<div class="columns">
  <div class="column"><p>CSS layout patterns are foundational techniques that help developers build structured, consistent, and adaptable interfaces. One such pattern involves distributing content across multiple columns while maintaining equal visual weight. This is especially important in text-heavy layouts, where readers benefit from narrower line lengths and parallel content presentation. The equal height constraint ensures that adjacent columns do not collapse to different sizes, preserving the visual rhythm of the page even when content lengths vary significantly between columns.</p></div>
  <div class="column"><p>Fluid column behavior allows these layouts to adapt naturally to the available container width without relying on hard-coded breakpoints. By using fractional units or flexible sizing, each column claims an equal share of the horizontal space. This makes the pattern composable — it works inside a narrow sidebar, a full-width content area, or anywhere in between. Combining equal height with fluid widths creates a layout primitive that scales gracefully across devices and screen sizes.</p></div>
</div>`,

  previewCss: `* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, sans-serif; padding: 20px; font-size: 13px; line-height: 1.6; color: #374151; }
.columns { display: flex; gap: 20px; }
.column { flex: 1; }`,

  previewCaption: 'A paragraph split into two equal-height columns',

  anatomyBlocks: [
    {
      label: 'A common implementation uses Flexbox:',
      css: `.columns {
  display: flex;
  gap: 1rem;
}

.column {
  flex: 1;
}`,
      caption: 'Example CSS for the Equal Height and Fluid Columns pattern',
    },
  ],

  anatomyExplanation: `<p>Each column is given <code>flex: 1</code>, so they grow equally within the row. The <code>gap</code> defines the spacing between them. Flexbox aligns items by height automatically (unless otherwise constrained), therefore, all columns will match the height of the tallest one. For a grid-based approach, <code>display: grid</code> with <code>grid-auto-rows</code> or <code>align-items: stretch</code> can accomplish similar results.</p>`,
}

export const topic: Topic = {
  id: 'equal-height-fluid-columns',
  title: 'Equal Height & Fluid Columns',
  challenges: [flexEqualHeightColumns, tableDisplayEqualHeight, gridAlignItemsStretch, columnsFluidLayout, flexWrapFluidColumns, fluidGridColumnsAutoFit, containerQueryFluidColumns, responsiveFlexboxVariableColumns, balancedMultiColumnContent, customPropertyControlledColumnLayout, masonryStyleGridEqualColumnWidths, equalHeightSubgridLayout, horizontallyScrollableEqualHeightCards, legacyFallbackEqualHeightColumnsIe11, magazineStyleCardColumnsBreakAvoidance],
  patternIntro,
}
