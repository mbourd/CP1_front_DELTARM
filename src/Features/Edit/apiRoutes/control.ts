import { apiRouter } from 'Services';
import { getEnv } from 'Services';

apiRouter.registerRoute({
  name: 'setControlValue',
  path: '/control/set_value',
  method: 'post',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: getEnv('USER_ID'),
  },
});
