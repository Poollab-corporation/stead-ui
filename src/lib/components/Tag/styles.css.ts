import { style, createVar } from '@vanilla-extract/css'

export const type = createVar()
export const wrapperBase   = style({
  display: 'inline-block',
  padding: '8px',
  fontSize: '12px',
  fontWeight: '600',
  borderRadius: '4px',
})

export const disabledTag = style([wrapperBase,{
  opacity: 0.3
}])

export const standardTag = style([wrapperBase, {
  color : 'red'
}])

export const primaryTag = style([wrapperBase, {
  color : 'blue'
}])
