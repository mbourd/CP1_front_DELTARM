import { apiRouter } from 'Services';
import { ISelectData } from 'Shared/components';
import { AppActionContextType } from 'Shared/types';

export interface IFileSearchApiReturn {
  fileFields?: Record<string, string>;
  error: boolean;
  errorMessage: string | null;
  fileId: string | null;
  fileContext?: AppActionContextType;
  bottomMessage?: string;
  topMessage?: string;
  productList?: Record<string, ISelectData>;
  file?: { key: string; type: string; value: string }[];
  fileBorrower?: string;
  fileCodecp?: string;
  fileManager?: string;
  fileProduit?: string;
  routeForFileCreation?: string;
}

export interface fileField {
  key: string;
  value: string;
}

export interface IFileSearchFullResult {
  file_avenant: string;
  file_borrower: string;
  file_context: AppActionContextType;
  file_id: string;
  file_num: string;
}

export interface IMissingField {
  format: string | null;
  key: string;
  label: string;
  value?: string | null;
  type: string | null;
  option?: ISelectData[];
}

export interface IKSIOPManualInput {
  buttons: Array<{ action: string; label: string; order: string }>;
  fields: IMissingField[];
  manualFile: { key: string; value: string }[];
  header: string;
  title: string;
}

apiRouter.registerRoute({
  name: 'searchFile',
  path: '/file/search',
  method: 'get',
  type: 'DRM',
  handler: (data): IFileSearchApiReturn => {
    return {
      error: !data.data.file_id,
      errorMessage: data.data.return_message,
      fileId: data.data.file_id,
      fileContext: data.data.file_context,
      fileFields: data.data.file_fields,
    };
  },
});

apiRouter.registerRoute({
  name: 'KSIOPManualInput',
  path: '/ksiop_manual_input',
  method: 'post',
  type: 'KSIOP',
  handler: (data): IKSIOPManualInput => {
    const fields: IMissingField[] = data.data.fields.map((field: IMissingField) => {
      if (field.type === 'selectList') {
        const newOptions: ISelectData[] = [];
        field.option?.map((option: any) => {
          newOptions[option.id] = {
            id: option.id,
            label: option.label,
            value: option.value,
          };
          field.option = newOptions;
        });
      }

      return field;
    });

    return {
      buttons: data.data.btn,
      fields,
      manualFile: data.data.file,
      header: data.data.header,
      title: data.data.title,
    };
  },
});

apiRouter.registerRoute({
  name: 'searchFileFull',
  path: '/file/search_full',
  method: 'get',
  type: 'DRM',
  handler: (data): IFileSearchFullResult[] => {
    return data.data;
  },
});

apiRouter.registerRoute({
  name: 'createFile',
  path: '/file/create',
  method: 'post',
  type: 'DRM_CREATE',
  handler: (data): IFileSearchApiReturn => {
    return {
      error: !data.data.file_id,
      errorMessage: data.data.return_message,
      fileId: data.data.file_id,
      fileFields: data.data.file_fields,
    };
  },
});

apiRouter.registerRoute({
  name: 'searchFileKSIOP',
  path: '/call_api_bpi',
  method: 'get',
  type: 'KSIOP',
  handler: (data): IFileSearchApiReturn => {
    const productList: Record<string, ISelectData> = {};

    data.data.product_list.map((product: any) => {
      productList[product.prod_id] = {
        id: product.prod_id,
        label: product.prod_name,
        value: product.prod_id,
      };

      return product;
    });
    const fileFields: Record<string, string> = {};

    data.data.file_fields.map((field: any) => {
      fileFields[field.key] = field.value;

      return field;
    });

    return {
      error: !data.data.data_file,
      errorMessage: data.data.return_message,
      fileId: data.data.file_id,
      bottomMessage: data.data.msg_bottom,
      topMessage: data.data.msg_top,
      productList,
      file: data.data.data_file,
      fileFields,
      routeForFileCreation: data.data.route_for_file_creation,
    };
  },
});
