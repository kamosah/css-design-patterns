import type { CSSProperties } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

// ─── Full token comparison data ───────────────────────────────────────────────

const ALL_TOKENS = [
  // Backgrounds
  { group: "Background", name: "--bg-base", dark: "#0f1117", light: "#f8fafc" },
  {
    group: "Background",
    name: "--bg-surface",
    dark: "#151821",
    light: "#ffffff",
  },
  {
    group: "Background",
    name: "--bg-elevated",
    dark: "#1a1f2e",
    light: "#f1f5f9",
  },
  {
    group: "Background",
    name: "--bg-inset",
    dark: "#1e2333",
    light: "#e8edf5",
  },
  {
    group: "Background",
    name: "--bg-hover",
    dark: "#1e2540",
    light: "#dde3ef",
  },
  { group: "Background", name: "--bg-code", dark: "#0d1117", light: "#f8fafc" },
  // Borders
  { group: "Border", name: "--border", dark: "#2d3748", light: "#e2e8f0" },
  {
    group: "Border",
    name: "--border-subtle",
    dark: "#1a1f2e",
    light: "#f1f5f9",
  },
  // Text
  { group: "Text", name: "--text-heading", dark: "#f8fafc", light: "#0f172a" },
  { group: "Text", name: "--text-primary", dark: "#e2e8f0", light: "#1e293b" },
  { group: "Text", name: "--text-body", dark: "#cbd5e0", light: "#475569" },
  {
    group: "Text",
    name: "--text-secondary",
    dark: "#718096",
    light: "#64748b",
  },
  { group: "Text", name: "--text-tertiary", dark: "#a0aec0", light: "#94a3b8" },
  { group: "Text", name: "--text-muted", dark: "#4a5568", light: "#94a3b8" },
  // Accent
  { group: "Accent", name: "--accent", dark: "#4f46e5", light: "#4f46e5" },
  {
    group: "Accent",
    name: "--accent-hover",
    dark: "#4338ca",
    light: "#4338ca",
  },
  {
    group: "Accent",
    name: "--accent-subtle",
    dark: "#818cf8",
    light: "#6366f1",
  },
  // Warning
  { group: "Warning", name: "--warning-bg", dark: "#1c1a0e", light: "#fefce8" },
  {
    group: "Warning",
    name: "--warning-border",
    dark: "#854d0e44",
    light: "#fbbf2444",
  },
  {
    group: "Warning",
    name: "--warning-text",
    dark: "#fbbf24",
    light: "#92400e",
  },
  // Code
  { group: "Code", name: "--code-bg", dark: "#1e2333", light: "#f1f5f9" },
  { group: "Code", name: "--code-text", dark: "#7dd3fc", light: "#0369a1" },
  // Editor
  { group: "Editor", name: "--editor-bg", dark: "#1e1e1e", light: "#fffffe" },
  {
    group: "Editor",
    name: "--skeleton-base",
    dark: "#2d2d2d",
    light: "#e8e8e8",
  },
  {
    group: "Editor",
    name: "--skeleton-highlight",
    dark: "#3a3a3a",
    light: "#f0f0f0",
  },
];

// ─── Overview component ───────────────────────────────────────────────────────

const INFO_CARD_STYLE: CSSProperties = {
  background: "var(--bg-surface)",
  border: "1px solid var(--border)",
  borderRadius: "8px",
  padding: "20px 24px",
};

