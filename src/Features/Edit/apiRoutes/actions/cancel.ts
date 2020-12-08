import { apiRouter, getEnv } from 'Services';

apiRouter.registerRoute({
  name: 'actionCancel',
  path: '/file/cancel',
  method: 'post',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: getEnv('USER_ID'),
  },
});
