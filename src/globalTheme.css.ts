import {  createGlobalTheme } from '@vanilla-extract/css'
import { COLORS, FONT_WEIGHTS, FONTS, TITLES } from './constants'

export const theme = createGlobalTheme(':root', {
  fonts : {
    ...FONTS
  },
  fontWeights :{
    ...FONT_WEIGHTS
  },
  titles: {
    ...TITLES
  },
  color: {
    ...COLORS,
  },
})
