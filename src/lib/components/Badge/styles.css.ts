import { recipe } from '@vanilla-extract/recipes'
import { theme } from '@/globalTheme.css.ts'

export const badge = recipe({
  base : {
    display: 'inline-block',
    padding: '2px 6px',
    maxWidth: '80px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  variants: {
    type: {
      standard: {
        backgroundColor: theme.colors.blue100,
        color: theme.colors.blue500
      },
      primary: {
        backgroundColor: theme.colors.blue500,
        color: theme.colors.white
      },
      warning: {
        backgroundColor: theme.colors.red100,
        color: theme.colors.red500
      },
      gray: {
        backgroundColor: theme.colors.neutralGray100,
        color: theme.colors.neutralGray700
      },
      proceeding: {
        backgroundColor: theme.colors.systemOrange100,
        color: theme.colors.systemOrange500
      },
    },
    isDisabled: {
      true: {
        opacity: 0.3
      },
      false : {
        opacity :1
      }
    },
  },
  defaultVariants : {
    type: 'standard',
    isDisabled: false,
  }
})