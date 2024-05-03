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
        backgroundColor: theme.color.blue100,
        color: theme.color.blue500
      },
      primary: {
        backgroundColor: theme.color.blue500,
        color: theme.color.white
      },
      warning: {
        backgroundColor: theme.color.red100,
        color: theme.color.red500
      },
      gray: {
        backgroundColor: theme.color.neutralGray100,
        color: theme.color.neutralGray700
      },
      proceeding: {
        backgroundColor: theme.color.systemOrange100,
        color: theme.color.systemOrange500
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