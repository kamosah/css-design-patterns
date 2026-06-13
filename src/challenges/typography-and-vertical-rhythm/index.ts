import type { Topic, PatternIntroduction } from '../../types/challenge'
import { challenge as establishVerticalRhythm } from './establish-vertical-rhythm/meta'
import { challenge as paragraphRhythmSetter } from './paragraph-rhythm-setter/meta'
import { challenge as blockquoteRhythmStyler } from './blockquote-rhythm-styler/meta'
import { challenge as universalRhythmApplier } from './universal-rhythm-applier/meta'
import { challenge as formFieldRhythmEnforcer } from './form-field-rhythm-enforcer/meta'
import { challenge as modularScaleFluidTypography } from './modular-scale-fluid-typography/meta'
import { challenge as variableBasedTypographicScale } from './variable-based-typographic-scale/meta'
import { challenge as fluidVerticalRhythm } from './fluid-vertical-rhythm/meta'
import { challenge as sectionMarginCollapseFixer } from './section-margin-collapse-fixer/meta'
import { challenge as gridGapRhythmLayout } from './grid-gap-rhythm-layout/meta'
import { challenge as contextAwareRhythmContainerQueries } from './context-aware-rhythm-container-queries/meta'
import { challenge as containerResponsiveRhythmAdapter } from './container-responsive-rhythm-adapter/meta'
import { challenge as multiBreakpointRhythmTuner } from './multi-breakpoint-rhythm-tuner/meta'
import { challenge as nestedGridSubgridRhythm } from './nested-grid-subgrid-rhythm/meta'

const patternIntro: PatternIntroduction = {
  tagline: "Explore the Typography and Vertical Rhythm pattern and understand why it's important.",

  overview: `<p>The <strong>Typography and Vertical Rhythm</strong> pattern establishes a consistent, readable flow of content by aligning text elements to a baseline grid. This creates visual harmony and makes reading more comfortable by evenly spacing headings, paragraphs, and UI components. It enhances legibility and gives the page a polished, balanced appearance.</p>`,

  howItWorks: `<p>This pattern uses a consistent <code>line-height</code> and margin system to maintain spacing between typographic elements. The rhythm is often based on a modular scale, where font sizes and spacing units are related proportionally. By carefully defining margins and line heights, text content aligns cleanly regardless of screen size.</p>`,

  previewHtml: `<article class="article">
  <h1 class="heading-1">CSS Design Patterns</h1>
  <p class="body">A set of reusable solutions to common layout and styling problems in web design. Understanding these patterns helps you build consistent, maintainable interfaces.</p>
  <h2 class="heading-2">Why Vertical Rhythm Matters</h2>
  <p class="body">When spacing between elements follows a predictable unit, the eye travels smoothly down the page. Inconsistent gaps interrupt that flow and make content feel harder to read.</p>
</article>`,

  previewCss: `* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 24px;
  background: #ffffff;
  font-family: system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
.article {
  max-width: 480px;
}
.heading-1 {
  font-size: 2.25rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #0f172a;
}
.heading-2 {
  font-size: 1.5rem;
  line-height: 1.3;
  margin-bottom: 1.5rem;
  color: #0f172a;
}
.body {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  color: #475569;
}`,

  previewCaption: 'Article layout with headings and paragraphs aligned to a consistent 1.5rem vertical rhythm unit',

  anatomyBlocks: [
    {
      label: 'Start by setting a base rhythm on the body:',
      css: `body {
  font-size: 16px;       /* Base font size */
  line-height: 1.5;      /* Consistent line height */
}

h1, h2, p {
  margin-bottom: 1.5rem; /* Vertical spacing that aligns with rhythm */
}`,
      caption: 'Example CSS for Typography and Vertical Rhythm pattern',
    },
    {
      label: 'Scale headings proportionally while preserving the rhythm unit:',
      css: `h1 {
  font-size: 2.25rem;
  line-height: 1.2; /* Tighter for large text */
}

h2 {
  font-size: 1.5rem;
  line-height: 1.3;
}

p {
  font-size: 1rem;
  line-height: 1.5; /* Matches the base rhythm */
}`,
      caption: 'Heading scale with line-heights tuned per size',
    },
  ],

  anatomyExplanation: `<p>Consistent vertical spacing is managed through <code>margin-bottom</code>, while <code>line-height</code> provides consistent line height. This ensures text spacing follows a predictable vertical grid, contributing to a visually clean structure.</p>`,
}

export const topic: Topic = {
  id: 'typography-and-vertical-rhythm',
  title: 'Typography and Vertical Rhythm',
  patternIntro,
  challenges: [establishVerticalRhythm, paragraphRhythmSetter, blockquoteRhythmStyler, universalRhythmApplier, formFieldRhythmEnforcer, modularScaleFluidTypography, variableBasedTypographicScale, fluidVerticalRhythm, sectionMarginCollapseFixer, gridGapRhythmLayout, contextAwareRhythmContainerQueries, containerResponsiveRhythmAdapter, multiBreakpointRhythmTuner, nestedGridSubgridRhythm],
}
