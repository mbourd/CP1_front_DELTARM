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

export const AgDataGridStyle = styled.div<{
  $background_color: string;
  $border_color: string;
  $is_border_color: boolean;
  $font_color: string;
  $font_size: string;
  $font_weight: string;
  $header_font_color: string;
  $header_bg_color: string;
  $odd_row_bg_color: string;
  $heightGrid?: string | number;
}>`
  height: ${({ $heightGrid }) => {
    if ($heightGrid !== undefined)
      return typeof $heightGrid === 'string' ? $heightGrid : $heightGrid + 'px';

    return 'auto';
  }};

  .ag-theme-alpine {
    --ag-foreground-color: ${({ $font_color }) =>
      $font_color ? $font_color : '#000000'};
    --ag-background-color: ${({ $background_color }) =>
      $background_color ? $background_color : '#ffffff'};
    --ag-header-foreground-color: ${({ $header_font_color }) =>
      $header_font_color ? $header_font_color : '#000000'};
    --ag-header-background-color: ${({ $header_bg_color }) =>
      $header_bg_color ? $header_bg_color : '#ffffff'};
    --ag-odd-row-background-color: ${({ $odd_row_bg_color }) =>
      $odd_row_bg_color ? $odd_row_bg_color : '#ffffff'};
    /* --ag-header-column-resize-handle-color: rgb(126, 46, 132); */

    --ag-font-size: ${({ $font_size }) =>
      $font_size ? `${$font_size}px` : '17px'};
    --ag-font-family: monospace;
    /* color: #FAF5E3 */
  }

  .ag-theme-alpine .ag-header-cell-resize::after {
    position: absolute;
    z-index: 1;
    display: block;
    left: calc(50% - 1px);
    /* width: ${({ $is_border_color }) => ($is_border_color ? '5px' : '0')}; */
    height: 100% !important;
    top: 0 !important;
    background-color: ${({ $border_color, $is_border_color }) =>
      $is_border_color ? $border_color : 'none'};
  }

  .ag-cell-value,
  .ag-group-value {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ag-header-cell {
    display: inline-flex;
    align-items: left !important;
    position: absolute;
    height: 100%;
    overflow: hidden;
    font-weight: ${({ $font_weight }) =>
      $font_weight ? $font_weight : 'normal'};
    font-size: ${({ $font_size }) => ($font_size ? `${$font_size}px` : '13px')};
  }

  .ag-cell {
    font-weight: ${({ $font_weight }) =>
      $font_weight ? $font_weight : 'normal'};
    font-size: ${({ $font_size }) => ($font_size ? `${$font_size}px` : '13px')};
  }

  /* .ag-theme-alpine .ag-paging-panel {
    color: ${({ $font_color }) =>
    $font_color ? $font_color : '#000000'} !important;
    background-color: ${({ $background_color }) =>
    $background_color ? $background_color : '#ffffff'} !important;
  }

  .ag-center-cols-container {
    background-color: ${({ $background_color }) =>
    $background_color ? $background_color : 'transparent'} !important;
  } */
`;
