import type { Meta, StoryObj } from '@storybook/react'
import type { CSSProperties, ReactNode } from 'react'
import { useState } from 'react'
import { Button } from '../../components/ui/Button/Button'
import { Badge } from '../../components/ui/Badge/Badge'
import { Toggle } from '../../components/ui/Toggle/Toggle'
import { RangeSlider } from '../../components/ui/RangeSlider/RangeSlider'
import { Card } from '../../components/ui/Card/Card'
import { Alert } from '../../components/ui/Alert/Alert'

/* ─── shared demo helpers ──────────────────────────────── */
const Row = ({ children }: { children: ReactNode }) => (
  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
    {children}
  </div>
)

const Section = ({ label, children }: { label: string; children: ReactNode }) => (
  <div style={{ marginBottom: 24 }}>
    <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-tertiary)', marginBottom: 10 }}>{label}</p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {children}
    </div>
  </div>
)

const Code = ({ children }: { children: string }) => (
  <pre style={{ fontSize: 11, background: 'var(--bg-inset)', border: '1px solid var(--border)', borderRadius: 6, padding: '10px 14px', overflowX: 'auto', margin: '10px 0 0', color: 'var(--code-text)', lineHeight: 1.6 }}>
    <code>{children}</code>
  </pre>
)

/* ─── Meta ──────────────────────────────────────────────── */
const meta: Meta = {
  title: 'Design System/Patterns',
  parameters: {
    docs: {
      description: {
        component: 'Living reference for every CSS + React pattern in this component library. Each story shows the pattern in action with annotated code.',
      },
    },
  },
}

export default meta
type Story = StoryObj

/* ═══════════════════════════════════════════════════════════
   1. Data Attribute Variants
═══════════════════════════════════════════════════════════ */
export const DataAttributeVariants: Story = {
  name: '1 · Data Attribute Variants',
  render: () => (
    <div>
      <Section label="Pattern: data-variant drives CSS custom properties">
        <Row>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </Row>
        <Row>
          <Badge variant="success">Easy</Badge>
          <Badge variant="warning">Medium</Badge>
          <Badge variant="danger">Hard</Badge>
          <Badge variant="info">Updated</Badge>
        </Row>
      </Section>
      <Code>{`/* data-variant sets --component tokens, not class names */
.btn { --btn-bg: var(--accent); }
.btn[data-variant='secondary'] { --btn-bg: var(--bg-surface); --btn-border: var(--border); }
.btn[data-variant='ghost']     { --btn-bg: transparent; }
.btn[data-variant='danger']    { --btn-bg: #ef4444; }

/* In React: */
<Button variant="danger">Delete</Button>
// renders: <button data-variant="danger" ...>`}</Code>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
**Why \`data-variant\` over class names?**

- No specificity conflicts — attributes and classes have equal specificity
- Semantically clear — \`data-variant="danger"\` is self-documenting
- Easier to query in JS: \`el.dataset.variant\`
- Decoupled from CSS module class name hashing

The attribute sets a CSS custom property (\`--btn-bg\`, \`--badge-color\`) rather than directly
applying styles, so consumers can override just the token without fighting specificity.
        `.trim(),
      },
    },
  },
}

/* ═══════════════════════════════════════════════════════════
   2. Component Tokens
═══════════════════════════════════════════════════════════ */
export const ComponentTokens: Story = {
  name: '2 · Component Tokens',
  render: () => (
    <div>
      <Section label="Override surface — no CSS file edits needed">
        <Row>
          <Button style={{ '--btn-radius': '0px' }}>Sharp</Button>
          <Button style={{ '--btn-radius': '9999px' }}>Pill</Button>
          <Button style={{ '--btn-bg': '#a855f7', '--btn-color': '#fff' }}>Purple</Button>
        </Row>
        <Row>
          <Badge style={{ '--badge-color': '#a855f7' } as CSSProperties}>Purple</Badge>
          <Badge style={{ '--badge-color': '#ec4899' } as CSSProperties}>Pink</Badge>
          <Badge style={{ '--badge-color': '#14b8a6' } as CSSProperties}>Teal</Badge>
        </Row>
        <Toggle
          label="Green on"
          defaultChecked
          style={{ '--toggle-on': '#22c55e' }}
        />
      </Section>
      <Code>{`/* Component defines token defaults at the root element */
.btn {
  --btn-bg:     var(--accent);   /* default */
  --btn-radius: 6px;
  background:   var(--btn-bg);
  border-radius: var(--btn-radius);
}

/* Consumer overrides inline — creates a new scope */
<Button style={{ '--btn-radius': '0px', '--btn-bg': '#a855f7' }}>
  Custom
</Button>`}</Code>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
CSS custom properties set on an element create a new **scope** for that property.
The component's stylesheet uses \`var(--token)\` which resolves to the nearest ancestor's value —
so an inline style override wins without any specificity fighting.

This is the "component-level token override surface" pattern:
the component controls the defaults, consumers control the exceptions.
        `.trim(),
      },
    },
  },
}

/* ═══════════════════════════════════════════════════════════
   3. Pseudo-element Control
═══════════════════════════════════════════════════════════ */
export const PseudoElementControl: Story = {
  name: '3 · Pseudo-element Control',
  render: () => (
    <div>
      <Section label="::before as the knob — no extra DOM node">
        <Toggle label="Toggle using ::before for the knob" defaultChecked />
      </Section>
      <Code>{`/* Track is the real element; knob is ::before */
.track {
  position: relative;
  background: var(--toggle-off);
  border-radius: var(--toggle-size);
}

.track::before {
  content: '';              /* required — empty string still renders */
  position: absolute;
  border-radius: 50%;       /* circle knob */
  background: #fff;
  transition: transform 0.2s ease-in-out;
}

/* Shift knob right when checked */
.input:checked + .track::before {
  transform: translateX(26px);
}`}</Code>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
\`::before\` and \`::after\` are rendered as the **first/last child** of their host element.
With \`content: ''\` they become real boxes you can size and position.

Key rules:
- \`content\` is required (even an empty string)
- \`position: absolute\` on the pseudo-element requires \`position: relative\` on the host
- Pseudo-elements can't be targeted by JS — keep dynamic state on real elements
        `.trim(),
      },
    },
  },
}

