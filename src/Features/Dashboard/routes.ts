import { router } from 'Services';
import { Dashboard } from 'Features/Dashboard';

router.registerRoute({
  name: 'dashboard',
  path: '/',
  component: Dashboard,
  exact: true,
  strict: false,
  sensitive: false,
});
