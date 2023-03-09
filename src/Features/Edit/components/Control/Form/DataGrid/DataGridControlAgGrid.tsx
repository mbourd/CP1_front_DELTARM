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
      value: 'New regime',
    },
    Attachement: {
      col_elm_id: 870,
      component: 'integer',
      control_editable: true,
      control_mandatory: false,
      control_regex: '^-?[0-9]\\d*$',
      control_regex_msg: "La valeur saisie n'est pas une valeur entière",
      row_num: 5,
      value: 3233,
    },
    Texte: {
      col_elm_id: 870,
      component: 'integer',
      control_editable: true,
      control_mandatory: false,
      control_regex: '^-?[0-9]\\d*$',
      control_regex_msg: "La valeur saisie n'est pas une valeur entière",
      row_num: 5,
      value: '54645',
    },
    Liste_de_sélection: {
      col_elm_id: 870,
      component: 'integer',
      control_editable: true,
      control_mandatory: false,
      control_regex: '^-?[0-9]\\d*$',
      control_regex_msg: "La valeur saisie n'est pas une valeur entière",
      row_num: 5,
      value: '54645',
    },
    Case_à_cocher: {
      col_elm_id: 870,
      component: 'integer',
      control_editable: true,
      control_mandatory: false,
      control_regex: '^-?[0-9]\\d*$',
      control_regex_msg: "La valeur saisie n'est pas une valeur entière",
      row_num: 5,
      value: '54645',
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
      value: 'merton',
    },
    Attachement: {
      col_elm_id: 870,
      component: 'integer',
      control_editable: true,
      control_mandatory: false,
      control_regex: '^-?[0-9]\\d*$',
      control_regex_msg: "La valeur saisie n'est pas une valeur entière",
      row_num: 5,
      value: '54645',
    },
    Texte: {
      col_elm_id: 870,
      component: 'integer',
      control_editable: true,
      control_mandatory: false,
      control_regex: '^-?[0-9]\\d*$',
      control_regex_msg: "La valeur saisie n'est pas une valeur entière",
      row_num: 5,
      value: '54645',
    },
    Liste_de_sélection: {
      col_elm_id: 870,
      component: 'integer',
      control_editable: true,
      control_mandatory: false,
      control_regex: '^-?[0-9]\\d*$',
      control_regex_msg: "La valeur saisie n'est pas une valeur entière",
      row_num: 5,
      value: '54645',
    },
    Case_à_cocher: {
      col_elm_id: 870,
      component: 'integer',
      control_editable: true,
      control_mandatory: false,
      control_regex: '^-?[0-9]\\d*$',
      control_regex_msg: "La valeur saisie n'est pas une valeur entière",
      row_num: 5,
      value: '54645',
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
  const [errorMessageAdd, setErrorMessageAdd] = useState<string>('');
  const { user } = useSecurity();
  const gridRef = useRef<any>();
  const [trans] = useTrans('Edit');
  const jwt = user.getJwt();
  const errrorMessage = '';
  const [error, seterror]: any = useState('');

  const valueGetter = (params: any) => {
    console.log(params);

    return params.value;
  };
  // const columnDefs = useMemo(
  //   () =>
  //     control.data_grid_detail?.columns.map((g) => {
  //       return {
  //         headerName: g.name,
  //         field: g.key,
  //         colId: g.key,
  //         filter: true,
  //         sortable: true,
  //         floatingFilter: true,
  //         resizable: true,
  //       };
  //     }),
  //   [control.data_grid_detail?.columns],
  // );
  const [rowData, setRowData]: any = useState([]);
  // useEffect(() => {
  //   console.log(control.data_grid_detail);
  // }, []);
  // useEffect(() => {
  //   setRowData(control?.data_grid_detail?.rows);
  // }, [control?.data_grid_detail?.rows]);
  useEffect(() => {
    setRowData(rows);
  }, [rowData]);

  // const handleClickAddRow = useCallback(() => {
  //   addRow(
  //     fileId,
  //     control.control_id,
  //     jwt,
  //     setRowData,
  //     setErrorMessageAdd,
  //     setRowData,
  //   );
  // }, [control.control_id, jwt, fileId]);

  const handleClickAddRow = () => {
    gridRef.current.api.applyTransaction({
      add: [
        {
          Valeur_entière: {
            col_elm_id: 870,
            component: 'integer',
            control_editable: true,
            control_mandatory: false,
            control_regex: '^-?[0-9]\\d*$',
            control_regex_msg: "La valeur saisie n'est pas une valeur entière",
            row_num: 5,
            value: 'merton',
          },
          Attachement: {
            col_elm_id: 870,
            component: 'integer',
            control_editable: true,
            control_mandatory: false,
            control_regex: '^-?[0-9]\\d*$',
            control_regex_msg: "La valeur saisie n'est pas une valeur entière",
            row_num: 5,
            value: '54645',
          },
          Texte: {
            col_elm_id: 870,
            component: 'integer',
            control_editable: true,
            control_mandatory: false,
            control_regex: '^-?[0-9]\\d*$',
            control_regex_msg: "La valeur saisie n'est pas une valeur entière",
            row_num: 5,
            value: '54645',
          },
          Liste_de_sélection: {
            col_elm_id: 870,
            component: 'integer',
            control_editable: true,
            control_mandatory: false,
            control_regex: '^-?[0-9]\\d*$',
            control_regex_msg: "La valeur saisie n'est pas une valeur entière",
            row_num: 5,
            value: '54645',
          },
          Case_à_cocher: {
            col_elm_id: 870,
            component: 'integer',
            control_editable: true,
            control_mandatory: false,
            control_regex: '^-?[0-9]\\d*$',
            control_regex_msg: "La valeur saisie n'est pas une valeur entière",
            row_num: 5,
            value: '54645',
          },
        },
      ],
    });
  };

  const handleClickRemoveSelectedRow = () => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    gridRef.current.api.applyTransaction({ remove: selectedRows });
  };
  // useEffect(() => {
  //   console.log(columnDefs, rowData);
  // }, [columnDefs, rowData]);
  // use for custom sorting
  const StringComparator = (valueA: any, valueB: any) => {
    console.log(valueA);
    if (valueA.value == valueB.value) {
      return 0;
    }

    return valueA.value > valueB.value ? 1 : -1;
  };

  const cellRenderer = useCallback(
    (props: any) => {
      // console.log(props);
      // const targetedColumns = Object.keys(props.data);
      // targetedColumns.forEach((column, index) => {
      //   console.log(props.row[column].component);
      // });
      switch (props.value.component) {
        case 'border_bottom':
          return null;
        case 'file_upload':
          return (
            <AgDataGridUpload
              columnId={props.value.col_elm_id}
              rowNum={props.value.row_num}
              value={props.value.upload_detail}
              fileId={fileId}
              controlId={control.control_id}
              mandatory={props.value.control_mandatory}
              editable={props.value.control_editable}
            />
          );
        case 'boolean':
          return (
            <DataGridBoolean
              columnId={props.value.col_elm_id}
              rowNum={props.value.row_num}
              fileId={fileId}
              controlId={control.control_id}
              value={props.value.value}
              regex={props.value.control_regex}
              regexMsg={props.value.control_regex_msg}
              mandatory={props.value.control_mandatory}
              editable={props.value.control_editable}
            />
          );
        case 'text':
          return (
            <DataGridText
              columnId={props.value.col_elm_id}
              rowNum={props.value.row_num}
              fileId={fileId}
              controlId={control.control_id}
              value={props.value.value}
              regex={props.value.control_regex}
              regexMsg={props.value.control_regex_msg}
              mandatory={props.value.control_mandatory}
              editable={props.value.control_editable}
            />
          );

        case 'long_text':
          return (
            <DataGridLongText
              columnId={props.value.col_elm_id}
              rowNum={props.value.row_num}
              fileId={fileId}
              controlId={control.control_id}
              value={props.value.value}
              regex={props.value.control_regex}
              regexMsg={props.value.control_regex_msg}
              mandatory={props.value.control_mandatory}
              editable={props.value.control_editable}
            />
          );

        case 'integer':
          return (
            <DataGridInteger
              columnId={props.value.col_elm_id}
              rowNum={props.value.row_num}
              fileId={fileId}
              controlId={control.control_id}
              value={props.value.value}
              regex={props.value.control_regex}
              regexMsg={props.value.control_regex_msg}
              mandatory={props.value.control_mandatory}
              editable={props.value.control_editable}
            />
          );

        case 'select_list':
          const answerChoices: Record<string, ISelectData> = {};
          props.value.answer_choices.map(
            (answer: {
              id: number | string;
              label: string;
              value: number | string;
            }) => {
              answerChoices[answer.id] = {
                id: '' + answer.id,
                label: answer.label,
                value: '' + answer.value,
              };

              return answer;
            },
          );

          return (
            <DataGridSelect
              columnId={props.value.col_elm_id}
              rowNum={props.value.row_num}
              fileId={fileId}
              controlId={control.control_id}
              answerChoices={answerChoices}
              value={props.value.value}
              regex={props.value.control_regex}
              regexMsg={props.value.control_regex_msg}
              mandatory={props.value.control_mandatory}
              editable={props.value.control_editable}
            />
          );

        case 'delete':
          return (
            <DataGridDelete
              fileId={fileId}
              controlId={control.control_id}
              rowNum={props.value.row_num}
              setGridDetails={setRowData}
            />
          );
        case 'date':
          return (
            <DataGridDate
              columnId={props.value.col_elm_id}
              rowNum={props.value.row_num}
              fileId={fileId}
              controlId={control.control_id}
              value={props.value.value}
              regex={props.value.control_regex}
              regexMsg={props.value.control_regex_msg}
              mandatory={props.value.control_mandatory}
              editable={props.value.control_editable}
            />
          );
        case 'decimal':
          return (
            <DataGridDecimal
              columnId={props.value.col_elm_id}
              rowNum={props.value.row_num}
              fileId={fileId}
              controlId={control.control_id}
              value={props.value.value}
              regex={props.value.control_regex}
              regexMsg={props.value.control_regex_msg}
              mandatory={props.value.control_mandatory}
              editable={props.value.control_editable}
            />
          );
        case 'percent':
          return (
            <DataGridPercent
              columnId={props.value.col_elm_id}
              rowNum={props.value.row_num}
              fileId={fileId}
              controlId={control.control_id}
              value={props.value.value}
              regex={props.value.control_regex}
              regexMsg={props.value.control_regex_msg}
              mandatory={props.value.control_mandatory}
              editable={props.value.control_editable}
            />
          );
        case 'financial':
          return (
            <DataGridFinancial
              columnId={props.value.col_elm_id}
              rowNum={props.value.row_num}
              fileId={fileId}
              controlId={control.control_id}
              value={props.value.value}
              regex={props.value.control_regex}
              regexMsg={props.value.control_regex_msg}
              mandatory={props.value.control_mandatory}
              editable={props.value.control_editable}
            />
          );
        default:
          return null;
      }
    },
    [control.control_id, fileId, rowData],
  );

  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      sortable: true,
      // cellRenderer: cellRenderer,
      autoHeight: true,
      filter: true,
      floatingFilter: true,
      editable: true,
      cellClass: 'grid-cell-centered',
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

  // const onCellEditingStarted = useCallback((event) => {
  //   console.log('cellEditingStarted', event);
  //   gridRef.current.api.undoCellEditing();
  // }, []);

  // const onCellEditingStopped = useCallback((event) => {
  //   console.log('cellEditingStopped', event);
  //   gridRef.current.api.undoCellEditing();
  // }, []);

  // const onUndoStarted = useCallback((event) => {
  //   console.log('undoStarted', event);
  // }, []);

  // const onUndoEnded = useCallback((event) => {
  //   console.log('undoEnded', event);
  // }, []);

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

    console.log({
      [data]: {
        field_data,
        row_index: event?.rowIndex,
        old_value: event.oldValue,
        value: event?.value,
      },
    });

    if (
      field_data.control_regex &&
      !event?.value.match(field_data.control_regex) &&
      event?.value
    ) {
      seterror(field_data.control_regex_msg);
      gridRef.current.api.undoCellEditing();
    }
    setTimeout(() => {
      seterror('');
    }, 2000);
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

  control.data_grid_detail?.columns.map((column: any) => {
    if (column.filter) {
      switch (column.filter) {
        case 'GenericDataGridResearcher':
          column.filter = GenericDataGridResearcher;
      }
    }
    if (column.comparator) {
      switch (column.comparator) {
        case 'StringComparator':
          column.comparator = StringComparator;
      }
    }
  });

  return (
    <Grid item xs={11} style={{ maxWidth: '95%', margin: '0 auto' }}>
      <DataGridControlStyled>
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
        <BPITooltip title={trans('addLine')}>
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
          {/* <AddCircleOutline fontSize={'large'} onClick={handleClickAddRow} /> */}
        </BPITooltip>
        <BPITooltip title={'Remove Line'}>
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
          {/* <AddCircleOutline fontSize={'large'} onClick={handleClickAddRow} /> */}
        </BPITooltip>
        <h1 style={{ color: 'red' }}>Hello {error}</h1>
        <AgGridReact
          className="ag-theme-alpine"
          domLayout={'autoHeight'}
          ref={gridRef}
          rowHeight={80}
          // @ts-ignore
          columnDefs={columns}
          defaultColDef={defaultColDef}
          rowData={rowData}
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
        {errorMessageAdd && <FormError>{errorMessageAdd}</FormError>}
      </DataGridControlStyled>
    </Grid>
  );
};