/* ═══════════════════════════════════════════════════════════
   4. :checked State + Adjacent Sibling
═══════════════════════════════════════════════════════════ */
export const CheckedState: Story = {
  name: '4 · :checked + Adjacent Sibling',
  render: () => (
    <div>
      <Section label="Pure CSS state machine — no JS needed for animation">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Toggle label="Dark mode" defaultChecked />
          <Toggle label="Notifications" />
          <Toggle label="Disabled" disabled />
        </div>
      </Section>
      <Code>{`/* The hidden input holds state; the adjacent span is styled */
.input { position: absolute; clip: rect(0 0 0 0); }  /* hidden, still in DOM */
.track { background: var(--toggle-off); }

/* Adjacent sibling combinator: input + span */
.input:checked + .track {
  background: var(--toggle-on);
}

.input:checked + .track::before {
  transform: translateX(26px);  /* slide knob */
}

/* Focus ring on track when input has keyboard focus */
.input:focus-visible + .track {
  outline: 2px solid var(--accent);
}`}</Code>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
The **adjacent sibling combinator** (\`+\`) selects the immediately following sibling.

Structure: \`input.input\` → \`span.track\`
The \`input\` holds all state (\`:checked\`, \`:focus-visible\`, \`:disabled\`).
The \`span\` is purely visual — it reacts to the input's state via CSS.

This keeps the HTML semantic (native checkbox) while enabling full custom visuals.
The CSS also handles \`:focus-visible\` propagation: focus ring on the track, not the hidden input.
        `.trim(),
      },
    },
  },
}

/* ═══════════════════════════════════════════════════════════
   5. WebKit Slider Pseudo-elements
═══════════════════════════════════════════════════════════ */
export const WebKitSlider: Story = {
  name: '5 · WebKit Slider Pseudo-elements',
  render: () => (
    <div>
      <Section label="::-webkit-slider-* + ::-moz-range-* for cross-browser styling">
        <div style={{ maxWidth: 320, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <RangeSlider label="Default" defaultValue={60} />
          <RangeSlider label="Warning" defaultValue={80} thumbColor="var(--warning-text)" trackColor="color-mix(in srgb, var(--warning-text) 30%, transparent)" />
        </div>
      </Section>
      <Code>{`/* Step 1: strip default styling from the input itself */
.range { -webkit-appearance: none; appearance: none; background: transparent; }

/* Step 2: style the track */
.range::-webkit-slider-runnable-track {
  height: var(--range-track-height);
  background: var(--range-track-color);
  border-radius: 3px;
}

/* Step 3: style the thumb — MUST also remove appearance */
.range::-webkit-slider-thumb {
  -webkit-appearance: none;  /* required: unlocks sizing in WebKit */
  width: var(--range-thumb-size);
  height: var(--range-thumb-size);
  border-radius: 50%;

  /* Center on track: (trackHeight - thumbSize) / 2 */
  margin-top: calc((var(--range-track-height) - var(--range-thumb-size)) / 2);
}

/* Firefox equivalents */
.range::-moz-range-track { ... }
.range::-moz-range-thumb { ... }`}</Code>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
\`-webkit-appearance: none\` must be set **twice**:
1. On the \`<input>\` itself — unlocks \`::-webkit-slider-runnable-track\` styling
2. Inside \`::-webkit-slider-thumb\` — unlocks thumb width/height (otherwise it ignores sizing)

The centering formula \`margin-top: (trackHeight - thumbSize) / 2\` works because
WebKit's thumb is positioned relative to the track's top edge, not its center.
With \`calc()\` and CSS tokens, this stays accurate even if you change the sizes.
        `.trim(),
      },
    },
  },
}

