import { Button } from '../Button'
import { Icon } from '../Icon'
import { contents, contentsTop, subtitleStyle, titleStyle, wrapper } from './styles.css'

interface ModalHeaderProps {
  title: string
  subtitle?: string
  width?: string
  hasInfo?: boolean
  hasCloseButton?: boolean
}

export const ModalHeader = ({
  title,
  subtitle,
  width = '100%',
  hasInfo = true,
  hasCloseButton = true,
}: ModalHeaderProps) => {
  return (
    <div className={wrapper} style={{ width }}>
      <div className={contents}>
        <div className={contentsTop}>
          <p className={titleStyle}>{title}</p>
          {hasInfo && <Icon icon="icon/info-line" color="neutralGray400" />}
        </div>
        {subtitle && <p className={subtitleStyle}>{subtitle}</p>}
      </div>
      {hasCloseButton && (
        <Button leadingIcon="icon/cancle-line" state="secondary" style="mono" size="sm" />
      )}
    </div>
  )
}
