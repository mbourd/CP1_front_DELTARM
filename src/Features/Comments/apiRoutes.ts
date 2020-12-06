import { apiRouter, getEnv } from 'Services';
import { IFileComment } from './types';

interface IApiFileComment {
  comment_id: number;
  comment_text: string;
  comment_ts: string;
  comment_user_name: string;
}

apiRouter.registerRoute({
  name: 'getFileComments',
  path: '/comment/file',
  method: 'get',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: '1',
  },
  handler: (response): IFileComment[] => {
    const data: IApiFileComment[] = response.data;
    const comments: IFileComment[] = [];

    data.map((datum) => {
      comments.push({
        id: datum.comment_id,
        message: datum.comment_text,
        date: datum.comment_ts,
        user: datum.comment_user_name,
      });

      return datum;
    });

    return comments;
  },
});
