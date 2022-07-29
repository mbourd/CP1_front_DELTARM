import React, { useState, useCallback, useMemo, useRef } from 'react';
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

  const columnDefs = useMemo(
    () => control.data_grid_detail_ag_grid?.cols.values,
    [control.data_grid_detail_ag_grid?.cols.values],
  );
  const [rowData, setRowData] = useState(
    control.data_grid_detail_ag_grid?.lines,
  );

  const handleClickAddRow = useCallback(() => {
    addRow(fileId, control.control_id, jwt, setRowData, setErrorMessageAdd);
  }, [control.control_id, jwt, fileId]);

  // use for custom sorting
  const StringComparator = (valueA: any, valueB: any) => {
    if (valueA.value == valueB.value) {
      return 0;
    }

    return valueA.value > valueB.value ? 1 : -1;
  };

  const cellRenderer = useCallback(
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
    [control.control_id, fileId],
  );

  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      sortable: true,
      cellRenderer: cellRenderer,
      autoHeight: true,
      cellClass: 'grid-cell-centered',
    }),
    [cellRenderer],
  );

  const onGridReady = (params: any) => {
    // Make the currently visible columns fit the screen
    params.api.sizeColumnsToFit();
    params.api.enableVirtualization = true;
    // params.api.hideOverlay();
  };

  const getRowStyle = (params: any) => {
    if (params.data.border_bottom) {
      return {
        borderBottom: `1px solid ${params.data.border_bottom}`,
      };
    }
    if (!params.data.border_bottom) {
      return { borderBottom: 'none' };
    }
  };

  const handlePrint = useReactToPrint({
    content: () => gridRef.current,
  });

  control.data_grid_detail_ag_grid?.cols.values.forEach((column) => {
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
          style={{ backgroundColor: '#f50057', marginLeft: '10px' }}
          onClick={handlePrint}
        >
          Export PDF
        </Button>
        <AgGridReact
          className="ag-theme-alpine"
          domLayout={'autoHeight'}
          ref={gridRef}
          // @ts-ignore
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowData={rowData}
          onGridReady={onGridReady}
          overlayLoadingTemplate={
            '<span class="ag-overlay-loading-center">Loading..</span>'
          }
          getRowStyle={getRowStyle}
          animateRows
        />
        <BPITooltip title={trans('addLine')}>
          <AddCircleOutline fontSize={'large'} onClick={handleClickAddRow} />
        </BPITooltip>
        {errorMessageAdd && <FormError>{errorMessageAdd}</FormError>}
      </DataGridControlStyled>
    </Grid>
  );
};
