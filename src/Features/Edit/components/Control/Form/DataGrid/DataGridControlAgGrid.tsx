import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
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
import {
  useTrans,
  security,
  isUndefined,
  getEnv,
} from '../../../../../../Services';
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
  ITooltipParams,
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
import { useActionButton } from 'Packages/Helpers/src/useActionButton';
import { ModalDynamic } from 'Features/ModalDynamic/components/ModalDynamic';
import { useRecoilValue } from 'recoil';
import { IDataModal } from 'Features/ModalDynamic/components/types';
import axios from 'axios';
import CustomIconRenderer from './AgDataGridFields/CustomIconRenderer/CustomIconRenderer';
import CustomActionButtonRenderer from './AgDataGridFields/CustomActionButtonRenderer/CustomActionButtonRenderer';
interface IProps {
  control: IApiControl;
  fileId: string;
}

const CustomTooltip = (props: any & { tooltip: string }) => {
  const field_name = props?.colDef?.field?.split('.')[0];
  const data = props?.data[field_name];
  // console.log(data, props?.colDef?.track_modification_tooltip);
  if (
    props?.colDef?.track_modification &&
    props?.colDef?.track_modification_tooltip &&
    data?.reference_value !== data?.value
  ) {
    return (
      <div
        className="custom-tooltip"
        style={{ backgroundColor: 'wheat', padding: 5 }}
      >
        <p>Previous Value: {data?.reference_value}</p>
      </div>
    );
  } else {
    return;
  }
};

