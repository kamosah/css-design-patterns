import type { Topic } from '../../types/challenge'
import { challenge as glassCardComponent } from './glass-card-component/meta'
import { challenge as glassHeaderNavbar } from './glass-header-navbar/meta'
import { challenge as glassTooltipOnHover } from './glass-tooltip-on-hover/meta'
import { challenge as glassSearchInput } from './glass-search-input/meta'

export const topic: Topic = {
  id: 'glassmorphism-and-visual-depth',
  title: 'Glassmorphism and Visual Depth',
  challenges: [glassCardComponent, glassHeaderNavbar, glassTooltipOnHover, glassSearchInput],
}
