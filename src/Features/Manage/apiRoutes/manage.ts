import { apiRouter, getEnv } from 'Services';
import { ICard, IData } from '../components/Card/types';

interface IApiFileData {
  label: string;
  value: string;
  type: string;
}

interface IApiFile {
  file_id: number;
  file_nb_comment: number;
  stage_id: number;
  stage_name: string;
  state_id: number;
  state_name: string;
  state_color: string;
  file_data: IApiFileData[];
}

apiRouter.registerRoute({
  name: 'manage',
  path: '/manage',
  method: 'get',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: 1,
  },
  handler: (data) => {
    const files: ICard[] = [];

    const apiFiles: IApiFile[] = data.data;

    apiFiles.map((apiFile) => {
      const fileData: IData[] = [];
      apiFile.file_data.map((apiFileData) => {
        let value = apiFileData.value;
        if (apiFileData.type === 'date') {
          const date = new Date(value);
          value = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
        }

        fileData.push({
          label: apiFileData.label,
          value: value,
        });

        return apiFileData;
      });

      files.push({
        id: apiFile.file_id,
        color: apiFile.state_color,
        comments: apiFile.file_nb_comment,
        data: fileData,
      });

      return apiFile;
    });

    return files;
  },
});
