import { apiRouter } from 'Services';
import { ISelectData } from 'Shared/components';
import { AppActionContextType } from 'Shared/types';

export interface IFileSearchApiReturn {
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
}

export interface IFileSearchFullResult {
  file_avenant: string;
  file_borrower: string;
  file_id: string;
  file_num: string;
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

    return {
      error: !data.data.data_file,
      errorMessage: data.data.return_message,
      fileId: data.data.file_id,
      bottomMessage: data.data.msg_bottom,
      topMessage: data.data.msg_top,
      productList,
      file: data.data.data_file,
      fileBorrower: data.data.file_borrower,
      fileCodecp: data.data.file_codecp,
      fileManager: data.data.file_manager,
      fileProduit: data.data.file_produit,
    };
  },
});
