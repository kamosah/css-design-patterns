import type { Topic } from '../../types/challenge'
import { challenge as glassCardComponent } from './glass-card-component/meta'
import { challenge as glassHeaderNavbar } from './glass-header-navbar/meta'
import { challenge as glassToggleSwitch } from './glass-toggle-switch/meta'
import { challenge as glassImageGallery } from './glass-image-gallery/meta'
import { challenge as glassFlipCard } from './glass-flip-card/meta'
import { challenge as glassAccordionPanel } from './glass-accordion-panel/meta'
import { challenge as glass3dCarousel } from './glass-3d-carousel/meta'

export const topic: Topic = {
  id: 'glassmorphism-and-visual-depth',
  title: 'Glassmorphism and Visual Depth',
  challenges: [glassCardComponent, glassHeaderNavbar, glassToggleSwitch, glassImageGallery, glassFlipCard, glassAccordionPanel, glass3dCarousel],
}
