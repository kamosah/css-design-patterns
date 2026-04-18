import type { Topic } from '../../types/challenge'
import { challenge as basicStickyHeader } from './basic-sticky-header/meta'
import { challenge as stickySidebarNavigation } from './sticky-sidebar-navigation/meta'

export const topic: Topic = {
  id: 'sticky-layouts',
  title: 'Sticky Layouts',
  challenges: [basicStickyHeader, stickySidebarNavigation],
}
