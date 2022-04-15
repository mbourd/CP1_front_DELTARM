import axios from 'axios';
import React, { SetStateAction } from 'react';
import { getEnv } from '../../../../Packages/Helpers';
import {
  IComplianceData,
  IUploadDetail,
} from '../../../../Features/Edit/types';

export const deleteComplianceFile = (
  fileId: string,
  controlId: string,
  name: string,
  jwt: string | null,
  setErrorMessage: React.Dispatch<SetStateAction<string | null>>,
  setCurrentUploadFile: React.Dispatch<SetStateAction<IUploadDetail[] | null>>,
  compliance: IComplianceData,
) => {
  axios
    .post(
      `${getEnv('API_PROTOCOL')}://${getEnv(
        'API_HOST',
      )}/control/delete_upfile?file_id=${fileId}&control_id=${controlId}&file_name=${name}&control_family=${
        compliance.family
      }&compliance_id=${compliance.id}`,
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
