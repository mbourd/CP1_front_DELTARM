import styled from 'styled-components';
import { headerHeight, ICardHeader } from '../types';

export const HeaderStyled = styled.header<Omit<ICardHeader, 'children'>>`
  height: ${headerHeight}px;
  background-color: ${({ color }) => color};
  color: ${({ theme }) => theme.color.white.main};
  font-family: ${({ theme }) => theme.font.medium.main};
  line-height: ${headerHeight}px;
  text-align: center;
  text-transform: uppercase;
`;
