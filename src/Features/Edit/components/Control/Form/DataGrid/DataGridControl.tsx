import React, { useEffect, useState, useCallback } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { DataGridDetail, IApiControl } from '../../../../types';
import DataGrid, { Row } from 'react-data-grid';
import { Grid } from '@mui/material';
import { DataGridControlStyled } from './DataGridControl.style';
import { DataGridUpload } from './DataGridFields/DataGridUpload/DataGridUpload';
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

interface IProps {
  control: IApiControl;
  fileId: string;
  context: 'edit' | 'validate';
}

export const DataGridControl: React.FC<IProps> = ({
  control,
  fileId,
  context,
}) => {
  const [gridDetails, setGridDetails] = useState<
    DataGridDetail | undefined | null
  >(control.data_grid_detail);
  const [errorMessageAdd, setErrorMessageAdd] = useState<string>('');
  const { user } = useSecurity();
  const jwt = user.getJwt();

  const handleClickAddRow = useCallback(() => {
    addRow(fileId, control.control_id, jwt, setGridDetails, setErrorMessageAdd);
  }, [control.control_id, jwt, fileId]);

  useEffect(() => {
    if (control.data_grid_detail) {
      setGridDetails(control.data_grid_detail);
    }
  }, [control.data_grid_detail]);

  const rowRenderer = (props: any) => {
    const targetedColumns = Object.keys(props.row);
    targetedColumns.forEach((column, index) => {
      switch (props.row[column].component) {
        case 'file_upload':
          props.row[column] = (
            <DataGridUpload
              columnId={props.row[column].col_elm_id}
              rowNum={props.row[column].row_num}
              key={index}
              value={props.row[column].value}
              fileId={fileId}
              controlId={control.control_id}
            />
          );

          return <Row {...props} />;
        case 'boolean':
          props.row[column] = (
            <DataGridBoolean
              columnId={props.row[column].col_elm_id}
              rowNum={props.row[column].row_num}
              fileId={fileId}
              controlId={control.control_id}
              key={index}
              value={props.row[column].value}
            />
          );

          return <Row {...props} />;
        case 'text':
          props.row[column] = (
            <DataGridText
              columnId={props.row[column].col_elm_id}
              rowNum={props.row[column].row_num}
              fileId={fileId}
              controlId={control.control_id}
              key={index}
              value={props.row[column].value}
            />
          );

          return <Row {...props} />;
        case 'integer':
          props.row[column] = (
            <DataGridInteger
              columnId={props.row[column].col_elm_id}
              rowNum={props.row[column].row_num}
              fileId={fileId}
              controlId={control.control_id}
              key={index}
              value={props.row[column].value}
            />
          );

          return <Row {...props} />;
        case 'select_list':
          const answerChoices: Record<string, ISelectData> = {};
          props.row[column].answer_choices.map(
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

          props.row[column] = (
            <DataGridSelect
              columnId={props.row[column].col_elm_id}
              rowNum={props.row[column].row_num}
              fileId={fileId}
              controlId={control.control_id}
              answerChoices={answerChoices}
              key={index}
              value={props.row[column].value}
            />
          );

          return <Row {...props} />;
        case 'delete':
          props.row[column] = (
            <DataGridDelete
              fileId={fileId}
              controlId={control.control_id}
              rowNum={props.row[column].row_num}
              setGridDetails={setGridDetails}
            />
          );

          return <Row {...props} />;
      }
    });

    return <Row {...props} />;
  };

  return (
    <Grid item xs={12}>
      <DataGridControlStyled>
        <ControlLabel control={control} />
        {gridDetails?.rows && gridDetails?.columns && (
          <DataGrid
            style={{ height: 'auto' }}
            rowHeight={150}
            headerRowHeight={50}
            columns={gridDetails.columns}
            className={'_DataGrid rdg-light'}
            rows={gridDetails.rows}
            components={{ rowRenderer: rowRenderer }}
          />
        )}
        <BPITooltip title={'Ajouter une ligne'}>
          <AddCircleOutline fontSize={'large'} onClick={handleClickAddRow} />
        </BPITooltip>
        {errorMessageAdd && <FormError>{errorMessageAdd}</FormError>}
      </DataGridControlStyled>
    </Grid>
  );
};
