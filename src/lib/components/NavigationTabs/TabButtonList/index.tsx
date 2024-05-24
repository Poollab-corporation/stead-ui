import { useRecoilState } from 'recoil'
import { TabButtonType } from '../NavigationTabs.interface'
import { SelectedTabAtom } from '../atom'
import { tabButtonListStyle } from '../styles.css'
import { TabButton } from './TabButton'

interface TabButtonListProps {
  size?: 'md' | 'lg'
  buttons: TabButtonType[]
}

export const TabButtonList = ({ size = 'md', buttons }: TabButtonListProps) => {
  const [selectedTab, setSelectedTab] = useRecoilState(SelectedTabAtom)

  const handleClick = (index: number) => {
    setSelectedTab(index)
  }

  return (
    <ul className={tabButtonListStyle}>
      {buttons.map((button, index) => (
        <TabButton
          key={`tab_button_${index}`}
          index={index}
          size={size}
          isActive={selectedTab === index}
          onClick={handleClick}
          {...button}
        />
      ))}
    </ul>
  )
}
