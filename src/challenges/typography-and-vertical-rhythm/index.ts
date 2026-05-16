import type { Topic } from '../../types/challenge'
import { challenge as establishVerticalRhythm } from './establish-vertical-rhythm/meta'
import { challenge as paragraphRhythmSetter } from './paragraph-rhythm-setter/meta'

export const topic: Topic = {
  id: 'typography-and-vertical-rhythm',
  title: 'Typography and Vertical Rhythm',
  challenges: [establishVerticalRhythm, paragraphRhythmSetter],
}
