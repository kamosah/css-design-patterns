# CSS Design Patterns Lab

A local, interactive CSS practice IDE for CSS Design Patterns. Work through challenges in a split-pane editor with a live preview, persistent progress, and solution reveal.

## Features

- **Curriculum browser** — expandable topic accordion with difficulty-tagged challenge cards
- **Split-pane IDE** — resizable instructions | editor | preview layout with persisted panel sizes
- **Monaco editor** — VS Code-quality editing with HTML and CSS file tabs, per-model undo history
- **Live iframe preview** — sandboxed `srcdoc` iframe rebuilt on every keystroke, fully isolated from the shell
- **Solution toggle** — swap starter ↔ solution code in the editor via Problem/Solution tabs
- **Progress persistence** — user edits saved to `localStorage` per challenge via Zustand
- **Starter-change detection** — notifies when upstream challenge files have been updated and offers a one-click reset to the new starter

## Tech Stack

| Concern | Library |
|---|---|
| Shell | React 19 + TypeScript + Vite |
| Routing | React Router v7 (data router) |
| Code editor | `@monaco-editor/react` |
| Resizable panels | `react-resizable-panels` |
| State / persistence | Zustand with `persist` middleware |
| Instructions | `react-markdown` |
| Styles | CSS Modules |
| Challenge content | `.html`, `.css`, `.md` files via Vite `?raw` imports |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Adding a Challenge

1. Create a folder under `src/challenges/<topic-id>/<challenge-id>/`
2. Add the required files:

```
<challenge-id>/
├── meta.ts           # wires all imports, exports a Challenge object
├── instructions.md   # markdown instructions shown in the left panel
├── starter.html
├── starter.css
├── solution.html
└── solution.css
```

3. Export the challenge from the topic's `index.ts` and add the topic to `src/curriculum/index.ts`

### `meta.ts` template

```ts
import type { Challenge } from '../../../types/challenge'
import instructions from './instructions.md?raw'
import starterHtml from './starter.html?raw'
import starterCss from './starter.css?raw'
import solutionHtml from './solution.html?raw'
import solutionCss from './solution.css?raw'

export const challenge: Challenge = {
  id: 'your-challenge-id',
  title: 'Your Challenge Title',
  difficulty: 'easy', // 'easy' | 'medium' | 'hard'
  instructions,
  starterHtml,
  starterCss,
  solutionHtml,
  solutionCss,
}
```

## Project Structure

```
src/
├── App.tsx                          # createBrowserRouter setup
├── main.tsx
├── types/challenge.ts               # Challenge, Topic interfaces
├── curriculum/index.ts              # Map-keyed registry, findChallenge()
├── store/editorStore.ts             # Zustand store
├── challenges/
│   └── <topic-id>/
│       ├── index.ts                 # Topic metadata
│       └── <challenge-id>/
│           ├── meta.ts
│           ├── instructions.md
│           ├── starter.html / .css
│           └── solution.html / .css
├── components/
│   ├── NotFoundPage.tsx
│   ├── curriculum/
│   │   ├── CurriculumPage.tsx
│   │   └── TopicSection.tsx
│   └── editor/
│       ├── ChallengePage.tsx        # IDE route with data loader
│       ├── InstructionsPanel.tsx
│       ├── EditorArea.tsx
│       └── PreviewFrame.tsx
└── styles/app.css                   # Shell-only global styles
```
