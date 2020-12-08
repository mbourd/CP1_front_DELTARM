import { apiRouter, getEnv } from 'Services';

apiRouter.registerRoute({
  name: 'actionRejectValidation',
  path: '/validate/reject',
  method: 'post',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: getEnv('USER_ID'),
  },
});
