import styled from 'styled-components';
import { IColor } from '../../types';

interface IProps {
  mainColor: keyof IColor;
  checkedColor: keyof IColor;
  inputType: 'checkbox' | 'radio';
}

export const RadioStyled = styled.label<IProps>`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  flex-wrap: nowrap;

  ._CheckboxRadioCheckmark {
    border: 1px solid ${({ theme, mainColor }) => theme.color[mainColor].main};
    border-radius: ${({ inputType }) =>
      inputType === 'checkbox' ? '3px' : '50%'};
    display: block;
    height: 18px;
    position: relative;
    transition: all ${({ theme }) => theme.transition.time};
    width: 18px;
  }

  ._CheckboxRadioCheckmark:after {
    border-radius: ${({ inputType }) =>
      inputType === 'checkbox' ? '2px' : '50%'};
    bottom: 0;
    content: '';
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

  input:checked ~ ._CheckboxRadioCheckmark {
    border-color: ${({ theme, checkedColor }) =>
      theme.color[checkedColor].main};
  }

  input:checked ~ ._CheckboxRadioCheckmark:after {
    background-color: ${({ theme, checkedColor }) =>
      theme.color[checkedColor].main};
    height: 10px;
    width: 10px;
  }

  ._CheckboxRadioLabel {
    color: ${({ theme, mainColor }) => theme.color[mainColor].main};
    font-family: ${({ theme }) => theme.font.text.main};
    font-size: ${({ theme }) => theme.sizing.normal};
    margin-left: ${({ theme }) => theme.spacing.small};
    transition: all ${({ theme }) => theme.transition.time};
  }

  input:checked ~ ._CheckboxRadioCheckmark ~ ._CheckboxRadioLabel {
    color: ${({ theme, checkedColor }) => theme.color[checkedColor].main};
  }

  input {
    display: none;
  }
`;
