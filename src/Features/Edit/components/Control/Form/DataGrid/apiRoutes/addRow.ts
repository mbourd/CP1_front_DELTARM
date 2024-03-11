import axios from 'axios';
import React, { SetStateAction } from 'react';
import { getEnv } from '../../../../../../../Packages/Helpers';

export const addRow = (
  fileId: string,
  controlId: string,
  jwt: string,
  setGridDetails: React.Dispatch<SetStateAction<any>>,
  setErrorMessage: React.Dispatch<SetStateAction<string>>,
  setRowsData?: any,
) => {
  axios
    .post(
      `${getEnv('API_PROTOCOL')}://${getEnv(
        'API_HOST',
      )}/control/data_grid/add_row?file_id=${fileId}&elm_id=${controlId}`,
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
        setRowsData(response.data.rows);

        // setGridDetails(response.data);
      }
    })
    .catch(() => {
      return setErrorMessage(
        "Une erreur est survenue lors de l'ajout de la ligne",
      );
    });
};
