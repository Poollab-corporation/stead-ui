'use client'
import { input, inputWrapper, label, radio, wrapper } from '@/lib/components/Radio/styles.css.ts'

interface RadioProps {
  checked?: boolean
  state?: 'positive' | 'negative' | 'default'
  size?: 'sm' | 'md'
  isLeft?: boolean
  name: string
  labelText?: string
  onChange: () => void
  value?: string
}

export const Radio = ({
  checked,
  name,
  labelText,
  onChange,
  isLeft = false,
  state = 'default',
  size = 'sm',
  value,
}: RadioProps) => {
  return (
    <div className={wrapper}>
      <div className={inputWrapper}>
        {!labelText && (
          <label className={label}>
            <div className={radio({
              size,
              state,
              checked
            })}/>
            <input className={input}
              name={name}
              checked={checked}
              onChange={onChange}
              type="radio"
              value={value}
            />
          </label>
        )}

        {labelText && (
          <label className={label}>
            {!isLeft && labelText}
            <div className={radio({
              size,
              state,
              checked
            })}/>
            {isLeft && labelText}
            <input className={input}
               name={name}
               checked={checked}
               onChange={onChange}
               type="radio"
               value={value}
            />
          </label>
        )}
      </div>
    </div>
  )
}
