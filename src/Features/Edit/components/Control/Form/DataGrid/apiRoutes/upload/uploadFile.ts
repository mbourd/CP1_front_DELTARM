import axios from 'axios';
import { getEnv } from '../../../../../../../../Packages/Helpers';
import { IUploadDetail } from '../../../../../../types';
import React, { SetStateAction } from 'react';

export const uploadFile = (
  fileId: string,
  controlId: string,
  rowNum: number,
  columnId: number,
  newUploadFile: File,
  jwt: string,
  setCurrentUploadFile: React.Dispatch<SetStateAction<IUploadDetail[] | null>>,
  setErrorMessage: React.Dispatch<SetStateAction<string | null>>,
) => {
  if (!newUploadFile) return;

  const formData = new FormData();
  formData.append('file', newUploadFile);
  const fileName = newUploadFile.name;
  axios
    .post(
      `${getEnv('API_PROTOCOL')}://${getEnv(
        'API_HOST',
      )}/control/data_grid/save_value?file_id=${fileId}&elm_id=${controlId}&elm_val=${fileName}&row_num=${rowNum}&col_elm_id=${columnId}`,
      formData,
      {
        headers: {
          Authorization: jwt,
          'Content-type': 'multipart/form-data',
        },
      },
    )
    .then((res) => {
      setErrorMessage(null);
      if (res.data.data.file_detail) {
        return setCurrentUploadFile(res.data.data.file_detail);
      }
    })
    .catch((err) => {
      if (err.response.data.error_msg) {
        return setErrorMessage(err.response.data.error_msg);
      }
    });
};
