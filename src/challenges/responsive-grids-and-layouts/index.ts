import type { Topic } from '../../types/challenge'
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

export const topic: Topic = {
  id: 'responsive-grids-and-layouts',
  title: 'Responsive Grids and Layouts',
  challenges: [basicResponsiveGridLayout, twoColumnResponsiveLayout, responsiveImageGalleryGrid, fixedThreeColumnResponsiveGrid, mobileFirstResponsiveGrid, dynamicGridWithNamedAreas, responsiveDashboardCardLayout, masonryStyleResponsiveGrid, contentFirstResponsiveGrid, fluidAspectRatioGrid, cssGridComplexNestedLayout, complexSubgridResponsiveLayout, responsiveMonthlyCalendarGrid, asymmetricalMagazineStyleGrid, overlappingHeroFeatureCards],
}
