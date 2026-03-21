import type { Challenge } from '../../../types/challenge'
import instructions from './instructions.md?raw'
import solutionExplanation from './solution.md?raw'
import starterHtml from './starter.html?raw'
import starterCss from './starter.css?raw'
import solutionHtml from './solution.html?raw'
import solutionCss from './solution.css?raw'

export const challenge: Challenge = {
  id: 'custom-radio-button',
  title: 'Custom Radio Button Control',
  difficulty: 'easy',
  estimatedMinutes: 20,
  instructions,
  solutionExplanation,
  starterHtml,
  starterCss,
  solutionHtml,
  solutionCss,
}
