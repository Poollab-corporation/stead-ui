import { theme } from '@/globalTheme.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const tabsWrapper = recipe({
  base: {
    width: '100%',
    height: 'auto',
  },
  variants: {
    size: {
      md: {
        height: '40px',
      },
      lg: {
        height: '48px',
      },
    },
  },
})

export const tabButtonListStyle = style({
  display: 'flex',
  width: '100%',
  marginBottom: '20px',
})

export const tabButtonStyle = recipe({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    cursor: 'pointer',

    ':focus': {
      outline: 'none',
    },
  },
  variants: {
    size: {
      md: {
        gap: '4px',
        padding: '9px 20px',
      },
      lg: {
        gap: '6px',
        padding: '12px 20px',
      },
    },
    isActive: {
      true: {
        borderBottom: `1.5px solid ${theme.colors.blue500}`,
        color: theme.colors.neutralGray800,
      },
      false: {
        borderBottom: `1px solid ${theme.colors.elevation300}`,
      },
    },
  },
})

export const tabContentListStyle = style({
  width: '100%',
})

export const tabContentStyle = style({
  display: 'block',
  width: '100%',
  height: 'auto',
})
