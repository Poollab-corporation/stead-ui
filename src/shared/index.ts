import { colorType, IconNames } from '../lib/components/Icon'
import icons from '../assets/icons.json'
import { theme } from '../globalTheme.css'

export const getIconBackgroundImageUrl = (icon: IconNames, color?: colorType, size?: number)  => {
  const iconPath = icons[icon].svg
  const iconSize = size || 16
  const pathColor = theme.colors[color || 'neutralGray800']

  const svgTemplate = `<svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}"><path fill="${pathColor}" d="${iconPath}" /></svg>`
  const encodedSvg = encodeURIComponent(svgTemplate)

  return `data:image/svg+xml;utf8,${encodedSvg}`
}
