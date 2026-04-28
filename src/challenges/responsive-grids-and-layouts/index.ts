import type { Topic } from '../../types/challenge'
import { challenge as basicResponsiveGridLayout } from './basic-responsive-grid-layout/meta'
import { challenge as twoColumnResponsiveLayout } from './two-column-responsive-layout/meta'
import { challenge as responsiveImageGalleryGrid } from './responsive-image-gallery-grid/meta'
import { challenge as fixedThreeColumnResponsiveGrid } from './fixed-three-column-responsive-grid/meta'
import { challenge as mobileFirstResponsiveGrid } from './mobile-first-responsive-grid/meta'
import { challenge as dynamicGridWithNamedAreas } from './dynamic-grid-with-named-areas/meta'
import { challenge as responsiveDashboardCardLayout } from './responsive-dashboard-card-layout/meta'
import { challenge as masonryStyleResponsiveGrid } from './masonry-style-responsive-grid/meta'

export const topic: Topic = {
  id: 'responsive-grids-and-layouts',
  title: 'Responsive Grids and Layouts',
  challenges: [basicResponsiveGridLayout, twoColumnResponsiveLayout, responsiveImageGalleryGrid, fixedThreeColumnResponsiveGrid, mobileFirstResponsiveGrid, dynamicGridWithNamedAreas, responsiveDashboardCardLayout, masonryStyleResponsiveGrid],
}
