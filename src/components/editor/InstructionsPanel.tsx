import { useState, useMemo, Children, isValidElement } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import type { Challenge } from '../../types/challenge'
import { useThemeStore } from '../../store/themeStore'
import s from './InstructionsPanel.module.css'

type InstructionTab = 'problem' | 'solution'

interface InstructionsPanelProps {
  challenge: Challenge
  showingSolution: boolean
  onToggleSolution: () => void
  onNext: () => void
  isLastChallenge: boolean
}

export function InstructionsPanel({
  challenge,
  showingSolution,
  onToggleSolution,
  onNext,
  isLastChallenge,
}: InstructionsPanelProps) {
  const [activeTab, setActiveTab] = useState<InstructionTab>('problem')
  const { theme } = useThemeStore()
  const isDark = theme === 'dark'

  const markdownComponents = useMemo(() => ({
    pre({ children }: { children: React.ReactNode }) {
      const child = Children.toArray(children)[0]
      if (!isValidElement<{ className?: string; children: string }>(child)) {
        return <pre>{children}</pre>
      }
      const lang = /language-(\w+)/.exec(child.props.className ?? '')?.[1]
      if (!lang) return <pre>{children}</pre>
      return (
        <SyntaxHighlighter
          language={lang}
          style={isDark ? vscDarkPlus : vs}
          customStyle={{
            background: 'var(--bg-code)',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            padding: '12px',
            fontSize: '12px',
            margin: '0 0 12px',
            lineHeight: '1.5',
            overflowX: 'auto',
          }}
          codeTagProps={{
            style: { fontFamily: "ui-monospace, 'Cascadia Code', Consolas, monospace" },
          }}
        >
          {String(child.props.children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      )
    },
    table({ children }: { children: React.ReactNode }) {
      return <div className={s.tableWrapper}><table>{children}</table></div>
    },
  }), [isDark])

  const { solutionHtml, solutionCss } = challenge
  const solutionSrcdoc = useMemo(() => {
    const isFullDocument = /^\s*<!doctype|^\s*<html/i.test(solutionHtml)
    if (isFullDocument) {
      return solutionHtml.replace('</head>', `<style>\n${solutionCss}\n</style>\n</head>`)
    }
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${solutionCss}</style>
</head>
<body>${solutionHtml}</body>
</html>`
  }, [solutionHtml, solutionCss])

  function handleTabClick(tab: InstructionTab) {
    setActiveTab(tab)
    const wantSolution = tab === 'solution'
    if (wantSolution !== showingSolution) onToggleSolution()
  }

  return (
    <div className={s.panel}>
      <div className={s.header}>
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
        <div className={s.meta}>
          <span className={s.badge} data-difficulty={challenge.difficulty}>
            {challenge.difficulty}
          </span>
          {challenge.estimatedMinutes != null && (
            <span className={s.timeBadge}>
              <svg className={s.clockIcon} viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 4.5V8l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {challenge.estimatedMinutes} min
            </span>
          )}
        </div>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {activeTab === 'solution' ? challenge.solutionExplanation : challenge.instructions}
        </ReactMarkdown>

        {activeTab === 'problem' && (
          <div className={s.targetSection}>
            <h2 className={s.targetHeading}>Sample visual output</h2>
            <p className={s.targetSubtitle}>Here's what the output would look like:</p>
            <div className={s.targetPreview}>
              <iframe
                srcDoc={solutionSrcdoc}
                sandbox="allow-scripts"
                title="Expected output"
                className={s.targetIframe}
              />
              <div className={s.targetLabel}>Expected output</div>
            </div>
          </div>
        )}

      </div>

      <div className={s.nextRow}>
        <button className={s.nextBtn} onClick={onNext}>
          {isLastChallenge ? 'Finish ✓' : 'Next →'}
        </button>
      </div>
    </div>
  )
}
