/* eslint-disable react-refresh/only-export-components */
import type { CSSProperties, ElementType, ComponentPropsWithoutRef, ReactNode } from 'react'
import s from './Card.module.css'

type CardVariant = 'outlined' | 'elevated' | 'flat' | 'ghost'

/*
 * PATTERN: Polymorphic `as` prop
 * Renders as any element type while keeping correct prop types.
 * Default is <div>; pass as="a" for link cards, as="button" for action cards.
 */
type CardOwnProps<E extends ElementType> = {
  as?: E
  variant?: CardVariant
  children: ReactNode
  className?: string
  style?: CSSProperties & Record<string, string | number>
}

type CardProps<E extends ElementType = 'div'> = CardOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof CardOwnProps<E>>

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
function CardRoot<E extends ElementType = 'div'>({
  as,
  variant = 'outlined',
  children,
  className,
  style,
  ...props
}: CardProps<E>) {
  const Tag = (as ?? 'div') as ElementType
  return (
    <Tag
      className={`${s.card} ${className ?? ''}`.trim()}
      data-variant={variant}
      style={style}
      {...props}
    >
      {children}
    </Tag>
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
