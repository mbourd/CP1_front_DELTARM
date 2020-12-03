import { apiRouter, getEnv } from 'Services';

export interface INonCaseData {
  error: boolean;
  errorMessage?: string;
  returnMessage?: string;
}

apiRouter.registerRoute({
  name: 'fileNonCase',
  path: '/file/noncase',
  method: 'post',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: 1,
  },
  handler: (response): INonCaseData => {
    return {
      error: response.return_code !== 1,
      errorMessage: response.error_message,
      returnMessage: response.return_message,
    };
  },
});
