import styled from 'styled-components/macro';

export const DataGridControlStyled = styled.div`
  ._DataGrid {
    contain: unset;
    overflow: unset;
    content-visibility: unset;
    .select-list-data-grid {
      contain: unset;
      overflow: unset;
      padding-top: 26px;
      white-space: unset;
    }
    .cell {
      white-space: unset;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      line-height: initial;
    }
  }

  .ag-row {
    z-index: 0;
  }

  .ag-row.ag-row-focus {
    z-index: 1;
  }
  .ag-center-cols-clipper,
  .ag-center-cols-container {
    min-height: 40px !important;
  }
  .select-cell-ag-grid {
    .ag-cell-value {
      overflow-x: clip;
      overflow-y: visible;
    }
  }
  .ag-root,
  .ag-root-wrapper {
    overflow-y: visible !important;
  }
`;
