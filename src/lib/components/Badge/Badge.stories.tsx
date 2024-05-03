import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '.'

const meta = {
  title: 'Component/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      type: 'string',
      defaultValue: '직접 추가',
      description: '지원 경로 및 불합격 표기',
    },
    type: {
      options: ['standard', 'primary', 'warning', 'gray', 'proceeding'],
      control: { type: 'select' },
      description: '타입 선택',
    },
    isDisabled: {
      type: 'boolean',
      defaultValue: false,
      description: '비활성화',
    },

    rounded: {
      type: 'number',
      defaultValue: 4,
      description: '라운드',
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: '직접 추가',
    type: 'standard',
    isDisabled: false,
    rounded: 4,
  },
}
