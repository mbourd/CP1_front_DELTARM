import { router } from 'Services';
import { Logout } from './components/Logout';

router.registerRoute({
  name: 'logout',
  path: '/logout',
  component: Logout,
  exact: true,
  strict: false,
  sensitive: false,
});
