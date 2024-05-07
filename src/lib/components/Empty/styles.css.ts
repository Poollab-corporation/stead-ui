import { style } from '@vanilla-extract/css'
import { theme } from '@/globalTheme.css.ts'


export const wrapper = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
})

export const titleStyle = style({
  color : theme.color.neutralGray800,
  fontWeight : theme.fontWeights.bold,
  ...theme.fonts[18]
})

export const descriptionStyle = style({
  margin : '8px 0 16px',
  color : theme.color.neutralGray400,
  fontWeight : theme.fontWeights.medium,
  ...theme.fonts[16]
})
