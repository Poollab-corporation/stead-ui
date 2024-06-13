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
  const iconColor = isActive ? 'neutralGray800' : 'neutralGray500'

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    event.preventDefault()

    const currentButton = event.target
    const futureButton = findNextButton(event.key, currentButton)

    if (!futureButton) return

    futureButton.focus()
  }

  const findNextButton = (key: string, currentButton: any) => {
    if (key === 'ArrowRight' && selectedTab < 2) {
      onClick(selectedTab + 1)
    }

    if (key === 'ArrowLeft' && selectedTab > 0) {
      onClick(selectedTab - 1)
    }

    const direction = key === 'ArrowRight' ? 'ArrowRight' : 'ArrowLeft'

    let futureButton = currentButton[direction]

    while (futureButton && futureButton.hasAttribute('disabled')) {
      futureButton = futureButton[direction]
    }

    return futureButton
  }

  // TODO: disabled인 버튼은 클릭이나 키보드 이벤트가 발생하지 않도록 처리해야 함

  return (
    <li
      className={tabButtonStyle({ size, isActive, disabled })}
      onClick={() => onClick(index)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {icon && <Icon icon={icon} color={iconColor} />}
      {text && <span className={labelStyle({ isActive })}>{text}</span>}
    </li>
  )
}
