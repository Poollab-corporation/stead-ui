import { useState } from 'react'
import { NavigationTabsWrapper } from './NavigationTabsWrapper'
import { TabButtonList } from './TabButtonList'
import { TabContentList } from './TabContentList'
import { TabButtonType, TabContentType, sizeType } from './NavigationTabs.interface'

interface NavigationTabsProps {
  size?: sizeType
  buttons: TabButtonType[]
  contents: TabContentType[]
}

export const NavigationTabs = ({ size = 'md', buttons, contents }: NavigationTabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0)

  const handleTabSelect = (index: number) => {
    setSelectedTab(index)
  }

  return (
    <NavigationTabsWrapper>
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
