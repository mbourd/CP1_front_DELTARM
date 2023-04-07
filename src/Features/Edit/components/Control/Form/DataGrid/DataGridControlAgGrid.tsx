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
import { DataGridControlStyled } from './DataGridControl.style';
import { DataGridBoolean } from './DataGridFields/DataGridBoolean/DataGridBoolean';
import { DataGridText } from './DataGridFields/DataGridText/DataGridText';
import { DataGridInteger } from './DataGridFields/DataGridInteger/DataGridInteger';
import { DataGridSelect } from './DataGridFields/DataGridSelect/DataGridSelect';
import { ControlLabel } from '../ControlLabel';
import { AddCircleOutline } from '@mui/icons-material';
import { CloudUpload } from '@material-ui/icons';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {
  BPITooltip,
  FormError,
  ISelectData,
} from '../../../../../../Shared/components';
import { useSecurity } from '../../../../../../Packages/Security';
import { addRow } from './apiRoutes/addRow';
import { DataGridDelete } from './DataGridFields/DataGridDelete/DataGridDelete';
import { DataGridDate } from './DataGridFields/DataGridDate/DataGridDate';
import { DataGridDecimal } from './DataGridFields/DataGridDecimal/DataGridDecimal';
import { DataGridPercent } from './DataGridFields/DataGridPercent/DataGridPercent';
import { DataGridFinancial } from './DataGridFields/DataGridFinancial/DataGridFinancial';
import { DataGridLongText } from './DataGridFields/DataGridLongText/DataGridLongText';
import { AgGridReact } from 'ag-grid-react';
import { useReactToPrint } from 'react-to-print';
import { Button } from 'Shared/components';
import { GenericDataGridResearcher } from './GenericDataGridResearcher';
import { AgDataGridUpload } from './DataGridFields/AgDataGridUpload/AgDataGridUpload';
import { useTrans } from '../../../../../../Services';
import './datagrid.css';
import { useApi, useRouter } from 'Services';
import { saveValueDataGrid } from './apiRoutes/saveValueDataGrid';
import AttachmentCellRenderer from './AgDataGridFields/AttachementCellRenderer/AttachementCellRenderer';
import CustomSelectRenderer from './AgDataGridFields/CustomSelectRenderer/CustomSelectRenderer';
import CustomDeleteRenderer from './AgDataGridFields/CustomDeleteRenderer/CustomDeleteRenderer';
import CustomDateRenderer from './AgDataGridFields/CustomDateRenderer/CustomDateRenderer';
import { EuroIcon } from 'Styles';
import { minMax } from 'Packages/Helpers/src/minMax';
import CustomCommentRenderer from './AgDataGridFields/CustomCommentRenderer/CustomCommentRenderer';
import CustomCommentAndLongTextRenderer from './AgDataGridFields/CustomCommentAndLongTextRenderer/CustomCommentAndLongTextRenderer';
import { ValueSetterParams } from 'ag-grid-community';

