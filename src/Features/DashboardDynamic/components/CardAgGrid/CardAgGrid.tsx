import React, {
  useCallback,
  useMemo /*, useCallback, useRef, useState*/,
} from 'react';

// import { AgGridReact } from 'ag-grid-react';
// import { LicenseManager } from 'ag-grid-enterprise';
// import { GridReadyEvent } from 'ag-grid-community';
// LicenseManager.setLicenseKey(
//   'Using_this_AG_Grid_Enterprise_key_( AG-040865 )_in_excess_of_the_licence_granted_is_not_permitted___Please_report_misuse_to_( legal@ag-grid.com )___For_help_with_changing_this_key_please_contact_( info@ag-grid.com )___( Delta RM )_is_granted_a_( Single Application )_Developer_License_for_the_application_( DeltaRM )_only_for_( 1 )_Front-End_JavaScript_developer___All_Front-End_JavaScript_developers_working_on_( DeltaRM )_need_to_be_licensed___( DeltaRM )_has_been_granted_a_Deployment_License_Add-on_for_( 1 )_Production_Environment___This_key_works_with_AG_Grid_Enterprise_versions_released_before_( 11 April 2024 )____[v2]_MTcxMjc5MDAwMDAwMA==f0a7e979572bce7bc4376cbdee159586',
// );
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import { AG_GRID_LOCALE_EN } from 'Features/Edit/components/Control/Form/DataGrid/translations/en';
// import { AG_GRID_LOCALE_FR } from 'Features/Edit/components/Control/Form/DataGrid/translations/fr';

import { IActionButton, ICard /*, ICardRow*/ } from '../types';
import { CardAgGridStyled } from './CardAgGrid.style';
// import { BPITooltip } from 'Shared/components';
// import DOMPurify from 'dompurify';
// import * as icons from '@mui/icons-material';
import { Header } from 'Features/Dashboard/components/Card/Header/Header';
// import { useTheme } from 'Packages/Design';
// import { StyledTableCell } from '../Card/Card.style';
// import { useTrans } from 'Services';
import {
  DataGridComponent,
  DataGridDetailsColumnType,
  DataGridDetailsRow,
  IApiControl,
} from 'Features/Edit/types';
import { DataGridControlAgGrid } from 'Features/Edit/components/Control/Form/DataGrid/DataGridControlAgGrid';

type CardAgGridProps = {
  card: ICard;
  triggerAction: (action: IActionButton | null) => void;
};

