import { globalStyle, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { theme } from '@/globalTheme.css.ts'
export const dropDownWrapper = style({
  position: 'relative',
})

export const DropdownButtonBox = style({
  position: 'relative',
})


export const dropdownButtonIcon = recipe({
  base : {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '16px',
    height: '16px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: 'contain',
  },
  variants : {
    isOpen: {
      true: {
        transform: 'rotate(180deg)'
      },
      false: {
        transform: 'rotate(0deg)'
      }
    }
  }
})

export const dropdownMenu = style({
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
})

export const dropdownMenuContainer = style({
  position: 'absolute',
  display: 'flex',
  width: 'auto',
  flexDirection: 'column',
  backgroundColor: theme.colors.white,
  border: `1px solid ${ theme.colors.neutralGray100}`,
  borderRadius: '8px',
  boxShadow: '5px 5px 15px 0 rgba(75, 75, 75, 0.07)',
  padding: '8px',
  zIndex: 1
})

export const item = recipe({
  base : {
    display: 'flex',
    padding: '8px',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '6px',
    fontWeight: theme.fontWeights.medium,
    ...theme.fonts[14],
  },
  variants :{
    size: {
      md: {
        minWidth: '140px',
        height: '40px'
      },
      lg: {
        minWidth: '184px',
        height: '44px'
      }
    },
    isWarning: {
      true: {
        color: theme.colors.red500
      },
      false: {
        color: theme.colors.neutralGray800
      }
    },
    disabled: {
      true: {
        opacity: '0.3',
        cursor: 'not-allowed'
      },
      false: {
        opacity: '1',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: theme.colors.neutralGray50
        }
      }
    }
  }
})

globalStyle(`${item} > label, button`, {
  pointerEvents: 'none'
})

export const divider = style({
  borderTop: `1px solid ${theme.colors.neutralGray100}`,
  margin: '2px 0'
})