/* ═══════════════════════════════════════════════════════════
   6. Compound Components
═══════════════════════════════════════════════════════════ */
export const CompoundComponents: Story = {
  name: '6 · Compound Components',
  render: () => (
    <div>
      <Section label="Card.Header / Card.Body / Card.Footer — no Context needed">
        <Card style={{ maxWidth: 340 }}>
          <Card.Header
            title="Compound component"
            subtitle="Sub-components via static properties"
            action={<Badge variant="accent">Pattern</Badge>}
          />
          <Card.Body>
            Sub-components are attached as static properties on the parent function.
            No React Context required — they are purely presentational.
          </Card.Body>
          <Card.Footer>
            <Button variant="ghost" size="sm">Cancel</Button>
            <Button size="sm">Confirm</Button>
          </Card.Footer>
        </Card>
      </Section>
      <Code>{`/* Attach sub-components as static properties */
function CardRoot({ children }) { return <div>{children}</div> }
function CardHeader({ title }) { return <div>{title}</div> }
function CardBody({ children }) { return <div>{children}</div> }

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
})

/* Usage: */
<Card variant="elevated">
  <Card.Header title="Project" subtitle="Updated 2 min ago" />
  <Card.Body>Content here.</Card.Body>
</Card>`}</Code>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
\`Object.assign(ComponentRoot, { Header, Body, Footer })\` attaches sub-components
as static properties. This gives consumers a \`Card.*\` namespace without requiring
a Context provider or any shared state.

When to use Context instead: if sub-components need to **communicate** (e.g.,
\`<Tabs>\` where \`<Tab.Panel>\` needs to know which tab is active), add a Context.
For purely presentational composition like Card, static properties are sufficient and simpler.
        `.trim(),
      },
    },
  },
}

/* ═══════════════════════════════════════════════════════════
   7. Modern CSS
═══════════════════════════════════════════════════════════ */
function ModernCSSDemo() {
  const [val, setVal] = useState(50)
  return (
      <div>
        <Section label="color-mix() — single token fans out to bg, border, text">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 480 }}>
            <Alert variant="warning">color-mix() derives background and border from one --alert-color token.</Alert>
            <Alert variant="success">No separate --bg / --border tokens needed — the ratios are always consistent.</Alert>
          </div>
        </Section>

        <Section label="@container — responsive to the card's own width">
          <div style={{ maxWidth: 240 }}>
            <Card>
              <Card.Header title="Narrow card" subtitle="Footer stacks via @container" />
              <Card.Footer>
                <Button variant="ghost" size="sm">Cancel</Button>
                <Button size="sm">Save</Button>
              </Card.Footer>
            </Card>
          </div>
        </Section>

        <Section label=":focus-visible — keyboard-only ring">
          <Row>
            <Button>Tab to me to see the ring</Button>
            <Button variant="secondary">Click doesn't show ring</Button>
          </Row>
        </Section>

        <Section label="CSS logical properties — padding-inline / padding-block">
          <Row>
            <Button>padding-inline: var(--btn-px)</Button>
            <Button size="sm">padding-block: var(--btn-py)</Button>
          </Row>
        </Section>

        <Section label="Controlled range with live value display">
          <div style={{ maxWidth: 320 }}>
            <RangeSlider label="Volume" value={val} onChange={setVal} />
          </div>
        </Section>

        <Code>{`/* color-mix() — tint from one token */
.alert {
  background: color-mix(in srgb, var(--alert-color) 10%, transparent);
  border:     1px solid color-mix(in srgb, var(--alert-color) 20%, transparent);
  color:      var(--alert-color);
}

/* @container — component-level responsive layout */
.card { container-type: inline-size; }
@container (max-width: 280px) {
  .footer { flex-direction: column; }
}

/* :focus-visible — ring only for keyboard navigation */
.btn:focus-visible { outline: 2px solid var(--accent); }

/* CSS logical properties — RTL/i18n ready */
.btn { padding-inline: var(--btn-px); padding-block: var(--btn-py); }`}</Code>
      </div>
  )
}

export const ModernCSS: Story = {
  name: '7 · Modern CSS',
  render: () => <ModernCSSDemo />,
  parameters: {
    docs: {
      description: {
        story: `
Four modern CSS features used across the component library:

| Feature | Why use it |
|---|---|
| \`color-mix()\` | Derive tints/shades from one token — consistent ratios automatically |
| \`@container\` | Component-level responsiveness — doesn't depend on viewport size |
| \`:focus-visible\` | Show focus ring only for keyboard nav, not mouse clicks |
| Logical properties | \`padding-inline\`/\`padding-block\` map correctly in RTL languages |
        `.trim(),
      },
    },
  },
}
