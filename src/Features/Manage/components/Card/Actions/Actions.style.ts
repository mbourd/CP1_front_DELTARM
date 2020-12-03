import styled from 'styled-components/macro';
import { cardHeight, stateHeight, actionsWidth } from '../types';

export const ActionsStyled = styled.div`
  background-color: rgba(255, 205, 0, 0.1);
  height: ${cardHeight - stateHeight}px;
  position: absolute;
  right: 0;
  top: ${stateHeight}px;
  width: ${actionsWidth}px;

  a,
  .classify {
    border-bottom: 1px dotted ${({ theme }) => theme.color.primary.main};
    cursor: pointer;
    display: block;
    height: ${(cardHeight - stateHeight) / 3}px;
    position: relative;

    .icon {
      bottom: 0;
      height: 1em;
      left: 0;
      margin: auto;
      position: absolute;
      right: 0;
      top: 0;
      width: 1em;
    }

    &:last-child {
      border-bottom: 0;
    }

    &:hover {
      .MuiSvgIcon-root {
        color: ${({ theme }) => theme.color.hover.main};
      }
    }
  }
`;
