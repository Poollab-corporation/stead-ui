import { badge, label } from '@/lib/components/Badge/styles.css.ts'
import { BadgeProps } from './Badge.interface'

export const Badge = ({ text, type = 'blue', isDisabled, rounded = 4 }: BadgeProps) => {
  return (
    <div
      className={badge({
        type,
        isDisabled,
      })}
      style={{ borderRadius: `${rounded}px` }}
    >
      <span className={label({ type })}>{text}</span>
    </div>
  )
}
