import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

const InfoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const WarnIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: `
**Patterns:** slot/icon prop · \`color-mix()\` tint · \`data-variant\` · dismissible state

The \`icon\` prop is a render slot — pass any icon node from any library.
The \`--alert-color\` token fans out to border, background, and icon color using \`color-mix()\`.
Dismiss state uses \`useState\` (the one place JS state is genuinely needed — CSS can't remove DOM nodes).
        `.trim(),
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger', 'neutral'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    variant: 'info',
    children: 'Your session will expire in 10 minutes.',
  },
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 480 }}>
      <Alert variant="info" icon={<InfoIcon />}>Build completed successfully in 1.2s.</Alert>
      <Alert variant="success" title="Changes saved" icon={<CheckIcon />}>Your settings have been updated.</Alert>
      <Alert variant="warning" icon={<WarnIcon />}>Starter code has been updated — reset to apply changes.</Alert>
      <Alert variant="danger" title="Build failed" icon={<InfoIcon />}>Unexpected token at line 42.</Alert>
      <Alert variant="neutral">No changes detected since last save.</Alert>
    </div>
  ),
}

export const WithTitle: Story = {
  name: 'With Title',
  render: () => (
    <Alert variant="warning" title="Deprecation notice" icon={<WarnIcon />} style={{ maxWidth: 480 }}>
      This API will be removed in the next major version. Migrate to the new endpoint before upgrading.
    </Alert>
  ),
}

export const Dismissible: Story = {
  name: 'Dismissible',
  render: () => (
    <div style={{ maxWidth: 480, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Alert variant="info" icon={<InfoIcon />} onDismiss={() => {}}>
        Click the × to dismiss this alert.
      </Alert>
      <Alert variant="success" title="Deploy succeeded" onDismiss={() => {}}>
        Version 2.4.1 is now live. View the deployment log for details.
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pass `onDismiss` to show the × button. Dismiss state is managed internally with `useState`.',
      },
    },
  },
}
