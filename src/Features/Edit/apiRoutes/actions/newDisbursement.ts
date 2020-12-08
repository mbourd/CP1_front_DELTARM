import { apiRouter, getEnv } from 'Services';

apiRouter.registerRoute({
  name: 'actionNewDisbursement',
  path: '/file/new_dec',
  method: 'post',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: getEnv('USER_ID'),
  },
});
