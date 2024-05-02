import { createTheme } from '@vanilla-extract/css'
import { COLORS } from './constants/colors'

export const theme = createTheme({
  colors: {
    ...COLORS,
  },
})
