import type { Meta, StoryObj } from "@storybook/react-vite";

// ─── Token data ──────────────────────────────────────────────────────────────

interface Token {
  name: string;
  dark: string;
  light: string;
  description: string;
}

interface TokenGroup {
  label: string;
  tokens: Token[];
}

const TOKEN_GROUPS: TokenGroup[] = [
  {
    label: "Backgrounds",
    tokens: [
      {
        name: "--bg-base",
        dark: "#0f1117",
        light: "#f8fafc",
        description: "Page background",
      },
      {
        name: "--bg-surface",
        dark: "#151821",
        light: "#ffffff",
        description: "Headers, tabs",
      },
      {
        name: "--bg-elevated",
        dark: "#1a1f2e",
        light: "#f1f5f9",
        description: "Hero, topic header, scrollbar track",
      },
      {
        name: "--bg-inset",
        dark: "#1e2333",
        light: "#e8edf5",
        description: "Card hover, code bg, table header",
      },
      {
        name: "--bg-hover",
        dark: "#1e2540",
        light: "#dde3ef",
        description: "Interactive hover state",
      },
      {
        name: "--bg-code",
        dark: "#0d1117",
        light: "#f8fafc",
        description: "Pre / code blocks",
      },
    ],
  },
  {
    label: "Borders",
    tokens: [
      {
        name: "--border",
        dark: "#2d3748",
        light: "#e2e8f0",
        description: "Default border",
      },
      {
        name: "--border-subtle",
        dark: "#1a1f2e",
        light: "#f1f5f9",
        description: "Subtle dividers (table rows)",
      },
    ],
  },
  {
    label: "Text",
    tokens: [
      {
        name: "--text-heading",
        dark: "#f8fafc",
        light: "#0f172a",
        description: "Page & section headings",
      },
      {
        name: "--text-primary",
        dark: "#e2e8f0",
        light: "#1e293b",
        description: "Primary body text",
      },
      {
        name: "--text-body",
        dark: "#cbd5e0",
        light: "#475569",
        description: "Long-form prose (markdown)",
      },
      {
        name: "--text-secondary",
        dark: "#718096",
        light: "#64748b",
        description: "Labels, captions, metadata",
      },
      {
        name: "--text-tertiary",
        dark: "#a0aec0",
        light: "#94a3b8",
        description: "Hover states, h3 headings",
      },
      {
        name: "--text-muted",
        dark: "#4a5568",
        light: "#94a3b8",
        description: "Breadcrumb separators, scrollbar",
      },
    ],
  },
  {
    label: "Accent",
    tokens: [
      {
        name: "--accent",
        dark: "#4f46e5",
        light: "#4f46e5",
        description: "Primary CTA, active tabs, links",
      },
      {
        name: "--accent-hover",
        dark: "#4338ca",
        light: "#4338ca",
        description: "Accent hover state",
      },
      {
        name: "--accent-subtle",
        dark: "#818cf8",
        light: "#6366f1",
        description: "Badge text, decorative highlights",
      },
    ],
  },
  {
    label: "Warning",
    tokens: [
      {
        name: "--warning-bg",
        dark: "#1c1a0e",
        light: "#fefce8",
        description: "Warning bar background",
      },
      {
        name: "--warning-border",
        dark: "#854d0e44",
        light: "#fbbf2444",
        description: "Warning bar border (semitransparent)",
      },
      {
        name: "--warning-text",
        dark: "#fbbf24",
        light: "#92400e",
        description: "Warning bar text & icon",
      },
    ],
  },
  {
    label: "Code",
    tokens: [
      {
        name: "--code-bg",
        dark: "#1e2333",
        light: "#f1f5f9",
        description: "Inline code background",
      },
      {
        name: "--code-text",
        dark: "#7dd3fc",
        light: "#0369a1",
        description: "Inline code & code block text",
      },
    ],
  },
  {
    label: "Editor",
    tokens: [
      {
        name: "--editor-bg",
        dark: "#1e1e1e",
        light: "#fffffe",
        description: "Monaco editor canvas (matches Monaco theme)",
      },
      {
        name: "--skeleton-base",
        dark: "#2d2d2d",
        light: "#e8e8e8",
        description: "Editor skeleton shimmer base",
      },
      {
        name: "--skeleton-highlight",
        dark: "#3a3a3a",
        light: "#f0f0f0",
        description: "Editor skeleton shimmer highlight",
      },
    ],
  },
];

// ─── Swatch component ────────────────────────────────────────────────────────

function TokenSwatch({ token }: { token: Token }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "10px 0",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "8px",
          background: `var(${token.name})`,
          border: "1px solid var(--border)",
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontFamily: "ui-monospace, Consolas, monospace",
            fontSize: "13px",
            color: "var(--text-primary)",
            fontWeight: 600,
            marginBottom: "2px",
          }}
        >
          {token.name}
        </div>
        <div
          style={{
            fontSize: "12px",
            color: "var(--text-secondary)",
            marginBottom: "2px",
          }}
        >
          {token.description}
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <span
            style={{
              fontSize: "11px",
              color: "var(--text-muted)",
              fontFamily: "ui-monospace, monospace",
            }}
          >
            Dark: {token.dark}
          </span>
          <span
            style={{
              fontSize: "11px",
              color: "var(--text-muted)",
              fontFamily: "ui-monospace, monospace",
            }}
          >
            Light: {token.light}
          </span>
        </div>
      </div>
    </div>
  );
}

function ColorPalette() {
  return (
    <div
      style={{
        background: "var(--bg-base)",
        minHeight: "100vh",
        padding: "32px",
      }}
    >
      <h1
        style={{
          color: "var(--text-heading)",
          fontSize: "24px",
          fontWeight: 700,
          marginBottom: "8px",
        }}
      >
        Color Tokens
      </h1>
      <p
        style={{
          color: "var(--text-secondary)",
          fontSize: "14px",
          marginBottom: "40px",
        }}
      >
        25 CSS custom properties in{" "}
        <code
          style={{
            background: "var(--code-bg)",
            color: "var(--code-text)",
            padding: "1px 5px",
            borderRadius: "3px",
            fontSize: "12px",
          }}
        >
          src/styles/tokens.css
        </code>{" "}
        — switch the theme toolbar above to see values update live.
      </p>

      {TOKEN_GROUPS.map((group) => (
        <section key={group.label} style={{ marginBottom: "40px" }}>
          <h2
            style={{
              color: "var(--text-tertiary)",
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "4px",
              paddingBottom: "8px",
              borderBottom: "1px solid var(--border)",
            }}
          >
            {group.label}
            <span
              style={{
                marginLeft: "8px",
                color: "var(--text-muted)",
                fontWeight: 400,
              }}
            >
              {group.tokens.length} token{group.tokens.length !== 1 ? "s" : ""}
            </span>
          </h2>
          <div>
            {group.tokens.map((token) => (
              <TokenSwatch key={token.name} token={token} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

// ─── Story ───────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: "Design System/Color Tokens",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "All 25 CSS custom properties organized by group. Toggle **Dark / Light** in the toolbar to see both theme values applied live.",
      },
    },
  },
};

export default meta;

export const AllTokens: StoryObj = {
  name: "All Tokens",
  render: () => <ColorPalette />,
};
