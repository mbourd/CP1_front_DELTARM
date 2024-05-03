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
// import { addRow } from './apiRoutes/addRow';
import { DataGridDelete } from './DataGridFields/DataGridDelete/DataGridDelete';
import { DataGridDate } from './DataGridFields/DataGridDate/DataGridDate';
import { DataGridDecimal } from './DataGridFields/DataGridDecimal/DataGridDecimal';
import { DataGridPercent } from './DataGridFields/DataGridPercent/DataGridPercent';
import { DataGridFinancial } from './DataGridFields/DataGridFinancial/DataGridFinancial';
import { DataGridLongText } from './DataGridFields/DataGridLongText/DataGridLongText';
import { getEnv, useTrans } from '../../../../../../Services';
import { ModalDynamic } from 'Features/ModalDynamic/components/ModalDynamic';
import axios from 'axios';

interface IProps {
  control: IApiControl;
  fileId: string;
}

export const DataGridControl: React.FC<React.PropsWithChildren<IProps>> = ({
  control,
  fileId,
}) => {
  const [gridDetails, setGridDetails] = useState<
    DataGridDetail | undefined | null
  >(control.data_grid_detail);
  const [errorMessageAdd, setErrorMessageAdd] = useState<string>('');
  const { user } = useSecurity();
  const jwt = user.getJwt();
  const [trans] = useTrans('Edit');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal_data, setmodal_data]: any = useState(null);

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
    // addRow(fileId, control.control_id, jwt, setGridDetails, setErrorMessageAdd);
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
              value={props.row[column].upload_detail}
              fileId={fileId}
              editable={props.row[column].control_editable}
              mandatory={props.row[column].control_mandatory}
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
              regex={control.control_regex}
              regexMsg={control.control_regex_msg}
              editable={props.row[column].control_editable}
              mandatory={props.row[column].control_mandatory}
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
              regex={control.control_regex}
              regexMsg={control.control_regex_msg}
              editable={props.row[column].control_editable}
              mandatory={props.row[column].control_mandatory}
            />
          );

          return <Row {...props} />;

        case 'long_text':
          props.row[column] = (
            <DataGridLongText
              columnId={props.row[column].col_elm_id}
              rowNum={props.row[column].row_num}
              fileId={fileId}
              controlId={control.control_id}
              key={index}
              value={props.row[column].value}
              regex={control.control_regex}
              regexMsg={control.control_regex_msg}
              editable={props.row[column].control_editable}
              mandatory={props.row[column].control_mandatory}
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
              value={props.row[column].value}
              regex={control.control_regex}
              regexMsg={control.control_regex_msg}
              editable={props.row[column].control_editable}
              mandatory={props.row[column].control_mandatory}
            />
          );

          return <Row {...props} key={index} />;
        case 'select_list': {
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
              regex={control.control_regex}
              regexMsg={control.control_regex_msg}
              editable={props.row[column].control_editable}
              mandatory={props.row[column].control_mandatory}
            />
          );

          return <Row {...props} />;
        }
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
        case 'date':
          props.row[column] = (
            <DataGridDate
              columnId={props.row[column].col_elm_id}
              rowNum={props.row[column].row_num}
              fileId={fileId}
              controlId={control.control_id}
              key={index}
              value={props.row[column].value}
              regex={control.control_regex}
              regexMsg={control.control_regex_msg}
              editable={props.row[column].control_editable}
              mandatory={props.row[column].control_mandatory}
            />
          );

          return <Row {...props} />;
        case 'decimal':
          props.row[column] = (
            <DataGridDecimal
              columnId={props.row[column].col_elm_id}
              rowNum={props.row[column].row_num}
              fileId={fileId}
              controlId={control.control_id}
              key={index}
              value={props.row[column].value}
              regex={control.control_regex}
              regexMsg={control.control_regex_msg}
              editable={props.row[column].control_editable}
              mandatory={props.row[column].control_mandatory}
            />
          );

          return <Row {...props} />;
        case 'percent':
          props.row[column] = (
            <DataGridPercent
              columnId={props.row[column].col_elm_id}
              rowNum={props.row[column].row_num}
              fileId={fileId}
              controlId={control.control_id}
              key={index}
              value={props.row[column].value}
              regex={control.control_regex}
              regexMsg={control.control_regex_msg}
              editable={props.row[column].control_editable}
              mandatory={props.row[column].control_mandatory}
            />
          );

          return <Row {...props} />;
        case 'financial':
          props.row[column] = (
            <DataGridFinancial
              columnId={props.row[column].col_elm_id}
              rowNum={props.row[column].row_num}
              fileId={fileId}
              controlId={control.control_id}
              key={index}
              value={props.row[column].value}
              regex={control.control_regex}
              regexMsg={control.control_regex_msg}
              editable={props.row[column].control_editable}
              mandatory={props.row[column].control_mandatory}
            />
          );

          return <Row {...props} />;
      }
    });

    return <Row {...props} />;
  };

  return (
    <Grid item xs={11} style={{ maxWidth: '95%', margin: '0 auto' }}>
      <DataGridControlStyled>
        <ControlLabel control={control} />
        {gridDetails?.rows && gridDetails?.columns && (
          <DataGrid
            style={{ height: 'auto' }}
            rowHeight={100}
            headerRowHeight={50}
            columns={gridDetails.columns}
            className={'_DataGrid rdg-light'}
            rows={gridDetails.rows}
            components={{ rowRenderer: rowRenderer }}
          />
        )}
        <BPITooltip title={trans('addLine')}>
          <AddCircleOutline fontSize={'large'} onClick={handleClickAddRow} />
        </BPITooltip>
        {isModalOpen && modal_data ? (
          <ModalDynamic
            open={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            data={modal_data}
          />
        ) : null}
        {errorMessageAdd && <FormError>{errorMessageAdd}</FormError>}
      </DataGridControlStyled>
    </Grid>
  );
};
