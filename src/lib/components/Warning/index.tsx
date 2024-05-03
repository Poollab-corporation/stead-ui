import { Icon } from '@/lib'
import { content } from '@/lib/components/Warning/styles.css.ts'

interface WarningProps {
  title: string
  description?: string
  subDescription?: string
}

export const Warning = ({ title, description, subDescription }: WarningProps) => {
  return (
    <div className={content}>
      <Icon icon="icon/warning-solid" color="systemOrange500" size={64} />
      <div className={title}>{title}</div>
      <div className={description}>
        {description}
        <br />
        {subDescription}
      </div>
    </div>
  )
}
