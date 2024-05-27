import { useState } from 'react'
import { NavigationTabsWrapper } from './NavigationTabsWrapper'
import { TabButtonList } from './TabButtonList'
import { TabContentList } from './TabContentList'
import { TabButtonType, sizeType } from './NavigationTabs.interface'

interface NavigationTabsProps {
  size?: sizeType
  buttons: TabButtonType[]
  contents: any[]
}

export const NavigationTabs = ({ size = 'md', buttons, contents }: NavigationTabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0)

  const handleTabSelect = (index: number) => {
    setSelectedTab(index)
  }

  return (
    <NavigationTabsWrapper size={size}>
      <TabButtonList
        size={size}
        buttons={buttons}
        selectedTab={selectedTab}
        onClick={handleTabSelect}
      />
      <TabContentList contents={contents} selectedTab={selectedTab} />
    </NavigationTabsWrapper>
  )
}
