import { useState } from 'react'
import MonacoEditor from '@monaco-editor/react'
import s from './EditorArea.module.css'

type FileTab = 'html' | 'css'

interface EditorAreaProps {
  html: string
  css: string
  onHtmlChange: (value: string) => void
  onCssChange: (value: string) => void
  starterChanged?: boolean
  onReset?: () => void
}

export function EditorArea({
  html,
  css,
  onHtmlChange,
  onCssChange,
  starterChanged = false,
  onReset,
}: EditorAreaProps) {
  const [activeTab, setActiveTab] = useState<FileTab>('css')

  return (
    <div className={s.wrapper}>
      <div className={s.tabs}>
        <button
          className={`${s.tab} ${activeTab === 'html' ? s.tabActive : ''}`}
          onClick={() => setActiveTab('html')}
        >
          index.html
        </button>
        <button
          className={`${s.tab} ${activeTab === 'css' ? s.tabActive : ''}`}
          onClick={() => setActiveTab('css')}
        >
          styles.css
        </button>
      </div>

      {starterChanged && (
        <div className={s.starterChangedBar}>
          <span className={s.starterChangedText}>Starter code has been updated</span>
          <button className={s.starterChangedBtn} onClick={onReset}>
            Reset to new starter
          </button>
        </div>
      )}

      <div className={s.editor}>
        <MonacoEditor
          path={activeTab === 'html' ? 'index.html' : 'styles.css'}
          language={activeTab === 'html' ? 'html' : 'css'}
          value={activeTab === 'html' ? html : css}
          onChange={(value) => {
            if (activeTab === 'html') onHtmlChange(value ?? '')
            else onCssChange(value ?? '')
          }}
          loading={
            <div className={s.skeleton}>
              {[70, 50, 85, 40, 60, 75, 45, 55, 80, 35].map((width, i) => (
                <div key={i} className={s.skeletonLine} style={{ width: `${width}%` }} />
              ))}
            </div>
          }
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 13,
            lineHeight: 1.6,
            padding: { top: 12 },
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            tabSize: 2,
            renderLineHighlight: 'gutter',
            smoothScrolling: true,
            cursorBlinking: 'smooth',
          }}
        />
      </div>
    </div>
  )
}
