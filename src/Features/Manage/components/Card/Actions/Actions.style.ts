import styled from 'styled-components';
import { stateHeight, actionsWidth } from '../types';

export const ActionsStyled = styled.div`
  position: absolute;
  top: ${stateHeight}px;
  right: 0;
  bottom: 0;
  width: ${actionsWidth}px;
  background-color: rgb(255 205 0 / 10%);

  a {
    position: relative;
    display: block;
    height: 50%;
    border-bottom: 1px dotted ${({ theme }) => theme.color.primary.main};
    cursor: pointer;

    .icon {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      inset: 0;
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
