export interface CheckBoxProps {
  name?: string
  disabled?: boolean
  isChecked: boolean
  onChange: (checked: boolean) => void
  size?: 'sm' | 'md'
  text?: string
}
