import type { Topic, PatternIntroduction } from '../../types/challenge'
import { challenge as singleLineTextTruncation } from './single-line-text-truncation/meta'
import { challenge as multiLineTextClamping } from './multi-line-text-clamping/meta'
import { challenge as responsiveTextTruncationGrid } from './responsive-text-truncation-grid/meta'
import { challenge as accessibleTextTruncationTooltip } from './accessible-text-truncation-tooltip/meta'
import { challenge as textClampingCardPreviews } from './text-clamping-card-previews/meta'
import { challenge as multiLineEllipsisResponsiveBlogLayout } from './multi-line-ellipsis-responsive-blog-layout/meta'
import { challenge as textTruncationFlexboxLayout } from './text-truncation-flexbox-layout/meta'
import { challenge as truncateTextDropdownOptionList } from './truncate-text-dropdown-option-list/meta'
import { challenge as clampTextReadMoreButton } from './clamp-text-read-more-button/meta'
import { challenge as tableCellTextTruncation } from './table-cell-text-truncation/meta'
import { challenge as lineClampHoverToExpand } from './line-clamp-hover-to-expand/meta'
import { challenge as multiLineClampDynamicallySizedCards } from './multi-line-clamp-dynamically-sized-cards/meta'
import { challenge as textClampNestedFlexboxLayout } from './text-clamp-nested-flexbox-layout/meta'
import { challenge as multiLineTextClampWithoutWebkit } from './multi-line-text-clamp-without-webkit/meta'
import { challenge as textClampingBidirectionalRtlLtr } from './text-clamping-bidirectional-rtl-ltr/meta'

const patternIntro: PatternIntroduction = {
  tagline: "Explore the Text Truncation and Clamping pattern and understand why it's important.",

  overview: `<p>The <strong>Text Truncation and Clamping</strong> pattern helps maintain layout integrity when dealing with unpredictable or variable-length content. They prevent text overflow from breaking designs or pushing other elements out of view, and they support clean, readable interfaces by limiting text to a controlled number of lines.</p>`,

  howItWorks: `<p>This pattern uses a combination of CSS properties, such as <code>overflow</code>, <code>text-overflow</code>, <code>white-space</code>, and <code>-webkit-line-clamp</code>, to hide overflowing text and, optionally, add ellipsis (<code>...</code>) to signal that more content exists. Single-line truncation uses traditional overflow rules, while multi-line clamping depends on the CSS <code>-webkit-box</code> model with vendor-prefixed properties.</p>`,

  previewHtml: `<div class="card">
  <h2 class="title">CSS Design Patterns</h2>
  <p class="body">CSS Design Patterns is an interactive learning platform designed to help software developers and engineers advance their skills through hands-on coding environments and structured learning paths. One of the many topics it covers is CSS (Cascading Style Sheets), a core technology used to style and visually enhance web pages. Courses cater to both beginners and experienced developers by offering text-based tutorials, live coding exercises, and real-world examples. These resources teach learners how to control layout, colors, typography, and more.</p>
</div>`,

  previewCss: `* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 24px;
  background: #ffffff;
  font-family: system-ui, sans-serif;
}
.card {
  max-width: 480px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px 20px;
}
.title {
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 8px;
}
.body {
  font-size: 13px;
  line-height: 1.6;
  color: #475569;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}`,

  previewCaption: 'Blog layout with preview text clamped to four lines',

  anatomyBlocks: [
    {
      label: 'Below is an example of how we can achieve single-line truncation:',
      css: `.truncate {
  white-space: nowrap;       /* Prevents line wrapping */
  overflow: hidden;          /* Hides excess text */
  text-overflow: ellipsis;   /* Displays ellipsis (...) */
}`,
      caption: 'Single-line truncation',
    },
    {
      label: 'The following CSS shows how to do multi-line clamping:',
      css: `.clamp {
  display: -webkit-box;          /* Creates a flex-like layout for clamping */
  -webkit-line-clamp: 3;         /* Limits text to 3 lines */
  -webkit-box-orient: vertical;  /* Vertical orientation */
  overflow: hidden;              /* Hides overflowed content */
}`,
      caption: 'Multi-line clamping',
    },
  ],

  anatomyExplanation: `<p>The rules above are important for text truncation and clamping, as they help keep the text area clean and prevent overflow.</p>`,
}

export const topic: Topic = {
  id: 'text-truncation-and-clamping',
  title: 'Text Truncation and Clamping',
  patternIntro,
  challenges: [singleLineTextTruncation, multiLineTextClamping, responsiveTextTruncationGrid, accessibleTextTruncationTooltip, textClampingCardPreviews, multiLineEllipsisResponsiveBlogLayout, textTruncationFlexboxLayout, truncateTextDropdownOptionList, clampTextReadMoreButton, tableCellTextTruncation, lineClampHoverToExpand, multiLineClampDynamicallySizedCards, textClampNestedFlexboxLayout, multiLineTextClampWithoutWebkit, textClampingBidirectionalRtlLtr],
}
