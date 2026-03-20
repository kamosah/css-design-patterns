import { curriculum } from '../../curriculum'
import { TopicSection } from './TopicSection'
import s from './CurriculumPage.module.css'

export function CurriculumPage() {
  const totalChallenges = curriculum.reduce((sum, topic) => sum + topic.challenges.length, 0)

  return (
    <div className={s.page}>
      <div className={s.hero}>
        <div className={s.badge}>
          <span className={s.badgeText}>CSS Design Patterns Lab</span>
        </div>
        <h1 className={s.heading}>CSS Patterns</h1>
        <p className={s.subtext}>
          Practice CSS layout and design patterns with an interactive in-browser editor.
        </p>
        <div className={s.stats}>
          <div className={s.stat}>
            <div className={s.statValue}>{curriculum.length}</div>
            <div className={s.statLabel}>Topics</div>
          </div>
          <div className={s.statDivider} />
          <div className={s.stat}>
            <div className={s.statValue}>{totalChallenges}</div>
            <div className={s.statLabel}>Challenges</div>
          </div>
        </div>
      </div>

      <div className={s.content}>
        {curriculum.map((topic, i) => (
          <TopicSection key={topic.id} topic={topic} defaultOpen={i === 0} />
        ))}
      </div>
    </div>
  )
}
