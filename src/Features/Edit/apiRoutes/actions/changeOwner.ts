import { apiRouter } from 'Services';

apiRouter.registerRoute({
  name: 'actionChangeOwner',
  path: '/file/set_owner',
  method: 'post',
});
