import { recipe } from '@vanilla-extract/recipes'
import { theme } from '@/globalTheme.css.ts'
import { keyframes, style } from '@vanilla-extract/css'

export const parent = style({});
export const wrapper = recipe({
  base : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius : '6px',
    userSelect : 'none'
  },
  variants : {
    size : {
      sm : {
        gap : '4px',
        padding : '5px 8px',
        minWidth : '32px',
        height : '32px',
        fontWeight : theme.fontWeights.medium,
        ...theme.fonts[14],
        lineHeight : '22px',
      },
      md : {
        gap : '5px',
        padding : '9px 12px',
        minWidth : '40px',
        height : '40px',
        fontWeight : theme.fontWeights.semiBold,
        ...theme.fonts[15],
        lineHeight : '22px'
      },
      lg : {
        gap : '6px',
        padding : '13px 12px',
        minWidth : '48px',
        height : '48px',
        fontWeight : theme.fontWeights.semiBold,
        ...theme.fonts[15],
        lineHeight : '22px'
      },
      xl : {
        gap : '6px',
        padding : '13px 12px',
        minWidth : '56px',
        height : '56px',
        fontWeight : theme.fontWeights.semiBold,
        ...theme.fonts[15],
        lineHeight : '22px',
      }
    },
    state : {
      primary : {},
      secondary : {},
      danger : {}
    },
    style : {
      ['fill-strong'] : {},
      ['fill-weak'] : {},
      ['line'] : {},
      ['mono'] :{}
    }
  },
  compoundVariants : [
    {
      variants : {
        state : 'primary',
        style : 'fill-strong',
      },
      style : {
        color : theme.color.white,
        backgroundColor: theme.color.blue500,
        selectors : {
          [`&:disabled`] : {
            cursor: 'not-allowed',
            color : theme.color.neutralGray400,
            backgroundColor : theme.color.neutralGray200,
            border : 'none'
          },
          [`${parent} &:not(:disabled):hover`] : {
            backgroundColor : theme.color.blue600
          },
          [`${parent} &:not(:disabled):active`] : {
            backgroundColor : theme.color.blue700
          },
        }
      }
    },
    {
      variants : {
        state : 'primary',
        style : 'fill-weak',
      },
      style : {
        color : theme.color.blue500,
        backgroundColor: theme.color.blue100,
        selectors : {
          [`&:disabled`] : {
            cursor: 'not-allowed',
            color : theme.color.neutralGray400,
            backgroundColor : theme.color.neutralGray200,
            border : 'none'
          },
          [`${parent} &:not(:disabled):hover`] : {
            backgroundColor : theme.color.blue200
          },
          [`${parent} &:not(:disabled):active`] : {
            backgroundColor : theme.color.blue300
          },
        }
      }
    },
    {
      variants : {
        state : 'primary',
        style : 'line',
      },
      style : {
        color : theme.color.blue500,
        backgroundColor: theme.color.white,
        border:`1px solid ${theme.color.neutralGray200}`,
        selectors  : {
          [`&:disabled`] : {
            cursor: 'not-allowed',
            color : theme.color.neutralGray400,
              backgroundColor : theme.color.white,
              border : `1px solid ${theme.color.neutralGray200}`
          },
          [`${parent} &:not(:disabled):hover`] : {
            backgroundColor : theme.color.blue200,
            border : `1px solid ${theme.color.blue200}`
          },
          [`${parent} &:not(:disabled):active`] : {
            backgroundColor : theme.color.blue300
          },
        }
      }
    },
    {
      variants : {
        state : 'primary',
        style : 'mono',
      },
      style : {
        color : theme.color.blue500,
        backgroundColor: 'transparent',
        selectors : {
          [`&:disabled`] : {
            cursor: 'not-allowed',
            color : theme.color.neutralGray400,
            backgroundColor : theme.color.white,
            border : 'none'
          },
          [`${parent} &:not(:disabled):hover`] : {
            backgroundColor : theme.color.blue100,
          },
          [`${parent} &:not(:disabled):active`] : {
            backgroundColor : theme.color.blue200
          },
        }
      }
    },
    // Secondary
    {
      variants : {
        state : 'secondary',
        style : 'fill-strong',
      },
      style : {
        color : theme.color.white,
        backgroundColor: theme.color.neutralGray800,
        selectors : {
          [`&:disabled`] : {
            cursor: 'not-allowed',
            color : theme.color.neutralGray400,
            backgroundColor : theme.color.neutralGray200,
            border : 'none'
          },
          [`${parent} &:not(:disabled):hover`] : {
            backgroundColor : theme.color.neutralGray900,
          },
          [`${parent} &:not(:disabled):active`] : {
            backgroundColor : theme.color.neutralGray200,
            border : 'none'
          },
        }
      }
    },
    {
      variants : {
        state : 'secondary',
        style : 'fill-weak',
      },
      style : {
        color : theme.color.neutralGray800,
        backgroundColor: theme.color.neutralGray100,
        selectors : {
          [`&:disabled`] : {
            cursor: 'not-allowed',
            color : theme.color.neutralGray400,
            backgroundColor : theme.color.neutralGray200,
            border : 'none'
          },
          [`${parent} &:not(:disabled):hover`] : {
            backgroundColor : theme.color.neutralGray200,
          },
          [`${parent} &:not(:disabled):active`] : {
            backgroundColor : theme.color.neutralGray300,
            border: 'none'
          },
        }
      }
    },
    {
      variants : {
        state : 'secondary',
        style : 'line',
      },
      style : {
        color : theme.color.neutralGray800,
        backgroundColor: theme.color.white,
        border:`1px solid ${theme.color.neutralGray200}`,
        selectors : {
          [`&:disabled`] : {
            cursor: 'not-allowed',
            color : theme.color.neutralGray400,
            backgroundColor : theme.color.white,
            border : `1px solid ${theme.color.neutralGray200}`
          },
          [`${parent} &:not(:disabled):hover`] : {
            backgroundColor : theme.color.neutralGray200,
            border: `1px solid ${theme.color.neutralGray200}`
          },
          [`${parent} &:not(:disabled):active`] : {
            backgroundColor : theme.color.neutralGray300,
            border : `1px solid ${theme.color.neutralGray300}`
          },
        }
      }
    },
    {
      variants : {
        state : 'secondary',
        style : 'mono',
      },
      style : {
        color : theme.color.neutralGray800,
        backgroundColor: 'transparent',
        selectors : {
          [`&:disabled`] : {
            cursor: 'not-allowed',
            color : theme.color.neutralGray400,
            backgroundColor : theme.color.white,
            border : 'none'
          },
          [`${parent} &:not(:disabled):hover`] : {
            backgroundColor : theme.color.neutralGray100,
          },
          [`${parent} &:not(:disabled):active`] : {
            backgroundColor : theme.color.neutralGray300,
            border: 'none'
          },
        }
      }
    },
    // Danger
    {
      variants : {
        state : 'danger',
        style : 'fill-strong',
      },
      style : {
        color : theme.color.white,
        backgroundColor: theme.color.red500,
        selectors : {
          [`&:disabled`] : {
            cursor: 'not-allowed',
            color : theme.color.neutralGray400,
            backgroundColor : theme.color.neutralGray100,
            border: 'none'
          },
          [`${parent} &:not(:disabled):hover`] : {
            backgroundColor : theme.color.red600,
          },
          [`${parent} &:not(:disabled):active`] : {
            backgroundColor : theme.color.red700,
          },
        }
      }
    },
    {
      variants : {
        state : 'danger',
        style : 'fill-weak',
      },
      style : {
        color : theme.color.red500,
        backgroundColor: theme.color.red100,
        selectors : {
          [`&:disabled`] : {
            cursor: 'not-allowed',
            color : theme.color.neutralGray400,
            backgroundColor : theme.color.neutralGray100,
            border: 'none'
          },
          [`${parent} &:not(:disabled):hover`] : {
            backgroundColor : theme.color.red200,
          },
          [`${parent} &:not(:disabled):active`] : {
            backgroundColor : theme.color.red300,
          },
        }
      }
    },
    {
      variants : {
        state : 'danger',
        style : 'line',
      },
      style : {
        color : theme.color.red500,
        backgroundColor: theme.color.white,
        border:`1px solid ${theme.color.neutralGray200}`,
        selectors : {
          [`&:disabled`] : {
            cursor: 'not-allowed',
            color : theme.color.neutralGray400,
            backgroundColor : theme.color.neutralGray100,
            border: `1px solid ${theme.color.neutralGray200}`
          },
          [`${parent} &:not(:disabled):hover`] : {
            backgroundColor : theme.color.red100,
            border: `1px solid ${theme.color.red100}`
          },
          [`${parent} &:not(:disabled):active`] : {
            backgroundColor : theme.color.red200,
          },
        }
      }
    },
    {
      variants : {
        state : 'danger',
        style : 'mono',
      },
      style : {
        color : theme.color.red500,
        backgroundColor: 'transparent',
        selectors : {
          [`&:disabled`] : {
            cursor: 'not-allowed',
            color : theme.color.neutralGray400,
            backgroundColor : theme.color.neutralGray100,
            border: 'none'
          },
          [`${parent} &:not(:disabled):hover`] : {
            backgroundColor : theme.color.red100,
          },
          [`${parent} &:not(:disabled):active`]: {
            backgroundColor: theme.color.red200,
          },
        }
      }
    }
  ]
})

