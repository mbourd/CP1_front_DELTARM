import { apiRouter, getEnv } from 'Services';
import { editValidationHandlerCallback } from 'Features/Edit';

apiRouter.registerRoute({
  name: 'validation',
  path: '/validate',
  method: 'get',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: getEnv('USER_ID'),
  },
  handler: (response: any) => {
    try {
      return editValidationHandlerCallback(response);
    } catch (e) {
      return null;
    }
  },
});

apiRouter.registerRoute({
  name: 'setControlValueValidation',
  path: '/control/set_value_validate',
  method: 'post',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: getEnv('USER_ID'),
  },
});

apiRouter.registerRoute({
  name: 'acceptValidation',
  path: '/validate/accept',
  method: 'post',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: getEnv('USER_ID'),
  },
});

apiRouter.registerRoute({
  name: 'rejectValidation',
  path: '/validate/reject',
  method: 'post',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: getEnv('USER_ID'),
  },
});
