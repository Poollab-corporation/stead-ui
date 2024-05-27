import { IconNames } from '../Icon'

export type sizeType = 'md' | 'lg'

export interface TabButtonType {
  size?: sizeType
  icon?: IconNames
  checkbox?: React.ReactNode
  radio?: React.ReactNode
  label: string
}

export interface TabContentType {
  content: React.ReactNode
}