const rotate = keyframes({
  '0%' : { transform: 'rotate(0deg)' },
  '100%' : { transform: 'rotate(360deg)' },
})

export const buttonLoading = recipe({
  base : {
    display: 'inline-block',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    animation: `${rotate} 1s linear infinite`
  },
  compoundVariants : [
    {
      variants : {
        state : 'primary',
        style : 'fill-strong',
      },
      style : {
        border : `2px solid ${theme.color.white}`,
        borderBottomColor : theme.color.blue500
      }
    },
    {
      variants : {
        state : 'primary',
        style : 'fill-weak',
      },
      style : {
        border : `2px solid ${theme.color.white}`,
        borderBottomColor : theme.color.blue100
      }
    },
    {
      variants : {
        state : 'primary',
        style : 'line',
      },
      style : {
        border : `2px solid ${theme.color.blue500}`,
        borderBottomColor : theme.color.white
      }
    },
    {
      variants : {
        state : 'primary',
        style : 'mono',
      },
      style : {
        border : `2px solid ${theme.color.blue500}`,
        borderBottomColor : theme.color.white
      }
    },
    // Secondary
    {
      variants : {
        state : 'secondary',
        style : 'fill-strong',
      },
      style : {
        border : `2px solid ${theme.color.white}`,
        borderBottomColor : theme.color.neutralGray800
      }
    },
    {
      variants : {
        state : 'secondary',
        style : 'fill-weak',
      },
      style : {
        border : `2px solid ${theme.color.white}`,
        borderBottomColor : theme.color.neutralGray100
      }
    },
    {
      variants : {
        state : 'secondary',
        style : 'line',
      },
      style : {
        border : `2px solid ${theme.color.neutralGray800}`,
        borderBottomColor : theme.color.white
      }
    },
    {
      variants : {
        state : 'secondary',
        style : 'mono',
      },
      style : {
        border : `2px solid ${theme.color.neutralGray800}`,
        borderBottomColor : theme.color.white
      }
    },
    // Danger
    {
      variants : {
        state : 'danger',
        style : 'fill-strong',
      },
      style : {
        border : `2px solid ${theme.color.white}`,
        borderBottomColor : theme.color.red500
      }
    },
    {
      variants : {
        state : 'danger',
        style : 'fill-weak',
      },
      style : {
        border : `2px solid ${theme.color.white}`,
        borderBottomColor : theme.color.red100
      }
    },
    {
      variants : {
        state : 'danger',
        style : 'line',
      },
      style : {
        border : `2px solid ${theme.color.red500}`,
        borderBottomColor : theme.color.white
      }
    },
    {
      variants : {
        state : 'danger',
        style : 'mono',
      },
      style : {
        color : theme.color.red500,
        backgroundColor: 'transparent',
      }
    }
  ]
})
