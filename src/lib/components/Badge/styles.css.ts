import { recipe } from '@vanilla-extract/recipes'

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
        backgroundColor: '#e0e0e0',
        color: '#333'
      },
      primary: {
        backgroundColor: '#1976d2',
        color: '#fff'
      },
      warning: {
        backgroundColor: '#f57c00',
        color: '#fff'
      },
      gray: {
        backgroundColor: '#9e9e9e',
        color: '#fff'
      },
      proceeding: {
        backgroundColor: '#ffeb3b',
        color: '#333'
      },
      success: {
        backgroundColor: '#4caf50',
        color: '#fff'
      }
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