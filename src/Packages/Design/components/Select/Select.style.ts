import styled from 'styled-components';
import { IColor } from '../../types';

interface IProps {
  $bdc: keyof IColor;
  $bdr: string;
}

export const SelectStyled = styled.section<IProps>`
  position: relative;

  ._SelectContainer {
    position: absolute;
    z-index: 10;
    width: 100%;
    padding: ${({ $bdr }) => $bdr};
    border: 1px solid ${({ theme, $bdc }) => theme.color[$bdc].main};
    border-radius: ${({ $bdr }) => '0 0 ' + $bdr + ' ' + $bdr};
    border-top: none;
    background-color: ${({ theme }) => theme.color.white.main};
  }

  .eKJxUU ._SelectLabelButton {
    border: none;
    border-bottom: none;
  }
`;
