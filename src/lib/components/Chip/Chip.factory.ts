import { ChipStatus, colorType } from './Chip.interface'

export const getChipIconColor = (status: ChipStatus) => {
  let color: colorType

  switch (status) {
    case 'info':
      color = 'blue700'
      break
    case 'success':
      color = 'badgeGreen'
      break
    case 'danger':
      color = 'red800'
      break
    case 'warning':
      color = 'systemOrange500'
      break
    default:
      color = 'neutralGray800'
      break
  }

  return color
}
