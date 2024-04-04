import styled from 'styled-components';
import { ICardBodyRow } from '../../types';

export const RowStyled = styled.div<Pick<ICardBodyRow, 'color'>>`
  border-bottom: 1px dotted ${({ color }) => color};

  &:last-child {
    border: none;
  }

  .MuiGrid-container {
    height: 60px;

    .number {
      width: 30px;
      height: 30px;
      border-radius: ${({ theme }) => theme.sizing.radius};
      background-color: ${({ color }) => color};
      color: ${({ theme }) => theme.color.white.main};
      font-family: ${({ theme }) => theme.font.medium.main};
      font-size: ${({ theme }) => theme.sizing.small};
      line-height: 30px;
      text-align: center;
    }

    .text {
      padding-left: ${({ theme }) => `${theme.sizing.normal}`};
      text-transform: lowercase;

      .stage {
        a {
          color: ${({ color }) => color};
        }
      }
    }
  }
`;
