import { apiRouter, getEnv } from 'Services';

export interface INonCaseData {
  error: boolean;
  errorMessage?: string;
  returnMessage?: string;
}

apiRouter.registerRoute({
  name: 'classify',
  path: '/file/noncase',
  method: 'post',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: 1,
  },
});
