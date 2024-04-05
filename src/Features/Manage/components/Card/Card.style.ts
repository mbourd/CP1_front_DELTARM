import styled from 'styled-components';
import { cardHeight, stateHeight } from './types';

interface IProps {
  $color: string;
}

export const CardStyled = styled.div<IProps>`
  margin-bottom: ${({ theme }) => theme.spacing.normal};

  .MuiCard-root {
    position: relative;
    min-height: ${cardHeight}px;
    border: 1px solid ${({ $color }) => $color};
  }

  .state {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${stateHeight}px;
    background-color: ${({ $color }) => $color};
  }
`;
