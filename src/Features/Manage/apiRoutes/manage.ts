import { apiRouter } from 'Services';
import { ICard, IData } from '../components/Card/types';
import { AppActionContextType } from 'Shared/types';

interface IApiFileData {
  label: string;
  value: string;
  type: string;
}

interface IApiFile {
  file_id: string;
  file_nb_comment: number;
  stage_id: number;
  stage_name: string;
  state_id: number;
  state_name: string;
  state_color: string;
  file_data: IApiFileData[];
  file_context: AppActionContextType;
}

apiRouter.registerRoute({
  name: 'manage',
  path: '/manage',
  method: 'get',
  handler: (data) => {
    const files: ICard[] = [];

    const apiFiles: IApiFile[] = data.data;

    apiFiles.map((apiFile) => {
      const fileData: IData[] = [];
      apiFile.file_data.map((apiFileData) => {
        let value = apiFileData.value;
        if (apiFileData.type === 'date') {
          const date = new Date(value);
          value =
            date.getDate() +
            '/' +
            (date.getMonth() + 1) +
            '/' +
            date.getFullYear();
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
        context: apiFile.file_context,
      });

      return apiFile;
    });

    return files;
  },
});
