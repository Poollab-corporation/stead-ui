import { style } from '@vanilla-extract/css'
import { theme } from '@/globalTheme.css.ts'
import { recipe } from '@vanilla-extract/recipes'

export const baseStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '4px',
}

export const wrapper = style({
  display: 'flex',
  alignItems: 'center'
})

export const label = recipe({
  base : {
    ...baseStyle
  },
  variants : {
    size : {
      sm : {
        width : '16px',
        height : '16px'
      },
      md : {
        width : '20px',
        height: '20px'
      }
    },
    disabled : {
      true : {
        cursor : 'not-allowed',
        opacity : 0.3
      },
      false : {
        cursor : 'pointer',
        opacity : 1,
      },
    },
    isChecked : {
      true : {},
      false: {}
    }
  },
  defaultVariants : {
    size : 'md',
    disabled : false,
    isChecked : false
  }
})

export const container = recipe({
  base: {
    ...baseStyle,
  },
  variants : {
    size: {
      sm: {
        width: '12px',
        height: '12px'
      },
      md: {
        width: '16px',
        height: '16px'
      }
    },
    isChecked: {
      true: {

      },
      false: {
        border: 'none'
      }
    }
  },
  defaultVariants : {
    size : 'md',
    isChecked : false
  }
})

export const inner = recipe({
  base : {
    ...baseStyle,
  },
  variants : {
    size: {
      sm: {
        width: '12px',
        height: '12px'
      },
      md: {
        width: '16px',
        height: '16px'
      }
    },
    isChecked: {
      true: {
        background : theme.color.blue500,
        border : `1px solid ${theme.color.blue500}`
      },
      false: {
        background: 'none',
        border : `1px solid ${theme.color.blue500}`
      }
    }
  },
  defaultVariants : {
    size : 'md',
    isChecked : false
  }
})

export const input = style({
  display : 'none'
})

export const textWrapper = style({
  marginLeft : '4px',
  fontWeight : theme.fontWeights.medium,
  color : theme.color.neutralGray800,
  ...theme.fonts['14']
})
