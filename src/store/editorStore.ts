import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SavedEdit {
  html: string
  css: string
  // Snapshots of the starter files at the time the user first worked on this challenge.
  // Used to detect when upstream challenge content has been updated.
  starterHtmlSnapshot: string
  starterCssSnapshot: string
  // User's edits to the solution panel (independent from starter edits).
  solutionHtml?: string
  solutionCss?: string
}

interface EditorStore {
  // Persisted: user edits keyed by "topicId:challengeId"
  savedEdits: Record<string, SavedEdit>

  // Ephemeral: active session state
  currentKey: string
  html: string
  css: string
  showingSolution: boolean
  starterChanged: boolean // true when current starter differs from saved snapshot

  // Actions
  loadChallenge: (key: string, starterHtml: string, starterCss: string, forceStarter?: boolean) => void
  setHtml: (html: string) => void
  setCss: (css: string) => void
  toggleSolution: (
    solutionHtml: string,
    solutionCss: string,
    starterHtml: string,
    starterCss: string
  ) => void
  reset: (key: string, starterHtml: string, starterCss: string, solutionHtml: string, solutionCss: string) => void
}

export const useEditorStore = create<EditorStore>()(
  persist(
    (set, get) => ({
      savedEdits: {},
      currentKey: '',
      html: '',
      css: '',
      showingSolution: false,
      starterChanged: false,

      loadChallenge(key, starterHtml, starterCss, forceStarter = false) {
        const saved = forceStarter ? null : get().savedEdits[key]

        // Detect if the challenge source files changed since the user last worked on it
        const starterChanged = saved != null && (
          saved.starterHtmlSnapshot !== starterHtml ||
          saved.starterCssSnapshot !== starterCss
        )

        set({
          currentKey: key,
          html: saved?.html ?? starterHtml,
          css: saved?.css ?? starterCss,
          showingSolution: false,
          starterChanged,
          // Persist a snapshot of the starter on first visit (no saved edit yet)
          savedEdits: saved
            ? get().savedEdits
            : {
                ...get().savedEdits,
                [key]: {
                  html: starterHtml,
                  css: starterCss,
                  starterHtmlSnapshot: starterHtml,
                  starterCssSnapshot: starterCss,
                },
              },
        })
      },

      setHtml(html) {
        const { currentKey, savedEdits, css, showingSolution } = get()
        const prev = savedEdits[currentKey]
        set((state) => ({
          html,
          savedEdits: {
            ...state.savedEdits,
            [currentKey]: showingSolution
              ? { ...prev, solutionHtml: html }
              : {
                  html,
                  css,
                  starterHtmlSnapshot: prev?.starterHtmlSnapshot ?? html,
                  starterCssSnapshot: prev?.starterCssSnapshot ?? css,
                  solutionHtml: prev?.solutionHtml,
                  solutionCss: prev?.solutionCss,
                },
          },
        }))
      },

      setCss(css) {
        const { currentKey, savedEdits, html, showingSolution } = get()
        const prev = savedEdits[currentKey]
        set((state) => ({
          css,
          savedEdits: {
            ...state.savedEdits,
            [currentKey]: showingSolution
              ? { ...prev, solutionCss: css }
              : {
                  html,
                  css,
                  starterHtmlSnapshot: prev?.starterHtmlSnapshot ?? html,
                  starterCssSnapshot: prev?.starterCssSnapshot ?? css,
                  solutionHtml: prev?.solutionHtml,
                  solutionCss: prev?.solutionCss,
                },
          },
        }))
      },

      toggleSolution(solutionHtml, solutionCss, starterHtml, starterCss) {
        const { showingSolution, savedEdits, currentKey } = get()
        if (showingSolution) {
          const saved = savedEdits[currentKey]
          set({
            showingSolution: false,
            html: saved?.html ?? starterHtml,
            css: saved?.css ?? starterCss,
          })
        } else {
          const saved = savedEdits[currentKey]
          set({
            showingSolution: true,
            html: saved?.solutionHtml ?? solutionHtml,
            css: saved?.solutionCss ?? solutionCss,
          })
        }
      },

      reset(key, starterHtml, starterCss, solutionHtml, solutionCss) {
        const { showingSolution } = get()
        if (showingSolution) {
          set((state) => ({
            html: solutionHtml,
            css: solutionCss,
            savedEdits: {
              ...state.savedEdits,
              [key]: {
                ...state.savedEdits[key],
                solutionHtml,
                solutionCss,
              },
            },
          }))
        } else {
          set((state) => ({
            html: starterHtml,
            css: starterCss,
            showingSolution: false,
            starterChanged: false,
            savedEdits: {
              ...state.savedEdits,
              [key]: {
                ...state.savedEdits[key],
                html: starterHtml,
                css: starterCss,
                starterHtmlSnapshot: starterHtml,
                starterCssSnapshot: starterCss,
              },
            },
          }))
        }
      },
    }),
    {
      name: 'css-lab-editor',
      partialize: (state) => ({ savedEdits: state.savedEdits }),
    }
  )
)
