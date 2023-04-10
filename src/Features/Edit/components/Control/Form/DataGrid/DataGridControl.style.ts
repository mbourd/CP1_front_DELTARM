import styled, { css } from 'styled-components/macro';

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

export const AgDataGridStyle = styled.div.attrs(
  (props: {
    background_color: string;
    border_color: string;
    is_border_color: boolean;
    text_color: string;
  }) => props,
)`
  /* background-color: red; */

  /* .ag-header-row {
    position: absolute;
    overflow: hidden;
    background-color: lightgray !important;
  }

  .my-header-class {
    background-color: red;
  } */

  /* .ag-theme-alpine {
    --ag-header-column-separator-display: block;
    --ag-header-column-separator-height: 100%;
    --ag-header-column-separator-width: 4px;
    --ag-header-column-separator-color: purple;

    --ag-header-column-resize-handle-display: block;
    --ag-header-column-resize-handle-height: 100%;
    --ag-header-column-resize-handle-width: 5px;
    --ag-header-column-resize-handle-color: ${({ border_color }) =>
    border_color ? border_color : 'gray'};
  } */

  .ag-theme-alpine .ag-header-cell-resize::after {
    position: absolute;
    z-index: 1;
    display: block;
    left: calc(50% - 1px);
    width: 5px;
    height: 100% !important;
    top: 0 !important;
    background-color: ${({ border_color, is_border_color }) =>
      is_border_color ? border_color : 'gray'};
  }

  .ag-header-cell {
    display: inline-flex;
    align-items: center;
    position: absolute;
    height: 100%;
    overflow: hidden;
    color: ${({ text_color }) => (text_color ? text_color : '#000000')};
    /* background-color: red !important; */
    background-color: ${({ background_color }) =>
      background_color ? background_color : '#ffffff'};
    /* border-right-color: ${({ border_color }) =>
      border_color ? border_color : '#123456'}; */
  }
`;
