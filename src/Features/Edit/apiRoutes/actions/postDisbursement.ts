import { apiRouter, getEnv } from 'Services';

apiRouter.registerRoute({
  name: 'actionPostDisbursement',
  path: '/file/post_dec',
  method: 'post',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: getEnv('USER_ID'),
  },
});
