import axios from 'axios';
import React, { SetStateAction } from 'react';
import { getEnv } from '../../../Packages/Helpers';

export const downloadAuditExcel = (
  fileId: string,
  jwt: string,
  setErrorMessage: React.Dispatch<SetStateAction<string | null>>,
) => {
  axios
    .get(
      `${getEnv('API_PROTOCOL')}://${getEnv(
        'API_HOST',
      )}/file/audit?target=download_xls&file_id=${fileId}`,
      {
        headers: {
          Authorization: jwt,
        },
        responseType: 'blob',
      },
    )
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const name = response.data.name;
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
