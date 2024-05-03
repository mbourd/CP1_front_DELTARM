import axios from 'axios';
import React, { SetStateAction } from 'react';
import { getEnv } from '../../../../../../../Packages/Helpers';

export const deleteRow = (
  fileId: string,
  controlId: string,
  row_num: string,
  jwt: string,
  setGridDetails: React.Dispatch<SetStateAction<any>>,
  setErrorMessage: React.Dispatch<SetStateAction<string>>,
  setShowModal: React.Dispatch<SetStateAction<boolean>>,
) => {
  axios
    .post(
      `${getEnv('API_PROTOCOL')}://${getEnv(
        'API_HOST',
      )}/control/data_grid/delete_row?file_id=${fileId}&elm_id=${controlId}&row_num=${row_num}`,
      {},
      {
        headers: {
          Authorization: jwt,
        },
        responseType: 'json',
      },
    )
    .then((response: any) => {
      if (response.data) {
        setGridDetails(response.data?.rows);
        setShowModal(false);
        setErrorMessage('');
      }
    })
    .catch(() => {
      return setErrorMessage(
        'Une erreur est survenue lors de la suppression de la ligne',
      );
    });
};
