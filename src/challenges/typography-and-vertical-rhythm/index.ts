import type { Topic } from '../../types/challenge'
import { challenge as establishVerticalRhythm } from './establish-vertical-rhythm/meta'
import { challenge as paragraphRhythmSetter } from './paragraph-rhythm-setter/meta'
import { challenge as blockquoteRhythmStyler } from './blockquote-rhythm-styler/meta'
import { challenge as universalRhythmApplier } from './universal-rhythm-applier/meta'
import { challenge as formFieldRhythmEnforcer } from './form-field-rhythm-enforcer/meta'
import { challenge as modularScaleFluidTypography } from './modular-scale-fluid-typography/meta'

export const topic: Topic = {
  id: 'typography-and-vertical-rhythm',
  title: 'Typography and Vertical Rhythm',
  challenges: [establishVerticalRhythm, paragraphRhythmSetter, blockquoteRhythmStyler, universalRhythmApplier, formFieldRhythmEnforcer, modularScaleFluidTypography],
}
