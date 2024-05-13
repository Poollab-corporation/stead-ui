import type { Meta, StoryObj } from '@storybook/react'
import { CheckBox } from '@/lib'

const meta = {
  title: 'Component/Form/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
    actions: {
      onChange: {
        action: 'checked',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isChecked: {
      control: { type: 'boolean' },
    },
    disabled: { type: 'boolean', description: '비활성화 여부 설정' },
    onChange: { action: 'changed' },
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
      description: '사이즈',
    },
  },
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isChecked: true,
    disabled: false,
    onChange : () => {},
    size: 'md',
  },
}
