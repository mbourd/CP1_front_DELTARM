import { apiRouter } from 'Services';
import { ISelectData } from 'Shared/components';

interface IApiValidator {
  val_first_name: string;
  val_last_name: string;
  val_user_id: string;
}

export interface IData {
  error: boolean;
  errorMessage?: string;
  type: 'GET_VALIDATORS' | 'ASK_VALIDATION' | 'LINKED_FILES_VALIDATION';
  validators: Record<string, ISelectData>;
}

apiRouter.registerRoute({
  name: 'getValidators',
  path: '/validate/validator',
  method: 'get',
  handler: (response): any => {
    const validators: Record<string, ISelectData> = {};

    const apiValidators: IApiValidator[] = response.data.validator_list;
    apiValidators.map((validator) => {
      validators[validator.val_user_id] = {
        id: validator.val_user_id,
        label: validator.val_last_name + ' ' + validator.val_first_name,
        value: validator.val_user_id,
      };

      return validator;
    });

    // response?.data?.linkable_files,

    return {
      error: false,
      response: {
        linkable_files: [
          {
            file_uuid: '1',
            file_name: 'asim',
            file_avenant: 'dfdsa',
            file_creation_date: '2/11/22',
            file_creation_by: 'aswe',
          },
          {
            file_uuid: '2',
            file_name: 'asim',
            file_avenant: 'dfdsa',
            file_creation_date: '2/11/22',
            file_creation_by: 'aswe',
          },
        ],
        validators,
        unmodified_validators: response?.data?.validator_list,
      },
      type: 'GET_VALIDATORS',
    };
  },
});

apiRouter.registerRoute({
  name: 'askValidation',
  path: '/validate/ask',
  method: 'post',
  handler: (response): IData => {
    return {
      validators: {},
      type: 'ASK_VALIDATION',
      error: !response.data.return_message,
      errorMessage: response.data.return_message,
    };
  },
});
