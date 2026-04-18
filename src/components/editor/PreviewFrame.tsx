import { useMemo, useState } from 'react'
import s from './PreviewFrame.module.css'

interface PreviewFrameProps {
  html: string
  css: string
}

export function PreviewFrame({ html, css }: PreviewFrameProps) {
  const [refreshKey, setRefreshKey] = useState(0)
  const [spinning, setSpinning] = useState(false)

  const srcdoc = useMemo(() => {
    const isFullDocument = /^\s*<!doctype|^\s*<html/i.test(html)
    if (isFullDocument) {
      // Inject CSS into the existing <head> rather than wrapping the document
      return html.replace('</head>', `<style>\n${css}\n</style>\n</head>`)
    }
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
${css}
  </style>
</head>
<body>
${html}
</body>
</html>`
  }, [html, css])

  return (
    <div className={s.wrapper}>
      <div className={s.label}>
        <span>Preview</span>
        <button
          className={s.refreshBtn}
          data-spinning={spinning || undefined}
          onClick={() => { setRefreshKey(k => k + 1); setSpinning(true) }}
          onAnimationEnd={() => setSpinning(false)}
          aria-label="Refresh preview"
          title="Refresh preview"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
            <path d="M21 3v5h-5"/>
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
            <path d="M8 16H3v5"/>
          </svg>
        </button>
      </div>
      <iframe
        key={refreshKey}
        srcDoc={srcdoc}
        sandbox="allow-scripts"
        title="Challenge Preview"
        className={s.iframe}
      />
    </div>
  )
}
