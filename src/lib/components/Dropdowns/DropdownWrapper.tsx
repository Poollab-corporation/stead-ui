'use client'

import DropdownMenu from './DropdownMenu'
import React, { useEffect, useRef, useState } from 'react'
import { DropdownButtonBox, dropdownButtonIcon, dropDownWrapper } from '@/lib/components/Dropdowns/styles.css.ts'

interface DropdownProps {
  children: React.ReactNode[] | React.ReactNode
  button: React.ReactNode
  direction?: 'left' | 'right'
  zIndex?: number
  disabled?: boolean
  isTypeSelect?: boolean
  isNotPortal?: boolean
  isAutoClose?: boolean
  isParentStatusClosed?: boolean
}

const DropdownWrapper = ({
  children,
  button,
  zIndex,
  isParentStatusClosed,
  direction = 'right',
  isNotPortal = false,
  disabled = false,
  isAutoClose = false,
  isTypeSelect = false,
}: DropdownProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [targetRect, setTargetRect] = useState(null)

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setIsOpen(!isOpen)
    setTargetRect(containerRef?.current?.getBoundingClientRect() as any)
  }

  const handleParentStatusClose = () => {
    if (isParentStatusClosed) return
    setIsOpen(false)
  }

  useEffect(() => {
    handleParentStatusClose()
  }, [isParentStatusClosed])

  return (
    <div className={dropDownWrapper} ref={containerRef}>
      <div className={DropdownButtonBox} onClick={handleToggle}>
        {button}
        {isTypeSelect && <span className={dropdownButtonIcon({
          isOpen
        })}/>}
      </div>

      <DropdownMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        targetRect={targetRect}
        content={children}
        direction={direction}
        zIndex={zIndex}
        isNotPortal={isNotPortal}
        isAutoClose={isAutoClose}
        disabled={disabled}
      />
    </div>
  )
}

export default DropdownWrapper
