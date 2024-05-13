import { Args, Meta, StoryObj } from '@storybook/react'
import { ModalHeader } from '.'

const meta = {
  title: 'Component/Modal/ModalHeader',
  component: ModalHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: '제목',
    },
    subtitle: {
      description: '부제',
    },
    hasInfo: {
      description: '정보 아이콘 유무',
    },
    hasCloseButton: {
      description: '닫기 버튼 유무',
    },
    width: {
      type: 'string',
      description: '모달 길이',
    },
  },
} satisfies Meta<typeof ModalHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = ({
  title = '헤더 타이틀',
  subtitle = '서브 타이틀',
  width = '480px',
  hasInfo = true,
  hasCloseButton = true,
}: Args) => (
  <div style={{ padding: '20px', width: '100%', backgroundColor: 'lightgray' }}>
    <ModalHeader
      title={title}
      subtitle={subtitle}
      hasInfo={hasInfo}
      hasCloseButton={hasCloseButton}
      width={width}
    />
  </div>
)

Default.args = {
  title: '헤더 타이틀',
  subtitle: '서브 타이틀',
  hasInfo: true,
  hasCloseButton: true,
  width: '480px',
}
