import styled from 'styled-components';

export const DataGridControlStyled = styled.div`
  ._DataGrid {
    .select-list-data-grid {
      z-index: 0;
      display: block;
      padding-top: 26px;
      white-space: unset;
    }

    .cell {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      line-height: initial;
      white-space: unset;
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
    overflow: visible !important;
    min-height: 40px !important;
  }

  .select-cell-ag-grid {
    .ag-cell-value {
      z-index: 999;
      overflow: clip visible;
      height: 100%;
    }
  }

  .ag-root,
  .ag-root-wrapper {
    overflow: scroll visible !important;
  }

  .ag-root.ag-layout-auto-height {
    overflow: visible !important;
    width: 0;
    flex: 1 1 auto;
  }

  .ag-header-viewport,
  .ag-floating-top-viewport,
  .ag-body-viewport,
  .ag-center-cols-viewport,
  .ag-floating-bottom-viewport,
  .ag-body-horizontal-scroll-viewport,
  .ag-virtual-list-viewport {
    position: relative;
    overflow: visible !important;
    min-width: 0;
    height: 100%;
    flex: 1 1 auto;
  }
`;

export const AgDataGridStyle = styled.div<{
  $background_color?: string;
  $border_color?: string;
  $is_border_color?: boolean;
  $font_color?: string;
  $font_size?: string;
  $font_weight?: string;
  $header_font_color?: string;
  $header_bg_color?: string;
  $odd_row_bg_color?: string;
  $heightGrid?: string | number;
}>`
  height: ${({ $heightGrid }) => {
    if ($heightGrid !== undefined)
      return typeof $heightGrid === 'string' ? $heightGrid : $heightGrid + 'px';

    return 'auto';
  }};

  .ag-watermark {
    display: none !important;
  }

  .ag-header-cell {
    position: absolute;
    display: inline-flex;
    overflow: hidden;
    height: 100%;
    align-items: left !important;
    font-size: ${({ $font_size }) => ($font_size ? `${$font_size}px` : '13px')};
    font-weight: ${({ $font_weight }) =>
      $font_weight ? $font_weight : 'normal'};

    &.left-header .ag-header-cell-label {
      justify-content: left;
      text-align: left;
    }

    &.center-header .ag-header-cell-label {
      justify-content: center;
      margin-left: 7px;
      text-align: center;
    }

    &.right-header .ag-header-cell-label {
      justify-content: right;
      text-align: right;
    }
  }

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
      $font_size ? `${$font_size}px` : '12px'};
    --ag-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    /* color: #FAF5E3 */

    .ag-menu-option {
      font-weight: normal;
    }

    .ag-paging-panel {
      font-size: 12px;
    }
  }

  .ag-floating-filter-input input[aria-label='Contrôle Filter Input'] {
    min-height: fit-content;
  }

  .ag-header-cell-resize::after {
    position: absolute;
    z-index: 1;
    top: 0 !important;
    left: 3px !important;
    display: block;
    width: 1px;
    /* width: ${({ $is_border_color }) => ($is_border_color ? '5px' : '0')}; */
    height: 100% !important;
    background-color: ${({ $border_color, $is_border_color }) =>
      $is_border_color ? $border_color : 'none'};
  }

  .ag-cell-value,
  .ag-group-value {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ag-cell {
    font-size: ${({ $font_size }) => ($font_size ? `${$font_size}px` : '13px')};
    font-weight: ${({ $font_weight }) =>
      $font_weight ? $font_weight : 'normal'};
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
