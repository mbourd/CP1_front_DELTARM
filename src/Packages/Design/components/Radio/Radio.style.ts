import styled from 'styled-components';
import { IColor } from '../../types';

interface IProps {
  $mainColor: keyof IColor;
  $checkedColor: keyof IColor;
  $inputType: 'checkbox' | 'radio';
  $checked: any;
  $font_style: any;
  $font_color: any;
  $disabled: boolean;
}

export const RadioStyled = styled.label<IProps>`
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};

  ._CheckboxRadioCheckmark {
    position: relative;
    display: block;
    min-width: 18px;
    height: 18px;
    border: 1px solid ${({ theme, $mainColor }) => theme.color[$mainColor].main};
    border-radius: ${({ $inputType }) =>
      $inputType === 'checkbox' ? '3px' : '50%'};
    transition: all ${({ theme }) => theme.transition.time};
  }

  ._CheckboxRadioCheckmark::after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-radius: ${({ $inputType }) =>
      $inputType === 'checkbox' ? '2px' : '50%'};
    margin: auto;
    content: '';
    inset: 0;
    transition: all ${({ theme }) => theme.transition.time};
  }

  input:checked ~ ._CheckboxRadioCheckmark {
    border-color: ${({ theme, $checkedColor }) =>
      theme.color[$checkedColor].main};
  }

  input:checked ~ ._CheckboxRadioCheckmark::after {
    width: 10px;
    height: 10px;
    background-color: ${({ theme, $checkedColor }) =>
      theme.color[$checkedColor].main};
  }

  ._CheckboxRadioLabel {
    margin-left: ${({ theme }) => theme.spacing.small};
    color: ${({ theme, $mainColor }) => theme.color[$mainColor].main};
    font-family: ${({ theme }) => theme.font.text.main};
    font-size: ${({ theme }) => theme.sizing.normal};
    transition: all ${({ theme }) => theme.transition.time};
  }

  input:checked ~ ._CheckboxRadioCheckmark ~ ._CheckboxRadioLabel {
    color: ${({ theme, $checkedColor }) => theme.color[$checkedColor].main};
  }

  input {
    display: none;
  }
`;
