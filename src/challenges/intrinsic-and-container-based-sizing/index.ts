import type { Topic, PatternIntroduction } from '../../types/challenge'
import { challenge as adaptiveCard } from './adaptive-card/meta'
import { challenge as adaptiveDataTable } from './adaptive-data-table/meta'
import { challenge as adaptiveProfileCard } from './adaptive-profile-card/meta'
import { challenge as dashboardWidgetLayout } from './dashboard-widget-layout/meta'
import { challenge as featureGridContainerQueries } from './feature-grid-container-queries/meta'
import { challenge as fluidButtonWidth } from './fluid-button-width/meta'
import { challenge as fluidImageResizer } from './fluid-image-resizer/meta'
import { challenge as minMaxResponsiveGridGallery } from './min-max-responsive-grid-gallery/meta'
import { challenge as responsiveVideoEmbed } from './responsive-video-embed/meta'
import { challenge as squareBoxFiller } from './square-box-filler/meta'
import { challenge as threePanelResponsiveLayout } from './three-panel-responsive-layout/meta'

const patternIntro: PatternIntroduction = {
  tagline: "Explore the Intrinsic and Container-Based Sizing pattern and understand why it's important.",

  overview: `<p>The <strong>Intrinsic and Container-Based Sizing</strong> allows elements to adapt naturally to their content or surrounding container. This makes interfaces more flexible, modular, and maintainable—especially useful in responsive design where fixed dimensions often lead to breakage or visual imbalance.</p>`,

  howItWorks: `<p>Intrinsic sizing uses properties such as <code>min-content</code>, <code>max-content</code>, <code>fit-content</code>, and <code>auto</code> to allow elements to grow or shrink based on their internal content. Container-based sizing, on the other hand, leverages container queries and layout-aware rules that apply styles based on the size of a containing element, not just the viewport.</p>`,

  previewHtml: `<div class="wrapper">
  <button class="btn">Responsive button</button>
</div>`,

  previewCss: `* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #ffffff;
  font-family: system-ui, sans-serif;
}
.btn {
  padding-block: 12px;
  padding-inline: clamp(16px, 5vw, 48px);
  font-size: clamp(13px, 2vw, 16px);
  width: clamp(160px, 40vw, 340px);
  background: #4f86f7;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.15s;
}
.btn:hover { background: #3b70e0; }`,

  previewCaption: 'A responsive button that scales fluidly with the viewport between defined minimum and maximum values',

  anatomyBlocks: [
    {
      label: "Here's an example of intrinsic sizing with an image and a container query:",
      css: `/* Intrinsic sizing for an image */
img {
  max-width: 100%;
  height: auto;  /* Maintains aspect ratio */
}

/* Container query usage */
.container {
  container-type: inline-size; /* Declares container for querying */
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: auto 1fr;
  }
}`,
      caption: 'Example CSS for the Intrinsic and Container-Based Sizing pattern',
    },
  ],

  anatomyExplanation: `<p>This approach allows the child to adapt based on the width of its container rather than relying solely on global breakpoints.</p>`,
}

export const topic: Topic = {
  id: 'intrinsic-and-container-based-sizing',
  title: 'Intrinsic and Container Based Sizing',
  patternIntro,
  challenges: [
    fluidImageResizer,
    squareBoxFiller,
    responsiveVideoEmbed,
    fluidButtonWidth,
    minMaxResponsiveGridGallery,
    threePanelResponsiveLayout,
    adaptiveCard,
    featureGridContainerQueries,
    adaptiveProfileCard,
    dashboardWidgetLayout,
    adaptiveDataTable,
  ],
}
