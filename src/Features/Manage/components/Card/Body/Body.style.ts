import styled from 'styled-components';
import { actionsWidth, stateHeight } from '../types';

export const BodyStyled = styled.div`
  padding: 10px;
  margin: ${stateHeight}px ${actionsWidth}px 0 0;

  .MuiGrid-item {
    padding: 10px;
  }
`;
