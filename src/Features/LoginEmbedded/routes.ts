import { LoginEmbedded, LoginErrorEmbedded } from 'Features/LoginEmbedded';
import { router } from 'Services';

router.registerRoute({
  name: 'loginEmbedded',
  path: '/embedded/login',
  component: LoginEmbedded,
  exact: true,
  strict: false,
  sensitive: false,
});

router.registerRoute({
  name: 'loginEmbeddedError',
  path: '/embedded/login/error',
  component: LoginErrorEmbedded,
  exact: true,
  strict: false,
  sensitive: false,
});
