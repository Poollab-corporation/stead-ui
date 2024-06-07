import { Icon } from '@/lib'
import { CHECKBOX_IMAGE_SIZE } from '@/lib/components/CheckBox/CheckBox.constants.ts'
import { CheckBoxProps } from '@/lib/components/CheckBox/CheckBox.interface.ts'
import {
  container,
  inner,
  input,
  label,
  textWrapper,
  wrapper,
} from '@/lib/components/CheckBox/styles.css.ts'
import { ChangeEvent } from 'react'

export const CheckBox = ({
  name,
  disabled = false,
  isChecked,
  onChange,
  size = 'md',
  text,
}: CheckBoxProps) => {
  const imageSize = CHECKBOX_IMAGE_SIZE[size]

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return
    onChange(event.target.checked)
  }

  return (
    <div className={wrapper}>
      <label
        className={label({
          size,
          disabled,
          isChecked,
        })}
        style={{}}
      >
        <div
          className={container({
            size,
            isChecked,
          })}
        >
          <div
            className={inner({
              size,
              isChecked,
            })}
          >
            <input
              type="checkbox"
              name={name}
              className={input}
              disabled={disabled}
              defaultChecked={isChecked}
              onChange={handleInputChange}
            />
            {isChecked && <Icon icon="icon/check-line1" color="white" size={imageSize} />}
          </div>
        </div>
      </label>
      {text && <p className={textWrapper}>{text}</p>}
    </div>
  )
}
