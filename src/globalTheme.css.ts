import { createGlobalTheme } from '@vanilla-extract/css'
import { COLORS } from './constants/colors'

export const theme = createGlobalTheme(':root', {
  color: {
    ...COLORS,
  },
})
