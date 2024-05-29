'use client'

import { Icon } from '../Icon'
import { RadioProps } from './Radio.interface'
import { input, inputWrapper, label, mark, radio, text, wrapper } from './styles.css'

export const Radio = ({
  state = 'primary',
  size = 'md',
  checked,
  name,
  labelText,
  value,
  onChange,
  isRequired = false,
  hasInfo = false,
  disabled = false,
}: RadioProps) => {
  return (
    <div className={wrapper}>
      <div className={inputWrapper}>
        <label className={label}>
          <div
            className={radio({
              size,
              state,
              checked,
              disabled,
            })}
          />
          {labelText && <span className={text}>{labelText}</span>}
          <input
            className={input}
            type="radio"
            name={name}
            checked={checked}
            value={value}
            onChange={onChange}
          />
          {isRequired && <span className={mark}>*</span>}
          {hasInfo && <Icon icon="icon/info-line" />}
        </label>
      </div>
    </div>
  )
}
