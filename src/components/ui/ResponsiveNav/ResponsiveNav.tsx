import type { CSSProperties } from 'react'
import s from './ResponsiveNav.module.css'

export interface NavLink {
  label: string
  href: string
}

interface ResponsiveNavProps {
  links: NavLink[]
  /** Override component tokens: --nav-bg-mobile, --nav-bg-desktop, --nav-link-color, --nav-breakpoint */
  style?: CSSProperties & Record<string, string | number>
}

export function ResponsiveNav({ links, style }: ResponsiveNavProps) {
  return (
    /*
     * PATTERN: Two sibling navs, each hidden by default via display:none.
     * A pair of @media queries — (max-width: 767px) and (min-width: 768px) —
     * switch exactly one nav to display:block at a time. No JS, no class toggling.
     *
     * The mobile list is vertical (block-level <li> elements).
     * The desktop list becomes a flex row inside the @media (min-width: 768px) rule.
     */
    <div className={s.root} style={style}>
      <nav className={s.mobileNav} aria-label="Mobile navigation">
        <ul className={s.mobileList}>
          {links.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className={s.link}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <nav className={s.desktopNav} aria-label="Desktop navigation">
        <ul className={s.desktopList}>
          {links.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className={s.link}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
