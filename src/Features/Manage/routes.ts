import { router } from 'Services';
import { Manage } from 'Features/Manage';

router.registerRoute({
  name: 'manage',
  path: '/manage',
  component: Manage,
  exact: true,
  strict: false,
  sensitive: false,
});
