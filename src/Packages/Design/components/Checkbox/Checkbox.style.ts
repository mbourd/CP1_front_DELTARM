import styled from 'styled-components';
import { IColor } from '../../types';

interface IProps {
  mainColor: keyof IColor;
  checkedColor: keyof IColor;
  size: 'small' | 'medium' | 'large';
}

export const CheckboxStyled = styled.label<IProps>`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  flex-wrap: nowrap;

  ._Checkbox-input {
    border: 1px solid ${({ theme, mainColor }) => theme.color[mainColor].main};
    border-radius: 3px;
    display: block;
    position: relative;
    transition: all ${({ theme }) => theme.transition.time};

    ._Checkbox-mark {
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

  ._Checkbox-label {
    color: ${({ theme }) => theme.color.text.main};
    font-family: ${({ theme }) => theme.font.text.main};
    margin-left: ${({ theme }) => theme.spacing.small};
    transition: all ${({ theme }) => theme.transition.time};
  }

  &._Checkbox-checked {
    ._Checkbox-input {
      border-color: ${({ theme, checkedColor }) => theme.color[checkedColor].main};
      ._Checkbox-mark {
        background-color: ${({ theme, checkedColor }) => theme.color[checkedColor].main};
      }
    }

    ._Checkbox-label {
      color: ${({ theme, checkedColor }) => theme.color[checkedColor].main};
    }
  }

  &._Checkbox-large {
    ._Checkbox-input {
      height: 30px;
      width: 30px;

      ._Checkbox-mark {
        height: 20px;
        width: 20px;
      }
    }
  }

  &._Checkbox-medium {
    ._Checkbox-input {
      height: 24px;
      width: 24px;

      ._Checkbox-mark {
        height: 14px;
        width: 14px;
      }
    }
  }

  &._Checkbox-small {
    ._Checkbox-input {
      height: 18px;
      width: 18px;

      ._Checkbox-mark {
        height: 10px;
        width: 10px;
      }
    }
  }

  input {
    display: none;
  }
`;
