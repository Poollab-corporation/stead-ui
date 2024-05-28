import * as Styles from './styles'
import { components, MultiValueRemoveProps } from 'react-select'
import { Button } from '@/lib'

export const SelectMultiValueRemoveButton = (props: MultiValueRemoveProps) => {
  return (
    <components.MultiValueRemove {...props}>
      <Styles.MultiValueRemoveButton>
        <Button leadingIcon="icon/cancle-solid" state="secondary" style="mono" />
      </Styles.MultiValueRemoveButton>
    </components.MultiValueRemove>
  )
}
