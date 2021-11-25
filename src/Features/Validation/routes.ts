import { router } from 'Services';
import { Validation } from 'Features/Validation';

router.registerRoute({
  name: 'validation',
  path: '/file/validation/:id',
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
