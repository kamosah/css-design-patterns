import type { Topic, PatternIntroduction } from '../../types/challenge'
import { challenge as horizontalCentering } from './horizontal-centering-margin-auto/meta'
import { challenge as inlineBlockGroupCentering } from './inline-block-group-centering/meta'
import { challenge as verticalCentering } from './vertical-centering-flexbox/meta'
import { challenge as fullCentering } from './full-centering-flexbox/meta'
import { challenge as fullCenteringGrid } from './full-centering-grid/meta'
import { challenge as baselineAlignmentImageText } from './baseline-alignment-image-text/meta'
import { challenge as mediaObjectAlignment } from './media-object-alignment/meta'
import { challenge as toolbarSpaceBetween } from './toolbar-space-between/meta'
import { challenge as flexboxCenteringMixedHeight } from './flexbox-centering-mixed-height/meta'
import { challenge as absolutePositionCenteringPadded } from './absolute-position-centering-padded/meta'
import { challenge as cssModalCenteringFallbacks } from './css-modal-centering-fallbacks/meta'
import { challenge as rotatedCenterTransform } from './rotated-center-transform/meta'
import { challenge as parallaxContainerCentering } from './parallax-container-centering/meta'
import { challenge as flexboxEvenSpacingCentering } from './flexbox-even-spacing-centering/meta'
import { challenge as nestedMultiLevelCentering } from './nested-multi-level-centering/meta'

const patternIntro: PatternIntroduction = {
  tagline: 'Explore centering and alignment in CSS and understand why they are essential to every layout.',

  overview: `<p><strong>Centering and alignment</strong> are fundamental design principles that bring order and visual harmony to an interface. Proper alignment transforms scattered elements into clear communication, providing structure and hierarchy to a layout. Centering content along a central axis creates a sense of balance and draws immediate attention to key UI elements. By aligning elements consistently, UIs become easier to scan and understand, reducing cognitive load on users. In short, a well-centered and aligned design appears clearer, more balanced, and more professional, which builds user trust and focus.</p>`,

  howItWorks: `<p>This pattern leverages modern CSS layout modules and alignment properties to center content both horizontally and vertically. For inline content, <code>text-align: center</code> centers inline children. To center block-level elements horizontally, we use <code>margin: 0 auto</code> with a defined width. For full two-axis centering, Flexbox uses <code>justify-content: center</code> and <code>align-items: center</code>, while Grid offers <code>place-items: center</code>. These approaches allow for flexible, responsive centering with minimal CSS.</p>`,

  previewHtml: `<div class="card">
  <img src="https://ui-avatars.com/api/?name=John+Doe&background=4f46e5&color=fff&size=80" alt="John Doe">
  <div class="info">
    <strong>John Doe</strong>
    <p>Bio paragraph goes here.</p>
  </div>
</div>`,

  previewCss: `* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, sans-serif; height: 100vh; display: flex; align-items: center; justify-content: center; }
.card { display: flex; justify-content: center; align-items: center; gap: 20px; }
.card img { width: 72px; height: 72px; border-radius: 50%; }
.info strong { display: block; font-size: 16px; margin-bottom: 4px; }
.info p { font-size: 13px; color: #64748b; }`,

  previewCaption: 'An image and placeholder text are vertically and horizontally centered inside a container',

  anatomyBlocks: [
    {
      label: 'This pattern typically involves applying layout model properties and alignment rules to a parent container. A common setup is:',
      css: `.center {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
      caption: 'Example CSS for the Centering and Alignment pattern',
    },
  ],

  anatomyExplanation: `<p>This centers all child elements both horizontally and vertically using Flexbox. For Grid, use <code>display: grid</code> and <code>place-items: center</code>. These setups are reusable and consistent across projects.</p>`,
}

export const topic: Topic = {
  id: 'centering-alignment',
  title: 'Centering & Alignment',
  challenges: [horizontalCentering, inlineBlockGroupCentering, verticalCentering, fullCentering, fullCenteringGrid, baselineAlignmentImageText, mediaObjectAlignment, toolbarSpaceBetween, flexboxCenteringMixedHeight, absolutePositionCenteringPadded, cssModalCenteringFallbacks, rotatedCenterTransform, parallaxContainerCentering, flexboxEvenSpacingCentering, nestedMultiLevelCentering],
  patternIntro,
}
