/* eslint-disable react-refresh/only-export-components */
import { useMemo, useState } from 'react'
import { Link, useLoaderData, useNavigate, type LoaderFunctionArgs } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { findTopic } from '../../curriculum'
import { useThemeStore } from '../../store/themeStore'
import type { Topic } from '../../types/challenge'
import { CurriculumMap } from '../editor/CurriculumMap'
import { ThemeToggle } from '../ThemeToggle'
import s from './PatternIntroPage.module.css'

// --- Loader -----------------------------------------------------------------

export function loader({ params }: LoaderFunctionArgs) {
  const { topicId } = params
  const topic = findTopic(topicId ?? '')
  if (!topic || !topic.patternIntro) throw new Response('Not Found', { status: 404 })
  return { topic, topicId: topicId! }
}

type LoaderData = { topic: Topic; topicId: string }

// --- Component --------------------------------------------------------------

export function PatternIntroPage() {
  const { topic, topicId } = useLoaderData() as LoaderData
  const navigate = useNavigate()
  const { theme } = useThemeStore()
  const isDark = theme === 'dark'
  const intro = topic.patternIntro!

  const [isMapOpen, setIsMapOpen] = useState(false)

  const srcdoc = useMemo(
    () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${intro.previewCss}</style>
</head>
<body>${intro.previewHtml}</body>
</html>`,
    [intro.previewCss, intro.previewHtml]
  )

  const firstChallenge = topic.challenges[0]

  return (
    <div className={s.page}>
      <CurriculumMap
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        currentTopicId={topicId}
        currentChallengeId={null}
        onNavigate={(tId, cId) => navigate(cId ? `/challenge/${tId}/${cId}` : `/topic/${tId}`)}
      />
      <header className={s.header}>
        <button className={s.headerBtn} onClick={() => navigate('/')}>
          ← Back
        </button>
        <span className={s.headerTitle}>{topic.title}</span>
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

      <div className={s.main}>
        <div className={s.scroll}>
          <div className={s.container}>
            <nav className={s.breadcrumb} aria-label="Breadcrumb">
              <Link to="/" className={s.breadcrumbLink}>Home</Link>
              <span className={s.breadcrumbSep} aria-hidden="true">›</span>
              <span>{topic.title}</span>
            </nav>

            <div className={s.titleRow}>
              <h1 className={s.title}>The {topic.title} Pattern</h1>
            </div>
            <p className={s.tagline}>{intro.tagline}</p>

            {/* All HTML strings come from authored meta.ts source files — no user or network input */}
            <div
              className={s.overview}
              dangerouslySetInnerHTML={{ __html: intro.overview }}
            />

            <section className={s.section}>
              <h2 className={s.sectionHeading}>How the pattern works</h2>
              <div
                className={s.howItWorks}
                dangerouslySetInnerHTML={{ __html: intro.howItWorks }}
              />

              <div className={s.previewBox}>
                <div className={s.previewHeader}>
                  <span className={s.previewLabel}>Output</span>
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
                    <path d="M1 6.5L6 1.5L11 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <iframe
                  srcDoc={srcdoc}
                  sandbox="allow-scripts"
                  title="Pattern preview"
                  className={s.previewIframe}
                />
                <p className={s.previewCaption}>{intro.previewCaption}</p>
              </div>
            </section>

            <section className={s.section}>
              <h2 className={s.sectionHeading}>Pattern anatomy in CSS</h2>
              <p className={s.anatomyLabel}>{intro.anatomyLabel}</p>

              <div className={s.codeWrapper}>
                <div className={s.codeHeader}>
                  <span className={s.codeFilename}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 1h6l3 3v7a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                      <path d="M8 1v3h3" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                    </svg>
                    main.css
                  </span>
                  <span className={s.codeLang}>CSS</span>
                </div>
                <SyntaxHighlighter
                  language="css"
                  style={isDark ? vscDarkPlus : vs}
                  showLineNumbers
                  customStyle={{
                    background: 'var(--bg-code)',
                    border: 'none',
                    borderRadius: '0 0 6px 6px',
                    margin: 0,
                    fontSize: '13px',
                    lineHeight: '1.6',
                    overflowX: 'auto',
                  }}
                  codeTagProps={{
                    style: { fontFamily: "ui-monospace, 'Cascadia Code', Consolas, monospace" },
                  }}
                >
                  {intro.anatomyCss}
                </SyntaxHighlighter>
              </div>
              <p className={s.codeCaption}>{intro.anatomyCaption}</p>

              <div
                className={s.anatomyExplanation}
                dangerouslySetInnerHTML={{ __html: intro.anatomyExplanation }}
              />
            </section>

            <div className={s.bottomSpacer} />
          </div>
        </div>

        <div className={s.bottomBar}>
          <button
            className={s.cta}
            onClick={() =>
              navigate(`/challenge/${topicId}/${firstChallenge.id}`)
            }
          >
            Let's Solve Problems
          </button>
        </div>
      </div>
    </div>
  )
}