export const DataGridControlAgGrid: React.FC<IProps> = ({
  control,
  fileId,
}) => {
  const [errorsMessageAdd, setErrorMessageAdd] = useState<string>('');
  const { user } = useSecurity();
  const gridRef = useRef<any>();
  const jwt = user.getJwt();
  const [errors, seterrors]: any = useState('');
  const [tooltip_extractor, settooltip_extractor] = useState('');
  const [updatedColumnValue, setUpdatedColumnValue] = useState('');
  const [GridDetails, setGridDetails]: any = useState<
    DataGridDetail | undefined | null
  >(control.data_grid_detail);
  const user_language: any = security.decodeJwtToken(jwt ? jwt : '');
  const user_grid_language = localStorage.getItem('user_grid_language');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [local_text, setlocal_text] = useState(
    user_language?.lang === 'en' ? AG_GRID_LOCALE_EN : AG_GRID_LOCALE_FR,
  );
  const [modal_data, setmodal_data]: any = useState(null);

  // const modal: IDataModal = useRecoilValue<any>(modal_data);

  const paginationPageSize: number = control?.data_grid_detail?.datagrid_options
    ?.pagination_row_size
    ? control?.data_grid_detail?.datagrid_options?.pagination_row_size
    : 20;

  const kFormatter: any = (num: any) => {
    if (num !== null || undefined) {
      return num?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else {
      return '';
    }
  };
  useEffect(() => {
    setGridDetails(control?.data_grid_detail);
    // console.log('control', control?.data_grid_detail);
  }, [control?.data_grid_detail]);

  const cellStyleFunctions = (props: any, g: any) => {
    const options = JSON.parse(props?.colDef?.track_modification_option);

    const field_name = props?.colDef?.field?.split('.')[0];
    const data = props?.data[field_name];
    const background: any =
      options === null ? null : options['background-color'];
    const color: any = options === null ? null : options?.color;

    return {
      textAlign: g?.alignment ? g?.alignment : 'left',
      borderRight: g?.borderRight
        ? `${g?.borderRightWidth}px solid ${g?.borderRightColor}`
        : 0,
      backgroundColor:
        props?.colDef?.track_modification &&
        background !== null &&
        data?.reference_value !== data?.value
          ? background
          : '',
      color:
        props?.colDef?.track_modification &&
        data?.reference_value !== data?.value &&
        color !== null
          ? color
          : '',
    };
  };

  const handleClickRemoveSelectedRow = () => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    gridRef.current.api.applyTransaction({ remove: selectedRows });
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
              tooltipField: g?.field,
              tooltipComponentParams: { tooltip: tooltip_extractor },
              editable: false,
              cellStyle: (props: any, g: any) => cellStyleFunctions(props, g),
              // filter: 'agNumberColumnFilter',
              filterParams: {
                valueFormatter: (props: any) => {
                  const data = props?.colDef?.field?.split('.')[0];

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

                  const value_to_show = field_data?.choice_options?.filter(
                    (data: any) => {
                      return data?.choice_id?.toString() === props?.value;
                    },
                  );

                  return value_to_show[0]?.choice_lib;
                },
              },
            };
          case 'comment':
            return {
              ...g,
              minWidth: 150,
              width: 'auto',
              tooltipField: g?.field,
              tooltipComponentParams: { tooltip: tooltip_extractor },
              cellEditorPopup: true,
              cellEditor: 'agLargeTextCellEditor',
              cellEditorParams: {
                rows: 10,
                cols: 50,
              },
              cellStyle: (props: any, g: any) => cellStyleFunctions(props, g),
            };
          case 'long_text':
            return {
              ...g,
              minWidth: 150,
              width: 'auto',
              tooltipField: g?.field,
              tooltipComponentParams: { tooltip: tooltip_extractor },
              cellEditorPopup: true,
              cellEditor: 'agLargeTextCellEditor',
              cellEditorParams: {
                rows: 10,
                cols: 50,
              },
              cellStyle: (props: any, g: any) => cellStyleFunctions(props, g),
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
              tooltipField: g?.field,
              tooltipComponentParams: { tooltip: tooltip_extractor },
              cellStyle: (props: any, g: any) => cellStyleFunctions(props, g),
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
              tooltipField: g?.field,
              tooltipComponentParams: { tooltip: tooltip_extractor },
              cellStyle: (props: any, g: any) => cellStyleFunctions(props, g),
            };
          case 'multiple_list':
            return {
              ...g,
              minWidth: 150,
              width: 'auto',
              tooltipField: g?.field,
              tooltipComponentParams: { tooltip: tooltip_extractor },
              cellStyle: (props: any, g: any) => cellStyleFunctions(props, g),
            };
          case 'integer':
            return {
              ...g,
              minWidth: 150,
              width: 'auto',
              tooltipComponentParams: { tooltip: tooltip_extractor },
              tooltipField: g?.field,
              cellStyle: (props: any, g: any) => cellStyleFunctions(props, g),
              cellRenderer: (props: any) => {
                const data = props?.colDef?.field?.split('.')[0];

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
                  <div>
                    {props?.value !== null || undefined ? props.value : ''}
                  </div>
                );
              },
            };
          case 'decimal':
            return {
              ...g,
              minWidth: 150,
              width: 'auto',
              tooltipField: g?.field,
              tooltipComponentParams: { tooltip: tooltip_extractor },
              cellStyle: (props: any, g: any) => cellStyleFunctions(props, g),
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
              tooltipField: g?.field,
              tooltipComponentParams: { tooltip: tooltip_extractor },
              cellStyle: (props: any, g: any) => cellStyleFunctions(props, g),
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
              tooltipField: g?.field,
              tooltipComponentParams: { tooltip: tooltip_extractor },
              singleClickEdit: false,
              editable: false,
              cellStyle: (props: any, g: any) => cellStyleFunctions(props, g),
              cellRenderer: (props: any) => {
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
              tooltipField: g?.field,
              tooltipComponentParams: { tooltip: tooltip_extractor },
              cellStyle: (props: any, g: any) => cellStyleFunctions(props, g),
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
              tooltipField: g?.field,
              tooltipComponentParams: { tooltip: tooltip_extractor },
              cellStyle: (props: any, g: any) => cellStyleFunctions(props, g),
            };
          case 'date':
            return {
              ...g,
              minWidth: 150,
              tooltipField: g?.field,
              tooltipComponentParams: { tooltip: tooltip_extractor },
              width: 'auto',
              singleClickEdit: false,
              editable: false,
              cellStyle: (props: any, g: any) => cellStyleFunctions(props, g),
              cellRenderer: (props: any) => {
                const data = props?.colDef?.field?.split('.')[0];

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
          case 'icon':
            return {
              ...g,
              minWidth: 150,
              width: 'auto',
              singleClickEdit: false,
              editable: false,
              cellStyle: (props: any, g: any) => cellStyleFunctions(props, g),
              cellRenderer: (props: any) => {
                const data = props?.colDef?.field?.split('.')[0];

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
                  <div>
                    {props?.value !== null || undefined ? (
                      <CustomIconRenderer
                        props={props}
                        field_data={field_data}
                        control={control}
                        fileId={fileId}
                        jwt={jwt}
                        seterrors={seterrors}
                      />
                    ) : (
                      <div></div>
                    )}
                  </div>
                );
              },
            };
          case 'action_button':
            return {
              ...g,
              minWidth: 150,
              width: 'auto',
              singleClickEdit: false,
              editable: false,
              cellStyle: (props: any, g: any) => cellStyleFunctions(props, g),
              cellRenderer: (props: any) => {
                const data = props?.colDef?.field?.split('.')[0];

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
                  <div>
                    {props?.value !== null || undefined ? (
                      <CustomActionButtonRenderer
                        props={props}
                        field_data={field_data}
                        control={control}
                        fileId={fileId}
                        jwt={jwt}
                        seterrors={seterrors}
                      />
                    ) : (
                      <div></div>
                    )}
                  </div>
                );
              },
            };
          default:
            return {
              ...g,
              minWidth: 150,
              width: 'auto',
              cellStyle: (props: any, g: any) => cellStyleFunctions(props, g),
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
    const data = props?.colDef?.field?.split('.')[0];

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

      cellClass: 'grid-cell-centered',
      editable: true,
      // cellEditorPopup: true,
      cellEditorPopupPosition: 'center',
      singleClickEdit: true,
      tooltipComponent: CustomTooltip,
    }),
    [],
  );

  const onGridReady = (params: any) => {
    params.api.sizeColumnsToFit();
    params.api.enableVirtualization = true;
  };

  const onCellEditingStarted = useCallback((event: CellEditingStartedEvent) => {
    const data: any = event?.colDef?.field?.split('.')[0];
    if (event?.data[data]?.control_editable === false) {
      gridRef?.current?.api?.stopEditing();

      return;
    }
  }, []);

  const handleClickAddRow = useCallback(async () => {
    try {
      const response = await axios.post(
        `${getEnv('API_PROTOCOL')}://${getEnv(
          'API_HOST',
        )}/control/data_grid/add_row?file_id=${fileId}&elm_id=${
          control.control_id
        }`,
        {},
        {
          headers: {
            Authorization: jwt,
          },
          responseType: 'json',
        },
      );

      if (response?.data) {
        setIsModalOpen(true);
        setmodal_data(response?.data);
      }
    } catch (error) {
      setErrorMessageAdd("Une erreur est survenue lors de l'ajout de la ligne");
    }
  }, [control.control_id, jwt, fileId]);

  const onCellValueChanged = useCallback(
    (event) => {
      const data = event?.colDef?.field?.split('.')[0];

      const field_data = event?.data[data];
      if (event?.oldValue !== event?.newValue) {
        if (event?.colDef?.track_modification) {
          const options: any = JSON.parse(
            event?.colDef?.track_modification_option,
          );
          event.colDef.cellStyle = (p: any) =>
            p.rowIndex.toString() === event.node.id
              ? {
                  backgroundColor:
                    options !== null ? options['background-color'] : '',
                  color: options !== null ? options?.color : '',
                }
              : {};

          // window?.onload(() => {
          // document.getElementById(
          //   `#${event?.colDef?.headerName.replace(/ /g, '')}${event.rowIndex}`,
          // )?.value = event?.oldValue;

          // });

          event.api.refreshCells({
            force: true,
            columns: [event.column.getId()],
            rowNodes: [event.node],
          });
        }
      }

      if (
        (field_data?.control_regex !== null || undefined) &&
        event?.newValue
      ) {
        const regexControl = new RegExp(field_data?.control_regex, 'i');
        if (
          !event?.newValue.match(regexControl) &&
          field_data?.control_regex_msg
        ) {
          seterrors(field_data?.control_regex_msg);
          gridRef.current.api.undoCellEditing();
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
      if (
        field_data?.component !== 'select_list' &&
        field_data?.component !== 'date' &&
        field_data?.component !== 'icon'
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
    },
    [control?.control_id, fileId, jwt],
  );

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

  const handlePrint = useReactToPrint({
    content: () => gridRef.current,
  });
  const gridOptions = {
    rowClass: 'my-hover-class',
  };

  const handleButtonClick = () => {
    // Get the current page number.
    const currentPageNumber = gridRef.current.api.paginationGetCurrentPage();

    // Get the page size.
    const pageSize = gridRef.current.api.paginationGetPageSize();

    // Calculate the start and end row indexes.
    const startIndex = currentPageNumber + 1;
    const endIndex = pageSize - 1;

    console.log(startIndex, endIndex, currentPageNumber, pageSize);

    // Call the getRows() method to fetch the rows for the specified range.
    gridRef.current.api.getRows(startIndex, endIndex, function (rows: any) {
      // Do something with the rows.
      console.log(rows);
    });
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
          {/* <button onClick={handleButtonClick}>Get Rows of First Page</button> */}
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
          control?.data_grid_detail?.datagrid_options?.datagrid_bg_color
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
        header_bg_color={
          control?.data_grid_detail?.datagrid_options?.datagrid_header_bg_color
        }
        header_font_color={
          control?.data_grid_detail?.datagrid_options
            ?.datagrid_header_font_color
        }
        odd_row_bg_color={
          control?.data_grid_detail?.datagrid_options?.datagrid_odd_row_bg_color
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
      {isModalOpen && modal_data ? (
        <ModalDynamic
          open={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          data={modal_data}
        />
      ) : null}
    </Grid>
  );
};
