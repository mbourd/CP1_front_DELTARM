import styled from 'styled-components';
import { IColorVariant } from '../../../types';

interface IProps {
  $colorType: IColorVariant;
  $type?: 'default' | 'alt';
  $disabled?: boolean;
}

export const ButtonStyled = styled.span<IProps>`
  display: inline-block;
  white-space: nowrap;

  .MuiButtonBase-root,
  .MuiButton-root {
    padding: 6px 15px;
    border: ${({ theme, $type, $colorType, $disabled }) => {
      if ($disabled) {
        return $type === 'default'
          ? 'none'
          : `1px solid ${theme.color.disabled.main}`;
      }

      return $type === 'default' ? 'none' : `1px solid ${$colorType.main}`;
    }};
    background-color: ${({ theme, $type, $colorType, $disabled }) => {
      if ($disabled) {
        return $type === 'default' ? theme.color.disabled.main : 'transparent';
      }

      return $type === 'default' ? $colorType.main : 'transparent';
    }};
    color: ${({ $type, $colorType }) =>
      $type === 'default' ? '#FFF' : $colorType.main};
    font-family: ${({ theme }) => theme.font.medium.main};
    text-transform: none;
    transition: all ${({ theme }) => theme.transition.time};

    &:hover {
      border: ${({ $type, $colorType }) =>
        $type === 'default' ? 'none' : ` 1px solid ${$colorType.light}`};
      background-color: ${({ $type, $colorType }) =>
        $type === 'default' ? $colorType.dark : 'transparent'};
      color: ${({ $type, $colorType }) =>
        $type === 'default' ? '#FFF' : $colorType.light};
    }

    ._ButtonIcon {
      color: ${({ $type, $colorType }) =>
        $type === 'default' ? '#FFF' : $colorType.main};
    }
  }
`;
