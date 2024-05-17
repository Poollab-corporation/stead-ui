import { multiValueRemoveButton } from './styles.css.ts'
import { components, MultiValueRemoveProps } from 'react-select'
import { Button } from '@/lib'

export const SelectMultiValueRemoveButton = (props: MultiValueRemoveProps) => {
  return (
    <components.MultiValueRemove {...props}>
      <span className={multiValueRemoveButton}>
        <Button leadingIcon="icon/cancle-solid" state="secondary" style="mono" />
      </span>
    </components.MultiValueRemove>
  )
}
