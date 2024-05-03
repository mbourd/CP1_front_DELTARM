import styled from 'styled-components';
import { headerHeight } from '../types';

export type HeaderStyledPropsType = {
  $backgroundColor: string;
};

export const HeaderStyled = styled.header<HeaderStyledPropsType>`
  height: ${headerHeight}px;
  border-radius: 4px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ theme }) => theme.color.white.main};
  font-family: ${({ theme }) => theme.font.medium.main};
  line-height: ${headerHeight}px;
  text-align: center;
  text-transform: uppercase;
`;
