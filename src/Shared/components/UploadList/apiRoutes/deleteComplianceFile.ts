import axios from 'axios';
import React, { SetStateAction } from 'react';
import { getEnv } from '../../../../Packages/Helpers';
import {
  IApiComplianceFields,
  IUploadDetail,
} from '../../../../Features/Edit/types';

export const deleteComplianceFile = (
  fileId: string,
  controlId: string,
  name: string,
  jwt: string,
  setErrorMessage: React.Dispatch<SetStateAction<string | null>>,
  setCurrentUploadFile: React.Dispatch<SetStateAction<IUploadDetail[] | null>>,
  compliance: IApiComplianceFields,
) => {
  axios
    .post(
      `${getEnv('API_PROTOCOL')}://${getEnv(
        'API_HOST',
      )}/control/delete_upfile?file_id=${fileId}&control_id=${controlId}&file_name=${name}&control_family=${
        compliance.compliance_elm_family
      }&compliance_id=${compliance.compliance_id}`,
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
