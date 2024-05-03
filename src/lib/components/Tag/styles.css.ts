import { recipe } from '@vanilla-extract/recipes'

export const tag = recipe({
  base : {
    display: 'inline-block',
    padding: '8px',
    borderRadius: '4px',
  },
  variants : {
    type : {
      standard : {
        color: 'red'
      },
      primary : {
        color: 'blue'
      },
      warning : {
        color: 'yellow'
      },
      gray : {
        color: 'gray'
      }
    },
    size: {
      md: {
        padding: '3px 6px 1px',
        fontWeight: '500',
        fontSize: '10px'
      },
      lg: {
        padding: '8px',
        fontWeight: '600',
        fontSize: '12px'
      }
    },
    isDisabled: {
      true : { opacity: 0.3 },
      false : {opacity : 1}
    }
  },
  compoundVariants: [
    {
      variants: {
        type: 'standard',
        size: 'lg'
      },
      style: {}
    }
  ],
  defaultVariants: {
    type: 'standard',
    size: 'md',
    isDisabled : false
  }
})