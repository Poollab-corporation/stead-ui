import { useRecoilState } from 'recoil'
import { Icon } from '../../Icon'
import { Label } from '../../Label'
import { TabButtonType } from '../NavigationTabs.interface'
import { SelectedTabAtom } from '../atom'
import { tabButtonStyle } from '../styles.css'

interface TabButtonProps extends TabButtonType {
  index: number
  isActive: boolean
  onClick: (index: number) => void
}

export const TabButton = ({
  index,
  size,
  icon,
  checkbox,
  radio,
  label,
  isActive,
  onClick,
}: TabButtonProps) => {
  const [selectedTab, setSelectedTab] = useRecoilState(SelectedTabAtom)

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
      setSelectedTab(selectedTab + 1)
    }

    if (key === 'ArrowLeft' && selectedTab > 0) {
      setSelectedTab(selectedTab - 1)
    }

    const direction = key === 'ArrowRight' ? 'ArrowRight' : 'ArrowLeft'

    let futureButton = currentButton[direction]

    while (futureButton && futureButton.hasAttribute('disabled')) {
      futureButton = futureButton[direction]
    }

    return futureButton
  }

  return (
    <li
      className={tabButtonStyle({ size, isActive })}
      onKeyDown={handleKeyDown}
      onClick={() => onClick(index)}
      tabIndex={0}
    >
      {icon && <Icon icon={icon} color={iconColor} />}
      {checkbox && checkbox}
      {radio && radio}
      <Label label={label} size={size} isActive={isActive} />
    </li>
  )
}
