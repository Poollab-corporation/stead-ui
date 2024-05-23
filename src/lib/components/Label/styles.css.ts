import { theme } from '@/globalTheme.css'
import { recipe } from '@vanilla-extract/recipes'

export const wrapper = recipe({
  base: { display: 'inline-flex', alignItems: 'center', gap: '4px' },
  variants: {
    size: {
      md: {
        height: '22px',
      },
      lg: {
        height: '24px',
      },
    },
  },
})

export const text = recipe({
  base: {
    marginBottom: '-2px',
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.neutralGray800,
  },
  variants: {
    size: {
      md: {
        ...theme.fonts[14],
      },
      lg: {
        ...theme.fonts[16],
      },
    },
  },
})

export const required = recipe({
  base: {
    marginBottom: '-8px',
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.red500,
  },
  variants: {
    size: {
      md: {
        ...theme.fonts[14],
      },
      lg: {
        ...theme.fonts[16],
      },
    },
  },
})
