import styled from 'styled-components/macro';
import { headerHeight } from '../types';

export type HeaderStyledPropsType = {
  $backgroundColor: string;
};

export const HeaderStyled = styled.header<HeaderStyledPropsType>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ theme }) => theme.color.white.main};
  font-family: ${({ theme }) => theme.font.medium.main};
  height: ${headerHeight}px;
  line-height: ${headerHeight}px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 4px;
`;
