import styled from 'styled-components/macro';
import { cardHeight, footerHeight, headerHeight } from '../types';

export const BodyStyled = styled.div`
  height: ${cardHeight - (headerHeight + footerHeight)}px;
  padding: 0 ${({ theme }) => theme.sizing.normal};
`;
