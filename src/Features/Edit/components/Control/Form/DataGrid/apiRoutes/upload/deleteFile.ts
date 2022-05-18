import axios from 'axios';
import React, { SetStateAction } from 'react';
import { getEnv } from '../../../../../../../../Packages/Helpers';
import { IUploadDetail } from '../../../../../../types';

export const deleteFile = (
  fileId: string,
  controlId: string,
  rowNum: number,
  columnId: number,
  name: string,
  jwt: string | null,
  setErrorMessage: React.Dispatch<SetStateAction<string | null>>,
  setCurrentUploadFile: React.Dispatch<SetStateAction<IUploadDetail[] | null>>,
) => {
  axios
    .post(
      `${getEnv('API_PROTOCOL')}://${getEnv(
        'API_HOST',
      )}/control/data_grid/delete_upfile?file_id=${fileId}&control_id=${controlId}&file_name=${name}&row_num=${rowNum}&col_elm_id=${columnId}`,
      {},
      {
        headers: {
          Authorization: jwt,
        },
        responseType: 'json',
      },
    )
    .then((res) => {
      setErrorMessage(null);

      return setCurrentUploadFile(res.data.data.file_detail);
    })
    .catch(() => {
      return setErrorMessage(
        'Une erreur est survenue lors de la suppression du fichier',
      );
    });
};
