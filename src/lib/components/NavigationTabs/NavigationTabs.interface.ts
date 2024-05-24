import { IconNames } from '../Icon'

export interface TabButtonType {
  size?: 'md' | 'lg'
  icon?: IconNames
  checkbox?: React.ReactNode
  radio?: React.ReactNode
  label: string
}

export interface TabContentType {
  content: React.ReactNode
}
