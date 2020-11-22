import { Login } from 'Features/Login';
import { router } from 'Services';

router.registerRoute({
  name: 'login',
  path: '/login',
  component: Login,
  exact: true,
  strict: false,
  sensitive: false,
});
