import { apiRouter, router } from 'Services';
import { Edit } from 'Features/Edit';

router.registerRoute({
  name: 'edit',
  path: '/file/:id/edit',
  component: Edit,
  exact: true,
  strict: false,
  sensitive: false,
  props: {
    title: 'Edition',
    apiRouteName: 'edit',
    apiSaveControlRouteName: 'setControlValue',
  },
});

apiRouter.registerRoute({
  name: 'downloadFile',
  path: '/control/get_upfile',
  method: 'get',
});
