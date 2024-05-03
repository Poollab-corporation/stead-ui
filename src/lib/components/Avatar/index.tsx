'use client'
import { FONT_SIZE_OPTIONS, SIZE_OPTIONS } from './Avatar.constants'
import { AvatarProps } from './Avatar.interface'
import {
  avatar,
  avatarBackground,
  avatarFontSize,
  avatarSize,
  avatarBorder, avatarImage,
} from '@/lib/components/Avatar/styles.css.ts'
import { assignInlineVars} from '@vanilla-extract/dynamic'

export const Avatar = ({ size = 'md', alt = 'avatar', src, isBorder, disabled }: AvatarProps) => {
  const isImage = !src?.includes('rgb')

  const firstName = alt?.charAt(0)
  const sizeToUse = String(SIZE_OPTIONS[size])
  const fontSize = String(FONT_SIZE_OPTIONS[size])
  const border = isBorder ? '1px solid white' : 'none'
  // TODO : disabled 처리 필요

  if (!isImage) {
    return (
      <div
        className={avatar}
        style={assignInlineVars({
          [avatarSize] : sizeToUse,
          [avatarFontSize] : fontSize,
          [avatarBorder] : border,
          [avatarBackground] : src,
        })}
      >
        {firstName}
      </div>
    )
  }
  return (
    <div className={avatar} style={
      assignInlineVars({
        [avatarSize]: sizeToUse,
        [avatarBorder]: border,
      })
    }>
      <img className={avatarImage} src={src} width={sizeToUse} height={sizeToUse} alt={alt} />
    </div>
  )
}
