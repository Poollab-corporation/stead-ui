import { Icon } from '../../Icon'
import { ToggleSwitchType, sizeType } from '../ToggleTabs.interface'
import { labelStyle, tabButtonStyle } from '../styles.css'

interface ToggleSwitchProps extends ToggleSwitchType {
  index: number
  size: sizeType
  selectedTab: number
  isActive: boolean
  onClick: (index: number) => void
}

export const ToggleSwitch = ({
  index,
  size,
  text,
  icon,
  selectedTab,
  isActive,
  disabled,
  onClick,
}: ToggleSwitchProps) => {
  const tabIndex = disabled ? -1 : 0
  const iconColor = isActive ? 'neutralGray800' : 'neutralGray500'

  const handleClick = () => {
    if (disabled) return
    onClick(index)
  }

  return (
    <li
      className={tabButtonStyle({ size, isActive, disabled })}
      onClick={handleClick}
      tabIndex={tabIndex}
      aria-disabled={disabled}
    >
      {icon && <Icon icon={icon} color={iconColor} />}
      {text && <span className={labelStyle({ isActive })}>{text}</span>}
    </li>
  )
}
