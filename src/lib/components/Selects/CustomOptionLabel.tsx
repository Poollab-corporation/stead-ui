'use client'

import * as Styles from './styles'
import React from 'react'
import { Icon, colorType, IconNames } from '@/lib/components/Icon'
import { Tooltip } from '@/lib'

interface FormatOptionProps {
  value: string | boolean | number
  label: string
  iconSource?: IconNames
  iconColor?: colorType
  isOverflowTooltip?: boolean
  maxLength?: number
  badge?: React.ReactNode
}

export const CustomOptionLabel = ({
  label,
  iconSource,
  iconColor,
  isOverflowTooltip,
  maxLength,
  badge,
}: FormatOptionProps) => (
  <Tooltip
    text={label}
    disabled={!isOverflowTooltip || (maxLength ? label.length <= maxLength : false)}
    direction="right"
  >
    <Styles.OptionLabel>
      {iconSource && <Icon icon={iconSource} color={iconColor} />}
      <Styles.OptionLabelText $isOverflowTooltip={isOverflowTooltip}>
        {label}
      </Styles.OptionLabelText>
      {badge && <Styles.Badge>{badge}</Styles.Badge>}
    </Styles.OptionLabel>
  </Tooltip>
)
