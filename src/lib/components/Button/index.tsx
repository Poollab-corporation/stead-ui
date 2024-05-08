'use client'

import { Icon, colorType } from '../Icon'
import { ButtonProps } from '@/lib/components/Button/Button.interface.ts'
import { buttonLoading, wrapper } from '@/lib/components/Button/styles.css.ts'
import { getIconColor } from '@/lib/components/Button/Button.factory.ts'

export const Button = ({
  type = 'button',
  state = 'primary',
  style = 'fill-strong',
  size = 'md',
  width,
  text,
  leadingIcon,
  trailingIcon,
  href,
  isNewTab = true,
  isLoading = false,
  disabled = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: ButtonProps) => {
  const iconColor = getIconColor(state, style, disabled) as colorType
  const handleClick = () => {
    if (!onClick) return
    onClick()
  }

  const handleMouseEnter = () => {
    if (!onMouseEnter) return
    onMouseEnter()
  }

  const handleMouseLeave = () => {
    if (!onMouseLeave) return
    onMouseLeave()
  }

  if (isLoading && !disabled) {
    return (
      <button
        type={!href ? type : undefined}
        disabled={disabled}
      >
        <div className={buttonLoading({
          size,
          state,
          style
        })} data-testid="loading-spinner" />
      </button>
    )
  }

  if(href) {
    return (
      <a
        className={wrapper({
          size,
          state,
          style
        })}
        style={{ width : `${width}px` }}
        href={href}
        target={isNewTab ? '_blank' : '_self'}
      >
        {leadingIcon && <Icon icon={leadingIcon} color={iconColor} />}
        {text && <span>{text}</span>}
        {trailingIcon && <Icon icon={trailingIcon} color={iconColor} />}
      </a>
    )
  }

  return (
    <button className={wrapper({
        size,
        state,
        style
      })}
      style={{ width : `${width}px` }}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {leadingIcon && <Icon icon={leadingIcon} color={iconColor} />}
      {text && <span>{text}</span>}
      {trailingIcon && <Icon icon={trailingIcon} color={iconColor} />}
    </button>
  )
}