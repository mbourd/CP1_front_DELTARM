import { Login, LoginError } from 'Features/Login';
import { router } from 'Services';

router.registerRoute({
  name: 'login',
  path: '/login',
  component: Login,
  exact: true,
  strict: false,
  sensitive: false,
});

router.registerRoute({
  name: 'loginError',
  path: '/login/error',
  component: LoginError,
  exact: true,
  strict: false,
  sensitive: false,
});
