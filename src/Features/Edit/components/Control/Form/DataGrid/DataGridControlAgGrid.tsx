import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { IApiControl } from '../../../../types';
import { Grid } from '@mui/material';
import { ControlLabel } from '../ControlLabel';
import {
  BPITooltip,
  FormError,
  ISelectData,
} from '../../../../../../Shared/components';
import { useSecurity } from '../../../../../../Packages/Security';
import { addRow } from './apiRoutes/addRow';
import { AgGridReact } from 'ag-grid-react';
import { useReactToPrint } from 'react-to-print';
import { Button } from 'Shared/components';
import { useTrans, security, isUndefined } from '../../../../../../Services';
import './datagrid.css';
import { useApi, useRouter } from 'Services';
import { saveValueDataGrid } from './apiRoutes/saveValueDataGrid';
import CustomSelectRenderer from './AgDataGridFields/CustomSelectRenderer/CustomSelectRenderer';
import { EuroIcon } from 'Styles';
import { minMax } from 'Packages/Helpers/src/minMax';
import { AgDataGridStyle } from './DataGridControl.style';
import { AgDataGridUpload } from './DataGridFields/AgDataGridUpload/AgDataGridUpload';
import 'ag-grid-enterprise';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
import {
  CellEditingStartedEvent,
  IServerSideDatasource,
} from 'ag-grid-community';
import { DataGridDetail } from '../../../../types';
// import millify from 'millify';
import { LicenseManager } from 'ag-grid-enterprise';
import { AG_GRID_LOCALE_FR } from './translations/fr';
import { AG_GRID_LOCALE_EN } from './translations/en';
import CustomDateRenderer from './AgDataGridFields/CustomDateRenderer/CustomDateRenderer';
LicenseManager.setLicenseKey(
  'Using_this_AG_Grid_Enterprise_key_( AG-040865 )_in_excess_of_the_licence_granted_is_not_permitted___Please_report_misuse_to_( legal@ag-grid.com )___For_help_with_changing_this_key_please_contact_( info@ag-grid.com )___( Delta RM )_is_granted_a_( Single Application )_Developer_License_for_the_application_( DeltaRM )_only_for_( 1 )_Front-End_JavaScript_developer___All_Front-End_JavaScript_developers_working_on_( DeltaRM )_need_to_be_licensed___( DeltaRM )_has_been_granted_a_Deployment_License_Add-on_for_( 1 )_Production_Environment___This_key_works_with_AG_Grid_Enterprise_versions_released_before_( 11 April 2024 )____[v2]_MTcxMjc5MDAwMDAwMA==f0a7e979572bce7bc4376cbdee159586',
);
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import CustomCheckboxRender from './AgDataGridFields/CustomCheckboxRenderer/CustomCheckboxRender';

interface IProps {
  control: IApiControl;
  fileId: string;
}

