import {
  getButtonActiveStyle,
  getButtonDisableStyle,
  getButtonHoverStyle,
  getButtonSize,
  getButtonStyle,
  getLoadingStyle,
} from '@/shared/lib'
import { State, Style, StyleProps } from './Button.interface.ts'
import styled from 'styled-components'

export const Wrapper = styled.button<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$width};
  ${(props) => getButtonSize(props.$size)};
  ${(props) => getButtonStyle(props.$state, props.$style)};
  border-radius: 6px;
  user-select: none;

  &:disabled {
    ${(props) => getButtonDisableStyle(props.$state, props.$style)};
    cursor: not-allowed;
  }

  &:not(:disabled, :active):hover {
    ${(props) => getButtonHoverStyle(props.$state, props.$style)};
  }

  &:not(:disabled):active {
    ${(props) => getButtonActiveStyle(props.$state, props.$style)};
  }
`

export const Text = styled.span``

export const Loading = styled.i<{ $state: State; $style: Style }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  ${(props) => getLoadingStyle(props.$state, props.$style)};
  border-radius: 50%;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
