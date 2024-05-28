import * as Styles from './styles'
import { Button } from '@/lib'

interface FormCreateLabelProps {
  searchValue: string
  onCreate: (value: string) => void
}

export const FormCreateLabel = ({ searchValue, onCreate }: FormCreateLabelProps) => {
  const handleSelect = () => {
    if (!onCreate) return
    onCreate(searchValue)
  }

  return (
    <Styles.FormatOptionLabel>
      <Styles.FormatOptionLabelText>검색 결과가 없습니다.</Styles.FormatOptionLabelText>
      {searchValue && (
        <Button
          size="xs"
          state="secondary"
          style="fill-weak"
          width="fit-content"
          text={`"${searchValue}" 선택`}
          onClick={handleSelect}
        />
      )}
    </Styles.FormatOptionLabel>
  )
}
