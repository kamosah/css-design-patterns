import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { SearchInput } from './SearchInput'

const meta: Meta<typeof SearchInput> = {
  title: 'Components/SearchInput',
  component: SearchInput,
  parameters: {
    docs: {
      description: {
        component: `
**Patterns:** WebKit pseudo-element suppression · \`::before\` icon overlay · \`pointer-events: none\` · width transition via CSS custom properties

The wrapper's \`::before\` injects the magnifier icon. \`pointer-events: none\` on the pseudo-element ensures clicks fall through to the input. Native search decorations — the browser-injected clear button and search icons — are hidden via \`::-webkit-search-decoration\`, \`::-webkit-search-cancel-button\`, \`::-webkit-search-results-button\`, and \`::-webkit-search-results-decoration\` set to \`display: none\`.

Width expansion on focus is driven entirely by CSS via the \`--search-width\` and \`--search-width-focus\` component tokens. CSS resolves each token to a concrete px value before the browser's transition engine runs, so interpolation works normally despite the values being custom properties.
        `.trim(),
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof SearchInput>

export const Default: Story = {
  args: {
    placeholder: 'Search...',
    disabled: false,
  },
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      <SearchInput placeholder="At rest — 200px wide" />
      <SearchInput placeholder="Focused — expands to 300px" autoFocus />
      <SearchInput defaultValue="Pre-filled query" />
      <SearchInput placeholder="Disabled" disabled />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'At rest (default width) · focused via `autoFocus` (expanded width + accent border) · pre-filled · disabled (`data-disabled` on wrapper, `opacity: 0.5`).',
      },
    },
  },
}

function ControlledDemo() {
  const [query, setQuery] = useState('')
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      <SearchInput value={query} onChange={setQuery} placeholder="Type to search…" />
      <p style={{ fontSize: 12, color: 'var(--text-secondary)', margin: 0 }}>
        Value: <strong style={{ color: 'var(--accent)' }}>{query || '(empty)'}</strong>
      </p>
    </div>
  )
}

export const Controlled: Story = {
  name: 'Controlled (value + onChange)',
  render: () => <ControlledDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Pass `value` + `onChange` for controlled mode. The CSS transition and width expansion are still owned entirely by CSS — React only manages the value.',
      },
    },
  },
}

export const TokenOverride: Story = {
  name: 'Custom Sizes and Colors via Tokens',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      <SearchInput
        placeholder="Compact (160px → 240px)"
        style={{ '--search-width': '160px', '--search-width-focus': '240px' }}
      />
      <SearchInput
        placeholder="Wide (280px → 420px)"
        style={{ '--search-width': '280px', '--search-width-focus': '420px' }}
      />
      <SearchInput
        placeholder="Green accent + pill radius"
        style={{ '--search-accent': '#22c55e', '--search-radius': '999px' }}
      />
      <SearchInput
        placeholder="Purple accent + custom border"
        style={{ '--search-accent': '#a855f7', '--search-border': '#a855f7', '--search-radius': '2px' }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Override `--search-width`, `--search-width-focus`, `--search-accent`, `--search-border`, and `--search-radius` inline to retheme without touching the CSS file.',
      },
    },
  },
}