function OverviewStory() {
  const groups = [...new Set(ALL_TOKENS.map((t) => t.group))];

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
          margin: "0 0 8px",
        }}
      >
        Theme System
      </h1>
      <p
        style={{
          color: "var(--text-secondary)",
          fontSize: "14px",
          margin: "0 0 40px",
        }}
      >
        How dark and light mode work in CSS Design Patterns Lab.
      </p>

      {/* Mechanism */}
      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            color: "var(--text-tertiary)",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "12px",
          }}
        >
          Mechanism
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "16px",
          }}
        >
          {[
            {
              step: "1",
              title: "CSS Custom Properties",
              body: '25 tokens defined on :root (dark defaults) in src/styles/tokens.css. A [data-theme="light"] block overrides each token for light mode.',
            },
            {
              step: "2",
              title: "Zustand Store",
              body: 'useThemeStore() persists "dark" | "light" to localStorage under css-lab-theme. Defaults to dark.',
            },
            {
              step: "3",
              title: "DOM Attribute",
              body: "App.tsx sets document.documentElement.dataset.theme on every store change. One attribute write flips all 25 tokens simultaneously.",
            },
          ].map(({ step, title, body }) => (
            <div key={step} style={INFO_CARD_STYLE}>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: 700,
                  marginBottom: "12px",
                }}
              >
                {step}
              </div>
              <div
                style={{
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  fontSize: "14px",
                  marginBottom: "6px",
                }}
              >
                {title}
              </div>
              <div
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "13px",
                  lineHeight: 1.6,
                }}
              >
                {body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            color: "var(--text-tertiary)",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "12px",
          }}
        >
          Token Summary
        </h2>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {groups.map((group) => {
            const count = ALL_TOKENS.filter((t) => t.group === group).length;
            return (
              <div
                key={group}
                style={{
                  ...INFO_CARD_STYLE,
                  padding: "12px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "var(--accent-subtle)",
                  }}
                >
                  {count}
                </span>
                <span
                  style={{ fontSize: "13px", color: "var(--text-secondary)" }}
                >
                  {group}
                </span>
              </div>
            );
          })}
          <div
            style={{
              ...INFO_CARD_STYLE,
              padding: "12px 20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderColor: "var(--accent)",
            }}
          >
            <span
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "var(--accent)",
              }}
            >
              {ALL_TOKENS.length}
            </span>
            <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
              Total tokens
            </span>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section>
        <h2
          style={{
            color: "var(--text-tertiary)",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "12px",
          }}
        >
          Dark / Light Comparison
        </h2>
        <div style={{ ...INFO_CARD_STYLE, padding: 0, overflow: "hidden" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "12px",
            }}
          >
            <thead>
              <tr style={{ background: "var(--bg-elevated)" }}>
                <th
                  style={{
                    padding: "10px 16px",
                    textAlign: "left",
                    color: "var(--text-tertiary)",
                    fontWeight: 600,
                    borderBottom: "1px solid var(--border)",
                    width: "60px",
                  }}
                >
                  Group
                </th>
                <th
                  style={{
                    padding: "10px 16px",
                    textAlign: "left",
                    color: "var(--text-tertiary)",
                    fontWeight: 600,
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  Token
                </th>
                <th
                  style={{
                    padding: "10px 16px",
                    textAlign: "left",
                    color: "var(--text-tertiary)",
                    fontWeight: 600,
                    borderBottom: "1px solid var(--border)",
                    width: "180px",
                  }}
                >
                  Dark
                </th>
                <th
                  style={{
                    padding: "10px 16px",
                    textAlign: "left",
                    color: "var(--text-tertiary)",
                    fontWeight: 600,
                    borderBottom: "1px solid var(--border)",
                    width: "180px",
                  }}
                >
                  Light
                </th>
              </tr>
            </thead>
            <tbody>
              {ALL_TOKENS.map((token, i) => (
                <tr
                  key={token.name}
                  style={{
                    background:
                      i % 2 === 0 ? "transparent" : "var(--bg-elevated)",
                  }}
                >
                  <td
                    style={{
                      padding: "8px 16px",
                      color: "var(--text-muted)",
                      fontSize: "11px",
                      borderBottom: "1px solid var(--border-subtle)",
                    }}
                  >
                    {token.group}
                  </td>
                  <td
                    style={{
                      padding: "8px 16px",
                      borderBottom: "1px solid var(--border-subtle)",
                    }}
                  >
                    <code
                      style={{
                        fontFamily: "ui-monospace, monospace",
                        color: "var(--code-text)",
                        fontSize: "12px",
                      }}
                    >
                      {token.name}
                    </code>
                  </td>
                  <td
                    style={{
                      padding: "8px 16px",
                      borderBottom: "1px solid var(--border-subtle)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          borderRadius: "3px",
                          background: token.dark,
                          border: "1px solid var(--border)",
                          flexShrink: 0,
                        }}
                      />
                      <code
                        style={{
                          fontFamily: "ui-monospace, monospace",
                          color: "var(--text-secondary)",
                          fontSize: "11px",
                        }}
                      >
                        {token.dark}
                      </code>
                    </div>
                  </td>
                  <td
                    style={{
                      padding: "8px 16px",
                      borderBottom: "1px solid var(--border-subtle)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          borderRadius: "3px",
                          background: token.light,
                          border: "1px solid var(--border)",
                          flexShrink: 0,
                        }}
                      />
                      <code
                        style={{
                          fontFamily: "ui-monospace, monospace",
                          color: "var(--text-secondary)",
                          fontSize: "11px",
                        }}
                      >
                        {token.light}
                      </code>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// ─── Story ────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: "Design System/Theme",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "How the CSS Lab theme system works: CSS custom properties, Zustand persistence, and DOM attribute application. Switch the toolbar above to see the full table update live.",
      },
    },
  },
};

export default meta;

export const Overview: StoryObj = {
  name: "Overview",
  render: () => <OverviewStory />,
};