const CardAgGrid: React.FC<React.PropsWithChildren<CardAgGridProps>> = ({
  card,
  triggerAction,
}): JSX.Element => {
  // const [rowHeight] = useState(96);
  // const theme = useTheme();
  // const [, , lang] = useTrans('Dashboard');
  // const { user } = useSecurity();
  // const jwt = user.getJwt();
  // const user_language: any = security.decodeJwtToken(jwt ? jwt : '');
  // const [localeText] = useState(
  //   lang === 'en' ? AG_GRID_LOCALE_EN : AG_GRID_LOCALE_FR,
  // );
  // const gridRef = useRef<any>();
  const control = useMemo(
    (): IApiControl => ({
      control_desc_1: null,
      control_desc_2: null,
      control_editable: false,
      control_conditional: false,
      control_id: '',
      control_mandatory: false,
      mandatory: false,
      control_previous_value: null,
      control_title: '',
      control_type: 'boolean',
      control_value: null,
      control_family: '',
      control_regex: null,
      control_regex_msg: null,
      control_manage_compliance: false,
      control_options: undefined,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    }),
    [],
  );
  // const indexesColumnsBorderRight: number[] = useMemo(() => {
  //   const indexes: number[] = [];

  //   // stores the knowing of which cells should have a border right or not.
  //   card.cols.values.forEach((column, index) => {
  //     if (column.border_right) indexes.push(index);
  //   });

  //   return indexes;
  // }, [card.cols.values]);

  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      sortable: true,
      autoHeight: true,
      // cellClass: 'grid-cell-centered',
    }),
    [],
  );

  // // generate (by icon name) a material ui icon component with tooltip.
  // const generateMaterialIcon = useCallback(
  //   (
  //     iconName: string,
  //     color: string,
  //     size: string,
  //     action: IActionButton | null,
  //     hint: string,
  //   ): React.ReactElement | null => {
  //     const Icon = icons[iconName];

  //     if (!Icon) return null;

  //     const renderIcon = (
  //       <Icon
  //         style={{
  //           color,
  //           size,
  //           cursor: action ? 'pointer' : 'initial',
  //         }}
  //         onClick={() => triggerAction(action)}
  //       />
  //     );

  //     return hint ? (
  //       <BPITooltip title={hint} placement={'top'}>
  //         {renderIcon}
  //       </BPITooltip>
  //     ) : (
  //       renderIcon
  //     );
  //   },
  //   [triggerAction],
  // );

  // // ensure that the columns of the ag grid automatically adjust their sizes to fit the content when the grid is ready.
  // const onGridReady = useCallback((params: GridReadyEvent) => {
  //   const gridApi = params.api;
  //   gridApi.sizeColumnsToFit();
  // }, []);

  // // Apply css styles for cells
  // const cellStyleFunctions = useCallback(
  //   (props: any, index: number) => {
  //     return {
  //       borderRight: indexesColumnsBorderRight.includes(index)
  //         ? `1px solid ${card.title.bg_color}`
  //         : 'none',
  //       borderBottom: card.lines.border_bottom
  //         ? `1px solid ${card.title.bg_color}`
  //         : 'none',
  //       display: 'flex',
  //       flexDirection: 'row',
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //     };
  //   },
  //   [card.lines.border_bottom, card.title.bg_color, indexesColumnsBorderRight],
  // );

  const rowData: DataGridDetailsRow[] = useMemo(() => {
    const rows = card.lines.values.map((value, indexRow) => {
      const obj = {} as DataGridDetailsRow;

      for (const key in value.item) {
        const item = value.item[key];
        // obj['item' + key] = { [keyItem]: item };
        item.value = item.content as string;
        item.row_num = indexRow + 1;
        item.component = ((): DataGridComponent => {
          if (
            /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/.test(
              item.content as string,
            )
          )
            return 'innerHTML';
          if (
            /^(?:\d{2}\/\d{2}\/\d{2}|--\/--\/--)/.test(item.content as string)
          )
            return 'date_string';
          if (item.icon) {
            const value = `${item.icon.ref};${item.icon.color};${item.icon.size};;${item.hint}`;
            item.value = value;

            return 'icon';
          }

          return 'text_alt';
        })();
        item.control_editable = false;
        item.control_mandatory = false;
        obj['rdg_' + key] = item;
      }

      return obj;
    });

    return rows;
  }, [card.lines.values]);
  const columns: DataGridDetailsColumnType[] = useMemo(() => {
    return card.cols.values.map((col, i) => {
      const _col: Record<any, any> = { ...col };
      const headerClass = col.align ? col.align + '-header' : '';
      delete _col.align;

      return {
        ..._col,
        alignment: 'left',
        autoSize: true,
        borderRight: col?.border_right ?? false,
        borderRightColor: card.title.bg_color ?? '',
        borderRightWidth: 1,
        borderBottom: card.lines.border_bottom ?? false,
        borderBottomColor: card.title.bg_color ?? '',
        borderBottomWidth: 1,
        cellStyles: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        col_header_display_tooltip: col?.col_header_display_tooltip ?? false,
        col_header_tooltip: col?.col_header_tooltip ?? col?.label ?? '',
        currency_symbol: '',
        decimal_digit: col?.decimal_digit ?? 0,
        editable: false,
        field: 'rdg_' + i + '.value',
        field_type: (() => {
          /* a little bit reliable */
          try {
            const firstType = rowData[0]?.['rdg_' + i].component;

            if (firstType === 'text_alt') {
              for (const row of rowData) {
                if (row?.['rdg_' + i].component !== firstType)
                  return row?.['rdg_' + i].component;
              }
            }

            return firstType;
          } catch (error) {
            return 'text_alt';
          }
        })(),
        filter: col?.filter ? 'agTextColumnFilter' : false,
        floatingFilter: col?.floating_filter ?? false,
        headerColor: col?.headerColor ?? '#FFFFFF',
        headerName: col?.label ?? '',
        headerClass: headerClass,
        headerTooltip: col?.label ?? '',
        hide: col?.hide ?? false,
        lockPinned: col?.lockPinned ?? true,
        pinned: col?.pinned ?? null,
        resizable: col?.resizable ?? true,
        sortable: col?.sortable ?? true,
        thousand_separator: col?.thousand_separator ?? false,
        track_modification: col?.track_modification ?? false,
        track_modification_option: col?.track_modification_option ?? null,
        track_modification_tooltip: col?.track_modification_tooltip ?? false,
        width: col?.width ?? 150,
        key: '',
        name: '',
        triggerAction: triggerAction,
      };
    });
  }, [
    card.cols.values,
    card.lines.border_bottom,
    card.title.bg_color,
    rowData,
    triggerAction,
  ]);

  const onGridReady = (params: any) => {
    params.api.sizeColumnsToFit();
    params.api.enableVirtualization = true;

    if (columns.some((col) => col.floatingFilter !== false)) {
      if (columns.some((col) => col.filter === false)) {
        params.api.setHeaderHeight(48);
        params.api.setFloatingFiltersHeight(0);

        return;
      }

      params.api.setHeaderHeight(24);
      params.api.setFloatingFiltersHeight(29);
    }
  };

  // const monthToComparableNumber = useCallback((date: string) => {
  //   if (date === undefined || date === null || date.length < 8) return null;
  //   if (isNaN(Number.parseInt(date.substring(6, 8)))) return null;

  //   const yearNumber = Number.parseInt('20' + date.substring(6, 8));
  //   const monthNumber = Number.parseInt(date.substring(3, 5));
  //   const dayNumber = Number.parseInt(date.substring(0, 2));

  //   return yearNumber * 10000 + monthNumber * 100 + dayNumber;
  // }, []);

  // // eg 29/08/04 gets converted to 20040829
  // const dateComparator = useCallback(
  //   (date1: string, date2: string) => {
  //     const date1Number = monthToComparableNumber(date1);
  //     const date2Number = monthToComparableNumber(date2);

  //     if (date1Number === null && date2Number === null) return 0;
  //     if (date1Number === null) return -1;
  //     if (date2Number === null) return 1;

  //     return date1Number - date2Number;
  //   },
  //   [monthToComparableNumber],
  // );

  // // Columns definitions
  // const columnDefs = useMemo(() => {
  //   return card.cols.values.map((col, i) => {
  //     const headerClass = col.align ? col.align + '-header' : '';

  //     const CustomCellRenderer = (props: any) => {
  //       const dataItem: ICardRow['item'][number] = useMemo(
  //         () => props.data['rdg_' + i],
  //         [props.data],
  //       );
  //       const renderIcon = useMemo(() => {
  //         return dataItem.icon
  //           ? generateMaterialIcon(
  //               dataItem.icon?.ref + '',
  //               dataItem.icon?.color + '',
  //               dataItem.icon?.size + '',
  //               dataItem.action,
  //               dataItem.hint + '',
  //             )
  //           : null;
  //       }, [dataItem.action, dataItem.hint, dataItem.icon]);
  //       const content = useMemo(
  //         () =>
  //           dataItem.content !== (null || undefined) ? dataItem.content : '',
  //         [dataItem.content],
  //       );
  //       const elementContent: JSX.Element = useMemo(
  //         () => (
  //           <div
  //             dangerouslySetInnerHTML={{
  //               __html: DOMPurify.sanitize(content as string),
  //             }}
  //             style={{
  //               cursor: dataItem.action ? 'pointer' : 'initial',
  //             }}
  //             onClick={() => triggerAction(dataItem.action)}
  //           />
  //         ),
  //         [content, dataItem.action],
  //       );
  //       const renderContent = useMemo(
  //         () =>
  //           dataItem.hint ? (
  //             <BPITooltip title={dataItem.hint} placement="top">
  //               {elementContent}
  //             </BPITooltip>
  //           ) : (
  //             elementContent
  //           ),
  //         [dataItem.hint, elementContent],
  //       );

  //       return (
  //         <StyledTableCell
  //           scope="row"
  //           component={'div'}
  //           style={{
  //             width: '100%',
  //             fontFamily: `${theme.font.text.main}`,
  //             textAlign: 'center',
  //             borderBottom: 'none',
  //             display: 'block',
  //             padding: '2px',
  //             whiteSpace: 'pre-line',
  //             wordWrap: 'break-word',
  //           }}
  //         >
  //           {renderContent}
  //           {renderIcon}
  //         </StyledTableCell>
  //       );
  //     };

  //     return {
  //       field: 'rdg_' + i + '.content',
  //       resizable: true,
  //       autoSize: true,
  //       editable: false,
  //       width: col.width,
  //       headerName: col.label,
  //       headerClass: headerClass,
  //       filter: 'agTextColumnFilter',
  //       // filter: GenericCardResearcher,
  //       // filter: true,
  //       filterParams: {
  //         filterOptions: ['contains'],
  //       },
  //       comparator: (valueA: string, valueB: string) => {
  //         // if values are like 24/03/23 or --/--/--
  //         if (
  //           valueA.match(/^(?:\d{2}\/\d{2}\/\d{2}|--\/--\/--)/g) &&
  //           valueB.match(/^(?:\d{2}\/\d{2}\/\d{2}|--\/--\/--)/g)
  //         )
  //           return dateComparator(valueA, valueB);

  //         // else values are string
  //         const strippedStringA = valueA.replace(/(<([^>]+)>)/gi, ' ');
  //         const strippedStringB = valueB.replace(/(<([^>]+)>)/gi, ' ');

  //         if (strippedStringA == strippedStringB) return 0;

  //         return strippedStringA > strippedStringB ? 1 : -1;
  //       },
  //       // floatingFilter: true,
  //       cellStyle: (props: any) => cellStyleFunctions(props, i),
  //       cellRenderer: CustomCellRenderer,
  //     };
  //   });
  // }, [
  //   card.cols.values,
  //   theme.font.text.main,
  //   generateMaterialIcon,
  //   triggerAction,
  //   dateComparator,
  //   cellStyleFunctions,
  // ]);

  control.data_grid_detail = {
    rows: rowData,
    columns: columns,
    datagrid_options: {
      add_row_button_display: false,
      pagination_row_size: card?.display?.page_nb_rows,
      select_all_button_col_ref: 'rdg_1',
      select_all_button_display: false,
      unselect_all_button_display: false,
      datagrid_font_size: '',
      delete_row_button_display: false,
    },
    buttons: [],
    source: '',
  };

  if (window?.['Cypress']) {
    window[
      'Features_DashboardDynamic_components_CardAgGrid_CardAgGrid|' +
        card.title.lib
    ] = {
      control,
    };
  }

  return (
    <CardAgGridStyled>
      <Header color={card.title.bg_color}>
        <span style={{ color: card.title.font_color }}>{card.title.lib}</span>
      </Header>
      <DataGridControlAgGrid
        control={control}
        fileId={''}
        defaultColDefAlt={defaultColDef}
        hasControlLabel={false}
        extraStyles={{
          paddingTop: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }}
        animateRows={false}
        suppressRowClickSelection={true}
        suppressAnimationFrame={true}
        suppressCellFocus={true}
        heightGrid={'400px'}
        hasPagination={card?.display?.type === 'page'}
        onGridReadyAlt={onGridReady}
      />
      {/* <AgGridReact
        className="ag-theme-alpine"
        ref={gridRef}
        // rowHeight={rowHeight}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowData={rowData}
        onGridReady={onGridReady}
        // headerHeight={0}
        localeText={localeText}
        // onCellEditingStarted={onCellEditingStarted}
        overlayLoadingTemplate={
          '<span class="ag-overlay-loading-center">Loading...</span>'
        }
        // // rowModelType={'serverSide'}
        // // sideBar={sideBar}
        pagination={true}
        // paginationAutoPageSize={true}
        paginationPageSize={4}
        // rowSelection="multiple"
        // gridOptions={gridOptions}
        // onCellValueChanged={onCellValueChanged}
        // undoRedoCellEditing={true}
        // enableCellChangeFlash={true}
        // onPaginationChanged={onPaginationChanged}
        animateRows
        suppressRowClickSelection
        suppressAnimationFrame
        suppressCellFocus
        // suppressHorizontalScroll
      /> */}
    </CardAgGridStyled>
  );
};

export { CardAgGrid };
