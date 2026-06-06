import type { CSSProperties, ReactNode } from 'react'
import s from './Kbd.module.css'

interface KbdProps {
  children: ReactNode
  style?: CSSProperties & Record<string, string | number>
}

export function Kbd({ children, style }: KbdProps) {
  return (
    <kbd className={s.kbd} style={style}>
      {children}
    </kbd>
  )
}
