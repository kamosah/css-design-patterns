import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SavedEdit {
  html: string
  css: string
  // Snapshots of the starter files at the time the user first worked on this challenge.
  // Used to detect when upstream challenge content has been updated.
  starterHtmlSnapshot: string
  starterCssSnapshot: string
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
  loadChallenge: (key: string, starterHtml: string, starterCss: string) => void
  setHtml: (html: string) => void
  setCss: (css: string) => void
  toggleSolution: (
    solutionHtml: string,
    solutionCss: string,
    starterHtml: string,
    starterCss: string
  ) => void
  reset: (key: string, starterHtml: string, starterCss: string) => void
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

      loadChallenge(key, starterHtml, starterCss) {
        const saved = get().savedEdits[key]

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
        const { currentKey, savedEdits, css } = get()
        const prev = savedEdits[currentKey]
        set((state) => ({
          html,
          savedEdits: {
            ...state.savedEdits,
            [currentKey]: {
              html,
              css,
              starterHtmlSnapshot: prev?.starterHtmlSnapshot ?? html,
              starterCssSnapshot: prev?.starterCssSnapshot ?? css,
            },
          },
        }))
      },

      setCss(css) {
        const { currentKey, savedEdits, html } = get()
        const prev = savedEdits[currentKey]
        set((state) => ({
          css,
          savedEdits: {
            ...state.savedEdits,
            [currentKey]: {
              html,
              css,
              starterHtmlSnapshot: prev?.starterHtmlSnapshot ?? html,
              starterCssSnapshot: prev?.starterCssSnapshot ?? css,
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
          set({ showingSolution: true, html: solutionHtml, css: solutionCss })
        }
      },

      reset(key, starterHtml, starterCss) {
        set((state) => ({
          html: starterHtml,
          css: starterCss,
          showingSolution: false,
          starterChanged: false,
          savedEdits: {
            ...state.savedEdits,
            [key]: {
              html: starterHtml,
              css: starterCss,
              starterHtmlSnapshot: starterHtml,
              starterCssSnapshot: starterCss,
            },
          },
        }))
      },
    }),
    {
      name: 'css-lab-editor',
      partialize: (state) => ({ savedEdits: state.savedEdits }),
    }
  )
)
