import type { CSSProperties } from 'react'
import s from './RangeSlider.module.css'

interface RangeSliderProps {
  min?: number
  max?: number
  step?: number
  /** Uncontrolled default value */
  defaultValue?: number
  /** Controlled value */
  value?: number
  onChange?: (value: number) => void
  label?: string
  /** Override --range-track-color component token */
  trackColor?: string
  /** Override --range-thumb-color component token */
  thumbColor?: string
  disabled?: boolean
  style?: CSSProperties & Record<string, string | number>
}

export function RangeSlider({
  min = 0,
  max = 100,
  step = 1,
  defaultValue,
  value,
  onChange,
  label,
  trackColor,
  thumbColor,
  disabled = false,
  style,
}: RangeSliderProps) {
  const tokenOverrides: Record<string, string> = {}
  if (trackColor) tokenOverrides['--range-track-color'] = trackColor
  if (thumbColor)  tokenOverrides['--range-thumb-color'] = thumbColor

  const isControlled = value !== undefined

  return (
    <div className={s.wrapper}>
      {label && (
        <div className={s.header}>
          <span className={s.label}>{label}</span>
          <span className={s.value}>
            {isControlled ? value : (defaultValue ?? min)}
          </span>
        </div>
      )}
      <input
        type="range"
        className={s.range}
        min={min}
        max={max}
        step={step}
        {...(isControlled
          ? { value, onChange: (e) => onChange?.(Number(e.target.value)) }
          : { defaultValue: defaultValue ?? min }
        )}
        disabled={disabled}
        style={{ ...tokenOverrides, ...style }}
      />
    </div>
  )
}
