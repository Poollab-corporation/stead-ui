import { createVar, style } from '@vanilla-extract/css'

export const avatarSize = createVar()
export const avatarFontSize = createVar()
export const avatarBorder = createVar()
export const avatarBackground = createVar()
export const avatarIsDisabled = createVar()
// TODO : disabled 처리 필요


export const avatar = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%;',
  overflow: 'hidden',
  width : avatarSize,
  height : avatarSize,
  fontSize : avatarFontSize,
  border: avatarBorder,
  background : avatarBackground,
})

export const avatarImage = style({
  objectFit: 'cover',
  borderRadius: '50%',
})