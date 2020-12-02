import { apiRouter, getEnv } from 'Services';
import { ISelectData } from 'Shared/components';

export interface IFileSearchApiReturn {
  error: boolean;
  errorMessage: string | null;
  fileId: string | null;
  type: 'DRM' | 'KSIOP' | 'DRM_CREATE';
  bottomMessage?: string;
  topMessage?: string;
  productList?: Record<string, ISelectData>;
  file?: { key: string; type: string; value: string }[];
}

apiRouter.registerRoute({
  name: 'searchFile',
  path: '/file/search',
  method: 'get',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: '1',
  },
  handler: (data): IFileSearchApiReturn => {
    return {
      error: !data.data.file_id,
      errorMessage: data.data.return_message,
      fileId: data.data.file_id,
      type: 'DRM',
    };
  },
});

apiRouter.registerRoute({
  name: 'createFile',
  path: '/file/create',
  method: 'post',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: '1',
  },
  handler: (data): IFileSearchApiReturn => {
    return {
      error: !data.data.file_id,
      errorMessage: data.data.return_message,
      fileId: data.data.file_id,
      type: 'DRM_CREATE',
    };
  },
});

apiRouter.registerRoute({
  name: 'searchFileKSIOP',
  path: '/call_api_bpi',
  method: 'get',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: '1',
  },
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

    return {
      error: !data.data.data_file,
      errorMessage: data.data.return_message,
      fileId: data.data.file_id,
      type: 'KSIOP',
      bottomMessage: data.data.msg_bottom,
      topMessage: data.data.msg_top,
      productList,
      file: data.data.data_file,
    };
  },
});
