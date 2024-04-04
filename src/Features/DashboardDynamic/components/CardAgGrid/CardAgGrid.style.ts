import styled from 'styled-components';

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

  .ag-floating-filter {
    border-top: none !important;
    border-right: solid 1px rgb(186 191 199 / 50%) !important;
  }

  .ag-floating-filter-body {
    top: -0.172rem !important;
  }

  .ag-row {
    /* height: 140px; */
  }

  .ag-cell {
    padding-left: 7px;
    padding-right: 7px;

    p {
      line-height: normal;
      /* white-space: pre-line;
      word-wrap: break-word; */
    }
  }
`;

export { CardAgGridStyled };
