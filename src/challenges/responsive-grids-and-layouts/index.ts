import type { Topic } from '../../types/challenge'
import { challenge as basicResponsiveGridLayout } from './basic-responsive-grid-layout/meta'
import { challenge as twoColumnResponsiveLayout } from './two-column-responsive-layout/meta'
import { challenge as responsiveImageGalleryGrid } from './responsive-image-gallery-grid/meta'
import { challenge as fixedThreeColumnResponsiveGrid } from './fixed-three-column-responsive-grid/meta'
import { challenge as mobileFirstResponsiveGrid } from './mobile-first-responsive-grid/meta'

export const topic: Topic = {
  id: 'responsive-grids-and-layouts',
  title: 'Responsive Grids and Layouts',
  challenges: [basicResponsiveGridLayout, twoColumnResponsiveLayout, responsiveImageGalleryGrid, fixedThreeColumnResponsiveGrid, mobileFirstResponsiveGrid],
}
