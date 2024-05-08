import { theme } from '@/globalTheme.css.ts'
import { recipe } from '@vanilla-extract/recipes'

export const wrapper = recipe({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
    borderRadius: '9999px',
  },
  variants: {
    size: {
      sm: {
        padding: '2px 6px',
      },
      md: {
        padding: '4px 6px',
      },
    },
    status: {
      default: {
        backgroundColor: theme.colors.neutralGray200,
      },
      info: {
        backgroundColor: theme.colors.blue200,
      },
      success: {
        backgroundColor: theme.colors.badgeGreenBackground,
      },
      danger: {
        backgroundColor: theme.colors.red200,
      },
      warning: {
        backgroundColor: theme.colors.systemOrange100,
      },
    },
  },
})

export const labelStyle = recipe({
  base: {
    fontWeight: theme.fontWeights.medium,
  },
  variants: {
    size: {
      sm: {
        ...theme.fonts[10],
      },
      md: {
        ...theme.fonts[11],
      },
    },
    status: {
      default: {
        color: theme.colors.neutralGray800,
      },
      info: {
        color: theme.colors.blue700,
      },
      success: {
        color: theme.colors.badgeGreen,
      },
      danger: {
        color: theme.colors.red800,
      },
      warning: {
        color: theme.colors.systemOrange500,
      },
    },
  },
})
