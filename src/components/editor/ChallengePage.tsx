/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from 'react'
import { useLoaderData, useNavigate, useLocation, type LoaderFunctionArgs } from 'react-router-dom'
import { Panel, Group as PanelGroup, Separator } from 'react-resizable-panels'
import { findChallenge, findNextChallenge } from '../../curriculum'
import { useEditorStore } from '../../store/editorStore'
import { ThemeToggle } from '../ThemeToggle'
import { CurriculumMap } from './CurriculumMap'
import { InstructionsPanel } from './InstructionsPanel'
import { EditorArea } from './EditorArea'
import { PreviewFrame } from './PreviewFrame'
import s from './ChallengePage.module.css'

// --- Loader -----------------------------------------------------------------

export function loader({ params }: LoaderFunctionArgs) {
  const { topicId, challengeId } = params
  const result = findChallenge(topicId ?? '', challengeId ?? '')
  if (!result) throw new Response('Not Found', { status: 404 })
  return { ...result, topicId: topicId!, challengeId: challengeId! }
}

type LoaderData = ReturnType<typeof loader>

// --- Layout persistence -----------------------------------------------------

const LAYOUT_VERSION = 'v1'

function loadLayout(key: string, defaults: Record<string, number>): Record<string, number> {
  try {
    const saved = localStorage.getItem(`css-lab:layout:${LAYOUT_VERSION}:${key}`)
    if (!saved) return defaults
    const parsed = JSON.parse(saved) as Record<string, number>
    const allValid = Object.keys(defaults).every(
      (k) => typeof parsed[k] === 'number' && parsed[k] >= 5
    )
    return allValid ? parsed : defaults
  } catch {
    return defaults
  }
}

function saveLayout(key: string, layout: Record<string, number>) {
  try {
    localStorage.setItem(`css-lab:layout:${LAYOUT_VERSION}:${key}`, JSON.stringify(layout))
  } catch {
    // ignore quota errors
  }
}

const H_DEFAULTS = { instructions: 35, right: 65 }
const V_DEFAULTS = { editor: 55, preview: 45 }

// --- Component --------------------------------------------------------------

export function ChallengePage() {
  const { topic, challenge, topicId, challengeId } = useLoaderData() as LoaderData
  const navigate = useNavigate()
  const location = useLocation()

  const {
    html,
    css,
    currentKey,
    savedEdits,
    showingSolution,
    starterChanged,
    loadChallenge,
    setHtml,
    setCss,
    toggleSolution,
    reset,
  } = useEditorStore()

  const [isMapOpen, setIsMapOpen] = useState(false)

  const challengeKey = `${topicId}:${challengeId}`
  const nextChallenge = findNextChallenge(topicId, challengeId)

  useEffect(() => {
    const fromNext = (location.state as { fromNext?: boolean } | null)?.fromNext === true
    loadChallenge(challengeKey, challenge.starterHtml, challenge.starterCss, fromNext)
  }, [challengeKey]) // eslint-disable-line react-hooks/exhaustive-deps

  // Derive correct html/css immediately at render time rather than waiting for
  // the useEffect to call loadChallenge. This prevents the PreviewFrame from
  // receiving stale content from the previous challenge on first render.
  const fromNext = (location.state as { fromNext?: boolean } | null)?.fromNext === true
  const isLoaded = currentKey === challengeKey
  const saved = savedEdits[challengeKey]
  const previewHtml = isLoaded ? html : (fromNext ? challenge.starterHtml : (saved?.html ?? challenge.starterHtml))
  const previewCss = isLoaded ? css : (fromNext ? challenge.starterCss : (saved?.css ?? challenge.starterCss))

  return (
    <div className={s.page}>
      <CurriculumMap
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        currentTopicId={topicId}
        currentChallengeId={challengeId}
        onNavigate={(tId, cId) => navigate(cId ? `/challenge/${tId}/${cId}` : `/topic/${tId}`)}
      />
      <header className={s.header}>
        <button className={s.headerBtn} onClick={() => navigate('/')}>
          ← Back
        </button>

        <div className={s.breadcrumb}>
          <span className={s.topicName}>{topic.title}</span>
          <span className={s.breadcrumbSep}>›</span>
          <span className={s.challengeName}>{challenge.title}</span>
        </div>

        <button
          className={s.headerBtn}
          onClick={() => reset(challengeKey, challenge.starterHtml, challenge.starterCss, challenge.solutionHtml, challenge.solutionCss)}
        >
          Reset
        </button>

        <button
          className={s.headerBtn}
          onClick={() => setIsMapOpen(true)}
          aria-label="Open curriculum map"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 2.5h4M1 7h4M1 11.5h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            <path d="M7 5h5.5M7 9.5h5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            <path d="M5 2.5v2.5M5 7v2.5M5 11.5V9.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
          </svg>
        </button>

        <ThemeToggle />
      </header>

      <div className={s.panels}>
        <PanelGroup
          key={challengeKey}
          orientation="horizontal"
          defaultLayout={H_DEFAULTS}
          className={s.panelGroup}
        >
          <Panel id="instructions" defaultSize={H_DEFAULTS.instructions} minSize={15}>
            <InstructionsPanel
              key={challengeKey}
              challenge={challenge}
              showingSolution={showingSolution}
              onToggleSolution={() =>
                toggleSolution(
                  challenge.solutionHtml,
                  challenge.solutionCss,
                  challenge.starterHtml,
                  challenge.starterCss
                )
              }
              isLastChallenge={!nextChallenge}
              onNext={
                nextChallenge
                  ? () => navigate(`/challenge/${nextChallenge.topicId}/${nextChallenge.challengeId}`, { state: { fromNext: true } })
                  : () => navigate('/')
              }
            />
          </Panel>

          <Separator className={s.hSeparator} />

          <Panel id="right" defaultSize={H_DEFAULTS.right} minSize={30}>
            <PanelGroup
              orientation="vertical"
              defaultLayout={loadLayout('editor', V_DEFAULTS)}
              onLayoutChanged={(layout) => saveLayout('editor', layout)}
              className={s.panelGroup}
            >
              <Panel id="editor" defaultSize={V_DEFAULTS.editor} minSize={20}>
                <EditorArea
                  html={previewHtml}
                  css={previewCss}
                  onHtmlChange={setHtml}
                  onCssChange={setCss}
                  starterChanged={starterChanged}
                  onReset={() => reset(challengeKey, challenge.starterHtml, challenge.starterCss, challenge.solutionHtml, challenge.solutionCss)}
                />
              </Panel>

              <Separator className={s.vSeparator} />

              <Panel id="preview" defaultSize={V_DEFAULTS.preview} minSize={15}>
                <PreviewFrame html={previewHtml} css={previewCss} />
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  )
}
