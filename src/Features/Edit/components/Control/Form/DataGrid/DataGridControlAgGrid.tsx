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
  const [errorMessageAdd, setErrorMessageAdd] = useState<string>('');
  const { user } = useSecurity();
  const gridRef = useRef<any>();
  const jwt = user.getJwt();
  const errrorMessage = '';
  const [error, seterror] = useState('');

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
            value: 'New regime',
          },
          Attachement: {
            col_elm_id: 870,
            component: 'file_upload',
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
            component: 'select_list',
            control_editable: true,
            control_mandatory: false,
            control_regex: '^-?[0-9]\\d*$',
            control_regex_msg: "La valeur saisie n'est pas une valeur entière",
            row_num: 5,
            value: '54645',
          },
          Case_à_cocher: {
            col_elm_id: 870,
            component: 'delete',
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

  const cellRendere = useCallback(
    (props: any) => {
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

  const AttachementCellRenderer: React.FC<any> = ({
    props,
    field_data,
    field_name,
  }) => {
    // const { value, api, data } = props;
    const [file, setFile] = useState(null);

    console.log(props, field_data, field_name);

    /* HANDLE FILE CHANGE */
    const handleFileChange = (event: any) => {
      const file = event.target.files[0];
      const reader: any = new FileReader();

      reader.onloadend = () => {
        setFile(reader?.result);
        const fileName = file.name;
        // data.Attachement.name = fileName;
        field_data.value = fileName;
        // props.api.applyTransaction({ update: [props.data] });
        props.setValue(fileName);
      };

      reader?.readAsDataURL(file);
    };

    return (
      <div
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <label
          htmlFor="inputTag"
          style={{
            cursor: 'pointer',
          }}
        >
          <CloudUpload
            style={{ marginRight: 10, marginTop: 20, color: 'crimson' }}
          />
          <input
            type="file"
            onChange={handleFileChange}
            id="inputTag"
            hidden
            // defaultValue={props.value}
          />
        </label>
        {/* {file && <img src={file} alt="attachment" width="35" height="35" />} */}

        <span>{props.value}</span>
      </div>
    );
  };

  const CustomSelectRenderer: React.FC<any> = ({ props, field_data }) => {
    const handleChange = (event: any) => {
      props.setValue(event.target.value);
      field_data.value = event.target.value;
    };
    const options = [
      'Option 1',
      'Option 2',
      'Option 3',
      'Option 4',
      'Option 5',
    ];

    return (
      <select
        value={props.value}
        onChange={handleChange}
        style={{ borderWidth: 0, backgroundColor: 'transparent' }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };

  const CustomDeleteRenderer: React.FC<any> = ({ props }) => {
    console.log(props);
    /* SINGLE DELETE */
    const handleDelete = () => {
      const updatedData = [...rowData];
      updatedData.splice(props.rowIndex, 1);
      props.api.applyTransaction({ remove: [props.node.data] });
    };

    return <button onClick={handleDelete}>Delete</button>;
  };

  const CustomCheckBoxRenderer: React.FC<any> = ({ props }) => {
    const checkedHandler = (event: any) => {
      const checked = event.target.checked;
      props.setValue(checked);
    };

    return (
      <input
        type="checkbox"
        onClick={checkedHandler}
        defaultChecked={props.value}
      />
    );
  };

  const CustomDateRenderer: React.FC<any> = ({ props }) => {
    const checkedHandler = (event: any) => {
      console.log('event', event.target.value);
      // const date = new Date(event.target.value)?.toISOString();
      // props.setValue(date);
    };

    return (
      <div>
        <label htmlFor="date">
          <input type="date" onClick={checkedHandler} id="date" />
        </label>
        <span>{props.value}</span>
      </div>
    );
  };

  const cellRenderer = useCallback((props: any) => {
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

    if (field_data?.component === 'file_upload') {
      return (
        <AttachementCellRenderer
          props={props}
          field_name={data}
          field_data={field_data}
        />
      );
    } else if (field_data?.component === 'select_list') {
      return <CustomSelectRenderer props={props} field_data={field_data} />;
    } else if (field_data?.component === 'delete') {
      return <CustomDeleteRenderer props={props} />;
    } else if (field_data?.component === 'boolean') {
      return <CustomCheckBoxRenderer props={props} />;
    } else if (field_data?.component === 'date') {
      return <CustomDateRenderer props={props} />;
    } else {
      return props.value;
    }

    // return props.value;
  }, []);

  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      sortable: true,
      cellRenderer: cellRenderer,
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

    console.log('editing starts', {
      [data]: {
        field_data,
        row_index: event?.rowIndex,
        old_value: event.oldValue,
        value: event?.value,
      },
    });
    // console.log(field_data);
    // console.log('Data after change is', event);
    seterror('Validation Failed');
    gridRef.current.api.undoCellEditing();
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
        <h1 style={{ color: 'red' }}>{error}</h1>
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
