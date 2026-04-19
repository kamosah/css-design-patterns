import type { Topic } from '../../types/challenge'
import { challenge as glassCardComponent } from './glass-card-component/meta'
import { challenge as glassFloatingButton } from './glass-floating-button/meta'

export const topic: Topic = {
  id: 'glassmorphism-and-visual-depth',
  title: 'Glassmorphism and Visual Depth',
  challenges: [glassCardComponent, glassFloatingButton],
}
