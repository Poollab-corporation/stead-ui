'use client'

import React from 'react'
import { item } from '@/lib/components/Dropdowns/styles.css.ts'

interface DropdownItemProps {
  size?: 'md' | 'lg'
  disabled?: boolean
  isWarning?: boolean
  children: React.ReactNode
  onClick?: () => void
}

const DropdownItem = ({
  size = 'md',
  disabled = false,
  isWarning = false,
  children,
  onClick,
}: DropdownItemProps) => {
  const handleClick = () => {
    if (disabled) return
    onClick?.()
  }

  return (
    <div className={item({
      disabled,
      size,
      isWarning
    })} onClick={handleClick}>
      {children}
    </div>
  )
}

export default DropdownItem
