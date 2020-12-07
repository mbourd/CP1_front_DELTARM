import { router } from 'Services';
import { Validation } from 'Features/Validation';

router.registerRoute({
  name: 'validation',
  path: '/file/:id/validation',
  component: Validation,
  exact: true,
  strict: false,
  sensitive: false,
  props: {
    title: 'Validation',
    apiRouteName: 'validation',
    apiSaveControlRouteName: 'setControlValueValidation',
  },
});
