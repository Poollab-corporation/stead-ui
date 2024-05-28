type BadgeType = 'blue' | 'skyblue' | 'red' | 'gray' | 'orange' | 'green'

export interface BadgeProps {
  readonly text: string
  readonly type?: BadgeType
  readonly isDisabled?: boolean
  readonly rounded?: number
}
