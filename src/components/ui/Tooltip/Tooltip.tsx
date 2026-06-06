import type { CSSProperties, ReactNode } from 'react'
import s from './Tooltip.module.css'

type Placement = 'top' | 'bottom'

interface TooltipProps {
  content: ReactNode
  placement?: Placement
  children: ReactNode
  style?: CSSProperties & Record<string, string | number>
}

export function Tooltip({ content, placement = 'top', children, style }: TooltipProps) {
  return (
    <span className={s.wrapper} data-placement={placement} style={style}>
      {children}
      <span className={s.tooltip} role="tooltip">
        {content}
      </span>
    </span>
  )
}
