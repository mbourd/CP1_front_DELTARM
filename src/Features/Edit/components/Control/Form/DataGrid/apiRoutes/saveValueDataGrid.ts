import axios from 'axios';
import React, { SetStateAction } from 'react';
import { getEnv } from '../../../../../../../Packages/Helpers';

export const saveValueDataGrid = (
  fileId: string,
  controlId: string,
  jwt: string | null,
  setGridDetails: React.Dispatch<SetStateAction<any>>,
  setErrorMessage: React.Dispatch<SetStateAction<string>>,
  value: string,
) => {
  axios
    .post(
      `${getEnv('API_PROTOCOL')}://${getEnv(
        'API_HOST',
      )}/control/data_grid/save_value?file_id=${fileId}&elm_id=${controlId}&elm_val${value}`,
      {
        headers: {
          Authorization: jwt,
        },
        responseType: 'json',
      },
    )
    .then((response) => {
      if (response.data.data_grid_detail) {
        setGridDetails(response.data.data_grid_detail);
      }
    })
    .catch(() => {
      return setErrorMessage('Une erreur est survenue');
    });
};
