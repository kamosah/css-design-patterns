import { useState, type CSSProperties } from 'react'
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
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue ?? min)

  const displayValue = isControlled ? value : uncontrolledValue

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const next = Number(e.target.value)
    if (!isControlled) setUncontrolledValue(next)
    onChange?.(next)
  }

  return (
    <div className={s.wrapper}>
      {label && (
        <div className={s.header}>
          <span className={s.label}>{label}</span>
          <span className={s.value}>{displayValue}</span>
        </div>
      )}
      <input
        type="range"
        className={s.range}
        min={min}
        max={max}
        step={step}
        {...(isControlled
          ? { value }
          : { defaultValue: defaultValue ?? min }
        )}
        onChange={handleChange}
        disabled={disabled}
        style={{ ...tokenOverrides, ...style }}
      />
    </div>
  )
}
