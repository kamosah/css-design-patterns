import React, { type CSSProperties, type ElementType, type ComponentPropsWithoutRef } from 'react'
import s from './Button.module.css'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'warning'
type Size = 'sm' | 'md' | 'lg'

/*
 * PATTERN: Polymorphic `as` prop
 * Renders as any element type while keeping correct prop types.
 * Default is <button>; pass as="a" for links, as="div" for non-interactive wrappers.
 */
type PolymorphicProps<E extends ElementType> = {
  as?: E
  variant?: Variant
  size?: Size
  loading?: boolean
  style?: CSSProperties & Record<string, string | number>
} & Omit<ComponentPropsWithoutRef<E>, 'as'>

export function Button<E extends ElementType = 'button'>({
  as,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  children,
  className,
  onClick,
  tabIndex,
  ...props
}: PolymorphicProps<E>) {
  const Tag = as ?? 'button'
  const isButton = Tag === 'button'
  const isDisabledLike = Boolean(disabled || loading)

  return (
    <Tag
      className={`${s.btn} ${className ?? ''}`.trim()}
      data-variant={variant}
      data-size={size}
      data-loading={loading || undefined}
      data-disabled={!isButton && isDisabledLike ? '' : undefined}
      disabled={isButton ? (disabled ?? loading) : undefined}
      aria-disabled={isDisabledLike || undefined}
      tabIndex={!isButton && isDisabledLike ? -1 : tabIndex}
      onClick={
        !isButton && isDisabledLike
          ? (e: React.MouseEvent) => { e.preventDefault(); e.stopPropagation() }
          : onClick
      }
      {...props}
    >
      {loading && <span className={s.spinner} aria-hidden="true" />}
      {children}
    </Tag>
  )
}
