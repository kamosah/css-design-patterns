import type { Topic } from '../../types/challenge'
import { challenge as glassCardComponent } from './glass-card-component/meta'
import { challenge as glassHeaderNavbar } from './glass-header-navbar/meta'
import { challenge as glassToggleSwitch } from './glass-toggle-switch/meta'

export const topic: Topic = {
  id: 'glassmorphism-and-visual-depth',
  title: 'Glassmorphism and Visual Depth',
  challenges: [glassCardComponent, glassHeaderNavbar, glassToggleSwitch],
}
