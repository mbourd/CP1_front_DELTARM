import styled from 'styled-components';
import { IColor } from '../../types';

interface IProps {
  mainColor: keyof IColor;
  checkedColor: keyof IColor;
}

export const CheckboxStyled = styled.label<IProps>`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  flex-wrap: nowrap;

  ._CheckboxInput {
    border: 1px solid ${({ theme, mainColor }) => theme.color[mainColor].main};
    border-radius: 3px;
    display: block;
    height: 18px;
    position: relative;
    transition: all ${({ theme }) => theme.transition.time};
    width: 18px;

    ._CheckboxMark {
      border-radius: 1px;
      bottom: 0;
      display: block;
      height: 0;
      left: 0;
      margin: auto;
      position: absolute;
      right: 0;
      top: 0;
      transition: all ${({ theme }) => theme.transition.time};
      width: 0;
    }
  }

  ._CheckboxLabel {
    color: ${({ theme }) => theme.color.text.main};
    font-family: ${({ theme }) => theme.font.text.main};
    font-size: ${({ theme }) => theme.sizing.normal};
    margin-left: ${({ theme }) => theme.spacing.small};
    transition: all ${({ theme }) => theme.transition.time};
  }

  &._CheckboxChecked {
    ._CheckboxInput {
      border-color: ${({ theme, checkedColor }) => theme.color[checkedColor].main};

      ._CheckboxMark {
        background-color: ${({ theme, checkedColor }) => theme.color[checkedColor].main};
        height: 10px;
        width: 10px;
      }
    }

    ._CheckboxLabel {
      color: ${({ theme, checkedColor }) => theme.color[checkedColor].main};
    }
  }

  input {
    display: none;
  }
`;
