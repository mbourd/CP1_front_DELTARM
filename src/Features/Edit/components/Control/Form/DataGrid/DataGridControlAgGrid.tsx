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
import { useTrans } from '../../../../../../Services';
import './datagrid.css';
import { useApi, useRouter } from 'Services';
import { saveValueDataGrid } from './apiRoutes/saveValueDataGrid';
import CustomSelectRenderer from './AgDataGridFields/CustomSelectRenderer/CustomSelectRenderer';
import { EuroIcon } from 'Styles';
import { minMax } from 'Packages/Helpers/src/minMax';
import { AgDataGridStyle } from './DataGridControl.style';

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
  const [trans] = useTrans('Edit');
  const jwt = user.getJwt();
  const errrorMessage = '';
  const [errors, seterrors]: any = useState('');
  const { send, error } = useApi<void>();
  const { currentRoute } = useRouter();
  const [GridDetails, setGridDetails]: any = useState(null);
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
              singleClickEdit: false,
              editable: false,
              cellStyle: (params: any) => {
                // console.log(Object.values(params?.data));
                const data: any = Object.values(params?.data)[0];
                const select_id = data?.choice_options?.filter(
                  (option: any) => {
                    return data?.value === option?.choice_id?.toString();
                  },
                );
                return {
                  backgroundColor: select_id[0]?.option_bg_color,
                };
              },
            };
          case 'comment':
            return {
              ...g,
              cellEditorPopup: true,
              cellEditor: 'agLargeTextCellEditor',
              cellEditorParams: {
                rows: 10,
                cols: 50,
              },
            };
          case 'long_text':
            return {
              ...g,
              cellEditorPopup: true,
              cellEditor: 'agLargeTextCellEditor',
              cellEditorParams: {
                rows: 10,
                cols: 50,
              },
            };
          default:
            return g;
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
      // case 'file_upload':
      //   return (
      //     <AttachmentCellRenderer
      //       props={props}
      //       field_name={data}
      //       field_data={field_data}
      //     />
      //   );
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
      case 'percent':
        return (
          <div style={{ flexDirection: 'row', alignItems: 'center' }}>
            % {props.value}
          </div>
        );
      case 'comment':
        return props.value;
      case 'long_text':
        return props.value;
      case 'financial':
        return (
          <div style={{ flexDirection: 'row', alignItems: 'center' }}>
            {field_data?.control_options?.currency_symbol ? (
              <>
                <p style={{ fontSize: 13, fontWeight: 'bolder' }}>
                  {field_data?.control_options?.currency_symbol}
                </p>
              </>
            ) : (
              <EuroIcon
                style={{ marginBottom: -4, fontSize: 19, marginLeft: 2 }}
              />
            )}
            {props.value}
          </div>
        );
      default:
        return props?.value ? props?.value : 'No value';
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

  const onGridReady = (params: any) => {
    // Make the currently visible columns fit the screen
    params.api.sizeColumnsToFit();
    params.api.enableVirtualization = true;
    // params.api.hideOverlay();
  };

  const handleClickAddRow = useCallback(() => {
    addRow(fileId, control.control_id, jwt, setGridDetails, setErrorMessageAdd);
  }, [control.control_id, jwt, fileId]);

  const onCellValueChanged = useCallback((event) => {
    const cellDefs = gridRef.current.api.getEditingCells();
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
    if (field_data?.control_regex && event?.newValue) {
      const regexControl = new RegExp(field_data?.control_regex, 'i');
      if (
        !event?.newValue.match(regexControl) &&
        field_data?.control_regex_msg
      ) {
        // console.log('error occured');
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
    if (field_data?.component !== 'select_list') {
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

  const handlePrint = useReactToPrint({
    content: () => gridRef.current,
  });

  return (
    <Grid item xs={11} style={{ maxWidth: '95%', margin: '0 auto' }}>
      {/* <DataGridControlStyled> */}
      <ControlLabel control={control} />
      <Button
        style={{
          backgroundColor: '#f50057',
          marginLeft: '10px',
          marginBottom: 10,
        }}
        onClick={handlePrint}
      >
        Export PDF
      </Button>
      {/* <BPITooltip title={trans('addLine')}>
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
          Add Row
        </Button>
       
      </BPITooltip> */}
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
      <h1 style={{ color: 'red', padding: 10 }}>{errors}</h1>
      {errorsMessageAdd && <FormError>{errorsMessageAdd}</FormError>}
      <div className="ag-theme-alpine">
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
          overlayLoadingTemplate={
            '<span class="ag-overlay-loading-center">Loading..</span>'
          }
          sideBar={sideBar}
          pagination={true}
          paginationPageSize={4}
          rowSelection="multiple"
          // paginationAutoPageSize={true}
          onCellValueChanged={onCellValueChanged}
          undoRedoCellEditing={true}
          enableCellChangeFlash={true}
        />
      </div>
      {/* </DataGridControlStyled> */}
    </Grid>
  );
};