export const DataGridControlAgGrid: React.FC<IProps> = ({
  control,
  fileId,
}) => {
  const [errorsMessageAdd, setErrorMessageAdd] = useState<string>('');
  const { user } = useSecurity();
  const gridRef = useRef<any>();
  const jwt = user.getJwt();
  const errrorMessage = '';
  const [errors, seterrors]: any = useState('');
  const { send, error } = useApi<void>();
  const { currentRoute } = useRouter();
  const [GridDetails, setGridDetails]: any = useState<
    DataGridDetail | undefined | null
  >(control.data_grid_detail);
  const user_language: any = security.decodeJwtToken(jwt ? jwt : '');
  const user_grid_language = localStorage.getItem('user_grid_language');
  const [option, setoption]: any = useState(user_grid_language);
  const [local_text, setlocal_text] = useState(
    user_language?.lang === 'en' ? AG_GRID_LOCALE_EN : AG_GRID_LOCALE_FR,
  );
  const paginationPageSize: number = control?.data_grid_detail?.datagrid_options
    ?.pagination_row_size
    ? control?.data_grid_detail?.datagrid_options?.pagination_row_size
    : 20;

  const kFormatter: any = (num: any) => {
    // console.log(num);
    if (num !== null || undefined) {
      return num?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else {
      return '';
    }
  };

  // useEffect(() => {
  //   console.log(control.data_grid_detail);
  // }, []);
  useEffect(() => {
    setGridDetails(control?.data_grid_detail);
    // console.log('control', control?.data_grid_detail);
  }, [control?.data_grid_detail]);
  // useEffect(() => {
  //   setRowData(rows);
  // }, [rowData]);

  const handleClickRemoveSelectedRow = () => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    gridRef.current.api.applyTransaction({ remove: selectedRows });
  };

  const getHeaderRenderer = (color: any) => {
    return <AgDataGridStyle />;
  };

  const columnDefs = useMemo(
    () =>
      control?.data_grid_detail?.columns?.map((g: any) => {
        switch (g?.field_type) {
          case 'select_list':
            return {
              ...g,
              minWidth: 150,
              width: 'auto',
              singleClickEdit: false,
              editable: false,
              cellStyle: { textAlign: g?.alignment ? g?.alignment : 'left' },
              // filter: 'agNumberColumnFilter',
              filterParams: {
                valueFormatter: (props: any) => {
                  // // console.log('date', props);
                  const data = props?.colDef?.field?.split('.')[0];
                  // // console.log('field name', data);

                  const row_data = Object.assign({}, ...GridDetails?.rows);
                  const field_data = Object.entries(row_data).reduce(
                    (accum: any, current: any) => {
                      const [key, value] = current;
                      if (key.match(data)) {
                        return value;
                      }

                      return accum;
                    },
                    [],
                  );
                  // console.log(props, Object.assign({}, field_data));

                  const value_to_show = field_data?.choice_options?.filter(
                    (data: any) => {
                      return data?.choice_id?.toString() === props?.value;
                    },
                  );
                  // console.log(value_to_show);

                  return value_to_show[0]?.choice_lib;
                },
              },
            };
          case 'comment':
            return {
              ...g,
              minWidth: 150,
              width: 'auto',
              cellEditorPopup: true,
              cellEditor: 'agLargeTextCellEditor',
              cellEditorParams: {
                rows: 10,
                cols: 50,
              },
              cellStyle: { textAlign: g?.alignment ? g?.alignment : 'left' },
            };
          case 'long_text':
            return {
              ...g,
              minWidth: 150,
              width: 'auto',
              cellEditorPopup: true,
              cellEditor: 'agLargeTextCellEditor',
              cellEditorParams: {
                rows: 10,
                cols: 50,
              },
              cellStyle: { textAlign: g?.alignment ? g?.alignment : 'left' },
              cellRenderer: (props: any) => {
                return (
                  <>{props?.value !== null || undefined ? props.value : ''}</>
                );
              },
            };
          case 'percent':
            return {
              ...g,
              minWidth: 150,
              width: 'auto',
              cellStyle: { textAlign: g?.alignment ? g?.alignment : 'left' },
              cellRenderer: (props: any) => {
                return (
                  <div style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {props.value !== null || undefined
                      ? `% ${props?.value}`
                      : ''}
                  </div>
                );
              },
            };
          case 'radio':
            return {
              ...g,
              minWidth: 150,
              width: 'auto',
              cellStyle: { textAlign: g?.alignment ? g?.alignment : 'left' },
            };
          case 'multiple_list':
            return {
              ...g,
              minWidth: 150,
              width: 'auto',
              cellStyle: { textAlign: g?.alignment ? g?.alignment : 'left' },
            };
          case 'integer':
            return {
              ...g,
              minWidth: 150,
              width: 'auto',
              cellStyle: { textAlign: g?.alignment ? g?.alignment : 'left' },
              cellRenderer: (props: any) => {
                return (
                  <>{props?.value !== null || undefined ? props.value : ''}</>
                );
              },
            };
          case 'decimal':
            return {
              ...g,
              minWidth: 150,
              width: 'auto',
              cellStyle: { textAlign: g?.alignment ? g?.alignment : 'left' },
              cellRenderer: (props: any) => {
                return (
                  <>{props?.value !== null || undefined ? props.value : ''}</>
                );
              },
            };
          case 'financial':
            return {
              ...g,
              minWidth: 150,
              width: 'auto',
              cellStyle: { textAlign: g?.alignment ? g?.alignment : 'left' },
              cellRenderer: (props: any) => {
                return (
                  <div style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {(props?.value !== null || undefined) && (
                      <>
                        {g?.currency_symbol ? (
                          <>
                            <span
                              style={{
                                fontSize: control?.data_grid_detail
                                  ?.datagrid_options?.datagrid_font_size
                                  ? control?.data_grid_detail?.datagrid_options
                                      ?.datagrid_font_size
                                  : '15',

                                marginRight: 2,
                              }}
                            >
                              {g?.currency_symbol}
                            </span>
                          </>
                        ) : (
                          <EuroIcon
                            style={{
                              fontSize: control?.data_grid_detail
                                ?.datagrid_options?.datagrid_font_size
                                ? control?.data_grid_detail?.datagrid_options
                                    ?.datagrid_font_size
                                : '15',
                              marginLeft: 2,
                              marginBottom: -1,
                            }}
                          />
                        )}
                      </>
                    )}
                    {props?.value !== null || undefined
                      ? kFormatter(props.value)
                      : ''}
                  </div>
                );
              },
            };
          case 'checkbox':
            return {
              ...g,
              minWidth: 150,
              width: 'auto',
              singleClickEdit: false,
              editable: false,
              cellStyle: { textAlign: g?.alignment ? g?.alignment : 'left' },
              cellRenderer: (props: any) => {
                // console.log('date', props);
                const data: any = props?.colDef?.field?.split('.')[0];

                const field_data = Object.entries(props?.data).reduce(
                  (accum: any, current: any) => {
                    const [key, value] = current;
                    if (key.match(data)) {
                      return value;
                    }

                    return accum;
                  },
                  [],
                );

                return (
                  <CustomCheckboxRender
                    props={props}
                    field_data={field_data}
                    control={control}
                    fileId={fileId}
                    jwt={jwt}
                    seterrors={seterrors}
                  />
                );
              },
            };
          case 'text':
            return {
              ...g,
              minWidth: 150,
              width: 'auto',
              cellStyle: { textAlign: g?.alignment ? g?.alignment : 'left' },
              cellRenderer: (props: any) => {
                return (
                  <>{props?.value !== null || undefined ? props.value : ''}</>
                );
              },
            };
          case 'boolean':
            return {
              ...g,
              minWidth: 150,
              width: 'auto',
              cellStyle: { textAlign: g?.alignment ? g?.alignment : 'left' },
            };
          case 'date':
            return {
              ...g,
              minWidth: 150,
              width: 'auto',
              singleClickEdit: false,
              editable: false,
              cellStyle: { textAlign: g?.alignment ? g?.alignment : 'left' },
              cellRenderer: (props: any) => {
                // console.log('date', props);
                const data = props?.colDef?.field?.split('.')[0];
                // console.log('field name', data);
                const field_data = Object.entries(props?.data).reduce(
                  (accum: any, current: any) => {
                    const [key, value] = current;
                    if (key.match(data)) {
                      return value;
                    }

                    return accum;
                  },
                  [],
                );

                return (
                  <CustomDateRenderer
                    props={props}
                    field_data={field_data}
                    control={control}
                    fileId={fileId}
                    jwt={jwt}
                    seterrors={seterrors}
                  />
                );
              },
            };
          default:
            return {
              ...g,
              minWidth: 150,
              width: 'auto',
              cellRenderer: (props: any) => {
                return (
                  <>{props?.value !== null || undefined ? props.value : ''}</>
                );
              },
            };
        }
      }),
    [control.data_grid_detail?.columns],
  );

  const cellRenderer = (props: any) => {
    // console.log(props);
    const data = props?.colDef?.field?.split('.')[0];
    // console.log('field name', data);
    const field_data = Object.entries(props?.data).reduce(
      (accum: any, current: any) => {
        const [key, value] = current;
        if (key.match(data)) {
          return value;
        }

        return accum;
      },
      [],
    );

    switch (field_data?.component) {
      case 'select_list':
        return (
          <CustomSelectRenderer
            props={props}
            field_data={field_data}
            control={control}
            fileId={fileId}
            jwt={jwt}
            seterrors={seterrors}
          />
        );
      default:
        return props?.value ? props?.value : '';
    }
  };

  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      sortable: true,
      cellRenderer: cellRenderer,
      // autoHeight: true,
      cellClass: 'grid-cell-centered',
      editable: true,
      // cellEditorPopup: true,
      cellEditorPopupPosition: 'center',
      singleClickEdit: true,
      // minWidth: 'auto' as any, // cast to the any type,
    }),
    [],
  );

  const sideBar = useMemo(() => {
    return {
      toolPanels: [
        {
          id: 'columns',
          labelDefault: 'Columns',
          labelKey: 'columns',
          iconKey: 'columns',
          toolPanel: 'agColumnsToolPanel',
          toolPanelParams: {
            suppressValues: true,
            suppressPivots: true,
            suppressPivotMode: true,
            suppressSideButtons: true,
            suppressColumnFilter: true,
            suppressColumnSelectAll: true,
            suppressColumnExpandAll: true,
          },
        },
      ],
      defaultToolPanel: 'columns',
    };
  }, []);

  const getServerSideDatasource: () => IServerSideDatasource = () => {
    return {
      getRows: (params: any) => {
        // console.log('[Datasource] - rows requested by grid: ', params.request);
        // var response = server.getData(params.request);
        // adding delay to simulate real server call
        // setTimeout(function () {
        //   if (response.success) {
        // call the success callback
        params.success({
          rowData: GridDetails.rows,
          rowCount: GridDetails?.rows[GridDetails?.rows?.length - 1],
        });
        // } else {
        // inform the grid request failed
        //     params.fail();
        //   }
        // }, 200);
      },
    };
  };

  const onGridReady = (params: any) => {
    // Make the currently visible columns fit the screen
    params.api.sizeColumnsToFit();
    params.api.enableVirtualization = true;

    // params.api.hideOverlay();
    // const datasource = getServerSideDatasource();
    // params.api!.setServerSideDatasource(datasource);
  };

  const onCellEditingStarted = useCallback((event: CellEditingStartedEvent) => {
    const data: any = event?.colDef?.field?.split('.')[0];
    // console.log(event?.colDef?.field?.split('.')[0]);
    // console.log('field name', data);
    const field_data = Object.entries(event?.data).reduce(
      (accum: any, current: any) => {
        const [key, value] = current;
        if (key.match(data)) {
          console.log(value);
          return value;
        }
        // console.log('vv', accum);
        return;
      },
      [],
    );

    console.log(event?.data[data]);

    if (event?.data[data]?.control_editable === false) {
      // gridRef.current.api.undoCellEditing();
      gridRef?.current?.api?.stopEditing();

      return;
    }
  }, []);

  const handleClickAddRow = useCallback(() => {
    // console.log(
    //   fileId,
    //   control.control_id,
    //   jwt,
    //   setGridDetails,
    //   setErrorMessageAdd,
    // );
    addRow(fileId, control.control_id, jwt, setGridDetails, setErrorMessageAdd);
  }, [control.control_id, jwt, fileId]);

  const onCellValueChanged = useCallback((event) => {
    const cellDefs = gridRef?.current?.api?.getEditingCells();
    // console.log(cellDefs);
    const data = event?.colDef?.field?.split('.')[0];
    // console.log('field name', data);
    const field_data = Object.entries(event?.data).reduce(
      (accum: any, current: any) => {
        const [key, value] = current;
        if (key.match(data)) {
          return value;
        }

        return accum;
      },
      [],
    );

    // if (field_data?.control_editable === false) {
    //   seterrors('Non editable field');
    //   gridRef.current.api.undoCellEditing();
    //   setTimeout(() => {
    //     seterrors('');
    //   }, 3000);

    //   return;
    // }
    if ((field_data?.control_regex !== null || undefined) && event?.newValue) {
      const regexControl = new RegExp(field_data?.control_regex, 'i');
      if (
        !event?.newValue.match(regexControl) &&
        field_data?.control_regex_msg
      ) {
        // console.log('error occured');
        seterrors(field_data?.control_regex_msg);
        gridRef.current.api.undoCellEditing();
        // gridRef.current.api.stopEditing();
        setTimeout(() => {
          seterrors('');
        }, 3000);

        return;
      }
    }
    if (
      field_data?.component === 'financial' ||
      'decimal' ||
      'integer' ||
      'percent'
    ) {
      if (
        (field_data?.control_options?.min_value ||
          field_data?.control_options?.max_value) &&
        event?.newValue.trim()
      ) {
        if (
          minMax(
            event?.newValue,
            field_data?.control_options?.min_value,
            field_data.control_options.max_value,
          )
        ) {
          seterrors(null);
        }
        if (
          !minMax(
            event?.newValue,
            field_data.control_options.min_value,
            field_data.control_options.max_value,
          )
        ) {
          seterrors(
            'La valeur saisie ne respecte pas les contraintes définies',
          );
          gridRef.current.api.undoCellEditing();
          setTimeout(() => {
            seterrors('');
          }, 3000);

          return;
        }
      }
    }

    // console.log(event?.newValue);
    if (
      field_data?.component !== 'select_list' &&
      field_data?.component !== 'date'
    ) {
      if (event?.newValue === undefined) {
        return;
      } else {
        saveValueDataGrid(
          fileId,
          control.control_id,
          field_data?.col_elm_id,
          field_data?.row_num,
          jwt,
          event?.newValue?.toString(),
          seterrors,
          event?.newValue,
        );
      }
    }

    // console.log('editing starts', {
    //   [data]: {
    //     field_data,
    //     row_index: event?.rowIndex,
    //     old_value: event.oldValue,
    //     value: event?.value,
    //   },
    // });

    // console.log(field_data, event, control);
    // console.log('Data after change is', event);
    // seterrors('Validation Failed');
    // gridRef.current.api.undoCellEditing();
  }, []);

  const getRowStyle = (params: any) => {
    if (params.data.border_bottom) {
      return {
        borderBottom: `1px solid ${params.data.border_bottom}`,
        paddingTop: 15,
      };
    }
    if (!params.data.border_bottom) {
      return {
        borderBottom: 'none',
        paddingTop: 15,
      };
    }
  };

  // useEffect(() => {
  //   // console.log('called');
  //   gridRef?.current!.api?.refreshCells();
  //   // console.log(local_text);
  //   setoption(localStorage.getItem('user_grid_language'));
  //   setlocal_text(
  //     localStorage.getItem('user_grid_language') === 'en'
  //       ? AG_GRID_LOCALE_EN
  //       : AG_GRID_LOCALE_FR,
  //   );
  // }, [localStorage, local_text]);

  const handlePrint = useReactToPrint({
    content: () => gridRef.current,
  });

  // const localeText = useMemo<{
  //   [key: string]: string;
  // }>(() => {
  //   // gridRef.current.api.refreshCells();
  //   return localStorage.getItem('user_grid_language') === 'en'
  //     ? AG_GRID_LOCALE_EN
  //     : AG_GRID_LOCALE_FR;
  // }, []);
  const gridOptions = {
    rowClass: 'my-hover-class',
  };

  return (
    <Grid item xs={11} style={{ maxWidth: '95%', margin: '0 auto' }}>
      {/* <DataGridControlStyled> */}

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: -20,
        }}
      >
        <ControlLabel control={control} />
        <div>
          {/* <Button
            style={{
              backgroundColor: '#f50057',
              marginLeft: '10px',
              marginBottom: 10,
            }}
            onClick={handlePrint}
          >
            Export PDF
          </Button> */}
          {control?.data_grid_detail?.datagrid_options
            ?.add_row_button_display === true && (
            <BPITooltip
              title={
                user_language?.lang === 'en' ? 'Add Row' : 'Ajouter une ligne'
              }
            >
              <Button
                onClick={handleClickAddRow}
                style={{
                  backgroundColor: 'teal',
                  border: 0,
                  color: '#fff',
                  margin: 5,
                  borderRadius: 5,
                  marginBottom: 14,
                }}
              >
                {user_language?.lang === 'en' ? 'Add Row' : 'Ajouter une ligne'}
                {/* {user_language?.lang} */}
              </Button>
            </BPITooltip>
          )}
          {/* <BPITooltip title={'Remove Line'}>
        <Button
          onClick={handleClickRemoveSelectedRow}
          style={{
            backgroundColor: 'crimson',
            border: 0,
            color: '#fff',
            margin: 5,
            borderRadius: 5,
            marginBottom: 14,
          }}
        >
          Delete Selected Rows
        </Button>
        <AddCircleOutline fontSize={'large'} onClick={handleClickAddRow} />
      </BPITooltip> */}
        </div>
      </div>
      <h1 style={{ color: 'red', padding: 10 }}>{errors}</h1>
      {errorsMessageAdd && <FormError>{errorsMessageAdd}</FormError>}

      <AgDataGridStyle
        background_color={
          control?.data_grid_detail?.datagrid_options?.datagrid_header_color
        }
        border_color={
          control?.data_grid_detail?.datagrid_options?.datagrid_border_color
        }
        is_border_color={
          control?.data_grid_detail?.datagrid_options?.datagrid_border
        }
        font_color={
          control?.data_grid_detail?.datagrid_options?.datagrid_font_color
        }
        font_size={
          control?.data_grid_detail?.datagrid_options?.datagrid_font_size
        }
        font_weight={
          control?.data_grid_detail?.datagrid_options?.datagrid_font_weight
        }
      >
        <AgGridReact
          className="ag-theme-alpine"
          domLayout={'autoHeight'}
          ref={gridRef}
          rowHeight={40}
          // @ts-ignore
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowData={GridDetails?.rows}
          onGridReady={onGridReady}
          localeText={local_text}
          onCellEditingStarted={onCellEditingStarted}
          overlayLoadingTemplate={
            '<span class="ag-overlay-loading-center">Loading..</span>'
          }
          // rowModelType={'serverSide'}
          // sideBar={sideBar}
          pagination={true}
          paginationPageSize={paginationPageSize}
          rowSelection="multiple"
          gridOptions={gridOptions}
          // paginationAutoPageSize={true}
          onCellValueChanged={onCellValueChanged}
          undoRedoCellEditing={true}
          enableCellChangeFlash={true}
        />
      </AgDataGridStyle>
      {/* </DataGridControlStyled> */}
    </Grid>
  );
};
