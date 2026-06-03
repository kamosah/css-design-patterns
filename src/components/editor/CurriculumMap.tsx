import { useState, useEffect } from 'react'
import { curriculum } from '../../curriculum'
import { useEditorStore } from '../../store/editorStore'
import s from './CurriculumMap.module.css'

interface CurriculumMapProps {
  isOpen: boolean
  onClose: () => void
  currentTopicId: string
  currentChallengeId: string
  onNavigate: (topicId: string, challengeId: string) => void
}

export function CurriculumMap({
  isOpen,
  onClose,
  currentTopicId,
  currentChallengeId,
  onNavigate,
}: CurriculumMapProps) {
  const { savedEdits } = useEditorStore()

  // Track topics the user has explicitly toggled from their default state.
  // Default: current topic = open, all others = closed.
  // Toggling a topic flips it from its default.
  const [toggled, setToggled] = useState<Set<string>>(new Set())

  useEffect(() => {
    if (!isOpen) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  function toggleTopic(topicId: string) {
    setToggled((prev) => {
      const next = new Set(prev)
      if (next.has(topicId)) next.delete(topicId)
      else next.add(topicId)
      return next
    })
  }

  function isTopicExpanded(topicId: string) {
    const defaultOpen = topicId === currentTopicId
    return toggled.has(topicId) ? !defaultOpen : defaultOpen
  }

  return (
    <>
      <div
        className={`${s.backdrop} ${isOpen ? s.backdropVisible : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`${s.drawer} ${isOpen ? s.drawerOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Curriculum map"
        aria-hidden={!isOpen}
      >
        <div className={s.drawerHeader}>
          <span className={s.drawerTitle}>Curriculum</span>
          <button className={s.closeBtn} onClick={onClose} aria-label="Close curriculum map">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className={s.drawerBody}>
          {curriculum.map((topic) => {
            const isCurrentTopic = topic.id === currentTopicId
            const isExpanded = isTopicExpanded(topic.id)
            const visitedCount = topic.challenges.filter(
              (c) => savedEdits[`${topic.id}:${c.id}`]
            ).length

            return (
              <div key={topic.id} className={s.topic}>
                <button
                  className={`${s.topicHeader} ${isCurrentTopic ? s.topicCurrent : ''}`}
                  onClick={() => toggleTopic(topic.id)}
                  aria-expanded={isExpanded}
                >
                  <svg
                    className={`${s.topicChevron} ${isExpanded ? s.topicChevronOpen : ''}`}
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className={s.topicTitle}>{topic.title}</span>
                  <span className={s.topicCount}>
                    {visitedCount}/{topic.challenges.length}
                  </span>
                </button>

                {isExpanded && (
                  <ul className={s.challengeList} role="list">
                    {topic.challenges.map((challenge) => {
                      const key = `${topic.id}:${challenge.id}`
                      const isCurrent =
                        topic.id === currentTopicId && challenge.id === currentChallengeId
                      const isVisited = Boolean(savedEdits[key])

                      return (
                        <li key={challenge.id}>
                          <button
                            className={`${s.challengeBtn} ${isCurrent ? s.challengeCurrent : ''}`}
                            onClick={() => {
                              if (!isCurrent) onNavigate(topic.id, challenge.id)
                              onClose()
                            }}
                            aria-current={isCurrent ? 'page' : undefined}
                          >
                            <span
                              className={s.difficultyDot}
                              data-difficulty={challenge.difficulty}
                              aria-label={challenge.difficulty}
                            />
                            <span className={s.challengeTitle}>{challenge.title}</span>
                            {isVisited && !isCurrent && (
                              <span className={s.visitedDot} aria-label="Visited" />
                            )}
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
