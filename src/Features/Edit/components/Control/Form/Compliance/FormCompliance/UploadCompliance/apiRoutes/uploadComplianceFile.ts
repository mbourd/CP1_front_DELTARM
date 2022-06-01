import axios from 'axios';
import React, { SetStateAction } from 'react';
import {
  IApiComplianceFields,
  IUploadDetail,
} from '../../../../../../../types';
import { getEnv } from '../../../../../../../../../Packages/Helpers';

export const uploadComplianceFile = (
  fileId: string,
  controlId: string,
  compliance: IApiComplianceFields,
  newUploadFile: File,
  jwt: string | null,
  setCurrentUploadFile: React.Dispatch<SetStateAction<IUploadDetail[] | null>>,
  setErrorMessage: React.Dispatch<SetStateAction<string | null>>,
) => {
  const formData = new FormData();
  formData.append('file', newUploadFile);
  const fileName = newUploadFile.name;
  axios
    .post(
      `${getEnv('API_PROTOCOL')}://${getEnv(
        'API_HOST',
      )}/control/set_value?file_id=${fileId}&elm_id=${controlId}&elm_val=${fileName}&control_family=${
        compliance.compliance_elm_family
      }&compliance_id=${compliance.compliance_id}`,
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

      return setCurrentUploadFile(res.data.data.file_detail);
    })
    .catch((err) => {
      return setErrorMessage(err.response.data.error_msg);
    });
};
