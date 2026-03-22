# Contributing to CSS Design Patterns Lab

This guide covers conventions for adding or modifying UI components in `src/components/ui/`.
Every component here is both functional and educational — it demonstrates one or more scalable
CSS + React patterns. Follow these rules so the codebase stays consistent and the patterns stay clear.

---

## 1. Token Usage

**Always use design tokens. Never hardcode colors, spacing, or radii.**

```css
/* ✓ good */
color: var(--text-primary);
border: 1px solid var(--border);
background: var(--bg-surface);

/* ✗ bad */
color: #e2e8f0;
border: 1px solid #2d3748;
background: #151821;
```

Available tokens are defined in `src/styles/tokens.css`. Run Storybook's **Design System/Color Tokens**
story for a live visual reference.

---

## 2. Variant Pattern — Data Attributes over Class Names

Use `data-variant` and `data-size` attributes to drive CSS variants. Avoid adding extra classes.

```tsx
// ✓ good
<span className={s.badge} data-variant={variant} data-size={size}>

// ✗ bad
<span className={`${s.badge} ${s[`badge--${variant}`]}`}>
```

In the CSS, set a **component-level custom property** per variant — don't apply styles directly:

```css
/* ✓ good — token approach */
.badge { --badge-color: var(--accent-subtle); }
.badge[data-variant='success'] { --badge-color: #22c55e; }

/* ✗ bad — direct styles create duplicated property declarations */
.badge[data-variant='success'] { color: #22c55e; background: ...; border: ...; }
```

The token approach means you change color in one place and all derived values update automatically.

---

## 3. Component-Level Token Override Surface

Every component must expose at least its key colors and sizes as CSS custom properties
so consumers can restyle without touching the component's CSS file.

```css
.track {
  /* Declare component tokens at the root element with sensible defaults */
  --toggle-on:    var(--accent);
  --toggle-off:   var(--border);
  --toggle-size:  24px;
  --toggle-knob:  20px;
  --toggle-width: 50px;
}
```

In the React component, accept `style` props that allow overriding tokens inline:

```tsx
interface ToggleProps {
  style?: CSSProperties & Record<string, string | number>
}

// Consumer usage:
<Toggle style={{ '--toggle-on': '#22c55e' }} label="Green" />
```

---

## 4. Pseudo-element Patterns

Use `::before` and `::after` for purely decorative visual elements — loading spinners,
toggle knobs, radio dots. Rules:

- `content: ''` is required (even empty string)
- The host element must be `position: relative`
- The pseudo-element uses `position: absolute`
- Never put semantic content in a pseudo-element

```css
.track::before {
  content: '';
  position: absolute;
  /* size, position, animation here */
}
```

---

## 5. State-Driven CSS

Use CSS pseudo-classes to style all interactive states. Avoid JS-driven class toggling
for states that CSS handles natively.

| State | CSS | Notes |
|---|---|---|
| Hover | `:hover` | Always |
| Active / pressed | `:active` | For buttons |
| Keyboard focus | `:focus-visible` | **Not** `:focus` — avoids mouse click rings |
| Checked | `:checked` | Native checkboxes / radios |
| Disabled | `:disabled` or `[disabled]` | Set `opacity: 0.5; cursor: not-allowed` |

For compound state (disabled wrapper), use `:has()`:

```css
.wrapper:has(input:disabled) {
  opacity: 0.5;
  cursor: not-allowed;
}
```

---

## 6. Adjacent Sibling Combinator for Hidden Inputs

When hiding a native input but keeping it in the DOM for accessibility,
use the adjacent sibling combinator (`+`) to style the visual proxy:

```css
/* The input holds state; the span reacts */
.input { position: absolute; clip: rect(0 0 0 0); }   /* hidden, in DOM */
.input:checked + .track { background: var(--toggle-on); }
.input:focus-visible + .track { outline: 2px solid var(--accent); }
```

This keeps native keyboard navigation and screen reader semantics intact.

---

## 7. Compound Components

For components with named sub-sections (Card, Tabs, etc.), use the static-property pattern:

```tsx
function CardRoot({ children }) { ... }
function CardHeader({ title }) { ... }

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
})
```

Use React Context only if sub-components need to **share state** with the parent.
Pure layout/presentational composition doesn't need Context.

---

## 8. Polymorphic `as` Prop

Interactive components that could render as either a `<button>` or an `<a>` should
support the polymorphic `as` prop pattern:

```tsx
type PolymorphicProps<E extends ElementType> = {
  as?: E
} & Omit<ComponentPropsWithoutRef<E>, 'as'>

function Button<E extends ElementType = 'button'>({ as, ...props }: PolymorphicProps<E>) {
  const Tag = as ?? 'button'
  return <Tag {...props} />
}

// Usage:
<Button as="a" href="/">Go back</Button>
```

---

## 9. Storybook Story Requirements

Every component **must** have a `.stories.tsx` file covering:

1. **Default** — single interactive Storybook controls story
2. **All Variants** — all `data-variant` values in one render
3. **States** — hover, disabled, loading (if applicable)
4. **Token Override** — demonstrate at least one inline token override

Stories go alongside the component: `ComponentName/ComponentName.stories.tsx`

Use the `docs.description.component` field to document the key CSS patterns:

```tsx
parameters: {
  docs: {
    description: {
      component: '**Patterns:** `data-variant` · `color-mix()` tint\n\n...',
    },
  },
},
```

---

## 10. Accessibility Requirements

- Semantic HTML first (`<button>`, `<label>`, `<input>`) — no `div` click handlers
- Every `<input>` must have a visible label or `aria-label`
- Interactive elements must be keyboard-reachable
- Use `:focus-visible` (not `:focus`) for focus rings
- Decorative icons use `aria-hidden="true"`
- Dismiss buttons use `aria-label="Dismiss"`
- Disabled state must set both `disabled` attribute (for form semantics) and `aria-disabled` (for custom elements)

---

## 11. CSS Logical Properties

Use logical properties for padding and margin so components work correctly in RTL languages:

```css
/* ✓ logical */
padding-inline: var(--btn-px);   /* left + right in LTR; right + left in RTL */
padding-block: var(--btn-py);    /* top + bottom always */

/* ✗ physical (avoid in new components) */
padding-left: var(--btn-px);
padding-top: var(--btn-py);
```

---

## File Checklist for a New Component

```
src/components/ui/MyComponent/
├── MyComponent.tsx          ✓ component + prop types
├── MyComponent.module.css   ✓ styles with component tokens
└── MyComponent.stories.tsx  ✓ Default + AllVariants + States + TokenOverride

src/components/ui/index.ts   ✓ add barrel export
```
