import styled from 'styled-components';
import { IColor } from '../../types';

interface IProps {
  $bdc: keyof IColor;
  $bdr: string;
}

export const SelectStyled = styled.section<IProps>`
  position: relative;

  ._SelectContainer {
    background-color: ${({ theme }) => theme.color.white.main};
    border: 1px solid ${({ theme, $bdc }) => theme.color[$bdc].main};
    border-radius: ${({ $bdr }) => '0 0 ' + $bdr + ' ' + $bdr};
    border-top: none;
    padding: ${({ $bdr }) => $bdr};
    position: absolute;
    width: 100%;
    z-index: 10;
  }

  .eKJxUU ._SelectLabelButton {
    border: none;
    border-bottom: none;
  }
`;
