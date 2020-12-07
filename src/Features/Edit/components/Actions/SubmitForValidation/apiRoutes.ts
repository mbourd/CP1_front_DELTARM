import { apiRouter, getEnv } from 'Services';
import { ISelectData } from 'Shared/components';

interface IApiValidator {
  val_first_name: string;
  val_last_name: string;
  val_user_id: string;
}

export interface IData {
  error: boolean;
  errorMessage?: string;
  type: 'GET_VALIDATORS' | 'ASK_VALIDATION';
  validators: Record<string, ISelectData>;
}

apiRouter.registerRoute({
  name: 'getValidators',
  path: '/validate/validator',
  method: 'get',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: getEnv('USER_ID'),
  },
  handler: (response): IData => {
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

    return {
      error: false,
      validators,
      type: 'GET_VALIDATORS',
    };
  },
});

apiRouter.registerRoute({
  name: 'askValidation',
  path: '/validate/ask',
  method: 'post',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: getEnv('USER_ID'),
  },
  handler: (response): IData => {
    return {
      validators: {},
      type: 'ASK_VALIDATION',
      error: !response.data.return_message,
      errorMessage: response.data.return_message,
    };
  },
});
