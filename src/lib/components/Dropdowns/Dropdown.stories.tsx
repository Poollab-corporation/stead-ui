import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './index'
import { Button } from '../Button'

const meta = {
  title: 'Component/Dropdown/Default',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    actions: {},
  },
  tags: ['autodocs'],
  argTypes: {
    button: { type: 'function', description: '드롭다운 버튼 컴포넌트' },
    children: { type: 'function', description: '드롭다운 메뉴 리스트' },
    direction: {
      options: ['left', 'right'],
      control: { type: 'radio' },
      description: '드롭다운 벙향',
    },
    isParentStatusClosed: {
      description:
        '드롭다운 Wrapper에서 useState로 상태를 셋팅 후, 드롭다운 버튼 컴포넌트에서 onClick이벤트를 이용하여 true를 선언 후, 드롭다운 메뉴의 이벤트들에 의해, false일 때, Dropdown이 닫힘',
    },
  },
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    direction: 'right',
    zIndex: 100,
    button: <Button size="md" state="primary" text="Dropdown" />,
    children: (
      <>
        <Dropdown.Item onClick={() => {}} disabled={true}>
          일정 변경
        </Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>일정 삭제</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => {}} isWarning={true}>
          일정 취소
        </Dropdown.Item>
      </>
    ),
  },
}
