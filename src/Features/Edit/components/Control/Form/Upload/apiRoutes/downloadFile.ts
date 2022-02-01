import axios from 'axios';
import { getEnv } from '../../../../../../../Packages/Helpers';
import React, { SetStateAction } from 'react';

export const downloadFile = (
  fileId: string,
  name: string,
  jwt: string | null,
  setErrorMessage: React.Dispatch<SetStateAction<string | null>>,
) => {
  axios
    .get(
      `${getEnv('API_PROTOCOL')}://${getEnv(
        'API_HOST',
      )}/control/get_upfile?file_id=${fileId}&file_name=${name}`,
      {
        headers: {
          Authorization: jwt,
        },
        responseType: 'blob',
      },
    )
    .then((response) => {
      console.log(response);
      // const url = window.URL.createObjectURL(new Blob([response.data]));
      // const link = document.createElement('a');
      // link.href = url;
      // link.setAttribute('download', file[0]); //or any other extension
      // document.body.appendChild(link);
      // link.click();
    })
    .catch(() => {
      return setErrorMessage(
        'Une erreur est survenue lors du téléchargement du fichier',
      );
    });
};
