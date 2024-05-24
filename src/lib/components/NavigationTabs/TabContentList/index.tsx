import { useRecoilValue } from 'recoil'
import { TabContentType } from '../NavigationTabs.interface'
import { TabContent } from './TabContent'
import { SelectedTabAtom } from '../atom'
import { tabContentListStyle } from '../styles.css'

interface TabContentListProps {
  contents: TabContentType[]
}

export const TabContentList = ({ contents }: TabContentListProps) => {
  const selectedTab = useRecoilValue(SelectedTabAtom)

  return (
    <div className={tabContentListStyle}>
      {contents.map((content, index) => (
        <TabContent key={`tab_content_${index}`} isActive={selectedTab === index} {...content} />
      ))}
    </div>
  )
}
