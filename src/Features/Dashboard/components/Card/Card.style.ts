import styled from 'styled-components/macro';
import { cardHeight } from './types';

interface IProps {
  $cardColor: string;
}

export const CardStyled = styled.section<IProps>`
  .MuiCard-root {
    border: 1px solid ${({ $cardColor }) => $cardColor};
    position: relative;
    height: ${cardHeight}px;
  }
`;
