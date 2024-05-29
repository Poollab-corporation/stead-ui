import { theme } from '@/globalTheme.css.ts'
import { globalStyle, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const wrapper = style({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  gap: '4px',
})

export const inputWrapper = style({
  position: 'relative',
})

export const input = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  visibility: 'hidden',
})

export const label = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  cursor: 'pointer',
})

export const text = style({
  marginBottom: '-2px',
  ...theme.fonts[14],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray800,
})

export const mark = style({
  marginBottom: '-8px',
  ...theme.fonts[14],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.red500,
})

export const radio = recipe({
  base: {
    selectors: {
      ['&:before']: {
        content: '""',
        display: 'block',
        position: 'relative',
        cursor: 'pointer',
        borderRadius: '16px',
        backgroundColor: theme.colors.neutralGray200,
      },
      ['&:after']: {
        content: '',
        borderRadius: '8px',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: theme.colors.white,
      },
    },
  },
  variants: {
    state: {
      primary: {
        selectors: {
          ['&:before']: {
            border: `1px solid ${theme.colors.blue400}`,
          },
          ['&:after']: {
            display: 'none',
          },
        },
      },
      secondary: {
        selectors: {
          ['&:before']: {
            border: `1px solid ${theme.colors.neutralGray700}`,
          },
          ['&:after']: {
            display: 'none',
          },
        },
      },
    },
    size: {
      md: {
        selectors: {
          ['&:before']: {
            width: '14px',
            height: '14px',
          },
          ['&:after']: {
            width: '8px',
            height: '8px',
            left: '4px',
          },
        },
      },
      lg: {
        selectors: {
          ['&:before']: {
            width: '18px',
            height: '18px',
          },
          ['&:after']: {
            width: '10px',
            height: '10px',
            left: '5px',
          },
        },
      },
    },
    checked: {
      true: {
        position: 'relative',
        selectors: {
          ['&:after']: {
            display: 'block',
          },
        },
      },
      false: {
        position: 'relative',
        selectors: {
          ['&:after']: {
            display: 'none',
          },
        },
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        state: 'primary',
        checked: true,
      },
      style: {
        selectors: {
          ['&:before']: {
            backgroundColor: theme.colors.blue400,
          },
        },
      },
    },
    {
      variants: {
        state: 'secondary',
        checked: true,
      },
      style: {
        selectors: {
          ['&:before']: {
            backgroundColor: theme.colors.neutralGray700,
          },
        },
      },
    },
  ],
})
