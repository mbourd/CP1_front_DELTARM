import axios from 'axios';
import React, { SetStateAction } from 'react';
import { getEnv } from '../../../../Packages/Helpers';

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
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', name);
      document.body.appendChild(link);
      link.click();
    })
    .catch(() => {
      return setErrorMessage(
        'Une erreur est survenue lors du téléchargement du fichier',
      );
    });
};
