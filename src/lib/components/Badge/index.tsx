import { badge } from '@/lib/components/Badge/styles.css.ts'

interface BadgeProps {
  readonly text: string
  readonly type?: 'standard' | 'primary' | 'warning' | 'gray' | 'proceeding' | 'success'
  readonly isDisabled?: boolean
  readonly rounded?: number
}

export const Badge = ({ text, type = 'standard', isDisabled, rounded = 4 }: BadgeProps) => {
  return (
    <div
      className={badge({
        type,
        isDisabled,
      })}
      style={{ borderRadius: `${rounded}px` }}
    >
      {text}
    </div>
  )
}
