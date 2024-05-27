import { TabContentType } from '../NavigationTabs.interface'
import { tabContentListStyle } from '../styles.css'
import { TabContent } from './TabContent'

interface TabContentListProps {
  contents: TabContentType[]
  selectedTab: number
}

export const TabContentList = ({ contents, selectedTab }: TabContentListProps) => {
  return (
    <div className={tabContentListStyle}>
      {contents.map((content, index) => (
        <TabContent key={`tab_content_${index}`} isActive={selectedTab === index} {...content} />
      ))}
    </div>
  )
}
