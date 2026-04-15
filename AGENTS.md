# Repository Guidelines

## Project Structure & Module Organization
The app is a Vite + React 19 + TypeScript workspace. Core code lives in `src/`: `components/` for route, editor, and UI components, `store/` for Zustand state, `styles/` for global CSS and tokens, and `curriculum/` for topic wiring. Challenge content lives in `src/challenges/<topic-id>/<challenge-id>/` with `meta.ts`, instructions, starter files, and solution files. Storybook stories live beside components as `*.stories.tsx`; docs and screenshots live in `docs/`.

## Build, Test, and Development Commands
Run `npm run dev` to start the app at `http://localhost:5173`. Run `npm run storybook` to work on the design system at `http://localhost:6006`. Use `npm run build` to type-check and create a production bundle in `dist/`. Use `npm run lint` to run ESLint across the repo. Use `npm run build-storybook` before publishing or reviewing larger UI changes.

## Coding Style & Naming Conventions
Write TypeScript and React with functional components and ES modules. Follow the repo’s style: 2-space indentation, single quotes, and no semicolons. Name components and stories in PascalCase, hooks/stores in camelCase, and challenge folders in kebab-case, for example `responsive-testimonial-carousel-grid-visibility`. Keep styles in colocated `*.module.css` files. Use tokens from `src/styles/tokens.css`; avoid hardcoded values and prefer `data-variant` / `data-size` over modifier classes. TypeScript is strict, so avoid `any`, keep imports at the top, and remove unused symbols before committing.

## Testing Guidelines
There is no dedicated unit test runner yet; validation is `npm run lint`, `npm run build`, and story or app verification. For UI work, verify affected stories in Storybook. For challenge content, confirm the starter and solution render correctly in the app and that `meta.ts` exports the expected raw imports. CI runs TypeScript, ESLint, and Chromatic on pushes and PRs to `main`, so treat local lint/build failures as blockers.

## Architecture & Content Notes
Use React Router v7 data loaders for route data and the existing Zustand stores: `editorStore` for per-challenge progress and `themeStore` for dark/light mode. Theme switching is driven by `data-theme` on `<html>`. When adding a challenge, register it in the topic `index.ts` and `src/curriculum/index.ts`. For challenge imagery, use `https://ui-avatars.com/api/` instead of repository-hosted assets.

## Commit & Pull Request Guidelines
Recent history uses short Conventional Commit-style subjects such as `feat: add fullscreen section with content alignment challenge`. Prefer prefixes like `feat:`, `fix:`, and `merge:` with an imperative summary. Pull requests should include a clear description, linked issue when applicable, and screenshots or Storybook references for visual changes. For visible component or challenge updates, include starter and solution screenshots using `docs/screenshot-template.html`. Call out any new challenge paths, token changes, or routing/store updates explicitly.
