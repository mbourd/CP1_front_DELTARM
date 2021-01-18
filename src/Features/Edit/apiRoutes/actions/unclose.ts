import { apiRouter } from 'Services';

apiRouter.registerRoute({
  name: 'actionUnclose',
  path: '/file/unclose',
  method: 'post',
});
