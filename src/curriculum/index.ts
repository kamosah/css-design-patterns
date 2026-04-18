import type { Topic, Challenge } from '../types/challenge'
import { topic as centeringAlignment } from '../challenges/centering-alignment'
import { topic as customFormControls } from '../challenges/custom-form-controls'
import { topic as responsiveVisibility } from '../challenges/responsive-visibility'
import { topic as accessibleInteractionStates } from '../challenges/accessible-interaction-states'
import { topic as equalHeightFluidColumns } from '../challenges/equal-height-fluid-columns'
import { topic as animatedVisualEffects } from '../challenges/animated-visual-effects'
import { topic as adaptiveFullscreenSections } from '../challenges/adaptive-fullscreen-sections'
import { topic as stickyLayouts } from '../challenges/sticky-layouts'

export const curriculum: Topic[] = [
  centeringAlignment,
  equalHeightFluidColumns,
  animatedVisualEffects,
  customFormControls,
  responsiveVisibility,
  accessibleInteractionStates,
  adaptiveFullscreenSections,
  stickyLayouts,
]

// Pre-built lookup maps — O(1) access instead of iterating on every navigation
const topicById = new Map<string, Topic>()
const challengeByKey = new Map<string, { topic: Topic; challenge: Challenge }>()

for (const topic of curriculum) {
  topicById.set(topic.id, topic)
  for (const challenge of topic.challenges) {
    challengeByKey.set(`${topic.id}:${challenge.id}`, { topic, challenge })
  }
}

export function findChallenge(topicId: string, challengeId: string) {
  return challengeByKey.get(`${topicId}:${challengeId}`) ?? null
}

export function findTopic(topicId: string): Topic | null {
  return topicById.get(topicId) ?? null
}

// Ordered flat list of all {topicId, challengeId} pairs for sequential navigation
const allChallengeKeys = curriculum.flatMap((topic) =>
  topic.challenges.map((challenge) => ({ topicId: topic.id, challengeId: challenge.id }))
)

export function findNextChallenge(
  topicId: string,
  challengeId: string
): { topicId: string; challengeId: string } | null {
  const idx = allChallengeKeys.findIndex(
    (k) => k.topicId === topicId && k.challengeId === challengeId
  )
  return idx !== -1 && idx + 1 < allChallengeKeys.length ? allChallengeKeys[idx + 1] : null
}
