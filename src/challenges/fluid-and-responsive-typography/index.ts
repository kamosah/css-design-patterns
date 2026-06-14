import type { Topic, PatternIntroduction } from '../../types/challenge'
import { challenge as fluidHeadingResize } from './fluid-heading-resize/meta'
import { challenge as fluidParagraphText } from './fluid-paragraph-text/meta'
import { challenge as fluidButtonLabel } from './fluid-button-label/meta'
import { challenge as fluidCaptionText } from './fluid-caption-text/meta'
import { challenge as fluidNavigationLinkText } from './fluid-navigation-link-text/meta'
import { challenge as fluidModularScale } from './fluid-modular-scale/meta'
import { challenge as fluidHeroHeadingAndSubheading } from './fluid-hero-heading-and-subheading/meta'
import { challenge as fluidTypographyWithScaleMultipliers } from './fluid-typography-with-scale-multipliers/meta'
import { challenge as fluidHeadingLetterSpacing } from './fluid-heading-letter-spacing/meta'
import { challenge as fluidParagraphLineHeight } from './fluid-paragraph-line-height/meta'
import { challenge as advancedFluidTypeScaleWithLegacyFallback } from './advanced-fluid-type-scale-with-legacy-fallback/meta'
import { challenge as fluidTypographyWithCssContainerQueries } from './fluid-typography-with-css-container-queries/meta'
import { challenge as viewportBasedFluidTypographyWithHeightConstraint } from './viewport-based-fluid-typography-with-height-constraint/meta'
import { challenge as fluidVerticalRhythmSystem } from './fluid-vertical-rhythm-system/meta'
import { challenge as multiRangeFluidTypographyWithMediaQueryOverrides } from './multi-range-fluid-typography-with-media-query-overrides/meta'

const patternIntro: PatternIntroduction = {
  tagline: "Explore the Fluid and Responsive Typography pattern and understand why it's important.",

  overview: `<p>The <strong>Fluid and Responsive Typography</strong> pattern ensures that text scales smoothly across different screen sizes, enhancing readability and preserving hierarchy without relying on abrupt breakpoints. It helps maintain visual harmony in layouts and allows designers to create adaptive experiences that feel consistent on every device.</p>`,

  howItWorks: `<p>This pattern uses relative units (like <code>em</code>, <code>rem</code>, <code>vw</code>) and the <code>clamp()</code> function to define font sizes that grow or shrink proportionally with the viewport. The <code>clamp()</code> function provides a safe, flexible way to set a minimum, preferred, and maximum size—giving you full control over how type responds to screen changes.</p>`,

  previewHtml: `<div class="card">
  <img class="avatar" src="https://ui-avatars.com/api/?name=Cat&background=random&size=120" alt="Cat" />
  <p class="body">Cats have long served as both companions and calming presences in homes and workplaces. Known for their independence and serene demeanor, cats contribute to reduced stress levels and increased emotional balance among their human counterparts.</p>
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
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.avatar {
  width: clamp(60px, 10vw, 120px);
  height: clamp(60px, 10vw, 120px);
  border-radius: 8px;
}
.body {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  line-height: 1.6;
  color: #334155;
}`,

  previewCaption: 'Responsive paragraph and an image',

  anatomyBlocks: [
    {
      label: 'A typical implementation might look like:',
      css: `.responsive-heading {
  font-size: clamp(1.25rem, 2vw + 1rem, 2.5rem); /* Fluid size scaling */
  line-height: 1.3;
  margin-bottom: 1rem;
}

.body-text {
  font-size: clamp(1rem, 1.5vw, 1.125rem);        /* Scales smoothly within range */
  line-height: 1.6;
}`,
      caption: 'Example CSS for the Fluid and Responsive Typography pattern',
    },
  ],

  anatomyExplanation: `<p>This ensures that the text adjusts proportionally by using <code>font-size: clamp</code>, allowing the text to scale within the defined limits.</p>`,
}

export const topic: Topic = {
  id: 'fluid-and-responsive-typography',
  title: 'Fluid and Responsive Typography',
  patternIntro,
  challenges: [fluidHeadingResize, fluidParagraphText, fluidButtonLabel, fluidCaptionText, fluidNavigationLinkText, fluidModularScale, fluidHeroHeadingAndSubheading, fluidTypographyWithScaleMultipliers, fluidHeadingLetterSpacing, fluidParagraphLineHeight, advancedFluidTypeScaleWithLegacyFallback, fluidTypographyWithCssContainerQueries, viewportBasedFluidTypographyWithHeightConstraint, fluidVerticalRhythmSystem, multiRangeFluidTypographyWithMediaQueryOverrides],
}
