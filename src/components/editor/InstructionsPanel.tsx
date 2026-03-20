import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import type { Challenge } from '../../types/challenge'
import s from './InstructionsPanel.module.css'

type InstructionTab = 'problem' | 'solution'

interface InstructionsPanelProps {
  challenge: Challenge
  showingSolution: boolean
  onToggleSolution: () => void
}

export function InstructionsPanel({
  challenge,
  showingSolution,
  onToggleSolution,
}: InstructionsPanelProps) {
  const [activeTab, setActiveTab] = useState<InstructionTab>('problem')

  function handleTabClick(tab: InstructionTab) {
    setActiveTab(tab)
    const wantSolution = tab === 'solution'
    if (wantSolution !== showingSolution) onToggleSolution()
  }

  return (
    <div className={s.panel}>
      <div className={s.header}>
        <div className={s.titleRow}>
          <h2 className={s.title}>{challenge.title}</h2>
          <span className={s.badge} data-difficulty={challenge.difficulty}>
            {challenge.difficulty}
          </span>
        </div>
        <div className={s.tabRow}>
          {(['problem', 'solution'] as InstructionTab[]).map((tab) => (
            <button
              key={tab}
              className={`${s.tab} ${activeTab === tab ? s.tabActive : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab === 'solution' ? 'Solution' : 'Problem'}
            </button>
          ))}
        </div>
      </div>

      {/* CSS module scoped to .content handles all markdown element styles */}
      <div className={s.content}>
        <ReactMarkdown>{challenge.instructions}</ReactMarkdown>
      </div>
    </div>
  )
}
