import { TabContentType } from '../NavigationTabs.interface'
import { tabContentStyle } from '../styles.css'

interface TabContentProps extends TabContentType {
  isActive: boolean
}

export const TabContent = ({ content, isActive }: TabContentProps) => {
  if (!isActive) return null

  return <div className={tabContentStyle}>{content}</div>
}
