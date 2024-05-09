import { labelStyle, wrapper } from '@/lib/components/Chip/styles.css.ts'
import { Icon } from '../Icon'
import { getChipIconColor } from './Chip.factory'
import { ChipProps } from './Chip.interface'

export const Chip = ({ status = 'default', size = 'md', label, icon }: ChipProps) => {
  const iconColor = getChipIconColor(status)

  return (
    <div
      className={wrapper({
        status,
        size,
      })}
    >
      {icon && <Icon icon={icon} color={iconColor} />}
      <span className={labelStyle({ status, size })}>{label}</span>
    </div>
  )
}