const columns = [
  {
    headerName: 'Valeur entière',
    field: 'Valeur_entière.value',
    filter: true,
    sortable: true,
    resizable: true,
    floatingFilter: true,
    pinned: 'left',
  },
  {
    headerName: 'Attachement',
    field: 'Attachement.value',
    filter: true,
    sortable: true,
    pinned: 'left',
  },
  {
    headerName: 'Texte',
    field: 'Texte.value',
    resizable: true,
    floatingFilter: true,
  },
  { headerName: 'Liste de sélection', field: 'Liste_de_sélection.value' },
  { headerName: 'Date', field: 'date.value' },
  { headerName: 'Case à cocher', field: 'Case_à_cocher.value' },
];
const rows = [
  {
    Valeur_entière: {
      col_elm_id: 870,
      component: 'integer',
      control_editable: true,
      control_mandatory: false,
      control_regex: '^-?[0-9]\\d*$',
      control_regex_msg: "La valeur saisie n'est pas une valeur entière",
      row_num: 5,
      value: 54645,
    },
    Attachement: {
      col_elm_id: 870,
      component: 'file_upload',
      control_editable: true,
      control_mandatory: false,
      control_regex: null,
      control_regex_msg: null,
      row_num: 5,
      value: 'first.png',
    },
    Texte: {
      col_elm_id: 870,
      component: 'boolean',
      control_editable: true,
      control_mandatory: false,
      control_regex: null,
      control_regex_msg: null,
      row_num: 5,
      value: true,
    },
    Liste_de_sélection: {
      col_elm_id: 870,
      component: 'select_list',
      control_editable: true,
      control_mandatory: false,
      control_regex: null,
      control_regex_msg: null,
      row_num: 5,
      value: '2',
      answer_choices: [
        {
          choice_background_color: 'FFFFFF',
          choice_font_color: '000000',
          choice_font_style: 'normal',
          id: 1,
          label: 'OK',
          value: '1',
        },
        {
          choice_background_color: 'FFFFFF',
          choice_font_color: '000000',
          choice_font_style: 'normal',
          id: 2,
          label: 'KO',
          value: '2',
        },
      ],
    },
    Case_à_cocher: {
      component: 'delete',
      row_num: 5,
    },
    date: {
      col_elm_id: 870,
      component: 'date',
      control_editable: true,
      control_mandatory: false,
      control_regex: '^-?[0-9]\\d*$',
      control_regex_msg: "La valeur saisie n'est pas une valeur entière",
      row_num: 5,
      value: '2023-03-14T11:18:01.787Z',
    },
  },
  {
    Valeur_entière: {
      col_elm_id: 870,
      component: 'integer',
      control_editable: true,
      control_mandatory: false,
      control_regex: '^-?[0-9]\\d*$',
      control_regex_msg: "La valeur saisie n'est pas une valeur entière",
      row_num: 5,
      value: 54645,
    },
    Attachement: {
      col_elm_id: 870,
      component: 'file_upload',
      control_editable: true,
      control_mandatory: false,
      control_regex: null,
      control_regex_msg: null,
      row_num: 5,
      value: 'first.png',
    },
    Texte: {
      col_elm_id: 870,
      component: 'boolean',
      control_editable: true,
      control_mandatory: false,
      control_regex: null,
      control_regex_msg: null,
      row_num: 5,
      value: false,
    },
    Liste_de_sélection: {
      col_elm_id: 870,
      component: 'select_list',
      control_editable: true,
      control_mandatory: false,
      control_regex: null,
      control_regex_msg: null,
      row_num: 5,
      value: '1',
      answer_choices: [
        {
          choice_background_color: 'FFFFFF',
          choice_font_color: '000000',
          choice_font_style: 'normal',
          id: 1,
          label: 'OK',
          value: '1',
        },
        {
          choice_background_color: 'FFFFFF',
          choice_font_color: '000000',
          choice_font_style: 'normal',
          id: 2,
          label: 'KO',
          value: '2',
        },
      ],
    },
    Case_à_cocher: {
      component: 'delete',
      row_num: 5,
    },
    date: {
      col_elm_id: 870,
      component: 'date',
      control_editable: true,
      control_mandatory: false,
      control_regex: '^-?[0-9]\\d*$',
      control_regex_msg: "La valeur saisie n'est pas une valeur entière",
      row_num: 5,
      value: '2023-03-14T11:18:01.787Z',
    },
  },
];
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
  const [GridDetails, setGridDetails]: any = useState(null);
  // useEffect(() => {
  //   console.log(control.data_grid_detail);
  // }, []);
  useEffect(() => {
    setGridDetails(control?.data_grid_detail);
    console.log('control', control?.data_grid_detail);
  }, [control?.data_grid_detail]);
  // useEffect(() => {
  //   setRowData(rows);
  // }, [rowData]);

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
              cellEditor: 'agSelectCellEditor',
              cellEditorParams: {
                values: g?.choice_options?.map((option: any) => {
                  return option?.choice_lib;
                }),
              },
              // valueSetter: (params: any) => {
              //   const choice_label = params?.colDef?.choice_options?.filter(
              //     (label: any) => {
              //       return params?.newValue == label?.choice_lib?.toString();
              //     },
              //   );

              //   console.log('seeting value', choice_label[0]?.choice_id);

              //   return choice_label[0]?.choice_id;
              // },
              cellRenderer: (props: any) => {
                const choice_label = props?.colDef?.choice_options?.filter(
                  (label: any) => {
                    return props.value === label?.choice_id?.toString();
                  },
                );

                return <div>{choice_label[0]?.choice_lib ?? props.value}</div>;
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
      // case 'select_list':
      //   return <CustomSelectRenderer props={props} field_data={field_data} />;
      // case 'delete':
      //   return (
      //     <CustomDeleteRenderer props={props} rowData={GridDetails?.rows} />
      //   );
      // case 'date':
      //   return <CustomDateRenderer props={props} field_data={field_data} />;
      // case 'boolean':
      //   return <CustomCheckBoxRenderer props={props} />;
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
      // return (
      //   <CustomCommentAndLongTextRenderer
      //     old_value={props?.value}
      //     field_data={field_data}
      //     seterrors={seterrors}
      //     jwt={jwt}
      //     fileId={fileId}
      //     control={control}
      //     gridRef={gridRef}
      //   />
      // );
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

    // return props.value;
  }, []);

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

    console.log(event);
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

    if (field_data?.component === 'select_list') {
      console.log('value', event?.newValue);

      const select_id = event?.colDef?.choice_options.filter((option: any) => {
        return event?.newValue?.toString() === option?.choice_lib;
      });

      saveValueDataGrid(
        fileId,
        control.control_id,
        field_data?.col_elm_id,
        field_data?.row_num,
        jwt,
        select_id[0]?.choice_id.toString(),
        seterrors,
        select_id[0]?.choice_id.toString(),
      );
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
      {/* </DataGridControlStyled> */}
    </Grid>
  );
};
