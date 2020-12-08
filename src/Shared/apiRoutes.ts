import { apiRouter, getEnv } from 'Services';

apiRouter.registerRoute({
  name: 'AIVUrl',
  path: '/aiv_url',
  method: 'get',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: getEnv('USER_ID'),
  },
});
