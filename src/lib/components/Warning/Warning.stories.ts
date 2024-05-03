import type {Meta, StoryObj} from '@storybook/react'
import { Warning } from '@/lib'

const meta = {
  title: 'Component/Warning',
  component: Warning,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title : {
      type: 'string',
      description: '경고에 대한 제목을 적어주세요.',
    },
    description : {
      type : 'string',
      description : '경고에 대한 설명을 적어주세요.'
    },
    subDescription : {
      type : 'string',
      description : '경고에 대한 부가 설명을 적어주세요.'
    },
  },
} satisfies Meta<typeof Warning>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: '경고',
    description: '경고에 대한 설명을 적어주세요.',
    subDescription: '경고에 대한 부가 설명을 적어주세요.',
  },
}
