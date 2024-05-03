import axios from 'axios';
import { getEnv } from '../../../../../../../Packages/Helpers';

export const saveValueDataGrid = (
  fileId: string,
  row_uuid: string,
  columnId: number,
  rowNum: number,
  jwt: string,
  setGridDetails: any,
  setErrorMessage: any,
  value: string,
) => {
  axios
    .post(
      `${getEnv('API_PROTOCOL')}://${getEnv(
        'API_HOST',
      )}/control/data_grid/save_value?fileId=${fileId}&row_uuid=${row_uuid}&elm_val=${value}&col_elm_id=${columnId}`,
      {},
      {
        headers: {
          Authorization: jwt,
        },
        responseType: 'json',
      },
    )
    .catch(() => {
      return setErrorMessage('Une erreur est survenue');
    });
};
