import styled from 'styled-components/macro';
import { headerHeight, ICardHeader } from '../types';

export const HeaderStyled = styled.header<Omit<ICardHeader, 'children'>>`
  background-color: ${({ color }) => color};
  color: ${({ theme }) => theme.color.white.main};
  font-family: ${({ theme }) => theme.font.medium.main};
  height: ${headerHeight}px;
  line-height: ${headerHeight}px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 4px;
`;
