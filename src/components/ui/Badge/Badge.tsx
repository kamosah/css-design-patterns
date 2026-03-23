import type { CSSProperties, ReactNode } from 'react'
import s from './Badge.module.css'

type Variant = 'success' | 'warning' | 'danger' | 'accent' | 'info' | 'neutral'
type Size = 'sm' | 'md'

interface BadgeProps {
  variant?: Variant
  size?: Size
  children: ReactNode
  /** Override --badge-color directly for one-off custom colors */
  style?: CSSProperties & { '--badge-color'?: string }
  className?: string
}

export function Badge({
  variant = 'accent',
  size = 'sm',
  children,
  style,
  className,
}: BadgeProps) {
  return (
    <span
      className={`${s.badge} ${className ?? ''}`.trim()}
      data-variant={variant}
      data-size={size}
      style={style}
    >
      {children}
    </span>
  )
}
