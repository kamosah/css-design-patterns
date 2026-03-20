import type { Topic, Challenge } from '../types/challenge'
import { topic as centeringAlignment } from '../challenges/centering-alignment'

export const curriculum: Topic[] = [centeringAlignment]

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
