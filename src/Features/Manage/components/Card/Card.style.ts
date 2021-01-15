import styled from 'styled-components/macro';
import { cardHeight, stateHeight } from './types';

interface IProps {
  color: string;
}

export const CardStyled = styled.div<IProps>`
  margin-bottom: ${({ theme }) => theme.spacing.normal};

  .MuiCard-root {
    border: 1px solid ${({ color }) => color};
    min-height: ${cardHeight}px;
    position: relative;
  }

  .state {
    background-color: ${({ color }) => color};
    height: ${stateHeight}px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;
