import styled from 'styled-components/macro';

export const DataGridControlStyled = styled.div`
  ._DataGrid {
    .select-list-data-grid {
      padding-top: 26px;
      white-space: unset;
      display: block;
      z-index: 0;
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
    overflow: visible !important;
  }

  .select-cell-ag-grid {
    .ag-cell-value {
      overflow-x: clip;
      overflow-y: visible !important;
      height: 100%;
      z-index: 999;
    }
  }
  .ag-root,
  .ag-root-wrapper {
    overflow-x: scroll !important;
    overflow-y: visible !important;
  }

  .ag-root.ag-layout-auto-height {
    overflow: visible !important;
    flex: 1 1 auto;
    width: 0;
  }

  .ag-header-viewport,
  .ag-floating-top-viewport,
  .ag-body-viewport,
  .ag-center-cols-viewport,
  .ag-floating-bottom-viewport,
  .ag-body-horizontal-scroll-viewport,
  .ag-virtual-list-viewport {
    position: relative;
    height: 100%;
    min-width: 0px;
    overflow: visible !important;
    flex: 1 1 auto;
  }
`;
