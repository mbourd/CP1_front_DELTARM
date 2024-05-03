import styled from 'styled-components';
import { cardHeight, footerHeight, headerHeight } from '../types';

export const BodyStyled = styled.div`
  height: ${cardHeight - (headerHeight + footerHeight) - 10}px;
  padding: 0 ${({ theme }) => theme.sizing.normal};
  overflow-y: auto;
`;
