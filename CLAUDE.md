# CLAUDE.md — CSS Design Patterns Lab

## Project Overview

An interactive CSS practice IDE where users solve challenges in a split-pane editor with live preview and persistent progress. Built with React 19 + TypeScript + Vite.

## Commands

```bash
npm run dev           # Vite dev server at http://localhost:5173
npm run build         # tsc -b && vite build
npm run lint          # ESLint check
npm run storybook     # Storybook at http://localhost:6006
npm run build-storybook
```

No test framework — TypeScript strict mode + Storybook stories serve as verification.

## Architecture

- **Routing:** React Router v7 with data loaders (no waterfalls)
- **State:** Zustand + `persist` middleware — two stores: `editorStore` (per-challenge progress) and `themeStore` (dark/light)
- **Styling:** CSS Modules + CSS custom properties; theme via `data-theme` on `<html>`
- **Editor:** `@monaco-editor/react` inside a sandboxed `srcdoc` iframe for preview isolation
- **Design system docs:** Storybook 10

### Key directories

```
src/
  challenges/        # Challenge definitions per topic (meta.ts files)
  curriculum/        # Map-keyed registry + lookup helpers
  components/
    editor/          # ChallengePage, EditorArea, PreviewFrame, InstructionsPanel
    ui/              # Reusable design-system components (Button, Badge, Toggle, etc.)
  styles/
    tokens.css       # 25 CSS custom properties (dark + light)
    app.css          # Global resets
  store/             # editorStore.ts, themeStore.ts
  types/             # Challenge & Topic interfaces
```

## CSS Component Conventions

These are strict — always follow them when creating or modifying UI components.

### 1. Token-first — never hardcode values

```css
/* correct */
color: var(--text-primary);
background: var(--bg-surface);

/* wrong */
color: #e2e8f0;
background: #151821;
```

Tokens live in `src/styles/tokens.css`. Use Storybook's **Design System/Color Tokens** story as a visual reference.

### 2. Data-attribute variants, not class names

```tsx
// correct
<span className={s.badge} data-variant={variant} data-size={size}>

// wrong
<span className={`${s.badge} ${s[`badge--${variant}`]}`}>
```

In CSS, set a component-level custom property per variant:

```css
/* correct */
.badge { --badge-color: var(--accent-subtle); }
.badge[data-variant='success'] { --badge-color: #22c55e; }

/* wrong — duplicates declarations */
.badge[data-variant='success'] { color: ...; background: ...; border: ...; }
```

### 3. Component tokens as override surface

Every component exposes key values as CSS custom properties with sensible defaults:

```css
.track {
  --toggle-on:    var(--accent);
  --toggle-off:   var(--border);
  --toggle-size:  24px;
}
```

Accept `style` as `CSSProperties & Record<string, string | number>` for inline overrides.

### 4. Pseudo-elements for decoration only

- Always `content: ''`
- Host must be `position: relative`; pseudo-element `position: absolute`
- Never put semantic content in `::before` / `::after`

### 5. State-driven CSS — no JS class toggling

| State | CSS |
|---|---|
| Hover | `:hover` |
| Active | `:active` |
| Keyboard focus | `:focus-visible` (not `:focus`) |
| Checked | `:checked` |
| Disabled | `:disabled` or `[disabled]` |

Use `:has()` for compound state on wrapper elements.

### 6. Hidden native inputs — adjacent sibling combinator

```css
.input { position: absolute; clip: rect(0 0 0 0); }  /* hidden but in DOM */
.input:checked + .track { background: var(--toggle-on); }
.input:focus-visible + .track { outline: 2px solid var(--accent); }
```

### 7. Compound components — static property pattern

```tsx
export const Card = Object.assign(CardRoot, { Header, Body, Footer })
```

Use React Context only if sub-components need shared state. Pure layout doesn't need it.

### 8. Polymorphic `as` prop for interactive elements

```tsx
type PolymorphicProps<E extends ElementType> = { as?: E } & Omit<ComponentPropsWithoutRef<E>, 'as'>
```

### 9. CSS logical properties

```css
/* correct */
padding-inline: var(--btn-px);
padding-block:  var(--btn-py);

/* wrong */
padding-left: var(--btn-px);
```

## New Component Checklist

```
src/components/ui/MyComponent/
├── MyComponent.tsx          component + prop types
├── MyComponent.module.css   styles with component tokens
└── MyComponent.stories.tsx  Default + AllVariants + States + TokenOverride

src/components/ui/index.ts   add barrel export
```

Story requirements: Default (with controls), All Variants, States (hover/disabled/loading), Token Override demo.

## Accessibility Requirements

- Semantic HTML first (`<button>`, `<label>`, `<input>`) — no `div` click handlers
- Every `<input>` needs a visible label or `aria-label`
- Use `:focus-visible` for focus rings
- Decorative icons: `aria-hidden="true"`
- Dismiss buttons: `aria-label="Dismiss"`
- Disabled: set both `disabled` attribute and `aria-disabled`

## Adding a Challenge

Challenges live in `src/challenges/<topic>/`. Each challenge is a directory with a `meta.ts` file conforming to the `Challenge` interface in `src/types/challenge.ts`. Register in the topic's `index.ts` and the curriculum registry in `src/curriculum/index.ts`.

## TypeScript

Strict mode is on: `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`. No `any`. Keep all imports at the top of files.

## CI

- **ci.yml** — TypeScript check + ESLint on push/PR to `main`
- **chromatic.yml** — Storybook published to Chromatic on push/PR to `main`
