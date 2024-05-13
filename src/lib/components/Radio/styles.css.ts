import { style } from '@vanilla-extract/css'
import { theme } from '@/globalTheme.css.ts'
import { recipe } from '@vanilla-extract/recipes'

export const wrapper = style({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  gap: '4px',
});

export const inputWrapper = style({
  position: 'relative',
});

export const input = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  visibility: 'hidden',
});

export const label = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  ...theme.fonts[14],
  fontWeight: theme.fontWeights.medium,
  cursor: 'pointer',
});

export const radio = recipe({
  base :{
    selectors : {
      ['&:before'] : {
        content: '""',
        display: 'block',
        position:'relative',
        cursor: 'pointer',
        borderRadius: '16px',
      },
      ['&:after'] : {
        content : '',
        borderRadius : '8px',
        position:'absolute',
        top: '50%',
        transform : 'translateY(-50%)'
      }
    }
  },
  variants : {
    state : {
      positive : {
        selectors: {
          ['&:after'] : {
            background : theme.colors.blue500
          }
        }
      },
      negative : {
        selectors: {
          ['&:after'] : {
            background : theme.colors.red500
          }
        }
      },
      default : {
        selectors: {
          ['&:after'] : {
            background : theme.colors.neutralGray800
          }
        }
      }
    },
    size : {
      sm : {
        selectors : {
          ['&:before'] :{
            width:'16px',
            height:'16px',
          },
          ['&:after'] : {
            width: '8px',
            height: '8px',
            left: '4px'
          }
        }
      },
      md : {
        selectors : {
          ['&:before'] :{
            width:'22px',
            height:'22px',
          },
          ['&:after'] : {
            width: '12px',
            height: '12px',
            left: '5px'
          }
        }
      }
    },
    checked : {
      true : {
        position: 'relative',
        selectors : {
          ['&:after'] : {
            display: 'block',
          }
        }
      },
      false : {
        position: 'relative',
        selectors : {
          ['&:after'] : {
            display: 'none',
          }
        }
      }
    }
  },
  compoundVariants : [
    {
      variants : {
        state : 'default',
        checked : true
      },
      style : {
        selectors : {
          ['&:before'] : {
            background : theme.colors.neutralGray200
          }
        }
      }
    },
    {
      variants : {
        state : 'default',
        checked : false
      },
      style : {
        selectors : {
          ['&:before'] : {
            background : theme.colors.neutralGray200
          }
        }
      }
    },
    {
      variants : {
        state : 'positive',
        checked : true
      },
      style : {
        selectors : {
          ['&:before'] : {
            background : theme.colors.blue200
          }
        }
      }
    },
    {
      variants : {
        state : 'positive',
        checked : false
      },
      style : {
        selectors : {
          ['&:before'] : {
            background : theme.colors.blue100
          }
        }
      }
    },
    {
      variants : {
        state : 'negative',
        checked : true
      },
      style : {
        selectors : {
          ['&:before'] : {
            background : theme.colors.red200
          }
        }
      }
    },
    {
      variants : {
        state : 'negative',
        checked : false
      },
      style : {
        selectors : {
          ['&:before'] : {
            background : theme.colors.red100
          }
        }
      }
    }
  ]
})
