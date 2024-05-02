import { disabledTag, primaryTag, standardTag, wrapperBase } from '@/lib/components/Tag/styles.css.ts'

interface TagProps {
  readonly text: string
  readonly type?: 'standard' | 'primary' | 'warning' | 'gray'
  readonly isDisabled?: boolean
  readonly size?: 'md' | 'lg'
}

export const Tag = ({ text, type = 'standard', size = 'lg', isDisabled }: TagProps) => {
  const getStyle = () => {
    if(isDisabled) return disabledTag
    if(type === 'standard') return standardTag

    return wrapperBase
  }

  return (
    <div className={getStyle()}>
       {text}
     </div>
  )
}
