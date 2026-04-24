import type { Topic } from '../../types/challenge'
import { challenge as basicStickyHeader } from './basic-sticky-header/meta'
import { challenge as stickySidebarNavigation } from './sticky-sidebar-navigation/meta'
import { challenge as persistentStickyFooter } from './persistent-sticky-footer/meta'
import { challenge as stickyElementWithOffset } from './sticky-element-with-offset/meta'
import { challenge as stickyTableHeader } from './sticky-table-header/meta'
import { challenge as scrollableContainerSectionStickiness } from './scrollable-container-section-stickiness/meta'
import { challenge as overlappingStickyBanner } from './overlapping-sticky-banner/meta'
import { challenge as nestedStickyElements } from './nested-sticky-elements/meta'
import { challenge as responsiveStickySidebar } from './responsive-sticky-sidebar/meta'
import { challenge as freezeTableHeaderAndColumn } from './freeze-table-header-and-column/meta'

export const topic: Topic = {
  id: 'sticky-layouts',
  title: 'Sticky Layouts',
  challenges: [basicStickyHeader, stickySidebarNavigation, persistentStickyFooter, stickyElementWithOffset, stickyTableHeader, scrollableContainerSectionStickiness, overlappingStickyBanner, nestedStickyElements, responsiveStickySidebar, freezeTableHeaderAndColumn],
}
