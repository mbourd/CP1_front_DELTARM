import styled from 'styled-components/macro';
import { actionsWidth, stateHeight } from '../types';

export const BodyStyled = styled.div`
  margin: ${stateHeight}px ${actionsWidth}px 0 0;
  padding: 10px;

  .MuiGrid-item {
    padding: 10px;

    .label {
      font-family: ${({ theme }) => theme.font.medium.main};
      margin-bottom: ${({ theme }) => theme.spacing.xSmall};
    }
  }
`;
