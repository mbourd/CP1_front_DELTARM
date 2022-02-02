import axios from 'axios';
import { getEnv } from '../../../../../../../Packages/Helpers';
import { IApiControl } from '../../../../../types';
import React, { SetStateAction } from 'react';

export const deleteFile = (
  fileId: string,
  control: IApiControl,
  name: string,
  jwt: string | null,
  setErrorMessage: React.Dispatch<SetStateAction<string | null>>,
) => {
  axios
    .post(
      `${getEnv('API_PROTOCOL')}://${getEnv(
        'API_HOST',
      )}/control/delete_upfile?file_id=${fileId}&control_id=${
        control.control_id
      }&file_name=${name}`,
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
        'Une erreur est survenue lors de la suppression du fichier',
      );
    });
};
