import styled from 'styled-components';
import { cardHeight } from './types';

interface IProps {
  $cardColor: string;
}

export const CardStyled = styled.section<IProps>`
  .MuiCard-root {
    position: relative;
    height: ${cardHeight}px;
    border: 1px solid ${({ $cardColor }) => $cardColor};
  }
`;
