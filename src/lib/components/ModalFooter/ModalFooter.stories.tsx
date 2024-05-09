import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ModalFooter } from '.'
import { Button } from '../Button'
import { selectWrapper } from './styles.css'

const meta = {
  title: 'Component/ModalFooter',
  component: ModalFooter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: 'object',
        keys: {
          left: { type: 'component' },
          right: { type: 'component' },
          select: { type: 'component' },
        },
      },
      description: '버튼',
    },
    hasSelect: {
      type: 'boolean',
      description: '셀렉트 박스 유무',
    },
    width: {
      type: 'string',
      description: '모달 길이',
    },
  },
} satisfies Meta<typeof ModalFooter>

export default meta
type Story = StoryObj<typeof meta>

interface Args {
  children: {
    left: React.ReactNode
    right: React.ReactNode
    select?: React.ReactNode
  }
  hasSelect?: boolean
  width?: string
}

export const Default: Story = ({ children, hasSelect = false, width = '480px' }: Args) => (
  <div style={{ padding: '20px', backgroundColor: 'lightgray' }}>
    <ModalFooter hasSelect={hasSelect} width={width}>
      {children.left}
      {hasSelect && <div className={selectWrapper}>{children.select}</div>}
      {children.right}
    </ModalFooter>
  </div>
)

Default.args = {
  children: {
    left: <Button text="취소" state="secondary" style="line" size="md" width="58px" />,
    right: <Button text="버튼" state="secondary" style="fill-strong" size="md" width="58px" />,
    select: (
      <select
        style={{
          border: '1px solid lightgray',
          borderRadius: '6px',
          backgroundColor: 'white',
          width: '78px',
          height: '40px',
        }}
      />
    ),
  },
  hasSelect: false,
  width: '480px',
}
