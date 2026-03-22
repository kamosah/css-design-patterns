import type { CSSProperties, ReactNode } from 'react'
import s from './Card.module.css'

type CardVariant = 'outlined' | 'elevated' | 'flat' | 'ghost'

interface CardProps {
  variant?: CardVariant
  children: ReactNode
  className?: string
  style?: CSSProperties
}

interface CardHeaderProps {
  title: ReactNode
  subtitle?: ReactNode
  /** Slot for a badge, icon, or action button in the top-right */
  action?: ReactNode
}

interface CardBodyProps {
  children: ReactNode
  className?: string
}

interface CardFooterProps {
  children: ReactNode
}

/*
 * PATTERN: Compound component via static properties
 * No React Context needed — sub-components are purely presentational.
 * Consumers compose them: <Card><Card.Header title="…"/><Card.Body>…</Card.Body></Card>
 */
function CardRoot({ variant = 'outlined', children, className, style }: CardProps) {
  return (
    <div
      className={`${s.card} ${className ?? ''}`.trim()}
      data-variant={variant}
      style={style}
    >
      {children}
    </div>
  )
}

function CardHeader({ title, subtitle, action }: CardHeaderProps) {
  return (
    <div className={s.header}>
      <div>
        <p className={s.headerTitle}>{title}</p>
        {subtitle && <p className={s.headerSubtitle}>{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  )
}

function CardBody({ children, className }: CardBodyProps) {
  return (
    <div className={`${s.body} ${className ?? ''}`.trim()}>
      {children}
    </div>
  )
}

function CardFooter({ children }: CardFooterProps) {
  return <div className={s.footer}>{children}</div>
}

/* Attach sub-components as static properties */
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
})
