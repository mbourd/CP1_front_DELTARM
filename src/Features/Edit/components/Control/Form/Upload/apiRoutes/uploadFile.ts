import axios from 'axios';
import { getEnv } from '../../../../../../../Packages/Helpers';
import { IApiControl, IUploadDetail } from '../../../../../types';
import React, { SetStateAction } from 'react';

export const uploadFile = (
  fileId: string,
  control: IApiControl,
  newUploadFile: File,
  jwt: string | null,
  setCurrentUploadFile: React.Dispatch<SetStateAction<IUploadDetail[] | null>>,
  setErrorMessage: React.Dispatch<SetStateAction<string | null>>,
  setNewUploadFile: React.Dispatch<SetStateAction<File | null>>,
) => {
  const formData = new FormData();
  formData.append('file', newUploadFile);
  const fileName = newUploadFile.name;

  axios
    .post(
      `${getEnv('API_PROTOCOL')}://${getEnv(
        'API_HOST',
      )}/control/set_value?file_id=${fileId}&elm_id=${
        control.control_id
      }&elm_val=${fileName}&control_family=${control.control_family}`,
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
      setNewUploadFile(null);
      return setCurrentUploadFile(res.data.data.file_detail);
    })
    .catch((err) => {
      if (err.response.data.error_msg) {
        return setErrorMessage(err?.response?.data?.error_msg);
      }
    });
};
