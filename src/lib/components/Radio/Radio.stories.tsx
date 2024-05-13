import type { Meta, StoryObj } from '@storybook/react'
import { Radio } from './index'

const meta = {
  title: 'Component/Form/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    checked: true,
    name: 'radio',
    state: 'positive',
    onChange : () => undefined
  },
}
