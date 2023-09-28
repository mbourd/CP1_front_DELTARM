import styled, { css } from 'styled-components/macro';

type CardAgGridStyledProps = {
  // $alignColumnTitle: string;
};

const CardAgGridStyled = styled.div<CardAgGridStyledProps>`
  height: 415px;
  width: 100%;

  /* .ag-header {
    display: none;
  } */

  .ag-header-cell {
    &.left-header .ag-header-cell-label {
      justify-content: left;
    }
    &.center-header .ag-header-cell-label {
      justify-content: center;
    }
    &.right-header .ag-header-cell-label {
      justify-content: right;
    }
  }

  .ag-row {
    /* height: 140px; */
  }
  .ag-cell {
    p {
      line-height: normal;
      /* white-space: pre-line;
      word-wrap: break-word; */
    }
  }
`;

export { CardAgGridStyled };
