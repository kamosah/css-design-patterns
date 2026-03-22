import { useState, type CSSProperties, type ReactNode } from 'react'
import s from './Alert.module.css'

type AlertVariant = 'info' | 'success' | 'warning' | 'danger' | 'neutral'

interface AlertProps {
  variant?: AlertVariant
  /** Optional title above the body text */
  title?: ReactNode
  children: ReactNode
  /** Icon slot — render any icon node here */
  icon?: ReactNode
  /** If provided, shows a dismiss × button and calls this on click */
  onDismiss?: () => void
  style?: CSSProperties
}

/*
 * PATTERN: Slot / render prop for icon
 * The `icon` prop accepts any ReactNode — consumers can pass any icon
 * component from any library without Alert importing it. The alert just
 * provides the layout slot (.icon wrapper) and the color context.
 */
export function Alert({
  variant = 'info',
  title,
  children,
  icon,
  onDismiss,
  style,
}: AlertProps) {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  function handleDismiss() {
    setDismissed(true)
    onDismiss?.()
  }

  return (
    <div className={s.alert} data-variant={variant} role="alert" style={style}>
      {icon && <span className={s.icon} aria-hidden="true">{icon}</span>}
      <div className={s.content}>
        {title && <p className={s.title}>{title}</p>}
        <p className={s.body}>{children}</p>
      </div>
      {onDismiss !== undefined && (
        <button
          className={s.dismiss}
          onClick={handleDismiss}
          aria-label="Dismiss"
        >
          ×
        </button>
      )}
    </div>
  )
}
