import { tabsWrapper } from './styles.css'

interface NavigationTabsWrapperProps {
  size?: 'md' | 'lg'
  children: React.ReactNode
}

export const NavigationTabsWrapper = ({ size = 'md', children }: NavigationTabsWrapperProps) => {
  return <div className={tabsWrapper({ size })}>{children}</div>
}
