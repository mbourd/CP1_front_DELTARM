import { apiRouter, getEnv } from 'Services';

export interface IApiStage {
  stage_code: string;
  stage_id: number;
  stage_name: string;
}

export interface IApiState {
  state_code: string;
  state_color: string;
  state_id: number;
  state_name: string;
}

apiRouter.registerRoute({
  name: 'manageFilters',
  path: '/manage/reference',
  method: 'get',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: getEnv('USER_ID'),
  },
  handler: (data) => {
    return {
      stages: data.data.stages,
      states: data.data.states,
    };
  },
});
