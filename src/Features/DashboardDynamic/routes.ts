import { router } from 'Services';
import { DashboardDynamic } from 'Features/DashboardDynamic';

router.registerRoute({
  name: 'dashboardDynamic',
  path: '/',
  component: DashboardDynamic,
  exact: true,
  strict: false,
  sensitive: false,
});
