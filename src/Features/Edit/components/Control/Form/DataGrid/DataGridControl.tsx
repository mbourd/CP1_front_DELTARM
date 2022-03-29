import React, { useEffect, useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { IApiControl } from '../../../../types';
import DataGrid, { Row } from 'react-data-grid';
import { Grid } from '@mui/material';
import { DataGridControlStyled } from './DataGridControl.style';
import { DataGridUpload } from './DataGridFields/DataGridUpload/DataGridUpload';
import { DataGridBoolean } from './DataGridFields/DataGridBoolean/DataGridBoolean';
import { DataGridText } from './DataGridFields/DataGridText/DataGridText';
import { DataGridInteger } from './DataGridFields/DataGridInteger/DataGridInteger';
import { DataGridSelect } from './DataGridFields/DataGridSelect/DataGridSelect';
import { ControlLabel } from '../ControlLabel';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {
  BPITooltip,
  FormError,
  ISelectData,
} from '../../../../../../Shared/components';
import { useSecurity } from '../../../../../../Packages/Security';
import { addRow } from './apiRoutes/addRow';

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
  const [gridDetails, setGridDetails] = useState(control.data_grid_detail);
  const [errorMessage, setErrorMessage] = useState('');
  const { user } = useSecurity();
  const jwt = user.getJwt();
  const handleClickAddRow = () => {
    addRow(fileId, control.control_id, jwt, setGridDetails, setErrorMessage);
  };

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
              fileId={fileId}
              controlId={control.control_id}
              key={index}
              value={props.row[column].value}
            />
          );

          return <Row {...props} />;
        case 'select':
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
              fileId={fileId}
              controlId={control.control_id}
              answerChoices={answerChoices}
              key={index}
              value={props.row[column].value}
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
          <AddCircleOutlineIcon
            fontSize={'large'}
            onClick={handleClickAddRow}
          />
        </BPITooltip>
        {errorMessage && <FormError>{errorMessage}</FormError>}
      </DataGridControlStyled>
    </Grid>
  );
};
