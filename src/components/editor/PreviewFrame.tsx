import { useMemo } from 'react'
import s from './PreviewFrame.module.css'

interface PreviewFrameProps {
  html: string
  css: string
}

export function PreviewFrame({ html, css }: PreviewFrameProps) {
  const srcdoc = useMemo(
    () => `<!DOCTYPE html>
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
</html>`,
    [html, css]
  )

  return (
    <div className={s.wrapper}>
      <div className={s.label}>Preview</div>
      <iframe
        srcDoc={srcdoc}
        sandbox="allow-scripts"
        title="Challenge Preview"
        className={s.iframe}
      />
    </div>
  )
}
