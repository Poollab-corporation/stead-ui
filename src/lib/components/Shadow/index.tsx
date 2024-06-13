import React from 'react'
import { ShadowType } from './Shadow.interface'
import { shadow } from './styles.css'

interface ShadowProps {
  type?: ShadowType
  children: React.ReactNode
  border?: number
}

export const Shadow = ({ type = 'shadowInner', children, border = 4 }: ShadowProps) => {
  return (
    <div className={shadow({ type })} style={{ borderRadius: `${border}px` }}>
      {children}
    </div>
  )
}
