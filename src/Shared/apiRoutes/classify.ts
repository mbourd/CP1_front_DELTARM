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
  handler: (response): INonCaseData => {
    return {
      error: response.data.return_code !== 1,
      errorMessage: response.data.error_message,
      returnMessage: response.data.return_message,
    };
  },
  callState: () => {
    return 'SUCCESS';
  },
});
