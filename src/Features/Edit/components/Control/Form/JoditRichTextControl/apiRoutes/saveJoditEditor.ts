import axios from 'axios';
import { getEnv } from '../../../../../../../Packages/Helpers';
import { IApiControl } from '../../../../../types';
import React from 'react';

export const saveJoditEditor = (
  fileId: string,
  control: IApiControl,
  editorContent: string,
  jwt: string | null,
  setMessage: React.Dispatch<React.SetStateAction<string | null>>,
) => {
  axios
    .post(
      `${getEnv('API_PROTOCOL')}://${getEnv(
        'API_HOST',
      )}/control/set_value?file_id=${fileId}&elm_id=${
        control.control_id
      }&control_family=${control.control_family}&elm_val=`,
      editorContent,
      {
        headers: {
          Authorization: jwt,
          'Content-type': 'application/json',
        },
      },
    )
    .catch((err) => {
      if (err?.response?.data?.data?.error_msg) {
        return setMessage(err.response.data.data.error_msg);
      }
    });
};
