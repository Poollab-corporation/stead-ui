import { createGlobalTheme, globalStyle } from '@vanilla-extract/css'
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
  types : {
    standard : {
      background: COLORS.blue100,
      color: COLORS.blue500
    },
    primary: {
      background: COLORS.blue500,
      color: COLORS.white
    },
    warning: {
      background: COLORS.red500,
      color: COLORS.white
    },
    gray: {
      background: COLORS.neutralGray100,
      color: COLORS.neutralGray600
    }
  }
})
globalStyle('a', {
  textDecoration : 'none',
  color : 'inherit'
});

globalStyle('button', {
  border: 'none'
});
