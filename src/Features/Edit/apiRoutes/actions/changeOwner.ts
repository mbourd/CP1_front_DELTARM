import { apiRouter, getEnv } from 'Services';

apiRouter.registerRoute({
  name: 'actionChangeOwner',
  path: '/file/set_owner',
  method: 'post',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: getEnv('USER_ID'),
  },
});
