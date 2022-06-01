import { apiRouter, router } from 'Services';
import { Edit } from 'Features/Edit';
import { IApiComplianceData } from './types';
import { EmbeddedGate } from '../Embedded/components/EmbeddedGate/EmbeddedGate';

router.registerRoute({
  name: 'embedded',
  path: '/embedded',
  component: EmbeddedGate,
  exact: true,
  strict: false,
  sensitive: false,
});

router.registerRoute({
  name: 'edit',
  path: '/file/edit/:id?',
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

apiRouter.registerRoute({
  name: 'getCompliance',
  path: '/control/get_compliance_values',
  method: 'get',
  handler: (response): IApiComplianceData => {
    return response.data;
  },
});
