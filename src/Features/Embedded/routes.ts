import { router } from 'Services';
import { EmbeddedGate } from './components/EmbeddedGate/EmbeddedGate';

router.registerRoute({
  name: 'embedded',
  path: '/embedded/:context',
  component: EmbeddedGate,
  exact: true,
  strict: false,
  sensitive: false,
});
