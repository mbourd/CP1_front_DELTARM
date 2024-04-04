import styled from 'styled-components';
import { stateHeight, actionsWidth } from '../types';

export const ActionsStyled = styled.div`
  background-color: rgb(255 205 0 / 10%);
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
      display: flex;
      justify-content: center;
      align-items: center;
      inset: 0;
      margin: auto;
      position: absolute;
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
