import type { Topic } from '../../types/challenge'
import { challenge as basicResponsiveGridLayout } from './basic-responsive-grid-layout/meta'
import { challenge as twoColumnResponsiveLayout } from './two-column-responsive-layout/meta'

export const topic: Topic = {
  id: 'responsive-grids-and-layouts',
  title: 'Responsive Grids and Layouts',
  challenges: [basicResponsiveGridLayout, twoColumnResponsiveLayout],
}
