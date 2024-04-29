'use client'

import icons from '../../../assets/icons.json'
import React, { ReactElement } from 'react'

export type IconNames = keyof typeof icons

export interface IconProps {
  icon: IconNames
  size?: number
  style?: React.CSSProperties
  onClick?: () => void
}

export const Icon = ({ icon, size = 16, style, onClick }: IconProps): ReactElement => {
  const path = `${icons[icon].svg}`

  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={style} onClick={onClick}>
      <path d={path} transform="translate(-0.5, 0.5)"></path>
    </svg>
  )
}
