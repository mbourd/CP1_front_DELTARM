import styled from 'styled-components/macro';
import { ICardBodyRow } from '../../types';

export const RowStyled = styled.div<Pick<ICardBodyRow, 'color'>>`
  border-bottom: 1px dotted ${({ color }) => color};

  &:last-child {
    border: none;
  }

  .MuiGrid-container {
    height: 60px;

    .number {
      background-color: ${({ color }) => color};
      border-radius: ${({ theme }) => theme.sizing.radius};
      color: ${({ theme }) => theme.color.white.main};
      font-family: ${({ theme }) => theme.font.medium.main};
      font-size: ${({ theme }) => theme.sizing.small};
      height: 30px;
      line-height: 30px;
      text-align: center;
      width: 30px;
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
