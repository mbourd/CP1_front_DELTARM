import styled from 'styled-components/macro';
import { stateHeight, actionsWidth } from '../types';

export const ActionsStyled = styled.div`
  background-color: rgba(255, 205, 0, 0.1);
  position: absolute;
  right: 0;
  top: ${stateHeight}px;
  bottom: 0;
  width: ${actionsWidth}px;

  a {
    border-bottom: 1px dotted ${({ theme }) => theme.color.primary.main};
    cursor: pointer;
    display: block;
    height: 50%;
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
