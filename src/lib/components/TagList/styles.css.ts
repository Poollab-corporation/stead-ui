import { style } from '@vanilla-extract/css'

export const tagList = style({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    maxWidth: '100%',
    overflowX: 'auto',
    width: '100%',
    whiteSpace: 'nowrap',
    paddingBottom: '8px',
    selectors : {
    '&::-webkit-scrollbar-track' : {
      // background: ${(props) => props.theme.colors.neutralGray200},
      borderRadius: '4px'
    },
    '&::-webkit-scrollbar-thumb' : {
      backgroundClip: 'padding-box',
      // border: 4px solid ${(props) => props.theme.colors.neutralGray400};
      borderRadius: '4px'
    }
  }
})