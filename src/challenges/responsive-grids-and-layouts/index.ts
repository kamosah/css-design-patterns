import type { Topic, PatternIntroduction } from '../../types/challenge'
import { challenge as basicResponsiveGridLayout } from './basic-responsive-grid-layout/meta'
import { challenge as twoColumnResponsiveLayout } from './two-column-responsive-layout/meta'
import { challenge as responsiveImageGalleryGrid } from './responsive-image-gallery-grid/meta'
import { challenge as fixedThreeColumnResponsiveGrid } from './fixed-three-column-responsive-grid/meta'
import { challenge as mobileFirstResponsiveGrid } from './mobile-first-responsive-grid/meta'
import { challenge as dynamicGridWithNamedAreas } from './dynamic-grid-with-named-areas/meta'
import { challenge as responsiveDashboardCardLayout } from './responsive-dashboard-card-layout/meta'
import { challenge as masonryStyleResponsiveGrid } from './masonry-style-responsive-grid/meta'
import { challenge as contentFirstResponsiveGrid } from './content-first-responsive-grid/meta'
import { challenge as fluidAspectRatioGrid } from './fluid-aspect-ratio-grid/meta'
import { challenge as cssGridComplexNestedLayout } from './css-grid-complex-nested-layout/meta'
import { challenge as complexSubgridResponsiveLayout } from './complex-subgrid-responsive-layout/meta'
import { challenge as responsiveMonthlyCalendarGrid } from './responsive-monthly-calendar-grid/meta'
import { challenge as asymmetricalMagazineStyleGrid } from './asymmetrical-magazine-style-grid/meta'
import { challenge as overlappingHeroFeatureCards } from './overlapping-hero-feature-cards/meta'

const patternIntro: PatternIntroduction = {
  tagline: "Explore the Responsive Grids and Layouts pattern and understand why it's important.",

  overview: `<p>The <strong>Responsive Grids and Layouts</strong> pattern helps us build flexible, multi-column designs that adapt seamlessly across different screen sizes, ensuring usability and aesthetic consistency from mobile to desktop. This pattern is key to modern web design, where flexibility, scalability, and device compatibility are crucial for user experience.</p>`,

  howItWorks: `<p>This pattern relies on CSS Grid and Flexbox to create flexible column and row structures that adjust based on the available space. Using properties like <code>grid-template-columns</code>, <code>flex-wrap</code>, and media queries, developers define layouts that automatically reflow or resize as the viewport changes. Grid's <code>auto-fit</code> and <code>minmax</code> functions are especially useful for creating fluid layouts without needing explicit breakpoints.</p>`,

  previewHtml: `<div class="grid">
  <div class="card">Card A</div>
  <div class="card">Card B</div>
  <div class="card">Card C</div>
  <div class="card">Card D</div>
  <div class="card">Card E</div>
  <div class="card">Card F</div>
  <div class="card">Card G</div>
  <div class="card">Card H</div>
  <div class="card">Card I</div>
</div>`,

  previewCss: `* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, sans-serif; background: #ffffff; padding: 16px; }
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
}
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  color: #475569;
}`,

  previewCaption: 'Adaptive number of columns that increase or decrease based on the screen width',

  anatomyBlocks: [
    {
      label: "Here's a CSS Grid example for a responsive layout:",
      css: `.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Flexible columns */
  gap: 1rem;     /* Spacing between items */
  padding: 1rem;
}`,
      caption: 'Example CSS for Responsive Grid pattern',
    },
  ],

  anatomyExplanation: `<p>Each grid item automatically adjusts its size to fit the available space, ensuring a neat and responsive layout without hardcoded breakpoints.</p>`,
}

export const topic: Topic = {
  id: 'responsive-grids-and-layouts',
  title: 'Responsive Grids and Layouts',
  patternIntro,
  challenges: [basicResponsiveGridLayout, twoColumnResponsiveLayout, responsiveImageGalleryGrid, fixedThreeColumnResponsiveGrid, mobileFirstResponsiveGrid, dynamicGridWithNamedAreas, responsiveDashboardCardLayout, masonryStyleResponsiveGrid, contentFirstResponsiveGrid, fluidAspectRatioGrid, cssGridComplexNestedLayout, complexSubgridResponsiveLayout, responsiveMonthlyCalendarGrid, asymmetricalMagazineStyleGrid, overlappingHeroFeatureCards],
}
