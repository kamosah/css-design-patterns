import type { Topic } from '../../types/challenge'
import { challenge as basicStickyHeader } from './basic-sticky-header/meta'
import { challenge as stickySidebarNavigation } from './sticky-sidebar-navigation/meta'
import { challenge as persistentStickyFooter } from './persistent-sticky-footer/meta'
import { challenge as stickyElementWithOffset } from './sticky-element-with-offset/meta'
import { challenge as stickyTableHeader } from './sticky-table-header/meta'
import { challenge as scrollableContainerSectionStickiness } from './scrollable-container-section-stickiness/meta'

export const topic: Topic = {
  id: 'sticky-layouts',
  title: 'Sticky Layouts',
  challenges: [basicStickyHeader, stickySidebarNavigation, persistentStickyFooter, stickyElementWithOffset, stickyTableHeader, scrollableContainerSectionStickiness],
}
